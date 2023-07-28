import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DolphinService } from '../../services/dolphin.service';

@Component({
  selector: 'app-terms-modal',
  templateUrl: './terms-modal.page.html',
  styleUrls: ['./terms-modal.page.scss'],
})
export class TermsModalPage implements OnInit {
  textdisclaimer: any;
  constructor(
    private modalController: ModalController,
    private dolphinService: DolphinService
  ) { }

  ngOnInit() {
    this.dolphinService.disclaimer().subscribe(data => {
      console.log('text_disclaimer',data)
      this.textdisclaimer = data.retdata;
    });
  }

  async agree() {    
    const onClosedData: boolean = true;
    await this.modalController.dismiss(onClosedData);
  }

  async closeModal() {
    const onClosedData: boolean = false;
    await this.modalController.dismiss(onClosedData);
  }


}
