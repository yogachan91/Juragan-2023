import { Component, OnInit } from '@angular/core';
import { DolphinService } from '../services/dolphin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, ModalController, ToastController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { EwalletDetailsPage } from '../modals/ewallet-details/ewallet-details.page';
import { PhotoService } from '../../app/services/photo.service';

import { MapPengirimanPage } from '../../app/modals/map-pengiriman/map-pengiriman.page';
import { Storage } from '@capacitor/storage';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { Browser } from '@capacitor/browser';

const IMAGE_DIR = 'stored-images';

interface LocalFile {
  name:string;
  path:string;
  data:string;
}


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  images: LocalFile[] = [];
  segmen: string = 'alamat';
  varPengiriman: any;
  varPengirimanlokasi:any;
  fotolokasi:any;
  varAlamat:any;
  editMode:boolean = false;
  alamatPengiriman: FormGroup;
  province:any;
  city: any;
  subdistrict : any;
  village : any;
  postalcode : any;
  redeemEwallet:any;
  tipe_gambar :any;
  lokasi :any;
  set_alamat_detail:any;
  isModalOpen:boolean = false;
  isModalOpenFoto:boolean = false;
  foto_upload:string;
  tgl_lahir:any;
  phonenumber:any;
  profile:any;
  OTP :any;
  kodepos:any;

  header_text_confirm:any;
  pesan_text_otp_sms:any;
  pesan_text_otp_wa:any;
  verifikasi_text:any;
  verifikasi_pesan:any;
  header_text_redeem:any;
  pesan_text_redeem:any;
  header_kirim:any;
  pesan_kirim:any;
  pesan_peruabahan_alamat:any;
  constructor(
    private dolphinService: DolphinService,
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private router: Router,
    private modalController: ModalController,
    public photoService: PhotoService,
		private toastCtrl: ToastController,
    private plt: Platform,
    private sanitizer: DomSanitizer
  ) {
    this.loadData()
   
  }

  
  ionViewDidLoad(){
    this.setlokasi();
    this.refresh();
    
  }

  ionViewWillEnter(){
   
    this.setlokasi();
    this.refresh();
  }

  refreshlokasi(){
    this.setlokasi();
  }

  refresh() {
    this.varAlamat = null
    this.varPengiriman = null
    this.loadData()
  }

  ngOnInit() {
   this.dolphinService.getdetailprofile().subscribe(data => {
        
    this.profile = data[0]
     console.log('PROFIL', this.profile)
    this.phonenumber = this.profile.no_hp;
  });
  }

  async setlokasi() {
    // const ret = await Storage.get({ key: 'lokasi' });
    
       
   }

  edit() {
    this.editMode = true;
  }

  cancelEdit() {
    this.editMode = false;
  }

  loadData() {
    const halaman = this.router.getCurrentNavigation();
    console.log('halaman',halaman)
    if(halaman !=null){
    this.segmen = halaman.extras.state.page;
    }

    this.dolphinService.getdetailprofile().subscribe((res) => {
      if(res) {
        this.varAlamat = res[0]
      }
    })

    this.dolphinService.getewalletlist().subscribe((res) => {
      if(res) {
        if(res.status == 'success'){
          this.redeemEwallet = res.retdata;
        }
      }
    })

    this.dolphinService.getpengiriman().subscribe((res) => {
      if(res) {
        this.varPengiriman = res.retdata[0]
        this.varPengirimanlokasi = res.retdata[0].url;
       if(res.retdata[0].image_lokasi=="" || res.retdata[0].image_lokasi==null){
        this.fotolokasi = null;
       } else {
        this.fotolokasi = 'https://admin.ulidolphin.com'+res.retdata[0].image_lokasi;
       }
        
         console.log('varPengiriman', this.fotolokasi)
        this.alamatPengiriman = this.fb.group({
          nama_penerima: [this.varPengiriman.nama_penerima, [Validators.required]],
          nama_jalan: [this.varPengiriman.nama_jalan, [Validators.required]],
          no_rumah: [this.varPengiriman.no_rumah, [Validators.required]],
          kelurahan: ['', [Validators.required]],
          kecamatan: ['', [Validators.required]],
          kode_pos: ['', [Validators.required]],
          kota: ['', [Validators.required]],
           alamat_detail: ['',[Validators.required]],
          lokasi : ['',[Validators.required]],
          imagelokasi : ['',[Validators.required]],
          // provinsi: [this.varPengiriman.provinsi, [Validators.required]],
          provinsi: '',
        //  no_telp: [this.varPengiriman.no_telp, [Validators.required]]
        });
        this.dolphinService.getarea('prov', '', '', '', '').subscribe((data)=>{
          if(data.status == 'success') {
            this.province = data.retdata
          }
        });
      }
    })
    this.dolphinService.text_otp().subscribe(data=>{
      console.log('cekpesanotpewaletresetprofil',data);
      this.header_text_confirm = data.header_text_confirm;
      this.pesan_text_otp_sms = data.pesan_text_otp_sms;
      this.pesan_text_otp_wa = data.pesan_text_otp_wa;
      this.verifikasi_text = data.verifikasi_text;
      this.verifikasi_pesan = data.verifikasi_pesan;
      this.header_text_redeem = data.header_text_redeem;
      this.pesan_text_redeem = data.pesan_text_redeem;
      this.header_kirim = data.header_kirim;
      this.pesan_kirim = data.pesan_kirim;
      this.pesan_peruabahan_alamat = data.pesan_peruabahan_alamat;
    })
  }

  async showLoading(msg) {
    const loading = await this.loadingController.create({
      message: msg,
      backdropDismiss: false
    });
    await loading.present();
  }

  async showAlert(title, msg) {
    const alert = await this.alertController.create({
      header: title,
      message: msg,
      buttons: [{text: 'Ok'}]
    });
    await alert.present()
  }

  onSelectedChange(types) {
    if (types == 'prov') {
      this.dolphinService.getarea('city', this.alamatPengiriman.value['provinsi'], '', '', '').subscribe((data)=>{
        if(data.status == 'success') {
          this.city = data.retdata;
          
          this.subdistrict = null;
          this.village = null;
          this.postalcode = null;

          this.alamatPengiriman.value['kota'] = null;
          this.alamatPengiriman.value['kecamatan'] = null;
          this.alamatPengiriman.value['kelurahan'] = null;
        }
      });
    } else if (types == 'city') {
      this.dolphinService.getarea('subdistrict', this.alamatPengiriman.value['provinsi'], this.alamatPengiriman.value['kota'], '', '').subscribe((data)=>{
        if(data.status == 'success') {
          this.subdistrict = data.retdata
          this.village = null
          this.postalcode = null

          this.alamatPengiriman.value['kecamatan'] = null;
          this.alamatPengiriman.value['kelurahan'] = null;
        }
      });
    } else if (types == 'subdistrict') {
      this.dolphinService.getarea('village', this.alamatPengiriman.value['provinsi'], this.alamatPengiriman.value['kota'], this.alamatPengiriman.value['kecamatan'], '').subscribe((data)=>{
        if(data.status == 'success') {
          this.village = data.retdata;
          this.postalcode = null;
          this.alamatPengiriman.value['kelurahan'] = null;
        }
      });
    } else if (types == 'village') {
      this.dolphinService.getarea('postalcode', this.alamatPengiriman.value['provinsi'], this.alamatPengiriman.value['kota'], this.alamatPengiriman.value['kecamatan'], this.alamatPengiriman.value['kelurahan']).subscribe((data)=>{
        if(data.status == 'success') {
          this.postalcode = data.retdata;
        }
      });
    } else if(types=='tipe_gambar'){
        if(this.alamatPengiriman.value['tipe_gambar']=='Camera'){
        this.tipe_gambar = 'camera';
        } else {
          this.tipe_gambar = 'galeri';
        }
    }
  }

  submitEditPengirimanotp(){
    this.dolphinService.setupotp().subscribe(data => {
      console.log(data.status_sms)
        if(data.status_sms==1){
           this.kirimsms();  
        } else {
           this.kirimwa();
        }
    });
  }


  async kirimsms() {
   
    let phoneNum = this.phonenumber.replace(/\s/g,'').trim();
    if (phoneNum.charAt(0) == '0') {
      phoneNum = phoneNum.replace('0', '62');
    }
    const alert = await this.alertController.create({
      header: this.header_kirim,
      message: this.pesan_peruabahan_alamat + this.phonenumber,
      buttons: [
        {
          text: 'Whatsapp',
          role: 'confirm',
          handler: () => {
            this.dolphinService.sendotp(phoneNum,'wa').subscribe(data => {
              this.OTP = data.otp
              console.log('cekotp',data)
              this.verifyOTP(data.otp,'wa')
               // log auth
              this.dolphinService.logs_auth('wa','Alamat_pengiriman').subscribe(data => {});
            });
          },
        },
        {
          text: 'SMS',
          role: 'confirm',
          handler: () => {
            this.dolphinService.sendotp(phoneNum,'sms').subscribe(data => {
              this.OTP = data.otp
              console.log('cekotp',data)
              this.verifyOTP(data.otp,'sms')
              this.dolphinService.logs_auth('sms','Alamat_pengiriman').subscribe(data => {});
            });
          },
        },
      ],
    });
    await alert.present();
  }

  async kirimwa() {
   
    let phoneNum = this.phonenumber.replace(/\s/g,'').trim();
    if (phoneNum.charAt(0) == '0') {
      phoneNum = phoneNum.replace('0', '62');
    }
    const alert = await this.alertController.create({
      header: this.header_kirim,
      message: this.pesan_peruabahan_alamat + phoneNum,
      buttons: [
        {
          text: 'Tidak',
          handler: () => {
            // console.log('Tidak')
          }
        },
        {
          text: 'Ya, Kirimkan sekarang',
          handler: () => {
            this.dolphinService.sendotp(phoneNum,'sms').subscribe(data => {
              this.OTP = data.otp
              console.log('cekotp',data)
              this.verifyOTP(data.otp,'sms')
            });
            // this.verifyOTP(12345)
          }
        },
    ] 
     
    });
    await alert.present();
  }

  async verifyOTP(otp_code,tipe) {
    let  pesanotp;
    if(tipe=="wa"){
      pesanotp = this.pesan_text_otp_wa;
    } else {
      pesanotp = this.pesan_text_otp_sms;
    }
    const alert = await this.alertController.create({
      header: this.header_text_confirm,
      message: pesanotp,
      inputs: [
              {
                name: 'kodeotp',
                placeholder: 'isi dengan 5 angka kode OTP..',
                type: 'number'
              }],
      buttons: [
            {
              text: 'Konfirmasi OTP',
              handler: (data) => {
                if(data.kodeotp == otp_code) {
                  this.submitEditPengiriman();
                } else {
                  this.showalert('Oops..', 'Kode OTP tidak sesuai');
                }
              }
            },
      ]
    });
    await alert.present();
  }



  submitEditPengiriman(){
    this.showLoading('Menyimpan alamat pengiriman..')
    this.alamatPengiriman.value.image_lokasi = this.foto_upload;
    this.alamatPengiriman.value.url = this.set_alamat_detail;
    this.alamatPengiriman.value.lokasi = this.lokasi;
    this.dolphinService.changePengiriman(this.alamatPengiriman.value).subscribe(d => {
      if(d.status == 'success'){
        this.varPengiriman = null
        this.editMode = false
        this.loadData()
      }

      if(d.status == 'err') {
        this.showAlert('Perhatian', d.retdata)
      }

      this.loadingController.dismiss()
    }, (err)=>{this.loadingController.dismiss()});
  }

  lihatstatushadiah() {
    this.router.navigate(['status-hadiah'])
  }

  async toEwalletList(e) {
    const modal = await this.modalController.create({
      component: EwalletDetailsPage,
      componentProps: {redeem: e},
      swipeToClose: true,
      breakpoints:[0, 0.5, 0.7],
      initialBreakpoint:0.4
    });
    return await modal.present();
  }


  async selectImage() {
    const image = await Camera.getPhoto({
        quality: 90,
        width: 1024,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Prompt, // Camera, Photos or Prompt!,
        promptLabelPhoto :'Galeri',
        promptLabelPicture : 'Camera'
    });

    if (image) {
        this.saveImage(image)
    }
}

