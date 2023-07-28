import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController, NavParams } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DolphinService } from 'src/app/services/dolphin.service';
import { ForgotPasswordPage } from '../forgot-password/forgot-password.page';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.page.html',
  styleUrls: ['./login-modal.page.scss'],
})
export class LoginModalPage implements OnInit {
  modalTitle: string;
  modelId: number;
  credentials: FormGroup;
  isOTP: boolean = false;
  isEmail: boolean = false;
  isLogin: boolean = true;
  OTPRemote:any;
  OTPInput:any;
  frmRegisterEmail: FormGroup;
  EmailOutletInput: string = '';
  EmailInput: string = '';
  EmailOTPInput: string = '';
  constructor(
    private fb: FormBuilder,
    private modalController: ModalController,
    private navParams: NavParams,
    private dolphinService: DolphinService,
    private loadingController: LoadingController,
    private alertController: AlertController,
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
    this.credentials = this.fb.group({
      user_email: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required, 
        Validators.minLength(8)
      ]]
    });

    this.frmRegisterEmail = this.fb.group({
      frmEmailOutletId: ['', [
        Validators.required,
        Validators.minLength(18)
      ]],
      frmEmailAddress: ['', [
        Validators.required
      ]]
    });
  }

  get user_email() {
    return this.credentials.get('user_email');
  }

  get password() {
    return this.credentials.get('password');
  }

  get frmEmailOutletId() {
    return this.credentials.get('frmEmailOutletId');
  }

  get frmEmailAddress() {
    return this.credentials.get('frmEmailAddress');
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  openEmail() {
    this.isEmail = true;
    this.isOTP = false;
    this.isLogin = false;
  }

  closeEmail() {
    this.isEmail = false;
    this.isOTP = false;
    this.isLogin = true;
  }

  async checkOutlet() {
    const loading = await this.loadingController.create({
      message: 'Pengecekan..',
      backdropDismiss: false
    });
    await loading.present();

    this.dolphinService.getOTPEmail(this.credentials.value).subscribe(data => {
      console.log('data.otp', data)
      this.loadingController.dismiss();
      if(data.status == 'success') {
       
        console.log('data.otp', data)
       // this.OTPRemote = 12345 //- MIRROR
        this.OTPRemote = data.otp;
        this.isEmail = false;
        this.isOTP = true;
        this.isLogin = false;
      } else {
        this.showAlert('Opps..', data.err)
      }
    })
  }

  async submitConfirmLogin() {
    if(this.OTPInput == this.OTPRemote) {
      
      const onClosedData: string = this.credentials.value;
      await this.modalController.dismiss(onClosedData);
    } else {
      this.showAlert('Opps..', 'Kode OTP yang Anda input salah..');
    }
  }

  async showAlert(title,msg) {
    const alert = await this.alertController.create({
      header: title,
      message: msg,
      buttons: [
        {
          text: 'Ok'
        }]
    });
    await alert.present()
  }

  async simpanEmail() {
    if(this.EmailOTPInput == this.OTPRemote) {
      const loading = await this.loadingController.create({
        message: 'Menyimpan alamat email..',
        backdropDismiss: false
      });
      await loading.present();
      this.dolphinService.getChangeEmail(this.frmRegisterEmail.value).subscribe(data => {
        this.loadingController.dismiss();
        if(data.status == 'success') {
          this.showAlert('Update Email', 'Email telah didaftarkan, silahkan login.')
          
          this.isEmail = false;
          this.isOTP = false;
          this.isLogin = true;
        } else {
          this.showAlert('Opps..', data.message)
        }
      })
    } else {
      this.showAlert('Opps..', 'kode OTP tidak sesuai')
    }
  }

  setupotp(){
    this.dolphinService.setupotp().subscribe(data => {
      console.log('sopbuah',data.status_sms)
        if(data.status_sms==1){
          this.kirimOTPEmail();  
        } else {
          this.kirimOTPEmail_wa();
        }
    });
  }

  async kirimOTPEmail() {
    const alert = await this.alertController.create({
      header: 'Kirimkan OTP',
    //  message: 'Kirim',
      buttons: [
        {
          text: 'Whatsapp',
          role: 'confirm',
          handler: () => {
            this.dolphinService.getOTPChangeEmail(this.frmRegisterEmail.value,'wa').subscribe(data => {
              this.loadingController.dismiss();
              if(data.status == 'success') {
                this.showAlert('OTP Terkirim', 'Kami telah mengirimkan kode OTP ke Whatsapp Anda, isi kode yang Anda terima pada form ini.')
                this.OTPRemote = data.otp
                this.isEmail = true;
                this.isOTP = false;
                this.isLogin = false;
              } else {
                this.showAlert('Opps..', data.message)
              }
            })
          },
        },
        {
          text: 'SMS',
          role: 'confirm',
          handler: () => {
            this.dolphinService.getOTPChangeEmail(this.frmRegisterEmail.value,'sms').subscribe(data => {
              this.loadingController.dismiss();
              if(data.status == 'success') {
                this.showAlert('OTP Terkirim', 'Kami telah mengirimkan kode OTP ke HP Anda, isi kode yang Anda terima pada form ini.')
                this.OTPRemote = data.otp
                this.isEmail = true;
                this.isOTP = false;
                this.isLogin = false;
              } else {
                this.showAlert('Opps..', data.message)
              }
            })
          },
        },
      ],
    });
    await alert.present();
   

}

  async kirimOTPEmail_wa() {
    
      const loading = await this.loadingController.create({
        message: 'Pengecekan akun..',
        backdropDismiss: false
      });
      await loading.present();

      this.dolphinService.getOTPChangeEmail(this.frmRegisterEmail.value,'wa').subscribe(data => {
        console.log('OTP',data)
        this.loadingController.dismiss();
        
        if(data.status == 'success') {
          this.showAlert('OTP Terkirim', 'Kami telah mengirimkan kode OTP ke Whatsapp Anda, isi kode yang Anda terima pada form ini.')
          this.OTPRemote = data.otp
          this.isEmail = true;
          this.isOTP = false;
          this.isLogin = false;
        } else {
          this.showAlert('Opps..', data.message)
        }
      })

  }

  async openForgot() {
    const modal = await this.modalController.create({
      component: ForgotPasswordPage,
      componentProps: {},
      swipeToClose: true,
    });

    return await modal.present();
  }

}
