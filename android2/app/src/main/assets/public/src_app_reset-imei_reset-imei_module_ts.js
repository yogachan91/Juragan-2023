"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_reset-imei_reset-imei_module_ts"],{

/***/ 9152:
/*!*********************************************************!*\
  !*** ./src/app/reset-imei/reset-imei-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetImeiPageRoutingModule": () => (/* binding */ ResetImeiPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _reset_imei_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-imei.page */ 9804);




const routes = [
    {
        path: '',
        component: _reset_imei_page__WEBPACK_IMPORTED_MODULE_0__.ResetImeiPage
    }
];
let ResetImeiPageRoutingModule = class ResetImeiPageRoutingModule {
};
ResetImeiPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ResetImeiPageRoutingModule);



/***/ }),

/***/ 5494:
/*!*************************************************!*\
  !*** ./src/app/reset-imei/reset-imei.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetImeiPageModule": () => (/* binding */ ResetImeiPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _reset_imei_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-imei-routing.module */ 9152);
/* harmony import */ var _reset_imei_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-imei.page */ 9804);







let ResetImeiPageModule = class ResetImeiPageModule {
};
ResetImeiPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _reset_imei_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResetImeiPageRoutingModule
        ],
        declarations: [_reset_imei_page__WEBPACK_IMPORTED_MODULE_1__.ResetImeiPage]
    })
], ResetImeiPageModule);



/***/ }),

/***/ 9804:
/*!***********************************************!*\
  !*** ./src/app/reset-imei/reset-imei.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetImeiPage": () => (/* binding */ ResetImeiPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _reset_imei_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-imei.page.html?ngResource */ 8641);
/* harmony import */ var _reset_imei_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-imei.page.scss?ngResource */ 6632);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dolphin.service */ 2171);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ 7053);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);








let ResetImeiPage = class ResetImeiPage {
    constructor(dolphinService, alertController, navController, authService, router) {
        this.dolphinService = dolphinService;
        this.alertController = alertController;
        this.navController = navController;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    sendEmail() {
        this.dolphinService.getResetIMEI().subscribe(data => {
            if (data.status == 'success') {
                this.alertConfirm();
            }
        });
    }
    showAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alertPerhatian = yield this.alertController.create({
                header: 'PERHATIAN',
                message: 'Pastikan Email Anda sudah terdaftar dengan benar untuk menerima instruksi Reset IMEI, melakukan reset IMEI akan otomatis menutup session login Anda <strong>(Log out otomatis)</strong>. Anda yakin untuk melanjutkan?',
                buttons: [{
                        text: 'Cancel',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Ya',
                        handler: () => {
                            this.sendEmail();
                        }
                    }]
            });
            yield alertPerhatian.present();
        });
    }
    alertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Cek Email Anda',
                message: 'Email terkirim, silahkan cek dan ikuti langkah-langkah pada email Anda.',
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            this.dolphinService.logs_auth('email', 'reset_imei').subscribe(data => { });
                        }
                    }
                ]
            });
            this.authService.logout();
            this.router.navigateByUrl('/', { replaceUrl: true });
            yield alert.present();
        });
    }
};
ResetImeiPage.ctorParameters = () => [
    { type: _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__.DolphinService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
ResetImeiPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-reset-imei',
        template: _reset_imei_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_reset_imei_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ResetImeiPage);



/***/ }),

/***/ 6632:
/*!************************************************************!*\
  !*** ./src/app/reset-imei/reset-imei.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldC1pbWVpLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 8641:
/*!************************************************************!*\
  !*** ./src/app/reset-imei/reset-imei.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"unilever\" class=\"head\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" color=\"light\" icon=\"arrow-back-outline\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Reset IMEI\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <p>\n    Untuk melakukan reset IMEI pada aplikasi Juragan, kami akan mengirimkan email berisi tautan khusus ke email Anda. Ikuti petunjuk pada email tersebut.\n  </p>\n  <p>\n    Klik tombol dibawah bila Anda setuju.\n  </p>\n  <ion-button color=\"unilever\" expand=\"block\" (click)=\"showAlert()\">\n    Ya, kirimkan email\n  </ion-button>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_reset-imei_reset-imei_module_ts.js.map