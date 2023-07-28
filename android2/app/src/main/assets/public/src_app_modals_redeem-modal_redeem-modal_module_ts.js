"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modals_redeem-modal_redeem-modal_module_ts"],{

/***/ 5832:
/*!********************************************************************!*\
  !*** ./src/app/modals/redeem-modal/redeem-modal-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedeemModalPageRoutingModule": () => (/* binding */ RedeemModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _redeem_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redeem-modal.page */ 2515);




const routes = [
    {
        path: '',
        component: _redeem_modal_page__WEBPACK_IMPORTED_MODULE_0__.RedeemModalPage
    }
];
let RedeemModalPageRoutingModule = class RedeemModalPageRoutingModule {
};
RedeemModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RedeemModalPageRoutingModule);



/***/ }),

/***/ 4262:
/*!************************************************************!*\
  !*** ./src/app/modals/redeem-modal/redeem-modal.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedeemModalPageModule": () => (/* binding */ RedeemModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _redeem_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redeem-modal-routing.module */ 5832);
/* harmony import */ var _redeem_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redeem-modal.page */ 2515);







let RedeemModalPageModule = class RedeemModalPageModule {
};
RedeemModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _redeem_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.RedeemModalPageRoutingModule
        ],
        declarations: [_redeem_modal_page__WEBPACK_IMPORTED_MODULE_1__.RedeemModalPage]
    })
], RedeemModalPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modals_redeem-modal_redeem-modal_module_ts.js.map