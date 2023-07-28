import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { DolphinService } from '../services/dolphin.service';

@Component({
  selector: 'app-redeem-blibli',
  templateUrl: './redeem-blibli.page.html',
  styleUrls: ['./redeem-blibli.page.scss'],
})
export class RedeemBlibliPage implements OnInit {
  item: any;
  balance: any;
  poin=0;
  qty= 1;
  profile:any;
  phonenumber:any;
  namapemilik:any;
  OTP:any;
  header_text_confirm:any;
  pesan_text_otp_sms:any;
  pesan_text_otp_wa:any;
  verifikasi_text:any;
  verifikasi_pesan:any;
  header_text_redeem:any;
  pesan_text_redeem:any;
  title:any;
  dataitem:any;
  databli:any;
  

  constructor(
    private dolphinService: DolphinService,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {
    
  }

  ngOnInit() {
    const currentState = this.router.getCurrentNavigation();
    this.item = currentState.extras.state.poin;
    this.poin = this.item
    this.balance = currentState.extras.state.balance;
    this.title = currentState.extras.state.title;
    this.dataitem = currentState.extras.state.dataitems.dataapi.data;
    this.databli = currentState.extras.state.dataitems.retdata;
    console.log('cekapidataitem',this.databli);
    
    this.dolphinService.getdetailprofile().subscribe(data => {
        
      this.profile = data[0]
      // console.log('PROFIL', this.profile)
      this.phonenumber = this.profile.no_hp;
      this.namapemilik = this.profile.NAMA_PEMILIK;
      if(!this.phonenumber) {
        this.showalert("Oops..", "Lengkapi nomor handphone pada halaman profil Anda untuk melakukan redeem");
        this.router.navigateByUrl('/', { replaceUrl: true });
      }
    });

    this.dolphinService.text_otp().subscribe(data=>{
      console.log('cekpesanotp',data);
      this.header_text_confirm = data.header_text_confirm;
      this.pesan_text_otp_sms = data.pesan_text_otp_sms;
      this.pesan_text_otp_wa = data.pesan_text_otp_wa;
      this.verifikasi_text = data.verifikasi_text;
      this.verifikasi_pesan = data.verifikasi_pesan;
      this.header_text_redeem = data.header_text_redeem;
      this.pesan_text_redeem = data.pesan_text_redeem;
    })
  }

  plus() {
    if((this.item*(this.qty+1)) < this.balance.remain_point_new) {
      this.qty++
      this.poin = this.item*this.qty
    }
  }

  minus() {
    if(this.qty > 1) {
      this.qty--
      this.poin = this.item*this.qty
    }
  }
  setuptukarpoin(){
    this.dolphinService.setupotp().subscribe(data => {
      console.log(data.status_sms)
        if(data.status_sms==1){
          this.tukarpoin();  
        } else {
          this.tukarpoinsms();
        }
    });
  }
  async tukarpoin() {
   
    let phoneNum = this.phonenumber.replace(/\s/g,'').trim();
    if (phoneNum.charAt(0) == '0') {
      phoneNum = phoneNum.replace('0', '62');
    }
    const alert = await this.alertController.create({
      header: this.verifikasi_text,
      message: this.verifikasi_pesan+ this.phonenumber,
      buttons: [
        {
          text: 'Whatsapp',
          role: 'confirm',
          handler: () => {
            this.dolphinService.sendotp(phoneNum,'wa').subscribe(data => {
              this.OTP = data.otp
              console.log('cekotp',data)
              this.verifyOTP(data.otp,'wa')
               // log auth
              this.dolphinService.logs_auth('wa','Redeem_lm').subscribe(data => {});
            });
          },
        },
        {
          text: 'SMS',
          role: 'confirm',
          handler: () => {
            this.dolphinService.sendotp(phoneNum,'sms').subscribe(data => {
              this.OTP = data.otp
              console.log('cekotp',data)
              this.verifyOTP(data.otp,'sms')
              this.dolphinService.logs_auth('sms','Redeem_lm').subscribe(data => {});
            });
          },
        },
      ],
    });
    await alert.present();
  }

  async tukarpoinsms() {
   
    let phoneNum = this.phonenumber.replace(/\s/g,'').trim();
    if (phoneNum.charAt(0) == '0') {
      phoneNum = phoneNum.replace('0', '62');
    }
    const alert = await this.alertController.create({
      header: this.verifikasi_text,
      message: this.verifikasi_pesan+ phoneNum,
      buttons: [
        {
          text: 'Tidak',
          handler: () => {
            // console.log('Tidak')
          }
        },
        {
          text: 'Ya, Kirimkan sekarang',
          handler: () => {
            this.dolphinService.sendotp(phoneNum,'sms').subscribe(data => {
              this.OTP = data.otp
              console.log('cekotp',data)
              this.verifyOTP(data.otp,'sms')
            });
            // this.verifyOTP(12345)
          }
        },
    ] 
     
    });
    await alert.present();
  }

  async verifyOTP(otp_code,tipe) {
   let  pesanotp;
    if(tipe=="wa"){
      pesanotp = this.pesan_text_otp_wa;
    } else {
      pesanotp = this.pesan_text_otp_sms;
    }
    const alert = await this.alertController.create({
      header: this.header_text_confirm,
      message: pesanotp,
      inputs: [
              {
                name: 'kodeotp',
                placeholder: 'isi dengan 5 angka kode OTP..',
                type: 'number'
              }],
      buttons: [
            {
              text: 'Konfirmasi OTP',
              handler: (data) => {
                if(data.kodeotp == otp_code) {
                  this.prosesRedeem();
                } else {
                  this.showalert('Oops..', 'Kode OTP tidak sesuai');
                }
              }
            },
      ]
    });
    await alert.present();
  }

  async prosesRedeem() {
    const alert = await this.alertController.create({
      header: this.header_text_redeem,
      message: this.pesan_text_redeem +this.poin+' poin dengan hadiah ini?',
      buttons: [
        {
          text: 'Tidak',
          handler: () => {
          }
        },
        {
          text: 'Ya, saya yakin',
          handler: () => {
            let sumbuy = this.qty * this.dataitem.price.original;
          //  console.log('cekdataapi',sumbuy);
            let navigationExtras: NavigationExtras = { state: { 
              redeem_type: 'gift', 
              redeem_code: this.databli.redeem_code,
              point_redeem: this.databli.point,
              type: 'gift',
              jumlah : this.qty,
              bayar: this.qty * this.dataitem.price.original,
              gift_name: this.dataitem.product.name,
              sku: this.databli.sku
              
            }};
           this.router.navigate(['redeem-confirm-blibli'], navigationExtras);
          }
        }
      ]
    });
  
    await alert.present();  
  }

  async showalert(title, message) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK'],
    });
  
    await alert.present();  
  }

  async doLoading(msg) {
    const loading = await this.loadingController.create({
      message: msg,
      backdropDismiss: false
    });
    await loading.present();
  }
}
