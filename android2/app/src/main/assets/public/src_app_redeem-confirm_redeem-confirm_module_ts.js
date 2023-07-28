"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_redeem-confirm_redeem-confirm_module_ts"],{

/***/ 5376:
/*!*****************************************************************!*\
  !*** ./src/app/redeem-confirm/redeem-confirm-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedeemConfirmPageRoutingModule": () => (/* binding */ RedeemConfirmPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _redeem_confirm_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redeem-confirm.page */ 6369);




const routes = [
    {
        path: '',
        component: _redeem_confirm_page__WEBPACK_IMPORTED_MODULE_0__.RedeemConfirmPage
    }
];
let RedeemConfirmPageRoutingModule = class RedeemConfirmPageRoutingModule {
};
RedeemConfirmPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RedeemConfirmPageRoutingModule);



/***/ }),

/***/ 6739:
/*!*********************************************************!*\
  !*** ./src/app/redeem-confirm/redeem-confirm.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedeemConfirmPageModule": () => (/* binding */ RedeemConfirmPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _redeem_confirm_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redeem-confirm-routing.module */ 5376);
/* harmony import */ var _redeem_confirm_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redeem-confirm.page */ 6369);







let RedeemConfirmPageModule = class RedeemConfirmPageModule {
};
RedeemConfirmPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _redeem_confirm_routing_module__WEBPACK_IMPORTED_MODULE_0__.RedeemConfirmPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_redeem_confirm_page__WEBPACK_IMPORTED_MODULE_1__.RedeemConfirmPage]
    })
], RedeemConfirmPageModule);



/***/ }),

/***/ 6369:
/*!*******************************************************!*\
  !*** ./src/app/redeem-confirm/redeem-confirm.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedeemConfirmPage": () => (/* binding */ RedeemConfirmPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _redeem_confirm_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redeem-confirm.page.html?ngResource */ 6241);
/* harmony import */ var _redeem_confirm_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redeem-confirm.page.scss?ngResource */ 9309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dolphin.service */ 2171);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);








