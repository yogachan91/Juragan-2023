"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_riwayat-transaksi_riwayat-transaksi_module_ts"],{

/***/ 3672:
/*!***********************************************************************!*\
  !*** ./src/app/riwayat-transaksi/riwayat-transaksi-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RiwayatTransaksiPageRoutingModule": () => (/* binding */ RiwayatTransaksiPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _riwayat_transaksi_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./riwayat-transaksi.page */ 92);




const routes = [
    {
        path: '',
        component: _riwayat_transaksi_page__WEBPACK_IMPORTED_MODULE_0__.RiwayatTransaksiPage
    }
];
let RiwayatTransaksiPageRoutingModule = class RiwayatTransaksiPageRoutingModule {
};
RiwayatTransaksiPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RiwayatTransaksiPageRoutingModule);



/***/ }),

/***/ 1747:
/*!***************************************************************!*\
  !*** ./src/app/riwayat-transaksi/riwayat-transaksi.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RiwayatTransaksiPageModule": () => (/* binding */ RiwayatTransaksiPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _riwayat_transaksi_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./riwayat-transaksi-routing.module */ 3672);
/* harmony import */ var _riwayat_transaksi_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./riwayat-transaksi.page */ 92);







let RiwayatTransaksiPageModule = class RiwayatTransaksiPageModule {
};
RiwayatTransaksiPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _riwayat_transaksi_routing_module__WEBPACK_IMPORTED_MODULE_0__.RiwayatTransaksiPageRoutingModule
        ],
        declarations: [_riwayat_transaksi_page__WEBPACK_IMPORTED_MODULE_1__.RiwayatTransaksiPage]
    })
], RiwayatTransaksiPageModule);



/***/ }),

/***/ 92:
/*!*************************************************************!*\
  !*** ./src/app/riwayat-transaksi/riwayat-transaksi.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RiwayatTransaksiPage": () => (/* binding */ RiwayatTransaksiPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _riwayat_transaksi_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./riwayat-transaksi.page.html?ngResource */ 9981);
/* harmony import */ var _riwayat_transaksi_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./riwayat-transaksi.page.scss?ngResource */ 9588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dolphin.service */ 2171);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _modals_resi_modal_resi_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/resi-modal/resi-modal.page */ 3801);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _modals_detail_corporate_distribution_detail_corporate_distribution_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/detail-corporate-distribution/detail-corporate-distribution.page */ 1258);










