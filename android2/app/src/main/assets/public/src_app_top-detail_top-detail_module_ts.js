"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_top-detail_top-detail_module_ts"],{

/***/ 5087:
/*!*********************************************************!*\
  !*** ./src/app/top-detail/top-detail-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopDetailPageRoutingModule": () => (/* binding */ TopDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _top_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top-detail.page */ 6755);




const routes = [
    {
        path: '',
        component: _top_detail_page__WEBPACK_IMPORTED_MODULE_0__.TopDetailPage
    }
];
let TopDetailPageRoutingModule = class TopDetailPageRoutingModule {
};
TopDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TopDetailPageRoutingModule);



/***/ }),

/***/ 6168:
/*!*************************************************!*\
  !*** ./src/app/top-detail/top-detail.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopDetailPageModule": () => (/* binding */ TopDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _top_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top-detail-routing.module */ 5087);
/* harmony import */ var _top_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-detail.page */ 6755);







let TopDetailPageModule = class TopDetailPageModule {
};
TopDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _top_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.TopDetailPageRoutingModule
        ],
        declarations: [_top_detail_page__WEBPACK_IMPORTED_MODULE_1__.TopDetailPage]
    })
], TopDetailPageModule);



/***/ }),

/***/ 6755:
/*!***********************************************!*\
  !*** ./src/app/top-detail/top-detail.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopDetailPage": () => (/* binding */ TopDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _top_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top-detail.page.html?ngResource */ 9785);
/* harmony import */ var _top_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-detail.page.scss?ngResource */ 6015);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dolphin.service */ 2171);







let TopDetailPage = class TopDetailPage {
    constructor(dolphinService, router, loadingController, navCtrl) {
        this.dolphinService = dolphinService;
        this.router = router;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.top5 = [];
        this.pageTitle = '';
        this.details = [];
        const currentState = this.router.getCurrentNavigation();
        this.item = currentState.extras.state.item;
        this.type = currentState.extras.state.type;
    }
    ngOnInit() {
        if (this.item && this.type) {
            this.showLoading('Memuat data ' + this.type + '...');
            let dif = this.item.BRAND;
            console.log('cekdata', this.item);
            if (this.type == 'Kategori')
                dif = this.item.CATEGORY;
            this.pageTitle = dif;
            this.dolphinService.gettop5detail({ item: dif }, this.type).subscribe(data => {
                console.log('cekdatabrand', data);
                if (data) {
                    // let localData = data.retdata;
                    // localData = localData.map( i => {
                    //   i.sku = i['KODE SKU'].trim();
                    //   i.totalbelanja = i['TOTAL BELANJA'].trim();
                    //   i.fop = i['TOTAL FOP'];
                    //   return i;
                    // });
                    // console.log('localData', localData)
                    this.details = data.retdata;
                }
                else {
                    this.details = [];
                }
                this.loadingController.dismiss();
            });
        }
        else {
            this.navCtrl.pop();
        }
    }
    showLoading(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: msg,
                backdropDismiss: false
            });
            yield loading.present();
        });
    }
};
TopDetailPage.ctorParameters = () => [
    { type: _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__.DolphinService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
TopDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-top-detail',
        template: _top_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_top_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TopDetailPage);



/***/ }),

/***/ 6015:
/*!************************************************************!*\
  !*** ./src/app/top-detail/top-detail.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".boxed {\n  display: block;\n  border-bottom: 1px solid #e0e0e0;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.r-name {\n  display: block;\n  font-size: 0.8em;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: 600;\n  color: #3D5CFF !important;\n}\n\n.r-no {\n  font-size: 0.7em;\n  text-align: right;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.r-date {\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 0.7em;\n}\n\n.r-poin {\n  font-size: 0.7em;\n  float: right;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.bonus-title {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.7em;\n}\n\n.bonus-text {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.7em;\n  text-align: right;\n  font-weight: 500;\n}\n\n.bonus-box {\n  background-color: #f5f6ff;\n  border-radius: 5px;\n  margin-bottom: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6InRvcC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveGVkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5yLW5hbWUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNyk7XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgIGNvbG9yOiAjM0Q1Q0ZGICFpbXBvcnRhbnQ7XG59XG5cbi5yLW5vIHtcbiAgICBmb250LXNpemU6IC43ZW07XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNyk7XG59XG5cbi5yLWRhdGUge1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC41KTtcbiAgICBmb250LXNpemU6IC43ZW07XG59XG5cbi5yLXBvaW4ge1xuICAgIGZvbnQtc2l6ZTogLjdlbTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNSk7XG59XG5cbi5ib251cy10aXRsZSB7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjYpO1xuICAgIGZvbnQtc2l6ZTogLjdlbTtcbn1cblxuLmJvbnVzLXRleHQge1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcbiAgICBmb250LXNpemU6IC43ZW07XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmJvbnVzLWJveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xufSJdfQ== */";

/***/ }),

/***/ 9785:
/*!************************************************************!*\
  !*** ./src/app/top-detail/top-detail.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>  \n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"arrow-back-outline\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{pageTitle}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!details\">\n    <img src=\"../../assets/imgs/loading.gif\"><br>\n    <img src=\"../../assets/imgs/loading.gif\">\n  </div>\n  <ion-grid  *ngFor=\"let d of details\" class=\"boxed\">\n    <ion-row>\n      <ion-col>\n        <div *ngIf=\"type=='Brand'\" class=\"r-name\">{{d.NAMA_SKU}}</div>\n        <div *ngIf=\"type=='Kategori'\" class=\"r-name\">{{d.NAMA_SKU}}</div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"bonus-box\">\n      <ion-col class=\"bonus-title\">\n        KODE SKU\n      </ion-col>\n      <ion-col  class=\"bonus-text\">\n        {{d.KODE_SKU}}\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"bonus-box\">\n      <ion-col class=\"bonus-title\">\n        TOTAL BELANJA\n      </ion-col>\n      <ion-col  class=\"bonus-text\">\n        Rp. {{d.TOTAL_BELANJA|number}}\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"bonus-box\">\n      <ion-col class=\"bonus-title\">\n        TOTAL FOP\n      </ion-col>\n      <ion-col  class=\"bonus-text\">\n        {{d.TOTAL_FOP|number}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_top-detail_top-detail_module_ts.js.map