"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_top_top_module_ts"],{

/***/ 8617:
/*!*******************************************!*\
  !*** ./src/app/top/top-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopPageRoutingModule": () => (/* binding */ TopPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _top_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top.page */ 8991);




const routes = [
    {
        path: '',
        component: _top_page__WEBPACK_IMPORTED_MODULE_0__.TopPage
    }
];
let TopPageRoutingModule = class TopPageRoutingModule {
};
TopPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TopPageRoutingModule);



/***/ }),

/***/ 4165:
/*!***********************************!*\
  !*** ./src/app/top/top.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopPageModule": () => (/* binding */ TopPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _top_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top-routing.module */ 8617);
/* harmony import */ var _top_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top.page */ 8991);







let TopPageModule = class TopPageModule {
};
TopPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _top_routing_module__WEBPACK_IMPORTED_MODULE_0__.TopPageRoutingModule
        ],
        declarations: [_top_page__WEBPACK_IMPORTED_MODULE_1__.TopPage]
    })
], TopPageModule);



/***/ }),

/***/ 8991:
/*!*********************************!*\
  !*** ./src/app/top/top.page.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopPage": () => (/* binding */ TopPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _top_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top.page.html?ngResource */ 9216);
/* harmony import */ var _top_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top.page.scss?ngResource */ 6410);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dolphin.service */ 2171);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);







let TopPage = class TopPage {
    constructor(dolphinService, router, alertController, modalController, loadingController) {
        this.dolphinService = dolphinService;
        this.router = router;
        this.alertController = alertController;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.getdata();
    }
    getdata() {
        this.dolphinService.gettop5brand().subscribe(data => {
            // console.log('gettop5brand', data)
            if (data) {
                this.top5brand = data.retdata;
            }
            else {
                this.top5brand = [];
            }
        });
    }
    refresh() {
        this.fop = null;
        this.top5brand = null;
        this.top5 = null;
    }
};
TopPage.ctorParameters = () => [
    { type: _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__.DolphinService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController }
];
TopPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-top',
        template: _top_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_top_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TopPage);



/***/ }),

