import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController, NavParams } from '@ionic/angular';
import { DolphinService } from 'src/app/services/dolphin.service';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.page.html',
  styleUrls: ['./register-modal.page.scss'],
})
export class RegisterModalPage implements OnInit {
  outlet_id: any;
  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private dolphinService: DolphinService,
  ) { }

  ngOnInit() {
    console.table(this.navParams);
  }

  async daftar() {
    const loading = await this.loadingController.create({
      message: 'Pendaftaran..',
      backdropDismiss: false
    });
    await loading.present();

    if(this.outlet_id) {
      if(this.outlet_id.length > 17) {
        this.dolphinService.getregister(this.outlet_id).subscribe((res) => {
          if(res.status == 'success'){
            this.loadingController.dismiss()
            this.showAlert('Email Terkirim', 'Cek email Anda untuk melihat petunjuk pengambilan password');
            this.closeModal();
          } else {
            this.loadingController.dismiss()
            this.showAlert('Oops..', res.message);
          }
        })
      } else {
        this.showAlert('Oops..', 'Kode Outlet minimal 18 angka')
      }
      
      this.loadingController.dismiss()
    } else {
      this.showAlert('Oops..', 'Kode Outlet harus diisi')
      this.loadingController.dismiss()
    }
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

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }
}
