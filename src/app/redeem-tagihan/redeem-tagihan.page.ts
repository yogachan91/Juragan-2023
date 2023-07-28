import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DolphinService } from '../services/dolphin.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-redeem-tagihan',
  templateUrl: './redeem-tagihan.page.html',
  styleUrls: ['./redeem-tagihan.page.scss'],
})
export class RedeemTagihanPage implements OnInit {
  redeemTypes: any;
  constructor(
    private router: Router,
    private alertController: AlertController,
    private navController: NavController,
    private dolphinService: DolphinService,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.dolphinService.getredeemtype(2).subscribe((res) => {
      if(res.status == 'success'){
        this.redeemTypes = res.retdata
      } else {
        this.showAlert('Tidak dapat terhubung ke jaringan, silahkan coba lagi')
      }
    })
  }

  openPPOB(param) {
    if(param.type_active) {
      if(param.type_param == 'plntoken') {
        this.router.navigate(['ppob-pln-token'])
      }
      if(param.type_param == 'plntagihan') {
        this.router.navigate(['ppob-pln-tagihan'])
      }
    } else {
      this.showAlert(param.type_err_msg)
    }
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
