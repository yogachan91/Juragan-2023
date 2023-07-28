import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-banner-modal',
  templateUrl: './banner-modal.page.html',
  styleUrls: ['./banner-modal.page.scss'],
})
export class BannerModalPage implements OnInit {
  @Input() item:any
  content:any;
  constructor(private modalController:ModalController) { }

  ngOnInit() {
    this.content = this.item;
    // console.log(this.content);
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
