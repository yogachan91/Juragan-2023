import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { ModalController, IonRouterOutlet, AlertController, LoadingController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { DolphinService } from '../services/dolphin.service';
import { BannerModalPage } from '../modals/banner-modal/banner-modal.page';
import { FaqModalPage } from '../modals/faq-modal/faq-modal.page';
import { RedeemModalPage } from '../modals/redeem-modal/redeem-modal.page';
import { BelanjaModalPage } from '../modals/belanja-modal/belanja-modal.page';
// import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
// import { Chart } from 'chart.js';
import { Chart, registerables } from 'chart.js';
import { ModalNotifPage } from '../modals/modal-notif/modal-notif.page';
// Chart.register(...registerables);
import { Device } from '@awesome-cordova-plugins/device/ngx';
//BACKBUTTON
import { Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { ModalSplashPage } from '../modals/modal-splash/modal-splash.page';
import { NotificationPage } from '../notification/notification.page';
import { Clipboard } from '@capacitor/clipboard';

const { App } = Plugins;
//.BACKBUTTON

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;
  doughnutChart: any;
  slideOpts = {
    slidesPerView: 1.1,
    spaceBetween: 7
  };
  slideOptstarget = {
    slidesPerView: 1.5,
    spaceBetween: 7
  };
  userData : any = [];
  token:any;
  outlet_id:any;
  slidebanner:any;
  slideinfo:any;
  balance:any;
  top5:any;
  top5brand: any;
  totalbelanja: any;
  curMonth:any;
  prevMonth:any;
  IMEI: any;
  store_name: any;
  banner_bu : any;
  cluster:any;
  warna:any;
  statuscluster:any;
  newyear:any;
  isparticipant_juragan_plus:any;
  constructor(
      private authService: AuthenticationService, 
      private dolphinService: DolphinService, 
      public modalController: ModalController,
      private routerOutlet: IonRouterOutlet,
      private alertController: AlertController,
      private router: Router,
      private loadingController: LoadingController,
      private route: ActivatedRoute,
      private platform: Platform,
      private device: Device,
      // private statusBar: StatusBar
    ) {
    //BACKBUTTON
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (!this.routerOutlet.canGoBack()) {
        this.showAlertExit()
      }
    });
    //.BACKBUTTON
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
       // console.log('PARAMS', this.router.getCurrentNavigation().extras.state.reload)
      }
    })
    
    this.dolphinService.getversion().subscribe(data => {
     // console.log('VERSION', data.status)
      if(data.status == 'updatenow') {
        this.shwoalert('Update Juragan', data.message);
        window.open('market://details?id=com.unilever.dolphin', '_system')
        this.authService.logout()
        this.router.navigateByUrl('/', { replaceUrl: true })
      }
    })
 
    this.loadUserData();
    // console.log('this.authService.getID()', this.authService.getID())
    // console.log('this.authService.getToken()', this.authService.getToken())
    this.token = this.authService.getToken();
    this.outlet_id = this.authService.getID();
    this.dolphinService.getpoint().subscribe(data => {
      this.balance = data
      this.isparticipant_juragan_plus = data.isparticipant;
      console.log('cekdatauserspastisipan',data.isparticipant)
    })

    this.dolphinService.cluster_code().subscribe(data => {
     // console.log('POIN-HOME', data);
     this.cluster = data.retdata;
     this.warna = data.warna;
   });

    this.dolphinService.gettotalbelanja().subscribe(data => {
      this.banner_target_bu();
      this.totalbelanja = data.retdata[0].total_current
       console.log('TOTAL-BELANJA', this.totalbelanja);
     
    });

    this.dolphinService.getslides().subscribe((dataBanner) => {
      // console.log('getslides', dataBanner)
      if(dataBanner) {
        // console.log('dataBanner', dataBanner);
        if(dataBanner.includes('Outlet Anda melakukan login')){
          this.shwoalert('Login Error', dataBanner);
          this.authService.logout();
          this.router.navigateByUrl('/', { replaceUrl: true });
        } else if (dataBanner.status === 'updatenow') {
            this.shwoalert('Update Juragan', dataBanner.updatenow);
            window.open('market://details?id=com.unilever.dolphin', '_system');
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

  async loadIMEI() {
    this.platform.ready().then(() => {
      if (this.platform.is('mobileweb')){
        this.IMEI = 'f76f5497984f4f7812'; //0c551d27a340dfe2 //--test-device
      } else { 
        this.IMEI = this.device.uuid;
      }
      // console.log('loadIMEI', this.IMEI);
      // console.log('this.device.platform', this.platform.platforms());
    })
    
  }


  async showAlertExit() {
    const alert = await this.alertController.create({
      header: 'Tutup Aplikasi',
      message: 'Anda Yakin Akan Keluar Dari Aplikasi Juragan?',
      buttons: [
        {
          text: 'Tidak',
          handler: () => {
          }
        },{
          text: 'Ya',
          handler: () => {
            App.exitApp();
          }
        }]
    });

    await alert.present()
  }

  ngAfterViewInit() {
    // this.doughnutChartMethod()
  }

  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Royco', 'Bango', 'Pepsodent', 'Sunlight', 'Rinso'],
        datasets: [{
          label: '# of Votes',
          data: [50, 29, 15, 10, 7],
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FF6384'
          ]
        }]
      }
    });
  }
  
  async doLoading(msg) {
    const loading = await this.loadingController.create({
      message: msg,
      backdropDismiss: false
    });
    await loading.present();
  }

  reload() {
    this.doLoading('Reloading..');
    this.loadUserData();
   // this.notifapps();
    // console.log('this.authService.getID()', this.authService.getID())
    // console.log('this.authService.getToken()', this.authService.getToken())
    this.token = this.authService.getToken();
    this.outlet_id = this.authService.getID();
    this.dolphinService.getpoint().subscribe(data => {
      // console.log('POIN-HOME', data);
      this.balance = data
      // this.userData.cluster = data.cluster
      // console.log('USERDATA-BARU', this.balance);
    });

    this.dolphinService.cluster_code().subscribe(data => {
       console.log('POIN-HOME', data);
      this.cluster = data.retdata;
      this.warna = data.warna;
    });



    this.dolphinService.getversion().subscribe(data => {
      // console.log('VERSION', data.status)
      if(data.status == 'updatenow') {
        this.shwoalert('Update Juragan', data.message);
        window.open('market://details?id=com.unilever.dolphin', '_system')
        this.authService.logout()
        this.router.navigateByUrl('/', { replaceUrl: true })
      }
    })

    this.dolphinService.gettotalbelanja().subscribe(data => {
      this.totalbelanja = data.retdata[0].total_current
      // console.log('TOTAL-BELANJA', this.totalbelanja);
    });

    this.dolphinService.getslides().subscribe((dataBanner) => {
      this.loadingController.dismiss()
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
  
  ionViewWillEnter() {
    this.dolphinService.getpoint().subscribe(data => {
      this.balance = data
      // console.log('USERDATA-getpoint', this.balance);
    });
    this.dolphinService.cluster_code().subscribe(data => {
    //  console.log('POIN-HOME', data);
     this.cluster = data.retdata;
     this.warna = data.warna;
     this.statuscluster = data.status;
     this.newyear = data.periode;
   });
  
  
  }

  async shwoalert(title, message) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK'],
    });
  
    await alert.present();  
  }

  onInit() {
  }

  async loadUserData() {
    this.loadIMEI();
    // IF MIRROR DISABLED ELSE PRODUCTION
    // this.platform.ready().then(() => {
    //  console.log('IMEI', this.IMEI)
    //   if(this.IMEI){
    //     this.dolphinService.checkimeiget(this.IMEI).subscribe((data) => {
    //        console.log('checkimei', data);
    //       if(data.status == 'timeout'){
    //         this.shwoalert('Error Login', data.retdata);
    //         this.authService.logout();
    //         this.router.navigateByUrl('/', { replaceUrl: true });
    //       }
    //     });
    //   }
    // })
    
    const _uData = await Storage.get({ key: 'USERDATA_STORAGE' });    
    if (_uData && _uData.value) {
      const _Data = _uData.value ? JSON.parse(_uData.value) : [];
      // console.log('loadUserData: ', _Data);
      this.userData = _Data;
    } else {
      await this.authService.logout();
      this.router.navigateByUrl('/', { replaceUrl: true });
    }
    
    this.splash();
    this.notifapps();
  }
  // NOTIF APPS

  async notifapps () {
     // Storage.remove({key: 'SPLASH'})
     let now = JSON.stringify(new Date());
     const _splashData = await Storage.get({ key: 'SPLASH' });
     this.dolphinService.getversionapps().subscribe((data) => {
       console.log('dataversi_', data)
       if(data.kode == 200){
        // console.log('dataversi', data)
         this.notifikasiapps();
       }
   })
  }



  //SPLASH SCREEN
  async splash() {
    // Storage.remove({key: 'SPLASH'})
    let now = JSON.stringify(new Date());
    const _splashData = await Storage.get({ key: 'SPLASH' });
    //console.log('istiqomah',_splashData);
      // if(_splashData.value) {
      //   console.log('_splashData success', _splashData.value)
      //   let datenow = new Date(JSON.parse(now));
      //   let datelastsplash = new Date(JSON.parse(_splashData.value));
      //   var diff = Math.abs(datelastsplash.getTime() - datenow.getTime()) / 3600000;
      //   console.log('timediff', diff)      
      //   this.getsplash(diff)
      // } else {      
       // console.log('_splashData failed', _splashData)
        this.getsplash(999999999)
        Storage.set({key: 'SPLASH', value: now.toString()})
        
   //   }

  }

  getsplash (diff) {
    let now = JSON.stringify(new Date());
    
    this.dolphinService.getsplashscreen().subscribe((data) => {
      if(data.status == 'success'){
        // console.log('getsplashscreen', data.retdata[0])
        // console.log('timer', data.timer)
        if(diff === 999999999) {
          this.dosplash(data.retdata[0])
        } else {
          if(diff > data.timer) {
            this.dosplash(data.retdata[0])
          }
        }
        
      }
    })
  }

  async dosplash(item) {
    const modal = await this.modalController.create({
      component: ModalSplashPage,
      componentProps: {'item':item},
      cssClass: 'trans-content',
      swipeToClose: true,
      showBackdrop: false,
      breakpoints:[0, 1],
      initialBreakpoint:1
    });
    return await modal.present();
  }


  async notifikasiapps() {
    const modal = await this.modalController.create({
      component: NotificationPage,
      cssClass: 'trans-content',
      swipeToClose: false,
      showBackdrop: false,
      backdropDismiss:false
      
    });
    return await modal.present();
  }
  //.SPLASH SCREEN

  goToBannerDetail2(item){
    let navigationExtras: NavigationExtras = { state: { item: item } };
    this.router.navigate(['bannerdetail'], navigationExtras);
  }

  async goToBannerDetail(item) {
    const modal = await this.modalController.create({
      component: BannerModalPage,
      componentProps: {'item':item},
      swipeToClose: true,
      breakpoints:[0, 0.7, 1],
      initialBreakpoint:0.7
      // presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  }

  async notifikasi() {
    const modal = await this.modalController.create({
      component: ModalNotifPage,
      swipeToClose: true,
      breakpoints:[0, 0.7, 1],
      initialBreakpoint:1
      // presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  }

  async openFAQ() {
    const modal = await this.modalController.create({
      component: FaqModalPage,
      componentProps: {},
      swipeToClose: true,
      breakpoints:[0, 0.7, 1],
      initialBreakpoint:1
      // presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  }

  async openRedeemModal() {
    const modal = await this.modalController.create({
      component: RedeemModalPage,
      componentProps: {},
      swipeToClose: true,
      breakpoints:[0, 0.4, 0.7],
      initialBreakpoint:0.7
    });
    return await modal.present();
  }

  async openmodalbelanja(){
    const modal = await this.modalController.create({
      component: BelanjaModalPage,
      componentProps: {},
      swipeToClose: true,
      breakpoints:[0, 0.4, 0.7],
      initialBreakpoint:0.6
    });
    return await modal.present();
  }

  promo2(pages){
   // console.log('cekhalaman',pages);
    let navigationExtras: NavigationExtras = { state: { page: pages} };
    this.router.navigate(['promo2'],navigationExtras);
  }

  transaksi(){
    this.router.navigateByUrl('/tabs/tab2');
  }

  top(){
    this.router.navigateByUrl('top');
  }

  riwayat_transaksi(v){
    let navigationExtras: NavigationExtras = { state: { page: v} };
    this.router.navigate(['riwayat-transaksi'],navigationExtras);
  }

  banner_target_bu(){
    this.dolphinService.banner_target_bu().subscribe((data)=>{
      console.log('cekdatabanner',data);
      if(data.status=='success'){
      this.banner_bu = data.retdata;
      } else {
        this.banner_bu = null;
      }
    }) 
  }

  unilever_produk(){
    this.router.navigate(['list-produk']);
  }

  async copy(copy){
    await  Clipboard.write({
      string: "#"+copy.toUpperCase()
    });
    this.showalert("Kode Outlet Berhasil Disalin",+copy.toUpperCase());

  }

  async showalert(title, message) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK'],
    });
  
    await alert.present();  
  }
}
