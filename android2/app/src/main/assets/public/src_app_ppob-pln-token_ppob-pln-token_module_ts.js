"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_ppob-pln-token_ppob-pln-token_module_ts"],{

/***/ 2991:
/*!*****************************************************************!*\
  !*** ./src/app/ppob-pln-token/ppob-pln-token-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PpobPlnTokenPageRoutingModule": () => (/* binding */ PpobPlnTokenPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ppob_pln_token_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ppob-pln-token.page */ 7630);




const routes = [
    {
        path: '',
        component: _ppob_pln_token_page__WEBPACK_IMPORTED_MODULE_0__.PpobPlnTokenPage
    }
];
let PpobPlnTokenPageRoutingModule = class PpobPlnTokenPageRoutingModule {
};
PpobPlnTokenPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PpobPlnTokenPageRoutingModule);



/***/ }),

/***/ 8304:
/*!*********************************************************!*\
  !*** ./src/app/ppob-pln-token/ppob-pln-token.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PpobPlnTokenPageModule": () => (/* binding */ PpobPlnTokenPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ppob_pln_token_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ppob-pln-token-routing.module */ 2991);
/* harmony import */ var _ppob_pln_token_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ppob-pln-token.page */ 7630);







let PpobPlnTokenPageModule = class PpobPlnTokenPageModule {
};
PpobPlnTokenPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ppob_pln_token_routing_module__WEBPACK_IMPORTED_MODULE_0__.PpobPlnTokenPageRoutingModule
        ],
        declarations: [_ppob_pln_token_page__WEBPACK_IMPORTED_MODULE_1__.PpobPlnTokenPage]
    })
], PpobPlnTokenPageModule);



/***/ }),

/***/ 7630:
/*!*******************************************************!*\
  !*** ./src/app/ppob-pln-token/ppob-pln-token.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PpobPlnTokenPage": () => (/* binding */ PpobPlnTokenPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ppob_pln_token_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ppob-pln-token.page.html?ngResource */ 4731);
/* harmony import */ var _ppob_pln_token_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ppob-pln-token.page.scss?ngResource */ 3758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dolphin.service */ 2171);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);







let PpobPlnTokenPage = class PpobPlnTokenPage {
    constructor(dolphinService, loadingController, alertController, router) {
        this.dolphinService = dolphinService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.router = router;
        this.pageStat = 'inquiry';
        this.is_loginsecret = false;
        this.dolphinService.getpoint().subscribe(data => {
            // console.log('BALANCE',data)
            this.balance = data;
        });
        this.dolphinService.ppobdenom().subscribe(data => {
            this.denom = data;
            // console.log('DENOM',this.denom)
        });
    }
    ngOnInit() { }
    onChange(e) {
        // console.log(e.detail.value)
        let ev = e.detail.value;
        this.poinRedeem = ev;
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
    showAlert(title, msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                message: msg,
                buttons: [{ text: 'Ok' }]
            });
            yield alert.present();
        });
    }
    check() {
        this.showLoading('Memeriksa ID pelanggan Listrik PLN...');
        this.dolphinService.ppob_pln_prepaid_inquiry(this.idPelanggan, this.poinRedeem.amount).subscribe(data => {
            // console.log('ppob_pln_prepaid_inquiry', data)
            if (data.retdata.status) {
                if (data.retdata.data.status_desc === 'Success') {
                    this.ppobDetailsNama = data.retdata.data.inquiry_details.subscriber_name;
                    this.pageStat = 'payment';
                }
                else {
                    this.showAlert('Oops..', data.retdata.data.status_desc);
                }
            }
            else {
                this.showAlert('Oops..', data.retdata.message);
            }
            this.loadingController.dismiss();
        });
    }
    pay() {
        this.showLoading('Memproses pembelian Token Listrik PLN...');
        this.pageStat = 'payment';
        this.dolphinService.ppobplnpayment(this.idPelanggan, this.poinRedeem.redeem_code).subscribe((data) => {
            // console.log('ppobplnpayment', data)
            if (data.status == 'success') {
                this.detailPayment = data.retdata.data;
                this.pageStat = 'paid';
            }
            else {
                this.showAlert('Oops..', data.message);
            }
            this.loadingController.dismiss();
        });
    }
    checkstatus() {
        this.showLoading('Mengambil data...');
        this.dolphinService.ppobcheck(this.detailPayment.trx_ref).subscribe((data) => {
            // console.log('PPOB STATUS', data);
            if (data.status == 'success') {
                this.detailPayment = data.retdata.data;
                if (this.detailPayment.ref) {
                    let tokenData = this.detailPayment.ref.split('/');
                    this.token = {
                        "token_num": tokenData[0],
                        "token_nama": tokenData[1],
                        "token_tarif": tokenData[2],
                        "token_daya": tokenData[3],
                        "token_kwh": tokenData[4],
                    };
                }
            }
            else {
                this.showAlert('Oops..', data.message);
            }
            this.loadingController.dismiss();
        });
    }
    history() {
        this.router.navigate(['ppob-pln-token-history']);
    }
    cancel() {
    }
    close() {
    }
};
PpobPlnTokenPage.ctorParameters = () => [
    { type: _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__.DolphinService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
PpobPlnTokenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-ppob-pln-token',
        template: _ppob_pln_token_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_ppob_pln_token_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PpobPlnTokenPage);



/***/ }),

