"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_redeem-status_redeem-status_module_ts"],{

/***/ 2342:
/*!***************************************************************!*\
  !*** ./src/app/redeem-status/redeem-status-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedeemStatusPageRoutingModule": () => (/* binding */ RedeemStatusPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _redeem_status_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redeem-status.page */ 718);




const routes = [
    {
        path: '',
        component: _redeem_status_page__WEBPACK_IMPORTED_MODULE_0__.RedeemStatusPage
    }
];
let RedeemStatusPageRoutingModule = class RedeemStatusPageRoutingModule {
};
RedeemStatusPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RedeemStatusPageRoutingModule);



/***/ }),

/***/ 3818:
/*!*******************************************************!*\
  !*** ./src/app/redeem-status/redeem-status.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedeemStatusPageModule": () => (/* binding */ RedeemStatusPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _redeem_status_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redeem-status-routing.module */ 2342);
/* harmony import */ var _redeem_status_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redeem-status.page */ 718);







let RedeemStatusPageModule = class RedeemStatusPageModule {
};
RedeemStatusPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _redeem_status_routing_module__WEBPACK_IMPORTED_MODULE_0__.RedeemStatusPageRoutingModule
        ],
        declarations: [_redeem_status_page__WEBPACK_IMPORTED_MODULE_1__.RedeemStatusPage]
    })
], RedeemStatusPageModule);



/***/ }),

/***/ 718:
/*!*****************************************************!*\
  !*** ./src/app/redeem-status/redeem-status.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedeemStatusPage": () => (/* binding */ RedeemStatusPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _redeem_status_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redeem-status.page.html?ngResource */ 3092);
/* harmony import */ var _redeem_status_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redeem-status.page.scss?ngResource */ 6440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dolphin.service */ 2171);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _modals_ewallet_details_ewallet_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/ewallet-details/ewallet-details.page */ 131);








let RedeemStatusPage = class RedeemStatusPage {
    constructor(dolphinService, loadingController, router, modalController) {
        this.dolphinService = dolphinService;
        this.loadingController = loadingController;
        this.router = router;
        this.modalController = modalController;
        this.segmen = 'gift';
        this.segmengift = 'diproses';
        this.loadData();
    }
    refresh() {
        // this.showLoading('Loading data redeem..')
        this.redeemEwallet = null;
        this.redeemGift = null;
        this.diproses = null;
        this.dikirim = null;
        this.diterima = null;
        this.loadData();
    }
    showLoading(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: msg,
                backdropDismiss: false
            });
            yield loading.present();
        });
    }
    ngOnInit() {
    }
    loadData() {
        this.dolphinService.getewalletlist().subscribe((res) => {
            if (res) {
                if (res.status == 'success') {
                    this.redeemEwallet = res.retdata;
                }
                else {
                    this.redeemEwallet = [];
                }
                console.log('redeemEwallet', this.redeemEwallet);
            }
        });
        this.dolphinService.getstatushadiahlist('DIPROSES').subscribe(data => {
            // console.log('DIPROSES', data)
            if (data.status == 'success') {
                this.diproses = null;
                this.diproses = data.retdata;
            }
            else {
                this.diproses = [];
            }
        });
        this.dikirim = null;
        this.dolphinService.getstatushadiahlist('DIKIRIM').subscribe(data => {
            // console.log('DIKIRIM', data)
            if (data.status == 'success') {
                this.dikirim = data.retdata;
            }
            else {
                this.dikirim = [];
            }
        });
        this.diterima = null;
        this.dolphinService.getstatushadiahlist('DITERIMA').subscribe(data => {
            // console.log('DITERIMA', data)
            if (data.status == 'success') {
                this.diterima = data.retdata;
            }
            else {
                this.diterima = [];
            }
        });
    }
    toEwalletList(e) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modals_ewallet_details_ewallet_details_page__WEBPACK_IMPORTED_MODULE_3__.EwalletDetailsPage,
                componentProps: { redeem: e },
                swipeToClose: true,
                breakpoints: [0, 0.7, 0.9],
                initialBreakpoint: 0.7
            });
            return yield modal.present();
        });
    }
};
RedeemStatusPage.ctorParameters = () => [
    { type: _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__.DolphinService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
RedeemStatusPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-redeem-status',
        template: _redeem_status_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_redeem_status_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RedeemStatusPage);



/***/ }),

