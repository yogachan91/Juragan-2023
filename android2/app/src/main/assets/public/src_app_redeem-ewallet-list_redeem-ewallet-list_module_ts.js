"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_redeem-ewallet-list_redeem-ewallet-list_module_ts"],{

/***/ 5950:
/*!***************************************************************************!*\
  !*** ./src/app/redeem-ewallet-list/redeem-ewallet-list-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedeemEwalletListPageRoutingModule": () => (/* binding */ RedeemEwalletListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _redeem_ewallet_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redeem-ewallet-list.page */ 1186);




const routes = [
    {
        path: '',
        component: _redeem_ewallet_list_page__WEBPACK_IMPORTED_MODULE_0__.RedeemEwalletListPage
    }
];
let RedeemEwalletListPageRoutingModule = class RedeemEwalletListPageRoutingModule {
};
RedeemEwalletListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RedeemEwalletListPageRoutingModule);



/***/ }),

/***/ 2270:
/*!*******************************************************************!*\
  !*** ./src/app/redeem-ewallet-list/redeem-ewallet-list.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedeemEwalletListPageModule": () => (/* binding */ RedeemEwalletListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _redeem_ewallet_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redeem-ewallet-list-routing.module */ 5950);
/* harmony import */ var _redeem_ewallet_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redeem-ewallet-list.page */ 1186);







let RedeemEwalletListPageModule = class RedeemEwalletListPageModule {
};
RedeemEwalletListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _redeem_ewallet_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.RedeemEwalletListPageRoutingModule
        ],
        declarations: [_redeem_ewallet_list_page__WEBPACK_IMPORTED_MODULE_1__.RedeemEwalletListPage]
    })
], RedeemEwalletListPageModule);



/***/ }),

/***/ 1186:
/*!*****************************************************************!*\
  !*** ./src/app/redeem-ewallet-list/redeem-ewallet-list.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedeemEwalletListPage": () => (/* binding */ RedeemEwalletListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _redeem_ewallet_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redeem-ewallet-list.page.html?ngResource */ 8395);
/* harmony import */ var _redeem_ewallet_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redeem-ewallet-list.page.scss?ngResource */ 2929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dolphin.service */ 2171);








