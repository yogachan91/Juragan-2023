import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Platform, AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { LoginModalPage } from '../modals/login-modal/login-modal.page';
import { RegisterModalPage } from '../modals/register-modal/register-modal.page';
import { Device } from '@awesome-cordova-plugins/device/ngx';
import { TermsModalPage } from '../modals/terms-modal/terms-modal.page';
import { ForgotPasswordPage } from '../modals/forgot-password/forgot-password.page';
// import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { DolphinService } from '../services/dolphin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  dataReturned: any;
  IMEI: any;
  infowa:any;
  url_panduan:any;
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private alertController: AlertController,
    private router: Router,
    private loadingController: LoadingController,
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private device: Device,
    public platform: Platform,
    // private statusBar: StatusBar
    private dolphinService: DolphinService
  ) { 
    this.loadIMEI();
  }

  ionViewWillEnter() {
    // this.statusBar.styleDefault();
  }

  whatsappinfo(){
    this.dolphinService.whatsappinfo('','').subscribe(data => {
      console.log('infowa',data.info1)
    this.infowa = data.info1;
    });
  }

  panduan(){
    this.dolphinService.panduan().subscribe(data => {
      this.url_panduan = data.retdata;
    });
  }

  loadIMEI() {
    this.platform.ready().then(() => {
      if (this.platform.is('mobileweb')){
        this.IMEI = 'f76f5497984f4f7812'; //0c551d27a340dfe2 //--test-device
      } else {
       this.IMEI = this.device.uuid;
      //  this.IMEI = 'f76f5497984f4f7812';
      }
      this.whatsappinfo();
      this.panduan();
      // console.log('loadIMEI', this.IMEI);
      // console.log('this.device.platform', this.platform.platforms());

    });

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

  async openLogin() {
    const modal = await this.modalController.create({
      component: LoginModalPage,
      componentProps: {},
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        console.log('dataReturned', dataReturned)
        this.dataReturned = dataReturned.data;
        if(this.dataReturned) {
          // console.log('Outlet ID: '+this.dataReturned);
          this.platform.ready().then(() => {
            // console.log('IMEI', this.IMEI)
            if(this.IMEI){

              this.dolphinService.setimei(this.IMEI, this.dataReturned.user_email).subscribe((data) => {
                 console.log('IMEI', data);
                if(data.status == 'err') {
                  this.showAlert('Perhatian', data.retdata)
                }
              });  
              
              // console.log('IMEI:', this.IMEI);
              
              this.dolphinService.checkimei(this.IMEI, this.dataReturned.user_email).subscribe((data) => {
                 console.log('checkimeis', data);
                if(data.status == 'timeout'){
                  this.showAlert('Error Login', data.retdata)
                } else {
                  this.openTerms(this.dataReturned);
                }
              });
              
            }
          })
        }
      } else {
        // console.log('dataReturned', 'NO DATA')
      }
    });
    return await modal.present();
  }

  async openForgot() {
    const modal = await this.modalController.create({
      component: ForgotPasswordPage,
      componentProps: {},
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        if(this.dataReturned) {
          // console.log('Outlet ID: '+this.dataReturned);
          if(this.dataReturned){
            this.forgotpass()
          }
        }
      }
    });

    return await modal.present();
  }

  async forgotpass() {
    const alert = await this.alertController.create({
      header: 'Lupa Password',
      message: 'Petunjuk penggantian password telah dikirimkan ke email Anda.',
      buttons: ['OK'],
    });
  
    await alert.present();  
  }

  async openTerms(logindata) {
    const modal = await this.modalController.create({
      component: TermsModalPage,
      componentProps: {},
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });

    modal.onDidDismiss().then((dataTerms) => {
      if (dataTerms !== null) {
        if(dataTerms.data === true) {
          this.platform.ready().then(() => {
            // console.log(this.IMEI)
            if(this.IMEI){
              this.login(logindata);
            }
          })
        } else {
          this.notagree();
        }
      }
    });

    return await modal.present();
  }

  async notagree() {
    const alert = await this.alertController.create({
      header: 'Syarat dan Ketentuan',
      message: 'Anda harus menyetujui Syarat dan Ketentuan untuk melanjutkan',
      buttons: ['OK'],
    });
  
    await alert.present();  
  }
  
  async openRegister() {
    const modal = await this.modalController.create({
      component: RegisterModalPage,
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title"
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned.data);
      }
    });

    return await modal.present();
  }

  ngOnInit() {
  }

  async login(credentials) {
    const loading = await this.loadingController.create({
      message: 'Logging In..',
      backdropDismiss: false
    });
    await loading.present();
    
    this.authService.loginEmail(this.IMEI, credentials).subscribe(
      async (res) => {
        await loading.dismiss();
        
      },
      async (err) => {
        await loading.dismiss();
        console.log('ERRSSSS', credentials);
        const alert = await this.alertController.create({
          header: 'Login gagal',
          message: err.message,
          buttons: ['OK'],
        });
        await alert.present();
      }
    );
  }

 
}
