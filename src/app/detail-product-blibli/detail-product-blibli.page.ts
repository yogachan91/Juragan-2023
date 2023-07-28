import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { DolphinService } from '../services/dolphin.service';

@Component({
  selector: 'app-detail-product-blibli',
  templateUrl: './detail-product-blibli.page.html',
  styleUrls: ['./detail-product-blibli.page.scss'],
})
export class DetailProductBlibliPage implements OnInit {

  item: any;
  balance: any;
  dataitem:any;
  data:any;
  title:any;
  poin:any;
  constructor(
    private dolphinService: DolphinService,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController
  ) {
    const currentState = this.router.getCurrentNavigation();
    this.item = currentState.extras.state.item;
    this.title = currentState.extras.state.title;
    this.balance = currentState.extras.state.balance;
       
  }

  

  async presentToast() {
    const toast = await this.toastController.create({
      icon: 'information-circle',
      message: 'Memuat data poin Anda, harap menunggu..',
      color: 'dark'
    });
    toast.present();
  }

  ngOnInit() {
    this.presentToast();
   
    this.dolphinService.detail_product_blibli(this.item).subscribe(datafield => {
      console.log('detail_product', datafield);
      this.dataitem = datafield.dataapi.data;
      this.data = datafield;
      this.poin = datafield.retdata.point;
      this.toastController.dismiss();
   });

  }


  tukarpoint(){
    let navigationExtras: NavigationExtras = { state: {dataitems: this.data, poin: this.poin, balance: this.balance, title:this.title} };
    this.router.navigate(['redeem-blibli'],navigationExtras);
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

 

}
