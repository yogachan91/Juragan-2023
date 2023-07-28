import { Component } from '@angular/core';
import { DolphinService } from '../services/dolphin.service';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { ResiModalPage } from '../modals/resi-modal/resi-modal.page';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-top',
  templateUrl: './top.page.html',
  styleUrls: ['./top.page.scss'],
})
export class TopPage {

  top5:any;
  top5brand: any;
  totalbelanja: any;
  fop:any;
  constructor(
    private dolphinService: DolphinService,
    private router: Router,
    private alertController: AlertController,
    private modalController: ModalController,
    private loadingController: LoadingController,
  ) {
      this.getdata();
  }
  

  

  getdata() {
    
    this.dolphinService.gettop5brand().subscribe(data => {
      // console.log('gettop5brand', data)
      if(data){
        this.top5brand = data.retdata
      } else {
        this.top5brand = []
      }

    });
  }

  

  refresh() {
    this.fop = null;
    this.top5brand = null;
    this.top5 = null;
  }

  
  

}
