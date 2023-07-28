"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_notif-list_notif-list_module_ts"],{

/***/ 9992:
/*!*********************************************************!*\
  !*** ./src/app/notif-list/notif-list-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotifListPageRoutingModule": () => (/* binding */ NotifListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _notif_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notif-list.page */ 5045);




const routes = [
    {
        path: '',
        component: _notif_list_page__WEBPACK_IMPORTED_MODULE_0__.NotifListPage
    }
];
let NotifListPageRoutingModule = class NotifListPageRoutingModule {
};
NotifListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotifListPageRoutingModule);



/***/ }),

/***/ 5208:
/*!*************************************************!*\
  !*** ./src/app/notif-list/notif-list.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotifListPageModule": () => (/* binding */ NotifListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _notif_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notif-list-routing.module */ 9992);
/* harmony import */ var _notif_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notif-list.page */ 5045);







let NotifListPageModule = class NotifListPageModule {
};
NotifListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _notif_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotifListPageRoutingModule
        ],
        declarations: [_notif_list_page__WEBPACK_IMPORTED_MODULE_1__.NotifListPage]
    })
], NotifListPageModule);



/***/ }),

/***/ 5045:
/*!***********************************************!*\
  !*** ./src/app/notif-list/notif-list.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotifListPage": () => (/* binding */ NotifListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _notif_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notif-list.page.html?ngResource */ 4785);
/* harmony import */ var _notif_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notif-list.page.scss?ngResource */ 288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let NotifListPage = class NotifListPage {
    constructor() { }
    ngOnInit() {
    }
};
NotifListPage.ctorParameters = () => [];
NotifListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-notif-list',
        template: _notif_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_notif_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotifListPage);



/***/ }),

/***/ 288:
/*!************************************************************!*\
  !*** ./src/app/notif-list/notif-list.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZi1saXN0LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 4785:
/*!************************************************************!*\
  !*** ./src/app/notif-list/notif-list.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>notifList</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_notif-list_notif-list_module_ts.js.map