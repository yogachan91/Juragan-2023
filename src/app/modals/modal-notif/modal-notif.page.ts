import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DolphinService } from 'src/app/services/dolphin.service';

@Component({
  selector: 'app-modal-notif',
  templateUrl: './modal-notif.page.html',
  styleUrls: ['./modal-notif.page.scss'],
})
export class ModalNotifPage implements OnInit {
  notif: any;
  constructor(
    private modalController:ModalController,
    private dolphinService: DolphinService    
    ) {
      this.loadData()
    }

  ngOnInit() {
    
  }

  refresh() {
    this.notif = null;
    this.loadData()
  }

  loadData() {
    this.dolphinService.getnotif().subscribe(data => {
      this.notif = data.retdata
      // console.log('notif', this.notif);
    });
  }

  closeModal() {
    this.modalController.dismiss();
  }

  read(id){
    this.dolphinService.readnotif(id).subscribe(data => {
      this.loadData();
    });
  }

}
