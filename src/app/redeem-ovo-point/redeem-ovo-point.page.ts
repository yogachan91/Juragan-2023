import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { DolphinService } from '../services/dolphin.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-redeem-ovo-point',
  templateUrl: './redeem-ovo-point.page.html',
  styleUrls: ['./redeem-ovo-point.page.scss'],
})
export class RedeemOvoPointPage implements OnInit {
  ovoList: any;
  currentPoin: any;
  selectedData: any;
  balance: any;
  phonenumber:any;
  profile:any;
  namapemilik: any;
  OTP: any;
  ewallettypeText: string = 'OVO';
  ewallettype: string = 'ovo';

  header_text_confirm:any;
  pesan_text_otp_sms:any;
  pesan_text_otp_wa:any;
  verifikasi_text:any;
  verifikasi_pesan:any;
  header_text_redeem:any;
  pesan_text_redeem:any;
  redeem_ovo_point_text:any;

  constructor(
    private router: Router,
    private loadingController: LoadingController,
    private dolphinService: DolphinService,
    private alertController: AlertController,
    private toastController: ToastController
    ) {
      this.loadData()
    }

  ngOnInit() {
    
  }

  async presentToast() {
    const toast = await this.toastController.create({
      icon: 'information-circle',
      message: 'Memuat data E-Wallet, harap menunggu..',
      color: 'dark'
    });
    toast.present();
  }

  async doLoading(msg) {
    const loading = await this.loadingController.create({
      message: msg,
      backdropDismiss: false
    });
    await loading.present();
  }

  async showalert(title, message) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK'],
    });
  
    await alert.present();  
  }

  loadData() {
    this.presentToast();
    this.selectedData = null
    this.ovoList = null

    
    
    

    this.dolphinService.getpoint().subscribe(data => {
      this.balance = data
    });

    this.dolphinService.getovolist().subscribe((res) => {
      if(res.status == 'success'){
        this.ovoList = res.retdata
      }
      console.log('getovolist', this.ovoList)
      this.toastController.dismiss()
      this.dolphinService.getdetailprofile().subscribe(data => {
        
        this.profile = data[0]
        // console.log('PROFIL', this.profile)
        this.phonenumber = this.profile.no_hp;
        this.namapemilik = this.profile.NAMA_PEMILIK;
        if(!this.phonenumber) {
          this.showalert("Oops..", "Lengkapi nomor handphone pada halaman profil Anda untuk melakukan redeem E-Wallet");
          this.router.navigateByUrl('/', { replaceUrl: true });
          
        // } else if(!this.namapemilik) {
        //   this.showalert("Oops..", "Lengkapi Nama Pemilik Outlet pada halaman profil Anda untuk melakukan redeem E-Wallet");
        //   this.router.navigateByUrl('/', { replaceUrl: true });

        // } else {

        }
      });

      
    })
    this.dolphinService.text_otp().subscribe(data=>{
      console.log('cekpesanotppoin',data);
      this.header_text_confirm = data.header_text_confirm;
      this.pesan_text_otp_sms = data.pesan_text_otp_sms;
      this.pesan_text_otp_wa = data.pesan_text_otp_wa;
      this.verifikasi_text = data.verifikasi_text;
      this.verifikasi_pesan = data.verifikasi_pesan;
      this.header_text_redeem = data.header_text_redeem;
      this.pesan_text_redeem = data.pesan_text_redeem;
    })
  }

  updateSelected(i) {
    this.selectedData = i;
    console.log('Selected', this.selectedData['amount'])
   this.dolphinService.redeem_all_text('ovo_point',this.phonenumber).subscribe((res) => {
      if(res.status == 'success'){
        this.redeem_ovo_point_text = res.retdata;
        console.log('redeem_ovo_point_text', this.phonenumber)
      }
    })
  }

  async tukarpoin() {
    console.log('Selected', this.selectedData)
    console.log('ewallettype', this.ewallettype)
    let phoneNum = this.phonenumber.replace(/\s/g,'').trim();
    if(this.ewallettype != 'ovo') {
      if (phoneNum.charAt(0) == '0') {
        phoneNum = phoneNum.replace('0', '62');
      }  
    }
    const alert = await this.alertController.create({
      header: this.verifikasi_text,
      message: this.verifikasi_pesan + this.phonenumber,
      // buttons: [
      //       {
      //         text: 'Tidak',
      //         handler: () => {
      //           // console.log('Tidak')
      //         }
      //       },
      //       {
      //         text: 'Ya, Kirimkan sekarang',
      //         handler: () => {
      //           // if(this.ewallettype === 'ovo') {
      //           //   //ovo
      //           //   this.checkOvo(phoneNum, this.selectedData['amount']);
      //           //   //.ovo
      //           // } else {
      //             this.sendotp(phoneNum)
      //           // }
      //         }
      //       },
      // ]
      buttons: [
        {
          text: 'Whatsapp',
          handler: () => {
            this.sendotp(phoneNum,'wa')
          }
        },
        {
          text: 'SMS',
          handler: () => {
            this.sendotp(phoneNum,'sms')
          }
        },
  ]
    });
    await alert.present();
  }

  sendotp(n,t) {
    this.dolphinService.sendotp(n,t).subscribe(data => {
      this.OTP = data.otp
      console.log('cekotpredeem',this.OTP);
      this.verifyOTP(data.otp,t)
      if(t=='wa'){
        // log auth
        this.dolphinService.logs_auth('wa','Redeem_ewallet').subscribe(data => {});
      } else {
        // log auth
        this.dolphinService.logs_auth('sms','Redeem_ewallet').subscribe(data => {});
      }
    });
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
    this.doLoading('Memproses Saldo '+this.ewallettypeText+'...')
    this.dolphinService.ovopointredeem(this.selectedData.redeem_code, this.selectedData.point, this.phonenumber).subscribe(data => {
      this.loadingController.dismiss()
      if(data.status === 'success'){
        this.showalert(
          'Redeem Sukses', 
          "Berhasil menukarkan "+ this.selectedData.gift_name + ", redeem akan segera diproses. Saldo "+ this.ewallettypeText +" Anda akan otomatis bertambah dan bisa Anda cek melalui aplikasi "+ this.ewallettypeText +" Anda. Cek pada halaman notifikasi pada aplikasi JURAGAN untuk melihat status redeem Anda."  
        )
        // this.router.navigateByUrl('/', { replaceUrl: true });
        this.router.navigate(['tabs']);
      } else {
        if(data.status === 'err') {
          this.showalert(
            'Oops..', 
            data.message
          )
        } else {   
          this.showalert(
            'Oops..', 
            'Tidak dapat memproses, mohon dicoba kembali.'
          )
        }
      }
    });
  }

}
