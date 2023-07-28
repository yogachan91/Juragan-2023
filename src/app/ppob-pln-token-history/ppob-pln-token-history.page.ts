import { Component, OnInit } from '@angular/core';
import { DolphinService } from '../services/dolphin.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-ppob-pln-token-history',
  templateUrl: './ppob-pln-token-history.page.html',
  styleUrls: ['./ppob-pln-token-history.page.scss'],
})
export class PpobPlnTokenHistoryPage implements OnInit {
  historyList: any;
  constructor(
    private dolphinService: DolphinService,
    private router: Router,
  ) {
    this.dolphinService.ppoblist().subscribe((data) => {
      // console.log('history', data);
      if(data.status == 'success'){
        this.historyList = data.retdata
      } else {
        this.historyList = [{
          gift_name: 'Belum ada transaksi',
          redeem_date: null,
          redeem_no: null,
        }];
      }
    });
  }

  itemSelected(item) {
    if(item.redeem_no) {
      let navigationExtras: NavigationExtras = { state: { itemDetails: item} };
      this.router.navigate(['ppob-pln-token-history-details'], navigationExtras);
    }
  }

  ngOnInit() {
  }

  

}
