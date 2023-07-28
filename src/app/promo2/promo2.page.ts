import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonRouterOutlet, ModalController } from '@ionic/angular';
import { BannerModalPage } from '../modals/banner-modal/banner-modal.page';
import { AuthenticationService } from '../services/authentication.service';
import { DolphinService } from '../services/dolphin.service';

@Component({
  selector: 'app-promo2',
  templateUrl: './promo2.page.html',
  styleUrls: ['./promo2.page.scss'],
})
export class Promo2Page  {
  slidebanner: any;
  slideinfo: any;
  segmen: string = 'promo';
  constructor(
    private dolphinService: DolphinService,
    private authService: AuthenticationService,
    private alertController: AlertController,
    private router: Router,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) {
    const halaman = this.router.getCurrentNavigation();
    this.segmen = halaman.extras.state.page;

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

          let slideinfoRaw = dataBanner;
          this.slideinfo = slideinfoRaw.filter((item) => {
            return item.isbanner == 0 && item.ispromo == 0;
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
      breakpoints:[0, 0.8, 1],
      initialBreakpoint:1,
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
