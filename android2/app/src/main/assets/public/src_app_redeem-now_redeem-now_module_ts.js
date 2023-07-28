"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_redeem-now_redeem-now_module_ts"],{

/***/ 6924:
/*!*********************************************************!*\
  !*** ./src/app/redeem-now/redeem-now-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedeemNowPageRoutingModule": () => (/* binding */ RedeemNowPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _redeem_now_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redeem-now.page */ 9673);




const routes = [
    {
        path: '',
        component: _redeem_now_page__WEBPACK_IMPORTED_MODULE_0__.RedeemNowPage
    }
];
let RedeemNowPageRoutingModule = class RedeemNowPageRoutingModule {
};
RedeemNowPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RedeemNowPageRoutingModule);



/***/ }),

/***/ 6219:
/*!*************************************************!*\
  !*** ./src/app/redeem-now/redeem-now.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedeemNowPageModule": () => (/* binding */ RedeemNowPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _redeem_now_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redeem-now-routing.module */ 6924);
/* harmony import */ var _redeem_now_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redeem-now.page */ 9673);







let RedeemNowPageModule = class RedeemNowPageModule {
};
RedeemNowPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _redeem_now_routing_module__WEBPACK_IMPORTED_MODULE_0__.RedeemNowPageRoutingModule
        ],
        declarations: [_redeem_now_page__WEBPACK_IMPORTED_MODULE_1__.RedeemNowPage]
    })
], RedeemNowPageModule);



/***/ }),

/***/ 9673:
/*!***********************************************!*\
  !*** ./src/app/redeem-now/redeem-now.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedeemNowPage": () => (/* binding */ RedeemNowPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _redeem_now_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redeem-now.page.html?ngResource */ 1519);
/* harmony import */ var _redeem_now_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redeem-now.page.scss?ngResource */ 5365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dolphin.service */ 2171);







let RedeemNowPage = class RedeemNowPage {
    constructor(dolphinService, router, toastController, alertController, loadingController) {
        this.dolphinService = dolphinService;
        this.router = router;
        this.toastController = toastController;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.poin = 0;
        this.qty = 1;
    }
    ngOnInit() {
        const currentState = this.router.getCurrentNavigation();
        this.item = currentState.extras.state.item;
        this.poin = this.item.point;
        this.balance = currentState.extras.state.balance;
        this.dolphinService.getdetailprofile().subscribe(data => {
            this.profile = data[0];
            // console.log('PROFIL', this.profile)
            this.phonenumber = this.profile.no_hp;
            this.namapemilik = this.profile.NAMA_PEMILIK;
            if (!this.phonenumber) {
                this.showalert("Oops..", "Lengkapi nomor handphone pada halaman profil Anda untuk melakukan redeem");
                this.router.navigateByUrl('/', { replaceUrl: true });
                // } else if(!this.namapemilik) {
                //   this.showalert("Oops..", "Lengkapi Nama Pemilik Outlet pada halaman profil Anda untuk melakukan redeem");
                //   this.router.navigateByUrl('/', { replaceUrl: true });
                // } else {
            }
        });
    }
    plus() {
        if ((this.item.point * (this.qty + 1)) < this.balance.remain_point_new) {
            this.qty++;
            this.poin = this.item.point * this.qty;
        }
    }
    minus() {
        if (this.qty > 1) {
            this.qty--;
            this.poin = this.item.point * this.qty;
        }
    }
    setuptukarpoin() {
        this.dolphinService.setupotp().subscribe(data => {
            console.log(data.status_sms);
            if (data.status_sms == 1) {
                this.tukarpoin();
            }
            else {
                this.tukarpoinsms();
            }
        });
    }
    tukarpoin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let phoneNum = this.phonenumber.replace(/\s/g, '').trim();
            if (phoneNum.charAt(0) == '0') {
                phoneNum = phoneNum.replace('0', '62');
            }
            const alert = yield this.alertController.create({
                header: 'Verifikasi Redeem',
                message: 'Untuk melanjutkan redeem, <br>kami akan mengirimkan OTP ke nomor ' + this.phonenumber,
                //     buttons: [
                //       {
                //         text: 'Tidak',
                //         handler: () => {
                //           // console.log('Tidak')
                //         }
                //       },
                //       {
                //         text: 'Ya, Kirimkan sekarang',
                //         handler: () => {
                //           this.dolphinService.sendotp(phoneNum).subscribe(data => {
                //             this.OTP = data.otp
                //             console.log('cekotp',data)
                //             this.verifyOTP(data.otp)
                //           });
                //           // this.verifyOTP(12345)
                //         }
                //       },
                // ] 
                buttons: [
                    {
                        text: 'Whatsapp',
                        role: 'confirm',
                        handler: () => {
                            this.dolphinService.sendotp(phoneNum, 'wa').subscribe(data => {
                                this.OTP = data.otp;
                                console.log('cekotp', data);
                                this.verifyOTP(data.otp, 'wa');
                                // log auth
                                this.dolphinService.logs_auth('wa', 'Redeem_lm').subscribe(data => { });
                            });
                        },
                    },
                    {
                        text: 'SMS',
                        role: 'confirm',
                        handler: () => {
                            this.dolphinService.sendotp(phoneNum, 'sms').subscribe(data => {
                                this.OTP = data.otp;
                                console.log('cekotp', data);
                                this.verifyOTP(data.otp, 'sms');
                                this.dolphinService.logs_auth('sms', 'Redeem_lm').subscribe(data => { });
                            });
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    tukarpoinsms() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let phoneNum = this.phonenumber.replace(/\s/g, '').trim();
            if (phoneNum.charAt(0) == '0') {
                phoneNum = phoneNum.replace('0', '62');
            }
            const alert = yield this.alertController.create({
                header: 'Verifikasi Redeem',
                message: 'Untuk melanjutkan redeem, <br>kami akan mengirimkan OTP ke nomor ' + phoneNum,
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
                            this.dolphinService.sendotp(phoneNum, 'sms').subscribe(data => {
                                this.OTP = data.otp;
                                console.log('cekotp', data);
                                this.verifyOTP(data.otp, 'sms');
                            });
                            // this.verifyOTP(12345)
                        }
                    },
                ]
            });
            yield alert.present();
        });
    }
    verifyOTP(otp_code, tipe) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let tipeotp;
            if (tipe == "wa") {
                tipeotp = "Whatsapp";
            }
            else {
                tipeotp = "SMS";
            }
            const alert = yield this.alertController.create({
                header: 'Konfirmasi Kode OTP',
                message: 'Kami telah mengirimkan ' + tipeotp + ' OTP ke nomor Anda, <br>isi 5 angka dalam ' + tipeotp + ' tersebut kemudian klik konfirmasi',
                inputs: [
                    {
                        name: 'kodeotp',
                        placeholder: 'isi dengan 5 angka kode OTP..',
                        type: 'number'
                    }
                ],
                buttons: [
                    {
                        text: 'Konfirmasi OTP',
                        handler: (data) => {
                            if (data.kodeotp == otp_code) {
                                this.prosesRedeem();
                            }
                            else {
                                this.showalert('Oops..', 'Kode OTP tidak sesuai');
                            }
                        }
                    },
                ]
            });
            yield alert.present();
        });
    }
    prosesRedeem() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'OTP Terkonfirmasi',
                message: 'Kode OTP sesuai, nomor Anda telah Terverifikasi. <br>Anda yakin akan menukarkan ' + this.poin + ' poin dengan hadiah ini?',
                buttons: [
                    {
                        text: 'Tidak',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Ya, saya yakin',
                        handler: () => {
                            let navigationExtras = { state: {
                                    redeem_type: 'gift',
                                    redeem_code: this.item.redeem_code,
                                    point_redeem: this.poin,
                                    type: 'gift',
                                } };
                            this.router.navigate(['redeem-confirm'], navigationExtras);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    showalert(title, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                message: message,
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    doLoading(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: msg,
                backdropDismiss: false
            });
            yield loading.present();
        });
    }
};
RedeemNowPage.ctorParameters = () => [
    { type: _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__.DolphinService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
RedeemNowPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-redeem-now',
        template: _redeem_now_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_redeem_now_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RedeemNowPage);



/***/ }),

