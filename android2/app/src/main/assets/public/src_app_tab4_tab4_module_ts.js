"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab4_tab4_module_ts"],{

/***/ 5355:
/*!*********************************************!*\
  !*** ./src/app/tab4/tab4-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageRoutingModule": () => (/* binding */ Tab4PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page */ 3631);




const routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page
    }
];
let Tab4PageRoutingModule = class Tab4PageRoutingModule {
};
Tab4PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Tab4PageRoutingModule);



/***/ }),

/***/ 2486:
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageModule": () => (/* binding */ Tab4PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4-routing.module */ 5355);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab4.page */ 3631);







let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tab4_routing_module__WEBPACK_IMPORTED_MODULE_0__.Tab4PageRoutingModule
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_1__.Tab4Page]
    })
], Tab4PageModule);



/***/ }),

/***/ 3631:
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4Page": () => (/* binding */ Tab4Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab4_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page.html?ngResource */ 9184);
/* harmony import */ var _tab4_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab4.page.scss?ngResource */ 7432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dolphin.service */ 2171);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _modals_resi_modal_resi_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/resi-modal/resi-modal.page */ 3801);
/* harmony import */ var _modals_detail_corporate_distribution_detail_corporate_distribution_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/detail-corporate-distribution/detail-corporate-distribution.page */ 1258);









let Tab4Page = class Tab4Page {
    constructor(dolphinService, router, alertController, modalController, loadingController) {
        this.dolphinService = dolphinService;
        this.router = router;
        this.alertController = alertController;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.segmen = 'banner_bu_corporate';
        this.segmendetailcorp = 'fop';
        this.segmendetailhomecare = 'category';
        this.segmendetailpersonalcare = 'category';
        this.segmendetailnutrition = 'category';
        this.segmendetailbw = 'category';
        this.getdata();
        this.banner_target_bu();
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
Tab4Page.ctorParameters = () => [
    { type: _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__.DolphinService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController }
];
Tab4Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-tab4',
        template: _tab4_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab4_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab4Page);



/***/ }),

