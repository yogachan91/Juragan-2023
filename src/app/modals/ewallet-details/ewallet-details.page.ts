import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-ewallet-details',
  templateUrl: './ewallet-details.page.html',
  styleUrls: ['./ewallet-details.page.scss'],
})
export class EwalletDetailsPage implements OnInit {
  redeemDetails: any;
  redeemItem: any;
  pageTitle: string = '';
  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) {
    let redeem = this.navParams.data.redeem
    this.pageTitle = redeem.prod_name
    this.redeemItem = redeem
    this.redeemDetails = redeem.details
  }

  ngOnInit() {
  }

  async closeModal() {
    const onClosedData: boolean = false;
    await this.modalController.dismiss(onClosedData);
  }

}