let RedeemEwalletListPage = class RedeemEwalletListPage {
    constructor(router, dolphinService, alertController, toastController, loadingController) {
        this.router = router;
        this.dolphinService = dolphinService;
        this.alertController = alertController;
        this.toastController = toastController;
        this.loadingController = loadingController;
    }
    ngOnInit() {
        this.presentToast();
        const currentState = this.router.getCurrentNavigation();
        this.ewallettype = currentState.extras.state.type;
        this.ewallettypeText = this.ewallettype.toUpperCase();
        this.ewalletcode = currentState.extras.state.code;
        this.dolphinService.ewalletdenom(this.ewalletcode).subscribe(data => {
            this.denomlist = data;
            this.dolphinService.getpoint().subscribe(data => {
                this.balance = data;
                this.toastController.dismiss();
            });
            this.dolphinService.getdetailprofile().subscribe(data => {
                this.profile = data[0];
                // console.log('PROFIL', this.profile)
                this.phonenumber = this.profile.no_hp;
                this.namapemilik = this.profile.NAMA_PEMILIK;
                if (!this.phonenumber) {
                    this.showalert("Oops..", "Lengkapi nomor handphone pada halaman profil Anda untuk melakukan redeem E-Wallet");
                    this.router.navigateByUrl('/', { replaceUrl: true });
                }
                else if (!this.namapemilik) {
                    this.showalert("Oops..", "Lengkapi Nama Pemilik Outlet pada halaman profil Anda untuk melakukan redeem E-Wallet");
                    this.router.navigateByUrl('/', { replaceUrl: true });
                }
                else {
                }
            });
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
    presentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                icon: 'information-circle',
                message: 'Memuat data E-Wallet, harap menunggu..',
                color: 'dark'
            });
            toast.present();
        });
    }
    updateSelected(i) {
        this.selectedData = i;
        console.log('Selected', this.selectedData['amount']);
        // let navigationExtras: NavigationExtras = {
        //   state: {
        //     reload: true
        //   }
        // };
        // this.router.navigate(['/'], navigationExtras);
    }
    tukarpoin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Selected', this.selectedData);
            console.log('ewallettype', this.ewallettype);
            let phoneNum = this.phonenumber.replace(/\s/g, '').trim();
            if (this.ewallettype != 'ovo') {
                if (phoneNum.charAt(0) == '0') {
                    phoneNum = phoneNum.replace('0', '62');
                }
            }
            const alert = yield this.alertController.create({
                header: 'Verifikasi Redeem',
                message: 'Untuk melanjutkan redeem, <br>kami akan melakukan pengecekan dan mengirimkan  OTP ke nomor ' + this.phonenumber,
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
                            this.sendotp(phoneNum, 'wa');
                        }
                    },
                    {
                        text: 'SMS',
                        handler: () => {
                            this.sendotp(phoneNum, 'sms');
                        }
                    },
                ]
            });
            yield alert.present();
        });
    }
    //OVO
    checkOvo(n, v) {
        this.doLoading('Melakukan pengecekan nomor ' + this.ewallettypeText + '...');
        this.dolphinService.checkovo(n, v).subscribe(data => {
            console.log(data);
            if (data.status == 'success') {
                this.sendotpOvo(n, data['data']['dst']['custName'], data['data']['dst']['custId']);
            }
            else {
                this.showalert("Oops..", data.message);
            }
            this.loadingController.dismiss();
        });
    }
    sendotpOvo(n, user, userId) {
        this.OTP = 12345;
        this.verifyOTPOVO(12345, user, userId);
    }
    verifyOTPOVO(otp_code, user, userId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Konfirmasi Kode OTP',
                message: 'Ovo Cust. ID: ' + userId + '<br>Ovo Cust. Name: ' + user + '<br>Kami telah mengirimkan SMS OTP ke nomor Anda, <br>isi 5 angka dalam SMS tersebut kemudian klik konfirmasi',
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
                                this.prosesRedeemOVO();
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
    prosesRedeemOVO() {
        this.doLoading('Memproses Saldo ' + this.ewallettypeText + '...');
        let sendData = {
            'gift_name': this.selectedData['gift_name'],
            'point': this.selectedData['point']
        };
        this.dolphinService.redeemovopost(sendData, this.phonenumber, this.selectedData['amount']).subscribe(data => {
            this.loadingController.dismiss();
            console.log(data);
            if (data.status == 'success') {
                this.showalert('Redeem Sukses', "Berhasil menukarkan " + this.selectedData.gift_name + ", redeem akan segera diproses. Saldo " + this.ewallettypeText + " Anda akan otomatis bertambah dan bisa Anda cek melalui aplikasi " + this.ewallettypeText + " Anda. Cek pada halaman notifikasi pada aplikasi JURAGAN untuk melihat status redeem Anda.");
                this.router.navigateByUrl('/', { replaceUrl: true });
            }
            else {
                console.log("prosesRedeemOVO-Error", data);
                this.showalert('Oops..', data['data']['error']['message']);
            }
        });
    }
    //.OVO
    sendotp(n, t) {
        this.dolphinService.sendotp(n, t).subscribe(data => {
            this.OTP = data.otp;
            this.verifyOTP(data.otp);
            if (t == 'wa') {
                // log auth
                this.dolphinService.logs_auth('wa', 'Redeem_ewallet').subscribe(data => { });
            }
            else {
                // log auth
                this.dolphinService.logs_auth('sms', 'Redeem_ewallet').subscribe(data => { });
            }
        });
    }
    verifyOTP(otp_code) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Konfirmasi Kode OTP',
                message: 'Kami telah mengirimkan SMS OTP ke nomor Anda, <br>isi 5 angka dalam SMS tersebut kemudian klik konfirmasi',
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
            this.doLoading('Memproses Saldo ' + this.ewallettypeText + '...');
            console.log('sitole holidey');
            this.dolphinService.ewalletredeem(this.ewallettype, this.selectedData.redeem_code, this.phonenumber).subscribe(data => {
                this.loadingController.dismiss();
                if (data.status === 'success') {
                    this.showalert('Redeem Sukses', "Berhasil menukarkan " + this.selectedData.gift_name + ", redeem akan segera diproses. Saldo " + this.ewallettypeText + " Anda akan otomatis bertambah dan bisa Anda cek melalui aplikasi " + this.ewallettypeText + " Anda. Cek pada halaman notifikasi pada aplikasi JURAGAN untuk melihat status redeem Anda.");
                    this.router.navigateByUrl('/', { replaceUrl: true });
                }
                else {
                    if (data.status === 'err') {
                        this.showalert('Oops..', data.message);
                    }
                    else {
                        this.showalert('Oops..', 'Tidak dapat memproses, mohon dicoba kembali.');
                    }
                }
            });
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
RedeemEwalletListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__.DolphinService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
RedeemEwalletListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-redeem-ewallet-list',
        template: _redeem_ewallet_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_redeem_ewallet_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RedeemEwalletListPage);