/***/ 7432:
/*!************************************************!*\
  !*** ./src/app/tab4/tab4.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-title {\n  color: #f5f6f8;\n}\n\n.background {\n  background-color: #1505a8;\n}\n\n.boxed {\n  display: block;\n  border-bottom: 1px solid #e0e0e0;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.inv {\n  display: block;\n  font-size: 0.8em;\n  line-height: 2px;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: 600;\n  color: #3D5CFF !important;\n}\n\n.inv2 {\n  display: block;\n  font-size: 0.8em;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: 600;\n  color: #3D5CFF !important;\n}\n\n.dt {\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 0.7em;\n}\n\n.amount {\n  font-size: 0.8em;\n  line-height: 2px;\n  text-align: right;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.amount_invoice {\n  font-size: 0.8em;\n  text-align: right;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.bonus-title {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.7em;\n}\n\n.bonus-title_invoice {\n  color: orange;\n  font-size: 0.8em;\n}\n\n.bonus-title_bold {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.detail_poin {\n  color: #e8712c;\n  font-weight: bold;\n  padding: 0;\n}\n\n.bonus-text {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.7em;\n  text-align: right;\n  font-weight: 500;\n}\n\n.bonus-text-loyality {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.12px;\n  text-align: right;\n  font-weight: 500;\n}\n\n.bonus-text_bold {\n  color: rgba(0, 0, 0, 0.6);\n  text-align: right;\n  font-weight: 500;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.bonus-box {\n  background-color: #f5f6ff;\n  border-radius: 5px;\n  margin-bottom: 3px;\n}\n\n.bonus-box_2 {\n  background-color: #effafb;\n  border-radius: 5px;\n  margin-bottom: 3px;\n}\n\n.r-name {\n  display: block;\n  font-size: 0.8em;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: 600;\n  color: #3D5CFF !important;\n}\n\n.r-no {\n  font-size: 0.7em;\n  text-align: right;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.r-date {\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 0.7em;\n}\n\n.r-poin {\n  font-size: 0.7em;\n  float: right;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.cekresi {\n  float: right;\n  padding-left: 5px;\n  color: #3D5CFF !important;\n}\n\n.lapor {\n  color: #ad0023 !important;\n}\n\n.selesai {\n  color: #1b6c00 !important;\n}\n\n.statuses {\n  font-weight: bold;\n  color: #7d93ff !important;\n}\n\n.statuses-selesai {\n  font-weight: bold;\n  color: #00bb51 !important;\n}\n\n.top5-head {\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-right: 10px;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background-color: #3D5CFF;\n}\n\n.top5-title {\n  color: #FFF;\n  font-weight: 500;\n  display: block;\n  font-size: 0.9em;\n}\n\n.top5-content {\n  margin-left: 10px;\n  margin-right: 10px;\n  border-width: 0px 1px 1px 1px;\n  border-style: solid;\n  border-color: #e1e1e1;\n}\n\n.top5-cat {\n  font-size: 0.9em;\n  font-weight: 500;\n}\n\n.top5-rightmonth {\n  font-size: 0.7em;\n  color: #4b80f0;\n  text-align: right;\n}\n\n.top5-leftmonth {\n  font-size: 0.7em;\n  color: #ec7b9c;\n}\n\n.top5-left, .top5-right {\n  font-size: 0.8em;\n  color: #444;\n}\n\n.top5-right {\n  text-align: right;\n}\n\n.detail_list_poin {\n  border-style: solid;\n  border-width: 0.5px;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 12px;\n}\n\n.card_2 {\n  /* Add shadows to create the \"card\" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  padding: 10px;\n  border-radius: 10px;\n}\n\n.card_3 {\n  /* Add shadows to create the \"card\" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  padding: 10px;\n  border-radius: 10px;\n  margin-top: -35px;\n}\n\n/* On mouse-over, add a deeper shadow */\n\n.card_2:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n/* Add some padding inside the card container */\n\n.ion-segment-buttons {\n  width: 590px;\n  min-width: 150px;\n}\n\nion-spinner {\n  width: 0.8em;\n  height: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7QUFFSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQUVKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFJSjs7QUFEQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUlKOztBQURBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBREE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFJSjs7QUFEQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBSUo7O0FBREE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FBSUo7O0FBREE7RUFFSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBR0o7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBSUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFFQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUtBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUZKOztBQUtBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUtBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUtBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBRko7O0FBS0E7RUFDQSxpQkFBQTtBQUZBOztBQUlBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQURKOztBQUdBO0VBQ0ksNENBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0U7RUFDRSw0Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdFLHVDQUFBOztBQUNBO0VBQ0UsMkNBQUE7QUFBSjs7QUFHRSwrQ0FBQTs7QUFFQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQURKOztBQUdFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFBSiIsImZpbGUiOiJ0YWI0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XG4gICAgY29sb3I6ICNmNWY2Zjg7XG59XG4uYmFja2dyb3VuZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUwNWE4O1xufVxuXG5cbi5ib3hlZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uaW52IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgbGluZS1oZWlnaHQ6MnB4O1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC43KTtcbiAgICBmb250LXdlaWdodDo2MDA7XG4gICAgY29sb3I6ICMzRDVDRkYgIWltcG9ydGFudDtcbn1cblxuLmludjIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNyk7XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgIGNvbG9yOiAjM0Q1Q0ZGICFpbXBvcnRhbnQ7XG59XG5cbi5kdCB7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xuICAgIGZvbnQtc2l6ZTogLjdlbTtcbn1cblxuLmFtb3VudCB7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIGxpbmUtaGVpZ2h0OjJweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC43KTtcbn1cblxuLmFtb3VudF9pbnZvaWNlIHtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xufVxuXG4uYm9udXMtdGl0bGUge1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcbiAgICBmb250LXNpemU6IC43ZW07XG59XG5cbi5ib251cy10aXRsZV9pbnZvaWNlIHtcbiAgICBjb2xvcjogb3JhbmdlO1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbn1cbi5ib251cy10aXRsZV9ib2xke1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kZXRhaWxfcG9pbiB7XG4gICAgY29sb3I6ICNlODcxMmM7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLmJvbnVzLXRleHQge1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcbiAgICBmb250LXNpemU6IC43ZW07XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5ib251cy10ZXh0LWxveWFsaXR5IHtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNik7XG4gICAgZm9udC1zaXplOiAuMTJweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuLmJvbnVzLXRleHRfYm9sZCB7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjYpO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYm9udXMtYm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG5cbi5ib251cy1ib3hfMiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZmFmYjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuXG4uci1uYW1lIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xuICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICBjb2xvcjogIzNENUNGRiAhaW1wb3J0YW50O1xufVxuXG4uci1ubyB7XG4gICAgZm9udC1zaXplOiAuN2VtO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xufVxuXG4uci1kYXRlIHtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNSk7XG4gICAgZm9udC1zaXplOiAuN2VtO1xufVxuXG4uci1wb2luIHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcjtcbiAgICBmb250LXNpemU6IC43ZW07XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xuICAgIC8vIHBhZGRpbmc6NHB4O1xuICAgIC8vIGJvcmRlci1yYWRpdXM6M3B4O1xuXG59XG5cbi5jZWtyZXNpIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZy1sZWZ0OjVweDtcbiAgICBjb2xvcjogIzNENUNGRiAhaW1wb3J0YW50O1xufVxuXG4ubGFwb3Ige1xuICAgIGNvbG9yOiAjYWQwMDIzICFpbXBvcnRhbnQ7XG59XG5cbi5zZWxlc2FpIHtcbiAgICBjb2xvcjogIzFiNmMwMCAhaW1wb3J0YW50O1xufVxuXG4uc3RhdHVzZXMge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjN2Q5M2ZmICFpbXBvcnRhbnQ7XG59XG5cbi5zdGF0dXNlcy1zZWxlc2FpIHsgXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMwMGJiNTEgIWltcG9ydGFudDtcbn1cblxuXG4udG9wNS1oZWFkIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRDVDRkY7XG59XG5cbi50b3A1LXRpdGxlIHtcbiAgICBjb2xvcjojRkZGO1xuICAgIFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAuOWVtO1xufVxuXG4udG9wNS1jb250ZW50IHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyLXdpZHRoOiAwcHggMXB4IDFweCAxcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6ICNlMWUxZTE7XG59XG5cbi50b3A1LWNhdCB7XG4gICAgZm9udC1zaXplOiAuOWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50b3A1LXJpZ2h0bW9udGgge1xuICAgIGZvbnQtc2l6ZTogLjdlbTtcbiAgICBjb2xvcjogIzRiODBmMDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRvcDUtbGVmdG1vbnRoIHtcbiAgICBmb250LXNpemU6IC43ZW07XG4gICAgY29sb3I6ICNlYzdiOWM7XG59XG5cbi50b3A1LWxlZnQsIC50b3A1LXJpZ2h0IHtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgY29sb3I6ICM0NDQ7XG59XG5cbi50b3A1LXJpZ2h0IHtcbnRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmRldGFpbF9saXN0X3BvaW57XG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkOyBcbiAgICBib3JkZXItd2lkdGg6IDAuNXB4OyBcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNik7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNhcmRfMiB7XG4gICAgLyogQWRkIHNoYWRvd3MgdG8gY3JlYXRlIHRoZSBcImNhcmRcIiBlZmZlY3QgKi9cbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cblxuICAuY2FyZF8zIHtcbiAgICAvKiBBZGQgc2hhZG93cyB0byBjcmVhdGUgdGhlIFwiY2FyZFwiIGVmZmVjdCAqL1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAtMzVweDtcbiAgfVxuICBcbiAgLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZGVlcGVyIHNoYWRvdyAqL1xuICAuY2FyZF8yOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpO1xuICB9XG4gIFxuICAvKiBBZGQgc29tZSBwYWRkaW5nIGluc2lkZSB0aGUgY2FyZCBjb250YWluZXIgKi9cbiAgXG4gIC5pb24tc2VnbWVudC1idXR0b25zIHtcbiAgICB3aWR0aDogNTkwcHg7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgfVxuICBpb24tc3Bpbm5lciB7XG4gICAgd2lkdGg6IDAuOGVtO1xuICAgIGhlaWdodDogM2VtO1xuICB9XG4gIl19 */";

/***/ }),

