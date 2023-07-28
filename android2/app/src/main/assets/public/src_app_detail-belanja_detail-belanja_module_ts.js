"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_detail-belanja_detail-belanja_module_ts"],{

/***/ 4468:
/*!*****************************************************************!*\
  !*** ./src/app/detail-belanja/detail-belanja-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailBelanjaPageRoutingModule": () => (/* binding */ DetailBelanjaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _detail_belanja_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-belanja.page */ 1610);




const routes = [
    {
        path: '',
        component: _detail_belanja_page__WEBPACK_IMPORTED_MODULE_0__.DetailBelanjaPage
    }
];
let DetailBelanjaPageRoutingModule = class DetailBelanjaPageRoutingModule {
};
DetailBelanjaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailBelanjaPageRoutingModule);



/***/ }),

/***/ 7014:
/*!*********************************************************!*\
  !*** ./src/app/detail-belanja/detail-belanja.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailBelanjaPageModule": () => (/* binding */ DetailBelanjaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _detail_belanja_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-belanja-routing.module */ 4468);
/* harmony import */ var _detail_belanja_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-belanja.page */ 1610);







let DetailBelanjaPageModule = class DetailBelanjaPageModule {
};
DetailBelanjaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _detail_belanja_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailBelanjaPageRoutingModule
        ],
        declarations: [_detail_belanja_page__WEBPACK_IMPORTED_MODULE_1__.DetailBelanjaPage]
    })
], DetailBelanjaPageModule);



/***/ }),

/***/ 1610:
/*!*******************************************************!*\
  !*** ./src/app/detail-belanja/detail-belanja.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailBelanjaPage": () => (/* binding */ DetailBelanjaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _detail_belanja_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-belanja.page.html?ngResource */ 1918);
/* harmony import */ var _detail_belanja_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-belanja.page.scss?ngResource */ 3869);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dolphin.service */ 2171);







let DetailBelanjaPage = class DetailBelanjaPage {
    constructor(dolphinService, router, loadingController, navCtrl) {
        this.dolphinService = dolphinService;
        this.router = router;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        const currentState = this.router.getCurrentNavigation();
        this.item = currentState.extras.state.item;
    }
    ngOnInit() {
        this.dolphinService.detail_peringkat_belanja('ALL').subscribe((data) => {
            if (data) {
                if (data.includes('Belum ada')) {
                    this.detail_peringkat_belanja = [];
                }
                else {
                    console.log('detail_peringkat_belanja', data);
                    this.detail_peringkat_belanja = data;
                }
            }
        });
    }
};
DetailBelanjaPage.ctorParameters = () => [
    { type: _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__.DolphinService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
DetailBelanjaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-detail-belanja',
        template: _detail_belanja_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_detail_belanja_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailBelanjaPage);



/***/ }),

