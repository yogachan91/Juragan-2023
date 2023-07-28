import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { DolphinService } from '../services/dolphin.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-redeem-ewallet',
  templateUrl: './redeem-ewallet.page.html',
  styleUrls: ['./redeem-ewallet.page.scss'],
})
export class RedeemEwalletPage implements OnInit {
  token:any;
  outlet_id: any;
  redeemTypes: any;
  ovoOn: boolean = false;
  text_redeem_ewallet: any;
  constructor(
    private router: Router,
    private authService: AuthenticationService, 
    private dolphinService: DolphinService,
    private alertController: AlertController,
    private navController: NavController
  ) {
    this.token = this.authService.getToken();
    this.outlet_id = this.authService.getID();
  }

  ionViewWillEnter() {
    this.dolphinService.getredeemtype(1).subscribe((res) => {
      if(res.status == 'success'){
        this.redeemTypes = res.retdata
      } else {
        this.showAlert('Tidak dapat terhubung ke jaringan, silahkan coba lagi')
      }
    })

    this.dolphinService.getstatusredeem().subscribe((res) => {
      if(res.status == 'success'){
        this.ovoOn = res.ovoOn;
        console.log('getstatusredeem', res)
      }
    })

    this.dolphinService.redeem_ewallet_text().subscribe((res) => {
      if(res.status == 'success'){
        this.text_redeem_ewallet = res.retdata;
        console.log('redeem_ewallet_text', res)
      }
    })
    
  }

  ngOnInit() {
  }

  toEwalletList(param) {
    if(param.type_active == 1) {
      let navigationExtras: NavigationExtras = { state: { type: param.type_param, code: param.type_param_2, uli_token: this.token, outlet_id:this.outlet_id} };
      this.router.navigate(['redeem-ewallet-list'], navigationExtras);
    } else {
      this.showAlert(param.type_err_msg)
    }
  }

  toOvoPoint() {
    this.router.navigate(['redeem-ovo-point']);
  }
  
  async showAlert(msg) {
    const alert = await this.alertController.create({
      message: msg,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            
          }
        }]
    });

    await alert.present()
  }

}
