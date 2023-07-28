import { Component, OnInit } from '@angular/core';
import { DolphinService } from '../services/dolphin.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { EwalletDetailsPage } from '../modals/ewallet-details/ewallet-details.page';

@Component({
  selector: 'app-redeem-status',
  templateUrl: './redeem-status.page.html',
  styleUrls: ['./redeem-status.page.scss'],
})
export class RedeemStatusPage implements OnInit {
  segmen: string = 'gift'
  redeemEwallet:any;
  redeemGift:any;
  diproses:any;
  dikirim:any;
  diterima:any;
  segmengift: string = 'diproses'
  constructor(
    private dolphinService: DolphinService,
    private loadingController: LoadingController,
    private router: Router,
    private modalController: ModalController
  ) {
    this.loadData()
  }

  refresh() {
    // this.showLoading('Loading data redeem..')
    this.redeemEwallet = null
    this.redeemGift = null
    this.diproses = null
    this.dikirim = null
    this.diterima = null
    this.loadData()
    
    
  }

  async showLoading(msg) {
    const loading = await this.loadingController.create({
      message: msg,
      backdropDismiss: false
    });
    await loading.present();
  }

  ngOnInit() {
  }

  loadData() {
    this.dolphinService.getewalletlist().subscribe((res) => {
      if(res) {
        if(res.status == 'success'){
          this.redeemEwallet = res.retdata;
        } else {
          this.redeemEwallet = []
        }
        console.log('redeemEwallet', this.redeemEwallet)
      }
    })

    this.dolphinService.getstatushadiahlist('DIPROSES').subscribe(data => {
      // console.log('DIPROSES', data)
      if(data.status == 'success'){
        this.diproses = null;
        this.diproses = data.retdata
      } else {
        this.diproses = []
      }
    });
    this.dikirim = null;
    this.dolphinService.getstatushadiahlist('DIKIRIM').subscribe(data => {
      // console.log('DIKIRIM', data)
      if(data.status == 'success'){
        this.dikirim = data.retdata
      } else {
        this.dikirim = []
      }
    });
    this.diterima = null;
    this.dolphinService.getstatushadiahlist('DITERIMA').subscribe(data => {
      // console.log('DITERIMA', data)
      if(data.status == 'success'){
        this.diterima = data.retdata
      } else {
        this.diterima = []
      }
    });
  }

  async toEwalletList(e) {
    const modal = await this.modalController.create({
      component: EwalletDetailsPage,
      componentProps: {redeem: e},
      swipeToClose: true,
      breakpoints:[0, 0.7, 0.9],
      initialBreakpoint:0.7
    });
    return await modal.present();
  }

}
