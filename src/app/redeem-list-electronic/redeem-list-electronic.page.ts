import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DolphinService } from '../services/dolphin.service';
@Component({
  selector: 'app-redeem-list-electronic',
  templateUrl: './redeem-list-electronic.page.html',
  styleUrls: ['./redeem-list-electronic.page.scss'],
})
export class RedeemListElectronicPage implements OnInit {
  pointreward: any;
  constructor(
    private dolphinService: DolphinService,
    private router: Router
  ) {
    const currentState = this.router.getCurrentNavigation();
    const item = currentState.extras.state.item;
    console.log('cekdataitemcodessss',item)
    this.dolphinService.getreward(item).subscribe((data) => {
      if(data) {
        this.pointreward = data.retdata_travel
        console.log('tolesss',data)
      }
    })
  }

  gotoredeemdetail(i) {
    let navigationExtras: NavigationExtras = { state: { item: i } };
     this.router.navigate(['redeem-detail-electronic'], navigationExtras);
  }

  ngOnInit() {
  }

}
