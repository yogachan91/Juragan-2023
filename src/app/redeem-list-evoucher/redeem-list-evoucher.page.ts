import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DolphinService } from '../services/dolphin.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-redeem-list-evoucher',
  templateUrl: './redeem-list-evoucher.page.html',
  styleUrls: ['./redeem-list-evoucher.page.scss'],
})
export class RedeemListEvoucherPage implements OnInit {

  pointreward: any;
  selectedData:any;
  balance: any;
  profile:any;
  phonenumber:any;
  namapemilik:any;
  ewallettypeText:any;
  OTP:any;

  header_text_confirm:any;
  pesan_text_otp_sms:any;
  pesan_text_otp_wa:any;
  verifikasi_text:any;
  verifikasi_pesan:any;
  header_text_redeem:any;
  pesan_text_redeem:any;
  redeem_text:any;
  alamattoko:any;
  constructor(
    private dolphinService: DolphinService,
    private alertController: AlertController,
    private toastController: ToastController,
    private loadingController:LoadingController,
    private router: Router
  ) {
    
  }

  ngOnInit() {
    this.presentToast();
    const currentState = this.router.getCurrentNavigation();
    const item = currentState.extras.state.item;
    console.log('ceklistyvoucher.',item)
    this.dolphinService.getpoint().subscribe(data => {
      console.log('datapointuser',data)
      this.balance = data

      this.dolphinService.getreward(item).subscribe((data) => {
        if(data) {
          this.pointreward = data.retdata
          console.log('tolesss',data)
          this.toastController.dismiss();
        }
      })
  
      this.dolphinService.text_otp().subscribe(data=>{
        console.log('cekpesanotpewalet',data);
        this.header_text_confirm = data.header_text_confirm;
        this.pesan_text_otp_sms = data.pesan_text_otp_sms;
        this.pesan_text_otp_wa = data.pesan_text_otp_wa;
        this.verifikasi_text = data.verifikasi_text;
        this.verifikasi_pesan = data.verifikasi_pesan;
        this.header_text_redeem = data.header_text_redeem;
        this.pesan_text_redeem = data.pesan_text_redeem;
      })
  
      this.dolphinService.getdetailprofilesodexo().subscribe(data => {
          
        this.profile = data.retdata[0]
        this.alamattoko = data.alamat_toko[0]
         console.log('PROFILUS', this.alamattoko)
        this.phonenumber = this.profile.no_hp;
        this.namapemilik = this.profile.NAMA_PEMILIK;
        if(!this.phonenumber) {
          this.showalert("Oops..", "Lengkapi nomor handphone pada halaman profil Anda untuk melakukan redeem E-Wallet");
          this.router.navigateByUrl('/', { replaceUrl: true });
          
        } else if(!this.namapemilik) {
          this.showalert("Oops..", "Lengkapi Nama Pemilik Outlet pada halaman profil Anda untuk melakukan redeem E-Wallet");
          this.router.navigateByUrl('/', { replaceUrl: true });
  
        } else {
  
        }
      });

      this.toastController.dismiss();
    });
    
  }

  async presentToast() {
    const toast = await this.toastController.create({
      icon: 'information-circle',
      message: 'Memuat data eVoucher, harap menunggu..',
      color: 'dark'
    });
    toast.present();
  }

  async showalert(title, message) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK'],
    });
  
    await alert.present();  
  }

  updateSelected(i) {
    this.selectedData = i;
    console.log('Selecteddatavoucher',i )
  }
  

  async tukarpoin() {
    let phoneNum = this.phonenumber.replace(/\s/g,'').trim();
    console.log('Selected',phoneNum)
    const alert = await this.alertController.create({
      header: this.verifikasi_text,
      message: this.verifikasi_pesan + this.phonenumber,
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
      console.log('OTPUSERVOUCHER',data.otp)
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
    // this.doLoading('Memproses Saldo ...')
  
    this.dolphinService.redeemsodexo(this.alamattoko,this.selectedData.redeem_code,this.selectedData.point,this.phonenumber).subscribe(data => {
      console.log('sitole holidey',data)
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

  async doLoading(msg) {
    const loading = await this.loadingController.create({
      message: msg,
      backdropDismiss: false
    });
    await loading.present();
  }


}
