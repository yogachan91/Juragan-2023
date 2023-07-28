import { Component, OnInit } from '@angular/core';
import { NavigationExtras,Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private alertController: AlertController
  ) { }

  async logout() {
    const alert = await this.alertController.create({
      header: 'Konfirmasi!',
      message: 'Anda yakin melakukan <strong>Keluar</strong> dari aplikasi Juragan?',
      buttons: [
        {
          text: 'Tidak',
          cssClass: 'secondary'
        }, {
          text: 'Ok',
          id: 'confirm-button',
          handler: () => {
            this.authService.logout();
            this.router.navigateByUrl('/', { replaceUrl: true });
          }
        }
      ]
    });

    await alert.present();
  }
  
  ngOnInit() {
  }

  goTo(param) {
    // console.log(param);
    if(param == 'profile') {
      let navigationExtras: NavigationExtras = { state: { page: 'alamat'} };
      this.router.navigate(['profile'],navigationExtras);
    } else if(param == 'password') {
      this.router.navigate(['reset-pass'])
    } else if(param == 'gantino') {
      this.router.navigate(['ganti-no'])
    } else if(param == 'imei') {
      this.router.navigate(['reset-imei'])
    } else if(param == 'redeem-status') {
      this.router.navigate(['redeem-status'])
    } else {

    }
  }

}
