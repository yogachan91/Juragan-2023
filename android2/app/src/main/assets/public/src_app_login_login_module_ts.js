"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 937);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 937);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 937:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/authentication.service */ 7053);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _modals_login_modal_login_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/login-modal/login-modal.page */ 9174);
/* harmony import */ var _modals_register_modal_register_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/register-modal/register-modal.page */ 4193);
/* harmony import */ var _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/device/ngx */ 8801);
/* harmony import */ var _modals_terms_modal_terms_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modals/terms-modal/terms-modal.page */ 4069);
/* harmony import */ var _modals_forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modals/forgot-password/forgot-password.page */ 8244);
/* harmony import */ var _services_dolphin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/dolphin.service */ 2171);














// import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';

let LoginPage = class LoginPage {
    constructor(fb, authService, alertController, router, loadingController, modalController, routerOutlet, device, platform, 
    // private statusBar: StatusBar
    dolphinService) {
        this.fb = fb;
        this.authService = authService;
        this.alertController = alertController;
        this.router = router;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.routerOutlet = routerOutlet;
        this.device = device;
        this.platform = platform;
        this.dolphinService = dolphinService;
        this.loadIMEI();
    }
    ionViewWillEnter() {
        // this.statusBar.styleDefault();
    }
    whatsappinfo() {
        this.dolphinService.whatsappinfo('', '').subscribe(data => {
            console.log('infowa', data.info1);
            this.infowa = data.info1;
        });
    }
    panduan() {
        this.dolphinService.panduan().subscribe(data => {
            this.url_panduan = data.retdata;
        });
    }
    loadIMEI() {
        this.platform.ready().then(() => {
            if (this.platform.is('mobileweb')) {
                this.IMEI = 'f76f5497984f4f7812'; //0c551d27a340dfe2 //--test-device
            }
            else {
                this.IMEI = this.device.uuid;
                //  this.IMEI = 'f76f5497984f4f7812';
            }
            this.whatsappinfo();
            this.panduan();
            // console.log('loadIMEI', this.IMEI);
            // console.log('this.device.platform', this.platform.platforms());
        });
    }
    showAlert(title, msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
    openLogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modals_login_modal_login_modal_page__WEBPACK_IMPORTED_MODULE_3__.LoginModalPage,
                componentProps: {},
                swipeToClose: true,
                presentingElement: this.routerOutlet.nativeEl
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    console.log('dataReturned', dataReturned);
                    this.dataReturned = dataReturned.data;
                    if (this.dataReturned) {
                        // console.log('Outlet ID: '+this.dataReturned);
                        this.platform.ready().then(() => {
                            // console.log('IMEI', this.IMEI)
                            if (this.IMEI) {
                                this.dolphinService.setimei(this.IMEI, this.dataReturned.user_email).subscribe((data) => {
                                    console.log('IMEI', data);
                                    if (data.status == 'err') {
                                        this.showAlert('Perhatian', data.retdata);
                                    }
                                });
                                // console.log('IMEI:', this.IMEI);
                                this.dolphinService.checkimei(this.IMEI, this.dataReturned.user_email).subscribe((data) => {
                                    console.log('checkimeis', data);
                                    if (data.status == 'timeout') {
                                        this.showAlert('Error Login', data.retdata);
                                    }
                                    else {
                                        this.openTerms(this.dataReturned);
                                    }
                                });
                            }
                        });
                    }
                }
                else {
                    // console.log('dataReturned', 'NO DATA')
                }
            });
            return yield modal.present();
        });
    }
    openForgot() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modals_forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_7__.ForgotPasswordPage,
                componentProps: {},
                swipeToClose: true,
                presentingElement: this.routerOutlet.nativeEl
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                    if (this.dataReturned) {
                        // console.log('Outlet ID: '+this.dataReturned);
                        if (this.dataReturned) {
                            this.forgotpass();
                        }
                    }
                }
            });
            return yield modal.present();
        });
    }
    forgotpass() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Lupa Password',
                message: 'Petunjuk penggantian password telah dikirimkan ke email Anda.',
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    openTerms(logindata) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modals_terms_modal_terms_modal_page__WEBPACK_IMPORTED_MODULE_6__.TermsModalPage,
                componentProps: {},
                swipeToClose: true,
                presentingElement: this.routerOutlet.nativeEl
            });
            modal.onDidDismiss().then((dataTerms) => {
                if (dataTerms !== null) {
                    if (dataTerms.data === true) {
                        this.platform.ready().then(() => {
                            // console.log(this.IMEI)
                            if (this.IMEI) {
                                this.login(logindata);
                            }
                        });
                    }
                    else {
                        this.notagree();
                    }
                }
            });
            return yield modal.present();
        });
    }
    notagree() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Syarat dan Ketentuan',
                message: 'Anda harus menyetujui Syarat dan Ketentuan untuk melanjutkan',
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    openRegister() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modals_register_modal_register_modal_page__WEBPACK_IMPORTED_MODULE_4__.RegisterModalPage,
                componentProps: {
                    "paramID": 123,
                    "paramTitle": "Test Title"
                },
                swipeToClose: true,
                presentingElement: this.routerOutlet.nativeEl
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                    //alert('Modal Sent Data :'+ dataReturned.data);
                }
            });
            return yield modal.present();
        });
    }
    ngOnInit() {
    }
    login(credentials) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Logging In..',
                backdropDismiss: false
            });
            yield loading.present();
            this.authService.loginEmail(this.IMEI, credentials).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                // console.log('AUTH', res);        
            }), (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                // console.log('ERR', err.message);
                const alert = yield this.alertController.create({
                    header: 'Login gagal',
                    message: err.message,
                    buttons: ['OK'],
                });
                yield alert.present();
            }));
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonRouterOutlet },
    { type: _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_5__.Device },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform },
    { type: _services_dolphin_service__WEBPACK_IMPORTED_MODULE_8__.DolphinService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --padding-top: 0%;\n  --padding-start: 10%;\n  --padding-end: 10%;\n  --background: url('bg_blue2.png') 0 0/100% 100% no-repeat;\n}\n\n.logo {\n  width: 100%;\n  margin-top: 30%;\n  text-align: center;\n}\n\n.img-logo {\n  width: 95%;\n}\n\n.img-wa {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlEQUFBO0FBQ0o7O0FBNkJBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQTFCSjs7QUE0QkE7RUFDSSxVQUFBO0FBekJKOztBQTRCQTtFQUNJLFdBQUE7QUF6QkoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tcGFkZGluZy10b3A6IDAlO1xuICAgIC0tcGFkZGluZy1zdGFydDogMTAlO1xuICAgIC0tcGFkZGluZy1lbmQ6IDEwJTtcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlX25ldy9iZ19ibHVlMi5wbmcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn1cbiBcbi8vIC5pbnB1dC1ncm91cCB7XG4vLyAgICAgYmFja2dyb3VuZDogI2ZmZjtcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbi8vIH1cbiBcbi8vIC5lcnJvcnMge1xuLy8gICAgIGZvbnQtc2l6ZTogc21hbGw7XG4vLyAgICAgY29sb3I6ICNmZmY7XG4vLyAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4vLyAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuLy8gICAgIHBhZGRpbmctdG9wOiA1cHg7XG4vLyAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbi8vIH1cbi8vIFBST0RVQ1RJT05cbi8vIGlvbi1jb250ZW50IHtcbi8vICAgICAtLWJhY2tncm91bmQ6IHJnYig2MSw5MiwyNTUpO1xuLy8gICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoNjEsOTIsMjU1LDEpIDAlLCByZ2JhKDI2LDIwMSwyNTEsMSkgMTAwJSk7XG4vLyB9XG4vLyBNSVJST1JcblxuLy8gaW9uLWNvbnRlbnQge1xuLy8gICAgIC0tYmFja2dyb3VuZDogcmdiKDEyMywgMTIzLCAxMjYpO1xuLy8gICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYigxNjMsIDE2MywgMTY1KSAwJSwgcmdiKDczLCA3NSwgNzUpIDEwMCUpO1xuLy8gfVxuXG4ubG9nbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbWctbG9nbyB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBcbn1cbi5pbWctd2F7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ucGFkZGluZ2JvdHRvbXtcbiAgXG59Il19 */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <!-- <form (ngSubmit)=\"login()\" [formGroup]=\"credentials\">\n    <div class=\"input-group\">\n      <ion-item>\n        <ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\"></ion-input>\n      </ion-item>\n      <div *ngIf=\"(email.dirty || email.touched) && email.errors\" class=\"errors\">\n        <span *ngIf=\"email.errors?.required\">Email is required</span>\n        <span *ngIf=\"email.errors?.email\">Email is invalid</span>\n      </div>\n      <ion-item>\n        <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\n      </ion-item>\n      <div *ngIf=\"(password.dirty || password.touched) && password.errors\" class=\"errors\">\n        <span *ngIf=\"password.errors?.required\">Password is required</span>\n        <span *ngIf=\"password.errors?.minlength\">Password needs to be 6 characters</span>\n      </div>\n    </div>\n \n    <ion-button type=\"submit\" expand=\"block\" [disabled]=\"!credentials.valid\">Log in</ion-button>\n  </form> -->\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <div class=\"logo\">\n          <img class=\"img-logo\" src=\"../../assets/image_new/logo_juragan_login.png\">\n        </div>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row>\n      <ion-col size=\"12\" style=\"text-align: center;\">\n        <ion-button type=\"button\" href=\"https://wa.me/6281288614405\" fill=\"clear\" color=\"light\" target=\"_blank\">\n          <ion-icon slot=\"start\" name=\"logo-whatsapp\"></ion-icon>\n          WA Support Juragan\n        </ion-button>\n      </ion-col>\n    </ion-row> -->\n    <br>\n    <br>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-button type=\"button\" expand=\"block\" (click)=\"openLogin()\"><ion-icon name=\"arrow-forward-circle-outline\"></ion-icon>  <span style=\"margin-left: 3%;\">Masuk</span></ion-button>\n      </ion-col>\n      <ion-col size=\"12\">\n         <!--MIRROR-->\n        <!-- <ion-button type=\"button\" disabled expand=\"block\" fill=\"outline\" color=\"light\" (click)=\"openRegister()\">Daftar</ion-button> -->\n        <ion-button type=\"button\" expand=\"block\" fill=\"outline\" color=\"light\" (click)=\"openRegister()\"><ion-icon name=\"person-circle-outline\"></ion-icon> <span style=\"margin-left: 3%;\">Daftar</span></ion-button>\n      </ion-col>\n    </ion-row>\n    <div class=\"paddingbottom\">\n    <br>\n    <br>\n    <br>\n    <br>\n    \n    <ion-row>\n      <ion-col size=\"3\">\n        <!--MIRROR-->\n        <!-- <ion-button type=\"button\" disabled fill=\"clear\" color=\"light\"><u>Lupa password Anda?</u></ion-button> -->\n        <a href={{infowa}}><img  class=\"img-wa\" src=\"../../assets/image_new/wa.png\"></a>\n      </ion-col>\n      <ion-col size=\"7\" style=\"margin-left: 15%;\">\n        <!--MIRROR-->\n        <!-- <ion-button type=\"button\" disabled fill=\"clear\" color=\"light\"><u>Lupa password Anda?</u></ion-button> -->\n        <div style=\"margin-top: 15px;\">\n        <a href={{url_panduan}} style=\"color: aliceblue; font-size: 15px; width: 100%;\">Panduan Juragan</a>\n      </div>\n      </ion-col>\n    </ion-row>\n  </div>\n  </ion-grid>\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map