"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_modals_login-modal_login-modal_page_ts"],{

/***/ 9174:
/*!********************************************************!*\
  !*** ./src/app/modals/login-modal/login-modal.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModalPage": () => (/* binding */ LoginModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-modal.page.html?ngResource */ 4712);
/* harmony import */ var _login_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-modal.page.scss?ngResource */ 2774);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dolphin.service */ 2171);







let LoginModalPage = class LoginModalPage {
    constructor(fb, modalController, navParams, dolphinService, loadingController, alertController) {
        this.fb = fb;
        this.modalController = modalController;
        this.navParams = navParams;
        this.dolphinService = dolphinService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.isOTP = false;
        this.isEmail = false;
        this.isLogin = true;
        this.EmailOutletInput = '';
        this.EmailInput = '';
        this.EmailOTPInput = '';
    }
    ngOnInit() {
        console.table(this.navParams);
        this.modelId = this.navParams.data.paramID;
        this.modalTitle = this.navParams.data.paramTitle;
        this.credentials = this.fb.group({
            user_email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required
                ]],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8)
                ]]
        });
        this.frmRegisterEmail = this.fb.group({
            frmEmailOutletId: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(18)
                ]],
            frmEmailAddress: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required
                ]]
        });
    }
    get user_email() {
        return this.credentials.get('user_email');
    }
    get password() {
        return this.credentials.get('password');
    }
    get frmEmailOutletId() {
        return this.credentials.get('frmEmailOutletId');
    }
    get frmEmailAddress() {
        return this.credentials.get('frmEmailAddress');
    }
    closeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    openEmail() {
        this.isEmail = true;
        this.isOTP = false;
        this.isLogin = false;
    }
    closeEmail() {
        this.isEmail = false;
        this.isOTP = false;
        this.isLogin = true;
    }
    checkOutlet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Pengecekan..',
                backdropDismiss: false
            });
            yield loading.present();
            this.dolphinService.getOTPEmail(this.credentials.value).subscribe(data => {
                console.log('data.otp', data);
                this.loadingController.dismiss();
                if (data.status == 'success') {
                    console.log('data.otp', data);
                    // this.OTPRemote = 12345 //- MIRROR
                    this.OTPRemote = data.otp;
                    this.isEmail = false;
                    this.isOTP = true;
                    this.isLogin = false;
                }
                else {
                    this.showAlert('Opps..', data.err);
                }
            });
        });
    }
    submitConfirmLogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.OTPInput == this.OTPRemote) {
                const onClosedData = this.credentials.value;
                yield this.modalController.dismiss(onClosedData);
            }
            else {
                this.showAlert('Opps..', 'Kode OTP yang Anda input salah..');
            }
        });
    }
    showAlert(title, msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                message: msg,
                buttons: [
                    {
                        text: 'Ok'
                    }
                ]
            });
            yield alert.present();
        });
    }
    simpanEmail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.EmailOTPInput == this.OTPRemote) {
                const loading = yield this.loadingController.create({
                    message: 'Menyimpan alamat email..',
                    backdropDismiss: false
                });
                yield loading.present();
                this.dolphinService.getChangeEmail(this.frmRegisterEmail.value).subscribe(data => {
                    this.loadingController.dismiss();
                    if (data.status == 'success') {
                        this.showAlert('Update Email', 'Email telah didaftarkan, silahkan login.');
                        this.isEmail = false;
                        this.isOTP = false;
                        this.isLogin = true;
                    }
                    else {
                        this.showAlert('Opps..', data.message);
                    }
                });
            }
            else {
                this.showAlert('Opps..', 'kode OTP tidak sesuai');
            }
        });
    }
    setupotp() {
        this.dolphinService.setupotp().subscribe(data => {
            console.log(data.status_sms);
            if (data.status_sms == 1) {
                this.kirimOTPEmail();
            }
            else {
                this.kirimOTPEmail_wa();
            }
        });
    }
    kirimOTPEmail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Kirimkan OTP',
                //  message: 'Kirim',
                buttons: [
                    {
                        text: 'Whatsapp',
                        role: 'confirm',
                        handler: () => {
                            this.dolphinService.getOTPChangeEmail(this.frmRegisterEmail.value, 'wa').subscribe(data => {
                                this.loadingController.dismiss();
                                if (data.status == 'success') {
                                    this.showAlert('OTP Terkirim', 'Kami telah mengirimkan kode OTP ke Whatsapp Anda, isi kode yang Anda terima pada form ini.');
                                    this.OTPRemote = data.otp;
                                    this.isEmail = true;
                                    this.isOTP = false;
                                    this.isLogin = false;
                                }
                                else {
                                    this.showAlert('Opps..', data.message);
                                }
                            });
                        },
                    },
                    {
                        text: 'SMS',
                        role: 'confirm',
                        handler: () => {
                            this.dolphinService.getOTPChangeEmail(this.frmRegisterEmail.value, 'sms').subscribe(data => {
                                this.loadingController.dismiss();
                                if (data.status == 'success') {
                                    this.showAlert('OTP Terkirim', 'Kami telah mengirimkan kode OTP ke HP Anda, isi kode yang Anda terima pada form ini.');
                                    this.OTPRemote = data.otp;
                                    this.isEmail = true;
                                    this.isOTP = false;
                                    this.isLogin = false;
                                }
                                else {
                                    this.showAlert('Opps..', data.message);
                                }
                            });
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    kirimOTPEmail_wa() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Pengecekan akun..',
                backdropDismiss: false
            });
            yield loading.present();
            this.dolphinService.getOTPChangeEmail(this.frmRegisterEmail.value, 'wa').subscribe(data => {
                this.loadingController.dismiss();
                if (data.status == 'success') {
                    this.showAlert('OTP Terkirim', 'Kami telah mengirimkan kode OTP ke Whatsapp Anda, isi kode yang Anda terima pada form ini.');
                    this.OTPRemote = data.otp;
                    this.isEmail = true;
                    this.isOTP = false;
                    this.isLogin = false;
                }
                else {
                    this.showAlert('Opps..', data.message);
                }
            });
        });
    }
};
LoginModalPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams },
    { type: src_app_services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__.DolphinService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
LoginModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login-modal',
        template: _login_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginModalPage);



