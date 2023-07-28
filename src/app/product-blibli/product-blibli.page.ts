import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DolphinService } from '../services/dolphin.service';

@Component({
  selector: 'app-product-blibli',
  templateUrl: './product-blibli.page.html',
  styleUrls: ['./product-blibli.page.scss'],
})
export class ProductBlibliPage implements OnInit {

  dataproduct: any;
  title: any;
  balance:any;
  sku:any;
  constructor(
    private dolphinService: DolphinService,
    private router: Router
  ) {
    const currentState = this.router.getCurrentNavigation();
    const item = currentState.extras.state.item;
    this.sku = currentState.extras.state.sku;
    console.log('cekdataitemcode',item)
    this.title = item;
    this.dolphinService.product_blibli().subscribe((data) => {
      if(data) {
        this.dataproduct = data.data.products
        console.log('cekmamenblibli',data.data.products)
      }
    })
  }

  gotoredeemdetail(i) {
    this.dolphinService.getpoint().subscribe(data => {
      console.log('POIN-HOME', data);
   //  this.balance = data;
    let navigationExtras: NavigationExtras = { state: { item: i,title: this.title, balance: data } };
    this.router.navigate(['detail-product-blibli'], navigationExtras);
  });
  }

  ngOnInit() {
  }

}