/***/ 6440:
/*!******************************************************************!*\
  !*** ./src/app/redeem-status/redeem-status.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".head {\n  --border-style: none !important;\n  --border-width: 0px !important;\n}\n\n.boxed {\n  display: block;\n  border-bottom: 1px solid #e0e0e0;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.inv {\n  display: block;\n  font-size: 0.8em;\n  line-height: 2px;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: 600;\n  color: #3D5CFF !important;\n}\n\n.dt {\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 0.7em;\n}\n\n.amount {\n  font-size: 0.8em;\n  line-height: 2px;\n  text-align: right;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.bonus-title {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.7em;\n}\n\n.bonus-text {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.7em;\n  text-align: right;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n\n.bonus-box {\n  background-color: #f5f6ff;\n  border-radius: 5px;\n  margin-bottom: 3px;\n}\n\n.r-name {\n  display: block;\n  font-size: 0.8em;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: 600;\n  color: #3D5CFF !important;\n}\n\n.r-no {\n  font-size: 0.7em;\n  text-align: right;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.r-date {\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 0.7em;\n}\n\n.r-poin {\n  font-size: 0.7em;\n  float: right;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.cekresi {\n  float: right;\n  padding-left: 5px;\n  color: #3D5CFF !important;\n}\n\n.lapor {\n  color: #ad0023 !important;\n}\n\n.selesai {\n  color: #1b6c00 !important;\n}\n\n.statuses {\n  font-weight: bold;\n  color: #7d93ff !important;\n}\n\n.statuses-selesai {\n  font-weight: bold;\n  color: #00bb51 !important;\n}\n\n.top5-head {\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-right: 10px;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background-color: #3D5CFF;\n}\n\n.top5-title {\n  color: #FFF;\n  font-weight: 500;\n  display: block;\n  font-size: 0.9em;\n}\n\n.top5-content {\n  margin-left: 10px;\n  margin-right: 10px;\n  border-width: 0px 1px 1px 1px;\n  border-style: solid;\n  border-color: #e1e1e1;\n}\n\n.top5-cat {\n  font-size: 0.9em;\n  font-weight: 500;\n}\n\n.top5-rightmonth {\n  font-size: 0.7em;\n  color: #4b80f0;\n  text-align: right;\n}\n\n.top5-leftmonth {\n  font-size: 0.7em;\n  color: #ec7b9c;\n}\n\n.top5-left, .top5-right {\n  font-size: 0.8em;\n  color: #444;\n}\n\n.top5-right {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZGVlbS1zdGF0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBRUksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUFKOztBQU1BO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFISjs7QUFNQTtFQUNJLHlCQUFBO0FBSEo7O0FBTUE7RUFDSSx5QkFBQTtBQUhKOztBQU1BO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtBQUhKOztBQU1BO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtBQUhKOztBQU9BO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FBSko7O0FBT0E7RUFDSSxXQUFBO0VBRUEsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFMSjs7QUFRQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFMSjs7QUFRQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFMSjs7QUFRQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBTEo7O0FBUUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFMSjs7QUFRQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQUxKOztBQVFBO0VBQ0EsaUJBQUE7QUFMQSIsImZpbGUiOiJyZWRlZW0tc3RhdHVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkIHtcbiAgICAtLWJvcmRlci1zdHlsZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmJveGVkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5pbnYge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICBsaW5lLWhlaWdodDoycHg7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xuICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICBjb2xvcjogIzNENUNGRiAhaW1wb3J0YW50O1xufVxuXG4uZHQge1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC41KTtcbiAgICBmb250LXNpemU6IC43ZW07XG59XG5cbi5hbW91bnQge1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICBsaW5lLWhlaWdodDoycHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNyk7XG59XG5cbi5ib251cy10aXRsZSB7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjYpO1xuICAgIGZvbnQtc2l6ZTogLjdlbTtcbn1cblxuLmJvbnVzLXRleHQge1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcbiAgICBmb250LXNpemU6IC43ZW07XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uYm9udXMtYm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG5cbi5yLW5hbWUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNyk7XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgIGNvbG9yOiAjM0Q1Q0ZGICFpbXBvcnRhbnQ7XG59XG5cbi5yLW5vIHtcbiAgICBmb250LXNpemU6IC43ZW07XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNyk7XG59XG5cbi5yLWRhdGUge1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC41KTtcbiAgICBmb250LXNpemU6IC43ZW07XG59XG5cbi5yLXBvaW4ge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGxhdmVuZGVyO1xuICAgIGZvbnQtc2l6ZTogLjdlbTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNSk7XG4gICAgLy8gcGFkZGluZzo0cHg7XG4gICAgLy8gYm9yZGVyLXJhZGl1czozcHg7XG5cbn1cblxuLmNla3Jlc2kge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nLWxlZnQ6NXB4O1xuICAgIGNvbG9yOiAjM0Q1Q0ZGICFpbXBvcnRhbnQ7XG59XG5cbi5sYXBvciB7XG4gICAgY29sb3I6ICNhZDAwMjMgIWltcG9ydGFudDtcbn1cblxuLnNlbGVzYWkge1xuICAgIGNvbG9yOiAjMWI2YzAwICFpbXBvcnRhbnQ7XG59XG5cbi5zdGF0dXNlcyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICM3ZDkzZmYgIWltcG9ydGFudDtcbn1cblxuLnN0YXR1c2VzLXNlbGVzYWkgeyBcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzAwYmI1MSAhaW1wb3J0YW50O1xufVxuXG5cbi50b3A1LWhlYWQge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNENUNGRjtcbn1cblxuLnRvcDUtdGl0bGUge1xuICAgIGNvbG9yOiNGRkY7XG4gICAgXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IC45ZW07XG59XG5cbi50b3A1LWNvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBib3JkZXItd2lkdGg6IDBweCAxcHggMXB4IDFweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogI2UxZTFlMTtcbn1cblxuLnRvcDUtY2F0IHtcbiAgICBmb250LXNpemU6IC45ZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRvcDUtcmlnaHRtb250aCB7XG4gICAgZm9udC1zaXplOiAuN2VtO1xuICAgIGNvbG9yOiAjNGI4MGYwO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udG9wNS1sZWZ0bW9udGgge1xuICAgIGZvbnQtc2l6ZTogLjdlbTtcbiAgICBjb2xvcjogI2VjN2I5Yztcbn1cblxuLnRvcDUtbGVmdCwgLnRvcDUtcmlnaHQge1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICBjb2xvcjogIzQ0NDtcbn1cblxuLnRvcDUtcmlnaHQge1xudGV4dC1hbGlnbjogcmlnaHQ7XG59Il19 */";

