import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonRouterOutlet, ModalController } from '@ionic/angular';
import { BannerModalPage } from '../modals/banner-modal/banner-modal.page';
import { AuthenticationService } from '../services/authentication.service';
import { DolphinService } from '../services/dolphin.service';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.page.html',
  styleUrls: ['./promo.page.scss'],
})
export class PromoPage implements OnInit {
  slidebanner: any;
  constructor(
    private dolphinService: DolphinService,
    private authService: AuthenticationService,
    private alertController: AlertController,
    private router: Router,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) {
    this.dolphinService.getslides().subscribe((dataBanner) => {
      if(dataBanner) {
        if(dataBanner.includes('Outlet Anda melakukan login')){
          this.shwoalert('Login Error', dataBanner);
          this.authService.logout();
          this.router.navigateByUrl('/', { replaceUrl: true });
        } else {
          // console.log('dataBanner', dataBanner)
          let slidebannerRaw = dataBanner;
          this.slidebanner = slidebannerRaw.filter((item) => {
            return item.isbanner == 1 && item.ispromo == 1;
          })
        }
        
      }
    });
  }

  async goToBannerDetail(item) {
    const modal = await this.modalController.create({
      component: BannerModalPage,
      componentProps: {'item':item},
      swipeToClose: true,
      breakpoints:[0, 0.7, 1],
      initialBreakpoint:0.7,
      // presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  }

  async shwoalert(title, message) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK'],
    });
  
    await alert.present();  
  }

  ngOnInit() {
  }

}