/***/ 9184:
/*!************************************************!*\
  !*** ./src/app/tab4/tab4.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"background\" color=\"unilever\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"arrow-back-outline\"></ion-back-button>\n    </ion-buttons>\n    <ion-title> Target </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"refresh()\">\n        <ion-icon slot=\"icon-only\" name=\"refresh-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-grid color=\"unilever\">\n    <ion-row>\n      <ion-col *ngIf=\"banner_bu_corporate=='1'\">\n        <ion-segment\n          [(ngModel)]=\"segmen\"\n          [scrollable]=\"false\"\n          mode=\"ios\"\n          value=\"target\"\n          style=\"background-color: #ffd08a\"\n        >\n          <ion-segment-button value=\"banner_bu_corporate\">\n            <ion-label>{{nama_bu_corp}}</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n      <ion-col *ngIf=\"home_care=='1'\">\n        <ion-segment\n          [(ngModel)]=\"segmen\"\n          [scrollable]=\"false\"\n          mode=\"ios\"\n          value=\"target\"\n          style=\"background-color: #ffd08a\"\n        >\n          <ion-segment-button value=\"homecare\">\n            <ion-label>{{nama_home_care}}</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n      <ion-col *ngIf=\"personal_care=='1'\">\n        <ion-segment\n          [(ngModel)]=\"segmen\"\n          [scrollable]=\"false\"\n          mode=\"ios\"\n          value=\"target\"\n          style=\"background-color: #ffd08a\"\n        >\n          <ion-segment-button value=\"personal_care\">\n            <ion-label>{{nama_personal_care}}</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n      <ion-col *ngIf=\"nutrition=='1'\">\n        <ion-segment\n          [(ngModel)]=\"segmen\"\n          [scrollable]=\"false\"\n          mode=\"ios\"\n          value=\"target\"\n          style=\"background-color: #ffd08a\"\n        >\n          <ion-segment-button value=\"nutrition\">\n            <ion-label>{{nama_nutrition}}</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n      <ion-col *ngIf=\"bw=='1'\">\n        <ion-segment\n          [(ngModel)]=\"segmen\"\n          [scrollable]=\"false\"\n          mode=\"ios\"\n          value=\"target\"\n          style=\"background-color: #ffd08a\"\n        >\n          <ion-segment-button value=\"bandw\">\n            <ion-label>{{nama_bw}}</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content>\n  <div [ngSwitch]=\"segmen\">\n    <div *ngSwitchCase=\"'banner_bu_corporate'\">\n      <div>\n        <ion-segment [(ngModel)]=\"segmendetailcorp\" style=\"color: blue\">\n          <ion-segment-button value=\"fop\">\n            <ion-label>FOP</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"bonus_growth\">\n            <ion-label>BONUS GROWTH</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"produk\">\n            <ion-label>DISTRIBUTION</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n        <ion-segment [(ngModel)]=\"segmendetailcorp\" style=\"color: blue\">\n          <!-- <ion-segment-button value=\"loyalty\">\n          <ion-label>LOYALTY</ion-label>\n        </ion-segment-button> -->\n          <!-- <ion-segment-button value=\"category\">\n            <ion-label>CATEGORY</ion-label>\n          </ion-segment-button> -->\n        </ion-segment>\n      </div>\n      <br />\n\n      <div [ngSwitch]=\"segmendetailcorp\">\n        <div *ngSwitchCase=\"'loyalty'\" >\n          <div *ngIf=\"target_corporate_loyalty\">\n            <div class=\"card_2\" *ngFor=\"let v of target_corporate_loyalty\">\n              <div>\n                <div [innerHTML]=\"v.Bar_Title_Target\"></div>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Target}} </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_target|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Simulasi}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_simulasi|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Capai}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_capai|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Sisa}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_sisa|number}} </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'fop'\">\n          <div *ngIf=\"!fop_poin\">\n            <center>\n              <ion-spinner color=\"primary\" style=\"font-size: 100px;\"></ion-spinner>\n            </center>\n          </div>\n          <div *ngIf=\"isfop==0\" style=\"margin-top: -20px;\">\n            <center >\n              <h5>Tidak ada data pada bulan ini</h5>\n            </center>\n          </div>\n          <div  *ngIf=\"isfop==1\">\n          <div *ngIf=\"!fop_poin\">\n            <center>\n              <ion-spinner color=\"primary\" style=\"font-size: 100px;\"></ion-spinner>\n            </center>\n          </div>\n          <ion-grid *ngIf=\"fop_poin\" style=\"margin-top: -35px;\">\n            <div *ngFor=\"let v of fop_poin\">\n              <div class=\"card_2\">\n                <div [innerHTML]=\"v.Bar_Title_Target\"></div>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Target}} </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.target_fop|number}}\n                  </ion-col>\n                </ion-row>\n                <!-- <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Simulasi}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_simulasi}} </ion-col>\n                </ion-row> -->\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Pencapaian}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_total_fop|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row >\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Total_Sales}} </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.isValue}} {{v.rpp_total_sales|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Simulasi}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.simulasi_poin|number}}\n                  </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </ion-grid>\n        </div>\n        </div>\n\n        <div *ngSwitchCase=\"'bonus_growth'\">\n          <div *ngIf=\"isgrowth==0\" style=\"margin-top: -20px;\">\n            <center>\n              <h5>Tidak ada data pada bulan ini</h5>\n            </center>\n          </div>\n          <div  *ngIf=\"isgrowth==1\">\n          <ion-grid>\n            <div *ngFor=\"let v of bonus_growth\" style=\"margin-top: -35px;\">\n              <!-- <div class=\"card_2\">\n                <div [innerHTML]=\"v.Bar_Title_Target\"></div>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Target}} </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_target|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Simulasi}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_simulasi|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Capai}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_capai|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Sisa}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_sisa|number}} </ion-col>\n                </ion-row>\n              </div> -->\n              <div class=\"card_2\">\n                <div [innerHTML]=\"v.Bar_Title_Target\"></div>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Target}} </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_target|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Capai}} </ion-col>\n                  <ion-col class=\"bonus-text\">{{v.isValue}} {{v.rpp_capai|number}} </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Sisa}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_sisa|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Simulasi}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_simulasi|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Simulasi_max}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_simulasi_max|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Aktual_Point}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_aktual_point|number}}\n                  </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </ion-grid>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'category'\">\n          <div *ngIf=\"iscorpcategory==0\" style=\"margin-top: -20px;\">\n            <center>\n              <h5>Tidak ada data pada bulan ini</h5>\n            </center>\n          </div>\n          <div  *ngIf=\"iscorpcategory==1\">\n          <ion-grid>\n            <div *ngFor=\"let v of target_corporate_category\" style=\"margin-top: -35px;\">\n              <div class=\"card_2\">\n                <div [innerHTML]=\"v.Bar_Title_Target\"></div>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Target}} </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_target|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Simulasi}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_simulasi|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Capai}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_capai|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Sisa}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_sisa|number}} </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </ion-grid>\n          </div>\n        </div>\n\n        \n        <div *ngSwitchCase=\"'produk'\" style=\"margin-top: -20px;\">\n          <div *ngIf=\"!header_target_dist && target_corporate_produk_detail ==null\">\n            <center>\n              <h5>Tidak ada data pada bulan ini</h5>\n            </center>\n          </div>\n          <div *ngIf=\"target_corporate_produk_detail !=null\">\n          <div *ngIf=\"!header_target_dist\">\n           \n          </div>\n          <div style=\"padding: 5px\" *ngIf=\"header_target_dist\">\n            <div [innerHTML]=\"header_target_dist\"></div>\n          </div>\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Target (Baspack) </ion-col>\n            <ion-col class=\"bonus-text_bold\">\n              {{target_corporate_produk.TARGET|number }}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Pencapaian </ion-col>\n            <ion-col class=\"bonus-text_bold\">\n              {{target_corporate_produk.PENCAPAIAN|number }}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Sisa Target </ion-col>\n            <ion-col class=\"bonus-text_bold\">\n              {{target_corporate_produk.SISA_TARGET|number }}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Total Sales </ion-col>\n            <ion-col class=\"bonus-text_bold\">{{target_corporate_produk.isValue}} {{target_corporate_produk.Total_Sales|number}} </ion-col>\n          </ion-row>\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Aktual Point </ion-col>\n            <ion-col class=\"bonus-text_bold\"> {{target_corporate_produk.Aktual_Point|number}} </ion-col>\n          </ion-row>\n\n          <ion-grid *ngFor=\"let v of target_corporate_produk_detail\">\n            <div class=\"card_2\" (click)=\"lihat_detail_corporate_distribution(v.BASEPACK_TITLE)\">\n              <center class=\"bonus-title_bold\">{{v.BASEPACK_TITLE}}</center>\n              <ion-row>\n                <ion-col class=\"bonus-title\"> Target (Pcs) </ion-col>\n                <ion-col class=\"bonus-text\"> {{v.TARGET|number}} Pcs</ion-col>\n              </ion-row>\n              <ion-row class=\"bonus-box\">\n                <ion-col class=\"bonus-title\"> Pencapaian (Pcs) </ion-col>\n                <ion-col class=\"bonus-text\"> {{v.QUANTITY|number}} Pcs</ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col class=\"bonus-title\"> Sisa Target (Pcs) </ion-col>\n                <ion-col class=\"bonus-text\"> {{v.SISA_TARGET|number}} Pcs</ion-col>\n              </ion-row>\n              \n            </div>\n          </ion-grid>\n        </div>\n      </div>\n    </div>\n    </div>\n\n    <div *ngSwitchCase=\"'homecare'\" >\n      <ion-segment [(ngModel)]=\"segmendetailhomecare\" style=\"color: blue\">\n        <!-- <ion-segment-button value=\"loyalty\">\n          <ion-label>LOYALTY</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"produk\">\n          <ion-label>PRODUK</ion-label>\n        </ion-segment-button> -->\n        <ion-segment-button value=\"category\">\n          <ion-label>CATEGORY</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n      <br />\n      <div [ngSwitch]=\"segmendetailhomecare\">\n        <div *ngSwitchCase=\"'loyalty'\">\n          <div *ngIf=\"!target_homecare_loyalty\">\n            <center>\n              <ion-spinner color=\"primary\" style=\"font-size: 100px;\"></ion-spinner>\n            </center>\n          </div>\n          <div *ngIf=\"target_homecare_loyalty\">\n            <div class=\"card_2\">\n              <div *ngFor=\"let v of target_homecare_loyalty\">\n                <div [innerHTML]=\"v.Bar_Title_Target\"></div>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Target}} </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_target|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Simulasi}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_simulasi|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Capai}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_capai|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Sisa}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_sisa|number}} </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'category'\" >\n          <div *ngIf=\"ishomecare_category==0\" style=\"margin-top: -20px;\">\n            <center >\n              <h5>Tidak ada data pada bulan ini</h5>\n            </center>\n          </div>\n          <ion-grid *ngIf=\"ishomecare_category==1\">\n            <div *ngFor=\"let v of target_homecare_category\" style=\"margin-top: -35px;\">\n              <div class=\"card_2\">\n                <div [innerHTML]=\"v.Bar_Title_Target\"></div>\n                <ion-row>\n                  <ion-col class=\"bonus-title\">{{v.Bar_Target}} </ion-col>\n                  <ion-col class=\"bonus-text\">{{v.isValue}} {{v.rpp_target|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Simulasi}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_simulasi|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Capai}} </ion-col>\n                  <ion-col class=\"bonus-text\">{{v.isValue}} {{v.rpp_capai|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Sisa}} </ion-col>\n                  <ion-col class=\"bonus-text\">{{v.rpp_sisa|number}} </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </ion-grid>\n        </div>\n        <div *ngSwitchCase=\"'produk2'\">\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Target (Baspack) </ion-col>\n            <ion-col class=\"bonus-text_bold\">\n              {{target_homecare_produk.TARGET|number }}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Pencapaian </ion-col>\n            <ion-col class=\"bonus-text_bold\">\n              {{target_homecare_produk.PENCAPAIAN|number }}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Sisa Target </ion-col>\n            <ion-col class=\"bonus-text_bold\">\n              {{target_homecare_produk.SISA_TARGET|number }}\n            </ion-col>\n          </ion-row>\n\n          <ion-grid *ngFor=\"let v of target_homecare_produk_detail\">\n            <div class=\"card_2\">\n              <center class=\"bonus-title_bold\">{{v.BASEPACK_TITLE}}</center>\n              <ion-row>\n                <ion-col class=\"bonus-title\"> Target (Psc) </ion-col>\n                <ion-col class=\"bonus-text\"> {{v.TARGET|number}} </ion-col>\n              </ion-row>\n              <ion-row class=\"bonus-box\">\n                <ion-col class=\"bonus-title\"> Pencapaian </ion-col>\n                <ion-col class=\"bonus-text\"> {{v.PENCAPAIAN|number}} </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col class=\"bonus-title\"> Sisa Target </ion-col>\n                <ion-col class=\"bonus-text\"> {{v.SISA_TARGET|number}} </ion-col>\n              </ion-row>\n            </div>\n          </ion-grid>\n        </div>\n      </div>\n    </div>\n\n    <div *ngSwitchCase=\"'personal_care'\">\n      <ion-segment [(ngModel)]=\"segmendetailpersonalcare\" style=\"color: blue\">\n        <!-- <ion-segment-button value=\"loyalty\">\n          <ion-label>LOYALTY</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"produk\">\n          <ion-label>PRODUK</ion-label>\n        </ion-segment-button> -->\n        <ion-segment-button value=\"category\">\n          <ion-label>CATEGORY</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n      <br />\n      <div [ngSwitch]=\"segmendetailpersonalcare\">\n        <div *ngSwitchCase=\"'loyalty'\">\n          <div *ngIf=\"!target_personal_loyalty\">\n            <center>\n              <ion-spinner color=\"primary\" style=\"font-size: 100px;\"></ion-spinner>\n            </center>\n          </div>\n          <div *ngIf=\"target_personal_loyalty\">\n            <div class=\"card_2\">\n              <div *ngFor=\"let v of target_personal_loyalty\">\n                <div [innerHTML]=\"v.Bar_Title_Target\"></div>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Target}} </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_target|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Simulasi}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_simulasi|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Capai}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_capai|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Sisa}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_sisa|number}} </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'category'\" >\n          <div *ngIf=\"istarget_personal_category==0\" style=\"margin-top: -20px;\">\n            <center >\n              <h5>Tidak ada data pada bulan ini</h5>\n            </center>\n          </div>\n          <ion-grid *ngIf=\"istarget_personal_category==1\">\n            <div *ngFor=\"let v of target_personal_category\" style=\"margin-top: -35px;\">\n              <div class=\"card_2\">\n                <div [innerHTML]=\"v.Bar_Title_Target\"></div>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Target}} </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.isValue}} {{v.rpp_target|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Simulasi}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_simulasi|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Capai}} </ion-col>\n                  <ion-col class=\"bonus-text\">{{v.isValue}} {{v.rpp_capai|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Sisa}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_sisa|number}} </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </ion-grid>\n        </div>\n        <div *ngSwitchCase=\"'produk'\">\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Target (Baspack) </ion-col>\n            <ion-col class=\"bonus-text_bold\">\n              {{target_personal_care_produk.TARGET|number }}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Pencapaian </ion-col>\n            <ion-col class=\"bonus-text_bold\">\n              {{target_personal_care_produk.PENCAPAIAN|number }}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Sisa Target </ion-col>\n            <ion-col class=\"bonus-text_bold\">\n              {{target_personal_care_produk.SISA_TARGET|number }}\n            </ion-col>\n          </ion-row>\n\n          <ion-grid *ngFor=\"let v of target_personal_produk_detail\">\n            <div class=\"card_2\">\n              <center class=\"bonus-title_bold\">{{v.BASEPACK_TITLE}}</center>\n              <ion-row>\n                <ion-col class=\"bonus-title\"> Target (Psc) </ion-col>\n                <ion-col class=\"bonus-text\"> {{v.TARGET|number}} </ion-col>\n              </ion-row>\n              <ion-row class=\"bonus-box\">\n                <ion-col class=\"bonus-title\"> Pencapaian </ion-col>\n                <ion-col class=\"bonus-text\"> {{v.PENCAPAIAN|number}} </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col class=\"bonus-title\"> Sisa Target </ion-col>\n                <ion-col class=\"bonus-text\"> {{v.SISA_TARGET|number}} </ion-col>\n              </ion-row>\n            </div>\n          </ion-grid>\n        </div>\n      </div>\n    </div>\n\n    <div *ngSwitchCase=\"'nutrition'\">\n      <ion-segment [(ngModel)]=\"segmendetailnutrition\" style=\"color: blue\">\n        <!-- <ion-segment-button value=\"loyalty\">\n          <ion-label>LOYALTY</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"produk\">\n          <ion-label>PRODUK</ion-label>\n        </ion-segment-button> -->\n        <ion-segment-button value=\"category\">\n          <ion-label>CATEGORY</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n      <br />\n      <div [ngSwitch]=\"segmendetailnutrition\">\n        <div *ngSwitchCase=\"'loyalty'\">\n          <div *ngIf=\"!target_nutrition_loyalty\">\n            <center>\n              <ion-spinner color=\"primary\" style=\"font-size: 100px;\"></ion-spinner>\n            </center>\n          </div>\n          <div *ngIf=\"target_nutrition_loyalty\">\n            <div class=\"card_2\">\n              <div *ngFor=\"let v of target_nutrition_loyalty\">\n                <div [innerHTML]=\"v.Bar_Title_Target\"></div>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Target}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_target|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Simulasi}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_simulasi|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Capai}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_capai|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Sisa}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_sisa|number}} </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'category'\" >\n          <div *ngIf=\"istarget_nutrition_category==0\" style=\"margin-top: -20px;\">\n            <center>\n              <h5>Tidak ada data pada bulan ini</h5>\n            </center>\n          </div>\n          <ion-grid *ngIf=\"istarget_nutrition_category==1\">\n            <div *ngFor=\"let v of target_nutrition_category\" style=\"margin-top: -35px;\">\n              <div class=\"card_2\">\n                <div [innerHTML]=\"v.Bar_Title_Target\"></div>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Target}} </ion-col>\n                  <ion-col class=\"bonus-text\">{{v.isValue}} {{v.rpp_target|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Simulasi}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_simulasi|number}} </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Capai}} </ion-col>\n                  <ion-col class=\"bonus-text\">{{v.isValue}} {{v.rpp_capai|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Sisa}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_sisa|number}} </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </ion-grid>\n        </div>\n        <div *ngSwitchCase=\"'produk'\">\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Target (Baspack) </ion-col>\n            <ion-col class=\"bonus-text_bold\">\n              {{target_nutrition_produk.TARGET|number }}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Pencapaian </ion-col>\n            <ion-col class=\"bonus-text_bold\">\n              {{target_nutrition_produk.PENCAPAIAN|number }}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Sisa Target </ion-col>\n            <ion-col class=\"bonus-text_bold\">\n              {{target_nutrition_produk.SISA_TARGET|number }}\n            </ion-col>\n          </ion-row>\n\n          <ion-grid *ngFor=\"let v of target_nutrition_produk_detail\">\n            <div class=\"card_2\">\n              <center class=\"bonus-title_bold\">{{v.BASEPACK_TITLE}}</center>\n              <ion-row>\n                <ion-col class=\"bonus-title\"> Target (Psc) </ion-col>\n                <ion-col class=\"bonus-text\"> {{v.TARGET|number}} </ion-col>\n              </ion-row>\n              <ion-row class=\"bonus-box\">\n                <ion-col class=\"bonus-title\"> Pencapaian </ion-col>\n                <ion-col class=\"bonus-text\"> {{v.PENCAPAIAN|number}} </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col class=\"bonus-title\"> Sisa Target </ion-col>\n                <ion-col class=\"bonus-text\"> {{v.SISA_TARGET|number}} </ion-col>\n              </ion-row>\n            </div>\n          </ion-grid>\n        </div>\n      </div>\n    </div>\n\n    <div *ngSwitchCase=\"'bandw'\">\n      <ion-segment [(ngModel)]=\"segmendetailbw\" style=\"color: blue\">\n        <!-- <ion-segment-button value=\"loyalty\">\n          <ion-label>LOYALTY</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"produk\">\n          <ion-label>PRODUK</ion-label>\n        </ion-segment-button> -->\n        <ion-segment-button value=\"category\">\n          <ion-label>CATEGORY</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n      <br />\n      <div [ngSwitch]=\"segmendetailbw\">\n        <div *ngSwitchCase=\"'loyalty'\">\n          <div *ngIf=\"!target_bw_loyalty\">\n            <center>\n              <ion-spinner color=\"primary\" style=\"font-size: 100px;\"></ion-spinner>\n            </center>\n          </div>\n          <div *ngIf=\"target_bw_loyalty\">\n            <div class=\"card_2\">\n              <div *ngFor=\"let v of target_bw_loyalty\">\n                <div [innerHTML]=\"v.Bar_Title_Target\"></div>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Target}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_target|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Simulasi}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{v.rpp_simulasi|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Capai}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_capai|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Sisa}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_sisa|number}} </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'category'\" >\n          <div *ngIf=\"istarget_bw_category==0\" style=\"margin-top: -20px;\">\n            <center>\n              <h5>Tidak ada data pada bulan ini</h5>\n            </center>\n          </div>\n          <ion-grid *ngIf=\"istarget_bw_category==1\">\n            <div *ngFor=\"let v of target_bw_category\" style=\"margin-top: -35px;\">\n              <div class=\"card_2\">\n                <div [innerHTML]=\"v.Bar_Title_Target\"></div>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Target}} </ion-col>\n                  <ion-col class=\"bonus-text\">{{v.isValue}} {{v.rpp_target|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\">\n                    {{v.Bar_Title_Simulasi}}\n                  </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_simulasi|number}} </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Capai}} </ion-col>\n                  <ion-col class=\"bonus-text\">{{v.isValue}} {{v.rpp_capai|number}} </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\"> {{v.Bar_Title_Sisa}} </ion-col>\n                  <ion-col class=\"bonus-text\"> {{v.rpp_sisa|number}} </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </ion-grid>\n        </div>\n        <div *ngSwitchCase=\"'produk'\">\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Target (Baspack) </ion-col>\n            <ion-col class=\"bonus-text_bold\">\n              {{target_bw_produk.TARGET|number }}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Pencapaian </ion-col>\n            <ion-col class=\"bonus-text_bold\">\n              {{target_bw_produk.PENCAPAIAN|number }}\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"bonus-box_2\">\n            <ion-col class=\"bonus-title_bold\"> Sisa Target </ion-col>\n            <ion-col class=\"bonus-text_bold\">\n              {{target_bw_produk.SISA_TARGET|number }}\n            </ion-col>\n          </ion-row>\n\n          <ion-grid *ngFor=\"let v of target_bw_produk_detail\">\n            <div class=\"card_2\">\n              <center class=\"bonus-title_bold\">{{v.BASEPACK_TITLE}}</center>\n              <ion-row>\n                <ion-col class=\"bonus-title\"> Target (Psc) </ion-col>\n                <ion-col class=\"bonus-text\"> {{v.TARGET|number}} </ion-col>\n              </ion-row>\n              <ion-row class=\"bonus-box\">\n                <ion-col class=\"bonus-title\"> Pencapaian </ion-col>\n                <ion-col class=\"bonus-text\"> {{v.PENCAPAIAN|number}} </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col class=\"bonus-title\"> Sisa Target </ion-col>\n                <ion-col class=\"bonus-text\"> {{v.SISA_TARGET|number}} </ion-col>\n              </ion-row>\n            </div>\n          </ion-grid>\n        </div>\n      </div>\n    </div>\n  </div>\n  <p>&nbsp;</p>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab4_tab4_module_ts.js.map