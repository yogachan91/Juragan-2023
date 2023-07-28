"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_reset-pass_reset-pass_module_ts"],{

/***/ 3558:
/*!*********************************************************!*\
  !*** ./src/app/reset-pass/reset-pass-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPassPageRoutingModule": () => (/* binding */ ResetPassPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _reset_pass_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-pass.page */ 7918);




const routes = [
    {
        path: '',
        component: _reset_pass_page__WEBPACK_IMPORTED_MODULE_0__.ResetPassPage
    }
];
let ResetPassPageRoutingModule = class ResetPassPageRoutingModule {
};
ResetPassPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ResetPassPageRoutingModule);



/***/ }),

/***/ 359:
/*!*************************************************!*\
  !*** ./src/app/reset-pass/reset-pass.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPassPageModule": () => (/* binding */ ResetPassPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _reset_pass_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-pass-routing.module */ 3558);
/* harmony import */ var _reset_pass_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-pass.page */ 7918);







let ResetPassPageModule = class ResetPassPageModule {
};
ResetPassPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _reset_pass_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResetPassPageRoutingModule
        ],
        declarations: [_reset_pass_page__WEBPACK_IMPORTED_MODULE_1__.ResetPassPage]
    })
], ResetPassPageModule);



/***/ }),

/***/ 7918:
/*!***********************************************!*\
  !*** ./src/app/reset-pass/reset-pass.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPassPage": () => (/* binding */ ResetPassPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _reset_pass_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-pass.page.html?ngResource */ 8435);
/* harmony import */ var _reset_pass_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-pass.page.scss?ngResource */ 8389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dolphin.service */ 2171);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ 7053);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);








let ResetPassPage = class ResetPassPage {
    constructor(dolphinService, alertController, navController, authService, router) {
        this.dolphinService = dolphinService;
        this.alertController = alertController;
        this.navController = navController;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.dolphinService.getdetailprofile().subscribe(data => {
            this.profile = data[0];
            console.log('PROFIL', this.profile);
            this.phonenumber = this.profile.no_hp;
        });
    }
    showalerts(title, msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                message: msg,
                buttons: [{ text: 'Ok' }]
            });
            yield alert.present();
        });
    }
    resetpasswords() {
        this.dolphinService.setupotp().subscribe(data => {
            console.log(data.status_sms);
            if (data.status_sms == 1) {
                this.kirimsms();
            }
            else {
                this.kirimwa();
            }
        });
    }
    kirimsms() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let phoneNum = this.phonenumber.replace(/\s/g, '').trim();
            if (phoneNum.charAt(0) == '0') {
                phoneNum = phoneNum.replace('0', '62');
            }
            const alert = yield this.alertController.create({
                header: 'Perhatian',
                message: 'Untuk melanjutkan, <br>kami akan mengirimkan OTP ke nomor ' + this.phonenumber,
                buttons: [
                    {
                        text: 'Whatsapp',
                        role: 'confirm',
                        handler: () => {
                            this.dolphinService.sendotp(phoneNum, 'wa').subscribe(data => {
                                this.OTP = data.otp;
                                console.log('cekotp', data);
                                this.verifyOTP(data.otp, 'wa');
                                this.dolphinService.logs_auth('wa', 'Perubahan_pass').subscribe(data => { });
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
                                this.dolphinService.logs_auth('sms', 'Perubahan_pass').subscribe(data => { });
                            });
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    kirimwa() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let phoneNum = this.phonenumber.replace(/\s/g, '').trim();
            if (phoneNum.charAt(0) == '0') {
                phoneNum = phoneNum.replace('0', '62');
            }
            const alert = yield this.alertController.create({
                header: 'Perhatian',
                message: 'Untuk melanjutkan, <br>kami akan mengirimkan OTP ke nomor ' + phoneNum,
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
                                this.sendEmail();
                            }
                            else {
                                this.showalerts('Oops..', 'Kode OTP tidak sesuai');
                            }
                        }
                    },
                ]
            });
            yield alert.present();
        });
    }
    sendEmail() {
        this.dolphinService.getResetPass().subscribe(data => {
            if (data.status == 'success') {
                this.showAlert();
            }
        });
    }
    showAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Cek Email Anda',
                message: 'Email terkirim, silahkan cek dan ikuti langkah-langkah pada email Anda.',
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            this.navController.pop();
                            this.authService.logout();
                            // log auth
                            this.dolphinService.logs_auth('email', 'Perubahan_pass').subscribe(data => { });
                            this.router.navigateByUrl('/', { replaceUrl: true });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ResetPassPage.ctorParameters = () => [
    { type: _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__.DolphinService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
ResetPassPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-reset-pass',
        template: _reset_pass_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_reset_pass_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ResetPassPage);



/***/ }),

/***/ 8389:
/*!************************************************************!*\
  !*** ./src/app/reset-pass/reset-pass.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldC1wYXNzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 8435:
/*!************************************************************!*\
  !*** ./src/app/reset-pass/reset-pass.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"unilever\" class=\"head\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" color=\"light\" icon=\"arrow-back-outline\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Perubahan Password\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <p>\n    Untuk melakukan Perubahan Password aplikasi Juragan,\nklik tombol dibawah ini dan Kami akan mengirimkan \nemail petunjuk pada email tersebut\n  </p>\n  <ion-button color=\"unilever\" expand=\"block\" (click)=\"resetpasswords()\">\n    Ya, Lanjutkan\n  </ion-button>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_reset-pass_reset-pass_module_ts.js.map