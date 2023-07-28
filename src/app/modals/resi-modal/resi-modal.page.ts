import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-resi-modal',
  templateUrl: './resi-modal.page.html',
  styleUrls: ['./resi-modal.page.scss'],
})
export class ResiModalPage implements OnInit {
  item: any;
  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }


}
