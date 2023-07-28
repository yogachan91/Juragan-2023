import { Component, OnInit } from '@angular/core';
import { DolphinService } from '../services/dolphin.service';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-produk',
  templateUrl: './list-produk.page.html',
  styleUrls: ['./list-produk.page.scss'],
})
export class ListProdukPage implements OnInit {
  dataproduk:any;
  getkdk:any;
  getnutrisi:any;
  getperawatan_pribadi:any;
  getperawatan_rumah:any;
  constructor(
    private router: Router,
    private dolphinService: DolphinService
  ) { 
   
  }

  ngOnInit() {
    this.dolphinService.unilever_produk().subscribe(data => {
      if(data.response == 200) {
        console.log('dataproduk',data.retdata)
        this.getkdk = data.getkdk;
        this.getnutrisi = data.getnutrisi
        this.getperawatan_pribadi = data.getperawatan_pribadi
        this.getperawatan_rumah = data.getperawatan_rumah
      }
    })
  }

}
