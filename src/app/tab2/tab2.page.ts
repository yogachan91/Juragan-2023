import { Component } from '@angular/core';
import { DolphinService } from '../services/dolphin.service';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { ResiModalPage } from '../modals/resi-modal/resi-modal.page';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clipboard } from '@capacitor/clipboard';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  segmen:string = 'poin';
  segmendetailpoin:string = 'page_basic_poin';
  segmenlogammulia:string = 'logammulia';
  invoices:any
  redeems:any
  redeemsovo: any;
  basic_point : any;
  basic_point_detail:any;
  top_up_category : any;
  loyalty : any;
  fop_poin_header:any;
  fop_poin_detail:any;
  fop_poin:any;
  growth_poin:any;
  distribution_poin:any;
  category_point:any;
  palapa:any;

  top5:any;
  top5brand: any;
  totalbelanja: any;
  fop:any;
  curMonth:any;
  prevMonth:any;
  tahun:any;
  weeks:any;
  notif: any;
  poin_aktif:any;
  statuspalapa:any;
  statusdata : any;
  hidebasicpoint:any;

  header_lapor:any;
  message_lapor:any;

  isvadasibasicpoint:any;

  formpoint_basic_point : FormGroup;
  formpoint_fop_poin: FormGroup;
  formpoint_growth_poin: FormGroup;
  formpoint_distribution: FormGroup;
  formpoint_category_poin : FormGroup;
  formpoint_palapa: FormGroup;
  
  constructor(
    private dolphinService: DolphinService,
    private router: Router,
    private alertController: AlertController,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private fb: FormBuilder,
  ) {
      this.getdata();
  }
  

  

  getdata() {
    this.dolphinService.gettransaksi('invoice').subscribe((dataInvoice) => {
       console.log('gettransaksi', dataInvoice)
      if(dataInvoice) {
        if(dataInvoice.includes('Belum ada')) {
          this.invoices = []
        } else {
          this.invoices = dataInvoice
          
        }
      }
      this.formpoint_basic_point = this.fb.group({
       // bulan : ['',[Validators.required]],
        tahun : ['',[Validators.required]],
        week  : ['',[Validators.required]],
      });

      this.formpoint_fop_poin = this.fb.group({
        bulan : ['',[Validators.required]],
        tahun : ['',[Validators.required]],
      });

 
      this.formpoint_growth_poin = this.fb.group({
        bulan : ['',[Validators.required]],
        tahun : ['',[Validators.required]],
      });

      this.formpoint_distribution = this.fb.group({
        bulan : ['',[Validators.required]],
        tahun : ['',[Validators.required]],
      });

      this.formpoint_category_poin = this.fb.group({
        bulan : ['',[Validators.required]],
        tahun : ['',[Validators.required]],
      });

      this.formpoint_palapa = this.fb.group({
        bulan : ['',[Validators.required]],
        tahun : ['',[Validators.required]],
      });


      this.dolphinService.gettransaksi('redeem').subscribe((dataRedeem) => {
      
        if(dataRedeem) {
          if(dataRedeem.includes('Belum ada')) {
            this.redeems = []
          } else {
             console.log('dataRedeem', dataRedeem)
            this.redeems = dataRedeem
          }
        }
      })
      // basic poin
      this.dolphinService.riwayat_poin('basic_point').subscribe((databasicpoin) => {
        console.log('cekdatabspoin1',databasicpoin)
      //  if(databasicpoin) {
          if(databasicpoin.fop_poin==null) {
            this.basic_point = [];
            this.basic_point_detail=[];
            this.hidebasicpoint =0;
          } else {
            this.basic_point = databasicpoin.retdata
            this.basic_point_detail = databasicpoin.detail
            this.hidebasicpoint =1;
          }
          console.log('basic_pointriwayat', this.hidebasicpoint)
          console.log('databasicpoinss', databasicpoin)
     //   }
      })
  
      

      // FOP Poin
      this.dolphinService.riwayat_poin('fop_poin').subscribe((datatopup) => {
        if(datatopup.detail) {
          if(datatopup.detail.includes('Belum ada')) {
            this.fop_poin_header = null;
            this.fop_poin_detail = [];
            this.fop_poin = null;
          } else {
             console.log('datatopupsssss', datatopup)
            this.fop_poin_header = datatopup.retdata;
            this.fop_poin = datatopup.fop_poin;
            this.fop_poin_detail = datatopup.detail;
          
          }
        }
      })


       // growth_poin
       this.dolphinService.riwayat_poin('growth_poin').subscribe((datatopup) => {
        
        if(datatopup.retdata) {
          if(datatopup.retdata.includes('Belum ada')) {
            this.growth_poin = []
          } else {
             console.log('datatopup', datatopup.retdata)
            this.growth_poin = datatopup.retdata
          }
        }
      })

      // distribution_poin
      this.dolphinService.riwayat_poin('distribution_poin').subscribe((dataloyalty) => {
        
        if(dataloyalty.retdata) {
          if(dataloyalty.retdata.includes('Belum ada')) {
            this.distribution_poin = []
          } else {
             console.log('dataloyalty', dataloyalty.retdata)
            this.distribution_poin = dataloyalty.retdata
          }
        }
      })

      // distribution_poin
      this.dolphinService.riwayat_poin('category_point').subscribe((dataloyalty) => {
        console.log('datacekriwayatpoinku', dataloyalty)
        if(dataloyalty.retdata) {
          if(dataloyalty.retdata.includes('Belum ada')) {
            this.category_point = []
          } else {
             console.log('datacekriwayatpoinku', dataloyalty.retdata)
            this.category_point = dataloyalty.retdata
          }
        }
      })

      // palapa
      this.dolphinService.riwayat_poin('palapa').subscribe((dataloyalty) => {
        
        if(dataloyalty.retdata) {
          if(dataloyalty.retdata.includes('Belum ada')) {
            this.palapa = []
          } else {
             console.log('dataloyalty', dataloyalty.retdata)
            this.palapa = dataloyalty.retdata
          }
        }
      })

      



  
      // tahun
  
      this.dolphinService.tahun().subscribe((data)=>{
        this.tahun = data;
      });

      // week
      this.dolphinService.week().subscribe((data)=>{
        this.weeks = data;
      })

      // poin aktif
      this.dolphinService.poin_aktif().subscribe((data)=>{
        this.poin_aktif = data.retdata;
      });
      this.loadingController.dismiss()

      this.dolphinService.statususerriwayat().subscribe((data) => {
        this.statuspalapa = data.retdata[0].isparticipant;
        this.statusdata = data.statusdata;
        console.log('statuspalapa',data.retdata[0])
  });

  this.isvadasibasicpoint = 'bulan';
});

    

    

   
    

    //OVO
    // this.dolphinService.getlistredeemovo().subscribe((dataRedeem) => {
    //   if(dataRedeem) {
    //     this.redeemsovo = dataRedeem['retdata']
    //   }
    // })
    //.OVO
    let d1 = new Date();
    let d2 = new Date();
    this.curMonth = d1
    this.prevMonth = new Date(d2.setMonth(d2.getMonth()-1))
    // this.dolphinService.gettop5().subscribe(data => {
    //   // console.log('gettop5', data)
    //   if(data){
    //     this.top5 = data.retdata
    //   } else {
    //     this.top5 = []
    //   }
    // });

    // this.dolphinService.gettop5brand().subscribe(data => {
    //   // console.log('gettop5brand', data)
    //   if(data){
    //     this.top5brand = data.retdata
    //   } else {
    //     this.top5brand = []
    //   }

    // });

    this.dolphinService.gettotalbelanja().subscribe(data => {
      // console.log('gettotalbelanja', data)
      if(data.retdata[0]){
        this.totalbelanja = data.retdata[0].total_current
      } else {
        this.totalbelanja = []
      }
    });

    this.dolphinService.getfop().subscribe(data => {
      // console.log('getfop', data)
      if(data.status == 'success'){
        this.fop = data.retdata[0].total_current
      } else {
        this.fop = []
      }
    });

    this.dolphinService.whatsappinfo('','').subscribe(data => {
      console.log('infowa1',data.info2)
    this.header_lapor = data.header_lapor;
    this.message_lapor = data.message_lapor;
    });

    // this.dolphinService.updatestatusriwayat().subscribe(data => {
    //   console.log('infowa1',data.info2)
    // this.header_lapor = data.header_lapor;
    // this.message_lapor = data.message_lapor;
    // });

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
      backdropDismiss: false,
    });
    await loading.present();
  }

  async doLoadingfilter(msg) {
    const loading = await this.loadingController.create({
      message: msg,
      backdropDismiss: false,
      duration: 3000
    });
    await loading.present();
  }

  async doLoadingfilterfop(msg) {
    const loading = await this.loadingController.create({
      message: msg,
      backdropDismiss: false,
      duration: 3000
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
  
   // this.filterpoint_basic_point();
    // this.filterpoint_invoice();
    // this.filterpoint_loyalty();
    // this.filterpoint_top_up_category();
    this.notif = "";
  }

  refreshresi() {
    this.doLoading('Reloading..');
    this.getdata();
  
   // this.filterpoint_basic_point();
    // this.filterpoint_invoice();
    // this.filterpoint_loyalty();
    // this.filterpoint_top_up_category();
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
      header: this.header_lapor,
      message: this.message_lapor,
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
            this.dolphinService.whatsappinfo(name,no).subscribe(data => {
              console.log('infowa3',data.info3)
              const infowa = data.info3;         
              window.open(infowa,"_system");
          });
          }
        }]
    });
  

    await alert.present()
  
    
  }

  selesai(no) {
    this.dolphinService.setredeemselesai(no).subscribe(data => {
      if(data.status == 'success'){
        this.refreshresi()
        alert('Selamat, Redeem Anda Telah Selesai!');
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


  filterpoint_basic_point(){
   // alert(this.formpoint_basic_point.value['week'])
    this.dolphinService.filterpoint_basic_poin(this.formpoint_basic_point.value['tahun'],this.formpoint_basic_point.value['week']).subscribe((data)=>{
      this.doLoadingfilter('Loading')
     console.log('hermansyah',data)
      if(data.status=="success"){
        this.basic_point = data.retdata;
        this.basic_point_detail= data.detail;
        this.hidebasicpoint =1;
        
      } else {
        this.basic_point = [];
        this.basic_point_detail=[];
        this.hidebasicpoint =0;
        // this.showalert("Notifikasi", 'Data Kosong');
      }

      console.log('basic_pointriwayatdata',  this.formpoint_basic_point.value['tahun'])
       // this.invoices = data;
    });
    
  }
  tahun_basic_point(){
    if(this.formpoint_basic_point.value['tahun']==2022){
      this.isvadasibasicpoint = 'week';
    } else {
      this.isvadasibasicpoint = 'bulan';
    }
  }

 
  filterpoint_fop_poin(){
    this.doLoadingfilterfop('Loading')
    this.dolphinService.filterpoint(this.formpoint_fop_poin.value['tahun'],this.formpoint_fop_poin.value['bulan'],'fop_poin').subscribe((datatopup)=>{
      if(datatopup) {
        if(datatopup.detail.includes('Belum ada')) {
          this.fop_poin_header = null;
          this.fop_poin_detail = [];
          this.fop_poin = null;
        } else {
           console.log('datatopupsssssss', datatopup)
          this.fop_poin_header = datatopup.retdata;
          this.fop_poin = datatopup.fop_poin;
          this.fop_poin_detail = datatopup.detail;
        
        }
      }
       // this.invoices = data;
    });
  }

  filterpoint_growth_poin(){
    this.doLoadingfilter('Loading')
    this.dolphinService.filterpoint(this.formpoint_growth_poin.value['tahun'], this.formpoint_growth_poin.value['bulan'],'growth_poin').subscribe((datatopup)=>{
      if(datatopup.retdata) {
        if(datatopup.retdata.includes('Belum ada')) {
          this.growth_poin = [];
          // this.showalert("Notifikasi", 'Data Kosong');
        } else {
           console.log('datatopup', datatopup.retdata)
          this.growth_poin = datatopup.retdata
        }
      }
    });
  }

  filterpoint_distribution(){
    this.doLoadingfilter('Loading')
    this.dolphinService.filterpoint(this.formpoint_distribution.value['tahun'], this.formpoint_distribution.value['bulan'],'distribution_poin').subscribe((dataloyalty)=>{
      if(dataloyalty.retdata) {
        if(dataloyalty.retdata.includes('Belum ada')) {
          this.distribution_poin = [];
          // this.showalert("Notifikasi", 'Data Kosong');
        } else {
           console.log('dataloyalty', dataloyalty.retdata)
          this.distribution_poin = dataloyalty.retdata
        }
      }
    });
  }

  filterpoint_category_point(){
    this.doLoadingfilter('Loading')
    this.dolphinService.filterpoint(this.formpoint_category_poin.value['tahun'], this.formpoint_category_poin.value['bulan'],'category_point').subscribe((dataloyalty)=>{
      if(dataloyalty.retdata) {
        if(dataloyalty.retdata.includes('Belum ada')) {
          this.category_point = [];
          // this.showalert("Notifikasi", 'Data Kosong');
        } else {
           console.log('dataloyalty', dataloyalty.retdata)
          this.category_point = dataloyalty.retdata
        }
      }
    });
  }

  filterpoint_palapa(){
    this.doLoadingfilter('Loading')
    this.dolphinService.filterpoint(this.formpoint_palapa.value['tahun'], this.formpoint_palapa.value['bulan'],'palapa').subscribe((dataloyalty)=>{
      if(dataloyalty.retdata) {
        if(dataloyalty.retdata.includes('Belum ada')) {
          this.palapa = [];
          // this.showalert("Notifikasi", 'Data Kosong');
        } else {
           console.log('dataloyalty', dataloyalty.retdata)
          this.palapa = dataloyalty.retdata
        }
      }
    });
  }

  async copyinvoice(copy){
    await  Clipboard.write({
      string: "#"+copy.toUpperCase()
    });
    this.showalert("No. Redeem Berhasil Disalin", "#"+copy.toUpperCase());

  }

  async showalertevoucher(header,message) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [
        {
          text: 'Tutup',
          handler: data => {
          }
        }]
    });

    await alert.present()
  }

   cekvoucher(no_redeem){
    this.doLoading('Loading..');
    this.dolphinService.cekvocuher(no_redeem).subscribe((data)=>{
      if(data.status=='success'){
        let header = 'Selamat !';
        let textmessage = 'Kode eVoucher anda sudah terkirim ke email, silahkan cek email anda';
        this.showalertevoucher(header,textmessage);
      } else {
        let header = 'Info';
        let textmessage = 'Silahkan tunggu, proses masih eVoucher dalam proses';
        this.showalertevoucher(header,textmessage);
      }
      this.getdata();
      this.loadingController.dismiss();
      
    });
  }

  kirimvoucherkeemail(no_redeem){
    this.doLoading('Loading..');
    this.dolphinService.kirimvoucherkeemail(no_redeem).subscribe((data)=>{
      if(data.status=='success'){
        let header = 'Selamat';
        let textmessage = 'Kode eVoucher anda sudah terkirim ke email, silahkan cek email anda';
        this.showalertevoucher(header,textmessage);
      } else {
        let header = 'Info';
        let textmessage = 'Terjadi Kesalahan';
        this.showalertevoucher(header,textmessage);
      }
      this.getdata();
      this.loadingController.dismiss();
    });
  
  }

  

}
