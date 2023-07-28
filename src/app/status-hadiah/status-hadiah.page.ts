import { Component, OnInit } from '@angular/core';
import { DolphinService } from '../services/dolphin.service';

@Component({
  selector: 'app-status-hadiah',
  templateUrl: './status-hadiah.page.html',
  styleUrls: ['./status-hadiah.page.scss'],
})
export class StatusHadiahPage implements OnInit {
  segmen:string = 'diproses'
  diproses:any;
  dikirim:any;
  diterima:any;
  constructor(
    private dolphinService: DolphinService,
  ) {
    this.getdata();
  }

  ngOnInit() {
  }

  getdata() {
    
    this.dolphinService.getstatushadiahlist('DIPROSES').subscribe(data => {
      // console.log('DIPROSES', data)
      if(data.status == 'success'){
        this.diproses = null;
        this.diproses = data.retdata
      } else {
        this.diproses = []
      }
    });
    this.dikirim = null;
    this.dolphinService.getstatushadiahlist('DIKIRIM').subscribe(data => {
      // console.log('DIKIRIM', data)
      if(data.status == 'success'){
        this.dikirim = data.retdata
      } else {
        this.dikirim = []
      }
    });
    this.diterima = null;
    this.dolphinService.getstatushadiahlist('DITERIMA').subscribe(data => {
      // console.log('DITERIMA', data)
      if(data.status == 'success'){
        this.diterima = data.retdata
      } else {
        this.diterima = []
      }
    });
  }

  refresh() {
    this.diproses = null;
    this.dikirim = null;
    this.diterima = null;
    this.getdata();
  }

}
