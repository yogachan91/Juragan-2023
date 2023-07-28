import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { DolphinService } from '../services/dolphin.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-redeem-ewallet-list',
  templateUrl: './redeem-ewallet-list.page.html',
  styleUrls: ['./redeem-ewallet-list.page.scss'],
})
export class RedeemEwalletListPage implements OnInit {
  ewallettype:any;
  ewalletcode:any;
  denomlist:any;
  balance: any;
  profile:any;
  selectedData:any;
  phonenumber:any;
  namapemilik:any;
  ewallettypeText:any;
  OTP:any;

  header_text_confirm:any;
  pesan_text_otp_sms:any;
  pesan_text_otp_wa:any;
  verifikasi_text:any;
  verifikasi_pesan:any;
  header_text_redeem:any;
  pesan_text_redeem:any;
  redeem_text:any;

  constructor(
    private router: Router,
    private dolphinService: DolphinService, 
    private alertController: AlertController,
    private toastController: ToastController,
    private loadingController:LoadingController
  ) {
  }

  ngOnInit() {
    this.presentToast();
    const currentState = this.router.getCurrentNavigation();
    this.ewallettype = currentState.extras.state.type;
    this.ewallettypeText = this.ewallettype.toUpperCase();
    this.ewalletcode = currentState.extras.state.code;
    this.dolphinService.ewalletdenom(this.ewalletcode).subscribe(data => {
      this.denomlist = data
      this.dolphinService.getpoint().subscribe(data => {
        this.balance = data
        this.toastController.dismiss();
      });

     
     

      this.dolphinService.getdetailprofile().subscribe(data => {
        this.profile = data[0]
        // console.log('PROFIL', this.profile)
        this.phonenumber = this.profile.no_hp;
        this.namapemilik = this.profile.NAMA_PEMILIK;
        if(!this.phonenumber) {
          this.showalert("Oops..", "Lengkapi nomor handphone pada halaman profil Anda untuk melakukan redeem E-Wallet");
          this.router.navigateByUrl('/', { replaceUrl: true });
          
        } else if(!this.namapemilik) {
          this.showalert("Oops..", "Lengkapi Nama Pemilik Outlet pada halaman profil Anda untuk melakukan redeem E-Wallet");
          this.router.navigateByUrl('/', { replaceUrl: true });

        } else {

        }
      });
      
      
    });

    

    this.dolphinService.text_otp().subscribe(data=>{
      console.log('cekpesanotpewalet',data);
      this.header_text_confirm = data.header_text_confirm;
      this.pesan_text_otp_sms = data.pesan_text_otp_sms;
      this.pesan_text_otp_wa = data.pesan_text_otp_wa;
      this.verifikasi_text = data.verifikasi_text;
      this.verifikasi_pesan = data.verifikasi_pesan;
      this.header_text_redeem = data.header_text_redeem;
      this.pesan_text_redeem = data.pesan_text_redeem;
    })
  }