/***/ }),

/***/ 3092:
/*!******************************************************************!*\
  !*** ./src/app/redeem-status/redeem-status.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"unilever\" class=\"head\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" color=\"light\" icon=\"arrow-back-outline\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Status Redeem\n    </ion-title>\n     <ion-buttons slot=\"end\">\n      <ion-button (click)=\"refresh()\">\n        <ion-icon slot=\"icon-only\" name=\"refresh-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar color=\"unilever\" class=\"head\">\n    <ion-segment [(ngModel)]=\"segmen\">\n      <ion-segment-button value=\"gift\">\n        <ion-label>Gift</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"ewallet\">\n        <ion-label>E-Wallet</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div [ngSwitch]=\"segmen\"> \n    <div *ngSwitchCase=\"'gift'\">\n      <ion-toolbar class=\"head\" mode=\"md\">\n        <ion-segment [(ngModel)]=\"segmengift\">\n          <ion-segment-button value=\"diproses\">\n            <ion-label>Diproses</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"dikirim\">\n            <ion-label>Dikirim</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"diterima\">\n            <ion-label>Diterima</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-toolbar>\n      <div [ngSwitch]=\"segmengift\">\n        <div *ngSwitchCase=\"'diproses'\">\n          <div *ngIf=\"!diproses\">\n            <img src=\"../../assets/imgs/loading.gif\"><br>\n            <img src=\"../../assets/imgs/loading.gif\">\n          </div>\n          <div *ngIf=\"diproses\">\n            <ion-grid  *ngFor=\"let r of diproses\" class=\"boxed\">\n              <ion-row>\n                <ion-col>\n                  <div class=\"r-name\">{{r.gift_name}}</div>\n                  <div class=\"r-date\">{{r.redeem_date|date}}</div>\n                </ion-col>\n                <ion-col>\n                  <div class=\"r-no\">#{{r.redeem_no|uppercase}}</div>\n                  <div class=\"r-poin\">\n                    Poin Terpakai: <span style=\"font-weight: 500; color: rgba(0,0,0,.7);\">{{r.point|number}}</span> Poin\n                  </div>\n                </ion-col>\n              </ion-row>\n    \n              <ion-row class=\"bonus-box\">\n                <ion-col class=\"bonus-title\">\n                  Status Pengiriman\n                </ion-col>\n                <ion-col class=\"bonus-text\">\n                  <span class=\"statuses-selesai\" *ngIf=\"r.status_pengiriman == 'SELESAI'\">{{r.status_pengiriman}}</span>\n                  <span class=\"statuses\" *ngIf=\"r.status_pengiriman != 'SELESAI'\">{{r.status_pengiriman}}</span>\n                </ion-col>\n              </ion-row>\n    \n            </ion-grid>\n          </div>\n        </div>\n    \n        <div *ngSwitchCase=\"'dikirim'\">\n          <div *ngIf=\"!dikirim\">\n            <img src=\"../../assets/imgs/loading.gif\"><br>\n            <img src=\"../../assets/imgs/loading.gif\">\n          </div>\n          <div *ngIf=\"dikirim\">\n            <ion-grid  *ngFor=\"let r of dikirim\" class=\"boxed\">\n              <ion-row>\n                <ion-col>\n                  <div class=\"r-name\">{{r.gift_name}}</div>\n                  <div class=\"r-date\">{{r.redeem_date|date}}</div>\n                </ion-col>\n                <ion-col>\n                  <div class=\"r-no\">#{{r.redeem_no|uppercase}}</div>\n                  <div class=\"r-poin\">\n                    Poin Terpakai: <span style=\"font-weight: 500; color: rgba(0,0,0,.7);\">{{r.point|number}}</span> Poin\n                  </div>\n                </ion-col>\n              </ion-row>\n    \n              <ion-row class=\"bonus-box\">\n                <ion-col class=\"bonus-title\">\n                  Status Pengiriman\n                </ion-col>\n                <ion-col class=\"bonus-text\">\n                  <span class=\"statuses-selesai\" *ngIf=\"r.status_pengiriman == 'SELESAI'\">{{r.status_pengiriman}}</span>\n                  <span class=\"statuses\" *ngIf=\"r.status_pengiriman != 'SELESAI'\">{{r.status_pengiriman}}</span>\n                </ion-col>\n              </ion-row>\n              \n            </ion-grid>\n          </div>\n        </div>\n    \n        <div *ngSwitchCase=\"'diterima'\">\n          <div *ngIf=\"!diterima\">\n            <img src=\"../../assets/imgs/loading.gif\"><br>\n            <img src=\"../../assets/imgs/loading.gif\">\n          </div>\n          <div *ngIf=\"diterima\">\n            <ion-grid  *ngFor=\"let r of diterima\" class=\"boxed\">\n              <ion-row>\n                <ion-col>\n                  <div class=\"r-name\">{{r.gift_name}}</div>\n                  <div class=\"r-date\">{{r.redeem_date|date}}</div>\n                </ion-col>\n                <ion-col>\n                  <div class=\"r-no\">#{{r.redeem_no|uppercase}}</div>\n                  <div class=\"r-poin\">\n                    Poin Terpakai: <span style=\"font-weight: 500; color: rgba(0,0,0,.7);\">{{r.point|number}}</span> Poin\n                  </div>\n                </ion-col>\n              </ion-row>\n    \n              <ion-row class=\"bonus-box\">\n                <ion-col class=\"bonus-title\">\n                  Status Pengiriman\n                </ion-col>\n                <ion-col class=\"bonus-text\">\n                  <span class=\"statuses-selesai\" *ngIf=\"r.status_pengiriman == 'SELESAI'\">{{r.status_pengiriman}}</span>\n                  <span class=\"statuses\" *ngIf=\"r.status_pengiriman != 'SELESAI'\">{{r.status_pengiriman}}</span>\n                </ion-col>\n              </ion-row>\n              \n            </ion-grid>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngSwitchCase=\"'ewallet'\">\n      <div *ngIf=\"!redeemEwallet\">\n        <img src=\"../../assets/imgs/loading.gif\"><br>\n        <img src=\"../../assets/imgs/loading.gif\">\n      </div>\n      <div *ngIf=\"redeemEwallet\">\n        <ion-list>\n          <ion-item *ngFor=\"let e of redeemEwallet\" button (click)=\"toEwalletList(e)\">\n            <ion-avatar slot=\"start\">\n              <img *ngIf=\"e.code == 'P02'\" src=\"../../assets/imgs/ewallet/logo-gopay.png\">\n              <img *ngIf=\"e.code == 'P01'\" src=\"../../assets/imgs/ewallet/logo-ovo.png\">\n              <img *ngIf=\"e.code == 'P05'\" src=\"../../assets/imgs/ewallet/logo-shopee.png\">\n              <img *ngIf=\"e.code == 'P03'\" src=\"../../assets/imgs/ewallet/logo-dana.png\">\n              <img *ngIf=\"e.code == 'P04'\" src=\"../../assets/imgs/ewallet/logo-linkaja.png\">\n            </ion-avatar>\n            <ion-label>\n              <span *ngIf=\"e.code == 'P02'\" style=\"color: #08a413;\">GoPay</span>\n              <span *ngIf=\"e.code == 'P01'\" style=\"color: #49328f;\">OVO Cash</span>\n              <span *ngIf=\"e.code == 'P05'\" style=\"color: #e84a2b;\">ShopeePay</span>\n              <span *ngIf=\"e.code == 'P03'\" style=\"color: #0e89e1;\">Dana</span>\n              <span *ngIf=\"e.code == 'P04'\" style=\"color: #e02428;\">LinkAja</span>\n            </ion-label>\n            <ion-note style=\"color:#444\">\n              Rp. {{e.Amount|number}}\n            </ion-note>\n          </ion-item>\n        </ion-list>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_redeem-status_redeem-status_module_ts.js.map