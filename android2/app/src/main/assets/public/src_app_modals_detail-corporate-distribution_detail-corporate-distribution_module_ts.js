"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modals_detail-corporate-distribution_detail-corporate-distribution_module_ts"],{

/***/ 8189:
/*!******************************************************************************************************!*\
  !*** ./src/app/modals/detail-corporate-distribution/detail-corporate-distribution-routing.module.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailCorporateDistributionPageRoutingModule": () => (/* binding */ DetailCorporateDistributionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _detail_corporate_distribution_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-corporate-distribution.page */ 1258);




const routes = [
    {
        path: '',
        component: _detail_corporate_distribution_page__WEBPACK_IMPORTED_MODULE_0__.DetailCorporateDistributionPage
    }
];
let DetailCorporateDistributionPageRoutingModule = class DetailCorporateDistributionPageRoutingModule {
};
DetailCorporateDistributionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailCorporateDistributionPageRoutingModule);



/***/ }),

/***/ 9973:
/*!**********************************************************************************************!*\
  !*** ./src/app/modals/detail-corporate-distribution/detail-corporate-distribution.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailCorporateDistributionPageModule": () => (/* binding */ DetailCorporateDistributionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _detail_corporate_distribution_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-corporate-distribution-routing.module */ 8189);
/* harmony import */ var _detail_corporate_distribution_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-corporate-distribution.page */ 1258);







let DetailCorporateDistributionPageModule = class DetailCorporateDistributionPageModule {
};
DetailCorporateDistributionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _detail_corporate_distribution_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailCorporateDistributionPageRoutingModule
        ],
        declarations: [_detail_corporate_distribution_page__WEBPACK_IMPORTED_MODULE_1__.DetailCorporateDistributionPage]
    })
], DetailCorporateDistributionPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modals_detail-corporate-distribution_detail-corporate-distribution_module_ts.js.map