let RedeemConfirmPage = class RedeemConfirmPage {
    constructor(dolphinService, router, alertController, loadingController, formBuilder, toastController) {
        this.dolphinService = dolphinService;
        this.router = router;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        const currentState = this.router.getCurrentNavigation();
        this.redeem_code = currentState.extras.state.redeem_code;
        this.redeem_type = currentState.extras.state.redeem_type;
        this.point_redeem = currentState.extras.state.point_redeem;
        this.dolphinService.getpengirimanbytoken().subscribe(data => {
            // console.log('alamat pengiriman', data);
            if (data.status == 'success') {
                this.alamat_pengiriman = data.retdata[0];
                if (this.alamat_pengiriman) {
                    this.formPengiriman = this.formBuilder.group({
                        nama_penerima: [this.alamat_pengiriman['nama_penerima'], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
                        no_telp: [this.alamat_pengiriman['no_telp'], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
                        nama_jalan: [this.alamat_pengiriman['nama_jalan'], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
                        no_rumah: [this.alamat_pengiriman['no_rumah'], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
                        provinsi: [this.alamat_pengiriman['provinsi'], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
                        kota: [this.alamat_pengiriman['kota'], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
                        kecamatan: [this.alamat_pengiriman['kecamatan'], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
                        kelurahan: [this.alamat_pengiriman['kelurahan'], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
                        kode_pos: [this.alamat_pengiriman['kode_pos'], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
                    });
                }
                else {
                    this.formPengiriman = this.formBuilder.group({
                        nama_penerima: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
                        nama_jalan: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
                        no_rumah: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
                        kelurahan: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
                        kecamatan: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
                        kota: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
                        kode_pos: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
                        no_telp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
                        provinsi: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
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
    doLoading(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: msg,
                backdropDismiss: false
            });
            yield loading.present();
        });
    }
    presentToast(msg, dur) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                color: 'dark',
                duration: dur
            });
            toast.present();
        });
    }
    submit() {
        this.doLoading('Memproses redeem Anda..');
        this.dolphinService.exchangerewardGiftUli(this.formPengiriman.value, this.redeem_code, parseInt(this.point_redeem), 'new')
            .subscribe((data) => {
            // console.log('REDEEM-RETDATA', data)
            if (data.status === 'success') {
                this.presentToast('Redeem point berhasil dan point Anda akan kami proses dalam 2x24 Jam', 6000);
                this.router.navigateByUrl('/', { replaceUrl: true });
            }
            else {
                this.presentToast('Tidak dapat terhubung dengan server, silahkan coba kembali.', 3500);
            }
            this.loadingController.dismiss();
        }, err => {
            this.presentToast('Tidak dapat terhubung dengan server, silahkan coba kembali.', 3500);
            this.loadingController.dismiss();
        });
    }
};
RedeemConfirmPage.ctorParameters = () => [
    { type: _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__.DolphinService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
RedeemConfirmPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-redeem-confirm',
        template: _redeem_confirm_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_redeem_confirm_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RedeemConfirmPage);



/***/ }),

/***/ 9309:
/*!********************************************************************!*\
  !*** ./src/app/redeem-confirm/redeem-confirm.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".form-title {\n  font-size: 0.7em;\n  font-weight: bold;\n  display: block;\n  color: #444;\n}\n\n.form-text {\n  font-size: 0.8em;\n  display: block;\n}\n\n.form-row {\n  border-bottom: 1px solid #e0e0e0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZGVlbS1jb25maXJtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQ0FBQTtBQUNKIiwiZmlsZSI6InJlZGVlbS1jb25maXJtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXRpdGxlIHtcbiAgICBmb250LXNpemU6LjdlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBkaXNwbGF5OiBibG9jazsgXG4gICAgY29sb3I6ICM0NDQ7XG59XG5cbi5mb3JtLXRleHQge1xuICAgIGZvbnQtc2l6ZTouOGVtO1xuICAgIGRpc3BsYXk6IGJsb2NrOyBcbn1cblxuLmZvcm0tcm93IHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcbn0iXX0= */";

/***/ }),

/***/ 6241:
/*!********************************************************************!*\
  !*** ./src/app/redeem-confirm/redeem-confirm.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"arrow-back-outline\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Konfirmasi Alamat</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\" *ngIf=\"alamat_pengiriman\">\n    <ion-grid>\n\n      <ion-row class=\"form-row\">\n        <ion-col>\n        <div class=\"form-title\">Nama Penerima</div>\n        <div class=\"form-text\">{{alamat_pengiriman.nama_penerima}}</div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"form-row\">\n        <ion-col>\n          <div class=\"form-title\">No. Telp Penerima</div>\n          <div class=\"form-text\">{{alamat_pengiriman.no_telp}}</div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"form-row\">\n        <ion-col>\n          <div class=\"form-title\">Nama Jalan</div>\n          <div class=\"form-text\">{{alamat_pengiriman.nama_jalan}}</div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"form-row\">\n        <ion-col>\n          <div class=\"form-title\">Nomor Rumah</div>\n          <div class=\"form-text\">{{alamat_pengiriman.no_rumah}}</div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"form-row\">\n        <ion-col>\n          <div class=\"form-title\">Provinsi</div>\n          <div class=\"form-text\">{{alamat_pengiriman.provinsi}}</div>              \n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"form-row\">\n        <ion-col>\n          <div class=\"form-title\">Kota/Kabupaten</div>\n          <div class=\"form-text\">{{alamat_pengiriman.kota}}</div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"form-row\">\n        <ion-col>\n          <div class=\"form-title\">Kecamatan</div>\n          <div class=\"form-text\">{{alamat_pengiriman.kecamatan}}</div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"form-row\">\n        <ion-col>\n          <div class=\"form-title\">Kelurahan/Desa</div>\n          <div class=\"form-text\">{{alamat_pengiriman.kelurahan}}</div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"form-row\">\n        <ion-col>\n          <div class=\"form-title\">Kode Pos</div>\n          <div class=\"form-text\">{{alamat_pengiriman.kode_pos}}</div>\n        </ion-col>\n      </ion-row>\n        \n    </ion-grid>\n    \n    <div class=\"ion-padding\">\n      <div style=\"color:#444; font-size: small; font-style: italic; padding:3px 10px\">\n        Anda bisa melakukan perubahan Alamat Pengiriman melalui halaman Akun Anda, akses melalui Home page, pilih tab 'Akun' kemudian 'Profil Toko' dan lakukan 'Edit Profil/Alamat'\n      </div>\n      <ion-button expand=\"block\" (click)=\"submit()\" color=\"primary\">Kirim Hadiah Ke Alamat Ini</ion-button>\n    </div>\n  </div>\n  <div *ngIf=\"!alamat_pengiriman\">\n    <div class=\"ion-padding\" style=\"color:#444; font-size: small; font-style: italic; padding:3px 10px\">\n      <strong>Anda belum mengisi Alamat Pengiriman Hadiah,</strong>Anda bisa melakukan perubahan Alamat Pengiriman melalui halaman Home page, pilih tab 'Akun' kemudian 'Profil Toko' dan lakukan 'Edit Profil/Alamat'\n      <ion-button expand=\"block\" (click)=\"home()\" color=\"primary\">Kembali ke halaman depan</ion-button>\n    </div>\n    \n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_redeem-confirm_redeem-confirm_module_ts.js.map