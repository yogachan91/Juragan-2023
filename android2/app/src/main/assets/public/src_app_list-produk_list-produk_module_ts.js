"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_list-produk_list-produk_module_ts"],{

/***/ 4947:
/*!***********************************************************!*\
  !*** ./src/app/list-produk/list-produk-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListProdukPageRoutingModule": () => (/* binding */ ListProdukPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _list_produk_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-produk.page */ 7678);




const routes = [
    {
        path: '',
        component: _list_produk_page__WEBPACK_IMPORTED_MODULE_0__.ListProdukPage
    }
];
let ListProdukPageRoutingModule = class ListProdukPageRoutingModule {
};
ListProdukPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ListProdukPageRoutingModule);



/***/ }),

/***/ 2620:
/*!***************************************************!*\
  !*** ./src/app/list-produk/list-produk.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListProdukPageModule": () => (/* binding */ ListProdukPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _list_produk_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-produk-routing.module */ 4947);
/* harmony import */ var _list_produk_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-produk.page */ 7678);







let ListProdukPageModule = class ListProdukPageModule {
};
ListProdukPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _list_produk_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListProdukPageRoutingModule
        ],
        declarations: [_list_produk_page__WEBPACK_IMPORTED_MODULE_1__.ListProdukPage]
    })
], ListProdukPageModule);



/***/ }),

/***/ 7678:
/*!*************************************************!*\
  !*** ./src/app/list-produk/list-produk.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListProdukPage": () => (/* binding */ ListProdukPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _list_produk_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-produk.page.html?ngResource */ 5425);
/* harmony import */ var _list_produk_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-produk.page.scss?ngResource */ 4019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dolphin.service */ 2171);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);






let ListProdukPage = class ListProdukPage {
    constructor(router, dolphinService) {
        this.router = router;
        this.dolphinService = dolphinService;
    }
    ngOnInit() {
        this.dolphinService.unilever_produk().subscribe(data => {
            if (data.response == 200) {
                console.log('dataproduk', data.retdata);
                this.getkdk = data.getkdk;
                this.getnutrisi = data.getnutrisi;
                this.getperawatan_pribadi = data.getperawatan_pribadi;
                this.getperawatan_rumah = data.getperawatan_rumah;
            }
        });
    }
};
ListProdukPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__.DolphinService }
];
ListProdukPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-list-produk',
        template: _list_produk_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_list_produk_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListProdukPage);



/***/ }),

