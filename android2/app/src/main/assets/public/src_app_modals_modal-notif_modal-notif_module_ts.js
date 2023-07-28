"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modals_modal-notif_modal-notif_module_ts"],{

/***/ 8896:
/*!******************************************************************!*\
  !*** ./src/app/modals/modal-notif/modal-notif-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalNotifPageRoutingModule": () => (/* binding */ ModalNotifPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _modal_notif_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-notif.page */ 5126);




const routes = [
    {
        path: '',
        component: _modal_notif_page__WEBPACK_IMPORTED_MODULE_0__.ModalNotifPage
    }
];
let ModalNotifPageRoutingModule = class ModalNotifPageRoutingModule {
};
ModalNotifPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ModalNotifPageRoutingModule);



/***/ }),

/***/ 7801:
/*!**********************************************************!*\
  !*** ./src/app/modals/modal-notif/modal-notif.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalNotifPageModule": () => (/* binding */ ModalNotifPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _modal_notif_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-notif-routing.module */ 8896);
/* harmony import */ var _modal_notif_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-notif.page */ 5126);







let ModalNotifPageModule = class ModalNotifPageModule {
};
ModalNotifPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _modal_notif_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModalNotifPageRoutingModule
        ],
        declarations: [_modal_notif_page__WEBPACK_IMPORTED_MODULE_1__.ModalNotifPage]
    })
], ModalNotifPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modals_modal-notif_modal-notif_module_ts.js.map