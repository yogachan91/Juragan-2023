"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modals_register-modal_register-modal_module_ts"],{

/***/ 5667:
/*!************************************************************************!*\
  !*** ./src/app/modals/register-modal/register-modal-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterModalPageRoutingModule": () => (/* binding */ RegisterModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _register_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-modal.page */ 4193);




const routes = [
    {
        path: '',
        component: _register_modal_page__WEBPACK_IMPORTED_MODULE_0__.RegisterModalPage
    }
];
let RegisterModalPageRoutingModule = class RegisterModalPageRoutingModule {
};
RegisterModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterModalPageRoutingModule);



/***/ }),

/***/ 6616:
/*!****************************************************************!*\
  !*** ./src/app/modals/register-modal/register-modal.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterModalPageModule": () => (/* binding */ RegisterModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _register_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-modal-routing.module */ 5667);
/* harmony import */ var _register_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-modal.page */ 4193);







let RegisterModalPageModule = class RegisterModalPageModule {
};
RegisterModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterModalPageRoutingModule
        ],
        declarations: [_register_modal_page__WEBPACK_IMPORTED_MODULE_1__.RegisterModalPage]
    })
], RegisterModalPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modals_register-modal_register-modal_module_ts.js.map