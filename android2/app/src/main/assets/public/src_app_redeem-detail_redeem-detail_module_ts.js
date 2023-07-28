"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_redeem-detail_redeem-detail_module_ts"],{

/***/ 3083:
/*!***************************************************************!*\
  !*** ./src/app/redeem-detail/redeem-detail-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedeemDetailPageRoutingModule": () => (/* binding */ RedeemDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _redeem_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redeem-detail.page */ 1995);




const routes = [
    {
        path: '',
        component: _redeem_detail_page__WEBPACK_IMPORTED_MODULE_0__.RedeemDetailPage
    }
];
let RedeemDetailPageRoutingModule = class RedeemDetailPageRoutingModule {
};
RedeemDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RedeemDetailPageRoutingModule);



/***/ }),

/***/ 6114:
/*!*******************************************************!*\
  !*** ./src/app/redeem-detail/redeem-detail.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedeemDetailPageModule": () => (/* binding */ RedeemDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _redeem_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redeem-detail-routing.module */ 3083);
/* harmony import */ var _redeem_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redeem-detail.page */ 1995);







let RedeemDetailPageModule = class RedeemDetailPageModule {
};
RedeemDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _redeem_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.RedeemDetailPageRoutingModule
        ],
        declarations: [_redeem_detail_page__WEBPACK_IMPORTED_MODULE_1__.RedeemDetailPage]
    })
], RedeemDetailPageModule);



/***/ }),

/***/ 1995:
/*!*****************************************************!*\
  !*** ./src/app/redeem-detail/redeem-detail.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedeemDetailPage": () => (/* binding */ RedeemDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _redeem_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redeem-detail.page.html?ngResource */ 1625);
/* harmony import */ var _redeem_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redeem-detail.page.scss?ngResource */ 2367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dolphin.service */ 2171);







let RedeemDetailPage = class RedeemDetailPage {
    constructor(dolphinService, router, toastController, alertController) {
        this.dolphinService = dolphinService;
        this.router = router;
        this.toastController = toastController;
        this.alertController = alertController;
    }
    presentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                icon: 'information-circle',
                message: 'Memuat data poin Anda, harap menunggu..',
                color: 'dark'
            });
            toast.present();
        });
    }
    tukarpoint() {
        let navigationExtras = { state: { item: this.item, balance: this.balance } };
        this.dolphinService.cekdatapengiriman().subscribe(data => {
            if (data.lokasi != "" && data.lokasi != null && data.alamat_detail != "" && data.alamat_detail != null && data.image_lokasi != "" && data.image_lokasi != null && data.url != "" && data.url != null) {
                this.router.navigate(['redeem-now'], navigationExtras);
            }
            else {
                this.notif_periksa_pengiriman();
            }
            console.log('cekdatakirim', data);
        });
        // this.router.navigate(['redeem-now'], navigationExtras);
    }
    notif_periksa_pengiriman() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Hai Juragan, Mohon Lengkapi Alamat Pengiriman Anda',
                buttons: [
                    {
                        text: 'Lain Kali',
                        role: 'cancel',
                        handler: () => {
                            // this.handlerMessage = 'Alert canceled';
                        },
                    },
                    {
                        text: 'Ok',
                        role: 'confirm',
                        handler: () => {
                            let navigationExtras = { state: { page: 'pengiriman' } };
                            this.router.navigate(['profile'], navigationExtras);
                        },
                    },
                ],
            });
            yield alert.present();
            // const { role } = await alert.onDidDismiss();
            // this.roleMessage = `Dismissed with role: ${role}`;
        });
    }
    ngOnInit() {
        const currentState = this.router.getCurrentNavigation();
        this.item = currentState.extras.state.item;
        if (!this.item) {
            this.router.navigateByUrl('/', { replaceUrl: true });
        }
        this.presentToast();
        this.dolphinService.getpoint().subscribe(data => {
            // console.log('POIN-HOME', data);
            this.balance = data;
            this.toastController.dismiss();
            // this.userData.cluster = data.cluster
            // console.log('USERDATA-BARU', this.balance);
        });
    }
};
RedeemDetailPage.ctorParameters = () => [
    { type: _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__.DolphinService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
RedeemDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-redeem-detail',
        template: _redeem_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_redeem_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RedeemDetailPage);



/***/ }),

