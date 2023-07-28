"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_promo2_promo2_module_ts"],{

/***/ 2679:
/*!*************************************************!*\
  !*** ./src/app/promo2/promo2-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Promo2PageRoutingModule": () => (/* binding */ Promo2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _promo2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promo2.page */ 3231);




const routes = [
    {
        path: '',
        component: _promo2_page__WEBPACK_IMPORTED_MODULE_0__.Promo2Page
    }
];
let Promo2PageRoutingModule = class Promo2PageRoutingModule {
};
Promo2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Promo2PageRoutingModule);



/***/ }),

/***/ 5132:
/*!*****************************************!*\
  !*** ./src/app/promo2/promo2.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Promo2PageModule": () => (/* binding */ Promo2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _promo2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promo2-routing.module */ 2679);
/* harmony import */ var _promo2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promo2.page */ 3231);







let Promo2PageModule = class Promo2PageModule {
};
Promo2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _promo2_routing_module__WEBPACK_IMPORTED_MODULE_0__.Promo2PageRoutingModule
        ],
        declarations: [_promo2_page__WEBPACK_IMPORTED_MODULE_1__.Promo2Page]
    })
], Promo2PageModule);



/***/ }),

/***/ 3231:
/*!***************************************!*\
  !*** ./src/app/promo2/promo2.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Promo2Page": () => (/* binding */ Promo2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _promo2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promo2.page.html?ngResource */ 1384);
/* harmony import */ var _promo2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promo2.page.scss?ngResource */ 9630);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _modals_banner_modal_banner_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/banner-modal/banner-modal.page */ 8149);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ 7053);
/* harmony import */ var _services_dolphin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/dolphin.service */ 2171);









let Promo2Page = class Promo2Page {
    constructor(dolphinService, authService, alertController, router, modalController, routerOutlet) {
        this.dolphinService = dolphinService;
        this.authService = authService;
        this.alertController = alertController;
        this.router = router;
        this.modalController = modalController;
        this.routerOutlet = routerOutlet;
        this.segmen = 'promo';
        const halaman = this.router.getCurrentNavigation();
        this.segmen = halaman.extras.state.page;
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
                    let slideinfoRaw = dataBanner;
                    this.slideinfo = slideinfoRaw.filter((item) => {
                        return item.isbanner == 0 && item.ispromo == 0;
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
                breakpoints: [0, 0.8, 1],
                initialBreakpoint: 1,
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
Promo2Page.ctorParameters = () => [
    { type: _services_dolphin_service__WEBPACK_IMPORTED_MODULE_4__.DolphinService },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRouterOutlet }
];
Promo2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-promo2',
        template: _promo2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_promo2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Promo2Page);



/***/ }),

/***/ 9630:
/*!****************************************************!*\
  !*** ./src/app/promo2/promo2.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9tbzIucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 1384:
/*!****************************************************!*\
  !*** ./src/app/promo2/promo2.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"arrow-back-outline\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Promo\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-segment [(ngModel)]=\"segmen\">\n      <ion-segment-button value=\"promo\">\n        <ion-label>Promo</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"info\">\n        <ion-label>Info</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div [ngSwitch]=\"segmen\">    \n    <div *ngSwitchCase=\"'promo'\">\n      <ion-grid *ngIf=\"slidebanner\">\n        <ion-row *ngFor=\"let s of slidebanner\" (click)=\"goToBannerDetail(s)\">\n          <ion-col size=\"12\">\n            <img style=\"border-radius: 10px;\" src=\"https://admin.ulidolphin.com/assets/uploads/banner/{{s.picture_location}}\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <div *ngIf=\"!slidebanner\">\n        <img src=\"../../assets/imgs/loading.gif\" style=\"border-radius: 10px;\"><br>\n        <img src=\"../../assets/imgs/loading.gif\" style=\"border-radius: 10px;\">\n      </div>\n    </div>\n    <div *ngSwitchCase=\"'info'\">\n      <ion-grid *ngIf=\"slideinfo\">\n        <ion-row *ngFor=\"let s of slideinfo\" (click)=\"goToBannerDetail(s)\">\n          <ion-col size=\"12\">\n            <img style=\"border-radius: 10px;\" src=\"https://admin.ulidolphin.com/assets/uploads/banner/{{s.picture_location}}\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <div *ngIf=\"!slideinfo\">\n        <img src=\"../../assets/imgs/loading.gif\" style=\"border-radius: 10px;\"><br>\n        <img src=\"../../assets/imgs/loading.gif\" style=\"border-radius: 10px;\">\n      </div>\n    </div>\n  </div>\n  <p>&nbsp;</p>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_promo2_promo2_module_ts.js.map