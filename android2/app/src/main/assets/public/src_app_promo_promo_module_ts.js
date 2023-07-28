"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_promo_promo_module_ts"],{

/***/ 8555:
/*!***********************************************!*\
  !*** ./src/app/promo/promo-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromoPageRoutingModule": () => (/* binding */ PromoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _promo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promo.page */ 1395);




const routes = [
    {
        path: '',
        component: _promo_page__WEBPACK_IMPORTED_MODULE_0__.PromoPage
    }
];
let PromoPageRoutingModule = class PromoPageRoutingModule {
};
PromoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PromoPageRoutingModule);



/***/ }),

/***/ 4991:
/*!***************************************!*\
  !*** ./src/app/promo/promo.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromoPageModule": () => (/* binding */ PromoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _promo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promo-routing.module */ 8555);
/* harmony import */ var _promo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promo.page */ 1395);







let PromoPageModule = class PromoPageModule {
};
PromoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _promo_routing_module__WEBPACK_IMPORTED_MODULE_0__.PromoPageRoutingModule
        ],
        declarations: [_promo_page__WEBPACK_IMPORTED_MODULE_1__.PromoPage]
    })
], PromoPageModule);



/***/ }),

/***/ 1395:
/*!*************************************!*\
  !*** ./src/app/promo/promo.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromoPage": () => (/* binding */ PromoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _promo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promo.page.html?ngResource */ 5567);
/* harmony import */ var _promo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promo.page.scss?ngResource */ 3878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _modals_banner_modal_banner_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/banner-modal/banner-modal.page */ 8149);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ 7053);
/* harmony import */ var _services_dolphin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/dolphin.service */ 2171);









let PromoPage = class PromoPage {
    constructor(dolphinService, authService, alertController, router, modalController, routerOutlet) {
        this.dolphinService = dolphinService;
        this.authService = authService;
        this.alertController = alertController;
        this.router = router;
        this.modalController = modalController;
        this.routerOutlet = routerOutlet;
        this.dolphinService.getslides().subscribe((dataBanner) => {
            if (dataBanner) {
                if (dataBanner.includes('Outlet Anda melakukan login')) {
                    this.shwoalert('Login Error', dataBanner);
                    this.authService.logout();
                    this.router.navigateByUrl('/', { replaceUrl: true });
                }
                else {
                    // console.log('dataBanner', dataBanner)
                    let slidebannerRaw = dataBanner;
                    this.slidebanner = slidebannerRaw.filter((item) => {
                        return item.isbanner == 1 && item.ispromo == 1;
                    });
                }
            }
        });
    }
    goToBannerDetail(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modals_banner_modal_banner_modal_page__WEBPACK_IMPORTED_MODULE_2__.BannerModalPage,
                componentProps: { 'item': item },
                swipeToClose: true,
                breakpoints: [0, 0.7, 1],
                initialBreakpoint: 0.7,
                // presentingElement: this.routerOutlet.nativeEl
            });
            return yield modal.present();
        });
    }
    shwoalert(title, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                message: message,
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    ngOnInit() {
    }
};
PromoPage.ctorParameters = () => [
    { type: _services_dolphin_service__WEBPACK_IMPORTED_MODULE_4__.DolphinService },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRouterOutlet }
];
PromoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-promo',
        template: _promo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_promo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PromoPage);



/***/ }),

/***/ 3878:
/*!**************************************************!*\
  !*** ./src/app/promo/promo.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9tby5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 5567:
/*!**************************************************!*\
  !*** ./src/app/promo/promo.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Promo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid *ngIf=\"slidebanner\">\n    <ion-row *ngFor=\"let s of slidebanner\" (click)=\"goToBannerDetail(s)\">\n      <ion-col size=\"12\">\n        <img style=\"border-radius: 10px;\" src=\"https://admin.ulidolphin.com/assets/uploads/banner/{{s.picture_location}}\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div *ngIf=\"!slidebanner\">\n    <img src=\"../../assets/imgs/loading.gif\" style=\"border-radius: 10px;\"><br>\n    <img src=\"../../assets/imgs/loading.gif\" style=\"border-radius: 10px;\">\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_promo_promo_module_ts.js.map