/***/ }),

/***/ 2774:
/*!*********************************************************************!*\
  !*** ./src/app/modals/login-modal/login-modal.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --padding-top: 2%;\n}\n\n.errors {\n  font-size: small;\n  color: #fff;\n  background: var(--ion-color-danger);\n  padding-left: 15px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.input-group {\n  background: #fff;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 15px;\n  border: 1px solid #ccc;\n}\n\n.emailInputText {\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSiIsImZpbGUiOiJsb2dpbi1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLXRvcDogMiU7XG59XG5cbi5lcnJvcnMge1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmlucHV0LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5lbWFpbElucHV0VGV4dCB7XG4gICAgZm9udC1zaXplOiAuOGVtO1xufSJdfQ== */";

/***/ }),

/***/ 4712:
/*!*********************************************************************!*\
  !*** ./src/app/modals/login-modal/login-modal.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"unilever\">\n    <ion-title>Login</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"isLogin\">\n    <form [formGroup]=\"credentials\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <div class=\"input-group\">\n              <ion-item>\n                <ion-input inputmode=\"email\" formControlName=\"user_email\" placeholder=\"Email Anda\" autocomplete=\"off\" autofocus=\"true\" clear-input=\"true\"></ion-input>\n              </ion-item>\n              <div *ngIf=\"(user_email.dirty || user_email.touched) && user_email.errors\" class=\"errors\">\n                <span *ngIf=\"user_email.errors?.required\">Email harus diisi</span>\n              </div>\n              <ion-item>\n                <ion-input type=\"password\" formControlName=\"password\" placeholder=\"Password Anda\" autocomplete=\"off\" autofocus=\"true\" clear-input=\"true\"></ion-input>\n              </ion-item>\n              <div *ngIf=\"(password.dirty || password.touched) && password.errors\" class=\"errors\">\n                <span *ngIf=\"password.errors?.required\">Password harus diisi</span>\n                <span *ngIf=\"password.errors?.minlength\">Password minimal 8 karakter</span>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-button type=\"button\" color=\"unilever\" expand=\"block\" fill=\"outline\" (click)=\"closeModal()\">Cancel</ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button type=\"button\" color=\"unilever\" expand=\"block\" (click)=\"checkOutlet()\" [disabled]=\"!credentials.valid\">Log in</ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col style=\"text-align: center\">\n            <!--MIRROR-->\n            <!-- <ion-button type=\"button\" disabled fill=\"clear\" color=\"unilever\"><u>Email belum terdaftar?</u></ion-button> -->\n            <!-- <ion-button type=\"button\" (click)=\"openEmail()\" fill=\"clear\" color=\"unilever\"><u>Email belum terdaftar?</u></ion-button> -->\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </div>\n  <div *ngIf=\"isOTP\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          Untuk melakukan login pada aplikasi Juragan, kami telah mengirimkan email Kode OTP ke email Anda. isi 5 angka dalam email tersebut kemudian klik konfirmasi.\n          <div class=\"input-group\">\n            <ion-item lines=\"none\">\n              <ion-input inputmode=\"num\" placeholder=\"Kode OTP\" autocomplete=\"off\" [(ngModel)]=\"OTPInput\" autofocus=\"true\" clear-input=\"true\"></ion-input>\n            </ion-item>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-button type=\"button\" color=\"unilever\" expand=\"block\" (click)=\"submitConfirmLogin()\" [disabled]=\"!OTPInput\">Konfirmasi OTP</ion-button>\n        </ion-col>\n      </ion-row>      \n    </ion-grid>\n  </div>\n\n  <div *ngIf=\"isEmail\">\n    \n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <span class=\"emailInputText\">\n              Jika sebelumnya Anda telah terdaftar di aplikasi Juragan dan belum mendaftarkan email, silahkan isi kode outlet dan email pilihan Anda pada form di bawah ini.\n              <br>\n              Kami akan mengirimkan kode OTP ke nomor HP yang sudah didaftarkan bersama dengan data Outlet Anda.\n              <hr style=\"border-top: 1px solid #e1e1e1\">\n              Untuk mendapatkan kode OTP klik tombol 'Kirim OTP' setelah mengisi Kode Outlet dan Email Anda.\n              <br><br>\n            </span>\n            \n            <div class=\"input-group\">\n              <form [formGroup]=\"frmRegisterEmail\">\n                <ion-item>\n                  <ion-input inputmode=\"num\" placeholder=\"Kode Outlet\" [disabled]=\"OTPRemote\" autocomplete=\"off\" formControlName=\"frmEmailOutletId\" autofocus=\"true\"></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-input inputmode=\"email\" placeholder=\"Email Anda\" [disabled]=\"OTPRemote\" autocomplete=\"off\" formControlName=\"frmEmailAddress\"></ion-input>\n                </ion-item>\n              </form>\n\n              <ion-item>\n                <ion-input inputmode=\"num\" placeholder=\"Kode OTP\" autocomplete=\"off\" [(ngModel)]=\"EmailOTPInput\"></ion-input>\n                <ion-button type=\"button\" color=\"unilever\" expand=\"block\" fill=\"outline\" (click)=\"setupotp()\" [disabled]=\"!frmRegisterEmail.valid\">Kirim OTP</ion-button>\n              </ion-item>\n            </div>\n            \n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-button type=\"button\" color=\"unilever\" expand=\"block\" fill=\"outline\" (click)=\"closeEmail()\">Cancel</ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button type=\"button\" color=\"unilever\" expand=\"block\" [disabled]=\"!frmRegisterEmail.valid || !EmailOTPInput\" (click)=\"simpanEmail()\">Simpan Email</ion-button>\n          </ion-col>\n        </ion-row>      \n      </ion-grid>\n    \n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_modals_login-modal_login-modal_page_ts.js.map