/***/ 3869:
/*!********************************************************************!*\
  !*** ./src/app/detail-belanja/detail-belanja.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".boxed {\n  display: block;\n  border-bottom: 1px solid #e0e0e0;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.inv {\n  display: block;\n  font-size: 0.8em;\n  line-height: 2px;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: 600;\n  color: #3D5CFF !important;\n}\n\n.inv2 {\n  display: block;\n  font-size: 0.8em;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: 600;\n  color: #3D5CFF !important;\n}\n\n.dt {\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 0.7em;\n}\n\n.amount {\n  font-size: 0.8em;\n  line-height: 2px;\n  text-align: right;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.amount_invoice {\n  font-size: 0.8em;\n  text-align: right;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.bonus-title {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.7em;\n}\n\n.bonus-title_invoice {\n  color: orange;\n  font-size: 0.8em;\n}\n\n.bonus-title_bold {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.detail_poin {\n  color: #e8712c;\n  font-weight: bold;\n  padding: 0;\n}\n\n.bonus-text {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.7em;\n  text-align: right;\n  font-weight: 500;\n}\n\n.bonus-text-loyality {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.12px;\n  text-align: right;\n  font-weight: 500;\n}\n\n.bonus-text_bold {\n  color: rgba(0, 0, 0, 0.6);\n  text-align: right;\n  font-weight: 500;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.bonus-box {\n  background-color: #f5f6ff;\n  border-radius: 5px;\n  margin-bottom: 3px;\n}\n\n.bonus-box_2 {\n  background-color: #effafb;\n  border-radius: 5px;\n  margin-bottom: 3px;\n}\n\n.r-name {\n  display: block;\n  font-size: 0.8em;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: 600;\n  color: #3D5CFF !important;\n}\n\n.r-no {\n  font-size: 0.7em;\n  text-align: right;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.r-date {\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 0.7em;\n}\n\n.r-poin {\n  font-size: 0.7em;\n  float: right;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.cekresi {\n  float: right;\n  padding-left: 5px;\n  color: #3D5CFF !important;\n}\n\n.lapor {\n  color: #ad0023 !important;\n}\n\n.selesai {\n  color: #1b6c00 !important;\n}\n\n.statuses {\n  font-weight: bold;\n  color: #7d93ff !important;\n}\n\n.statuses-selesai {\n  font-weight: bold;\n  color: #00bb51 !important;\n}\n\n.top5-head {\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-right: 10px;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background-color: #3D5CFF;\n}\n\n.top5-title {\n  color: #FFF;\n  font-weight: 500;\n  display: block;\n  font-size: 0.9em;\n}\n\n.top5-content {\n  margin-left: 10px;\n  margin-right: 10px;\n  border-width: 0px 1px 1px 1px;\n  border-style: solid;\n  border-color: #e1e1e1;\n}\n\n.top5-cat {\n  font-size: 0.9em;\n  font-weight: 500;\n}\n\n.top5-rightmonth {\n  font-size: 0.7em;\n  color: #4b80f0;\n  text-align: right;\n}\n\n.top5-leftmonth {\n  font-size: 0.7em;\n  color: #ec7b9c;\n}\n\n.top5-left, .top5-right {\n  font-size: 0.8em;\n  color: #444;\n}\n\n.top5-right {\n  text-align: right;\n}\n\n.detail_list_poin {\n  border-style: solid;\n  border-width: 0.5px;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 12px;\n}\n\n.card_2 {\n  /* Add shadows to create the \"card\" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  padding: 5px;\n  border-radius: 10px;\n}\n\n/* On mouse-over, add a deeper shadow */\n\n.card_2:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n/* Add some padding inside the card container */\n\n.ion-segment-buttons {\n  width: 590px;\n  min-width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC1iZWxhbmphLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBREo7O0FBSUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFESjs7QUFJQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQURKOztBQUlBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FBREo7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBRUo7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0E7RUFFSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBS0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUZKOztBQUtBO0VBQ0kseUJBQUE7QUFGSjs7QUFLQTtFQUNJLHlCQUFBO0FBRko7O0FBS0E7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0FBRko7O0FBS0E7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0FBRko7O0FBTUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7QUFISjs7QUFNQTtFQUNJLFdBQUE7RUFFQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUpKOztBQU9BO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUpKOztBQU9BO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUpKOztBQU9BO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFKSjs7QUFPQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQUpKOztBQU9BO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBSko7O0FBT0E7RUFDQSxpQkFBQTtBQUpBOztBQU1BO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUhKOztBQUtBO0VBQ0ksNENBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRko7O0FBS0UsdUNBQUE7O0FBQ0E7RUFDRSwyQ0FBQTtBQUZKOztBQUtFLCtDQUFBOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBSEoiLCJmaWxlIjoiZGV0YWlsLWJlbGFuamEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uYm94ZWQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uaW52IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgbGluZS1oZWlnaHQ6MnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgY29sb3I6ICMzRDVDRkYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmludjIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IC44ZW07XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNyk7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICBjb2xvcjogIzNENUNGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHQge1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xyXG4gICAgZm9udC1zaXplOiAuN2VtO1xyXG59XHJcblxyXG4uYW1vdW50IHtcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgIGxpbmUtaGVpZ2h0OjJweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC43KTtcclxufVxyXG5cclxuLmFtb3VudF9pbnZvaWNlIHtcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xyXG59XHJcblxyXG4uYm9udXMtdGl0bGUge1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjYpO1xyXG4gICAgZm9udC1zaXplOiAuN2VtO1xyXG59XHJcblxyXG4uYm9udXMtdGl0bGVfaW52b2ljZSB7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgZm9udC1zaXplOiAuOGVtO1xyXG59XHJcbi5ib251cy10aXRsZV9ib2xke1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjYpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5kZXRhaWxfcG9pbiB7XHJcbiAgICBjb2xvcjogI2U4NzEyYztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmJvbnVzLXRleHQge1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjYpO1xyXG4gICAgZm9udC1zaXplOiAuN2VtO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5ib251cy10ZXh0LWxveWFsaXR5IHtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcclxuICAgIGZvbnQtc2l6ZTogLjEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmJvbnVzLXRleHRfYm9sZCB7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNik7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmJvbnVzLWJveCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG59XHJcblxyXG4uYm9udXMtYm94XzIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZmFmYjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG5cclxuLnItbmFtZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC43KTtcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgIGNvbG9yOiAjM0Q1Q0ZGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yLW5vIHtcclxuICAgIGZvbnQtc2l6ZTogLjdlbTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC43KTtcclxufVxyXG5cclxuLnItZGF0ZSB7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNSk7XHJcbiAgICBmb250LXNpemU6IC43ZW07XHJcbn1cclxuXHJcbi5yLXBvaW4ge1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogbGF2ZW5kZXI7XHJcbiAgICBmb250LXNpemU6IC43ZW07XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xyXG4gICAgLy8gcGFkZGluZzo0cHg7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOjNweDtcclxuXHJcbn1cclxuXHJcbi5jZWtyZXNpIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmctbGVmdDo1cHg7XHJcbiAgICBjb2xvcjogIzNENUNGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGFwb3Ige1xyXG4gICAgY29sb3I6ICNhZDAwMjMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlbGVzYWkge1xyXG4gICAgY29sb3I6ICMxYjZjMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN0YXR1c2VzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICM3ZDkzZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN0YXR1c2VzLXNlbGVzYWkgeyBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwMGJiNTEgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi50b3A1LWhlYWQge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNENUNGRjtcclxufVxyXG5cclxuLnRvcDUtdGl0bGUge1xyXG4gICAgY29sb3I6I0ZGRjtcclxuICAgIFxyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAuOWVtO1xyXG59XHJcblxyXG4udG9wNS1jb250ZW50IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHggMXB4IDFweCAxcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTFlMWUxO1xyXG59XHJcblxyXG4udG9wNS1jYXQge1xyXG4gICAgZm9udC1zaXplOiAuOWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnRvcDUtcmlnaHRtb250aCB7XHJcbiAgICBmb250LXNpemU6IC43ZW07XHJcbiAgICBjb2xvcjogIzRiODBmMDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4udG9wNS1sZWZ0bW9udGgge1xyXG4gICAgZm9udC1zaXplOiAuN2VtO1xyXG4gICAgY29sb3I6ICNlYzdiOWM7XHJcbn1cclxuXHJcbi50b3A1LWxlZnQsIC50b3A1LXJpZ2h0IHtcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG59XHJcblxyXG4udG9wNS1yaWdodCB7XHJcbnRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5kZXRhaWxfbGlzdF9wb2lue1xyXG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkOyBcclxuICAgIGJvcmRlci13aWR0aDogMC41cHg7IFxyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjYpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5jYXJkXzIge1xyXG4gICAgLyogQWRkIHNoYWRvd3MgdG8gY3JlYXRlIHRoZSBcImNhcmRcIiBlZmZlY3QgKi9cclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBkZWVwZXIgc2hhZG93ICovXHJcbiAgLmNhcmRfMjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG4gIH1cclxuICBcclxuICAvKiBBZGQgc29tZSBwYWRkaW5nIGluc2lkZSB0aGUgY2FyZCBjb250YWluZXIgKi9cclxuICBcclxuICAuaW9uLXNlZ21lbnQtYnV0dG9ucyB7XHJcbiAgICB3aWR0aDogNTkwcHg7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIH0iXX0= */";

/***/ }),

