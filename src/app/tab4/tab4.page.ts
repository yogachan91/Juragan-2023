import { Component } from '@angular/core';
import { DolphinService } from '../services/dolphin.service';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { ResiModalPage } from '../modals/resi-modal/resi-modal.page';
import { DetailCorporateDistributionPage } from '../modals/detail-corporate-distribution/detail-corporate-distribution.page';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  segmen:string = 'banner_bu_corporate';
  segmendetailcorp:string = 'fop';
  segmendetailhomecare:string = 'category';
  segmendetailpersonalcare:string = 'category';
  segmendetailnutrition:string = 'category';
  segmendetailbw:string = 'category';
  invoices:any
  redeems:any
  redeemsovo: any;
  basic_point : any;
  top_up_category : any;
  loyalty : any;

  top5:any;
  top5brand: any;
  totalbelanja: any;
  fop:any;
  curMonth:any;
  prevMonth:any;
  tahun:any;
  notif: any;
  banner_bu_corporate : any;
  home_care : any;
  personal_care : any;
  nutrition : any;
  bw : any;

  nama_bu_corp:any;
  nama_home_care:any;
  nama_nutrition:any;
  nama_personal_care:any;
  nama_bw:any;

  target_corporate_loyalty: any;
  target_corporate_category: any;
  target_corporate_produk :any;
  target_corporate_produk_detail:any;

  target_homecare_loyalty: any;
  target_homecare_category: any;
  target_homecare_produk :any;
  target_homecare_produk_detail:any;

  target_personal_loyalty: any;
  target_personal_category: any;
  target_personal_care_produk :any;
  target_personal_produk_detail:any;

  target_nutrition_loyalty: any;
  target_nutrition_category: any;
  target_nutrition_produk :any;
  target_nutrition_produk_detail:any;

  target_bw_loyalty: any;
  target_bw_category: any;
  target_bw_produk :any;
  target_bw_produk_detail:any;

  fop_poin:any;
  bonus_growth:any;
  statuspalapa:any;

  isfop:any;
  isgrowth:any;
  iscorpcategory:any;

  header_target_dist:any;
  ishomecare_category:any;
  istarget_personal_category:any;
  istarget_nutrition_category:any;
  istarget_bw_category:any;
  constructor(
    private dolphinService: DolphinService,
    private router: Router,
    private alertController: AlertController,
    private modalController: ModalController,
    private loadingController: LoadingController,
  ) {
      this.getdata();
      this.banner_target_bu();

  }
  

  

  getdata() {
    // TARGET LOYALTY-----------------------------------------------------------------------------------
    // target_corporate loyalty
    this.dolphinService.target_corporate('fop').subscribe((target_corporate_loyalty) => {
     
    //  if(target_corporate_loyalty) {
        if(target_corporate_loyalty ==null) {
          this.fop_poin = [];
          this.isfop = 0;
        } else {
          //  console.log('target_corporate_loyalty', target_corporate_loyalty)
          this.fop_poin = target_corporate_loyalty;
          this.isfop = 1;
        }
        console.log('target_corporate_loyalty',this.isfop)
    //  }

    
      this.dolphinService.target_corporate('bonus_growth').subscribe((bonus_growth) => {
       // if(bonus_growth) {
          if(bonus_growth==null) {
            this.bonus_growth = [];
            this.isgrowth = 0;
          } else {
            //  console.log('target_corporate_loyalty', target_corporate_loyalty)
            this.bonus_growth = bonus_growth;
            this.isgrowth = 1;
          }
          this.loadingController.dismiss()
        //}
      });

      
      
      // target_corporate category
      this.dolphinService.target_corporate('category').subscribe((target_corporate_category) => {    
      //  if(target_corporate_category) {
          if(target_corporate_category==null) {
            this.target_corporate_category = [];
            this.iscorpcategory=0;
          } else {
              console.log('category_corp', target_corporate_category)
            this.target_corporate_category = target_corporate_category;
            this.iscorpcategory=1;
          }
      //  }
      })
  
       // target_corporate produk
       this.dolphinService.target_corporate('produk').subscribe((target_corporate_produk) => {
        if(target_corporate_produk) {
          if(target_corporate_produk.includes('Belum ada')) {
            this.target_corporate_produk =null;
          } else {
              console.log('target_corporate_produksss', target_corporate_produk[0])
            this.target_corporate_produk = target_corporate_produk[0]
          }
        }
      });

      // target_corporate detail produk
      this.dolphinService.target_corporate('detail').subscribe((target_corporate_produk_detail) => {
       
          if(target_corporate_produk_detail==null) {
            this.target_corporate_produk_detail =null;
          } else {
            //  console.log('target_corporate_produk', target_corporate_produk_detail)
            this.target_corporate_produk_detail = target_corporate_produk_detail;
          }
          console.log('target_corporate_produkss', target_corporate_produk_detail)
          
         
      });


      // TARGET HOMECARE-----------------------------------------------------------------------------------
      // target_homecare loyalty
      this.dolphinService.target_homecare('loyalty').subscribe((target_homecare_loyalty) => {
       // if(target_homecare_loyalty) {
          if(target_homecare_loyalty==null) {
            this.target_homecare_loyalty = [];
          } else {
            //  console.log('target_homecare_loyalty', target_homecare_loyalty)
            this.target_homecare_loyalty = target_homecare_loyalty;
          }
       // }
      });
        
        // target_homecare category
        this.dolphinService.target_homecare('category').subscribe((target_homecare_category) => {    
         // if(target_homecare_category) {
            if(target_homecare_category==null) {
              this.target_homecare_category = [];
              this.ishomecare_category=0;
            } else {
              //  console.log('target_homecare_category', target_homecare_category)
              this.target_homecare_category = target_homecare_category;
              this.ishomecare_category=1;
            }
            console.log('ishomecare_category',this.ishomecare_category)
       //   }
        });
    
         // target_homecare produk
         this.dolphinService.target_homecare('produk').subscribe((target_homecare_produk) => {
          if(target_homecare_produk) {
            if(target_homecare_produk.includes('Belum ada')) {
              this.target_homecare_produk =null;
            } else {
              //  console.log('target_homecare_produk', target_homecare_produk[0])
              this.target_homecare_produk = target_homecare_produk[0]
            }
          }
        });
  
        // target_homecare detail produk
        this.dolphinService.target_homecare('detail').subscribe((target_homecare_produk_detail) => {
          if(target_homecare_produk_detail) {
            if(target_homecare_produk_detail.includes('Belum ada')) {
              this.target_homecare_produk_detail =null;
            } else {
              //  console.log('target_homecare_produk_detail', target_homecare_produk_detail)
              this.target_homecare_produk_detail = target_homecare_produk_detail;
            }
          }
        });


      // TARGET PERSONAL CARE-----------------------------------------------------------------------------------
      // target_personal loyalty
      this.dolphinService.target_personal_care('loyalty').subscribe((target_personal_loyalty) => {
        if(target_personal_loyalty) {
          if(target_personal_loyalty.includes('Belum ada')) {
            this.target_personal_loyalty = []
          } else {
            //  console.log('target_personal_loyalty', target_personal_loyalty)
            this.target_personal_loyalty = target_personal_loyalty
          }
        }
      });
        
        // target_personal category
        this.dolphinService.target_personal_care('category').subscribe((target_personal_category) => {    
        //  if(target_personal_category) {
            if(target_personal_category==null) {
              this.target_personal_category = [];
              this.istarget_personal_category=0;
            } else {
              //  console.log('target_personal_category', target_personal_category)
              this.target_personal_category = target_personal_category;
              this.istarget_personal_category=1;
            }
       //   }
        });
    
         // target_personal produk
         this.dolphinService.target_personal_care('produk').subscribe((target_personal_care_produk) => {
          if(target_personal_care_produk) {
            if(target_personal_care_produk.includes('Belum ada')) {
              this.target_personal_care_produk =null;
            } else {
              //  console.log('target_personal_care_produk', target_personal_care_produk[0])
              this.target_personal_care_produk = target_personal_care_produk[0]
            }
          }
        });
  
        // target_personal detail produk
        this.dolphinService.target_personal_care('detail').subscribe((target_personal_produk_detail) => {
          if(target_personal_produk_detail) {
            if(target_personal_produk_detail.includes('Belum ada')) {
              this.target_personal_produk_detail =null;
            } else {
              //  console.log('target_personal_produk_detail', target_personal_produk_detail)
              this.target_personal_produk_detail = target_personal_produk_detail;
            }
          }
        });



     // TARGET NUTRITION-----------------------------------------------------------------------------------
      // target_nutrition loyalty
      this.dolphinService.target_nutrition('loyalty').subscribe((target_nutrition_loyalty) => {
        if(target_nutrition_loyalty) {
          if(target_nutrition_loyalty.includes('Belum ada')) {
            this.target_nutrition_loyalty = []
          } else {
            //  console.log('target_nutrition_loyalty', target_nutrition_loyalty)
            this.target_nutrition_loyalty = target_nutrition_loyalty
          }
        }
      });
        
        // target_nutrition category
        this.dolphinService.target_nutrition('category').subscribe((target_nutrition_category) => {    
          //if(target_nutrition_category) {
            if(target_nutrition_category==null) {
              this.target_nutrition_category = [];
              this.istarget_nutrition_category=0;
            } else {
              //  console.log('target_nutrition_category', target_nutrition_category)
              this.target_nutrition_category = target_nutrition_category;
              this.istarget_nutrition_category=1;
            }
       //   }
        });
    
         // target_nutrition produk
         this.dolphinService.target_nutrition('produk').subscribe((target_nutrition_produk) => {
          if(target_nutrition_produk) {
            if(target_nutrition_produk.includes('Belum ada')) {
              this.target_nutrition_produk =null;
            } else {
              //  console.log('target_nutrition_produk', target_nutrition_produk[0])
              this.target_nutrition_produk = target_nutrition_produk[0]
            }
          }
        });
  
        // target_nutrition detail produk
        this.dolphinService.target_personal_care('detail').subscribe((target_nutrition_produk_detail) => {
          if(target_nutrition_produk_detail) {
            if(target_nutrition_produk_detail.includes('Belum ada')) {
              this.target_nutrition_produk_detail =null;
            } else {
              //  console.log('target_nutrition_produk_detail', target_nutrition_produk_detail)
              this.target_nutrition_produk_detail = target_nutrition_produk_detail;
            }
          }
        });


        // TARGET BW-----------------------------------------------------------------------------------
      // target_bw loyalty
      this.dolphinService.target_bw('loyalty').subscribe((target_bw_loyalty) => {
        if(target_bw_loyalty) {
          if(target_bw_loyalty.includes('Belum ada')) {
            this.target_bw_loyalty = []
          } else {
            //  console.log('target_bw_loyalty', target_bw_loyalty)
            this.target_bw_loyalty = target_bw_loyalty
          }
        }
      });
        
        // target_bw category
        this.dolphinService.target_bw('category').subscribe((target_bw_category) => {    
         // if(target_bw_category) {
            if(target_bw_category==null) {
              this.target_bw_category = [];
              this.istarget_bw_category=0;
            } else {
              //  console.log('target_bw_category', target_bw_category)
              this.target_bw_category = target_bw_category
              this.istarget_bw_category=1
            }
        //  }
        });
    
         // target_bw produk
         this.dolphinService.target_bw('produk').subscribe((target_bw_produk) => {
          if(target_bw_produk) {
            if(target_bw_produk.includes('Belum ada')) {
              this.target_bw_produk =null;
            } else {
              //  console.log('target_bw_produk', target_bw_produk[0])
              this.target_bw_produk = target_bw_produk[0]
            }
          }
        });
  
        // target_bw detail produk
        this.dolphinService.target_bw('detail').subscribe((target_bw_produk_detail) => {
          if(target_bw_produk_detail) {
            if(target_bw_produk_detail.includes('Belum ada')) {
              this.target_bw_produk_detail =null;
            } else {
              //  console.log('target_bw_produk_detail', target_bw_produk_detail)
              this.target_bw_produk_detail = target_bw_produk_detail;
            }
          }
        });

        // header_target_dist
        this.dolphinService.header_target_dist().subscribe((data) => {
          console.log('datasss', data.text_apps)
              this.header_target_dist = data.text_apps;
        });

    });
  
  
     
    
  }

  //ovo
  cekstatus(rno) {
    this.doLoading('Melakukan pengecekan status redeem...')
    this.dolphinService.checkovostatus(rno).subscribe(data => {
      console.log(data)
      if(data['data']['orderList'][0]['status']) {
        this.showalert("Status Redeem", data['data']['orderList'][0]['status']);
      } else {
        this.showalert("Status Redeem", 'Redeem #'+rno+' sedang diproses, cek kembali dilain waktu..');
      }
      this.loadingController.dismiss()
    });
  }

  async doLoading(msg) {
    const loading = await this.loadingController.create({
      message: msg,
      backdropDismiss: false
    });
    await loading.present();
  }

  async showalert(title, message) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK'],
    });
  
    await alert.present();  
  }

  
  //.ovo

  refresh() {
    this.doLoading('Reloading..');
    this.fop = null;
    this.totalbelanja = null;
    this.top5brand = null;
    this.top5 = null;
    this.redeems = null;
    this.invoices = null;
    this.getdata();
    this.notif = "";
  }

  

  details(i, t) {
    let navigationExtras: NavigationExtras = { state: { item: i, type: t} };
    this.router.navigate(['top-detail'], navigationExtras);
  }

  async cekresi(r) {
    const alert = await this.alertController.create({
      header: 'Cek Resi',
      message: 'Untuk cek resi anda akan diarahkan ke link external melalui browser pada device Anda. Buka browser untuk pengecekan pengiriman?',
      buttons: [
        {
          text: 'Nanti Saja',
          handler: data => {
            // console.log('Cancel clicked');
          }
        },
        {
          text: 'Ya Cek Sekarang',
          handler: data => {
            window.open("https://cekresi.com/?noresi="+r,'_system', 'location=yes');
          }
        }]
    });

    await alert.present()
  }

  async lapor(no,name) {
    const alert = await this.alertController.create({
      header: 'Lapor Redeem Ini',
      message: 'Untuk melakukan pelaporan Anda akan otomatis kami arahkan ke tim support via WhatApp, lanjutkan untuk pelaporan?',
      buttons: [
        {
          text: 'Nanti Saja',
          handler: data => {
            // console.log('Cancel clicked');
          }
        },
        {
          text: 'Ya Lapor Sekarang',
          handler: data => {
            window.open("https://wa.me/6281288614405?text=Halo%20Admin,%20Saya%20ingin%20melaporkan%20redeem%20saya%20berupa:%20"+name.trim()+",%20dengan%20nomor%20redeem:%20"+no.trim()+"%20mohon%20bantuannya%20ya..","_system");
          }
        }]
    });

    await alert.present()
    
  }

  selesai(no) {
    this.dolphinService.setredeemselesai(no).subscribe(data => {
      if(data.status == 'success'){
        this.refresh()
        alert('Redeem Anda telah selsai..');
      }
    });
  }

  async lihatresi(item) {
    const modal = await this.modalController.create({
      component: ResiModalPage,
      componentProps: {'item':item},
      swipeToClose: true,
      breakpoints:[0, 0.7, 1],
      initialBreakpoint:0.7
      // presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  }


  

  banner_target_bu(){
    this.dolphinService.banner_target_bu().subscribe((data)=>{
      console.log('cekdata',data);
      if(data.status=='success'){
        this.nama_bu_corp = data.retdata[0].nama_banner;
        this.banner_bu_corporate = data.retdata[0].status;

        this.nama_home_care = data.retdata[1].nama_banner;
        this.home_care = data.retdata[1].status;

        this.nama_personal_care = data.retdata[2].nama_banner;
        this.personal_care = data.retdata[2].status;

        this.nama_nutrition = data.retdata[3].nama_banner;
        this.nutrition = data.retdata[3].status;

        this.nama_bw = data.retdata[4].nama_banner;
        this.bw = data.retdata[4].status;
      } 
    }) 
  }

  async lihat_detail_corporate_distribution(item) {
    const modal = await this.modalController.create({
      component: DetailCorporateDistributionPage,
      componentProps: {'item':item},
      swipeToClose: true,
      breakpoints:[0, 0.7, 1],
      initialBreakpoint:1
      // presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  }

  

}
