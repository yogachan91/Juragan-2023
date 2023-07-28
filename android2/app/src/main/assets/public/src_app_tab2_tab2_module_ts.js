"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 745:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 4608:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 745);








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
    })
], Tab2PageModule);



/***/ }),

/***/ 442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page.html?ngResource */ 1748);
/* harmony import */ var _tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss?ngResource */ 1597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dolphin.service */ 2171);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _modals_resi_modal_resi_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/resi-modal/resi-modal.page */ 3801);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _capacitor_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/clipboard */ 4410);










let Tab2Page = class Tab2Page {
    constructor(dolphinService, router, alertController, modalController, loadingController, fb) {
        this.dolphinService = dolphinService;
        this.router = router;
        this.alertController = alertController;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.fb = fb;
        this.segmen = 'poin';
        this.segmendetailpoin = 'page_basic_poin';
        this.segmenlogammulia = 'logammulia';
        this.getdata();
    }
    getdata() {
        this.dolphinService.gettransaksi('invoice').subscribe((dataInvoice) => {
            console.log('gettransaksi', dataInvoice);
            if (dataInvoice) {
                if (dataInvoice.includes('Belum ada')) {
                    this.invoices = [];
                }
                else {
                    this.invoices = dataInvoice;
                }
            }
            this.formpoint_basic_point = this.fb.group({
                // bulan : ['',[Validators.required]],
                tahun: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
                week: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            });
            this.formpoint_fop_poin = this.fb.group({
                bulan: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
                tahun: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            });
            this.formpoint_growth_poin = this.fb.group({
                bulan: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
                tahun: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            });
            this.formpoint_distribution = this.fb.group({
                bulan: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
                tahun: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            });
            this.formpoint_category_poin = this.fb.group({
                bulan: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
                tahun: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            });
            this.formpoint_palapa = this.fb.group({
                bulan: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
                tahun: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            });
            this.dolphinService.gettransaksi('redeem').subscribe((dataRedeem) => {
                if (dataRedeem) {
                    if (dataRedeem.includes('Belum ada')) {
                        this.redeems = [];
                    }
                    else {
                        console.log('dataRedeem', dataRedeem);
                        this.redeems = dataRedeem;
                    }
                }
            });
            // basic poin
            this.dolphinService.riwayat_poin('basic_point').subscribe((databasicpoin) => {
                //  if(databasicpoin) {
                if (databasicpoin.fop_poin == null) {
                    this.basic_point = [];
                    this.basic_point_detail = [];
                    this.hidebasicpoint = 0;
                }
                else {
                    this.basic_point = databasicpoin.retdata;
                    this.basic_point_detail = databasicpoin.detail;
                    this.hidebasicpoint = 1;
                }
                console.log('basic_pointriwayat', this.hidebasicpoint);
                console.log('databasicpoinss', databasicpoin);
                //   }
            });
            // FOP Poin
            this.dolphinService.riwayat_poin('fop_poin').subscribe((datatopup) => {
                if (datatopup.detail) {
                    if (datatopup.detail.includes('Belum ada')) {
                        this.fop_poin_header = null;
                        this.fop_poin_detail = [];
                        this.fop_poin = null;
                    }
                    else {
                        console.log('datatopupsssss', datatopup);
                        this.fop_poin_header = datatopup.retdata;
                        this.fop_poin = datatopup.fop_poin;
                        this.fop_poin_detail = datatopup.detail;
                    }
                }
            });
            // growth_poin
            this.dolphinService.riwayat_poin('growth_poin').subscribe((datatopup) => {
                if (datatopup.retdata) {
                    if (datatopup.retdata.includes('Belum ada')) {
                        this.growth_poin = [];
                    }
                    else {
                        console.log('datatopup', datatopup.retdata);
                        this.growth_poin = datatopup.retdata;
                    }
                }
            });
            // distribution_poin
            this.dolphinService.riwayat_poin('distribution_poin').subscribe((dataloyalty) => {
                if (dataloyalty.retdata) {
                    if (dataloyalty.retdata.includes('Belum ada')) {
                        this.distribution_poin = [];
                    }
                    else {
                        console.log('dataloyalty', dataloyalty.retdata);
                        this.distribution_poin = dataloyalty.retdata;
                    }
                }
            });
            // distribution_poin
            this.dolphinService.riwayat_poin('category_point').subscribe((dataloyalty) => {
                if (dataloyalty.retdata) {
                    if (dataloyalty.retdata.includes('Belum ada')) {
                        this.category_point = [];
                    }
                    else {
                        console.log('dataloyalty', dataloyalty.retdata);
                        this.category_point = dataloyalty.retdata;
                    }
                }
            });
            // palapa
            this.dolphinService.riwayat_poin('palapa').subscribe((dataloyalty) => {
                if (dataloyalty.retdata) {
                    if (dataloyalty.retdata.includes('Belum ada')) {
                        this.palapa = [];
                    }
                    else {
                        console.log('dataloyalty', dataloyalty.retdata);
                        this.palapa = dataloyalty.retdata;
                    }
                }
            });
            // tahun
            this.dolphinService.tahun().subscribe((data) => {
                this.tahun = data;
            });
            // week
            this.dolphinService.week().subscribe((data) => {
                this.weeks = data;
            });
            // poin aktif
            this.dolphinService.poin_aktif().subscribe((data) => {
                this.poin_aktif = data.retdata;
            });
            this.loadingController.dismiss();
            this.dolphinService.statususerriwayat().subscribe((data) => {
                this.statuspalapa = data.retdata[0].isparticipant;
                this.statusdata = data.statusdata;
                console.log('statuspalapa', data.retdata[0]);
            });
        });
        //OVO
        // this.dolphinService.getlistredeemovo().subscribe((dataRedeem) => {
        //   if(dataRedeem) {
        //     this.redeemsovo = dataRedeem['retdata']
        //   }
        // })
        //.OVO
        let d1 = new Date();
        let d2 = new Date();
        this.curMonth = d1;
        this.prevMonth = new Date(d2.setMonth(d2.getMonth() - 1));
        // this.dolphinService.gettop5().subscribe(data => {
        //   // console.log('gettop5', data)
        //   if(data){
        //     this.top5 = data.retdata
        //   } else {
        //     this.top5 = []
        //   }
        // });
        // this.dolphinService.gettop5brand().subscribe(data => {
        //   // console.log('gettop5brand', data)
        //   if(data){
        //     this.top5brand = data.retdata
        //   } else {
        //     this.top5brand = []
        //   }
        // });
        this.dolphinService.gettotalbelanja().subscribe(data => {
            // console.log('gettotalbelanja', data)
            if (data.retdata[0]) {
                this.totalbelanja = data.retdata[0].total_current;
            }
            else {
                this.totalbelanja = [];
            }
        });
        this.dolphinService.getfop().subscribe(data => {
            // console.log('getfop', data)
            if (data.status == 'success') {
                this.fop = data.retdata[0].total_current;
            }
            else {
                this.fop = [];
            }
        });
        this.dolphinService.whatsappinfo('', '').subscribe(data => {
            console.log('infowa1', data.info2);
            this.header_lapor = data.header_lapor;
            this.message_lapor = data.message_lapor;
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: msg,
                backdropDismiss: false,
            });
            yield loading.present();
        });
    }
    doLoadingfilter(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: msg,
                backdropDismiss: false,
                duration: 3000
            });
            yield loading.present();
        });
    }
    doLoadingfilterfop(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: msg,
                backdropDismiss: false,
                duration: 3000
            });
            yield loading.present();
        });
    }
    showalert(title, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
        // this.filterpoint_basic_point();
        // this.filterpoint_invoice();
        // this.filterpoint_loyalty();
        // this.filterpoint_top_up_category();
        this.notif = "";
    }
    refreshresi() {
        this.doLoading('Reloading..');
        this.getdata();
        // this.filterpoint_basic_point();
        // this.filterpoint_invoice();
        // this.filterpoint_loyalty();
        // this.filterpoint_top_up_category();
        this.notif = "";
    }
    details(i, t) {
        let navigationExtras = { state: { item: i, type: t } };
        this.router.navigate(['top-detail'], navigationExtras);
    }
    cekresi(r) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: this.header_lapor,
                message: this.message_lapor,
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
                            this.dolphinService.whatsappinfo(name, no).subscribe(data => {
                                console.log('infowa3', data.info3);
                                const infowa = data.info3;
                                window.open(infowa, "_system");
                            });
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
                this.refreshresi();
                alert('Selamat, Redeem Anda Telah Selesai!');
            }
        });
    }
    lihatresi(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
    filterpoint_basic_point() {
        this.dolphinService.filterpoint_basic_poin(this.formpoint_basic_point.value['tahun'], this.formpoint_basic_point.value['week']).subscribe((data) => {
            this.doLoadingfilter('Loading');
            if (data.status == "success") {
                this.basic_point = data.retdata;
                this.basic_point_detail = data.detail;
                this.hidebasicpoint = 1;
            }
            else {
                this.basic_point = [];
                this.basic_point_detail = [];
                this.hidebasicpoint = 0;
                // this.showalert("Notifikasi", 'Data Kosong');
            }
            console.log('basic_pointriwayatdata', this.hidebasicpoint);
            // this.invoices = data;
        });
    }
    filterpoint_fop_poin() {
        this.doLoadingfilterfop('Loading');
        this.dolphinService.filterpoint(this.formpoint_fop_poin.value['tahun'], this.formpoint_fop_poin.value['bulan'], 'fop_poin').subscribe((datatopup) => {
            if (datatopup) {
                if (datatopup.detail.includes('Belum ada')) {
                    this.fop_poin_header = null;
                    this.fop_poin_detail = [];
                    this.fop_poin = null;
                }
                else {
                    console.log('datatopupsssssss', datatopup);
                    this.fop_poin_header = datatopup.retdata;
                    this.fop_poin = datatopup.fop_poin;
                    this.fop_poin_detail = datatopup.detail;
                }
            }
            // this.invoices = data;
        });
    }
    filterpoint_growth_poin() {
        this.doLoadingfilter('Loading');
        this.dolphinService.filterpoint(this.formpoint_growth_poin.value['tahun'], this.formpoint_growth_poin.value['bulan'], 'growth_poin').subscribe((datatopup) => {
            if (datatopup.retdata) {
                if (datatopup.retdata.includes('Belum ada')) {
                    this.growth_poin = [];
                    // this.showalert("Notifikasi", 'Data Kosong');
                }
                else {
                    console.log('datatopup', datatopup.retdata);
                    this.growth_poin = datatopup.retdata;
                }
            }
        });
    }
    filterpoint_distribution() {
        this.doLoadingfilter('Loading');
        this.dolphinService.filterpoint(this.formpoint_distribution.value['tahun'], this.formpoint_distribution.value['bulan'], 'distribution_poin').subscribe((dataloyalty) => {
            if (dataloyalty.retdata) {
                if (dataloyalty.retdata.includes('Belum ada')) {
                    this.distribution_poin = [];
                    // this.showalert("Notifikasi", 'Data Kosong');
                }
                else {
                    console.log('dataloyalty', dataloyalty.retdata);
                    this.distribution_poin = dataloyalty.retdata;
                }
            }
        });
    }
    filterpoint_category_point() {
        this.doLoadingfilter('Loading');
        this.dolphinService.filterpoint(this.formpoint_category_poin.value['tahun'], this.formpoint_category_poin.value['bulan'], 'category_point').subscribe((dataloyalty) => {
            if (dataloyalty.retdata) {
                if (dataloyalty.retdata.includes('Belum ada')) {
                    this.category_point = [];
                    // this.showalert("Notifikasi", 'Data Kosong');
                }
                else {
                    console.log('dataloyalty', dataloyalty.retdata);
                    this.category_point = dataloyalty.retdata;
                }
            }
        });
    }
    filterpoint_palapa() {
        this.doLoadingfilter('Loading');
        this.dolphinService.filterpoint(this.formpoint_palapa.value['tahun'], this.formpoint_palapa.value['bulan'], 'palapa').subscribe((dataloyalty) => {
            if (dataloyalty.retdata) {
                if (dataloyalty.retdata.includes('Belum ada')) {
                    this.palapa = [];
                    // this.showalert("Notifikasi", 'Data Kosong');
                }
                else {
                    console.log('dataloyalty', dataloyalty.retdata);
                    this.palapa = dataloyalty.retdata;
                }
            }
        });
    }
    copyinvoice(copy) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_clipboard__WEBPACK_IMPORTED_MODULE_4__.Clipboard.write({
                string: "#" + copy.toUpperCase()
            });
            this.showalert("No. Redeem Berhasil Disalin", "#" + copy.toUpperCase());
        });
    }
};
Tab2Page.ctorParameters = () => [
    { type: _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__.DolphinService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder }
];
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-tab2',
        template: _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab2Page);



