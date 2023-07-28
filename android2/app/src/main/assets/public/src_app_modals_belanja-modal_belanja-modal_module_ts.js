"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modals_belanja-modal_belanja-modal_module_ts"],{

/***/ 2776:
/*!**********************************************************************!*\
  !*** ./src/app/modals/belanja-modal/belanja-modal-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BelanjaModalPageRoutingModule": () => (/* binding */ BelanjaModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _belanja_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./belanja-modal.page */ 4519);




const routes = [
    {
        path: '',
        component: _belanja_modal_page__WEBPACK_IMPORTED_MODULE_0__.BelanjaModalPage
    }
];
let BelanjaModalPageRoutingModule = class BelanjaModalPageRoutingModule {
};
BelanjaModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BelanjaModalPageRoutingModule);



/***/ }),

/***/ 8837:
/*!**************************************************************!*\
  !*** ./src/app/modals/belanja-modal/belanja-modal.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BelanjaModalPageModule": () => (/* binding */ BelanjaModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _belanja_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./belanja-modal-routing.module */ 2776);
/* harmony import */ var _belanja_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./belanja-modal.page */ 4519);







let BelanjaModalPageModule = class BelanjaModalPageModule {
};
BelanjaModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _belanja_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.BelanjaModalPageRoutingModule
        ],
        declarations: [_belanja_modal_page__WEBPACK_IMPORTED_MODULE_1__.BelanjaModalPage]
    })
], BelanjaModalPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modals_belanja-modal_belanja-modal_module_ts.js.map