/***/ 3758:
/*!********************************************************************!*\
  !*** ./src/app/ppob-pln-token/ppob-pln-token.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".input-group {\n  background: #fff;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 15px;\n  border: 1px solid #ccc;\n}\n\n.disclaimer {\n  font-size: 0.8em;\n  background-color: #f1f1f1;\n  padding: 10px;\n  border-radius: 10px;\n}\n\n.disclaimer-title {\n  font-weight: 700;\n}\n\n.bar-top {\n  margin: 7px 10px 3px 10px;\n  border-radius: 5px;\n  font-size: 0.9em;\n}\n\n.bartop-title {\n  width: 100%;\n  text-align: center;\n  font-weight: 600;\n  font-size: 0.9em;\n  color: #3D5CFF;\n}\n\n.bartop-sub {\n  width: 100%;\n  text-align: center;\n  font-weight: bold;\n  font-size: 1.2em;\n  color: #444444;\n}\n\n.item-name {\n  text-align: center;\n  font-weight: 600;\n  vertical-align: middle;\n  border-top: 2px solid #f1f1f1;\n  background-color: #f1f1f1;\n  color: #555;\n  font-size: 1em;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n}\n\n.item-footer {\n  vertical-align: middle;\n  text-align: center;\n  border-top: 2px solid #f1f1f1;\n  background-color: #f1f1f1;\n  color: #555;\n  font-size: 0.8em;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n}\n\n.item-left {\n  border-left: 2px solid #f1f1f1;\n  border-right: 1px solid #f1f1f1;\n}\n\n.item-right {\n  border-right: 2px solid #f1f1f1;\n  border-left: 1px solid #f1f1f1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBwb2ItcGxuLXRva2VuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQWEsZ0JBQUE7RUFDYiw4QkFBQTtFQUNBLCtCQUFBO0FBRUo7O0FBQUE7RUFDSSw4QkFBQTtFQUNBLCtCQUFBO0FBR0o7O0FBQUE7RUFDSSwrQkFBQTtFQUNBLDhCQUFBO0FBR0oiLCJmaWxlIjoicHBvYi1wbG4tdG9rZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5kaXNjbGFpbWVyIHtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5kaXNjbGFpbWVyLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYmFyLXRvcCB7XG4gICAgbWFyZ2luOiA3cHggMTBweCAzcHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAuOWVtO1xufVxuXG4uYmFydG9wLXRpdGxlIHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICBjb2xvcjogIzNENUNGRjtcbn1cblxuLmJhcnRvcC1zdWIge1xuICAgIHdpZHRoOjEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgY29sb3I6ICM0NDQ0NDQ7XG59XG5cbi5pdGVtLW5hbWUge1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgI2YxZjFmMTsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjFmMWYxOyBcbiAgICBjb2xvcjogIzU1NTsgXG4gICAgZm9udC1zaXplOjFlbTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcbn1cblxuLml0ZW0tZm9vdGVyIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZjFmMWYxOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjE7IFxuICAgIGNvbG9yOiAjNTU1OyBmb250LXNpemU6LjhlbTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDdweDtcbn1cbi5pdGVtLWxlZnQge1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2YxZjFmMTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjFmMWYxO1xufVxuXG4uaXRlbS1yaWdodCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2YxZjFmMTtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmMWYxZjE7XG59Il19 */";

