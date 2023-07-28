"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_ppob-pln-token-history-details_ppob-pln-token-history-details_module_ts"],{

/***/ 3078:
/*!*************************************************************************************************!*\
  !*** ./src/app/ppob-pln-token-history-details/ppob-pln-token-history-details-routing.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PpobPlnTokenHistoryDetailsPageRoutingModule": () => (/* binding */ PpobPlnTokenHistoryDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ppob_pln_token_history_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ppob-pln-token-history-details.page */ 912);




const routes = [
    {
        path: '',
        component: _ppob_pln_token_history_details_page__WEBPACK_IMPORTED_MODULE_0__.PpobPlnTokenHistoryDetailsPage
    }
];
let PpobPlnTokenHistoryDetailsPageRoutingModule = class PpobPlnTokenHistoryDetailsPageRoutingModule {
};
PpobPlnTokenHistoryDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PpobPlnTokenHistoryDetailsPageRoutingModule);



/***/ }),

/***/ 3881:
/*!*****************************************************************************************!*\
  !*** ./src/app/ppob-pln-token-history-details/ppob-pln-token-history-details.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PpobPlnTokenHistoryDetailsPageModule": () => (/* binding */ PpobPlnTokenHistoryDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ppob_pln_token_history_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ppob-pln-token-history-details-routing.module */ 3078);
/* harmony import */ var _ppob_pln_token_history_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ppob-pln-token-history-details.page */ 912);







let PpobPlnTokenHistoryDetailsPageModule = class PpobPlnTokenHistoryDetailsPageModule {
};
PpobPlnTokenHistoryDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ppob_pln_token_history_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.PpobPlnTokenHistoryDetailsPageRoutingModule
        ],
        declarations: [_ppob_pln_token_history_details_page__WEBPACK_IMPORTED_MODULE_1__.PpobPlnTokenHistoryDetailsPage]
    })
], PpobPlnTokenHistoryDetailsPageModule);



/***/ }),

/***/ 912:
/*!***************************************************************************************!*\
  !*** ./src/app/ppob-pln-token-history-details/ppob-pln-token-history-details.page.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PpobPlnTokenHistoryDetailsPage": () => (/* binding */ PpobPlnTokenHistoryDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ppob_pln_token_history_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ppob-pln-token-history-details.page.html?ngResource */ 4621);
/* harmony import */ var _ppob_pln_token_history_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ppob-pln-token-history-details.page.scss?ngResource */ 3359);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dolphin.service */ 2171);







let PpobPlnTokenHistoryDetailsPage = class PpobPlnTokenHistoryDetailsPage {
    constructor(dolphinService, router, loadingController, navController, alertController) {
        this.dolphinService = dolphinService;
        this.router = router;
        this.loadingController = loadingController;
        this.navController = navController;
        this.alertController = alertController;
    }
    loadData() {
        if (this.itemDetails.transaction_ref) {
            this.dolphinService.ppobcheck(this.itemDetails['transaction_ref']).subscribe((data) => {
                //this.ULIServ.ppobcheck('MJ.INDOH2H.PLNPREPAID.PURCHASE.56602729479.PLN20.1599117997.178114', this.outlet_id).then((data) => {
                // console.log('PPOB Details', data);
                if (data.status == 'success') {
                    if (data.retdata.data.response == 'Success') {
                        this.ppobResponse = data.retdata.data;
                        if (this.ppobResponse.ref) {
                            let ppobToken = this.ppobResponse.ref.split('/');
                            this.ppobDetails = {
                                number: this.ppobResponse.number,
                                status: this.ppobResponse.status,
                                nama: ppobToken[1],
                                tarif: ppobToken[2],
                                daya: ppobToken[3],
                                kwh: ppobToken[4],
                                token: ppobToken[0]
                            };
                        }
                        else {
                            this.ppobDetails = {
                                number: this.ppobResponse.number,
                                status: this.ppobResponse.status,
                                nama: '',
                                tarif: '',
                                daya: '',
                                kwh: '',
                                token: ''
                            };
                        }
                    }
                    else {
                        this.showAlert('Oops..', data.retdata.data.message);
                        this.navController.pop();
                    }
                }
            });
        }
        else {
            this.navController.pop();
        }
    }
    ngOnInit() {
        const currentState = this.router.getCurrentNavigation();
        this.itemDetails = currentState.extras.state.itemDetails;
        // console.log('itemDetails', this.itemDetails);
        this.loadData();
        if (this.itemDetails.gift_code == 'RP001') {
            this.ppobtype = 'plnbilling';
        }
        else {
            this.ppobtype = 'plntoken';
        }
    }
    reload() {
        this.ppobDetails = null;
        this.loadData();
    }
    showAlert(title, msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                message: msg,
                buttons: [{ text: 'Ok' }]
            });
            yield alert.present();
        });
    }
};
PpobPlnTokenHistoryDetailsPage.ctorParameters = () => [
    { type: _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__.DolphinService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
PpobPlnTokenHistoryDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-ppob-pln-token-history-details',
        template: _ppob_pln_token_history_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_ppob_pln_token_history_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PpobPlnTokenHistoryDetailsPage);



/***/ }),

/***/ 3359:
/*!****************************************************************************************************!*\
  !*** ./src/app/ppob-pln-token-history-details/ppob-pln-token-history-details.page.scss?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcG9iLXBsbi10b2tlbi1oaXN0b3J5LWRldGFpbHMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 4621:
/*!****************************************************************************************************!*\
  !*** ./src/app/ppob-pln-token-history-details/ppob-pln-token-history-details.page.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"unilever\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"arrow-back-outline\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>History Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngIf=\"!itemDetails || !ppobDetails\">\n    <ion-item>\n      <img src=\"../../assets/imgs/loading.gif\" >\n    </ion-item>\n    <ion-item>\n      <img src=\"../../assets/imgs/loading.gif\" >\n    </ion-item>    \n  </ion-list>\n  <div *ngIf=\"itemDetails && ppobDetails\">\n    <div *ngIf=\"ppobtype == 'plntoken'\">\n      <ion-list>\n        <ion-item>\n          <ion-label>\n            <p class=\"list-title\">Item</p>\n            <h3>{{itemDetails.gift_name}}</h3>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <p class=\"list-title\">No. Redeem</p>\n            <h3>{{itemDetails.redeem_no}}</h3>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <p class=\"list-title\">Redeem Date</p>\n            <h3>{{itemDetails.redeem_date | date}}</h3>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <p class=\"list-title\">No. Meter / ID Pelanggan</p>\n            <h3>{{ppobDetails.number}}</h3>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <p class=\"list-title\">Nama</p>\n            <h3>{{ppobDetails.nama}}</h3>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <p class=\"list-title\">Tarif</p>\n            <h3>{{ppobDetails.tarif}}</h3>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <p class=\"list-title\">Daya</p>\n            <h3>{{ppobDetails.daya}}</h3>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <p class=\"list-title\">Jumlah Kwh</p>\n            <h3>{{ppobDetails.kwh}}</h3>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <p class=\"list-title\">Status Operator</p>\n            <h3>{{ppobDetails.status}}</h3>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <p class=\"list-title\">Token</p>\n            <h3>{{ppobDetails.token}}</h3>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n\n      <div class=\"ion-padding\">\n        <ion-button fill=\"outline\" expand=\"block\" color=\"unilever\" (click)=\"reload()\">Refresh Status Pembelian</ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_ppob-pln-token-history-details_ppob-pln-token-history-details_module_ts.js.map