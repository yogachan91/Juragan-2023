(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/auth.guard */ 5107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _guards_auto_login_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/auto-login.guard */ 3986);





const routes = [
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("default-src_app_modals_login-modal_login-modal_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 107)).then(m => m.LoginPageModule),
        canLoad: [_guards_auto_login_guard__WEBPACK_IMPORTED_MODULE_1__.AutoLoginGuard] // Check if we should show the introduction or forward to inside
    },
    {
        path: 'tabs',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("src_app_tabs_tabs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 5564)).then(m => m.TabsPageModule),
        canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] // Secure all child pages
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
        // loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: 'login-modal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("default-src_app_modals_login-modal_login-modal_page_ts"), __webpack_require__.e("src_app_modals_login-modal_login-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modals/login-modal/login-modal.module */ 2177)).then(m => m.LoginModalPageModule)
    },
    {
        path: 'register-modal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modals_register-modal_register-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modals/register-modal/register-modal.module */ 6616)).then(m => m.RegisterModalPageModule)
    },
    {
        path: 'banner-modal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modals_banner-modal_banner-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modals/banner-modal/banner-modal.module */ 7447)).then(m => m.BannerModalPageModule)
    },
    {
        path: 'terms-modal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modals_terms-modal_terms-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modals/terms-modal/terms-modal.module */ 272)).then(m => m.TermsModalPageModule)
    },
    {
        path: 'faq-modal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modals_faq-modal_faq-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modals/faq-modal/faq-modal.module */ 6173)).then(m => m.FaqModalPageModule)
    },
    {
        path: 'redeem-detail',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("src_app_redeem-detail_redeem-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./redeem-detail/redeem-detail.module */ 6114)).then(m => m.RedeemDetailPageModule)
    },
    {
        path: 'promo',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_promo_promo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./promo/promo.module */ 4991)).then(m => m.PromoPageModule)
    },
    {
        path: 'redeem-modal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modals_redeem-modal_redeem-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modals/redeem-modal/redeem-modal.module */ 4262)).then(m => m.RedeemModalPageModule)
    },
    {
        path: 'redeem-list',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("src_app_redeem-list_redeem-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./redeem-list/redeem-list.module */ 7954)).then(m => m.RedeemListPageModule)
    },
    {
        path: 'promo-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modals_promo-modal_promo-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modals/promo-modal/promo-modal.module */ 8675)).then(m => m.PromoModalPageModule)
    },
    {
        path: 'redeem-tagihan',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("src_app_redeem-tagihan_redeem-tagihan_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./redeem-tagihan/redeem-tagihan.module */ 8110)).then(m => m.RedeemTagihanPageModule)
    },
    {
        path: 'redeem-ewallet',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("src_app_redeem-ewallet_redeem-ewallet_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./redeem-ewallet/redeem-ewallet.module */ 2786)).then(m => m.RedeemEwalletPageModule)
    },
    {
        path: 'redeem-now',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("src_app_redeem-now_redeem-now_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./redeem-now/redeem-now.module */ 6219)).then(m => m.RedeemNowPageModule)
    },
    {
        path: 'redeem-ewallet-list',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("src_app_redeem-ewallet-list_redeem-ewallet-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./redeem-ewallet-list/redeem-ewallet-list.module */ 2270)).then(m => m.RedeemEwalletListPageModule),
        canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'redeem-confirm',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("src_app_redeem-confirm_redeem-confirm_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./redeem-confirm/redeem-confirm.module */ 6739)).then(m => m.RedeemConfirmPageModule),
        canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'notif-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_notif-list_notif-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./notif-list/notif-list.module */ 5208)).then(m => m.NotifListPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("default-src_app_modals_map-pengiriman_map-pengiriman_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 4523)).then(m => m.ProfilePageModule)
    },
    {
        path: 'ganti-no',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("src_app_ganti-no_ganti-no_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ganti-no/ganti-no.module */ 8309)).then(m => m.GantiNoPageModule)
    },
    {
        path: 'reset-imei',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("src_app_reset-imei_reset-imei_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reset-imei/reset-imei.module */ 5494)).then(m => m.ResetImeiPageModule)
    },
    {
        path: 'forgot-password',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modals_forgot-password_forgot-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modals/forgot-password/forgot-password.module */ 1260)).then(m => m.ForgotPasswordPageModule)
    },
    {
        path: 'reset-pass',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("src_app_reset-pass_reset-pass_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reset-pass/reset-pass.module */ 359)).then(m => m.ResetPassPageModule)
    },
    {
        path: 'ppob-pln-token',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("src_app_ppob-pln-token_ppob-pln-token_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ppob-pln-token/ppob-pln-token.module */ 8304)).then(m => m.PpobPlnTokenPageModule)
    },
    {
        path: 'ppob-pln-tagihan',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_ppob-pln-tagihan_ppob-pln-tagihan_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ppob-pln-tagihan/ppob-pln-tagihan.module */ 4352)).then(m => m.PpobPlnTagihanPageModule)
    },
    {
        path: 'ppob-pln-token-history',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("src_app_ppob-pln-token-history_ppob-pln-token-history_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ppob-pln-token-history/ppob-pln-token-history.module */ 7375)).then(m => m.PpobPlnTokenHistoryPageModule)
    },
    {
        path: 'ppob-pln-token-history-details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("src_app_ppob-pln-token-history-details_ppob-pln-token-history-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ppob-pln-token-history-details/ppob-pln-token-history-details.module */ 3881)).then(m => m.PpobPlnTokenHistoryDetailsPageModule)
    },
    {
        path: 'top-detail',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("src_app_top-detail_top-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./top-detail/top-detail.module */ 6168)).then(m => m.TopDetailPageModule)
    },
    {
        path: 'modal-notif',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modals_modal-notif_modal-notif_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modals/modal-notif/modal-notif.module */ 7801)).then(m => m.ModalNotifPageModule)
    },
    {
        path: 'status-hadiah',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("src_app_status-hadiah_status-hadiah_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./status-hadiah/status-hadiah.module */ 7973)).then(m => m.StatusHadiahPageModule)
    },
    {
        path: 'ewallet-details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modals_ewallet-details_ewallet-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modals/ewallet-details/ewallet-details.module */ 349)).then(m => m.EwalletDetailsPageModule)
    },
    {
        path: 'redeem-status',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_redeem-status_redeem-status_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./redeem-status/redeem-status.module */ 3818)).then(m => m.RedeemStatusPageModule)
    },
    {
        path: 'resi-modal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modals_resi-modal_resi-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modals/resi-modal/resi-modal.module */ 8840)).then(m => m.ResiModalPageModule)
    },
    {
        path: 'redeem-ovo-point',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("src_app_redeem-ovo-point_redeem-ovo-point_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./redeem-ovo-point/redeem-ovo-point.module */ 2933)).then(m => m.RedeemOvoPointPageModule)
    },
    {
        path: 'modal-splash',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modals_modal-splash_modal-splash_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modals/modal-splash/modal-splash.module */ 4586)).then(m => m.ModalSplashPageModule)
    },
    {
        path: 'notification',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_notification_notification_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./notification/notification.module */ 2154)).then(m => m.NotificationPageModule)
    },
    {
        path: 'map-pengiriman',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modals_map-pengiriman_map-pengiriman_page_ts"), __webpack_require__.e("src_app_modals_map-pengiriman_map-pengiriman_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modals/map-pengiriman/map-pengiriman.module */ 8301)).then(m => m.MapPengirimanPageModule)
    },
    {
        path: 'promo2',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_promo2_promo2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./promo2/promo2.module */ 5132)).then(m => m.Promo2PageModule)
    },
    {
        path: 'top',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("src_app_top_top_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./top/top.module */ 4165)).then(m => m.TopPageModule)
    },
    {
        path: 'riwayat-transaksi',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("default-src_app_modals_detail-corporate-distribution_detail-corporate-distribution_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_riwayat-transaksi_riwayat-transaksi_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./riwayat-transaksi/riwayat-transaksi.module */ 1747)).then(m => m.RiwayatTransaksiPageModule)
    },
    {
        path: 'belanja-modal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("default-src_app_modals_belanja-modal_belanja-modal_page_ts"), __webpack_require__.e("src_app_modals_belanja-modal_belanja-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modals/belanja-modal/belanja-modal.module */ 8837)).then(m => m.BelanjaModalPageModule)
    },
    {
        path: 'detail-belanja',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("src_app_detail-belanja_detail-belanja_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./detail-belanja/detail-belanja.module */ 7014)).then(m => m.DetailBelanjaPageModule)
    },
    {
        path: 'list-produk',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("src_app_list-produk_list-produk_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./list-produk/list-produk.module */ 2620)).then(m => m.ListProdukPageModule)
    },
    {
        path: 'detail-corporate-distribution',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_dolphin_service_ts"), __webpack_require__.e("default-src_app_modals_detail-corporate-distribution_detail-corporate-distribution_page_ts"), __webpack_require__.e("src_app_modals_detail-corporate-distribution_detail-corporate-distribution_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modals/detail-corporate-distribution/detail-corporate-distribution.module */ 9973)).then(m => m.DetailCorporateDistributionPageModule)
    },
    // {
    //   path: 'tab4',
    //   loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
    // },
    // {
    //   path: 'tab5',
    //   loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule)
    // },
    // {
    //   path: 'login',
    //   loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
    // }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ 8763);
/* harmony import */ var onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! onesignal-cordova-plugin */ 182);
/* harmony import */ var onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ 6549);