async saveImage(photo: Photo) {
  const base64Data = await this.readAsBase64(photo);
  this.foto_upload = base64Data;


}

private async readAsBase64(photo: Photo) {
        console.log('blob',this.plt);

 
      const response = await fetch(photo.webPath);
      const blob = await response.blob();

      return await this.convertBlobToBase64(blob) as string;
}

// Helper function
convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
  const reader = new FileReader;
  reader.onerror = reject;
  reader.onload = () => {
      resolve(reader.result);
  };
  reader.readAsDataURL(blob);
});




  async map_pengiriman(item) {
    const modal = await this.modalController.create({
      component: MapPengirimanPage,
      componentProps: {'item':item},
      swipeToClose: true,
     
    });
    modal.onDidDismiss().then((map) => {
      const lok = map.data;
        this.lokasi = lok.lokasi;
        this.set_alamat_detail = 'https://maps.google.com/maps?q='+lok.lat+','+lok.long+''
      console.log('tagcekmen',  this.set_alamat_detail )
   });
    return await modal.present();
  }


  

  async setOpen(isOpen: boolean) {
  
     const alert = await this.alertController.create({
      header: 'Cek Lokasi',
      message: 'Menuju halaman google maps',
      buttons: [
        {
          text: 'Nanti Saja',
          handler: data => {
          }
        },
        {
          text: 'Masuk google maps',
          handler: data => {
            window.open(this.varPengirimanlokasi,'_system','location=yes');
          }
        }]
    });

    await alert.present()
  }

  setOpenFoto(isOpen: boolean) {
    this.isModalOpenFoto = isOpen;
  }

  async showalert(title, message) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();  
  }

  updatetgllahir(value) {
    var date = new Date(value);
    var year = date.toLocaleString("default", { year: "numeric" });
    var month = date.toLocaleString("default", { month: "2-digit" });
    var day = date.toLocaleString("default", { day: "2-digit" });
    var tgl_lahir = year + "-" + month + "-" + day;
    console.log('cektgl',tgl_lahir);
    this.dolphinService.updatetanggallahir(tgl_lahir).subscribe((res) => {
      if(res) {
        if(res.status == 'success'){
          //this.showalert('Notifikasi','Tanggal lahir berhasil di perbaharui');
         this.loadData();
        }
      }
    })
    
}

simpanpos(){
  this.dolphinService.updatepos(this.kodepos).subscribe((res) => {
    console.log('resmamen',res,this.kodepos)
    if(res) {
      if(res.status == 'success'){
        //this.showalert('Notifikasi','Tanggal lahir berhasil di perbaharui');
       this.loadData();
      }
    }
  })
}



}
