import { Component, OnInit } from '@angular/core';
import { RadioControlValueAccessor } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { DolphinService } from '../services/dolphin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ppob-pln-token',
  templateUrl: './ppob-pln-token.page.html',
  styleUrls: ['./ppob-pln-token.page.scss'],
})
export class PpobPlnTokenPage implements OnInit {
  idPelanggan: any;
  balance: any;
  denom:any;
  nominal: any;
  poinRedeem: any;
  pageStat: string = 'inquiry';  
  ppobDetailsNama:any;
  is_loginsecret: boolean = false;
  detailPayment:any;
  constructor(
    private dolphinService: DolphinService,
    private loadingController:LoadingController,
    private alertController: AlertController,
    private router: Router,
  ) {
    this.dolphinService.getpoint().subscribe(data => {
      // console.log('BALANCE',data)
      this.balance = data
    });
    this.dolphinService.ppobdenom().subscribe(data => {      
      this.denom = data
      // console.log('DENOM',this.denom)
    });
  }

  ngOnInit() {}

  onChange(e) {
    // console.log(e.detail.value)
    let ev = e.detail.value;
    this.poinRedeem = ev;
  }

  async showLoading(msg) {
    const loading = await this.loadingController.create({
      message: msg,
      backdropDismiss: false
    });
    await loading.present();
  }

  async showAlert(title, msg) {
    const alert = await this.alertController.create({
      header: title,
      message: msg,
      buttons: [{text: 'Ok'}]
    });
    await alert.present()
  }

  check() {
    this.showLoading('Memeriksa ID pelanggan Listrik PLN...')
    this.dolphinService.ppob_pln_prepaid_inquiry(this.idPelanggan, this.poinRedeem.amount).subscribe(data => {
      // console.log('ppob_pln_prepaid_inquiry', data)
      if(data.retdata.status){
        if(data.retdata.data.status_desc === 'Success'){
          this.ppobDetailsNama = data.retdata.data.inquiry_details.subscriber_name;
          this.pageStat = 'payment';
        } else {
          this.showAlert('Oops..', data.retdata.data.status_desc)
        }
      } else {
        this.showAlert('Oops..', data.retdata.message)
      }
      this.loadingController.dismiss()
    })
  }

  pay() {
    this.showLoading('Memproses pembelian Token Listrik PLN...')
    this.pageStat = 'payment';

    this.dolphinService.ppobplnpayment(this.idPelanggan, this.poinRedeem.redeem_code).subscribe((data) => {
      // console.log('ppobplnpayment', data)
      if(data.status == 'success'){        
        this.detailPayment = data.retdata.data;
        this.pageStat = 'paid';
      } else {
        this.showAlert('Oops..', data.message)
      }
      this.loadingController.dismiss()
    });
  }

  token: any;
  checkstatus() {
    this.showLoading('Mengambil data...')

    this.dolphinService.ppobcheck(this.detailPayment.trx_ref).subscribe((data) => {
      // console.log('PPOB STATUS', data);
      if(data.status == 'success'){        
        this.detailPayment = data.retdata.data   
        if(this.detailPayment.ref) {
          let tokenData = this.detailPayment.ref.split('/');
          this.token = {
            "token_num": tokenData[0],
            "token_nama": tokenData[1],
            "token_tarif": tokenData[2],
            "token_daya": tokenData[3],
            "token_kwh": tokenData[4],
          };
        }
      } else {
        this.showAlert('Oops..', data.message)
      }
      this.loadingController.dismiss()
    });
  }

  history() {
    this.router.navigate(['ppob-pln-token-history'])
  }

  cancel() {

  }

  close() {
    
  }
}
