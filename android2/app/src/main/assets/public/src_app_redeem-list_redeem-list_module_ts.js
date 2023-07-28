"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_redeem-list_redeem-list_module_ts"],{

/***/ 9267:
/*!***********************************************************!*\
  !*** ./src/app/redeem-list/redeem-list-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedeemListPageRoutingModule": () => (/* binding */ RedeemListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _redeem_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redeem-list.page */ 2721);




const routes = [
    {
        path: '',
        component: _redeem_list_page__WEBPACK_IMPORTED_MODULE_0__.RedeemListPage
    }
];
let RedeemListPageRoutingModule = class RedeemListPageRoutingModule {
};
RedeemListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RedeemListPageRoutingModule);



/***/ }),

/***/ 7954:
/*!***************************************************!*\
  !*** ./src/app/redeem-list/redeem-list.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedeemListPageModule": () => (/* binding */ RedeemListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _redeem_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redeem-list-routing.module */ 9267);
/* harmony import */ var _redeem_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redeem-list.page */ 2721);







let RedeemListPageModule = class RedeemListPageModule {
};
RedeemListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _redeem_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.RedeemListPageRoutingModule
        ],
        declarations: [_redeem_list_page__WEBPACK_IMPORTED_MODULE_1__.RedeemListPage]
    })
], RedeemListPageModule);



/***/ }),

/***/ 2721:
/*!*************************************************!*\
  !*** ./src/app/redeem-list/redeem-list.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedeemListPage": () => (/* binding */ RedeemListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _redeem_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redeem-list.page.html?ngResource */ 8100);
/* harmony import */ var _redeem_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redeem-list.page.scss?ngResource */ 3533);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dolphin.service */ 2171);






let RedeemListPage = class RedeemListPage {
    constructor(dolphinService, router) {
        this.dolphinService = dolphinService;
        this.router = router;
        this.dolphinService.getreward().subscribe((data) => {
            if (data) {
                this.pointreward = data;
                console.log(data);
            }
        });
    }
    gotoredeemdetail(i) {
        let navigationExtras = { state: { item: i } };
        this.router.navigate(['redeem-detail'], navigationExtras);
    }
    ngOnInit() {
    }
};
RedeemListPage.ctorParameters = () => [
    { type: _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__.DolphinService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
RedeemListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-redeem-list',
        template: _redeem_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_redeem_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RedeemListPage);



/***/ }),

/***/ 3533:
/*!**************************************************************!*\
  !*** ./src/app/redeem-list/redeem-list.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWRlZW0tbGlzdC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 8100:
/*!**************************************************************!*\
  !*** ./src/app/redeem-list/redeem-list.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"unilever\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"arrow-back-outline\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Redeem List</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let pr of pointreward\" (click)=\"gotoredeemdetail(pr)\" button>\n      <ion-thumbnail>\n        <!-- <img src=\"../assets/icon/lm.svg\" style=\"padding:7px;\"> -->\n        <img *ngIf=\"pr.pict_location\" src=\"https://admin.ulidolphin.com/assets/uploads/redeem/{{pr.pict_location}}\">\n      </ion-thumbnail>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            {{pr.gift_name}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"poin\">\n            {{pr.point|number}} Poin<span *ngIf=\"pr.multiply_amount > 0\"> &middot; {{pr.multiply_amount | currency:'IDR':false}}</span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n    </ion-item>\n  </ion-list>\n  <p>&nbsp;</p>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_redeem-list_redeem-list_module_ts.js.map