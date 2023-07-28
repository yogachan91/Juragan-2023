import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { DolphinService } from '../services/dolphin.service';

@Component({
  selector: 'app-top-detail',
  templateUrl: './top-detail.page.html',
  styleUrls: ['./top-detail.page.scss'],
})
export class TopDetailPage implements OnInit {
  item: any;
  type: any;
  top5: any = [];
  pageTitle: string = '';
  details: any = [];
  constructor(
    private dolphinService: DolphinService,
    private router: Router,
    private loadingController: LoadingController,
    private navCtrl: NavController
  ) {
    const currentState = this.router.getCurrentNavigation();
    this.item = currentState.extras.state.item;
    this.type = currentState.extras.state.type;
  }

  ngOnInit() {
    if(this.item && this.type) {
      this.showLoading('Memuat data '+this.type+'...');
      let dif = this.item.BRAND;
      console.log('cekdata',this.item);
      if(this.type == 'Kategori') dif = this.item.CATEGORY;
      this.pageTitle = dif;
      this.dolphinService.gettop5detail({item:dif}, this.type).subscribe(data => {
         console.log('cekdatabrand',data)
        if(data){
          // let localData = data.retdata;
          // localData = localData.map( i => {
          //   i.sku = i['KODE SKU'].trim();
          //   i.totalbelanja = i['TOTAL BELANJA'].trim();
          //   i.fop = i['TOTAL FOP'];
          //   return i;
          // });
          // console.log('localData', localData)
          this.details = data.retdata;
        } else {
          this.details = []
        }
        this.loadingController.dismiss()
      });
    } else {
      this.navCtrl.pop()
    }
  }

  async showLoading(msg) {
    const loading = await this.loadingController.create({
      message: msg,
      backdropDismiss: false
    });
    await loading.present();
  }

}