/***/ }),

/***/ 2929:
/*!******************************************************************************!*\
  !*** ./src/app/redeem-ewallet-list/redeem-ewallet-list.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".ewallet-logo {\n  max-width: 100%;\n  text-align: center;\n}\n\n.ewallet-logo img {\n  max-width: 30%;\n}\n\n.poin {\n  display: block;\n  font-size: 0.7em;\n  color: #888;\n}\n\n.bar-top {\n  margin: 7px 10px 3px 10px;\n  border-radius: 5px;\n  font-size: 0.9em;\n}\n\n.bartop-title {\n  width: 100%;\n  text-align: center;\n  font-weight: 600;\n  font-size: 0.9em;\n}\n\n.item-name {\n  text-align: center;\n  font-weight: 600;\n  vertical-align: middle;\n  border-top: 2px solid #f1f1f1;\n  background-color: #f1f1f1;\n  color: #555;\n  font-size: 1em;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n}\n\n.item-footer {\n  vertical-align: middle;\n  text-align: center;\n  border-top: 2px solid #f1f1f1;\n  background-color: #f1f1f1;\n  color: #222;\n  font-size: 0.8em;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n}\n\n.item-left {\n  border-left: 2px solid #f1f1f1;\n  border-right: 1px solid #f1f1f1;\n}\n\n.item-right {\n  border-right: 2px solid #f1f1f1;\n  border-left: 1px solid #f1f1f1;\n}\n\n.bartop-sub {\n  width: 100%;\n  text-align: center;\n  font-weight: bold;\n  font-size: 1.2em;\n  color: #444444;\n}\n\n.top-icons {\n  max-height: 30px;\n  text-align: left;\n}\n\n.grid {\n  padding: 0px;\n}\n\n.ovo {\n  color: #563098;\n}\n\n.gopay {\n  color: #08a413;\n}\n\n.shopee {\n  color: #e84a2b;\n}\n\n.dana {\n  color: #0e89e1;\n}\n\n.linkaja {\n  color: #e02428;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZGVlbS1ld2FsbGV0LWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFBSjs7QUFHQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUFhLGdCQUFBO0VBQ2IsOEJBQUE7RUFDQSwrQkFBQTtBQUNKOztBQUNBO0VBQ0ksOEJBQUE7RUFDQSwrQkFBQTtBQUVKOztBQUNBO0VBQ0ksK0JBQUE7RUFDQSw4QkFBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFFSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7QUFFSjs7QUFDQTtFQUNDLGNBQUE7QUFFRDs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFDQTtFQUNJLGNBQUE7QUFFSiIsImZpbGUiOiJyZWRlZW0tZXdhbGxldC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ld2FsbGV0LWxvZ28ge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ld2FsbGV0LWxvZ28gaW1nIHtcbiAgICBtYXgtd2lkdGg6IDMwJTtcbn1cblxuLnBvaW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTouN2VtO1xuICAgIGNvbG9yOiAjODg4O1xufVxuXG4uYmFyLXRvcCB7XG4gICAgbWFyZ2luOiA3cHggMTBweCAzcHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAuOWVtO1xufVxuXG4uYmFydG9wLXRpdGxlIHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICAvLyBjb2xvcjogIzNENUNGRjtcbn1cblxuLml0ZW0tbmFtZSB7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZjFmMWYxOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjE7IFxuICAgIGNvbG9yOiAjNTU1OyBcbiAgICBmb250LXNpemU6MWVtO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xufVxuXG4uaXRlbS1mb290ZXIge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgI2YxZjFmMTsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjFmMWYxOyBcbiAgICBjb2xvcjogIzIyMjsgZm9udC1zaXplOi44ZW07XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XG59XG4uaXRlbS1sZWZ0IHtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNmMWYxZjE7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YxZjFmMTtcbn1cblxuLml0ZW0tcmlnaHQge1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNmMWYxZjE7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjFmMWYxO1xufVxuXG4uYmFydG9wLXN1YiB7XG4gICAgd2lkdGg6MTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBjb2xvcjogIzQ0NDQ0NDtcbn1cblxuLnRvcC1pY29ucyB7XG4gICAgbWF4LWhlaWdodDogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZ3JpZCB7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4ub3ZvIHtcbiBjb2xvcjogIzU2MzA5ODtcbn1cblxuLmdvcGF5IHtcbiAgICBjb2xvcjogIzA4YTQxMztcbn1cblxuLnNob3BlZSB7XG4gICAgY29sb3I6ICNlODRhMmI7XG59XG5cbi5kYW5hIHtcbiAgICBjb2xvcjogIzBlODllMTtcbn1cblxuLmxpbmthamEge1xuICAgIGNvbG9yOiAjZTAyNDI4O1xufVxuXG5cbiJdfQ== */";

