"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_redeem-tagihan_redeem-tagihan_module_ts"],{

/***/ 1054:
/*!*****************************************************************!*\
  !*** ./src/app/redeem-tagihan/redeem-tagihan-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedeemTagihanPageRoutingModule": () => (/* binding */ RedeemTagihanPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _redeem_tagihan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redeem-tagihan.page */ 306);




const routes = [
    {
        path: '',
        component: _redeem_tagihan_page__WEBPACK_IMPORTED_MODULE_0__.RedeemTagihanPage
    }
];
let RedeemTagihanPageRoutingModule = class RedeemTagihanPageRoutingModule {
};
RedeemTagihanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RedeemTagihanPageRoutingModule);



/***/ }),

/***/ 8110:
/*!*********************************************************!*\
  !*** ./src/app/redeem-tagihan/redeem-tagihan.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedeemTagihanPageModule": () => (/* binding */ RedeemTagihanPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _redeem_tagihan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redeem-tagihan-routing.module */ 1054);
/* harmony import */ var _redeem_tagihan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redeem-tagihan.page */ 306);







let RedeemTagihanPageModule = class RedeemTagihanPageModule {
};
RedeemTagihanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _redeem_tagihan_routing_module__WEBPACK_IMPORTED_MODULE_0__.RedeemTagihanPageRoutingModule
        ],
        declarations: [_redeem_tagihan_page__WEBPACK_IMPORTED_MODULE_1__.RedeemTagihanPage]
    })
], RedeemTagihanPageModule);



/***/ }),

/***/ 306:
/*!*******************************************************!*\
  !*** ./src/app/redeem-tagihan/redeem-tagihan.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedeemTagihanPage": () => (/* binding */ RedeemTagihanPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _redeem_tagihan_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redeem-tagihan.page.html?ngResource */ 9591);
/* harmony import */ var _redeem_tagihan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redeem-tagihan.page.scss?ngResource */ 4853);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dolphin.service */ 2171);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);







let RedeemTagihanPage = class RedeemTagihanPage {
    constructor(router, alertController, navController, dolphinService) {
        this.router = router;
        this.alertController = alertController;
        this.navController = navController;
        this.dolphinService = dolphinService;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.dolphinService.getredeemtype(2).subscribe((res) => {
            if (res.status == 'success') {
                this.redeemTypes = res.retdata;
            }
            else {
                this.showAlert('Tidak dapat terhubung ke jaringan, silahkan coba lagi');
            }
        });
    }
    openPPOB(param) {
        if (param.type_active) {
            if (param.type_param == 'plntoken') {
                this.router.navigate(['ppob-pln-token']);
            }
            if (param.type_param == 'plntagihan') {
                this.router.navigate(['ppob-pln-tagihan']);
            }
        }
        else {
            this.showAlert(param.type_err_msg);
        }
    }
    showAlert(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: msg,
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
RedeemTagihanPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__.DolphinService }
];
RedeemTagihanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-redeem-tagihan',
        template: _redeem_tagihan_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_redeem_tagihan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RedeemTagihanPage);



/***/ }),

/***/ 4853:
/*!********************************************************************!*\
  !*** ./src/app/redeem-tagihan/redeem-tagihan.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWRlZW0tdGFnaWhhbi5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 9591:
/*!********************************************************************!*\
  !*** ./src/app/redeem-tagihan/redeem-tagihan.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"unilever\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"arrow-back-outline\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Tagihan</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n\n    <ion-item *ngFor=\"let r of redeemTypes\" button (click)=\"openPPOB(r)\">\n      <ion-thumbnail>\n        <img src=\"../assets/icon/{{r.type_icon}}\" style=\"padding:7px;\">\n      </ion-thumbnail>\n      <ion-label *ngIf=\"r.type_active\">{{r.type_title}}</ion-label>\n      <ion-label *ngIf=\"!r.type_active\"><span style=\"color:#999\">{{r.type_title}}</span></ion-label>\n    </ion-item>\n\n    <!-- <ion-item button (click)=\"openPPOB('plntagihan')\">\n      <ion-thumbnail>\n        <img src=\"../assets/icon/tagihan.svg\" style=\"padding:7px;\">\n      </ion-thumbnail>\n      <ion-label>PLN Pascabayar (Tagihan)</ion-label>\n    </ion-item> -->\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_redeem-tagihan_redeem-tagihan_module_ts.js.map