let RiwayatTransaksiPage = class RiwayatTransaksiPage {
    constructor(dolphinService, router, alertController, modalController, loadingController, fb) {
        this.dolphinService = dolphinService;
        this.router = router;
        this.alertController = alertController;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.fb = fb;
        this.segmen = 'banner_bu_corporate';
        this.segmendetailcorp = 'fop';
        this.segmendetailhomecare = 'category';
        this.segmendetailpersonalcare = 'category';
        this.segmendetailnutrition = 'category';
        this.segmendetailbw = 'category';
        this.getdata();
        this.banner_target_bu();
        const currentState = this.router.getCurrentNavigation();
        const page = currentState.extras.state.page;
        if (page == null || page == 1) {
            this.segmen = 'banner_bu_corporate';
        }
        else if (page == 2) {
            this.segmen = 'homecare';
        }
        else if (page == 3) {
            this.segmen = 'personal_care';
        }
        else if (page == 4) {
            this.segmen = 'nutrition';
        }
        else {
            this.segmen = 'bandw';
        }
    }
    getdata() {
        // TARGET LOYALTY-----------------------------------------------------------------------------------
        // target_corporate loyalty
        this.dolphinService.target_corporate('fop').subscribe((target_corporate_loyalty) => {
            //  if(target_corporate_loyalty) {
            if (target_corporate_loyalty == null) {
                this.fop_poin = [];
                this.isfop = 0;
            }
            else {
                //  console.log('target_corporate_loyalty', target_corporate_loyalty)
                this.fop_poin = target_corporate_loyalty;
                this.isfop = 1;
            }
            console.log('target_corporate_loyalty', this.isfop);
            //  }
            this.dolphinService.target_corporate('bonus_growth').subscribe((bonus_growth) => {
                // if(bonus_growth) {
                if (bonus_growth == null) {
                    this.bonus_growth = [];
                    this.isgrowth = 0;
                }
                else {
                    //  console.log('target_corporate_loyalty', target_corporate_loyalty)
                    this.bonus_growth = bonus_growth;
                    this.isgrowth = 1;
                }
                this.loadingController.dismiss();
                //}
            });
            // target_corporate category
            this.dolphinService.target_corporate('category').subscribe((target_corporate_category) => {
                //  if(target_corporate_category) {
                if (target_corporate_category == null) {
                    this.target_corporate_category = [];
                    this.iscorpcategory = 0;
                }
                else {
                    console.log('category_corp', target_corporate_category);
                    this.target_corporate_category = target_corporate_category;
                    this.iscorpcategory = 1;
                }
                //  }
            });
            // target_corporate produk
            this.dolphinService.target_corporate('produk').subscribe((target_corporate_produk) => {
                if (target_corporate_produk) {
                    if (target_corporate_produk.includes('Belum ada')) {
                        this.target_corporate_produk = null;
                    }
                    else {
                        //  console.log('target_corporate_produk', target_corporate_produk[0])
                        this.target_corporate_produk = target_corporate_produk[0];
                    }
                }
            });
            // target_corporate detail produk
            this.dolphinService.target_corporate('detail').subscribe((target_corporate_produk_detail) => {
                if (target_corporate_produk_detail == null) {
                    this.target_corporate_produk_detail = null;
                }
                else {
                    //  console.log('target_corporate_produk', target_corporate_produk_detail)
                    this.target_corporate_produk_detail = target_corporate_produk_detail;
                }
                console.log('target_corporate_produkss', target_corporate_produk_detail);
            });
            // TARGET HOMECARE-----------------------------------------------------------------------------------
            // target_homecare loyalty
            this.dolphinService.target_homecare('loyalty').subscribe((target_homecare_loyalty) => {
                // if(target_homecare_loyalty) {
                if (target_homecare_loyalty == null) {
                    this.target_homecare_loyalty = [];
                }
                else {
                    //  console.log('target_homecare_loyalty', target_homecare_loyalty)
                    this.target_homecare_loyalty = target_homecare_loyalty;
                }
                // }
            });
            // target_homecare category
            this.dolphinService.target_homecare('category').subscribe((target_homecare_category) => {
                // if(target_homecare_category) {
                if (target_homecare_category == null) {
                    this.target_homecare_category = [];
                    this.ishomecare_category = 0;
                }
                else {
                    //  console.log('target_homecare_category', target_homecare_category)
                    this.target_homecare_category = target_homecare_category;
                    this.ishomecare_category = 1;
                }
                console.log('ishomecare_category', this.ishomecare_category);
                //   }
            });
            // target_homecare produk
            this.dolphinService.target_homecare('produk').subscribe((target_homecare_produk) => {
                if (target_homecare_produk) {
                    if (target_homecare_produk.includes('Belum ada')) {
                        this.target_homecare_produk = null;
                    }
                    else {
                        //  console.log('target_homecare_produk', target_homecare_produk[0])
                        this.target_homecare_produk = target_homecare_produk[0];
                    }
                }
            });
            // target_homecare detail produk
            this.dolphinService.target_homecare('detail').subscribe((target_homecare_produk_detail) => {
                if (target_homecare_produk_detail) {
                    if (target_homecare_produk_detail.includes('Belum ada')) {
                        this.target_homecare_produk_detail = null;
                    }
                    else {
                        //  console.log('target_homecare_produk_detail', target_homecare_produk_detail)
                        this.target_homecare_produk_detail = target_homecare_produk_detail;
                    }
                }
            });
            // TARGET PERSONAL CARE-----------------------------------------------------------------------------------
            // target_personal loyalty
            this.dolphinService.target_personal_care('loyalty').subscribe((target_personal_loyalty) => {
                if (target_personal_loyalty) {
                    if (target_personal_loyalty.includes('Belum ada')) {
                        this.target_personal_loyalty = [];
                    }
                    else {
                        //  console.log('target_personal_loyalty', target_personal_loyalty)
                        this.target_personal_loyalty = target_personal_loyalty;
                    }
                }
            });
            // target_personal category
            this.dolphinService.target_personal_care('category').subscribe((target_personal_category) => {
                //  if(target_personal_category) {
                if (target_personal_category == null) {
                    this.target_personal_category = [];
                    this.istarget_personal_category = 0;
                }
                else {
                    //  console.log('target_personal_category', target_personal_category)
                    this.target_personal_category = target_personal_category;
                    this.istarget_personal_category = 1;
                }
                //   }
            });
            // target_personal produk
            this.dolphinService.target_personal_care('produk').subscribe((target_personal_care_produk) => {
                if (target_personal_care_produk) {
                    if (target_personal_care_produk.includes('Belum ada')) {
                        this.target_personal_care_produk = null;
                    }
                    else {
                        //  console.log('target_personal_care_produk', target_personal_care_produk[0])
                        this.target_personal_care_produk = target_personal_care_produk[0];
                    }
                }
            });
            // target_personal detail produk
            this.dolphinService.target_personal_care('detail').subscribe((target_personal_produk_detail) => {
                if (target_personal_produk_detail) {
                    if (target_personal_produk_detail.includes('Belum ada')) {
                        this.target_personal_produk_detail = null;
                    }
                    else {
                        //  console.log('target_personal_produk_detail', target_personal_produk_detail)
                        this.target_personal_produk_detail = target_personal_produk_detail;
                    }
                }
            });
            // TARGET NUTRITION-----------------------------------------------------------------------------------
            // target_nutrition loyalty
            this.dolphinService.target_nutrition('loyalty').subscribe((target_nutrition_loyalty) => {
                if (target_nutrition_loyalty) {
                    if (target_nutrition_loyalty.includes('Belum ada')) {
                        this.target_nutrition_loyalty = [];
                    }
                    else {
                        //  console.log('target_nutrition_loyalty', target_nutrition_loyalty)
                        this.target_nutrition_loyalty = target_nutrition_loyalty;
                    }
                }
            });
            // target_nutrition category
            this.dolphinService.target_nutrition('category').subscribe((target_nutrition_category) => {
                //if(target_nutrition_category) {
                if (target_nutrition_category == null) {
                    this.target_nutrition_category = [];
                    this.istarget_nutrition_category = 0;
                }
                else {
                    //  console.log('target_nutrition_category', target_nutrition_category)
                    this.target_nutrition_category = target_nutrition_category;
                    this.istarget_nutrition_category = 1;
                }
                //   }
            });
            // target_nutrition produk
            this.dolphinService.target_nutrition('produk').subscribe((target_nutrition_produk) => {
                if (target_nutrition_produk) {
                    if (target_nutrition_produk.includes('Belum ada')) {
                        this.target_nutrition_produk = null;
                    }
                    else {
                        //  console.log('target_nutrition_produk', target_nutrition_produk[0])
                        this.target_nutrition_produk = target_nutrition_produk[0];
                    }
                }
            });
            // target_nutrition detail produk
            this.dolphinService.target_personal_care('detail').subscribe((target_nutrition_produk_detail) => {
                if (target_nutrition_produk_detail) {
                    if (target_nutrition_produk_detail.includes('Belum ada')) {
                        this.target_nutrition_produk_detail = null;
                    }
                    else {
                        //  console.log('target_nutrition_produk_detail', target_nutrition_produk_detail)
                        this.target_nutrition_produk_detail = target_nutrition_produk_detail;
                    }
                }
            });
            // TARGET BW-----------------------------------------------------------------------------------
            // target_bw loyalty
            this.dolphinService.target_bw('loyalty').subscribe((target_bw_loyalty) => {
                if (target_bw_loyalty) {
                    if (target_bw_loyalty.includes('Belum ada')) {
                        this.target_bw_loyalty = [];
                    }
                    else {
                        //  console.log('target_bw_loyalty', target_bw_loyalty)
                        this.target_bw_loyalty = target_bw_loyalty;
                    }
                }
            });
            // target_bw category
            this.dolphinService.target_bw('category').subscribe((target_bw_category) => {
                // if(target_bw_category) {
                if (target_bw_category == null) {
                    this.target_bw_category = [];
                    this.istarget_bw_category = 0;
                }
                else {
                    //  console.log('target_bw_category', target_bw_category)
                    this.target_bw_category = target_bw_category;
                    this.istarget_bw_category = 1;
                }
                //  }
            });
            // target_bw produk
            this.dolphinService.target_bw('produk').subscribe((target_bw_produk) => {
                if (target_bw_produk) {
                    if (target_bw_produk.includes('Belum ada')) {
                        this.target_bw_produk = null;
                    }
                    else {
                        //  console.log('target_bw_produk', target_bw_produk[0])
                        this.target_bw_produk = target_bw_produk[0];
                    }
                }
            });
            // target_bw detail produk
            this.dolphinService.target_bw('detail').subscribe((target_bw_produk_detail) => {
                if (target_bw_produk_detail) {
                    if (target_bw_produk_detail.includes('Belum ada')) {
                        this.target_bw_produk_detail = null;
                    }
                    else {
                        //  console.log('target_bw_produk_detail', target_bw_produk_detail)
                        this.target_bw_produk_detail = target_bw_produk_detail;
                    }
                }
            });
            // header_target_dist
            this.dolphinService.header_target_dist().subscribe((data) => {
                console.log('datasss', data.text_apps);
                this.header_target_dist = data.text_apps;
            });
        });
    }
    //ovo
    cekstatus(rno) {
        this.doLoading('Melakukan pengecekan status redeem...');
        this.dolphinService.checkovostatus(rno).subscribe(data => {
            console.log(data);
            if (data['data']['orderList'][0]['status']) {
                this.showalert("Status Redeem", data['data']['orderList'][0]['status']);
            }
            else {
                this.showalert("Status Redeem", 'Redeem #' + rno + ' sedang diproses, cek kembali dilain waktu..');
            }
            this.loadingController.dismiss();
        });
    }
    doLoading(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: msg,
                backdropDismiss: false
            });
            yield loading.present();
        });
    }
    showalert(title, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                message: message,
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    //.ovo
    refresh() {
        this.doLoading('Reloading..');
        this.fop = null;
        this.totalbelanja = null;
        this.top5brand = null;
        this.top5 = null;
        this.redeems = null;
        this.invoices = null;
        this.getdata();
        this.notif = "";
    }
    details(i, t) {
        let navigationExtras = { state: { item: i, type: t } };
        this.router.navigate(['top-detail'], navigationExtras);
    }
    cekresi(r) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Cek Resi',
                message: 'Untuk cek resi anda akan diarahkan ke link external melalui browser pada device Anda. Buka browser untuk pengecekan pengiriman?',
                buttons: [
                    {
                        text: 'Nanti Saja',
                        handler: data => {
                            // console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Ya Cek Sekarang',
                        handler: data => {
                            window.open("https://cekresi.com/?noresi=" + r, '_system', 'location=yes');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    lapor(no, name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Lapor Redeem Ini',
                message: 'Untuk melakukan pelaporan Anda akan otomatis kami arahkan ke tim support via WhatApp, lanjutkan untuk pelaporan?',
                buttons: [
                    {
                        text: 'Nanti Saja',
                        handler: data => {
                            // console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Ya Lapor Sekarang',
                        handler: data => {
                            window.open("https://wa.me/6281288614405?text=Halo%20Admin,%20Saya%20ingin%20melaporkan%20redeem%20saya%20berupa:%20" + name.trim() + ",%20dengan%20nomor%20redeem:%20" + no.trim() + "%20mohon%20bantuannya%20ya..", "_system");
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    selesai(no) {
        this.dolphinService.setredeemselesai(no).subscribe(data => {
            if (data.status == 'success') {
                this.refresh();
                alert('Redeem Anda telah selsai..');
            }
        });
    }
    lihatresi(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modals_resi_modal_resi_modal_page__WEBPACK_IMPORTED_MODULE_3__.ResiModalPage,
                componentProps: { 'item': item },
                swipeToClose: true,
                breakpoints: [0, 0.7, 1],
                initialBreakpoint: 0.7
                // presentingElement: this.routerOutlet.nativeEl
            });
            return yield modal.present();
        });
    }
    banner_target_bu() {
        this.dolphinService.banner_target_bu().subscribe((data) => {
            console.log('cekdata', data);
            if (data.status == 'success') {
                this.nama_bu_corp = data.retdata[0].nama_banner;
                this.banner_bu_corporate = data.retdata[0].status;
                this.nama_home_care = data.retdata[1].nama_banner;
                this.home_care = data.retdata[1].status;
                this.nama_personal_care = data.retdata[2].nama_banner;
                this.personal_care = data.retdata[2].status;
                this.nama_nutrition = data.retdata[3].nama_banner;
                this.nutrition = data.retdata[3].status;
                this.nama_bw = data.retdata[4].nama_banner;
                this.bw = data.retdata[4].status;
            }
        });
    }
    lihat_detail_corporate_distribution(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modals_detail_corporate_distribution_detail_corporate_distribution_page__WEBPACK_IMPORTED_MODULE_4__.DetailCorporateDistributionPage,
                componentProps: { 'item': item },
                swipeToClose: true,
                breakpoints: [0, 0.7, 1],
                initialBreakpoint: 1
                // presentingElement: this.routerOutlet.nativeEl
            });
            return yield modal.present();
        });
    }
};
RiwayatTransaksiPage.ctorParameters = () => [
    { type: _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__.DolphinService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder }
];
RiwayatTransaksiPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-riwayat-transaksi',
        template: _riwayat_transaksi_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_riwayat_transaksi_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RiwayatTransaksiPage);



