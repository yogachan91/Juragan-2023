import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController, NavController, AlertController } from '@ionic/angular';
import { DolphinService } from '../services/dolphin.service';

@Component({
  selector: 'app-ppob-pln-token-history-details',
  templateUrl: './ppob-pln-token-history-details.page.html',
  styleUrls: ['./ppob-pln-token-history-details.page.scss'],
})
export class PpobPlnTokenHistoryDetailsPage implements OnInit {
  itemDetails: any;
  ppobDetails: any;
  ppobResponse: any;
  ppobtype: any;
  constructor(
    private dolphinService: DolphinService,
    private router: Router,
    private loadingController: LoadingController,
    private navController: NavController,
    private alertController: AlertController
  ) {
    
  }

  loadData() {
    if(this.itemDetails.transaction_ref) {
      
      this.dolphinService.ppobcheck(this.itemDetails['transaction_ref']).subscribe((data) => {
      //this.ULIServ.ppobcheck('MJ.INDOH2H.PLNPREPAID.PURCHASE.56602729479.PLN20.1599117997.178114', this.outlet_id).then((data) => {
        // console.log('PPOB Details', data);
        if(data.status == 'success'){ 
          if(data.retdata.data.response == 'Success') {
            this.ppobResponse = data.retdata.data
            if(this.ppobResponse.ref) {
              let ppobToken = this.ppobResponse.ref.split('/');
              this.ppobDetails = {
                number: this.ppobResponse.number,
                status: this.ppobResponse.status,
                nama: ppobToken[1],
                tarif: ppobToken[2],
                daya: ppobToken[3],
                kwh: ppobToken[4],
                token: ppobToken[0]
              }
            } else {
              this.ppobDetails = {
                number: this.ppobResponse.number,
                status: this.ppobResponse.status,
                nama: '',
                tarif: '',
                daya: '',
                kwh: '',
                token: ''
              }
            }
          } else {
            this.showAlert('Oops..', data.retdata.data.message)
            this.navController.pop();
          }
        }
      });
    } else {
      this.navController.pop();
    }
  }

  ngOnInit() {
    const currentState = this.router.getCurrentNavigation();
    this.itemDetails = currentState.extras.state.itemDetails;
    // console.log('itemDetails', this.itemDetails);
    this.loadData();
    if(this.itemDetails.gift_code == 'RP001') {
      this.ppobtype = 'plnbilling';
    } else {
      this.ppobtype = 'plntoken';
    }
  }
  
  reload() {
    this.ppobDetails = null;
    this.loadData(); 
  }
  
  async showAlert(title, msg) {
    const alert = await this.alertController.create({
      header: title,
      message: msg,
      buttons: [{text: 'Ok'}]
    });
    await alert.present()
  }

}
