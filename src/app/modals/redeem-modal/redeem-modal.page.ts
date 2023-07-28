import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { DolphinService } from 'src/app/services/dolphin.service';

@Component({
  selector: 'app-redeem-modal',
  templateUrl: './redeem-modal.page.html',
  styleUrls: ['./redeem-modal.page.scss'],
})
export class RedeemModalPage implements OnInit {
  redeemTypes: any;
  constructor(
    private modalController: ModalController,
    private router: Router,
    private dolphinService: DolphinService,
    private alertController: AlertController
  ) { 
    
  }
  
  ionViewWillEnter() {
    this.dolphinService.getredeemtype(0).subscribe((res) => {
      if(res.status == 'success'){
        this.redeemTypes = res.retdata
        console.log('cek-redeem-type',res);
      } else {
        this.closeModal()
      }
    })
  }

  ngOnInit() {
  }

  async closeModal() {
    const onClosedData: boolean = false;
    await this.modalController.dismiss(onClosedData);
  }

  async openRedeem(param) {
    await this.modalController.dismiss();
     console.log('paramssss',param)
     let navigationExtras: NavigationExtras = { state: { item: param.type_code } };
     let navigationExtras_travel: NavigationExtras = { state: { item: '04' } };
     let navigationExtras_voucher: NavigationExtras = { state: { item: '11' } };
   // if(param.type_active == 1) {
      if(param.type_param == 'lm') {       
        this.router.navigate(['redeem-list'],navigationExtras)
      }
      if(param.type_param == 'tagihan') {
        this.router.navigate(['redeem-tagihan'])
      }
      if(param.type_param == 'ewallet') {
        this.router.navigate(['redeem-ewallet'])
      }
      if(param.type_param == 'trv') {
        // alert('ok')
        this.router.navigate(['redeem-list-travel'],navigationExtras)
      }
      if(param == 'elt') {
        // alert('ok')
        this.router.navigate(['redeem-list-electronic'],navigationExtras_travel)
      }
      if(param =='voucher'){
        this.router.navigate(['redeem-list-evoucher'],navigationExtras_voucher)
      }
      if(param=="elektronik"){
        let params: NavigationExtras = { state: { item: 'Elektronik',sku:'B2A-70002-00006' } };
        this.router.navigate(['product-blibli'],params)
      }
      if(param=="peralatan_rumah_tangga"){
        let params: NavigationExtras = { state: { item: 'Peralatan Rumah Tangga',sku:'B2A-70002-00015'} };
        this.router.navigate(['product-blibli'],params)
      }
      if(param=="kendaraan"){
        let params: NavigationExtras = { state: { item: 'Kendaraan',sku:'-' } };
        this.router.navigate(['product-blibli'],params)
      }
    // } else {
    //   this.showAlert(param.type_err_msg)
    // }
    
  }

  async openRedeem_travel(){
    await this.modalController.dismiss();
    this.router.navigate(['redeem-list-travel'])
  }

  async showAlert(msg) {
    const alert = await this.alertController.create({
      message: msg,
      buttons: [
        {
          text: 'Ok'
        }]
    });

    await alert.present()
  }
  
}