  async showalert(title, message) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK'],
    });
  
    await alert.present();  
  }

  async presentToast() {
    const toast = await this.toastController.create({
      icon: 'information-circle',
      message: 'Memuat data E-Wallet, harap menunggu..',
      color: 'dark'
    });
    toast.present();
  }

  updateSelected(i) {
    this.selectedData = i;
    console.log('Selected', this.selectedData['amount'])
    let textewallet = null;
    if(this.ewallettypeText=='GOPAY'){
      textewallet = 'gopay';
    } else if(this.ewallettypeText=='OVO'){
      textewallet = 'ovo';
    } else if(this.ewallettypeText=='SHOPEE'){
      textewallet='shopee';    
    } else if(this.ewallettypeText=='DANA'){
      textewallet='dana';
    } else if(this.ewallettypeText=='LINKAJA'){
      textewallet='linkaja';
    }

    this.dolphinService.redeem_all_text(textewallet,this.phonenumber).subscribe((res) => {
      if(res.status == 'success'){
        this.redeem_text = res.retdata;
        console.log('redeem_text', res)
      }
    })
    // let navigationExtras: NavigationExtras = {
    //   state: {
    //     reload: true
    //   }
    // };
    // this.router.navigate(['/'], navigationExtras);
  }

  async tukarpoin() {
    console.log('Selected', this.selectedData)
    console.log('ewallettype', this.ewallettype)
    let phoneNum = this.phonenumber.replace(/\s/g,'').trim();
    if(this.ewallettype != 'ovo') {
      if (phoneNum.charAt(0) == '0') {
        phoneNum = phoneNum.replace('0', '62');
      }  
    }
    const alert = await this.alertController.create({
      header: this.verifikasi_text,
      message: this.verifikasi_pesan + this.phonenumber,
      // buttons: [
      //       {
      //         text: 'Tidak',
      //         handler: () => {
      //           // console.log('Tidak')
      //         }
      //       },
      //       {
      //         text: 'Ya, Kirimkan sekarang',
      //         handler: () => {
      //           // if(this.ewallettype === 'ovo') {
      //           //   //ovo
      //           //   this.checkOvo(phoneNum, this.selectedData['amount']);
      //           //   //.ovo
      //           // } else {
      //             this.sendotp(phoneNum)
      //           // }
      //         }
      //       },
      // ]
      buttons: [
        {
          text: 'Whatsapp',
          handler: () => {
            this.sendotp(phoneNum,'wa')
          }
        },
        {
          text: 'SMS',
          handler: () => {
            this.sendotp(phoneNum,'sms')
          }
        },
  ]
    });
    await alert.present();
  }


  //OVO
  checkOvo(n, v) {
    this.doLoading('Melakukan pengecekan nomor '+this.ewallettypeText+'...')
    this.dolphinService.checkovo(n, v).subscribe(data => {
      console.log(data)
      if(data.status == 'success'){
        this.sendotpOvo(n, data['data']['dst']['custName'], data['data']['dst']['custId'])
      } else {
        this.showalert("Oops..", data.message);
      }
      this.loadingController.dismiss()
    });
  }

  sendotpOvo(n, user, userId) {
    this.OTP = 12345
    this.verifyOTPOVO(12345, user, userId);
  
  }

  async verifyOTPOVO(otp_code, user, userId) {
    const alert = await this.alertController.create({
      header: 'Konfirmasi Kode OTP',
      message: 'Ovo Cust. ID: '+userId+'<br>Ovo Cust. Name: '+user+'<br>Kami telah mengirimkan SMS OTP ke nomor Anda, <br>isi 5 angka dalam SMS tersebut kemudian klik konfirmasi',
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
                  this.prosesRedeemOVO();
                } else {
                  this.showalert('Oops..', 'Kode OTP tidak sesuai');
                }
              }
            },
      ]
    });
    await alert.present();
  }

  prosesRedeemOVO() {
    this.doLoading('Memproses Saldo '+this.ewallettypeText+'...')
    let sendData = {
      'gift_name': this.selectedData['gift_name'],
      'point': this.selectedData['point']
    }
    this.dolphinService.redeemovopost(sendData, this.phonenumber, this.selectedData['amount']).subscribe(data => {
      this.loadingController.dismiss();
      console.log(data)
      if(data.status == 'success'){
        this.showalert(
          'Redeem Sukses', 
          "Berhasil menukarkan "+ this.selectedData.gift_name + ", redeem akan segera diproses. Saldo "+ this.ewallettypeText +" Anda akan otomatis bertambah dan bisa Anda cek melalui aplikasi "+ this.ewallettypeText +" Anda. Cek pada halaman notifikasi pada aplikasi JURAGAN untuk melihat status redeem Anda."  
        )
         this.router.navigateByUrl('/', { replaceUrl: true });
        //this.router.navigate(['tabs']);
      } else {
        console.log("prosesRedeemOVO-Error", data);
        this.showalert(
          'Oops..', 
          data['data']['error']['message']
        )
      }
    });
  }
  //.OVO

  sendotp(n,t) {
    this.dolphinService.sendotp(n,t).subscribe(data => {
      this.OTP = data.otp
      this.verifyOTP(data.otp,t)
      if(t=='wa'){
        // log auth
        this.dolphinService.logs_auth('wa','Redeem_ewallet').subscribe(data => {});
      } else {
        // log auth
        this.dolphinService.logs_auth('sms','Redeem_ewallet').subscribe(data => {});
      }
    });
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
                  this.prosesRedeem();
                } else {
                  this.showalert('Oops..', 'Kode OTP tidak sesuai');
                }
              }
            },
      ]
    });
    await alert.present();
  }

  async prosesRedeem() {
    this.doLoading('Memproses Saldo '+this.ewallettypeText+'...')
    console.log('sitole holidey')
    this.dolphinService.ewalletredeem(this.ewallettype, this.selectedData.redeem_code, this.phonenumber).subscribe(data => {
      this.loadingController.dismiss()
      if(data.status === 'success'){
        this.showalert(
          'Redeem Sukses', 
          "Berhasil menukarkan "+ this.selectedData.gift_name + ", redeem akan segera diproses. Saldo "+ this.ewallettypeText +" Anda akan otomatis bertambah dan bisa Anda cek melalui aplikasi "+ this.ewallettypeText +" Anda. Cek pada halaman notifikasi pada aplikasi JURAGAN untuk melihat status redeem Anda."  
        )
       // this.router.navigateByUrl('/', { replaceUrl: true });
        this.router.navigate(['tabs']);
      } else {
        if(data.status === 'err') {
          this.showalert(
            'Oops..', 
            data.message
          )
        } else {   
          this.showalert(
            'Oops..', 
            'Tidak dapat memproses, mohon dicoba kembali.'
          )
        }
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
}