/***/ }),

/***/ 9588:
/*!**************************************************************************!*\
  !*** ./src/app/riwayat-transaksi/riwayat-transaksi.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "ion-title {\n  color: #f5f6f8;\n}\n\n.background {\n  background-color: #1505a8;\n}\n\n.boxed {\n  display: block;\n  border-bottom: 1px solid #e0e0e0;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.inv {\n  display: block;\n  font-size: 0.8em;\n  line-height: 2px;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: 600;\n  color: #3D5CFF !important;\n}\n\n.inv2 {\n  display: block;\n  font-size: 0.8em;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: 600;\n  color: #3D5CFF !important;\n}\n\n.dt {\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 0.7em;\n}\n\n.amount {\n  font-size: 0.8em;\n  line-height: 2px;\n  text-align: right;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.amount_invoice {\n  font-size: 0.8em;\n  text-align: right;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.bonus-title {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.7em;\n}\n\n.bonus-title_invoice {\n  color: orange;\n  font-size: 0.8em;\n}\n\n.bonus-title_bold {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.detail_poin {\n  color: #e8712c;\n  font-weight: bold;\n  padding: 0;\n}\n\n.bonus-text {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.7em;\n  text-align: right;\n  font-weight: 500;\n}\n\n.bonus-text-loyality {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.12px;\n  text-align: right;\n  font-weight: 500;\n}\n\n.bonus-text_bold {\n  color: rgba(0, 0, 0, 0.6);\n  text-align: right;\n  font-weight: 500;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.bonus-box {\n  background-color: #f5f6ff;\n  border-radius: 5px;\n  margin-bottom: 3px;\n}\n\n.bonus-box_2 {\n  background-color: #effafb;\n  border-radius: 5px;\n  margin-bottom: 3px;\n}\n\n.r-name {\n  display: block;\n  font-size: 0.8em;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: 600;\n  color: #3D5CFF !important;\n}\n\n.r-no {\n  font-size: 0.7em;\n  text-align: right;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.r-date {\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 0.7em;\n}\n\n.r-poin {\n  font-size: 0.7em;\n  float: right;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.cekresi {\n  float: right;\n  padding-left: 5px;\n  color: #3D5CFF !important;\n}\n\n.lapor {\n  color: #ad0023 !important;\n}\n\n.selesai {\n  color: #1b6c00 !important;\n}\n\n.statuses {\n  font-weight: bold;\n  color: #7d93ff !important;\n}\n\n.statuses-selesai {\n  font-weight: bold;\n  color: #00bb51 !important;\n}\n\n.top5-head {\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-right: 10px;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background-color: #3D5CFF;\n}\n\n.top5-title {\n  color: #FFF;\n  font-weight: 500;\n  display: block;\n  font-size: 0.9em;\n}\n\n.top5-content {\n  margin-left: 10px;\n  margin-right: 10px;\n  border-width: 0px 1px 1px 1px;\n  border-style: solid;\n  border-color: #e1e1e1;\n}\n\n.top5-cat {\n  font-size: 0.9em;\n  font-weight: 500;\n}\n\n.top5-rightmonth {\n  font-size: 0.7em;\n  color: #4b80f0;\n  text-align: right;\n}\n\n.top5-leftmonth {\n  font-size: 0.7em;\n  color: #ec7b9c;\n}\n\n.top5-left, .top5-right {\n  font-size: 0.8em;\n  color: #444;\n}\n\n.top5-right {\n  text-align: right;\n}\n\n.detail_list_poin {\n  border-style: solid;\n  border-width: 0.5px;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 12px;\n}\n\n.card_2 {\n  /* Add shadows to create the \"card\" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  padding: 10px;\n  border-radius: 10px;\n}\n\n.card_3 {\n  /* Add shadows to create the \"card\" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  padding: 10px;\n  border-radius: 10px;\n  margin-top: -35px;\n}\n\n/* On mouse-over, add a deeper shadow */\n\n.card_2:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n/* Add some padding inside the card container */\n\n.ion-segment-buttons {\n  width: 590px;\n  min-width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJpd2F5YXQtdHJhbnNha3NpLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFDQTtFQUNJLHlCQUFBO0FBRUo7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFFSjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSUo7O0FBREE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFEQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUlKOztBQURBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBSUo7O0FBREE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUlKOztBQURBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQUlKOztBQURBO0VBRUksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUdKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0FBQUo7O0FBR0E7RUFDSSx5QkFBQTtBQUFKOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBRUEsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFLQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFGSjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBRko7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQUZKOztBQUtBO0VBQ0EsaUJBQUE7QUFGQTs7QUFJQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFESjs7QUFHQTtFQUNJLDRDQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdFO0VBQ0UsNENBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHRSx1Q0FBQTs7QUFDQTtFQUNFLDJDQUFBO0FBQUo7O0FBR0UsK0NBQUE7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFESiIsImZpbGUiOiJyaXdheWF0LXRyYW5zYWtzaS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xyXG4gICAgY29sb3I6ICNmNWY2Zjg7XHJcbn1cclxuLmJhY2tncm91bmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUwNWE4O1xyXG59XHJcblxyXG5cclxuLmJveGVkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmludiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgIGxpbmUtaGVpZ2h0OjJweDtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC43KTtcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgIGNvbG9yOiAjM0Q1Q0ZGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbnYyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgY29sb3I6ICMzRDVDRkYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmR0IHtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC41KTtcclxuICAgIGZvbnQtc2l6ZTogLjdlbTtcclxufVxyXG5cclxuLmFtb3VudCB7XHJcbiAgICBmb250LXNpemU6IC44ZW07XHJcbiAgICBsaW5lLWhlaWdodDoycHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNyk7XHJcbn1cclxuXHJcbi5hbW91bnRfaW52b2ljZSB7XHJcbiAgICBmb250LXNpemU6IC44ZW07XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC43KTtcclxufVxyXG5cclxuLmJvbnVzLXRpdGxlIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcclxuICAgIGZvbnQtc2l6ZTogLjdlbTtcclxufVxyXG5cclxuLmJvbnVzLXRpdGxlX2ludm9pY2Uge1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxufVxyXG4uYm9udXMtdGl0bGVfYm9sZHtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZGV0YWlsX3BvaW4ge1xyXG4gICAgY29sb3I6ICNlODcxMmM7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5ib251cy10ZXh0IHtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcclxuICAgIGZvbnQtc2l6ZTogLjdlbTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uYm9udXMtdGV4dC1sb3lhbGl0eSB7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNik7XHJcbiAgICBmb250LXNpemU6IC4xMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5ib251cy10ZXh0X2JvbGQge1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjYpO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5ib251cy1ib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG5cclxuLmJvbnVzLWJveF8yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmZhZmI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbn1cclxuXHJcbi5yLW5hbWUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IC44ZW07XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNyk7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICBjb2xvcjogIzNENUNGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uci1ubyB7XHJcbiAgICBmb250LXNpemU6IC43ZW07XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNyk7XHJcbn1cclxuXHJcbi5yLWRhdGUge1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xyXG4gICAgZm9udC1zaXplOiAuN2VtO1xyXG59XHJcblxyXG4uci1wb2luIHtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGxhdmVuZGVyO1xyXG4gICAgZm9udC1zaXplOiAuN2VtO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC41KTtcclxuICAgIC8vIHBhZGRpbmc6NHB4O1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czozcHg7XHJcblxyXG59XHJcblxyXG4uY2VrcmVzaSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6NXB4O1xyXG4gICAgY29sb3I6ICMzRDVDRkYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxhcG9yIHtcclxuICAgIGNvbG9yOiAjYWQwMDIzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWxlc2FpIHtcclxuICAgIGNvbG9yOiAjMWI2YzAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdGF0dXNlcyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjN2Q5M2ZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdGF0dXNlcy1zZWxlc2FpIHsgXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMDBiYjUxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4udG9wNS1oZWFkIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRDVDRkY7XHJcbn1cclxuXHJcbi50b3A1LXRpdGxlIHtcclxuICAgIGNvbG9yOiNGRkY7XHJcbiAgICBcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogLjllbTtcclxufVxyXG5cclxuLnRvcDUtY29udGVudCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGJvcmRlci13aWR0aDogMHB4IDFweCAxcHggMXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogI2UxZTFlMTtcclxufVxyXG5cclxuLnRvcDUtY2F0IHtcclxuICAgIGZvbnQtc2l6ZTogLjllbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi50b3A1LXJpZ2h0bW9udGgge1xyXG4gICAgZm9udC1zaXplOiAuN2VtO1xyXG4gICAgY29sb3I6ICM0YjgwZjA7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnRvcDUtbGVmdG1vbnRoIHtcclxuICAgIGZvbnQtc2l6ZTogLjdlbTtcclxuICAgIGNvbG9yOiAjZWM3YjljO1xyXG59XHJcblxyXG4udG9wNS1sZWZ0LCAudG9wNS1yaWdodCB7XHJcbiAgICBmb250LXNpemU6IC44ZW07XHJcbiAgICBjb2xvcjogIzQ0NDtcclxufVxyXG5cclxuLnRvcDUtcmlnaHQge1xyXG50ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uZGV0YWlsX2xpc3RfcG9pbntcclxuICAgIGJvcmRlci1zdHlsZTpzb2xpZDsgXHJcbiAgICBib3JkZXItd2lkdGg6IDAuNXB4OyBcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uY2FyZF8yIHtcclxuICAgIC8qIEFkZCBzaGFkb3dzIHRvIGNyZWF0ZSB0aGUgXCJjYXJkXCIgZWZmZWN0ICovXHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZF8zIHtcclxuICAgIC8qIEFkZCBzaGFkb3dzIHRvIGNyZWF0ZSB0aGUgXCJjYXJkXCIgZWZmZWN0ICovXHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzVweDtcclxuICB9XHJcbiAgXHJcbiAgLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZGVlcGVyIHNoYWRvdyAqL1xyXG4gIC5jYXJkXzI6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICB9XHJcbiAgXHJcbiAgLyogQWRkIHNvbWUgcGFkZGluZyBpbnNpZGUgdGhlIGNhcmQgY29udGFpbmVyICovXHJcbiAgXHJcbiAgLmlvbi1zZWdtZW50LWJ1dHRvbnMge1xyXG4gICAgd2lkdGg6IDU5MHB4O1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICB9XHJcbiAiXX0= */";

/***/ }),