/***/ 5365:
/*!************************************************************!*\
  !*** ./src/app/redeem-now/redeem-now.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".redeem-title {\n  font-size: 1.6rem;\n  font-weight: bold;\n}\n\n.redeem-header {\n  font-size: 1.4rem;\n  font-weight: bold;\n}\n\n.bar-top {\n  margin: 7px 10px 3px 10px;\n  border-radius: 5px;\n  font-size: 0.9em;\n}\n\n.bartop-title {\n  width: 100%;\n  text-align: center;\n  font-weight: 600;\n  font-size: 0.9em;\n  color: #3D5CFF;\n}\n\n.item-name {\n  text-align: center;\n  font-weight: 600;\n  vertical-align: middle;\n  border-top: 2px solid #f1f1f1;\n  background-color: #f1f1f1;\n  color: #555;\n  font-size: 1em;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n}\n\n.item-footer {\n  vertical-align: middle;\n  text-align: center;\n  border-top: 2px solid #f1f1f1;\n  background-color: #f1f1f1;\n  color: #555;\n  font-size: 0.6em;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n}\n\n.item-left {\n  border-left: 2px solid #f1f1f1;\n  border-right: 1px solid #f1f1f1;\n}\n\n.item-right {\n  border-right: 2px solid #f1f1f1;\n  border-left: 1px solid #f1f1f1;\n}\n\n.desk {\n  font-size: 0.8em;\n  text-align: center;\n}\n\n.bartop-sub {\n  width: 100%;\n  text-align: center;\n  font-weight: bold;\n  font-size: 1.2em;\n  color: #444444;\n}\n\n.top-icons {\n  max-height: 30px;\n  text-align: left;\n}\n\n.grid {\n  padding: 0px;\n}\n\n.qty {\n  text-align: center;\n  font-size: 1.8em;\n  border: 2px solid #f1f1f1;\n}\n\n.plus {\n  text-align: center;\n  font-size: 2.5em;\n  color: #3D5CFF;\n}\n\n.minus {\n  text-align: center;\n  font-size: 2.5em;\n  color: #3D5CFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZGVlbS1ub3cucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQWEsZ0JBQUE7RUFDYiw4QkFBQTtFQUNBLCtCQUFBO0FBRUo7O0FBQUE7RUFDSSw4QkFBQTtFQUNBLCtCQUFBO0FBR0o7O0FBQUE7RUFDSSwrQkFBQTtFQUNBLDhCQUFBO0FBR0o7O0FBQUE7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0FBR0Q7O0FBREE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUlKOztBQURBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUlKOztBQURBO0VBQ0ksWUFBQTtBQUlKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBSUo7O0FBREE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUlKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFJSiIsImZpbGUiOiJyZWRlZW0tbm93LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWRlZW0tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucmVkZWVtLWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5iYXItdG9wIHtcbiAgICBtYXJnaW46IDdweCAxMHB4IDNweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IC45ZW07XG59XG5cbi5iYXJ0b3AtdGl0bGUge1xuICAgIHdpZHRoOjEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAuOWVtO1xuICAgIGNvbG9yOiAjM0Q1Q0ZGO1xufVxuXG4uaXRlbS1uYW1lIHtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBmb250LXdlaWdodDo2MDA7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmMWYxZjE7IFxuICAgIGJhY2tncm91bmQtY29sb3I6I2YxZjFmMTsgXG4gICAgY29sb3I6ICM1NTU7IFxuICAgIGZvbnQtc2l6ZToxZW07XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XG59XG5cbi5pdGVtLWZvb3RlciB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgI2YxZjFmMTsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjFmMWYxOyBcbiAgICBjb2xvcjogIzU1NTsgZm9udC1zaXplOi42ZW07XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XG59XG4uaXRlbS1sZWZ0IHtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNmMWYxZjE7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YxZjFmMTtcbn1cblxuLml0ZW0tcmlnaHQge1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNmMWYxZjE7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjFmMWYxO1xufVxuXG4uZGVzayB7XG4gZm9udC1zaXplOiAuOGVtO1xuIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5iYXJ0b3Atc3ViIHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGNvbG9yOiAjNDQ0NDQ0O1xufVxuXG4udG9wLWljb25zIHtcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5ncmlkIHtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbi5xdHkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuOGVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmMWYxZjE7XG59XG5cbi5wbHVzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICBjb2xvcjogIzNENUNGRjtcbn1cblxuLm1pbnVzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICBjb2xvcjogIzNENUNGRjtcbn0iXX0= */";