/***/ }),

/***/ 1597:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-title {\n  color: #f5f6fa;\n}\n\n.background {\n  background-color: #1505a8;\n}\n\n.boxed {\n  display: block;\n  border-bottom: 1px solid #e0e0e0;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.inv {\n  display: block;\n  font-size: 0.8em;\n  line-height: 2px;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: 600;\n  color: #3D5CFF !important;\n}\n\n.inv2 {\n  display: block;\n  font-size: 0.8em;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: 600;\n  color: #3D5CFF !important;\n}\n\n.dt {\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 0.7em;\n}\n\n.amount {\n  font-size: 0.8em;\n  line-height: 2px;\n  text-align: right;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.amount_invoice {\n  font-size: 0.8em;\n  text-align: right;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.bonus-title {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.7em;\n}\n\n.bonus-title_invoice {\n  color: orange;\n  font-size: 0.8em;\n}\n\n.bonus-title_bold {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.detail_poin {\n  color: #e8712c;\n  font-weight: bold;\n  padding: 0;\n}\n\n.bonus-text {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.7em;\n  text-align: right;\n  font-weight: 500;\n}\n\n.bonus-text-loyality {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.12px;\n  text-align: right;\n  font-weight: 500;\n}\n\n.bonus-text_bold {\n  color: rgba(0, 0, 0, 0.6);\n  text-align: right;\n  font-weight: 500;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.bonus-box {\n  background-color: #f5f6ff;\n  border-radius: 5px;\n  margin-bottom: 3px;\n}\n\n.r-name {\n  display: block;\n  font-size: 0.8em;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: 600;\n  color: #3D5CFF !important;\n}\n\n.r-no {\n  font-size: 0.7em;\n  text-align: right;\n  font-weight: bold;\n  color: rgba(7, 167, 33, 0.66);\n}\n\n.r-no-copy {\n  font-size: 0.7em;\n  text-align: right;\n  font-weight: bold;\n  color: rgba(114, 114, 114, 0.66);\n}\n\n.r-date {\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 0.7em;\n}\n\n.r-poin {\n  font-size: 0.7em;\n  float: right;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.cekresi {\n  float: right;\n  padding-left: 5px;\n  color: #3D5CFF !important;\n}\n\n.lapor {\n  color: #ad0023 !important;\n}\n\n.selesai {\n  color: #1b6c00 !important;\n}\n\n.statuses {\n  font-weight: bold;\n  color: #7d93ff !important;\n}\n\n.statuses-selesai {\n  font-weight: bold;\n  color: #00bb51 !important;\n}\n\n.top5-head {\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-right: 10px;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background-color: #3D5CFF;\n}\n\n.top5-title {\n  color: #FFF;\n  font-weight: 500;\n  display: block;\n  font-size: 0.9em;\n}\n\n.top5-content {\n  margin-left: 10px;\n  margin-right: 10px;\n  border-width: 0px 1px 1px 1px;\n  border-style: solid;\n  border-color: #e1e1e1;\n}\n\n.top5-cat {\n  font-size: 0.9em;\n  font-weight: 500;\n}\n\n.top5-rightmonth {\n  font-size: 0.7em;\n  color: #4b80f0;\n  text-align: right;\n}\n\n.top5-leftmonth {\n  font-size: 0.7em;\n  color: #ec7b9c;\n}\n\n.top5-left, .top5-right {\n  font-size: 0.8em;\n  color: #444;\n}\n\n.top5-right {\n  text-align: right;\n}\n\n.detail_list_poin {\n  border-style: solid;\n  border-width: 0.5px;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 12px;\n}\n\nion-spinner {\n  width: 0.8em;\n  height: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7QUFFSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUVKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUdKOztBQUFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQUdKOztBQUFBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFEQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSUo7O0FBRkE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFLSjs7QUFGQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUZBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBS0o7O0FBRkE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQUtKOztBQUZBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUFLSjs7QUFGQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUFLSjs7QUFGQTtFQUVJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFJSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUVBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUFESjs7QUFJQTtFQUNBLGlCQUFBO0FBREE7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBQUo7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUNKIiwiZmlsZSI6InRhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgICBjb2xvcjogI2Y1ZjZmYTtcbn1cbi5iYWNrZ3JvdW5ke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTA1YTg7XG59XG5cbi5ib3hlZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uaW52IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgbGluZS1oZWlnaHQ6MnB4O1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC43KTtcbiAgICBmb250LXdlaWdodDo2MDA7XG4gICAgY29sb3I6ICMzRDVDRkYgIWltcG9ydGFudDtcbn1cblxuLmludjIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNyk7XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgIGNvbG9yOiAjM0Q1Q0ZGICFpbXBvcnRhbnQ7XG59XG5cbi5kdCB7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xuICAgIGZvbnQtc2l6ZTogLjdlbTtcbn1cblxuLmFtb3VudCB7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIGxpbmUtaGVpZ2h0OjJweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC43KTtcbn1cblxuLmFtb3VudF9pbnZvaWNlIHtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xufVxuXG4uYm9udXMtdGl0bGUge1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcbiAgICBmb250LXNpemU6IC43ZW07XG59XG5cbi5ib251cy10aXRsZV9pbnZvaWNlIHtcbiAgICBjb2xvcjogb3JhbmdlO1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbn1cbi5ib251cy10aXRsZV9ib2xke1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kZXRhaWxfcG9pbiB7XG4gICAgY29sb3I6ICNlODcxMmM7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLmJvbnVzLXRleHQge1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcbiAgICBmb250LXNpemU6IC43ZW07XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5ib251cy10ZXh0LWxveWFsaXR5IHtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNik7XG4gICAgZm9udC1zaXplOiAuMTJweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuLmJvbnVzLXRleHRfYm9sZCB7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjYpO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYm9udXMtYm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG5cbi5yLW5hbWUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNyk7XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgIGNvbG9yOiAjM0Q1Q0ZGICFpbXBvcnRhbnQ7XG59XG5cbi5yLW5vIHtcbiAgICBmb250LXNpemU6IC43ZW07XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHJnYmEoNywgMTY3LCAzMywgMC42Nik7XG59XG5cbi5yLW5vLWNvcHkge1xuICAgIGZvbnQtc2l6ZTogLjdlbTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogcmdiYSgxMTQsIDExNCwgMTE0LCAwLjY2KTtcbn1cblxuLnItZGF0ZSB7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xuICAgIGZvbnQtc2l6ZTogLjdlbTtcbn1cblxuLnItcG9pbiB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogbGF2ZW5kZXI7XG4gICAgZm9udC1zaXplOiAuN2VtO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC41KTtcbiAgICAvLyBwYWRkaW5nOjRweDtcbiAgICAvLyBib3JkZXItcmFkaXVzOjNweDtcblxufVxuXG4uY2VrcmVzaSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBhZGRpbmctbGVmdDo1cHg7XG4gICAgY29sb3I6ICMzRDVDRkYgIWltcG9ydGFudDtcbn1cblxuLmxhcG9yIHtcbiAgICBjb2xvcjogI2FkMDAyMyAhaW1wb3J0YW50O1xufVxuXG4uc2VsZXNhaSB7XG4gICAgY29sb3I6ICMxYjZjMDAgIWltcG9ydGFudDtcbn1cblxuLnN0YXR1c2VzIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzdkOTNmZiAhaW1wb3J0YW50O1xufVxuXG4uc3RhdHVzZXMtc2VsZXNhaSB7IFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjMDBiYjUxICFpbXBvcnRhbnQ7XG59XG5cblxuLnRvcDUtaGVhZCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Q1Q0ZGO1xufVxuXG4udG9wNS10aXRsZSB7XG4gICAgY29sb3I6I0ZGRjtcbiAgICBcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbn1cblxuLnRvcDUtY29udGVudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGJvcmRlci13aWR0aDogMHB4IDFweCAxcHggMXB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjZTFlMWUxO1xufVxuXG4udG9wNS1jYXQge1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udG9wNS1yaWdodG1vbnRoIHtcbiAgICBmb250LXNpemU6IC43ZW07XG4gICAgY29sb3I6ICM0YjgwZjA7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50b3A1LWxlZnRtb250aCB7XG4gICAgZm9udC1zaXplOiAuN2VtO1xuICAgIGNvbG9yOiAjZWM3YjljO1xufVxuXG4udG9wNS1sZWZ0LCAudG9wNS1yaWdodCB7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIGNvbG9yOiAjNDQ0O1xufVxuXG4udG9wNS1yaWdodCB7XG50ZXh0LWFsaWduOiByaWdodDtcbn1cbi5kZXRhaWxfbGlzdF9wb2lue1xuICAgIGJvcmRlci1zdHlsZTpzb2xpZDsgXG4gICAgYm9yZGVyLXdpZHRoOiAwLjVweDsgXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjYpO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbmlvbi1zcGlubmVyIHtcbiAgICB3aWR0aDogMC44ZW07XG4gICAgaGVpZ2h0OiAzZW07XG4gIH0iXX0= */";

/***/ }),

