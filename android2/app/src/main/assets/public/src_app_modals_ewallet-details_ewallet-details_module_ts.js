"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modals_ewallet-details_ewallet-details_module_ts"],{

/***/ 3807:
/*!**************************************************************************!*\
  !*** ./src/app/modals/ewallet-details/ewallet-details-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EwalletDetailsPageRoutingModule": () => (/* binding */ EwalletDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ewallet_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ewallet-details.page */ 131);




const routes = [
    {
        path: '',
        component: _ewallet_details_page__WEBPACK_IMPORTED_MODULE_0__.EwalletDetailsPage
    }
];
let EwalletDetailsPageRoutingModule = class EwalletDetailsPageRoutingModule {
};
EwalletDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EwalletDetailsPageRoutingModule);



/***/ }),

/***/ 349:
/*!******************************************************************!*\
  !*** ./src/app/modals/ewallet-details/ewallet-details.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EwalletDetailsPageModule": () => (/* binding */ EwalletDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ewallet_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ewallet-details-routing.module */ 3807);
/* harmony import */ var _ewallet_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ewallet-details.page */ 131);







let EwalletDetailsPageModule = class EwalletDetailsPageModule {
};
EwalletDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ewallet_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.EwalletDetailsPageRoutingModule
        ],
        declarations: [_ewallet_details_page__WEBPACK_IMPORTED_MODULE_1__.EwalletDetailsPage]
    })
], EwalletDetailsPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modals_ewallet-details_ewallet-details_module_ts.js.map