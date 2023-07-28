import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DolphinService } from 'src/app/services/dolphin.service';

@Component({
  selector: 'app-faq-modal',
  templateUrl: './faq-modal.page.html',
  styleUrls: ['./faq-modal.page.scss'],
})
export class FaqModalPage implements OnInit {
  faqs: any;
  constructor(
    private modalController: ModalController,
    private dolphinService: DolphinService
  ) {
    this.dolphinService.getfaq().subscribe((data) => {
      if(data) {
        this.faqs = data
      }
    })
  }

  ngOnInit() {
  }

  async closeModal() {
    const onClosedData: boolean = false;
    await this.modalController.dismiss(onClosedData);
  }

}