/***/ }),

/***/ 8395:
/*!******************************************************************************!*\
  !*** ./src/app/redeem-ewallet-list/redeem-ewallet-list.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"{{ewallettype}}\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"arrow-back-outline\"></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"text-transform: capitalize;\">Redeem {{ewallettype}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <div class=\"ewallet-logo\">\n          <img src=\"../../assets/imgs/ewallet/logo-wide-{{ewallettype}}.png\">\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-list *ngIf=\"denomlist\">\n    <ion-radio-group *ngIf=\"balance\">\n      <ion-item-divider style=\"background-color: rgba(240,242,179,.2); text-transform:capitalize;\">\n        Pilih saldo {{ewallettype}}\n      </ion-item-divider>\n      <ion-item *ngFor=\"let cb of denomlist\">\n        <ion-label>\n          {{cb.gift_name}}\n          <span class=\"poin\">{{cb.point|number}} poin</span>\n        </ion-label>\n        <ion-radio color=\"dark\" (ionFocus)=\"updateSelected(cb)\" [disabled]=\"(balance.remain_point_redeem < cb.point)\"></ion-radio>      \n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n\n  <div class=\"bar-top\" *ngIf=\"selectedData\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\" class=\"item-name\">\n          {{selectedData.gift_name}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\" class=\"item-left\">\n            <div class=\"bartop-title {{ewallettype}}\">Poin Untuk Redeem</div>\n            <div class=\"bartop-sub\">{{selectedData.point|number}}</div>\n        </ion-col>\n        <ion-col size=\"6\" class=\"item-right\">\n            <div class=\"bartop-title {{ewallettype}}\">Poin Anda</div>\n            <div class=\"bartop-sub\">{{balance.remain_point_redeem|number}}</div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" class=\"item-footer\">\n          <!-- <span *ngIf=\"balance.remain_point_new >= selectedData.point\">Poin Anda cukup untuk melakukan redeem</span>\n          <span *ngIf=\"balance.remain_point_new < selectedData.point\">oops.. poin Anda belum cukup, kurang {{selectedData.point-balance.remain_point_new | number}} poin lagi.<br>Yuk belanja terus..</span> -->\n          <strong>PERHATIAN:</strong>\n          <br>Saldo {{ewallettypeText}} akan diisi ke nomor telepon berikut:\n          <br><strong class=\"{{ewallettype}}\" style=\"font-size: 1.4em !important;\">{{phonenumber}}</strong>\n          <br>Pastikan nomor di atas sudah terdaftar di aplikasi <strong class=\"{{ewallettype}}\">{{ewallettypeText}}</strong> dan memiliki akun yang aktif.\n          <hr>\n          <em>Poin yang sudah ditukar dengan saldo {{ewallettypeText}} tidak dapat dibatalkan/dikembalikan.</em>\n        \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n<ion-footer class=\"ion-no-border\" *ngIf=\"selectedData\">\n  <!--MIRROR-->\n  <!-- <ion-button  expand=\"block\"  (click)=\"tukarpoin()\" disabled color=\"{{ewallettype}}\">Tukar Saldo {{ewallettype}}</ion-button> -->\n  <!--PRODUCTION-->\n  <ion-button [disabled]=\"balance.remain_point_redeem < selectedData.point\" expand=\"block\" (click)=\"tukarpoin()\" color=\"{{ewallettype}}\">Tukar Saldo {{ewallettype}}</ion-button>\n\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_redeem-ewallet-list_redeem-ewallet-list_module_ts.js.map