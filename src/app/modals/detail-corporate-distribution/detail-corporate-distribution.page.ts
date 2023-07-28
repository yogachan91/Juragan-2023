import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { DolphinService } from '../../services/dolphin.service';

@Component({
  selector: 'app-detail-corporate-distribution',
  templateUrl: './detail-corporate-distribution.page.html',
  styleUrls: ['./detail-corporate-distribution.page.scss'],
})
export class DetailCorporateDistributionPage implements OnInit {
  params:any;
  data:any;
  title:any;
  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private dolphinService: DolphinService,
  ) { 
  }

  ngOnInit() {
    console.log('cekitemdata',this.navParams.data.item);
    this.dolphinService.detail_corporate_distibution(this.navParams.data.item).subscribe((val) => {
      this.data = val.retdata;
      this.title = val.retdata[0].basepack;
      console.log('cekvalmamen',val)
    })
  }

  async closeModal() {
    const onClosedData: boolean = false;
    await this.modalController.dismiss(onClosedData);
  }


}
