import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { DolphinService } from '../services/dolphin.service';
import { AuthenticationService } from '../services/authentication.service';
import { NavigationExtras,Router } from '@angular/router';


@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.page.html',
  styleUrls: ['./reset-pass.page.scss'],
})
export class ResetPassPage implements OnInit {
  profile:any;
  phonenumber:any;
  OTP:any;

  header_text_confirm:any;
  pesan_text_otp_sms:any;
  pesan_text_otp_wa:any;
  verifikasi_text:any;
  verifikasi_pesan:any;
  header_text_redeem:any;
  pesan_text_redeem:any;
  header_kirim:any;
  pesan_kirim:any;
  constructor(
    private dolphinService: DolphinService,
    private alertController: AlertController,
    private navController: NavController,
    private authService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.dolphinService.getdetailprofile().subscribe(data => {
         
     this.profile = data[0]
      console.log('PROFIL', this.profile)
     this.phonenumber = this.profile.no_hp;
   });
   this.dolphinService.text_otp().subscribe(data=>{
    console.log('cekpesanotpewaletreset',data);
    this.header_text_confirm = data.header_text_confirm;
    this.pesan_text_otp_sms = data.pesan_text_otp_sms;
    this.pesan_text_otp_wa = data.pesan_text_otp_wa;
    this.verifikasi_text = data.verifikasi_text;
    this.verifikasi_pesan = data.verifikasi_pesan;
    this.header_text_redeem = data.header_text_redeem;
    this.pesan_text_redeem = data.pesan_text_redeem;
    this.header_kirim = data.header_kirim;
    this.pesan_kirim = data.pesan_kirim;
  })
   }

   async showalerts(title, msg) {
    const alert = await this.alertController.create({
      header: title,
      message: msg,
      buttons: [{text: 'Ok'}]
    });
    await alert.present()
  }

   resetpasswords(){
    this.dolphinService.setupotp().subscribe(data => {
      console.log(data.status_sms)
        if(data.status_sms==1){
           this.kirimsms();  
        } else {
           this.kirimwa();
        }
    });
  }


  async kirimsms() {
   
    let phoneNum = this.phonenumber.replace(/\s/g,'').trim();
    if (phoneNum.charAt(0) == '0') {
      phoneNum = phoneNum.replace('0', '62');
    }
    const alert = await this.alertController.create({
      header: this.header_kirim,
      message: this.pesan_kirim + this.phonenumber,
      buttons: [
        {
          text: 'Whatsapp',
          role: 'confirm',
          handler: () => {
            this.dolphinService.sendotp(phoneNum,'wa').subscribe(data => {
              this.OTP = data.otp
              console.log('cekotp',data)
              this.verifyOTP(data.otp,'wa')
              this.dolphinService.logs_auth('wa','Perubahan_pass').subscribe(data => {});
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
              this.dolphinService.logs_auth('sms','Perubahan_pass').subscribe(data => {});
            });
          },
        },
      ],
    });
    await alert.present();
  }

  async kirimwa() {
   
    let phoneNum = this.phonenumber.replace(/\s/g,'').trim();
    if (phoneNum.charAt(0) == '0') {
      phoneNum = phoneNum.replace('0', '62');
    }
    const alert = await this.alertController.create({
      header: this.header_kirim,
      message: this.pesan_kirim + phoneNum,
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
              text: this.header_text_confirm,
              handler: (data) => {
                if(data.kodeotp == otp_code) {
                  this.sendEmail();
                } else {
                  this.showalerts('Oops..', 'Kode OTP tidak sesuai');
                }
              }
            },
      ]
    });
    await alert.present();
  }


  sendEmail() {
    this.dolphinService.getResetPass().subscribe(data => {
      if(data.status == 'success') {
        this.showAlert()
      }
      
    })
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Cek Email Anda',
      message: 'Email terkirim, silahkan cek dan ikuti langkah-langkah pada email Anda.',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navController.pop();
            this.authService.logout();
             // log auth
            this.dolphinService.logs_auth('email','Perubahan_pass').subscribe(data => {});
            this.router.navigateByUrl('/', { replaceUrl: true });
          }
        }]
    });

    await alert.present()
  }

}
