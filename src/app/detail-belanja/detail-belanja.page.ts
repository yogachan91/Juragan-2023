import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { DolphinService } from '../services/dolphin.service';

@Component({
  selector: 'app-detail-belanja',
  templateUrl: './detail-belanja.page.html',
  styleUrls: ['./detail-belanja.page.scss'],
})
export class DetailBelanjaPage implements OnInit {
  item: any;
  detail_peringkat_belanja:any;
  constructor(
    private dolphinService: DolphinService,
    private router: Router,
    private loadingController: LoadingController,
    private navCtrl: NavController
  ) { 
    const currentState = this.router.getCurrentNavigation();
    this.item = currentState.extras.state.item;

  }
 
  ngOnInit() {
    this.dolphinService.detail_peringkat_belanja('ALL').subscribe((data)=>{
      if(data) {
        if(data.includes('Belum ada')) {
          this.detail_peringkat_belanja = []
        } else {
           console.log('detail_peringkat_belanja', data)
          this.detail_peringkat_belanja = data
        }
      }
    });
  }

}
