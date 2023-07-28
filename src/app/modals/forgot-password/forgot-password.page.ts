import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { DolphinService } from 'src/app/services/dolphin.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  outlet_id: any;
  constructor(
    private modalController: ModalController,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private dolphinService: DolphinService
  ) { }

  async closeModal() {
      await this.modalController.dismiss();
  }

  ngOnInit() {
  }

  async checkOutlet() {
    const loading = await this.loadingController.create({
      message: 'Memproses..',
      backdropDismiss: false
    });
    await loading.present();
    this.dolphinService.getforgotpass(this.outlet_id).subscribe((res) => {
      if(res.status == 'success'){
        this.loadingController.dismiss()
        this.showAlert('Email Terkirim', 'Cek email Anda untuk reset/lupa password');
        this.closeModal();
      } else {
        this.loadingController.dismiss()
        this.showAlert('Oops..', res.message);
      }
      
    })
  }

  async showAlert(title,msg) {
    const alert = await this.alertController.create({
      header: title,
      message: msg,
      buttons: [
        {
          text: 'Ok'
        }]
    });

    await alert.present()
  }

}
