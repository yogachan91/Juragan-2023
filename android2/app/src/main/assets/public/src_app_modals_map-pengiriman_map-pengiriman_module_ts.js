"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modals_map-pengiriman_map-pengiriman_module_ts"],{

/***/ 9507:
/*!************************************************************************!*\
  !*** ./src/app/modals/map-pengiriman/map-pengiriman-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPengirimanPageRoutingModule": () => (/* binding */ MapPengirimanPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _map_pengiriman_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-pengiriman.page */ 6600);




const routes = [
    {
        path: '',
        component: _map_pengiriman_page__WEBPACK_IMPORTED_MODULE_0__.MapPengirimanPage
    }
];
let MapPengirimanPageRoutingModule = class MapPengirimanPageRoutingModule {
};
MapPengirimanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MapPengirimanPageRoutingModule);



/***/ }),

/***/ 8301:
/*!****************************************************************!*\
  !*** ./src/app/modals/map-pengiriman/map-pengiriman.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPengirimanPageModule": () => (/* binding */ MapPengirimanPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _map_pengiriman_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-pengiriman-routing.module */ 9507);
/* harmony import */ var _map_pengiriman_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-pengiriman.page */ 6600);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/google-maps */ 2754);








let MapPengirimanPageModule = class MapPengirimanPageModule {
};
MapPengirimanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _map_pengiriman_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapPengirimanPageRoutingModule,
            _angular_google_maps__WEBPACK_IMPORTED_MODULE_7__.GoogleMapsModule
        ],
        declarations: [_map_pengiriman_page__WEBPACK_IMPORTED_MODULE_1__.MapPengirimanPage]
    })
], MapPengirimanPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modals_map-pengiriman_map-pengiriman_module_ts.js.map