let AppComponent = class AppComponent {
    constructor() {
        (0,_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__.defineCustomElements)(window);
        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_4__.Capacitor.isNativePlatform()) {
            this.OneSignalInit();
        }
    }
    OneSignalInit() {
        onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_3___default().setAppId("c2d96903-a6e7-4db4-b54a-0ccfa88b813b");
        onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_3___default().setNotificationOpenedHandler(function (jsonData) {
            console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        });
        onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_3___default().promptForPushNotificationsWithUserResponse(function (accepted) {
            console.log("User accepted notifications: " + accepted);
        });
        console.log('OneSignal-Init-Completed');
    }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/device/ngx */ 8801);









// import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule.forRoot({
                mode: 'ios'
            }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicRouteStrategy },
            _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_2__.Device,
            // StatusBar
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 5107:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/authentication.service */ 7053);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);





let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canLoad() {
        return this.authService.isAuthenticated.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(val => val !== null), // Filter out initial Behaviour subject value
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), // Otherwise the Observable doesn't complete!
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(isAuthenticated => {
            if (isAuthenticated) {
                return true;
            }
            else {
                this.router.navigateByUrl('/login');
                return false;
            }
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ 3986:
/*!********************************************!*\
  !*** ./src/app/guards/auto-login.guard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoLoginGuard": () => (/* binding */ AutoLoginGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/authentication.service */ 7053);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);