/***/ 4019:
/*!**************************************************************!*\
  !*** ./src/app/list-produk/list-produk.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "ion-title {\n  color: #f5f6fa;\n}\n\n.background {\n  background-color: #1505a8;\n}\n\n.boxed {\n  display: block;\n  border-bottom: 1px solid #e0e0e0;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.inv {\n  display: block;\n  font-size: 0.8em;\n  line-height: 2px;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: 600;\n  color: #3D5CFF !important;\n}\n\n.inv2 {\n  display: block;\n  font-size: 0.8em;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: 600;\n  color: #3D5CFF !important;\n}\n\n.dt {\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 0.7em;\n}\n\n.amount {\n  font-size: 0.8em;\n  line-height: 2px;\n  text-align: right;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.amount_invoice {\n  font-size: 0.8em;\n  text-align: right;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.bonus-title {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 12px;\n}\n\n.bonus-title_invoice {\n  color: orange;\n  font-size: 0.8em;\n}\n\n.bonus-title_bold {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.detail_poin {\n  color: #1d1c1c;\n  font-size: 15px;\n  padding: 0;\n}\n\n.bonus-text {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.7em;\n  text-align: right;\n  font-weight: 500;\n}\n\n.bonus-text-loyality {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.12px;\n  text-align: right;\n  font-weight: 500;\n}\n\n.bonus-text_bold {\n  color: rgba(0, 0, 0, 0.6);\n  text-align: right;\n  font-weight: 500;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.bonus-box {\n  background-color: #f5f6ff;\n  border-radius: 5px;\n  margin-bottom: 3px;\n}\n\n.r-name {\n  display: block;\n  font-size: 0.8em;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: 600;\n  color: #3D5CFF !important;\n}\n\n.r-no {\n  font-size: 0.7em;\n  text-align: right;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.r-date {\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 0.7em;\n}\n\n.r-poin {\n  font-size: 0.7em;\n  float: right;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.cekresi {\n  float: right;\n  padding-left: 5px;\n  color: #3D5CFF !important;\n}\n\n.lapor {\n  color: #ad0023 !important;\n}\n\n.selesai {\n  color: #1b6c00 !important;\n}\n\n.statuses {\n  font-weight: bold;\n  color: #7d93ff !important;\n}\n\n.statuses-selesai {\n  font-weight: bold;\n  color: #00bb51 !important;\n}\n\n.top5-head {\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-right: 10px;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background-color: #3D5CFF;\n}\n\n.top5-title {\n  color: #FFF;\n  font-weight: 500;\n  display: block;\n  font-size: 0.9em;\n}\n\n.top5-content {\n  margin-left: 10px;\n  margin-right: 10px;\n  border-width: 0px 1px 1px 1px;\n  border-style: solid;\n  border-color: #e1e1e1;\n}\n\n.top5-cat {\n  font-size: 0.9em;\n  font-weight: 500;\n}\n\n.top5-rightmonth {\n  font-size: 0.7em;\n  color: #4b80f0;\n  text-align: right;\n}\n\n.top5-leftmonth {\n  font-size: 0.7em;\n  color: #ec7b9c;\n}\n\n.top5-left, .top5-right {\n  font-size: 0.8em;\n  color: #444;\n}\n\n.top5-right {\n  text-align: right;\n}\n\n.detail_list_poin {\n  border-style: solid;\n  border-width: 0.5px;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtcHJvZHVrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFDQTtFQUNJLHlCQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUVKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBRUo7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBRUo7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUdKOztBQUFBO0VBQ0ksY0FBQTtFQUVBLGVBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFEQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUlKOztBQURBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBREE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFJSjs7QUFEQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBSUo7O0FBREE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FBSUo7O0FBREE7RUFFSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBR0o7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBSUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFFQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUtBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUZKOztBQUtBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUtBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUtBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBRko7O0FBS0E7RUFDQSxpQkFBQTtBQUZBOztBQUlBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQURKIiwiZmlsZSI6Imxpc3QtcHJvZHVrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBjb2xvcjogI2Y1ZjZmYTtcclxufVxyXG4uYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTA1YTg7XHJcbn1cclxuXHJcbi5ib3hlZCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5pbnYge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IC44ZW07XHJcbiAgICBsaW5lLWhlaWdodDoycHg7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNyk7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICBjb2xvcjogIzNENUNGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW52MiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC43KTtcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgIGNvbG9yOiAjM0Q1Q0ZGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kdCB7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNSk7XHJcbiAgICBmb250LXNpemU6IC43ZW07XHJcbn1cclxuXHJcbi5hbW91bnQge1xyXG4gICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgbGluZS1oZWlnaHQ6MnB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xyXG59XHJcblxyXG4uYW1vdW50X2ludm9pY2Uge1xyXG4gICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNyk7XHJcbn1cclxuXHJcbi5ib251cy10aXRsZSB7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNik7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5ib251cy10aXRsZV9pbnZvaWNlIHtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICBmb250LXNpemU6IC44ZW07XHJcbn1cclxuLmJvbnVzLXRpdGxlX2JvbGR7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNik7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmRldGFpbF9wb2luIHtcclxuICAgIGNvbG9yOiAjMWQxYzFjO1xyXG4gICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uYm9udXMtdGV4dCB7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNik7XHJcbiAgICBmb250LXNpemU6IC43ZW07XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmJvbnVzLXRleHQtbG95YWxpdHkge1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjYpO1xyXG4gICAgZm9udC1zaXplOiAuMTJweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uYm9udXMtdGV4dF9ib2xkIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYm9udXMtYm94IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY2ZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbn1cclxuXHJcbi5yLW5hbWUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IC44ZW07XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNyk7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICBjb2xvcjogIzNENUNGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uci1ubyB7XHJcbiAgICBmb250LXNpemU6IC43ZW07XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNyk7XHJcbn1cclxuXHJcbi5yLWRhdGUge1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xyXG4gICAgZm9udC1zaXplOiAuN2VtO1xyXG59XHJcblxyXG4uci1wb2luIHtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGxhdmVuZGVyO1xyXG4gICAgZm9udC1zaXplOiAuN2VtO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC41KTtcclxuICAgIC8vIHBhZGRpbmc6NHB4O1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czozcHg7XHJcblxyXG59XHJcblxyXG4uY2VrcmVzaSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6NXB4O1xyXG4gICAgY29sb3I6ICMzRDVDRkYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxhcG9yIHtcclxuICAgIGNvbG9yOiAjYWQwMDIzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWxlc2FpIHtcclxuICAgIGNvbG9yOiAjMWI2YzAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdGF0dXNlcyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjN2Q5M2ZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdGF0dXNlcy1zZWxlc2FpIHsgXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMDBiYjUxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4udG9wNS1oZWFkIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRDVDRkY7XHJcbn1cclxuXHJcbi50b3A1LXRpdGxlIHtcclxuICAgIGNvbG9yOiNGRkY7XHJcbiAgICBcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogLjllbTtcclxufVxyXG5cclxuLnRvcDUtY29udGVudCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGJvcmRlci13aWR0aDogMHB4IDFweCAxcHggMXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogI2UxZTFlMTtcclxufVxyXG5cclxuLnRvcDUtY2F0IHtcclxuICAgIGZvbnQtc2l6ZTogLjllbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi50b3A1LXJpZ2h0bW9udGgge1xyXG4gICAgZm9udC1zaXplOiAuN2VtO1xyXG4gICAgY29sb3I6ICM0YjgwZjA7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnRvcDUtbGVmdG1vbnRoIHtcclxuICAgIGZvbnQtc2l6ZTogLjdlbTtcclxuICAgIGNvbG9yOiAjZWM3YjljO1xyXG59XHJcblxyXG4udG9wNS1sZWZ0LCAudG9wNS1yaWdodCB7XHJcbiAgICBmb250LXNpemU6IC44ZW07XHJcbiAgICBjb2xvcjogIzQ0NDtcclxufVxyXG5cclxuLnRvcDUtcmlnaHQge1xyXG50ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uZGV0YWlsX2xpc3RfcG9pbntcclxuICAgIGJvcmRlci1zdHlsZTpzb2xpZDsgXHJcbiAgICBib3JkZXItd2lkdGg6IDAuNXB4OyBcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufSJdfQ== */";