/***/ }),

/***/ 1519:
/*!************************************************************!*\
  !*** ./src/app/redeem-now/redeem-now.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"arrow-back-outline\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Redeem Sekarang</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"item\">\n  <div style=\"text-align:center; margin:3% 20%;\">\n    <img src=\"https://admin.ulidolphin.com/assets/uploads/redeem/{{item.pict_location}}\" style=\"display:block; width:100%; border-radius: 10px;\">\n  </div>\n\n  <div class=\"bar-top\" *ngIf=\"balance\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\" class=\"item-name\">\n          {{item.gift_name}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\" class=\"item-left\">\n            <div class=\"bartop-title\">Poin Untuk Redeem</div>\n            <div class=\"bartop-sub\">{{poin|number}}</div>\n        </ion-col>\n        <ion-col size=\"6\" class=\"item-right\">\n            <div class=\"bartop-title\">Poin Anda</div>\n            <div class=\"bartop-sub\">{{balance.remain_point_redeem|number}}</div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" class=\"item-footer\">\n          <span *ngIf=\"balance.remain_point_redeem >= item.point\">Poin Anda cukup untuk melakukan redeem</span>\n          <span *ngIf=\"balance.remain_point_redeem < item.point\">oops.. poin Anda belum cukup, kurang {{item.point-balance.remain_point_redeem | number}} poin lagi.<br>Yuk belanja terus..</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div class=\"desk\">\n    <p [innerHTML]=\"item.gift_desc\"></p>\n  </div>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" style=\"text-align: center;\">\n        <span style=\"display:block; font-size: 1em;\">Quantity</span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\" class=\"minus\">\n        <ion-icon name=\"remove-circle-outline\" (click)=\"minus()\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"4\" style=\"text-align: center;\">\n        <div class=\"qty\">{{qty}}</div>\n      </ion-col>\n      <ion-col size=\"4\" class=\"plus\">\n        <ion-icon name=\"add-circle-outline\" (click)=\"plus()\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer class=\"ion-no-border\" *ngIf=\"balance\">\n  <!-- <ion-button expand=\"full\" (click)=\"logout()\">Logout</ion-button> -->\n  <ion-button *ngIf=\"balance.remain_point_redeem >= poin\" expand=\"block\" (click)=\"setuptukarpoin()\" color=\"primary\">Redeem Sekarang</ion-button>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_redeem-now_redeem-now_module_ts.js.map