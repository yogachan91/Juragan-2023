"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_ganti-no_ganti-no_module_ts"],{

/***/ 5416:
/*!*****************************************************!*\
  !*** ./src/app/ganti-no/ganti-no-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GantiNoPageRoutingModule": () => (/* binding */ GantiNoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ganti_no_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ganti-no.page */ 573);




const routes = [
    {
        path: '',
        component: _ganti_no_page__WEBPACK_IMPORTED_MODULE_0__.GantiNoPage
    }
];
let GantiNoPageRoutingModule = class GantiNoPageRoutingModule {
};
GantiNoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GantiNoPageRoutingModule);



/***/ }),

/***/ 8309:
/*!*********************************************!*\
  !*** ./src/app/ganti-no/ganti-no.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GantiNoPageModule": () => (/* binding */ GantiNoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ganti_no_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ganti-no-routing.module */ 5416);
/* harmony import */ var _ganti_no_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ganti-no.page */ 573);







let GantiNoPageModule = class GantiNoPageModule {
};
GantiNoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ganti_no_routing_module__WEBPACK_IMPORTED_MODULE_0__.GantiNoPageRoutingModule
        ],
        declarations: [_ganti_no_page__WEBPACK_IMPORTED_MODULE_1__.GantiNoPage]
    })
], GantiNoPageModule);



/***/ }),

/***/ 573:
/*!*******************************************!*\
  !*** ./src/app/ganti-no/ganti-no.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GantiNoPage": () => (/* binding */ GantiNoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ganti_no_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ganti-no.page.html?ngResource */ 2143);
/* harmony import */ var _ganti_no_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ganti-no.page.scss?ngResource */ 9235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dolphin.service */ 2171);






let GantiNoPage = class GantiNoPage {
    constructor(dolphinService, alertController, navController) {
        this.dolphinService = dolphinService;
        this.alertController = alertController;
        this.navController = navController;
    }
    ngOnInit() {
    }
    sendEmail() {
        this.dolphinService.getGantiNoHape().subscribe(data => {
            if (data.status == 'success') {
                this.showAlert();
            }
        });
    }
    showAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Cek Email Anda',
                message: 'Kami telah mengirimkan email petunjuk penggantian No. HP, silahkan cek dan ikuti langkah-langkah pada email Anda.',
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            // log auth
                            this.dolphinService.logs_auth('email', 'ganti_no').subscribe(data => { });
                            this.navController.pop();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
GantiNoPage.ctorParameters = () => [
    { type: _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__.DolphinService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
GantiNoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-ganti-no',
        template: _ganti_no_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_ganti_no_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GantiNoPage);



/***/ }),

/***/ 9235:
/*!********************************************************!*\
  !*** ./src/app/ganti-no/ganti-no.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW50aS1uby5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 2143:
/*!********************************************************!*\
  !*** ./src/app/ganti-no/ganti-no.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"unilever\" class=\"head\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" color=\"light\" icon=\"arrow-back-outline\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Ganti No. HP\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <p>\n    Untuk mengganti nomor HP yang terhubung dengan akun Anda, kami akan mengirimkan email berisi tautan khusus ke email Anda.\n  </p>\n  <p>\n    Ikuti petunjuk pada halaman penggantian nomor HP yang akan kami kirimkan, pada halaman itu Anda diharuskan mengisi kode OTP yang dikirimkan ke masing-masing nomor lama dan nomor baru Anda.\n  </p>\n  <p>\n    Klik tombol dibawah bila Anda setuju.\n  </p>\n  <ion-button color=\"unilever\" expand=\"block\" (click)=\"sendEmail()\">\n    Ya, kirimkan email petunjuk\n  </ion-button>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_ganti-no_ganti-no_module_ts.js.map