/***/ }),

/***/ 5425:
/*!**************************************************************!*\
  !*** ./src/app/list-produk/list-produk.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"unilever\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"arrow-back-outline\"></ion-back-button>\n    </ion-buttons>\n    <ion-title> Unilever Produk </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <hr>\n  <ion-row>\n    <ion-col  size=\"8\" class=\"bonus-title\">\n      <span class=\"detail_poin\">Kecantikan dan Kesehatan</span>\n    </ion-col>\n    <ion-col class=\"bonus-text\" (click)=\"open= !open\">\n      <ion-icon\n        *ngIf=\"!open\"\n        id=\"tutorialIcon\"\n        name=\"add-circle-outline\"\n        style=\"color: #e8712c; font-size: 25px; font-weight: bold\"\n      ></ion-icon>\n      <ion-icon\n        *ngIf=\"open\"\n        name=\"ellipsis-horizontal-circle-outline\"\n        style=\"color: #e8712c; font-size: 25px; font-weight: bold\"\n      ></ion-icon>\n    </ion-col>\n  </ion-row>\n  <!-- <div style=\"border-style: solid;border-width: 0.1px; border-color: rgb(150, 148, 148)\"></div> -->\n  <div *ngIf=\"open\">\n    <ion-list>\n      <ion-item *ngFor=\"let v of getkdk\">\n        <ion-label style=\"font-size: 12px;\">{{v.brand}}</ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n  <hr style=\"border-style: solid;border-width: 0.1px; border-color: rgb(206, 204, 204)\">\n\n  \n\n  <ion-row>\n    <ion-col class=\"bonus-title\">\n      <ion-col class=\"detail_poin\">Nutrisi</ion-col>\n    </ion-col>\n    <ion-col class=\"bonus-text\" (click)=\"open1= !open1\">\n      <ion-icon\n        *ngIf=\"!open1\"\n        id=\"tutorialIcon\"\n        name=\"add-circle-outline\"\n        style=\"color: #e8712c; font-size: 25px; font-weight: bold\"\n      ></ion-icon>\n      <ion-icon\n        *ngIf=\"open1\"\n        name=\"ellipsis-horizontal-circle-outline\"\n        style=\"color: #e8712c; font-size: 25px; font-weight: bold\"\n      ></ion-icon>\n    </ion-col>\n  </ion-row>\n  <!-- <div style=\"border-style: solid;border-width: 0.1px; border-color: rgb(150, 148, 148)\"></div> -->\n  <div *ngIf=\"open1\">\n    <ion-list>\n      <ion-item *ngFor=\"let v of getnutrisi\">\n        <ion-label style=\"font-size: 12px;\">{{v.brand}}</ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n  <hr style=\"border-style: solid;border-width: 0.1px; border-color: rgb(206, 204, 204)\">\n\n \n  <ion-row>\n    <ion-col class=\"bonus-title\">\n      <ion-col class=\"detail_poin\">Perawatan Pribadi</ion-col>\n    </ion-col>\n    <ion-col class=\"bonus-text\" (click)=\"open12= !open12\">\n      <ion-icon\n        *ngIf=\"!open12\"\n        id=\"tutorialIcon\"\n        name=\"add-circle-outline\"\n        style=\"color: #e8712c; font-size: 25px; font-weight: bold\"\n      ></ion-icon>\n      <ion-icon\n        *ngIf=\"open12\"\n        name=\"ellipsis-horizontal-circle-outline\"\n        style=\"color: #e8712c; font-size: 25px; font-weight: bold\"\n      ></ion-icon>\n    </ion-col>\n  </ion-row>\n  <!-- <div style=\"border-style: solid;border-width: 0.1px; border-color: rgb(150, 148, 148)\"></div> -->\n  <div *ngIf=\"open12\">\n    <ion-list>\n      <ion-item *ngFor=\"let v of getperawatan_pribadi\">\n        <ion-label style=\"font-size: 12px;\">{{v.brand}}</ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n  <hr style=\"border-style: solid;border-width: 0.1px; border-color: rgb(206, 204, 204)\">\n\n  <ion-row>\n    <ion-col class=\"bonus-title\">\n      <ion-col class=\"detail_poin\">Perawatan Rumah</ion-col>\n    </ion-col>\n    <ion-col class=\"bonus-text\" (click)=\"open123= !open123\">\n      <ion-icon\n        *ngIf=\"!open123\"\n        id=\"tutorialIcon\"\n        name=\"add-circle-outline\"\n        style=\"color: #e8712c; font-size: 25px; font-weight: bold\"\n      ></ion-icon>\n      <ion-icon\n        *ngIf=\"open123\"\n        name=\"ellipsis-horizontal-circle-outline\"\n        style=\"color: #e8712c; font-size: 25px; font-weight: bold\"\n      ></ion-icon>\n    </ion-col>\n  </ion-row>\n  <!-- <div style=\"border-style: solid;border-width: 0.1px; border-color: rgb(150, 148, 148)\"></div> -->\n  <div *ngIf=\"open123\">\n    <ion-list>\n      <ion-item *ngFor=\"let v of getperawatan_rumah\">\n        <ion-label style=\"font-size: 12px;\">{{v.brand}}</ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n  <hr style=\"border-style: solid;border-width: 0.1px; border-color: rgb(206, 204, 204)\">\n\n  <p>&nbsp;</p>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_list-produk_list-produk_module_ts.js.map