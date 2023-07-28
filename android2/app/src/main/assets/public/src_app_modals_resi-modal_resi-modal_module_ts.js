"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modals_resi-modal_resi-modal_module_ts"],{

/***/ 9643:
/*!****************************************************************!*\
  !*** ./src/app/modals/resi-modal/resi-modal-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResiModalPageRoutingModule": () => (/* binding */ ResiModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _resi_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resi-modal.page */ 3801);




const routes = [
    {
        path: '',
        component: _resi_modal_page__WEBPACK_IMPORTED_MODULE_0__.ResiModalPage
    }
];
let ResiModalPageRoutingModule = class ResiModalPageRoutingModule {
};
ResiModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ResiModalPageRoutingModule);



/***/ }),

/***/ 8840:
/*!********************************************************!*\
  !*** ./src/app/modals/resi-modal/resi-modal.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResiModalPageModule": () => (/* binding */ ResiModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _resi_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resi-modal-routing.module */ 9643);
/* harmony import */ var _resi_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resi-modal.page */ 3801);







let ResiModalPageModule = class ResiModalPageModule {
};
ResiModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _resi_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResiModalPageRoutingModule
        ],
        declarations: [_resi_modal_page__WEBPACK_IMPORTED_MODULE_1__.ResiModalPage]
    })
], ResiModalPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modals_resi-modal_resi-modal_module_ts.js.map