/***/ 1748:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"background\" color=\"unilever\">\n    <ion-title> Riwayat </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"refresh()\">\n        <ion-icon slot=\"icon-only\" name=\"refresh-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar class=\"background\" color=\"unilever\">\n    <ion-segment [(ngModel)]=\"segmen\">\n      <ion-segment-button value=\"poin\">\n        <ion-label>Poin</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"redeem\">\n        <ion-label>Redeem</ion-label>\n      </ion-segment-button>\n      <!-- <ion-segment-button value=\"point_aktif\">\n        <ion-label>Poin Aktif</ion-label>\n      </ion-segment-button> -->\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div [ngSwitch]=\"segmen\">\n    <div *ngSwitchCase=\"'poin'\">\n      <ion-segment [(ngModel)]=\"segmendetailpoin\" style=\"color: blue\">\n        <ion-segment-button value=\"page_basic_poin\">\n          <ion-label>Basic Poin</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"fop_poin\">\n          <ion-label>FOP Poin</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"growth_poin\">\n          <ion-label>Growth Poin</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n      <ion-segment [(ngModel)]=\"segmendetailpoin\" style=\"color: blue\">\n        <ion-segment-button value=\"distribution\">\n          <ion-label>Distribution Poin</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"category_poin\">\n          <ion-label>Category Poin</ion-label>\n        </ion-segment-button>\n          <ion-segment-button *ngIf=\"statuspalapa==statusdata\"\n            value=\"palapa_poin\"      \n          >\n            <ion-label >Palapa Poin</ion-label>\n          </ion-segment-button>\n      </ion-segment>\n\n      <br />\n\n      <div [ngSwitch]=\"segmendetailpoin\" >\n        <div *ngSwitchCase=\"'page_basic_poin'\">\n          <div *ngIf=\"!basic_point\">\n            <!-- <img src=\"../../assets/imgs/loading.gif\" /><br />\n            <img src=\"../../assets/imgs/loading.gif\" /> -->\n            <center>\n              <ion-spinner color=\"primary\" style=\"font-size: 100px;\"></ion-spinner>\n            </center>\n          </div>\n          <div *ngIf=\"basic_point\">\n            <form [formGroup]=\"formpoint_basic_point\" style=\"margin-top: -20px\">\n              <ion-row style=\"background-color: ghostwhite\">\n                <ion-col>\n                  <ion-select\n                    formControlName=\"tahun\"\n                    interface=\"popover\"\n                    placeholder=\"Tahun\"\n                    style=\"\n                      border-style: solid;\n                      border-width: 0.1px;\n                      border-radius: 5px;\n                      border-color: #999999;\n                      height: 35px;\n                    \"\n                  >\n                    <ion-select-option *ngFor=\"let th of tahun\" [value]=\"th\"\n                      >{{th}}</ion-select-option\n                    >\n                  </ion-select>\n                </ion-col>\n                <ion-col>\n                  <ion-select\n                    formControlName=\"week\"\n                    interface=\"popover\"\n                    placeholder=\"Week\"\n                    style=\"\n                      border-style: solid;\n                      border-width: 0.1px;\n                      border-radius: 5px;\n                      border-color: #999999;\n                      height: 35px;\n                    \"\n                  >\n                    <ion-select-option *ngFor=\"let wk of weeks\" [value]=\"wk\"\n                      >{{wk}}</ion-select-option\n                    >\n                  </ion-select>\n                </ion-col>\n                <ion-col>\n                  <ion-button\n                    size=\"small\"\n                    (click)=\"filterpoint_basic_point()\"\n                    [disabled]=\"!formpoint_basic_point.valid\"\n                    expand=\"block\"\n                    color=\"primary\"\n                  >\n                    <strong>Cari</strong>\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </form>\n            <center\n              *ngIf=\"basic_point=='' || basic_point_detail==''\"\n            >\n              <h5>Tidak ada data pada bulan ini</h5>\n            </center>\n            <div *ngIf=\"hidebasicpoint==1\">\n            <div *ngFor=\"let i of basic_point\" class=\"boxed\">\n              <ion-row>\n                <ion-col class=\"target-header\">\n                  <span class=\"inv2\">{{i.description}}</span>\n                </ion-col>\n              </ion-row>\n              <ion-row *ngIf=\"i.invoice_reward != 0\" class=\"bonus-box1\">\n                <ion-col class=\"bonus-title\"> Tanggal Inject </ion-col>\n                <ion-col class=\"bonus-text\">\n                  {{i.tanggal_inject|date}}\n                </ion-col>\n              </ion-row>\n              <ion-row *ngIf=\"i.invoice_reward != 0\" class=\"bonus-box\">\n                <ion-col class=\"bonus-title\"> Bonus Poin </ion-col>\n                <ion-col class=\"bonus-text_bold\">\n                  {{i.Bonus_Point|number}}\n                </ion-col>\n              </ion-row>\n            </div>\n            <ion-row  *ngIf=\"basic_point !=''\">\n              <ion-col class=\"bonus-title\">\n                <ion-col class=\"detail_poin\"> Detail Poin </ion-col>\n              </ion-col>\n              <ion-col\n                class=\"bonus-text\"\n                (click)=\"descriptionnospace1= !descriptionnospace1\"\n              >\n                <ion-icon\n                  *ngIf=\"!descriptionnospace1\"\n                  id=\"tutorialIcon\"\n                  name=\"add-circle-outline\"\n                  style=\"color: #e8712c; font-size: 20px; font-weight: bold\"\n                ></ion-icon>\n                <ion-icon\n                  *ngIf=\"descriptionnospace1\"\n                  name=\"ellipsis-horizontal-circle-outline\"\n                  style=\"color: #e8712c; font-size: 20px; font-weight: bold\"\n                ></ion-icon>\n              </ion-col>\n            </ion-row>\n            <!-- <div style=\"border-style: solid;border-width: 0.1px; border-color: rgb(150, 148, 148)\"></div> -->\n            <div id=\"tutorial\" *ngIf=\"descriptionnospace1\">\n              <ion-grid *ngFor=\"let i of basic_point_detail\">\n                <ion-row *ngIf=\"i.invoice_reward != 0\">\n                  <ion-col class=\"bonus-title_bold\"> {{i.invoice_no}} </ion-col>\n                  <ion-col class=\"bonus-text_bold\">\n                    Rp {{i.invoice|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row *ngIf=\"i.invoice_reward != 0\">\n                  <ion-col class=\"bonus-title\">\n                    {{i.tanggal_invoice|date}}\n                  </ion-col>\n                </ion-row>\n                <ion-row *ngIf=\"i.invoice_reward != 0\" class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\"> Bonus Poin </ion-col>\n                  <ion-col class=\"bonus-text_bold\"> {{i.Bonus_Poin}} </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n          </div>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'fop_poin'\">\n          <div *ngIf=\"!basic_point\">\n            <!-- <img src=\"../../assets/imgs/loading.gif\" /><br />\n            <img src=\"../../assets/imgs/loading.gif\" /> -->\n          </div>\n          <div>\n            <form [formGroup]=\"formpoint_fop_poin\" style=\"margin-top: -20px\">\n              <ion-row style=\"background-color: ghostwhite\">\n                <ion-col>\n                  <ion-select\n                    formControlName=\"tahun\"\n                    interface=\"popover\"\n                    placeholder=\"Tahun\"\n                    style=\"\n                      border-style: solid;\n                      border-width: 0.1px;\n                      border-radius: 5px;\n                      border-color: #999999;\n                      height: 35px;\n                    \"\n                  >\n                    <ion-select-option *ngFor=\"let th of tahun\" [value]=\"th\"\n                      >{{th}}</ion-select-option\n                    >\n                  </ion-select>\n                </ion-col>\n                <ion-col>\n                  <ion-select\n                    formControlName=\"bulan\"\n                    interface=\"popover\"\n                    placeholder=\"Bulan\"\n                    style=\"\n                      border-style: solid;\n                      border-width: 0.1px;\n                      border-radius: 5px;\n                      border-color: #999999;\n                      height: 35px;\n                    \"\n                  >\n                    <ion-select-option value=\"1\">Januari</ion-select-option>\n                    <ion-select-option value=\"2\">Februari</ion-select-option>\n                    <ion-select-option value=\"3\">Maret</ion-select-option>\n                    <ion-select-option value=\"4\">April</ion-select-option>\n                    <ion-select-option value=\"5\">Mei</ion-select-option>\n                    <ion-select-option value=\"6\">Juni</ion-select-option>\n                    <ion-select-option value=\"7\">Juli</ion-select-option>\n                    <ion-select-option value=\"8\">Agustus</ion-select-option>\n                    <ion-select-option value=\"9\">September</ion-select-option>\n                    <ion-select-option value=\"10\">Oktober</ion-select-option>\n                    <ion-select-option value=\"11\">November</ion-select-option>\n                    <ion-select-option value=\"12\">Desember</ion-select-option>\n                  </ion-select>\n                </ion-col>\n                <ion-col>\n                  <ion-button\n                    size=\"small\"\n                    (click)=\"filterpoint_fop_poin()\"\n                    [disabled]=\"!formpoint_fop_poin.valid\"\n                    expand=\"block\"\n                    color=\"primary\"\n                  >\n                    <strong>Cari</strong>\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </form>\n            <center *ngIf=\"!fop_poin_header\">\n              <h5>Tidak ada data pada bulan ini</h5>\n            </center>\n            <div *ngIf=\"fop_poin_header\">\n              <div class=\"boxed\">\n                <ion-row>\n                  <ion-col class=\"target-header\">\n                    <span class=\"inv2\">{{fop_poin_header.description}}</span>\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box1\">\n                  <ion-col class=\"bonus-title\"> Tanggal Inject </ion-col>\n                  <ion-col class=\"bonus-text\">\n                    {{fop_poin_header.tanggal_inject|date}}\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col class=\"bonus-title\"> Bonus Poin </ion-col>\n                  <ion-col class=\"bonus-text_bold\">\n                    {{fop_poin_header.bonus_point|number}}\n                  </ion-col>\n                </ion-row>\n              </div>\n              <ion-row>\n                <ion-col class=\"bonus-title\">\n                  <ion-col class=\"detail_poin\"> Detail Poin </ion-col>\n                </ion-col>\n                <ion-col\n                  class=\"bonus-text\"\n                  (click)=\"descriptionnospace= !descriptionnospace\"\n                >\n                  <ion-icon\n                    *ngIf=\"!descriptionnospace\"\n                    id=\"tutorialIcon\"\n                    name=\"add-circle-outline\"\n                    style=\"color: #e8712c; font-size: 20px; font-weight: bold\"\n                  ></ion-icon>\n                  <ion-icon\n                    *ngIf=\"descriptionnospace\"\n                    name=\"ellipsis-horizontal-circle-outline\"\n                    style=\"color: #e8712c; font-size: 20px; font-weight: bold\"\n                  ></ion-icon>\n                </ion-col>\n              </ion-row>\n              <!-- <div style=\"border-style: solid;border-width: 0.1px; border-color: rgb(150, 148, 148)\"></div> -->\n              <div id=\"tutorial\" *ngIf=\"descriptionnospace\">\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\"> Total FOP </ion-col>\n                  <ion-col class=\"bonus-text_bold\">\n                    {{fop_poin.total_FOP|number}}\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"bonus-box\">\n                  <ion-col class=\"bonus-title\"> Total Sales </ion-col>\n                  <ion-col class=\"bonus-text_bold\">\n                    Rp. {{fop_poin.Total_invoice | number}}\n                  </ion-col>\n                </ion-row>\n                <ion-grid *ngFor=\"let i of fop_poin_detail\">\n                  <ion-row>\n                    <ion-col class=\"bonus-title_bold\">\n                      {{i.invoice_no}}\n                    </ion-col>\n                    <ion-col class=\"bonus-text_bold\">\n                      Rp {{i.invoice|number}}\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col class=\"bonus-title\">\n                      {{i.tanggal_invoice|date}}\n                    </ion-col>\n                  </ion-row>\n                  <!-- <ion-row *ngIf=\"i.invoice_reward != 0\" class=\"bonus-box\">\n                <ion-col class=\"bonus-title\"> Bonus Poin </ion-col>\n                <ion-col class=\"bonus-text_bold\"> {{i.Bonus_Poin}} </ion-col>\n              </ion-row> -->\n                </ion-grid>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'growth_poin'\">\n          <div *ngIf=\"!basic_point\">\n            <!-- <img src=\"../../assets/imgs/loading.gif\" /><br />\n            <img src=\"../../assets/imgs/loading.gif\" /> -->\n          </div>\n          <div *ngIf=\"basic_point\">\n            <form [formGroup]=\"formpoint_growth_poin\" style=\"margin-top: -20px\">\n              <ion-row style=\"background-color: ghostwhite\">\n                <ion-col>\n                  <ion-select\n                    formControlName=\"tahun\"\n                    interface=\"popover\"\n                    placeholder=\"Tahun\"\n                    style=\"\n                      border-style: solid;\n                      border-width: 0.1px;\n                      border-radius: 5px;\n                      border-color: #999999;\n                      height: 35px;\n                    \"\n                  >\n                    <ion-select-option *ngFor=\"let th of tahun\" [value]=\"th\"\n                      >{{th}}</ion-select-option\n                    >\n                  </ion-select>\n                </ion-col>\n                <ion-col>\n                  <ion-select\n                    formControlName=\"bulan\"\n                    interface=\"popover\"\n                    placeholder=\"Bulan\"\n                    style=\"\n                      border-style: solid;\n                      border-width: 0.1px;\n                      border-radius: 5px;\n                      border-color: #999999;\n                      height: 35px;\n                    \"\n                  >\n                    <ion-select-option value=\"1\">Januari</ion-select-option>\n                    <ion-select-option value=\"2\">Februari</ion-select-option>\n                    <ion-select-option value=\"3\">Maret</ion-select-option>\n                    <ion-select-option value=\"4\">April</ion-select-option>\n                    <ion-select-option value=\"5\">Mei</ion-select-option>\n                    <ion-select-option value=\"6\">Juni</ion-select-option>\n                    <ion-select-option value=\"7\">Juli</ion-select-option>\n                    <ion-select-option value=\"8\">Agustus</ion-select-option>\n                    <ion-select-option value=\"9\">September</ion-select-option>\n                    <ion-select-option value=\"10\">Oktober</ion-select-option>\n                    <ion-select-option value=\"11\">November</ion-select-option>\n                    <ion-select-option value=\"12\">Desember</ion-select-option>\n                  </ion-select>\n                </ion-col>\n                <ion-col>\n                  <ion-button\n                    size=\"small\"\n                    (click)=\"filterpoint_growth_poin()\"\n                    [disabled]=\"!formpoint_growth_poin.valid\"\n                    expand=\"block\"\n                    color=\"primary\"\n                  >\n                    <strong>Cari</strong>\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </form>\n            <center\n              *ngIf=\"growth_poin==null || growth_poin=='' || !growth_poin\"\n            >\n              <h5>Tidak ada data pada bulan ini</h5>\n            </center>\n            <div *ngFor=\"let i of growth_poin\" class=\"boxed\">\n              <ion-row>\n                <ion-col class=\"target-header\">\n                  <span class=\"inv2\">{{i.description}}</span>\n                </ion-col>\n              </ion-row>\n              <ion-row *ngIf=\"i.invoice_reward != 0\" class=\"bonus-box1\">\n                <ion-col class=\"bonus-title\"> Tanggal Inject </ion-col>\n                <ion-col class=\"bonus-text\"> {{i.inject_date|date}} </ion-col>\n              </ion-row>\n              <ion-row *ngIf=\"i.invoice_reward != 0\" class=\"bonus-box\">\n                <ion-col class=\"bonus-title\"> Bonus Poin </ion-col>\n                <ion-col class=\"bonus-text_bold\"> {{i.point|number}} </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col class=\"bonus-title\">\n                  <ion-col class=\"detail_poin\"> Detail Poin </ion-col>\n                </ion-col>\n                <ion-col\n                  class=\"bonus-text\"\n                  (click)=\"i.descriptionnospace= !i.descriptionnospace\"\n                >\n                  <ion-icon\n                    *ngIf=\"i.descriptionnospace\"\n                    id=\"tutorialIcon\"\n                    name=\"add-circle-outline\"\n                    style=\"color: #e8712c; font-size: 20px; font-weight: bold\"\n                  ></ion-icon>\n                  <ion-icon\n                    *ngIf=\"!i.descriptionnospace\"\n                    name=\"ellipsis-horizontal-circle-outline\"\n                    style=\"color: #e8712c; font-size: 20px; font-weight: bold\"\n                  ></ion-icon>\n                </ion-col>\n              </ion-row>\n              <!-- <div style=\"border-style: solid;border-width: 0.1px; border-color: rgb(150, 148, 148)\"></div> -->\n              <div id=\"tutorial\" *ngIf=\"!i.descriptionnospace\">\n                <ion-grid>\n                  <ion-row class=\"bonus-box1\">\n                    <ion-col class=\"bonus-title\">Target Growth</ion-col>\n                    <ion-col class=\"bonus-text_bold\">\n                      Rp. {{i.target|number}}\n                    </ion-col>\n                  </ion-row>\n                  <ion-row class=\"bonus-box\">\n                    <ion-col class=\"bonus-title\">Pencapaian Sales </ion-col>\n                    <ion-col class=\"bonus-text_bold\">\n                      Rp. {{i.achievement|number}}\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'distribution'\">\n          <div *ngIf=\"!basic_point\">\n            <!-- <img src=\"../../assets/imgs/loading.gif\" /><br />\n            <img src=\"../../assets/imgs/loading.gif\" /> -->\n          </div>\n          <div *ngIf=\"basic_point\">\n            <form\n              [formGroup]=\"formpoint_distribution\"\n              style=\"margin-top: -20px\"\n            >\n              <ion-row style=\"background-color: ghostwhite\">\n                <ion-col>\n                  <ion-select\n                    formControlName=\"tahun\"\n                    interface=\"popover\"\n                    placeholder=\"Tahun\"\n                    style=\"\n                      border-style: solid;\n                      border-width: 0.1px;\n                      border-radius: 5px;\n                      border-color: #999999;\n                      height: 35px;\n                    \"\n                  >\n                    <ion-select-option *ngFor=\"let th of tahun\" [value]=\"th\"\n                      >{{th}}</ion-select-option\n                    >\n                  </ion-select>\n                </ion-col>\n                <ion-col>\n                  <ion-select\n                    formControlName=\"bulan\"\n                    interface=\"popover\"\n                    placeholder=\"Bulan\"\n                    style=\"\n                      border-style: solid;\n                      border-width: 0.1px;\n                      border-radius: 5px;\n                      border-color: #999999;\n                      height: 35px;\n                    \"\n                  >\n                    <ion-select-option value=\"1\">Januari</ion-select-option>\n                    <ion-select-option value=\"2\">Februari</ion-select-option>\n                    <ion-select-option value=\"3\">Maret</ion-select-option>\n                    <ion-select-option value=\"4\">April</ion-select-option>\n                    <ion-select-option value=\"5\">Mei</ion-select-option>\n                    <ion-select-option value=\"6\">Juni</ion-select-option>\n                    <ion-select-option value=\"7\">Juli</ion-select-option>\n                    <ion-select-option value=\"8\">Agustus</ion-select-option>\n                    <ion-select-option value=\"9\">September</ion-select-option>\n                    <ion-select-option value=\"10\">Oktober</ion-select-option>\n                    <ion-select-option value=\"11\">November</ion-select-option>\n                    <ion-select-option value=\"12\">Desember</ion-select-option>\n                  </ion-select>\n                </ion-col>\n                <ion-col>\n                  <ion-button\n                    size=\"small\"\n                    (click)=\"filterpoint_distribution()\"\n                    [disabled]=\"!formpoint_distribution.valid\"\n                    expand=\"block\"\n                    color=\"primary\"\n                  >\n                    <strong>Cari</strong>\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </form>\n            <center\n              *ngIf=\"distribution_poin==null || distribution_poin=='' || !distribution_poin\"\n            >\n              <h5>Tidak ada data pada bulan ini</h5>\n            </center>\n            <div *ngFor=\"let i of distribution_poin\" class=\"boxed\">\n              <ion-row>\n                <ion-col class=\"target-header\">\n                  <span class=\"inv2\">{{i.description}}</span>\n                </ion-col>\n              </ion-row>\n              <ion-row *ngIf=\"i.invoice_reward != 0\" class=\"bonus-box1\">\n                <ion-col class=\"bonus-title\"> Tanggal Inject </ion-col>\n                <ion-col class=\"bonus-text\"> {{i.inject_date|date}} </ion-col>\n              </ion-row>\n              <ion-row *ngIf=\"i.invoice_reward != 0\" class=\"bonus-box\">\n                <ion-col class=\"bonus-title\"> Bonus Poin </ion-col>\n                <ion-col class=\"bonus-text_bold\"> {{i.point|number}} </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col class=\"bonus-title\">\n                  <ion-col class=\"detail_poin\"> Detail Poin </ion-col>\n                </ion-col>\n                <ion-col\n                  class=\"bonus-text\"\n                  (click)=\"i.descriptionnospace= !i.descriptionnospace\"\n                >\n                  <ion-icon\n                    *ngIf=\"i.descriptionnospace\"\n                    id=\"tutorialIcon\"\n                    name=\"add-circle-outline\"\n                    style=\"color: #e8712c; font-size: 20px; font-weight: bold\"\n                  ></ion-icon>\n                  <ion-icon\n                    *ngIf=\"!i.descriptionnospace\"\n                    name=\"ellipsis-horizontal-circle-outline\"\n                    style=\"color: #e8712c; font-size: 20px; font-weight: bold\"\n                  ></ion-icon>\n                </ion-col>\n              </ion-row>\n              <!-- <div style=\"border-style: solid;border-width: 0.1px; border-color: rgb(150, 148, 148)\"></div> -->\n              <div id=\"tutorial\" *ngIf=\"!i.descriptionnospace\">\n                <ion-grid>\n                  <ion-row class=\"bonus-box1\">\n                    <ion-col class=\"bonus-title\"\n                      >Target Distribution (SKU)</ion-col\n                    >\n                    <ion-col class=\"bonus-text_bold\">\n                      {{i.target|number}}\n                    </ion-col>\n                  </ion-row>\n                  <ion-row class=\"bonus-box1\">\n                    <ion-col class=\"bonus-title\"\n                      >Pencapaian Distribution (SKU)\n                    </ion-col>\n                    <ion-col class=\"bonus-text_bold\">\n                      {{i.achievement|number}}\n                    </ion-col>\n                  </ion-row>\n                  <ion-row class=\"bonus-box1\">\n                    <ion-col class=\"bonus-title\">Pencapaian Sales</ion-col>\n                    <ion-col class=\"bonus-text_bold\">\n                      Rp. {{i.actual_sales|number}}\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'category_poin'\">\n          <div *ngIf=\"!basic_point\">\n            <!-- <img src=\"../../assets/imgs/loading.gif\" /><br />\n            <img src=\"../../assets/imgs/loading.gif\" /> -->\n          </div>\n          <div *ngIf=\"basic_point\">\n            <form\n              [formGroup]=\"formpoint_category_poin\"\n              style=\"margin-top: -20px\"\n            >\n              <ion-row style=\"background-color: ghostwhite\">\n                <ion-col>\n                  <ion-select\n                    formControlName=\"tahun\"\n                    interface=\"popover\"\n                    placeholder=\"Tahun\"\n                    style=\"\n                      border-style: solid;\n                      border-width: 0.1px;\n                      border-radius: 5px;\n                      border-color: #999999;\n                      height: 35px;\n                    \"\n                  >\n                    <ion-select-option *ngFor=\"let th of tahun\" [value]=\"th\"\n                      >{{th}}</ion-select-option\n                    >\n                  </ion-select>\n                </ion-col>\n                <ion-col>\n                  <ion-select\n                    formControlName=\"bulan\"\n                    interface=\"popover\"\n                    placeholder=\"Bulan\"\n                    style=\"\n                      border-style: solid;\n                      border-width: 0.1px;\n                      border-radius: 5px;\n                      border-color: #999999;\n                      height: 35px;\n                    \"\n                  >\n                    <ion-select-option value=\"1\">Januari</ion-select-option>\n                    <ion-select-option value=\"2\">Februari</ion-select-option>\n                    <ion-select-option value=\"3\">Maret</ion-select-option>\n                    <ion-select-option value=\"4\">April</ion-select-option>\n                    <ion-select-option value=\"5\">Mei</ion-select-option>\n                    <ion-select-option value=\"6\">Juni</ion-select-option>\n                    <ion-select-option value=\"7\">Juli</ion-select-option>\n                    <ion-select-option value=\"8\">Agustus</ion-select-option>\n                    <ion-select-option value=\"9\">September</ion-select-option>\n                    <ion-select-option value=\"10\">Oktober</ion-select-option>\n                    <ion-select-option value=\"11\">November</ion-select-option>\n                    <ion-select-option value=\"12\">Desember</ion-select-option>\n                  </ion-select>\n                </ion-col>\n                <ion-col>\n                  <ion-button\n                    size=\"small\"\n                    (click)=\"filterpoint_category_point()\"\n                    [disabled]=\"!formpoint_category_poin.valid\"\n                    expand=\"block\"\n                    color=\"primary\"\n                  >\n                    <strong>Cari</strong>\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </form>\n            <center\n              *ngIf=\"category_point==null || category_point=='' || !category_point\"\n            >\n              <h5>Tidak ada data pada bulan ini</h5>\n            </center>\n            <div *ngFor=\"let i of category_point\" class=\"boxed\">\n              <ion-row>\n                <ion-col class=\"target-header\">\n                  <span class=\"inv2\">{{i.description}}</span>\n                </ion-col>\n              </ion-row>\n              <ion-row *ngIf=\"i.invoice_reward != 0\" class=\"bonus-box1\">\n                <ion-col class=\"bonus-title\"> Tanggal Inject </ion-col>\n                <ion-col class=\"bonus-text\"> {{i.inject_date|date}} </ion-col>\n              </ion-row>\n              <ion-row *ngIf=\"i.invoice_reward != 0\" class=\"bonus-box\">\n                <ion-col class=\"bonus-title\"> Bonus Poin </ion-col>\n                <ion-col class=\"bonus-text_bold\"> {{i.point|number}} </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col class=\"bonus-title\">\n                  <ion-col class=\"detail_poin\"> Detail Poin </ion-col>\n                </ion-col>\n                <ion-col\n                  class=\"bonus-text\"\n                  (click)=\"i.descriptionnospace= !i.descriptionnospace\"\n                >\n                  <ion-icon\n                    *ngIf=\"i.descriptionnospace\"\n                    id=\"tutorialIcon\"\n                    name=\"add-circle-outline\"\n                    style=\"color: #e8712c; font-size: 20px; font-weight: bold\"\n                  ></ion-icon>\n                  <ion-icon\n                    *ngIf=\"!i.descriptionnospace\"\n                    name=\"ellipsis-horizontal-circle-outline\"\n                    style=\"color: #e8712c; font-size: 20px; font-weight: bold\"\n                  ></ion-icon>\n                </ion-col>\n              </ion-row>\n              <!-- <div style=\"border-style: solid;border-width: 0.1px; border-color: rgb(150, 148, 148)\"></div> -->\n              <div id=\"tutorial\" *ngIf=\"!i.descriptionnospace\">\n                <ion-grid>\n                  <ion-row class=\"bonus-box1\">\n                    <ion-col class=\"bonus-title\">Target Sales</ion-col>\n                    <ion-col class=\"bonus-text_bold\">\n                      {{i.isValue}} {{i.target|number}}\n                    </ion-col>\n                  </ion-row>\n                  <ion-row class=\"bonus-box1\">\n                    <ion-col class=\"bonus-title\">Pencapaian Sales</ion-col>\n                    <ion-col class=\"bonus-text_bold\">\n                      {{i.isValue}} {{i.achievement|number}}\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'palapa_poin'\">\n          <div *ngIf=\"!basic_point\">\n            <!-- <img src=\"../../assets/imgs/loading.gif\" /><br />\n            <img src=\"../../assets/imgs/loading.gif\" /> -->\n          </div>\n          <div *ngIf=\"basic_point\">\n            <form [formGroup]=\"formpoint_palapa\" style=\"margin-top: -20px\">\n              <ion-row style=\"background-color: ghostwhite\">\n                <ion-col>\n                  <ion-select\n                    formControlName=\"tahun\"\n                    interface=\"popover\"\n                    placeholder=\"Tahun\"\n                    style=\"\n                      border-style: solid;\n                      border-width: 0.1px;\n                      border-radius: 5px;\n                      border-color: #999999;\n                      height: 35px;\n                    \"\n                  >\n                    <ion-select-option *ngFor=\"let th of tahun\" [value]=\"th\"\n                      >{{th}}</ion-select-option\n                    >\n                  </ion-select>\n                </ion-col>\n                <ion-col>\n                  <ion-select\n                    formControlName=\"bulan\"\n                    interface=\"popover\"\n                    placeholder=\"Bulan\"\n                    style=\"\n                      border-style: solid;\n                      border-width: 0.1px;\n                      border-radius: 5px;\n                      border-color: #999999;\n                      height: 35px;\n                    \"\n                  >\n                    <ion-select-option value=\"1\">Januari</ion-select-option>\n                    <ion-select-option value=\"2\">Februari</ion-select-option>\n                    <ion-select-option value=\"3\">Maret</ion-select-option>\n                    <ion-select-option value=\"4\">April</ion-select-option>\n                    <ion-select-option value=\"5\">Mei</ion-select-option>\n                    <ion-select-option value=\"6\">Juni</ion-select-option>\n                    <ion-select-option value=\"7\">Juli</ion-select-option>\n                    <ion-select-option value=\"8\">Agustus</ion-select-option>\n                    <ion-select-option value=\"9\">September</ion-select-option>\n                    <ion-select-option value=\"10\">Oktober</ion-select-option>\n                    <ion-select-option value=\"11\">November</ion-select-option>\n                    <ion-select-option value=\"12\">Desember</ion-select-option>\n                  </ion-select>\n                </ion-col>\n                <ion-col>\n                  <ion-button\n                    size=\"small\"\n                    (click)=\"filterpoint_palapa()\"\n                    [disabled]=\"!formpoint_palapa.valid\"\n                    expand=\"block\"\n                    color=\"primary\"\n                  >\n                    <strong>Cari</strong>\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </form>\n            <center *ngIf=\"palapa==null || palapa=='' || !palapa\">\n              <h5>Tidak ada data pada bulan ini</h5>\n            </center>\n            <div *ngFor=\"let i of palapa\" class=\"boxed\">\n              <ion-row>\n                <ion-col class=\"target-header\">\n                  <span class=\"inv2\">{{i.description}}</span>\n                </ion-col>\n              </ion-row>\n              <ion-row *ngIf=\"i.invoice_reward != 0\" class=\"bonus-box1\">\n                <ion-col class=\"bonus-title\"> Tanggal Inject </ion-col>\n                <ion-col class=\"bonus-text\">\n                  {{i.inject_date|date}}\n                </ion-col>\n              </ion-row>\n              <ion-row *ngIf=\"i.invoice_reward != 0\" class=\"bonus-box\">\n                <ion-col class=\"bonus-title\"> Pencapaian Sales </ion-col>\n                <ion-col class=\"bonus-text_bold\">\n                  {{i.achievement|number}}\n                </ion-col>\n              </ion-row>\n              <ion-row *ngIf=\"i.invoice_reward != 0\" class=\"bonus-box\">\n                <ion-col class=\"bonus-title\"> Bonus Poin </ion-col>\n                <ion-col class=\"bonus-text_bold\">\n                  {{i.point|number}}\n                </ion-col>\n              </ion-row>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div *ngSwitchCase=\"'point_aktif'\">\n      <!-- <div *ngIf=\"!invoices\">\n        <img src=\"../../assets/imgs/loading.gif\"><br>\n        <img src=\"../../assets/imgs/loading.gif\">\n      </div>-->\n      <div>\n        <!-- <form [formGroup]=\"formpoint_invoice\">\n        <ion-row style=\"background-color:ghostwhite\">\n          <ion-col>\n            <ion-select formControlName=\"tahun\" interface=\"popover\" placeholder=\"Tahun\" style=\"border-style:solid; border-width: 0.1px; border-radius: 5px; border-color: #999999;height: 35px;\">\n              <ion-select-option  *ngFor=\"let th of tahun\" [value]=\"th\">{{th}}</ion-select-option>\n            </ion-select>\n        </ion-col>\n        <ion-col >\n          <ion-select formControlName=\"bulan\" interface=\"popover\" placeholder=\"Bulan\" style=\"border-style:solid; border-width: 0.1px; border-radius: 5px; border-color: #999999; height: 35px;\">\n            <ion-select-option value=\"1\">Januari</ion-select-option>\n            <ion-select-option value=\"2\">Februari</ion-select-option>\n            <ion-select-option value=\"3\">Maret</ion-select-option>\n            <ion-select-option value=\"4\">April</ion-select-option>\n            <ion-select-option value=\"5\">Mei</ion-select-option>\n            <ion-select-option value=\"6\">Juni</ion-select-option>\n            <ion-select-option value=\"7\">Juli</ion-select-option>\n            <ion-select-option value=\"8\">Agustus</ion-select-option>\n            <ion-select-option value=\"9\">September</ion-select-option>\n            <ion-select-option value=\"10\">Oktober</ion-select-option>\n            <ion-select-option value=\"11\">November</ion-select-option>\n            <ion-select-option value=\"12\">Desember</ion-select-option>\n          </ion-select>\n      </ion-col>\n      <ion-col>\n        <ion-button size=\"small\" (click)=\"filterpoint_invoice()\" [disabled]=\"!formpoint_invoice.valid\"  expand=\"block\" color=\"primary\">\n          <strong>Cari</strong>\n        </ion-button>\n    </ion-col>\n    </ion-row>\n    </form> -->\n        <center *ngIf=\"poin_aktif==null || poin_aktif=='' || !poin_aktif\">\n          <h5>Tidak ada data pada bulan ini</h5>\n        </center>\n        <ion-grid class=\"boxed\" *ngFor=\"let v of poin_aktif\">\n          <ion-row>\n            <ion-col class=\"target-header\">\n              <span class=\"inv2\">{{v.point_month_name}}</span>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"target-header\">\n              <span class=\"inv\"></span>\n              <span class=\"dt\"></span>\n            </ion-col>\n            <ion-col class=\"amount\">\n              <!-- Rp. {{i.invoice|number}} -->\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"bonus-box\">\n            <ion-col class=\"target-header\">\n              <span class=\"dt\">Total Poin</span>\n            </ion-col>\n            <ion-col class=\"amount_invoice\">\n              {{v.point_amount|number}}\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"bonus-box\">\n            <ion-col class=\"target-header\">\n              <span class=\"dt\">Expired</span>\n            </ion-col>\n            <ion-col class=\"amount_invoice\">\n              <span class=\"detail_poin\">{{v.point_exp_date}}</span>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n\n    <div *ngSwitchCase=\"'redeem'\">\n      <ion-segment [(ngModel)]=\"segmenlogammulia\" style=\"color: blue\">\n        <ion-segment-button value=\"logammulia\">\n          <ion-label>Logam Mulia</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"ewalet\">\n          <ion-label>E-Walet</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n      <div [ngSwitch]=\"segmenlogammulia\">\n        <div *ngSwitchCase=\"'logammulia'\">\n          <div *ngFor=\"let r of redeems\">\n            <ion-grid *ngIf=\"r.gift_name.slice(0,5) =='Logam'\" class=\"boxed\">\n              <ion-row>\n                <ion-col>\n                  <div class=\"r-name\">{{r.gift_name}}</div>\n                  <div class=\"r-date\">{{r.redeem_date|date}}</div>\n                </ion-col>\n                <ion-col>\n                <div (click)=\"copyinvoice(r.redeem_no)\"   class=\"r-no\" >#{{r.redeem_no|uppercase}}</div>\n                 <div class=\"r-poin\">\n                    Poin Terpakai:\n                    <span style=\"font-weight: 500; color: rgba(0, 0, 0, 0.7)\"\n                      >{{r.point|number}}</span\n                    >\n                    Poin\n                  </div>\n                </ion-col>\n              </ion-row>\n\n              <ion-row\n                class=\"bonus-box\"\n                *ngIf=\"r.tanggal_pengiriman && r.tanggal_pengiriman != ''\"\n              >\n                <ion-col class=\"bonus-title\"> Tanggal Pengiriman </ion-col>\n                <ion-col class=\"bonus-text\">\n                  {{r.tanggal_pengiriman|date}}\n                </ion-col>\n              </ion-row>\n\n              <ion-row\n                *ngIf=\"r.expedisi && r.expedisi != '-'\"\n                class=\"bonus-box\"\n              >\n                <ion-col class=\"bonus-title\"> Kurir Pengiriman </ion-col>\n                <ion-col class=\"bonus-text\"> {{r.expedisi}} </ion-col>\n              </ion-row>\n\n              <ion-row class=\"bonus-box\">\n                <ion-col class=\"bonus-title\"> Status Pengiriman </ion-col>\n                <ion-col class=\"bonus-text\">\n                  <span\n                    class=\"statuses-selesai\"\n                    *ngIf=\"r.status_delivery == 'SELESAI'\"\n                    >{{r.status_delivery}}</span\n                  >\n                  <span class=\"statuses\" *ngIf=\"r.status_delivery != 'SELESAI'\"\n                    >{{r.status_delivery}}</span\n                  >\n                </ion-col>\n              </ion-row>\n              <ion-row\n                *ngIf=\"r.status_delivery === 'DIKIRIM' || r.status_delivery == 'SELESAI'\"\n                class=\"bonus-box\"\n              >\n                <ion-col class=\"bonus-title\">\n                  Nomor Resi\n                  <!-- <span (click)=\"cekresi(r.no_awb)\" class=\"cekresi\">\n                  Cek Resi\n                </span> -->\n                </ion-col>\n                <ion-col class=\"bonus-text\">\n                  {{r.no_voucher}}\n                  <span (click)=\"cekresi(r.no_voucher)\" class=\"cekresi\">\n                    &raquo; Cek Resi\n                  </span>\n                </ion-col>\n              </ion-row>\n \n              <ion-row class=\"bonus-box\" *ngIf=\"r.penerima && r.penerima != null\">\n                <ion-col class=\"bonus-title\">Penerima </ion-col>\n                <ion-col class=\"bonus-text\"> {{r.penerima}} </ion-col>\n              </ion-row>\n\n              <ion-row\n                *ngIf=\"r.expedisi && r.expedisi != '-'\"\n                class=\"bonus-box\"\n              >\n                <ion-col class=\"bonus-title\"> Kurir Pengiriman </ion-col>\n                <ion-col class=\"bonus-text\"> {{r.expedisi}} </ion-col>\n              </ion-row>\n\n              <ion-row\n                *ngIf=\"r.status_delivery === 'DITERIMA'\"\n                class=\"bonus-box\"\n              >\n                <ion-col class=\"bonus-title\">\n                  Nomor Resi\n                  <!-- <span (click)=\"cekresi(r.no_awb)\" class=\"cekresi\">\n                  Cek Resi\n                </span> -->\n                </ion-col>\n                <ion-col class=\"bonus-text\">\n                  {{r.no_voucher}}\n                  <span (click)=\"cekresi(r.no_voucher)\" class=\"cekresi\">\n                    &raquo; Cek Resi\n                  </span>\n                </ion-col>\n              </ion-row>\n              <ion-row\n                *ngIf=\"r.picture_location && r.picture_location != '-'\"\n                class=\"bonus-box\"\n              >\n                <ion-col class=\"bonus-title\"> Foto Pengiriman </ion-col>\n                <ion-col class=\"bonus-text\">\n                  <span (click)=\"lihatresi(r)\" class=\"cekresi\">\n                    &raquo; Lihat Foto\n                  </span>\n                </ion-col>\n              </ion-row>\n              <ion-row\n                *ngIf=\"r.keterangan && r.keterangan != null\"\n                class=\"bonus-box\"\n              >\n                <ion-col class=\"bonus-title\">Keterangan</ion-col>\n                <ion-col class=\"bonus-text\"> {{r.keterangan}} </ion-col>\n              </ion-row>\n\n              <ion-row\n                *ngIf=\"r.status_delivery && r.status_delivery == 'DITERIMA'\"\n              >\n              <!--PRODUCTION-->\n                <ion-col class=\"btn-title\">\n                  <ion-button\n                    size=\"small\"\n                    fill=\"outline\"\n                    (click)=\"lapor(r.redeem_no, r.gift_name)\"\n                    expand=\"block\"\n                    color=\"danger\"\n                  >\n                    <strong>Lapor</strong>\n                  </ion-button>\n                </ion-col>\n                <ion-col class=\"btn-text\">\n                  <ion-button\n                    size=\"small\"\n                    fill=\"outline\"\n                    (click)=\"selesai(r.redeem_no)\"\n                    expand=\"block\"\n                    color=\"success\"\n                  >\n                    <strong>Selesai</strong>\n                  </ion-button>\n                </ion-col>\n                <!--MIRROR-->\n                <!-- <ion-col class=\"btn-title\">\n                  <ion-button \n                  [disabled]=\"true\"\n                    size=\"small\"\n                    fill=\"outline\"\n                    expand=\"block\"\n                    color=\"danger\"\n                  >\n                    <strong>Lapor</strong>\n                  </ion-button>\n                </ion-col>\n                <ion-col class=\"btn-text\">\n                  <ion-button\n                    size=\"small\"\n                    fill=\"outline\"\n                    [disabled]=\"true\"\n                    expand=\"block\"\n                    color=\"success\"\n                  >\n                    <strong>Selesai</strong>\n                  </ion-button>\n                </ion-col> -->\n              </ion-row>\n            </ion-grid>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'ewalet'\">\n          <div *ngFor=\"let r of redeems\">\n            <ion-grid *ngIf=\"r.gift_name.slice(0,5) !='Logam'\" class=\"boxed\">\n              <ion-row>\n                <ion-col>\n                  <div class=\"r-name\">{{r.gift_name}}</div>\n                  <div class=\"r-date\">{{r.redeem_date|date}}</div>\n                </ion-col>\n                <ion-col>\n                  <div (click)=\"copyinvoice(r.redeem_no)\" class=\"r-no\">#{{r.redeem_no|uppercase}}</div>\n                  <div class=\"r-poin\">\n                    Poin Terpakai:\n                    <span style=\"font-weight: 500; color: rgba(0, 0, 0, 0.7)\"\n                      >{{r.point|number}}</span\n                    >\n                    Poin\n                  </div>\n                </ion-col>\n              </ion-row>\n\n              <ion-row\n                class=\"bonus-box\"\n                *ngIf=\"r.tanggal_pengiriman && r.tanggal_pengiriman != ''\"\n              >\n                <ion-col class=\"bonus-title\"> Tanggal Pengiriman </ion-col>\n                <ion-col class=\"bonus-text\">\n                  {{r.tanggal_pengiriman|date}}\n                </ion-col>\n              </ion-row>\n\n              <ion-row\n                *ngIf=\"r.expedisi && r.expedisi != '-'\"\n                class=\"bonus-box\"\n              >\n                <ion-col class=\"bonus-title\"> Kurir Pengiriman </ion-col>\n                <ion-col class=\"bonus-text\"> {{r.expedisi}} </ion-col>\n              </ion-row>\n\n              <ion-row class=\"bonus-box\">\n                <ion-col class=\"bonus-title\"> Status Pengiriman </ion-col>\n                <ion-col class=\"bonus-text\">\n                  <span\n                    class=\"statuses-selesai\"\n                    *ngIf=\"r.status_delivery == 'SELESAI'\"\n                    >{{r.status_delivery}}</span\n                  >\n                  <span class=\"statuses\" *ngIf=\"r.status_delivery != 'SELESAI'\"\n                    >{{r.status_delivery}}</span\n                  >\n                </ion-col>\n              </ion-row>\n              <ion-row\n                *ngIf=\"r.status_delivery === 'DIKIRIM'\"\n                class=\"bonus-box\"\n              >\n                <ion-col class=\"bonus-title\">\n                  Nomor Resi\n                  <!-- <span (click)=\"cekresi(r.no_awb)\" class=\"cekresi\">\n                  Cek Resi\n                </span> -->\n                </ion-col>\n                <ion-col class=\"bonus-text\">\n                  {{r.no_voucher}}\n                  <span (click)=\"cekresi(r.no_voucher)\" class=\"cekresi\">\n                    &raquo; Cek Resi\n                  </span>\n                </ion-col>\n              </ion-row>\n\n              <ion-row\n                class=\"bonus-box\"\n                *ngIf=\"r.penerima && r.penerima != null\"\n              >\n                <ion-col class=\"bonus-title\"> Penerima </ion-col>\n                <ion-col class=\"bonus-text\"> {{r.penerima}} </ion-col>\n              </ion-row>\n\n              <ion-row\n                *ngIf=\"r.expedisi && r.expedisi != '-'\"\n                class=\"bonus-box\"\n              >\n                <ion-col class=\"bonus-title\"> Kurir Pengiriman </ion-col>\n                <ion-col class=\"bonus-text\"> {{r.expedisi}} </ion-col>\n              </ion-row>\n\n              <ion-row\n                *ngIf=\"r.status_delivery === 'DITERIMA'\"\n                class=\"bonus-box\"\n              >\n                <ion-col class=\"bonus-title\">\n                  Nomor Resi\n                  <!-- <span (click)=\"cekresi(r.no_awb)\" class=\"cekresi\">\n                  Cek Resi\n                </span> -->\n                </ion-col>\n                <ion-col class=\"bonus-text\">\n                  {{r.no_voucher}}\n                  <span (click)=\"cekresi(r.no_voucher)\" class=\"cekresi\">\n                    &raquo; Cek Resi\n                  </span>\n                </ion-col>\n              </ion-row>\n              <ion-row\n                *ngIf=\"r.picture_location && r.picture_location != '-'\"\n                class=\"bonus-box\"\n              >\n                <ion-col class=\"bonus-title\"> Foto Pengiriman </ion-col>\n                <ion-col class=\"bonus-text\">\n                  <span (click)=\"lihatresi(r)\" class=\"cekresi\">\n                    &raquo; Lihat Foto\n                  </span>\n                </ion-col>\n              </ion-row>\n              <ion-row\n                *ngIf=\"r.keterangan && r.keterangan != null\"\n                class=\"bonus-box\"\n              >\n                <ion-col class=\"bonus-title\">Keterangan</ion-col>\n                <ion-col class=\"bonus-text\"> {{r.keterangan}} </ion-col>\n              </ion-row> \n\n              <ion-row\n                *ngIf=\"r.status_delivery && r.status_delivery == 'DITERIMA'\"\n              >\n              <!--PRODUCTION-->\n                <ion-col class=\"btn-title\">\n                  <ion-button\n                    size=\"small\"\n                    fill=\"outline\"\n                    (click)=\"lapor(r.redeem_no, r.gift_name)\"\n                    expand=\"block\"\n                    color=\"danger\"\n                  >\n                    <strong>Lapor</strong>\n                  </ion-button>\n                </ion-col>\n                <ion-col class=\"btn-text\">\n                  <ion-button\n                    size=\"small\"\n                    fill=\"outline\"\n                    (click)=\"selesai(r.redeem_no)\"\n                    expand=\"block\"\n                    color=\"success\"\n                  >\n                    <strong>Selesai</strong>\n                  </ion-button>\n                </ion-col>\n                <!--MIRROR-->\n                <!-- <ion-col class=\"btn-title\">\n                  <ion-button\n                    size=\"small\"\n                    fill=\"outline\"\n                    [disabled]=\"true\"\n                    expand=\"block\"\n                    color=\"danger\"\n                  >\n                    <strong>Lapor</strong>\n                  </ion-button>\n                </ion-col>\n                <ion-col class=\"btn-text\">\n                  <ion-button\n                    size=\"small\"\n                    fill=\"outline\"\n                    [disabled]=\"true\"\n                    expand=\"block\"\n                    color=\"success\"\n                  >\n                    <strong>Selesai</strong>\n                  </ion-button>\n                </ion-col> -->\n              </ion-row>\n            </ion-grid>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <p>&nbsp;</p>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map