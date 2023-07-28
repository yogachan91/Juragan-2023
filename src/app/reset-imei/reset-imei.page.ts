import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { DolphinService } from '../services/dolphin.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-imei',
  templateUrl: './reset-imei.page.html',
  styleUrls: ['./reset-imei.page.scss'],
})
export class ResetImeiPage implements OnInit {
  constructor(
    private dolphinService: DolphinService,
    private alertController: AlertController,
    private navController: NavController,
    private authService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  sendEmail() {
    this.dolphinService.getResetIMEI().subscribe(data => {
      if(data.status == 'success') {
        this.alertConfirm()
      }
      
    })
  }

  async showAlert() {
    const alertPerhatian = await this.alertController.create({
      header: 'PERHATIAN',
      message: 'Pastikan Email Anda sudah terdaftar dengan benar untuk menerima instruksi Reset IMEI, melakukan reset IMEI akan otomatis menutup session login Anda <strong>(Log out otomatis)</strong>. Anda yakin untuk melanjutkan?',
      buttons: [{
        text: 'Cancel',
        handler: () => {
        }},
        {
          text: 'Ya',
          handler: () => {
            this.sendEmail()
          }
        }]
    });

    await alertPerhatian.present()
  }

  async alertConfirm() {
    const alert = await this.alertController.create({
      header: 'Cek Email Anda',
      message: 'Email terkirim, silahkan cek dan ikuti langkah-langkah pada email Anda.',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.dolphinService.logs_auth('email','reset_imei').subscribe(data => {});
          }
        }]
    });
    this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
    await alert.present()
  }

}