let AutoLoginGuard = class AutoLoginGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canLoad() {
        return this.authService.isAuthenticated.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(val => val !== null), // Filter out initial Behaviour subject value
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), // Otherwise the Observable doesn't complete!
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(isAuthenticated => {
            // console.log('Found previous token, automatic login');
            if (isAuthenticated) {
                // Directly open inside area       
                this.router.navigateByUrl('/tabs', { replaceUrl: true });
            }
            else {
                // Simply allow access to the login
                return true;
            }
        }));
    }
};
AutoLoginGuard.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
AutoLoginGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], AutoLoginGuard);



/***/ }),

/***/ 7053:
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/storage */ 460);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 6549);
/* harmony import */ var onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! onesignal-cordova-plugin */ 182);
/* harmony import */ var onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_2__);








// import { OneSignal } from '@awesome-cordova-plugins/onesignal/ngx';

const api_url = 'https://admin.ulidolphin.com/api/Dolphin5MirrorAl/';
let AuthenticationService = class AuthenticationService {
    //.DUMMYAPPS
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
        this._token = '';
        this._id = '';
        this.appVersion = '506';
        this.appVersionnew = '600';
        //DUMMYAPPS SET isDEV TO false
        this.isDEV = true;
        this.loadToken();
        this.loadOutletID();
    }
    ngOnInit() {
    }
    getAppVersion() {
        return this.appVersion.trim();
    }
    loadToken() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const token = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.get({ key: 'ULI_TOKEN' });
            if (token && token.value) {
                // console.log('set token: ', token.value);
                this._token = token.value;
                this.isAuthenticated.next(true);
            }
            else {
                this.isAuthenticated.next(false);
            }
        });
    }
    loadOutletID() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const token = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.get({ key: 'OUTLET_ID' });
            if (token && token.value) {
                // console.log('set token: ', token.value);
                this._id = token.value;
            }
        });
    }
    checkOutlet(imei, credentials) {
        let apiuri = 'login/';
        if (this.isDEV) {
            apiuri = 'loginsecret/';
        }
        return this.http.post(api_url + apiuri + imei, credentials).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((data) => {
            // console.log('AUTH _id', credentials);
            // console.log('AUTH imei', imei);
            // console.log('AUTH RETURN', data);
            if (data.status == 'success') {
                let retdata = data.retdata;
                _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.set({ key: 'ULI_TOKEN', value: retdata.uli_token });
                _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.set({ key: 'USERDATA_STORAGE', value: JSON.stringify(retdata) });
                _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.set({ key: 'OUTLET_ID', value: retdata.outlet_id });
                this._id = retdata.outlet_id;
                this._token = retdata.uli_token;
                this.isAuthenticated.next(true);
                this.router.navigateByUrl('/tabs', { replaceUrl: true });
            }
            else {
                this.isAuthenticated.next(false);
                throw Error(data.err);
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(_ => {
            this.isAuthenticated.next(true);
        }));
    }
    loginEmail(imei, credentials) {
        let apiuri = 'loginemail/';
        if (this.isDEV) {
            apiuri = 'loginemailsecret/';
        }
        return this.http.post(api_url + apiuri + imei, credentials).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((data) => {
            // console.log('AUTH _id', credentials);
            // console.log('AUTH imei', imei);
            // console.log('AUTH RETURN', data);
            if (data.status == 'success') {
                let retdata = data.retdata;
                _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.set({ key: 'ULI_TOKEN', value: retdata.uli_token });
                _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.set({ key: 'USERDATA_STORAGE', value: JSON.stringify(retdata) });
                _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.set({ key: 'OUTLET_ID', value: retdata.outlet_id });
                this._id = retdata.outlet_id;
                this._token = retdata.uli_token;
                this.isAuthenticated.next(true);
                this.router.navigateByUrl('/tabs', { replaceUrl: true });
            }
            else {
                this.isAuthenticated.next(false);
                throw Error(data.err);
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(_ => {
            this.isAuthenticated.next(true);
        }));
    }
    logout() {
        this.isAuthenticated.next(false);
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.remove({ key: 'ULI_TOKEN' });
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.remove({ key: 'USERDATA_STORAGE' });
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.remove({ key: 'OUTLET_ID' });
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.remove({ key: 'SPLASH' });
        return _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.clear();
    }
    getToken() {
        if (this._token) {
            if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.isNativePlatform()) {
                onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_2___default().sendTag('uli_token', this._token.trim());
            }
        }
        return this._token.trim();
    }
    getID() {
        if (this._id) {
            if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.isNativePlatform()) {
                onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_2___default().sendTag('outlet_id', this._id.trim());
                onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_2___default().sendTag('current_app_version', this.appVersionnew.trim());
                onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_2___default().addTrigger('current_app_version', 5003);
                onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_2___default().setExternalUserId(this._id.trim());
                onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_2___default().getTags((data) => {
                    console.log('OneSignal-getTags', data);
                });
                onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_2___default().getDeviceState((data) => {
                    console.log('OneSignal-DeviceState', data);
                });
            }
        }
        return this._id.trim();
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
AuthenticationService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ 9019:
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: true,
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 8150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment.prod */ 9019);




if (_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_parse-17d9d367_js-node_modules_ionic_core_dist_esm_t-a480aa",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_parse-17d9d367_js-node_modules_ionic_core_dist_esm_t-a480aa",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		3499,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		7001,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 5899:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./pwa-action-sheet.entry.js": [
		5464,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-action-sheet_entry_js"
	],
	"./pwa-camera-modal-instance.entry.js": [
		8724,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal-instance_entry_js"
	],
	"./pwa-camera-modal.entry.js": [
		8145,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal_entry_js"
	],
	"./pwa-camera.entry.js": [
		527,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera_entry_js"
	],
	"./pwa-toast.entry.js": [
		4389,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-toast_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 5899;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map