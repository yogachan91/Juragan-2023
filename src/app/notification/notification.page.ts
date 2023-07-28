import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DolphinService } from '../services/dolphin.service';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  pesan:any;
  versi:any;
  status:any;
  constructor(
    private modalController: ModalController,
    private dolphinService: DolphinService, 
  ) { }
  

  ngOnInit() {
    this.dolphinService.getversionapps().subscribe(data=>{
      console.log('koplak',data);
      this.pesan = data.pesan;
      this.versi = data.versi;
      this.status = data.status;
    })
  }

  closeModal() {
    this.modalController.dismiss();
  }

  update(){
    window.open('market://details?id=com.unilever.dolphin', '_system');
  }

}
