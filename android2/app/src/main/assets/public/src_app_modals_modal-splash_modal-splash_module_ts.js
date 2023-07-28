"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modals_modal-splash_modal-splash_module_ts"],{

/***/ 5860:
/*!********************************************************************!*\
  !*** ./src/app/modals/modal-splash/modal-splash-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalSplashPageRoutingModule": () => (/* binding */ ModalSplashPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _modal_splash_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-splash.page */ 6785);




const routes = [
    {
        path: '',
        component: _modal_splash_page__WEBPACK_IMPORTED_MODULE_0__.ModalSplashPage
    }
];
let ModalSplashPageRoutingModule = class ModalSplashPageRoutingModule {
};
ModalSplashPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ModalSplashPageRoutingModule);



/***/ }),

/***/ 4586:
/*!************************************************************!*\
  !*** ./src/app/modals/modal-splash/modal-splash.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalSplashPageModule": () => (/* binding */ ModalSplashPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _modal_splash_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-splash-routing.module */ 5860);
/* harmony import */ var _modal_splash_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-splash.page */ 6785);







let ModalSplashPageModule = class ModalSplashPageModule {
};
ModalSplashPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _modal_splash_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModalSplashPageRoutingModule
        ],
        declarations: [_modal_splash_page__WEBPACK_IMPORTED_MODULE_1__.ModalSplashPage]
    })
], ModalSplashPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modals_modal-splash_modal-splash_module_ts.js.map