/***/ 9981:
/*!**************************************************************************!*\
  !*** ./src/app/riwayat-transaksi/riwayat-transaksi.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"background\" color=\"unilever\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"arrow-back-outline\"></ion-back-button>\n    </ion-buttons>\n    <ion-title> Target </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"refresh()\">\n        <ion-icon slot=\"icon-only\" name=\"refresh-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-grid color=\"unilever\">\n    <ion-row>\n      <ion-col *ngIf=\"banner_bu_corporate=='1'\">\n        <ion-segment\n          [(ngModel)]=\"segmen\"\n          [scrollable]=\"false\"\n          mode=\"ios\"\n          value=\"target\"\n          style=\"background-color: #ffd08a\"\n        >\n          <ion-segment-button value=\"banner_bu_corporate\">\n            <ion-label>{{nama_bu_corp}}</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n      <ion-col *ngIf=\"home_care=='1'\">\n        <ion-segment\n          [(ngModel)]=\"segmen\"\n          [scrollable]=\"false\"\n          mode=\"ios\"\n          value=\"target\"\n          style=\"background-color: #ffd08a\"\n        >\n          <ion-segment-button value=\"homecare\">\n            <ion-label>{{nama_home_care}}</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n      <ion-col *ngIf=\"personal_care=='1'\">\n        <ion-segment\n          [(ngModel)]=\"segmen\"\n          [scrollable]=\"false\"\n          mode=\"ios\"\n          value=\"target\"\n          style=\"background-color: #ffd08a\"\n        >\n          <ion-segment-button value=\"personal_care\">\n            <ion-label>{{nama_personal_care}}</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n      <ion-col *ngIf=\"nutrition=='1'\">\n        <ion-segment\n          [(ngModel)]=\"segmen\"\n          [scrollable]=\"false\"\n          mode=\"ios\"\n          value=\"target\"\n          style=\"background-color: #ffd08a\"\n        >\n          <ion-segment-button value=\"nutrition\">\n            <ion-label>{{nama_nutrition}}</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n      <ion-col *ngIf=\"bw=='1'\">\n        <ion-segment\n          [(ngModel)]=\"segmen\"\n          [scrollable]=\"false\"\n          mode=\"ios\"\n          value=\"target\"\n          style=\"background-color: #ffd08a\"\n        >\n          <ion-segment-button value=\"bandw\">\n            <ion-label>{{nama_bw}}</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content>\n  <div [ngSwitch]=\"segmen\">\n    <div *ngSwitchCase=\"'banner_bu_corporate'\">\n      <div>\n        <ion-segment [(ngModel)]=\"segmendetailcorp\" style=\"color: blue\">\n          <ion-segment-button value=\"fop\">\n            <ion-label>FOP</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"bonus_growth\">\n            <ion-label>BONUS GROWTH</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"produk\">\n            <ion-label>DISTRIBUTION</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n        <ion-segment [(ngModel)]=\"segmendetailcorp\" style=\"color: blue\">\n          <!-- <ion-segment-button value=\"loyalty\">\n          <ion-label>LOYALTY</ion-label>\n        </ion-segment-button> -->\n          <!-- <ion-segment-button value=\"category\">\n            <ion-label>CATEGORY</ion-label>\n          </ion-segment-button> -->\n        </ion-segment>\n      </div>\n      <br />\n\n      <div [ngSwitch]=\"segmendetailcorp\">\n        <div *ngSwitchCase=\"'loyalty'\" >\n          <div *ngIf=\"target_corporate_loyalty\">\n            <div class=\"card_2\" *ngFor=\"let v of target_corporate_loyalty\">\n              <div>\n                <div [innerHTML]=\"v.Bar_Title_Target\"></div>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Target}} </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_target|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Simulasi}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_simulasi|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Capai}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_capai|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Sisa}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_sisa|number}} </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'fop'\">\n          <div *ngIf=\"!fop_poin\">\n            <center>\n              <ion-spinner color=\"primary\" style=\"font-size: 100px;\"></ion-spinner>\n            </center>\n          </div>\n          <div *ngIf=\"isfop==0\" style=\"margin-top: -20px;\">\n            <center >\n              <h5>Tidak ada data pada bulan ini</h5>\n            </center>\n          </div>\n          <div  *ngIf=\"isfop==1\">\n          <div *ngIf=\"!fop_poin\">\n            <center>\n              <ion-spinner color=\"primary\" style=\"font-size: 100px;\"></ion-spinner>\n            </center>\n          </div>\n          <ion-grid *ngIf=\"fop_poin\" style=\"margin-top: -35px;\">\n            <div *ngFor=\"let v of fop_poin\">\n              <div class=\"card_2\">\n                <div [innerHTML]=\"v.Bar_Title_Target\"></div>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Target}} </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.target_fop|number}}\n                  </ion-col>\n                </ion-row>\n                <!-- <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Simulasi}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_simulasi}} </ion-col>\n                </ion-row> -->\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Pencapaian}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_total_fop|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row >\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Total_Sales}} </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.isValue}} {{v.rpp_total_sales|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Simulasi}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.simulasi_poin|number}}\n                  </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </ion-grid>\n        </div>\n        </div>\n\n        <div *ngSwitchCase=\"'bonus_growth'\">\n          <div *ngIf=\"isgrowth==0\" style=\"margin-top: -20px;\">\n            <center>\n              <h5>Tidak ada data pada bulan ini</h5>\n            </center>\n          </div>\n          <div  *ngIf=\"isgrowth==1\">\n          <ion-grid>\n            <div *ngFor=\"let v of bonus_growth\" style=\"margin-top: -35px;\">\n              <!-- <div class=\"card_2\">\n                <div [innerHTML]=\"v.Bar_Title_Target\"></div>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Target}} </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_target|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Simulasi}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_simulasi|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Capai}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_capai|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Sisa}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_sisa|number}} </ion-col>\n                </ion-row>\n              </div> -->\n              <div class=\"card_2\">\n                <div [innerHTML]=\"v.Bar_Title_Target\"></div>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Target}} </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_target|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Capai}} </ion-col>\n                  <ion-col class=\"bonus-text\">{{v.isValue}} {{v.rpp_capai|number}} </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Sisa}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_sisa|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Simulasi}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_simulasi|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Simulasi_max}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_simulasi_max|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Aktual_Point}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_aktual_point|number}}\n                  </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </ion-grid>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'category'\">\n          <div *ngIf=\"iscorpcategory==0\" style=\"margin-top: -20px;\">\n            <center>\n              <h5>Tidak ada data pada bulan ini</h5>\n            </center>\n          </div>\n          <div  *ngIf=\"iscorpcategory==1\">\n          <ion-grid>\n            <div *ngFor=\"let v of target_corporate_category\" style=\"margin-top: -35px;\">\n              <div class=\"card_2\">\n                <div [innerHTML]=\"v.Bar_Title_Target\"></div>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Target}} </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_target|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Simulasi}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_simulasi|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Capai}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_capai|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Sisa}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_sisa|number}} </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </ion-grid>\n          </div>\n        </div>\n\n        \n        <div *ngSwitchCase=\"'produk'\" style=\"margin-top: -20px;\">\n          <div *ngIf=\"!header_target_dist && target_corporate_produk_detail ==null\">\n            <center>\n              <h5>Tidak ada data pada bulan ini</h5>\n            </center>\n          </div>\n          <div *ngIf=\"target_corporate_produk_detail !=null\">\n          <div *ngIf=\"!header_target_dist\">\n           \n          </div>\n          <div style=\"padding: 5px\" *ngIf=\"header_target_dist\">\n            <div [innerHTML]=\"header_target_dist\"></div>\n          </div>\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Target (Baspack) </ion-col>\n            <ion-col class=\"bonus-text_bold\">\n              {{target_corporate_produk.TARGET|number }}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Pencapaian </ion-col>\n            <ion-col class=\"bonus-text_bold\">\n              {{target_corporate_produk.PENCAPAIAN|number }}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Sisa Target </ion-col>\n            <ion-col class=\"bonus-text_bold\">\n              {{target_corporate_produk.SISA_TARGET|number }}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Total Sales </ion-col>\n            <ion-col class=\"bonus-text_bold\">{{target_corporate_produk.isValue}} {{target_corporate_produk.Total_Sales|number}} </ion-col>\n          </ion-row>\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Aktual Point </ion-col>\n            <ion-col class=\"bonus-text_bold\"> {{target_corporate_produk.Aktual_Point|number}} </ion-col>\n          </ion-row>\n\n          <ion-grid *ngFor=\"let v of target_corporate_produk_detail\">\n            <div class=\"card_2\" (click)=\"lihat_detail_corporate_distribution(v.BASEPACK_TITLE)\">\n              <center class=\"bonus-title_bold\">{{v.BASEPACK_TITLE}}</center>\n              <ion-row>\n                <ion-col class=\"bonus-title\"> Target (Pcs) </ion-col>\n                <ion-col class=\"bonus-text\"> {{v.TARGET|number}} Pcs</ion-col>\n              </ion-row>\n              <ion-row class=\"bonus-box\">\n                <ion-col class=\"bonus-title\"> Pencapaian (Pcs) </ion-col>\n                <ion-col class=\"bonus-text\"> {{v.QUANTITY|number}} Pcs</ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col class=\"bonus-title\"> Sisa Target (Pcs) </ion-col>\n                <ion-col class=\"bonus-text\"> {{v.SISA_TARGET|number}} Pcs</ion-col>\n              </ion-row>\n              \n            </div>\n          </ion-grid>\n        </div>\n      </div>\n    </div>\n    </div>\n\n    <div *ngSwitchCase=\"'homecare'\" >\n      <ion-segment [(ngModel)]=\"segmendetailhomecare\" style=\"color: blue\">\n        <!-- <ion-segment-button value=\"loyalty\">\n          <ion-label>LOYALTY</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"produk\">\n          <ion-label>PRODUK</ion-label>\n        </ion-segment-button> -->\n        <ion-segment-button value=\"category\">\n          <ion-label>CATEGORY</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n      <br />\n      <div [ngSwitch]=\"segmendetailhomecare\">\n        <div *ngSwitchCase=\"'loyalty'\">\n          <div *ngIf=\"!target_homecare_loyalty\">\n            <center>\n              <ion-spinner color=\"primary\" style=\"font-size: 100px;\"></ion-spinner>\n            </center>\n          </div>\n          <div *ngIf=\"target_homecare_loyalty\">\n            <div class=\"card_2\">\n              <div *ngFor=\"let v of target_homecare_loyalty\">\n                <div [innerHTML]=\"v.Bar_Title_Target\"></div>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Target}} </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_target|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Simulasi}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_simulasi|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Capai}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_capai|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Sisa}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_sisa|number}} </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'category'\" >\n          <div *ngIf=\"ishomecare_category==0\" style=\"margin-top: -20px;\">\n            <center >\n              <h5>Tidak ada data pada bulan ini</h5>\n            </center>\n          </div>\n          <ion-grid *ngIf=\"ishomecare_category==1\">\n            <div *ngFor=\"let v of target_homecare_category\" style=\"margin-top: -35px;\">\n              <div class=\"card_2\">\n                <div [innerHTML]=\"v.Bar_Title_Target\"></div>\n                <ion-row>\n                  <ion-col class=\"bonus-title\">{{v.Bar_Target}} </ion-col>\n                  <ion-col class=\"bonus-text\">{{v.isValue}} {{v.rpp_target|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Simulasi}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_simulasi|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Capai}} </ion-col>\n                  <ion-col class=\"bonus-text\">{{v.isValue}} {{v.rpp_capai|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Sisa}} </ion-col>\n                  <ion-col class=\"bonus-text\">{{v.rpp_sisa|number}} </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </ion-grid>\n        </div>\n        <div *ngSwitchCase=\"'produk2'\">\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Target (Baspack) </ion-col>\n            <ion-col class=\"bonus-text_bold\">\n              {{target_homecare_produk.TARGET|number }}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Pencapaian </ion-col>\n            <ion-col class=\"bonus-text_bold\">\n              {{target_homecare_produk.PENCAPAIAN|number }}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Sisa Target </ion-col>\n            <ion-col class=\"bonus-text_bold\">\n              {{target_homecare_produk.SISA_TARGET|number }}\n            </ion-col>\n          </ion-row>\n\n          <ion-grid *ngFor=\"let v of target_homecare_produk_detail\">\n            <div class=\"card_2\">\n              <center class=\"bonus-title_bold\">{{v.BASEPACK_TITLE}}</center>\n              <ion-row>\n                <ion-col class=\"bonus-title\"> Target (Psc) </ion-col>\n                <ion-col class=\"bonus-text\"> {{v.TARGET|number}} </ion-col>\n              </ion-row>\n              <ion-row class=\"bonus-box\">\n                <ion-col class=\"bonus-title\"> Pencapaian </ion-col>\n                <ion-col class=\"bonus-text\"> {{v.PENCAPAIAN|number}} </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col class=\"bonus-title\"> Sisa Target </ion-col>\n                <ion-col class=\"bonus-text\"> {{v.SISA_TARGET|number}} </ion-col>\n              </ion-row>\n            </div>\n          </ion-grid>\n        </div>\n      </div>\n    </div>\n\n    <div *ngSwitchCase=\"'personal_care'\">\n      <ion-segment [(ngModel)]=\"segmendetailpersonalcare\" style=\"color: blue\">\n        <!-- <ion-segment-button value=\"loyalty\">\n          <ion-label>LOYALTY</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"produk\">\n          <ion-label>PRODUK</ion-label>\n        </ion-segment-button> -->\n        <ion-segment-button value=\"category\">\n          <ion-label>CATEGORY</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n      <br />\n      <div [ngSwitch]=\"segmendetailpersonalcare\">\n        <div *ngSwitchCase=\"'loyalty'\">\n          <div *ngIf=\"!target_personal_loyalty\">\n            <center>\n              <ion-spinner color=\"primary\" style=\"font-size: 100px;\"></ion-spinner>\n            </center>\n          </div>\n          <div *ngIf=\"target_personal_loyalty\">\n            <div class=\"card_2\">\n              <div *ngFor=\"let v of target_personal_loyalty\">\n                <div [innerHTML]=\"v.Bar_Title_Target\"></div>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Target}} </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_target|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Simulasi}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_simulasi|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Capai}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_capai|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Sisa}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_sisa|number}} </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'category'\" >\n          <div *ngIf=\"istarget_personal_category==0\" style=\"margin-top: -20px;\">\n            <center >\n              <h5>Tidak ada data pada bulan ini</h5>\n            </center>\n          </div>\n          <ion-grid *ngIf=\"istarget_personal_category==1\">\n            <div *ngFor=\"let v of target_personal_category\" style=\"margin-top: -35px;\">\n              <div class=\"card_2\">\n                <div [innerHTML]=\"v.Bar_Title_Target\"></div>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Target}} </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.isValue}} {{v.rpp_target|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Simulasi}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_simulasi|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Capai}} </ion-col>\n                  <ion-col class=\"bonus-text\">{{v.isValue}} {{v.rpp_capai|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Sisa}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_sisa|number}} </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </ion-grid>\n        </div>\n        <div *ngSwitchCase=\"'produk'\">\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Target (Baspack) </ion-col>\n            <ion-col class=\"bonus-text_bold\">\n              {{target_personal_care_produk.TARGET|number }}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Pencapaian </ion-col>\n            <ion-col class=\"bonus-text_bold\">\n              {{target_personal_care_produk.PENCAPAIAN|number }}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Sisa Target </ion-col>\n            <ion-col class=\"bonus-text_bold\">\n              {{target_personal_care_produk.SISA_TARGET|number }}\n            </ion-col>\n          </ion-row>\n\n          <ion-grid *ngFor=\"let v of target_personal_produk_detail\">\n            <div class=\"card_2\">\n              <center class=\"bonus-title_bold\">{{v.BASEPACK_TITLE}}</center>\n              <ion-row>\n                <ion-col class=\"bonus-title\"> Target (Psc) </ion-col>\n                <ion-col class=\"bonus-text\"> {{v.TARGET|number}} </ion-col>\n              </ion-row>\n              <ion-row class=\"bonus-box\">\n                <ion-col class=\"bonus-title\"> Pencapaian </ion-col>\n                <ion-col class=\"bonus-text\"> {{v.PENCAPAIAN|number}} </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col class=\"bonus-title\"> Sisa Target </ion-col>\n                <ion-col class=\"bonus-text\"> {{v.SISA_TARGET|number}} </ion-col>\n              </ion-row>\n            </div>\n          </ion-grid>\n        </div>\n      </div>\n    </div>\n\n    <div *ngSwitchCase=\"'nutrition'\">\n      <ion-segment [(ngModel)]=\"segmendetailnutrition\" style=\"color: blue\">\n        <!-- <ion-segment-button value=\"loyalty\">\n          <ion-label>LOYALTY</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"produk\">\n          <ion-label>PRODUK</ion-label>\n        </ion-segment-button> -->\n        <ion-segment-button value=\"category\">\n          <ion-label>CATEGORY</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n      <br />\n      <div [ngSwitch]=\"segmendetailnutrition\">\n        <div *ngSwitchCase=\"'loyalty'\">\n          <div *ngIf=\"!target_nutrition_loyalty\">\n            <center>\n              <ion-spinner color=\"primary\" style=\"font-size: 100px;\"></ion-spinner>\n            </center>\n          </div>\n          <div *ngIf=\"target_nutrition_loyalty\">\n            <div class=\"card_2\">\n              <div *ngFor=\"let v of target_nutrition_loyalty\">\n                <div [innerHTML]=\"v.Bar_Title_Target\"></div>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Target}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_target|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Simulasi}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_simulasi|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Capai}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_capai|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Sisa}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_sisa|number}} </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'category'\" >\n          <div *ngIf=\"istarget_nutrition_category==0\" style=\"margin-top: -20px;\">\n            <center>\n              <h5>Tidak ada data pada bulan ini</h5>\n            </center>\n          </div>\n          <ion-grid *ngIf=\"istarget_nutrition_category==1\">\n            <div *ngFor=\"let v of target_nutrition_category\" style=\"margin-top: -35px;\">\n              <div class=\"card_2\">\n                <div [innerHTML]=\"v.Bar_Title_Target\"></div>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Target}} </ion-col>\n                  <ion-col class=\"bonus-text\">{{v.isValue}} {{v.rpp_target|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Simulasi}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_simulasi|number}} </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Capai}} </ion-col>\n                  <ion-col class=\"bonus-text\">{{v.isValue}} {{v.rpp_capai|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Sisa}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_sisa|number}} </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </ion-grid>\n        </div>\n        <div *ngSwitchCase=\"'produk'\">\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Target (Baspack) </ion-col>\n            <ion-col class=\"bonus-text_bold\">\n              {{target_nutrition_produk.TARGET|number }}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Pencapaian </ion-col>\n            <ion-col class=\"bonus-text_bold\">\n              {{target_nutrition_produk.PENCAPAIAN|number }}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Sisa Target </ion-col>\n            <ion-col class=\"bonus-text_bold\">\n              {{target_nutrition_produk.SISA_TARGET|number }}\n            </ion-col>\n          </ion-row>\n\n          <ion-grid *ngFor=\"let v of target_nutrition_produk_detail\">\n            <div class=\"card_2\">\n              <center class=\"bonus-title_bold\">{{v.BASEPACK_TITLE}}</center>\n              <ion-row>\n                <ion-col class=\"bonus-title\"> Target (Psc) </ion-col>\n                <ion-col class=\"bonus-text\"> {{v.TARGET|number}} </ion-col>\n              </ion-row>\n              <ion-row class=\"bonus-box\">\n                <ion-col class=\"bonus-title\"> Pencapaian </ion-col>\n                <ion-col class=\"bonus-text\"> {{v.PENCAPAIAN|number}} </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col class=\"bonus-title\"> Sisa Target </ion-col>\n                <ion-col class=\"bonus-text\"> {{v.SISA_TARGET|number}} </ion-col>\n              </ion-row>\n            </div>\n          </ion-grid>\n        </div>\n      </div>\n    </div>\n\n    <div *ngSwitchCase=\"'bandw'\">\n      <ion-segment [(ngModel)]=\"segmendetailbw\" style=\"color: blue\">\n        <!-- <ion-segment-button value=\"loyalty\">\n          <ion-label>LOYALTY</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"produk\">\n          <ion-label>PRODUK</ion-label>\n        </ion-segment-button> -->\n        <ion-segment-button value=\"category\">\n          <ion-label>CATEGORY</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n      <br />\n      <div [ngSwitch]=\"segmendetailbw\">\n        <div *ngSwitchCase=\"'loyalty'\">\n          <div *ngIf=\"!target_bw_loyalty\">\n            <center>\n              <ion-spinner color=\"primary\" style=\"font-size: 100px;\"></ion-spinner>\n            </center>\n          </div>\n          <div *ngIf=\"target_bw_loyalty\">\n            <div class=\"card_2\">\n              <div *ngFor=\"let v of target_bw_loyalty\">\n                <div [innerHTML]=\"v.Bar_Title_Target\"></div>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Target}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_target|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Simulasi}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_simulasi|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Capai}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_capai|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Sisa}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_sisa|number}} </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'category'\" >\n          <div *ngIf=\"istarget_bw_category==0\" style=\"margin-top: -20px;\">\n            <center>\n              <h5>Tidak ada data pada bulan ini</h5>\n            </center>\n          </div>\n          <ion-grid *ngIf=\"istarget_bw_category==1\">\n            <div *ngFor=\"let v of target_bw_category\" style=\"margin-top: -35px;\">\n              <div class=\"card_2\">\n                <div [innerHTML]=\"v.Bar_Title_Target\"></div>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Target}} </ion-col>\n                  <ion-col class=\"bonus-text\">{{v.isValue}} {{v.rpp_target|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Simulasi}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_simulasi|number}} </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Capai}} </ion-col>\n                  <ion-col class=\"bonus-text\">{{v.isValue}} {{v.rpp_capai|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Sisa}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_sisa|number}} </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </ion-grid>\n        </div>\n        <div *ngSwitchCase=\"'produk'\">\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Target (Baspack) </ion-col>\n            <ion-col class=\"bonus-text_bold\">\n              {{target_bw_produk.TARGET|number }}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Pencapaian </ion-col>\n            <ion-col class=\"bonus-text_bold\">\n              {{target_bw_produk.PENCAPAIAN|number }}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Sisa Target </ion-col>\n            <ion-col class=\"bonus-text_bold\">\n              {{target_bw_produk.SISA_TARGET|number }}\n            </ion-col>\n          </ion-row>\n\n          <ion-grid *ngFor=\"let v of target_bw_produk_detail\">\n            <div class=\"card_2\">\n              <center class=\"bonus-title_bold\">{{v.BASEPACK_TITLE}}</center>\n              <ion-row>\n                <ion-col class=\"bonus-title\"> Target (Psc) </ion-col>\n                <ion-col class=\"bonus-text\"> {{v.TARGET|number}} </ion-col>\n              </ion-row>\n              <ion-row class=\"bonus-box\">\n                <ion-col class=\"bonus-title\"> Pencapaian </ion-col>\n                <ion-col class=\"bonus-text\"> {{v.PENCAPAIAN|number}} </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col class=\"bonus-title\"> Sisa Target </ion-col>\n                <ion-col class=\"bonus-text\"> {{v.SISA_TARGET|number}} </ion-col>\n              </ion-row>\n            </div>\n          </ion-grid>\n        </div>\n      </div>\n    </div>\n  </div>\n  <p>&nbsp;</p>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_riwayat-transaksi_riwayat-transaksi_module_ts.js.map