/***/ }),

/***/ 4731:
/*!********************************************************************!*\
  !*** ./src/app/ppob-pln-token/ppob-pln-token.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"unilever\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"arrow-back-outline\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>PLN Prabayar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div *ngIf=\"pageStat == 'inquiry'\"  class=\"ion-padding\">\n    <ion-list>\n      <div class=\"input-group\">\n        <ion-item lines=\"none\">\n          <!-- <ion-label position=\"floating\">No. Meter / ID Pel.</ion-label> -->\n          <ion-input inputmode=\"num\" [(ngModel)]=\"idPelanggan\" placeholder=\"No. Meter / ID Pelanggan\" autocomplete=\"off\" autofocus=\"true\" clear-input=\"true\"></ion-input>\n        </ion-item>\n      </div>\n      <div class=\"input-group\">\n        <ion-item lines=\"none\">\n          <ion-label>Pilih Nominal</ion-label>\n          <ion-select [(ngModel)]=\"nominal\" (ionChange)=\"onChange($event)\" placeholder=\"Nominal\" okText=\"Pilih\">\n            <ion-select-option *ngFor=\"let d of denom\" [value]=\"d\">{{d.gift_desc}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </div>\n    </ion-list>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div class=\"disclaimer\">\n            <span class=\"disclaimer-title\">PERHATIAN</span>\n            <ul>\n              <li style=\"font-weight: bold;\">Token yang sudah dibeli atau ditukar tidak dapat dibatalkan atau dikembalikan.</li>\n              <li>Redeem Listrik PLN tidak tersedia pada jam Cut Off (23:00 - 01:00).</li>\n              <li>Proses verifikasi redeem maksimal 2x24 jam hari kerja.</li>\n            </ul>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-button type=\"button\" color=\"unilever\" expand=\"block\" [disabled]=\"!idPelanggan || !poinRedeem\" (click)=\"check()\">Lanjutkan Redeem</ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-button type=\"button\" color=\"unilever\" expand=\"block\" fill=\"outline\" (click)=\"history()\">Lihat History Pembelian</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div *ngIf=\"pageStat == 'payment'\">\n    <ion-list>\n      <ion-item>\n        <ion-label>\n          <p class=\"list-title\">Item</p>\n          <h3>{{poinRedeem.gift_name}}</h3>        \n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <p class=\"list-title\">Deskripsi</p>\n          <h3>{{poinRedeem.gift_note}}</h3>        \n        </ion-label>\n      </ion-item>\n      <ion-item>        \n        <ion-label>\n          <p class=\"list-title\">No. Meter / ID Pelanggan</p>\n          <h3><strong>{{idPelanggan}}</strong></h3>        \n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <p class=\"list-title\">Nama</p>\n          <h3><strong>{{ppobDetailsNama}}</strong></h3>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <p class=\"list-title\">Nominal</p>\n          <h3>Rp. {{poinRedeem.amount | number}}</h3>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n    <div class=\"bar-top\" *ngIf=\"balance\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\" class=\"item-name\">\n            {{poinRedeem.gift_name}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6 class=\"item-left\">\n              <div class=\"bartop-title\">Poin Untuk Redeem</div>\n              <div class=\"bartop-sub\">{{poinRedeem.point}}</div>\n          </ion-col>\n          <ion-col col-6 class=\"item-right\">\n              <div class=\"bartop-title\">Poin Anda</div>\n              <div class=\"bartop-sub\">{{balance.remain_point_new|number}}</div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" class=\"item-footer\">\n            <span *ngIf=\"balance.remain_point_new >= poinRedeem.point\">Poin Anda cukup untuk melakukan redeem</span>\n            <span *ngIf=\"balance.remain_point_new < poinRedeem.point\">oops.. poin Anda belum cukup, kurang {{poinRedeem.point - balance.remain_point_new | number}} poin lagi.<br>Yuk belanja terus..</span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div class=\"ion-padding\">\n      <div class=\"disclaimer\">\n        <span class=\"disclaimer-title\">Perhatian</span>\n        <ol>\n          <li style=\"font-weight: bold;\">Token yang sudah dibeli atau ditukar tidak dapat dibatalkan atau dikembalikan.</li>\n          <li style=\"font-weight: bold;\">Periksa kembali Nama yang muncul apakah sudah sesuai dengan ID Pelanggan yang Anda input.</li>\n          <li>Redeem Listrik PLN tidak tersedia pada jam Cut Off (23:00 - 01:00 WIB).</li>\n          <li>Proses verifikasi redeem maksimal 2x24 jam hari kerja.</li>      \n        </ol>        \n      </div>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-button expand=\"block\" fill=\"outline\" color=\"unilever\" (click)=\"cancel()\">Cancel</ion-button>\n          </ion-col>\n          <ion-col>\n            <!-- loginsecret -->\n            <div *ngIf=\"!is_loginsecret\">\n              <ion-button expand=\"block\" color=\"unilever\" [disabled]=\"balance.remain_point_new < poinRedeem.point\" (click)=\"pay()\">Beli</ion-button>\n            </div>\n            <div *ngIf=\"is_loginsecret\">\n              <ion-button expand=\"block\" color=\"unilever\" disabled>Beli</ion-button>\n            </div>\n            <!-- loginsecret -->\n            \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n    </div>\n  </div>\n\n  <div *ngIf=\"pageStat == 'paid'\">\n    <ion-list>\n      <ion-item>\n        <ion-label>\n          <p class=\"list-title\">Item</p>\n          <h3>{{poinRedeem.gift_name}}</h3>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <p class=\"list-title\">No. Meter / ID Pelanggan</p>\n          <h3>{{idPelanggan}}</h3>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <p class=\"list-title\">Nominal</p>\n          <h3>Rp. {{poinRedeem.amount | number}}</h3>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <p class=\"list-title\">Status Pembelian</p>\n          <h3>{{detailPayment.response}}</h3>\n        </ion-label>\n      </ion-item>\n      <ion-item *ngIf=\"!detailPayment.ref\">\n        <ion-label>\n          <p class=\"list-title\">Respon Operator</p>\n          <h3>{{detailPayment.message}}</h3>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          <p class=\"list-title\">Status Operator</p>\n          <h3>{{detailPayment.status}}</h3>\n        </ion-label>\n      </ion-item>\n      <div *ngIf=\"token\">\n        <ion-item>\n          <ion-label>\n            <p class=\"list-title\">Nama</p>\n            <h3>{{token.token_nama}}</h3>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <p class=\"list-title\">Tarif</p>\n            <h3>{{token.token_tarif}}</h3>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <p class=\"list-title\">Daya</p>\n            <h3>{{token.token_daya}}</h3>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <p class=\"list-title\">Token</p>\n            <h3><strong>{{token.token_num}}</strong></h3>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <p class=\"list-title\">Jumlah KWH</p>\n            <h3>{{token.token_kwh}}</h3>\n          </ion-label>\n        </ion-item>\n      </div>\n    </ion-list>\n    <div padding>\n      <ion-button expand=\"block\" color=\"unilever\" (click)=\"checkstatus()\">Refresh Status Pembelian</ion-button>\n      <ion-button expand=\"block\" fill=\"outline\" color=\"unilever\" (click)=\"close()\">Kembali Ke Halaman Depan</ion-button>\n    </div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_ppob-pln-token_ppob-pln-token_module_ts.js.map