/***/ 1918:
/*!********************************************************************!*\
  !*** ./src/app/detail-belanja/detail-belanja.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"unilever\" class=\"head\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"arrow-back-outline\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{item}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div >\n    <div *ngIf=\"!detail_peringkat_belanja\">\n      <center>\n        <ion-spinner color=\"primary\" style=\"font-size: 100px;\"></ion-spinner>\n      </center>\n    </div>\n    <div *ngFor=\"let v of detail_peringkat_belanja\">\n      <div class=\"card_2\">\n        <div>\n          <ion-row>\n            <ion-col class=\"target-header\">\n              <span class=\"inv2\">{{v.NAMA_SKU}}</span>\n            </ion-col>             \n          </ion-row> \n          <ion-row class=\"bonus-box\">\n            <ion-col class=\"bonus-title\"> KODE SKU </ion-col>\n            <ion-col class=\"bonus-text\">{{v.KODE_SKU}}</ion-col>\n          </ion-row>\n          <ion-row class=\"bonus-box\">\n            <ion-col class=\"bonus-title\">\n              TOTAL BELANJA\n            </ion-col>\n            <ion-col class=\"bonus-text\">\n              Rp. {{v.TOTAL_BELANJA|number}}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"bonus-box\">\n            <ion-col class=\"bonus-title\"> TOTAL TOP </ion-col>\n            <ion-col class=\"bonus-text\"> {{v.TOTAL_FOP}}</ion-col>\n          </ion-row>\n        </div>\n      </div>\n      \n    </div>\n    \n  </div>\n\n  \n\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_detail-belanja_detail-belanja_module_ts.js.map