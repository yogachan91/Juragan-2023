"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modals_banner-modal_banner-modal_module_ts"],{

/***/ 5615:
/*!********************************************************************!*\
  !*** ./src/app/modals/banner-modal/banner-modal-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerModalPageRoutingModule": () => (/* binding */ BannerModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _banner_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner-modal.page */ 8149);




const routes = [
    {
        path: '',
        component: _banner_modal_page__WEBPACK_IMPORTED_MODULE_0__.BannerModalPage
    }
];
let BannerModalPageRoutingModule = class BannerModalPageRoutingModule {
};
BannerModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BannerModalPageRoutingModule);



/***/ }),

/***/ 7447:
/*!************************************************************!*\
  !*** ./src/app/modals/banner-modal/banner-modal.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerModalPageModule": () => (/* binding */ BannerModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _banner_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner-modal-routing.module */ 5615);
/* harmony import */ var _banner_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner-modal.page */ 8149);







let BannerModalPageModule = class BannerModalPageModule {
};
BannerModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _banner_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.BannerModalPageRoutingModule
        ],
        declarations: [_banner_modal_page__WEBPACK_IMPORTED_MODULE_1__.BannerModalPage]
    })
], BannerModalPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modals_banner-modal_banner-modal_module_ts.js.map