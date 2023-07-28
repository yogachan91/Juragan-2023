import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-splash',
  templateUrl: './modal-splash.page.html',
  styleUrls: ['./modal-splash.page.scss'],
})
export class ModalSplashPage implements OnInit {
  item:any;
  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
