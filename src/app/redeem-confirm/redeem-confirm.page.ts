import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { DolphinService } from '../services/dolphin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-redeem-confirm',
  templateUrl: './redeem-confirm.page.html',
  styleUrls: ['./redeem-confirm.page.scss'],
})
export class RedeemConfirmPage implements OnInit {
  redeem_code: any;
  redeem_type: any;
  point_redeem:any;
  type_r:any;
  profile:any;
  gift_name:any;
  alamat_pengiriman:any;
  formPengiriman: FormGroup;

  constructor(
    private dolphinService: DolphinService,
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private formBuilder: FormBuilder,
    private toastController: ToastController

  ) {
    const currentState = this.router.getCurrentNavigation();
    this.redeem_code = currentState.extras.state.redeem_code;
    this.redeem_type = currentState.extras.state.redeem_type;
    this.point_redeem = currentState.extras.state.point_redeem;
    this.type_r = currentState.extras.state.type_r;
    this.gift_name = currentState.extras.state.gift_name;
    console.log('cektyper1',this.type_r);

    this.dolphinService.getpengirimanbytoken().subscribe(data => {
      // console.log('alamat pengiriman', data);
      if(data.status == 'success'){
        this.alamat_pengiriman = data.retdata[0];
        if(this.alamat_pengiriman){
          this.formPengiriman = this.formBuilder.group({
            nama_penerima: [this.alamat_pengiriman['nama_penerima'], [Validators.required]],
            no_telp: [this.alamat_pengiriman['no_telp'], [Validators.required]],
            nama_jalan: [this.alamat_pengiriman['nama_jalan'], [Validators.required]],
            no_rumah: [this.alamat_pengiriman['no_rumah'], [Validators.required]],
            provinsi: [this.alamat_pengiriman['provinsi'], [Validators.required]],
            kota: [this.alamat_pengiriman['kota'], [Validators.required]],
            kecamatan: [this.alamat_pengiriman['kecamatan'], [Validators.required]],
            kelurahan: [this.alamat_pengiriman['kelurahan'], [Validators.required]],
            kode_pos: [this.alamat_pengiriman['kode_pos'], [Validators.required]]
          });
        } else {
          this.formPengiriman = this.formBuilder.group({
            nama_penerima: ['', [Validators.required]],
            nama_jalan: ['', [Validators.required]],
            no_rumah: ['', [Validators.required]],
            kelurahan: ['', [Validators.required]],
            kecamatan: ['', [Validators.required]],
            kota: ['', [Validators.required]],
            kode_pos: ['', [Validators.required]],
            no_telp: ['', [Validators.required]],
            provinsi: ['', [Validators.required]]
          });
        }
      }
    });
  }

  ionViewWillEnter() {
    
  }

  ngOnInit() {
    
  }

  home() {
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

  async doLoading(msg) {
    const loading = await this.loadingController.create({
      message: msg,
      backdropDismiss: false
    });
    await loading.present();
  }

  async presentToast(msg,dur) {
    const toast = await this.toastController.create({
      message: msg,
      color: 'dark',
      duration:dur
    });
    toast.present();
  }

  submit() {

    this.doLoading('Memproses redeem Anda..')
    this.dolphinService.exchangerewardGiftUli(this.formPengiriman.value, this.redeem_code, parseInt(this.point_redeem), 'new',this.type_r,this.gift_name)
    .subscribe((data) => {
      // console.log('REDEEM-RETDATA', data)
      if(data.status === 'success'){
        this.presentToast('Redeem point berhasil dan point Anda akan kami proses dalam 2x24 Jam', 6000)
       // this.router.navigateByUrl('/', { replaceUrl: true });
       this.router.navigate(['tabs']);
      } else {
        this.presentToast('Tidak dapat terhubung dengan server, silahkan coba kembali.', 3500)
      }
      this.loadingController.dismiss()
    }, err => {
      this.presentToast('Tidak dapat terhubung dengan server, silahkan coba kembali.', 3500)
      this.loadingController.dismiss()
    });
  }


}
