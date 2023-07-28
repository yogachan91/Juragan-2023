"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_ppob-pln-token-history_ppob-pln-token-history_module_ts"],{

/***/ 3169:
/*!*********************************************************************************!*\
  !*** ./src/app/ppob-pln-token-history/ppob-pln-token-history-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PpobPlnTokenHistoryPageRoutingModule": () => (/* binding */ PpobPlnTokenHistoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ppob_pln_token_history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ppob-pln-token-history.page */ 2897);




const routes = [
    {
        path: '',
        component: _ppob_pln_token_history_page__WEBPACK_IMPORTED_MODULE_0__.PpobPlnTokenHistoryPage
    }
];
let PpobPlnTokenHistoryPageRoutingModule = class PpobPlnTokenHistoryPageRoutingModule {
};
PpobPlnTokenHistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PpobPlnTokenHistoryPageRoutingModule);



/***/ }),

/***/ 7375:
/*!*************************************************************************!*\
  !*** ./src/app/ppob-pln-token-history/ppob-pln-token-history.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PpobPlnTokenHistoryPageModule": () => (/* binding */ PpobPlnTokenHistoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ppob_pln_token_history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ppob-pln-token-history-routing.module */ 3169);
/* harmony import */ var _ppob_pln_token_history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ppob-pln-token-history.page */ 2897);







let PpobPlnTokenHistoryPageModule = class PpobPlnTokenHistoryPageModule {
};
PpobPlnTokenHistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ppob_pln_token_history_routing_module__WEBPACK_IMPORTED_MODULE_0__.PpobPlnTokenHistoryPageRoutingModule
        ],
        declarations: [_ppob_pln_token_history_page__WEBPACK_IMPORTED_MODULE_1__.PpobPlnTokenHistoryPage]
    })
], PpobPlnTokenHistoryPageModule);



/***/ }),

/***/ 2897:
/*!***********************************************************************!*\
  !*** ./src/app/ppob-pln-token-history/ppob-pln-token-history.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PpobPlnTokenHistoryPage": () => (/* binding */ PpobPlnTokenHistoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ppob_pln_token_history_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ppob-pln-token-history.page.html?ngResource */ 6088);
/* harmony import */ var _ppob_pln_token_history_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ppob-pln-token-history.page.scss?ngResource */ 1461);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dolphin.service */ 2171);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);






let PpobPlnTokenHistoryPage = class PpobPlnTokenHistoryPage {
    constructor(dolphinService, router) {
        this.dolphinService = dolphinService;
        this.router = router;
        this.dolphinService.ppoblist().subscribe((data) => {
            // console.log('history', data);
            if (data.status == 'success') {
                this.historyList = data.retdata;
            }
            else {
                this.historyList = [{
                        gift_name: 'Belum ada transaksi',
                        redeem_date: null,
                        redeem_no: null,
                    }];
            }
        });
    }
    itemSelected(item) {
        if (item.redeem_no) {
            let navigationExtras = { state: { itemDetails: item } };
            this.router.navigate(['ppob-pln-token-history-details'], navigationExtras);
        }
    }
    ngOnInit() {
    }
};
PpobPlnTokenHistoryPage.ctorParameters = () => [
    { type: _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__.DolphinService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
PpobPlnTokenHistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-ppob-pln-token-history',
        template: _ppob_pln_token_history_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_ppob_pln_token_history_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PpobPlnTokenHistoryPage);



/***/ }),

/***/ 1461:
/*!************************************************************************************!*\
  !*** ./src/app/ppob-pln-token-history/ppob-pln-token-history.page.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = ".item-title {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBwb2ItcGxuLXRva2VuLWhpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaUJBQUE7QUFBSiIsImZpbGUiOiJwcG9iLXBsbi10b2tlbi1oaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLml0ZW0tdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */";

/***/ }),

/***/ 6088:
/*!************************************************************************************!*\
  !*** ./src/app/ppob-pln-token-history/ppob-pln-token-history.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"unilever\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"arrow-back-outline\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>History PLN Prabayar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <div *ngIf=\"!historyList\">\n    <img src=\"../../assets/imgs/loading.gif\" style=\"border-radius: 10px;\"><br>\n    <img src=\"../../assets/imgs/loading.gif\" style=\"border-radius: 10px;\">\n  </div>\n\n  <ion-list *ngIf=\"historyList\">\n    <ion-item *ngFor=\"let item of historyList\" (click)=\"itemSelected(item)\" button>\n      <ion-label>\n        <h3 class=\"item-title\">{{item.gift_name}}</h3>\n        <p class=\"item-desc\">{{item.redeem_date | date}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_ppob-pln-token-history_ppob-pln-token-history_module_ts.js.map