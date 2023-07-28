import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { DolphinService } from '../services/dolphin.service';

@Component({
  selector: 'app-redeem-detail-evoucher',
  templateUrl: './redeem-detail-evoucher.page.html',
  styleUrls: ['./redeem-detail-evoucher.page.scss'],
})
export class RedeemDetailEvoucherPage implements OnInit {
  item: any;
  balance: any;
  constructor(
    private dolphinService: DolphinService,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController
  ) {
    
  }

  async presentToast() {
    const toast = await this.toastController.create({
      icon: 'information-circle',
      message: 'Memuat data poin Anda, harap menunggu..',
      color: 'dark'
    });
    toast.present();
  }


  tukarpoint(){
    let navigationExtras: NavigationExtras = { state: { item: this.item, balance: this.balance,type_r:'evoucher'} };
    this.dolphinService.cekdatapengiriman().subscribe(data=>{
        this.router.navigate(['redeem-now'], navigationExtras);
      console.log('cekdatakirim',data)
    })
   // this.router.navigate(['redeem-now'], navigationExtras);
  }

  async notif_periksa_pengiriman(){
    const alert = await this.alertController.create({
      header: 'Hai Juragan, Mohon Lengkapi Alamat Pengiriman Anda',
      buttons: [
        {
          text: 'Lain Kali',
          role: 'cancel',
          handler: () => {
           // this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'Ok',
          role: 'confirm',
          handler: () => {
            let navigationExtras: NavigationExtras = { state: { page: 'pengiriman'} };
            this.router.navigate(['profile'],navigationExtras);
          },
        },
      ],
    });

    await alert.present();

   // const { role } = await alert.onDidDismiss();
   // this.roleMessage = `Dismissed with role: ${role}`;
  }

  ngOnInit() {
    const currentState = this.router.getCurrentNavigation();
    this.item = currentState.extras.state.item;
    console.log('cekdataitemvoucher',this.item)
    if(!this.item) {
      this.router.navigateByUrl('/', { replaceUrl: true });
    }
    this.presentToast();
    this.dolphinService.getpoint().subscribe(data => {
      // console.log('POIN-HOME', data);
      this.balance = data
      this.toastController.dismiss();
      // this.userData.cluster = data.cluster
      // console.log('USERDATA-BARU', this.balance);
    });
  }

}

