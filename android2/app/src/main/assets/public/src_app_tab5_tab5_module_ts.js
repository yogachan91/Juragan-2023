"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab5_tab5_module_ts"],{

/***/ 6672:
/*!*********************************************!*\
  !*** ./src/app/tab5/tab5-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab5PageRoutingModule": () => (/* binding */ Tab5PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab5.page */ 2584);




const routes = [
    {
        path: '',
        component: _tab5_page__WEBPACK_IMPORTED_MODULE_0__.Tab5Page
    }
];
let Tab5PageRoutingModule = class Tab5PageRoutingModule {
};
Tab5PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Tab5PageRoutingModule);



/***/ }),

/***/ 5184:
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab5PageModule": () => (/* binding */ Tab5PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tab5_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab5-routing.module */ 6672);
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab5.page */ 2584);







let Tab5PageModule = class Tab5PageModule {
};
Tab5PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tab5_routing_module__WEBPACK_IMPORTED_MODULE_0__.Tab5PageRoutingModule
        ],
        declarations: [_tab5_page__WEBPACK_IMPORTED_MODULE_1__.Tab5Page]
    })
], Tab5PageModule);



/***/ }),

/***/ 2584:
/*!***********************************!*\
  !*** ./src/app/tab5/tab5.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab5Page": () => (/* binding */ Tab5Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab5_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab5.page.html?ngResource */ 1503);
/* harmony import */ var _tab5_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab5.page.scss?ngResource */ 5271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ 7053);







let Tab5Page = class Tab5Page {
    constructor(authService, router, alertController) {
        this.authService = authService;
        this.router = router;
        this.alertController = alertController;
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Konfirmasi!',
                message: 'Anda yakin melakukan <strong>Keluar</strong> dari aplikasi Juragan?',
                buttons: [
                    {
                        text: 'Tidak',
                        cssClass: 'secondary'
                    }, {
                        text: 'Ok',
                        id: 'confirm-button',
                        handler: () => {
                            this.authService.logout();
                            this.router.navigateByUrl('/', { replaceUrl: true });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    ngOnInit() {
    }
    goTo(param) {
        // console.log(param);
        if (param == 'profile') {
            let navigationExtras = { state: { page: 'alamat' } };
            this.router.navigate(['profile'], navigationExtras);
        }
        else if (param == 'password') {
            this.router.navigate(['reset-pass']);
        }
        else if (param == 'gantino') {
            this.router.navigate(['ganti-no']);
        }
        else if (param == 'imei') {
            this.router.navigate(['reset-imei']);
        }
        else if (param == 'redeem-status') {
            this.router.navigate(['redeem-status']);
        }
        else {
        }
    }
};
Tab5Page.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
Tab5Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tab5',
        template: _tab5_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab5_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab5Page);



/***/ }),

/***/ 5271:
/*!************************************************!*\
  !*** ./src/app/tab5/tab5.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWI1LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 1503:
/*!************************************************!*\
  !*** ./src/app/tab5/tab5.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Akun\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Akun</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-list>\n    <ion-item button (click)=\"goTo('profile')\">\n      <ion-icon name=\"storefront-outline\" slot=\"start\"></ion-icon>\n      <ion-label>Profil Toko</ion-label>\n    </ion-item>\n\n<!--MIRROR-->\n    <!-- <ion-item button detail>\n      <ion-icon name=\"shield-checkmark-outline\" slot=\"start\"></ion-icon>\n      <ion-label>Pemulihan Password</ion-label>\n    </ion-item>\n    <ion-item button detail>\n      <ion-icon name=\"id-card-outline\" slot=\"start\"></ion-icon>\n      <ion-label>Ganti Nomor HP</ion-label>\n    </ion-item>\n    <ion-item button  detail>\n      <ion-icon name=\"medical-outline\" slot=\"start\"></ion-icon>\n      <ion-label>Reset IMEI</ion-label>\n    </ion-item> -->\n\n<!--PRODUCTION-->\n    <ion-item button (click)=\"goTo('password')\" detail>\n      <ion-icon name=\"shield-checkmark-outline\" slot=\"start\"></ion-icon>\n      <ion-label>Perubahan Password</ion-label>\n    </ion-item>\n    <ion-item button (click)=\"goTo('gantino')\" detail>\n      <ion-icon name=\"id-card-outline\" slot=\"start\"></ion-icon>\n      <ion-label>Ganti Nomor HP</ion-label>\n    </ion-item>\n    <ion-item button (click)=\"goTo('imei')\" detail>\n      <ion-icon name=\"medical-outline\" slot=\"start\"></ion-icon>\n      <ion-label>Reset IMEI</ion-label>\n    </ion-item>\n\n\n    <!-- <ion-item button (click)=\"goTo('redeem-status')\" detail>\n      <ion-icon name=\"bag-check-outline\" slot=\"start\"></ion-icon>\n      <ion-label>Status Redeem</ion-label>\n    </ion-item> -->\n    <ion-item (click)=\"logout()\">\n      <ion-icon name=\"log-out-outline\" slot=\"start\" color=\"danger\"></ion-icon>\n      <ion-label color=\"danger\">Keluar</ion-label>\n    </ion-item>\n  </ion-list>\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab5_tab5_module_ts.js.map