/***/ 2367:
/*!******************************************************************!*\
  !*** ./src/app/redeem-detail/redeem-detail.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".redeem-title {\n  font-size: 1.6rem;\n  font-weight: bold;\n}\n\n.redeem-header {\n  font-size: 1.4rem;\n  font-weight: bold;\n}\n\n.bar-top {\n  margin: 7px 10px 3px 10px;\n  border-radius: 5px;\n  font-size: 0.9em;\n}\n\n.bartop-title {\n  width: 100%;\n  text-align: center;\n  font-weight: 600;\n  font-size: 0.9em;\n  color: #3D5CFF;\n}\n\n.item-name {\n  text-align: center;\n  font-weight: 600;\n  vertical-align: middle;\n  border-top: 2px solid #f1f1f1;\n  background-color: #f1f1f1;\n  color: #555;\n  font-size: 1em;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n}\n\n.item-footer {\n  vertical-align: middle;\n  text-align: center;\n  border-top: 2px solid #f1f1f1;\n  background-color: #f1f1f1;\n  color: #555;\n  font-size: 0.6em;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n}\n\n.item-left {\n  border-left: 2px solid #f1f1f1;\n  border-right: 1px solid #f1f1f1;\n}\n\n.item-right {\n  border-right: 2px solid #f1f1f1;\n  border-left: 1px solid #f1f1f1;\n}\n\n.desk {\n  font-size: 0.9em;\n}\n\n.bartop-sub {\n  width: 100%;\n  text-align: center;\n  font-weight: bold;\n  font-size: 1.2em;\n  color: #444444;\n}\n\n.top-icons {\n  max-height: 30px;\n  text-align: left;\n}\n\n.grid {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZGVlbS1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQWEsZ0JBQUE7RUFDYiw4QkFBQTtFQUNBLCtCQUFBO0FBRUo7O0FBQUE7RUFDSSw4QkFBQTtFQUNBLCtCQUFBO0FBR0o7O0FBQUE7RUFDSSwrQkFBQTtFQUNBLDhCQUFBO0FBR0o7O0FBQUE7RUFDQyxnQkFBQTtBQUdEOztBQURBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFJSjs7QUFEQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFEQTtFQUNJLFlBQUE7QUFJSiIsImZpbGUiOiJyZWRlZW0tZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWRlZW0tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucmVkZWVtLWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5iYXItdG9wIHtcbiAgICBtYXJnaW46IDdweCAxMHB4IDNweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IC45ZW07XG59XG5cbi5iYXJ0b3AtdGl0bGUge1xuICAgIHdpZHRoOjEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAuOWVtO1xuICAgIGNvbG9yOiAjM0Q1Q0ZGO1xufVxuXG4uaXRlbS1uYW1lIHtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBmb250LXdlaWdodDo2MDA7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmMWYxZjE7IFxuICAgIGJhY2tncm91bmQtY29sb3I6I2YxZjFmMTsgXG4gICAgY29sb3I6ICM1NTU7IFxuICAgIGZvbnQtc2l6ZToxZW07XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XG59XG5cbi5pdGVtLWZvb3RlciB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgI2YxZjFmMTsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjFmMWYxOyBcbiAgICBjb2xvcjogIzU1NTsgZm9udC1zaXplOi42ZW07XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XG59XG4uaXRlbS1sZWZ0IHtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNmMWYxZjE7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YxZjFmMTtcbn1cblxuLml0ZW0tcmlnaHQge1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNmMWYxZjE7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjFmMWYxO1xufVxuXG4uZGVzayB7XG4gZm9udC1zaXplOiAuOWVtO1xufVxuLmJhcnRvcC1zdWIge1xuICAgIHdpZHRoOjEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgY29sb3I6ICM0NDQ0NDQ7XG59XG5cbi50b3AtaWNvbnMge1xuICAgIG1heC1oZWlnaHQ6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmdyaWQge1xuICAgIHBhZGRpbmc6IDBweDtcbn0iXX0= */";

/***/ }),

/***/ 1625:
/*!******************************************************************!*\
  !*** ./src/app/redeem-detail/redeem-detail.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>  \n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"arrow-back-outline\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Logam Mulia</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"item\">\n  <div style=\"text-align:center; margin:3% 20%;\">\n    <img src=\"https://admin.ulidolphin.com/assets/uploads/redeem/{{item.pict_location}}\" style=\"display:block; width:100%; border-radius: 10px;\">\n  </div>\n\n  <div class=\"bar-top\" *ngIf=\"balance\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\" class=\"item-name\">\n          {{item.gift_name}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\" class=\"item-left\">\n            <div class=\"bartop-title\">Poin Untuk Redeem</div>\n            <div class=\"bartop-sub\">{{item.point|number}}</div>\n        </ion-col>\n        <ion-col size=\"6\" class=\"item-right\">\n            <div class=\"bartop-title\">Poin Anda</div>\n            <div class=\"bartop-sub\">{{balance.remain_point_redeem|number}}</div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" class=\"item-footer\">\n          <span *ngIf=\"balance.remain_point_redeem >= item.point\">Poin Anda cukup untuk melakukan redeem</span>\n          <span *ngIf=\"balance.remain_point_redeem < item.point\">oops.. poin Anda belum cukup, kurang {{item.point-balance.remain_point_redeem | number}} poin lagi.<br>Yuk belanja terus..</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div class=\"desk ion-padding\">\n    <h4 class=\"redeem-header\">Syarat & Ketentuan:</h4>\n    <p [innerHTML]=\"item.gift_desc\"></p>\n    <hr>\n    <p [innerHTML]=\"item.gift_note\"></p>\n  </div>\n</ion-content>\n<ion-footer class=\"ion-no-border\" *ngIf=\"balance\">\n  <!-- <ion-button expand=\"full\" (click)=\"logout()\">Logout</ion-button> -->\n  <ion-button *ngIf=\"balance.remain_point_redeem >= item.point\" expand=\"block\"  (click)=\"tukarpoint()\" color=\"primary\">Redeem Sekarang</ion-button>\n  <ion-button *ngIf=\"balance.remain_point_redeem < item.point\" expand=\"block\" disabled=\"true\" color=\"primary\">Poin Belum Cukup</ion-button>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_redeem-detail_redeem-detail_module_ts.js.map