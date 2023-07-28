"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_redeem-ewallet_redeem-ewallet_module_ts"],{

/***/ 7961:
/*!*****************************************************************!*\
  !*** ./src/app/redeem-ewallet/redeem-ewallet-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedeemEwalletPageRoutingModule": () => (/* binding */ RedeemEwalletPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _redeem_ewallet_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redeem-ewallet.page */ 3759);




const routes = [
    {
        path: '',
        component: _redeem_ewallet_page__WEBPACK_IMPORTED_MODULE_0__.RedeemEwalletPage
    }
];
let RedeemEwalletPageRoutingModule = class RedeemEwalletPageRoutingModule {
};
RedeemEwalletPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RedeemEwalletPageRoutingModule);



/***/ }),

/***/ 2786:
/*!*********************************************************!*\
  !*** ./src/app/redeem-ewallet/redeem-ewallet.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedeemEwalletPageModule": () => (/* binding */ RedeemEwalletPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _redeem_ewallet_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redeem-ewallet-routing.module */ 7961);
/* harmony import */ var _redeem_ewallet_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redeem-ewallet.page */ 3759);







let RedeemEwalletPageModule = class RedeemEwalletPageModule {
};
RedeemEwalletPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _redeem_ewallet_routing_module__WEBPACK_IMPORTED_MODULE_0__.RedeemEwalletPageRoutingModule
        ],
        declarations: [_redeem_ewallet_page__WEBPACK_IMPORTED_MODULE_1__.RedeemEwalletPage]
    })
], RedeemEwalletPageModule);



/***/ }),

/***/ 3759:
/*!*******************************************************!*\
  !*** ./src/app/redeem-ewallet/redeem-ewallet.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedeemEwalletPage": () => (/* binding */ RedeemEwalletPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _redeem_ewallet_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redeem-ewallet.page.html?ngResource */ 4401);
/* harmony import */ var _redeem_ewallet_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redeem-ewallet.page.scss?ngResource */ 3119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ 7053);
/* harmony import */ var _services_dolphin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/dolphin.service */ 2171);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);








let RedeemEwalletPage = class RedeemEwalletPage {
    constructor(router, authService, dolphinService, alertController, navController) {
        this.router = router;
        this.authService = authService;
        this.dolphinService = dolphinService;
        this.alertController = alertController;
        this.navController = navController;
        this.ovoOn = false;
        this.token = this.authService.getToken();
        this.outlet_id = this.authService.getID();
    }
    ionViewWillEnter() {
        this.dolphinService.getredeemtype(1).subscribe((res) => {
            if (res.status == 'success') {
                this.redeemTypes = res.retdata;
            }
            else {
                this.showAlert('Tidak dapat terhubung ke jaringan, silahkan coba lagi');
            }
        });
        this.dolphinService.getstatusredeem().subscribe((res) => {
            if (res.status == 'success') {
                this.ovoOn = res.ovoOn;
                console.log('getstatusredeem', res);
            }
        });
    }
    ngOnInit() {
    }
    toEwalletList(param) {
        if (param.type_active == 1) {
            let navigationExtras = { state: { type: param.type_param, code: param.type_param_2, uli_token: this.token, outlet_id: this.outlet_id } };
            this.router.navigate(['redeem-ewallet-list'], navigationExtras);
        }
        else {
            this.showAlert(param.type_err_msg);
        }
    }
    toOvoPoint() {
        this.router.navigate(['redeem-ovo-point']);
    }
    showAlert(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
RedeemEwalletPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _services_dolphin_service__WEBPACK_IMPORTED_MODULE_3__.DolphinService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController }
];
RedeemEwalletPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-redeem-ewallet',
        template: _redeem_ewallet_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_redeem_ewallet_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RedeemEwalletPage);



/***/ }),

/***/ 3119:
/*!********************************************************************!*\
  !*** ./src/app/redeem-ewallet/redeem-ewallet.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".bar-warning {\n  font-size: 0.7em;\n  background-color: #e8ecff;\n  border-radius: 7px;\n  margin: 10px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZGVlbS1ld2FsbGV0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoicmVkZWVtLWV3YWxsZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhci13YXJuaW5nIHtcbiAgICBmb250LXNpemU6IDAuN2VtO1xuICAgIGJhY2tncm91bmQtY29sb3I6I2U4ZWNmZjtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgbWFyZ2luOiAxMHB4IDEwcHg7XG59Il19 */";

/***/ }),

/***/ 4401:
/*!********************************************************************!*\
  !*** ./src/app/redeem-ewallet/redeem-ewallet.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"unilever\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"arrow-back-outline\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Pilih E-Wallet</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item button (click)=\"toOvoPoint()\">\n      <ion-avatar slot=\"start\">\n        <img *ngIf=\"ovoOn\" src=\"../../assets/imgs/ewallet/logo-ovo.png\">\n        <img *ngIf=\"!ovoOn\" style=\"-webkit-filter: grayscale(100%); filter: grayscale(100%); opacity: 0.6;\" src=\"../../assets/imgs/ewallet/logo-ovo.png\">\n      </ion-avatar>\n      <ion-label *ngIf=\"ovoOn\"><span style=\"font-weight: bold; color: rgb(73, 50, 143)\">OVO Point</span></ion-label>\n      <ion-label *ngIf=\"!ovoOn\"><span style=\"font-weight: bold; color:#999\">OVO Point</span></ion-label>\n    </ion-item>\n    <ion-item *ngFor=\"let r of redeemTypes\" button (click)=\"toEwalletList(r)\">\n      <ion-avatar slot=\"start\">\n        <img *ngIf=\"r.type_active\" src=\"../../assets/imgs/ewallet/{{r.type_icon}}\">\n        <img *ngIf=\"!r.type_active\" style=\"-webkit-filter: grayscale(100%); filter: grayscale(100%); opacity: 0.6;\" src=\"../../assets/imgs/ewallet/{{r.type_icon}}\">\n      </ion-avatar>\n      <ion-label *ngIf=\"r.type_active\"><span style=\"font-weight: bold;\" [style.color]=\"r.type_color\">{{r.type_title}}</span></ion-label>\n      <ion-label *ngIf=\"!r.type_active\"><span style=\"font-weight: bold; color:#999\">{{r.type_title}}</span></ion-label>\n    </ion-item>\n  </ion-list>\n  <div class=\"bar-warning\">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12>\n          <strong>Perhatian:</strong><br>Poin yang sudah ditukar dengan saldo E-Wallet tidak dapat dibatalkan/dikembalikan.\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_redeem-ewallet_redeem-ewallet_module_ts.js.map