import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DolphinService } from '../services/dolphin.service';

@Component({
  selector: 'app-redeem-list',
  templateUrl: './redeem-list.page.html',
  styleUrls: ['./redeem-list.page.scss'],
})
export class RedeemListPage implements OnInit {
  pointreward: any;
  constructor(
    private dolphinService: DolphinService,
    private router: Router
  ) {
    const currentState = this.router.getCurrentNavigation();
    const item = currentState.extras.state.item;
    console.log('cekdataitemcode',item)
    this.dolphinService.getreward(item).subscribe((data) => {
      if(data) {
        this.pointreward = data.retdata
        console.log('cekmamen',data)
      }
    })
  }

  gotoredeemdetail(i) {
    let navigationExtras: NavigationExtras = { state: { item: i } };
    this.router.navigate(['redeem-detail'], navigationExtras);
  }

  ngOnInit() {
  }

}