/***/ 6410:
/*!**********************************************!*\
  !*** ./src/app/top/top.page.scss?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "ion-title {\n  color: #3D5CFF;\n}\n\n.boxed {\n  display: block;\n  border-bottom: 1px solid #e0e0e0;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.inv {\n  display: block;\n  font-size: 0.8em;\n  line-height: 2px;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: 600;\n  color: #3D5CFF !important;\n}\n\n.inv2 {\n  display: block;\n  font-size: 0.8em;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: 600;\n  color: #3D5CFF !important;\n}\n\n.dt {\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 0.7em;\n}\n\n.amount {\n  font-size: 0.8em;\n  line-height: 2px;\n  text-align: right;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.amount_invoice {\n  font-size: 0.8em;\n  text-align: right;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.bonus-title {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.7em;\n}\n\n.bonus-title_invoice {\n  color: orange;\n  font-size: 0.8em;\n}\n\n.bonus-text {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.7em;\n  text-align: right;\n  font-weight: 500;\n}\n\n.bonus-box {\n  background-color: #f5f6ff;\n  border-radius: 5px;\n  margin-bottom: 3px;\n}\n\n.r-name {\n  display: block;\n  font-size: 0.8em;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: 600;\n  color: #3D5CFF !important;\n}\n\n.r-no {\n  font-size: 0.7em;\n  text-align: right;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.r-date {\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 0.7em;\n}\n\n.r-poin {\n  font-size: 0.7em;\n  float: right;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.cekresi {\n  float: right;\n  padding-left: 5px;\n  color: #3D5CFF !important;\n}\n\n.lapor {\n  color: #ad0023 !important;\n}\n\n.selesai {\n  color: #1b6c00 !important;\n}\n\n.statuses {\n  font-weight: bold;\n  color: #7d93ff !important;\n}\n\n.statuses-selesai {\n  font-weight: bold;\n  color: #00bb51 !important;\n}\n\n.top5-head {\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-right: 10px;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background-color: #3D5CFF;\n}\n\n.top5-title {\n  color: #FFF;\n  font-weight: 500;\n  display: block;\n  font-size: 0.9em;\n}\n\n.top5-content {\n  margin-left: 10px;\n  margin-right: 10px;\n  border-width: 0px 1px 1px 1px;\n  border-style: solid;\n  border-color: #e1e1e1;\n}\n\n.top5-cat {\n  font-size: 0.9em;\n  font-weight: 500;\n}\n\n.top5-rightmonth {\n  font-size: 0.7em;\n  color: #4b80f0;\n  text-align: right;\n}\n\n.top5-leftmonth {\n  font-size: 0.7em;\n  color: #ec7b9c;\n}\n\n.top5-left, .top5-right {\n  font-size: 0.8em;\n  color: #444;\n}\n\n.top5-right {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBRUksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUFKOztBQU1BO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFISjs7QUFNQTtFQUNJLHlCQUFBO0FBSEo7O0FBTUE7RUFDSSx5QkFBQTtBQUhKOztBQU1BO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtBQUhKOztBQU1BO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtBQUhKOztBQU9BO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FBSko7O0FBT0E7RUFDSSxXQUFBO0VBRUEsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFMSjs7QUFRQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFMSjs7QUFRQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFMSjs7QUFRQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBTEo7O0FBUUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFMSjs7QUFRQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQUxKOztBQVFBO0VBQ0EsaUJBQUE7QUFMQSIsImZpbGUiOiJ0b3AucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjM0Q1Q0ZGO1xyXG59XHJcblxyXG4uYm94ZWQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uaW52IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgbGluZS1oZWlnaHQ6MnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgY29sb3I6ICMzRDVDRkYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmludjIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IC44ZW07XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNyk7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICBjb2xvcjogIzNENUNGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHQge1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xyXG4gICAgZm9udC1zaXplOiAuN2VtO1xyXG59XHJcblxyXG4uYW1vdW50IHtcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgIGxpbmUtaGVpZ2h0OjJweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC43KTtcclxufVxyXG5cclxuLmFtb3VudF9pbnZvaWNlIHtcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xyXG59XHJcblxyXG4uYm9udXMtdGl0bGUge1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjYpO1xyXG4gICAgZm9udC1zaXplOiAuN2VtO1xyXG59XHJcblxyXG4uYm9udXMtdGl0bGVfaW52b2ljZSB7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgZm9udC1zaXplOiAuOGVtO1xyXG59XHJcblxyXG4uYm9udXMtdGV4dCB7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNik7XHJcbiAgICBmb250LXNpemU6IC43ZW07XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5ib251cy1ib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG5cclxuLnItbmFtZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC43KTtcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgIGNvbG9yOiAjM0Q1Q0ZGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yLW5vIHtcclxuICAgIGZvbnQtc2l6ZTogLjdlbTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC43KTtcclxufVxyXG5cclxuLnItZGF0ZSB7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNSk7XHJcbiAgICBmb250LXNpemU6IC43ZW07XHJcbn1cclxuXHJcbi5yLXBvaW4ge1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogbGF2ZW5kZXI7XHJcbiAgICBmb250LXNpemU6IC43ZW07XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xyXG4gICAgLy8gcGFkZGluZzo0cHg7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOjNweDtcclxuXHJcbn1cclxuXHJcbi5jZWtyZXNpIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmctbGVmdDo1cHg7XHJcbiAgICBjb2xvcjogIzNENUNGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGFwb3Ige1xyXG4gICAgY29sb3I6ICNhZDAwMjMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlbGVzYWkge1xyXG4gICAgY29sb3I6ICMxYjZjMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN0YXR1c2VzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICM3ZDkzZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN0YXR1c2VzLXNlbGVzYWkgeyBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwMGJiNTEgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi50b3A1LWhlYWQge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNENUNGRjtcclxufVxyXG5cclxuLnRvcDUtdGl0bGUge1xyXG4gICAgY29sb3I6I0ZGRjtcclxuICAgIFxyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAuOWVtO1xyXG59XHJcblxyXG4udG9wNS1jb250ZW50IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHggMXB4IDFweCAxcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTFlMWUxO1xyXG59XHJcblxyXG4udG9wNS1jYXQge1xyXG4gICAgZm9udC1zaXplOiAuOWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnRvcDUtcmlnaHRtb250aCB7XHJcbiAgICBmb250LXNpemU6IC43ZW07XHJcbiAgICBjb2xvcjogIzRiODBmMDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4udG9wNS1sZWZ0bW9udGgge1xyXG4gICAgZm9udC1zaXplOiAuN2VtO1xyXG4gICAgY29sb3I6ICNlYzdiOWM7XHJcbn1cclxuXHJcbi50b3A1LWxlZnQsIC50b3A1LXJpZ2h0IHtcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG59XHJcblxyXG4udG9wNS1yaWdodCB7XHJcbnRleHQtYWxpZ246IHJpZ2h0O1xyXG59Il19 */";

/***/ }),

/***/ 9216:
/*!**********************************************!*\
  !*** ./src/app/top/top.page.html?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"arrow-back-outline\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>top</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"top5-head\">\n    <ion-row>\n      <ion-col>\n        <div class=\"top5-title\">Top 5 Kategori</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class=\"top5-content\" *ngFor=\"let t of top5\" (click)=\"details(t, 'Kategori')\">\n    <ion-row>\n      <ion-col style=\"padding-top:0px; padding-bottom:0px\">\n        <div class=\"top5-cat\">{{t.CATEGORY}}</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div class=\"top5-leftmonth\">{{prevMonth|date:'MMM'}}</div>\n        <div class=\"top5-left\">Rp.{{t.TOTAL_PREVIOUS|number:'1.0-0'}}</div>\n      </ion-col>\n      <ion-col>\n        <div class=\"top5-rightmonth\">{{curMonth|date:'MMM'}}</div>\n        <div class=\"top5-right\">Rp.{{t.TOTAL_CURRENT|number:'1.0-0'}}</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"top5-head\">\n    <ion-row>\n      <ion-col>\n        <div class=\"top5-title\">Top 5 Brand</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class=\"top5-content\" *ngFor=\"let t of top5brand\" (click)=\"details(t, 'Brand')\">\n    <ion-row>\n      <ion-col style=\"padding-top:0px; padding-bottom:0px\">\n        <div class=\"top5-cat\">{{t.BRAND}}</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div class=\"top5-leftmonth\">{{prevMonth|date:'MMM'}}</div>\n        <div class=\"top5-left\">Rp.{{t.TOTAL_PREVIOUS|number:'1.0-0'}}</div>\n      </ion-col>\n      <ion-col>\n        <div class=\"top5-rightmonth\">{{curMonth|date:'MMM'}}</div>\n        <div class=\"top5-right\">Rp.{{t.TOTAL_CURRENT|number:'1.0-0'}}</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_top_top_module_ts.js.map