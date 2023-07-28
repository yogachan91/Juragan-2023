import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { DolphinService } from '../services/dolphin.service';

@Component({
  selector: 'app-ganti-no',
  templateUrl: './ganti-no.page.html',
  styleUrls: ['./ganti-no.page.scss'],
})
export class GantiNoPage implements OnInit {

  constructor(
    private dolphinService: DolphinService,
    private alertController: AlertController,
    private navController: NavController
  ) { }

  ngOnInit() {
  }

  sendEmail() {
    this.dolphinService.getGantiNoHape().subscribe(data => {
      if(data.status == 'success') {
        this.showAlert()
      }
      
    })
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Cek Email Anda',
      message: 'Kami telah mengirimkan email petunjuk penggantian No. HP, silahkan cek dan ikuti langkah-langkah pada email Anda.',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
          // log auth
          this.dolphinService.logs_auth('email','ganti_no').subscribe(data => {});
            this.navController.pop();
          }
        }]
    });

    await alert.present()
  }
}
