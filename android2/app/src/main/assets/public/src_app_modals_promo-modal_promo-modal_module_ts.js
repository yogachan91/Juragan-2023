"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modals_promo-modal_promo-modal_module_ts"],{

/***/ 9915:
/*!******************************************************************!*\
  !*** ./src/app/modals/promo-modal/promo-modal-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromoModalPageRoutingModule": () => (/* binding */ PromoModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _promo_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promo-modal.page */ 2151);




const routes = [
    {
        path: '',
        component: _promo_modal_page__WEBPACK_IMPORTED_MODULE_0__.PromoModalPage
    }
];
let PromoModalPageRoutingModule = class PromoModalPageRoutingModule {
};
PromoModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PromoModalPageRoutingModule);



/***/ }),

/***/ 8675:
/*!**********************************************************!*\
  !*** ./src/app/modals/promo-modal/promo-modal.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromoModalPageModule": () => (/* binding */ PromoModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _promo_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promo-modal-routing.module */ 9915);
/* harmony import */ var _promo_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promo-modal.page */ 2151);







let PromoModalPageModule = class PromoModalPageModule {
};
PromoModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _promo_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.PromoModalPageRoutingModule
        ],
        declarations: [_promo_modal_page__WEBPACK_IMPORTED_MODULE_1__.PromoModalPage]
    })
], PromoModalPageModule);



/***/ }),

/***/ 2151:
/*!********************************************************!*\
  !*** ./src/app/modals/promo-modal/promo-modal.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromoModalPage": () => (/* binding */ PromoModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _promo_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promo-modal.page.html?ngResource */ 1806);
/* harmony import */ var _promo_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promo-modal.page.scss?ngResource */ 2842);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let PromoModalPage = class PromoModalPage {
    constructor() { }
    ngOnInit() {
    }
};
PromoModalPage.ctorParameters = () => [];
PromoModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-promo-modal',
        template: _promo_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_promo_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PromoModalPage);



/***/ }),

/***/ 2842:
/*!*********************************************************************!*\
  !*** ./src/app/modals/promo-modal/promo-modal.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9tby1tb2RhbC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 1806:
/*!*********************************************************************!*\
  !*** ./src/app/modals/promo-modal/promo-modal.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>promoModal</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_modals_promo-modal_promo-modal_module_ts.js.map