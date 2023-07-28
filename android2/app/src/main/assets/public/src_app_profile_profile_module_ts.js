"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 6829:
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 2919);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 4523:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 6829);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 2919);







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 2919:
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page.html?ngResource */ 8907);
/* harmony import */ var _profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss?ngResource */ 6611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dolphin.service */ 2171);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _modals_ewallet_details_ewallet_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/ewallet-details/ewallet-details.page */ 131);
/* harmony import */ var _app_services_photo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/services/photo.service */ 1957);
/* harmony import */ var _app_modals_map_pengiriman_map_pengiriman_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/modals/map-pengiriman/map-pengiriman.page */ 6600);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 318);













const IMAGE_DIR = 'stored-images';
let ProfilePage = class ProfilePage {
    constructor(dolphinService, fb, loadingController, alertController, router, modalController, photoService, toastCtrl, plt, sanitizer) {
        this.dolphinService = dolphinService;
        this.fb = fb;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.router = router;
        this.modalController = modalController;
        this.photoService = photoService;
        this.toastCtrl = toastCtrl;
        this.plt = plt;
        this.sanitizer = sanitizer;
        this.images = [];
        this.segmen = 'alamat';
        this.editMode = false;
        this.isModalOpen = false;
        this.isModalOpenFoto = false;
        // Helper function
        this.convertBlobToBase64 = (blob) => new Promise((resolve, reject) => {
            const reader = new FileReader;
            reader.onerror = reject;
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(blob);
        });
        this.loadData();
    }
    ionViewDidLoad() {
        this.setlokasi();
        this.refresh();
    }
    ionViewWillEnter() {
        this.setlokasi();
        this.refresh();
    }
    refreshlokasi() {
        this.setlokasi();
    }
    refresh() {
        this.varAlamat = null;
        this.varPengiriman = null;
        this.loadData();
    }
    ngOnInit() {
        this.dolphinService.getdetailprofile().subscribe(data => {
            this.profile = data[0];
            console.log('PROFIL', this.profile);
            this.phonenumber = this.profile.no_hp;
        });
    }
    setlokasi() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // const ret = await Storage.get({ key: 'lokasi' });
        });
    }
    edit() {
        this.editMode = true;
    }
    cancelEdit() {
        this.editMode = false;
    }
    loadData() {
        const halaman = this.router.getCurrentNavigation();
        console.log('halaman', halaman);
        if (halaman != null) {
            this.segmen = halaman.extras.state.page;
        }
        this.dolphinService.getdetailprofile().subscribe((res) => {
            if (res) {
                this.varAlamat = res[0];
            }
        });
        this.dolphinService.getewalletlist().subscribe((res) => {
            if (res) {
                if (res.status == 'success') {
                    this.redeemEwallet = res.retdata;
                }
            }
        });
        this.dolphinService.getpengiriman().subscribe((res) => {
            if (res) {
                this.varPengiriman = res.retdata[0];
                this.varPengirimanlokasi = res.retdata[0].url;
                if (res.retdata[0].image_lokasi == "" || res.retdata[0].image_lokasi == null) {
                    this.fotolokasi = null;
                }
                else {
                    this.fotolokasi = 'https://admin.ulidolphin.com' + res.retdata[0].image_lokasi;
                }
                console.log('varPengiriman', this.fotolokasi);
                this.alamatPengiriman = this.fb.group({
                    nama_penerima: [this.varPengiriman.nama_penerima, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                    nama_jalan: [this.varPengiriman.nama_jalan, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                    no_rumah: [this.varPengiriman.no_rumah, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                    kelurahan: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                    kecamatan: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                    kode_pos: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                    kota: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                    alamat_detail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                    lokasi: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                    imagelokasi: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                    // provinsi: [this.varPengiriman.provinsi, [Validators.required]],
                    provinsi: '',
                    //  no_telp: [this.varPengiriman.no_telp, [Validators.required]]
                });
                this.dolphinService.getarea('prov', '', '', '', '').subscribe((data) => {
                    if (data.status == 'success') {
                        this.province = data.retdata;
                    }
                });
            }
        });
    }
    showLoading(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: msg,
                backdropDismiss: false
            });
            yield loading.present();
        });
    }
    showAlert(title, msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                message: msg,
                buttons: [{ text: 'Ok' }]
            });
            yield alert.present();
        });
    }
    onSelectedChange(types) {
        if (types == 'prov') {
            this.dolphinService.getarea('city', this.alamatPengiriman.value['provinsi'], '', '', '').subscribe((data) => {
                if (data.status == 'success') {
                    this.city = data.retdata;
                    this.subdistrict = null;
                    this.village = null;
                    this.postalcode = null;
                    this.alamatPengiriman.value['kota'] = null;
                    this.alamatPengiriman.value['kecamatan'] = null;
                    this.alamatPengiriman.value['kelurahan'] = null;
                }
            });
        }
        else if (types == 'city') {
            this.dolphinService.getarea('subdistrict', this.alamatPengiriman.value['provinsi'], this.alamatPengiriman.value['kota'], '', '').subscribe((data) => {
                if (data.status == 'success') {
                    this.subdistrict = data.retdata;
                    this.village = null;
                    this.postalcode = null;
                    this.alamatPengiriman.value['kecamatan'] = null;
                    this.alamatPengiriman.value['kelurahan'] = null;
                }
            });
        }
        else if (types == 'subdistrict') {
            this.dolphinService.getarea('village', this.alamatPengiriman.value['provinsi'], this.alamatPengiriman.value['kota'], this.alamatPengiriman.value['kecamatan'], '').subscribe((data) => {
                if (data.status == 'success') {
                    this.village = data.retdata;
                    this.postalcode = null;
                    this.alamatPengiriman.value['kelurahan'] = null;
                }
            });
        }
        else if (types == 'village') {
            this.dolphinService.getarea('postalcode', this.alamatPengiriman.value['provinsi'], this.alamatPengiriman.value['kota'], this.alamatPengiriman.value['kecamatan'], this.alamatPengiriman.value['kelurahan']).subscribe((data) => {
                if (data.status == 'success') {
                    this.postalcode = data.retdata;
                }
            });
        }
        else if (types == 'tipe_gambar') {
            if (this.alamatPengiriman.value['tipe_gambar'] == 'Camera') {
                this.tipe_gambar = 'camera';
            }
            else {
                this.tipe_gambar = 'galeri';
            }
        }
    }
    submitEditPengirimanotp() {
        this.dolphinService.setupotp().subscribe(data => {
            console.log(data.status_sms);
            if (data.status_sms == 1) {
                this.kirimsms();
            }
            else {
                this.kirimwa();
            }
        });
    }
    kirimsms() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let phoneNum = this.phonenumber.replace(/\s/g, '').trim();
            if (phoneNum.charAt(0) == '0') {
                phoneNum = phoneNum.replace('0', '62');
            }
            const alert = yield this.alertController.create({
                header: 'Perhatian',
                message: 'Untuk melanjutkan Perubahan Alamat Pengiriman, <br>kami akan mengirimkan OTP ke nomor ' + this.phonenumber,
                buttons: [
                    {
                        text: 'Whatsapp',
                        role: 'confirm',
                        handler: () => {
                            this.dolphinService.sendotp(phoneNum, 'wa').subscribe(data => {
                                this.OTP = data.otp;
                                console.log('cekotp', data);
                                this.verifyOTP(data.otp, 'wa');
                                // log auth
                                this.dolphinService.logs_auth('wa', 'Alamat_pengiriman').subscribe(data => { });
                            });
                        },
                    },
                    {
                        text: 'SMS',
                        role: 'confirm',
                        handler: () => {
                            this.dolphinService.sendotp(phoneNum, 'sms').subscribe(data => {
                                this.OTP = data.otp;
                                console.log('cekotp', data);
                                this.verifyOTP(data.otp, 'sms');
                                this.dolphinService.logs_auth('sms', 'Alamat_pengiriman').subscribe(data => { });
                            });
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    kirimwa() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let phoneNum = this.phonenumber.replace(/\s/g, '').trim();
            if (phoneNum.charAt(0) == '0') {
                phoneNum = phoneNum.replace('0', '62');
            }
            const alert = yield this.alertController.create({
                header: 'Perhatian',
                message: 'Untuk melanjutkan Perubahan Alamat Pengiriman, <br>kami akan mengirimkan OTP ke nomor ' + phoneNum,
                buttons: [
                    {
                        text: 'Tidak',
                        handler: () => {
                            // console.log('Tidak')
                        }
                    },
                    {
                        text: 'Ya, Kirimkan sekarang',
                        handler: () => {
                            this.dolphinService.sendotp(phoneNum, 'sms').subscribe(data => {
                                this.OTP = data.otp;
                                console.log('cekotp', data);
                                this.verifyOTP(data.otp, 'sms');
                            });
                            // this.verifyOTP(12345)
                        }
                    },
                ]
            });
            yield alert.present();
        });
    }
    verifyOTP(otp_code, tipe) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let tipeotp;
            if (tipe == "wa") {
                tipeotp = "Whatsapp";
            }
            else {
                tipeotp = "SMS";
            }
            const alert = yield this.alertController.create({
                header: 'Konfirmasi Kode OTP',
                message: 'Kami telah mengirimkan ' + tipeotp + ' OTP ke nomor Anda, <br>isi 5 angka dalam ' + tipeotp + ' tersebut kemudian klik konfirmasi',
                inputs: [
                    {
                        name: 'kodeotp',
                        placeholder: 'isi dengan 5 angka kode OTP..',
                        type: 'number'
                    }
                ],
                buttons: [
                    {
                        text: 'Konfirmasi OTP',
                        handler: (data) => {
                            if (data.kodeotp == otp_code) {
                                this.submitEditPengiriman();
                            }
                            else {
                                this.showalert('Oops..', 'Kode OTP tidak sesuai');
                            }
                        }
                    },
                ]
            });
            yield alert.present();
        });
    }
    submitEditPengiriman() {
        this.showLoading('Menyimpan alamat pengiriman..');
        this.alamatPengiriman.value.image_lokasi = this.foto_upload;
        this.alamatPengiriman.value.url = this.set_alamat_detail;
        this.alamatPengiriman.value.lokasi = this.lokasi;
        this.dolphinService.changePengiriman(this.alamatPengiriman.value).subscribe(d => {
            if (d.status == 'success') {
                this.varPengiriman = null;
                this.editMode = false;
                this.loadData();
            }
            if (d.status == 'err') {
                this.showAlert('Perhatian', d.retdata);
            }
            this.loadingController.dismiss();
        }, (err) => { this.loadingController.dismiss(); });
    }
    lihatstatushadiah() {
        this.router.navigate(['status-hadiah']);
    }
    toEwalletList(e) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modals_ewallet_details_ewallet_details_page__WEBPACK_IMPORTED_MODULE_3__.EwalletDetailsPage,
                componentProps: { redeem: e },
                swipeToClose: true,
                breakpoints: [0, 0.5, 0.7],
                initialBreakpoint: 0.4
            });
            return yield modal.present();
        });
    }
    selectImage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_6__.Camera.getPhoto({
                quality: 90,
                width: 1024,
                allowEditing: false,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_6__.CameraResultType.Uri,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_6__.CameraSource.Prompt,
                promptLabelPhoto: 'Galeri',
                promptLabelPicture: 'Camera'
            });
            if (image) {
                this.saveImage(image);
            }
        });
    }
    saveImage(photo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const base64Data = yield this.readAsBase64(photo);
            this.foto_upload = base64Data;
        });
    }
    readAsBase64(photo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log('blob', this.plt);
            const response = yield fetch(photo.webPath);
            const blob = yield response.blob();
            return yield this.convertBlobToBase64(blob);
        });
    }
    map_pengiriman(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _app_modals_map_pengiriman_map_pengiriman_page__WEBPACK_IMPORTED_MODULE_5__.MapPengirimanPage,
                componentProps: { 'item': item },
                swipeToClose: true,
            });
            modal.onDidDismiss().then((map) => {
                const lok = map.data;
                this.lokasi = lok.lokasi;
                this.set_alamat_detail = 'https://maps.google.com/maps?q=' + lok.lat + ',' + lok.long + '';
                console.log('tagcekmen', this.set_alamat_detail);
            });
            return yield modal.present();
        });
    }
    setOpen(isOpen) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Cek Lokasi',
                message: 'Menuju halaman google maps',
                buttons: [
                    {
                        text: 'Nanti Saja',
                        handler: data => {
                        }
                    },
                    {
                        text: 'Masuk google maps',
                        handler: data => {
                            window.open(this.varPengirimanlokasi, '_system', 'location=yes');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    setOpenFoto(isOpen) {
        this.isModalOpenFoto = isOpen;
    }
    showalert(title, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                message: message,
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    updatetgllahir(value) {
        var date = new Date(value);
        var year = date.toLocaleString("default", { year: "numeric" });
        var month = date.toLocaleString("default", { month: "2-digit" });
        var day = date.toLocaleString("default", { day: "2-digit" });
        var tgl_lahir = year + "-" + month + "-" + day;
        console.log('cektgl', tgl_lahir);
        this.dolphinService.updatetanggallahir(tgl_lahir).subscribe((res) => {
            if (res) {
                if (res.status == 'success') {
                    //this.showalert('Notifikasi','Tanggal lahir berhasil di perbaharui');
                    this.loadData();
                }
            }
        });
    }
    simpanpos() {
        this.dolphinService.updatepos(this.kodepos).subscribe((res) => {
            console.log('resmamen', res, this.kodepos);
            if (res) {
                if (res.status == 'success') {
                    //this.showalert('Notifikasi','Tanggal lahir berhasil di perbaharui');
                    this.loadData();
                }
            }
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__.DolphinService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _app_services_photo_service__WEBPACK_IMPORTED_MODULE_4__.PhotoService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.DomSanitizer }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-profile',
        template: _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 1957:
/*!*******************************************!*\
  !*** ./src/app/services/photo.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoService": () => (/* binding */ PhotoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/camera */ 4241);



const IMAGE_DIR = 'stored-images';
let PhotoService = class PhotoService {
    constructor() { }
    addNewToGallery() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            // Take a photo
            const capturedPhoto = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.Camera.getPhoto({
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.CameraResultType.Uri,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.CameraSource.Camera,
                quality: 100
            });
            // image.webPath will contain a path that can be set as an image src.
            // You can access the original file using image.path, which can be
            // passed to the Filesystem API to read the raw data of the image,
            // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
        });
    }
    addNewToCamera() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            // Take a photo
            const capturedPhoto = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.Camera.getPhoto({
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.CameraResultType.Uri,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.CameraSource.Camera,
                quality: 100
            });
            var imageUrl = capturedPhoto.webPath;
            // Can be set to the src of an image now
            // imageElement.src = imageUrl;
            console.log('tagcekmamenkamera', imageUrl);
        });
    }
};
PhotoService.ctorParameters = () => [];
PhotoService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], PhotoService);



/***/ }),

/***/ 4830:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": () => (/* binding */ CameraDirection),
/* harmony export */   "CameraResultType": () => (/* binding */ CameraResultType),
/* harmony export */   "CameraSource": () => (/* binding */ CameraSource)
/* harmony export */ });
var CameraSource;

(function (CameraSource) {
  /**
   * Prompts the user to select either the photo album or take a photo.
   */
  CameraSource["Prompt"] = "PROMPT";
  /**
   * Take a new photo using the camera.
   */

  CameraSource["Camera"] = "CAMERA";
  /**
   * Pick an existing photo from the gallery or photo album.
   */

  CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));

var CameraDirection;

(function (CameraDirection) {
  CameraDirection["Rear"] = "REAR";
  CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));

var CameraResultType;

(function (CameraResultType) {
  CameraResultType["Uri"] = "uri";
  CameraResultType["Base64"] = "base64";
  CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));

/***/ }),

/***/ 4241:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Camera": () => (/* binding */ Camera),
/* harmony export */   "CameraDirection": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   "CameraResultType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType),
/* harmony export */   "CameraSource": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 6549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 4830);

const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 1327)).then(m => new m.CameraWeb())
});



/***/ }),

/***/ 6611:
/*!******************************************************!*\
  !*** ./src/app/profile/profile.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".head {\n  --border-style: none !important;\n  --border-width: 0px !important;\n}\n\nion-segment-button {\n  width: 150px;\n  min-width: 150px;\n}\n\ncapacitor-google-map {\n  display: inline-block;\n  width: 100%;\n  height: 600px;\n}\n\n.bintang {\n  color: red;\n}\n\n.notifikasi {\n  color: red;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBR0o7O0FBREE7RUFDSSxVQUFBO0FBSUo7O0FBRkU7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUtKIiwiZmlsZSI6InByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWQge1xuICAgIC0tYm9yZGVyLXN0eWxlOiBub25lICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xufVxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgfVxuY2FwYWNpdG9yLWdvb2dsZS1tYXAge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICB9XG4uYmludGFuZyB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuICAubm90aWZpa2FzaXtcbiAgICBjb2xvcjpyZWQ7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9Il19 */";

/***/ }),

/***/ 8907:
/*!******************************************************!*\
  !*** ./src/app/profile/profile.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"unilever\" class=\"head\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" color=\"light\" icon=\"arrow-back-outline\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Profil\n    </ion-title>\n     <ion-buttons slot=\"end\">\n      <ion-button (click)=\"refresh()\">\n        <ion-icon slot=\"icon-only\" name=\"refresh-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-toolbar color=\"unilever\" class=\"head\">\n    <ion-segment [(ngModel)]=\"segmen\">\n      <ion-segment-button value=\"alamat\">\n        <ion-label>Profil Toko</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"pengiriman\">\n        <ion-label>Alamat Pengiriman</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  \n  <div [ngSwitch]=\"segmen\">    \n    <div *ngSwitchCase=\"'alamat'\">\n      <div *ngIf=\"!varAlamat\">\n        <img src=\"../../assets/imgs/loading.gif\"><br>\n        <img src=\"../../assets/imgs/loading.gif\">\n      </div>\n      <div *ngIf=\"varAlamat\">\n        <ion-list>\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">\n              <p>Nama Toko</p>\n              <h2>{{varAlamat.store_name}}</h2>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">\n              <p>Nama Pemilik</p>\n              <h2>{{varAlamat.NAMA_PEMILIK}}</h2>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">\n              <p>Alamat Toko</p>\n              <h2>{{varAlamat.ALAMAT_TOKO}}</h2>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">\n              <p>Area</p>\n              <h2>{{varAlamat.area}}</h2>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <div *ngIf=\"varAlamat.kode_pos !=null\">\n              <p>Kode POS</p>\n              <h5>{{varAlamat.kode_pos}}</h5>\n            </div>\n                <ion-row *ngIf=\"varAlamat.kode_pos ==null\">\n                  <ion-col size=\"9\">\n                    <ion-input type=\"text\" maxlength=\"6\"  [(ngModel)]=\"kodepos\"  placeholder=\"Isi Kode POS\"></ion-input>\n                  </ion-col>\n                  <ion-col size=\"3\">\n                    <ion-button  (click)=\"simpanpos()\">Simpan</ion-button>\n                  </ion-col>\n                </ion-row>\n             \n          \n          </ion-item>\n          <!-- <ion-item>\n            <ion-label class=\"ion-text-wrap\">\n              <p>Kode Distributor</p>\n              <h2>{{varAlamat.store_name}}</h2>\n            </ion-label>\n          </ion-item> -->\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">\n              <p>Distributor</p>\n              <h2>{{varAlamat.distributor}}</h2>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">\n              <p>No. HP</p>\n              <h2>{{varAlamat.no_hp}}</h2>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">\n              <p>Alamt Email</p>\n              <h2>{{varAlamat.user_email}}</h2>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">\n              <p>Tanggal Lahir</p>\n              <h2>{{varAlamat.birth_date}}</h2>\n            </ion-label>\n            <div *ngIf=\"varAlamat.birth_date ==null\">\n            <ion-button id=\"open-modal\">Pilih Tanggal Lahir</ion-button>\n              <ion-modal   \n              [initialBreakpoint]=\"0.5\" trigger=\"open-modal\">\n                <ng-template>\n                  <ion-content>\n                    <ion-datetime \n                    #datetime\n                    [isDateEnabled]=\"isWeekday\" \n                    presentation=\"date\"\n                    [(ngModel)]=\"today\"\n                    displayFormat=\"YYYY-MM-DD\"\n                    pickerFormat=\"DD-MM-YY HH:mm:ss\"\n                    [showDefaultButtons]=\"true\"\n                   \n                    (click)=\"updatetgllahir(datetime.value)\" \n                    >\n                  </ion-datetime>\n                  \n                  </ion-content>\n                </ng-template>\n              </ion-modal>\n            </div>\n          </ion-item>\n        </ion-list>\n        <!-- <div class=\"ion-padding\">\n          <ion-button expand=\"block\" color=\"success\" (click)=\"lihatstatushadiah()\">Lihat Status Hadiah</ion-button>\n        </div>\n        <ion-list>\n          <ion-list-header lines=\"inset\">\n            <ion-label>Redeem e-Wallet bulan ini</ion-label>\n          </ion-list-header>\n          \n          <ion-item *ngFor=\"let e of redeemEwallet\" button (click)=\"toEwalletList(e)\">\n            <ion-avatar slot=\"start\">\n              <img *ngIf=\"e.code == 'P02'\" src=\"../../assets/imgs/ewallet/logo-gopay.png\">\n              <img *ngIf=\"e.code == 'P01'\" src=\"../../assets/imgs/ewallet/logo-ovo.png\">\n              <img *ngIf=\"e.code == 'P05'\" src=\"../../assets/imgs/ewallet/logo-shopee.png\">\n              <img *ngIf=\"e.code == 'P03'\" src=\"../../assets/imgs/ewallet/logo-dana.png\">\n              <img *ngIf=\"e.code == 'P04'\" src=\"../../assets/imgs/ewallet/logo-linkaja.png\">\n            </ion-avatar>\n            <ion-label>\n              <span *ngIf=\"e.code == 'P02'\" style=\"color: #08a413;\">GoPay</span>\n              <span *ngIf=\"e.code == 'P01'\" style=\"color: #49328f;\">OVO Cash</span>\n              <span *ngIf=\"e.code == 'P05'\" style=\"color: #e84a2b;\">ShopeePay</span>\n              <span *ngIf=\"e.code == 'P03'\" style=\"color: #0e89e1;\">Dana</span>\n              <span *ngIf=\"e.code == 'P04'\" style=\"color: #e02428;\">LinkAja</span>\n            </ion-label>\n            <ion-note style=\"color:#444\">\n              Rp. {{e.Amount|number}}\n            </ion-note>\n          </ion-item>\n        </ion-list> -->\n\n      </div>\n    </div>\n    <div *ngSwitchCase=\"'pengiriman'\">\n      <div *ngIf=\"!varPengiriman\">\n        <img src=\"../../assets/imgs/loading.gif\"><br>\n        <img src=\"../../assets/imgs/loading.gif\">\n      </div>\n      <div *ngIf=\"varPengiriman\">\n        <ion-list *ngIf=\"!editMode\">\n           \n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">\n              <p>Nama Penerima</p>\n              <h2>{{varPengiriman.nama_penerima}}</h2>\n            </ion-label>\n          </ion-item>\n          <!-- <ion-item>\n            <ion-label class=\"ion-text-wrap\">\n              <p>No. Telp Penerima</p>\n              <h2>{{varPengiriman.no_telp}}</h2>\n            </ion-label>\n          </ion-item> -->\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">\n              <p>Nama Jalan</p>\n              <h2>{{varPengiriman.nama_jalan}}</h2>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">\n              <p>No. Rumah</p>\n              <h2>{{varPengiriman.no_rumah}}</h2>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">\n              <p>Provinsi</p>\n              <h2>{{varPengiriman.provinsi}}</h2>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">\n              <p>Kota/Kabupaten</p>\n              <h2>{{varPengiriman.kota}}</h2>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">\n              <p>Kecamatan</p>\n              <h2>{{varPengiriman.kecamatan}}</h2>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">\n              <p>Kelurahan</p>\n              <h2>{{varPengiriman.kelurahan}}</h2>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">\n              <p>Kode Pos</p>\n              <h2>{{varPengiriman.kode_pos}}</h2>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">\n              <p>Lokasi</p>\n              <h4>{{varPengiriman.lokasi}}</h4>\n             <!--  <ion-button expand=\"block\" (click)=\"setOpen(true)\">Lihat Lokasi</ion-button>\n            <ion-modal [isOpen]=\"isModalOpen\">\n              <ng-template>\n                <ion-header>\n                  <ion-toolbar>\n                    <ion-title>Lokasi Pengiriman</ion-title>\n                    <ion-buttons slot=\"end\">\n                      <ion-button (click)=\"setOpen(false)\">Tutup</ion-button>\n                    </ion-buttons>\n                  </ion-toolbar>\n                </ion-header>\n                <ion-content class=\"ion-padding\">\n                  <h6>{{varPengiriman.lokasi}}</h6>\n                  <iframe *ngIf=\"varPengirimanlokasi\" [src]=\"varPengirimanlokasi\" style=\"width:100%;height:100%;frameBorder=0\" scrolling=\"yes\" frameBorder=\"0\" ></iframe>\n                </ion-content>\n              </ng-template>\n            </ion-modal> -->\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">\n              <p>Detail Lokasi</p>\n              <h2>{{varPengiriman.alamat_detail}}</h2>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">\n              <p>Foto Lokasi</p>\n              <div *ngIf=\"fotolokasi !=null\">\n              <ion-button expand=\"block\" (click)=\"setOpenFoto(true)\">Lihat Foto</ion-button>\n              </div>\n            <ion-modal [isOpen]=\"isModalOpenFoto\">\n              <ng-template>\n                <ion-header>\n                  <ion-toolbar>\n                    <ion-title>Foto Lokasi</ion-title>\n                    <ion-buttons slot=\"end\">\n                      <ion-button (click)=\"setOpenFoto(false)\">Tutup</ion-button>\n                    </ion-buttons>\n                  </ion-toolbar>\n                </ion-header>\n                <ion-content class=\"ion-padding\">\n                  <ion-img *ngIf=\"fotolokasi\" [src]=\"fotolokasi\" style=\"width:100%;\"></ion-img>\n                </ion-content>\n              </ng-template>\n            </ion-modal>\n            </ion-label>\n          </ion-item>\n          \n        </ion-list>\n        <ion-grid *ngIf=\"!editMode\">\n          <ion-row>\n            <ion-col>\n              <!--MIRROR-->\n              <!-- <ion-button type=\"button\" color=\"unilever\" expand=\"block\" disabled fill=\"outline\" (click)=\"edit()\">Edit Pengiriman</ion-button> -->\n              <!--PRODUCTION-->\n              <ion-button type=\"button\" color=\"unilever\" expand=\"block\" fill=\"outline\" (click)=\"edit()\">Edit Alamat Pengiriman</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <form  *ngIf=\"editMode\" [formGroup]=\"alamatPengiriman\">\n          <ion-list>\n            <ion-item>\n              <ion-label position=\"floating\">Nama Penerima <span class=\"bintang\">* (Wajib diisi)</span></ion-label>\n              <ion-input formControlName=\"nama_penerima\"></ion-input>\n              <p *ngIf=\"alamatPengiriman.value['nama_penerima']==''\" class=\"notifikasi\">Mohon Isi Nama Penerima</p>\n            </ion-item>\n            <!-- <ion-item>\n              <ion-label position=\"floating\">No. Telp Penerima <span class=\"bintang\">* (Wajib diisi)</span></ion-label>\n              <ion-input formControlName=\"no_telp\" type=\"number\"></ion-input>\n              <p *ngIf=\"alamatPengiriman.value['no_telp']==''\" class=\"notifikasi\">Mohon Isi No. Telp / HP Penerima</p>\n            </ion-item> -->\n            <ion-item>\n              <ion-label position=\"floating\">Nama Jalan <span class=\"bintang\">* (Wajib diisi)</span></ion-label>\n              <ion-input formControlName=\"nama_jalan\"></ion-input>\n              <p *ngIf=\"alamatPengiriman.value['nama_jalan']==''\" class=\"notifikasi\">Mohon Isi Nama Jalan</p>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">No. Rumah <span class=\"bintang\">* (Wajib diisi)</span></ion-label>\n              <ion-input formControlName=\"no_rumah\"></ion-input>\n              <p *ngIf=\"alamatPengiriman.value['no_rumah']==''\" class=\"notifikasi\">Mohon Isi No. Rumah</p>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Provinsi <span class=\"bintang\">* (Wajib diisi)</span></ion-label>\n              <ion-select formControlName=\"provinsi\" (ionChange)=\"onSelectedChange('prov')\" placeholder=\"Provinsi\" okText=\"Pilih\">\n                <ion-select-option *ngFor=\"let p of province\" [value]=\"p.province\">{{p.province}}</ion-select-option>\n              </ion-select>\n              <p *ngIf=\"alamatPengiriman.value['provinsi']==null || alamatPengiriman.value['provinsi']==''\" class=\"notifikasi\">Mohon Isi Provinsi</p>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Kota/Kabupaten <span class=\"bintang\">* (Wajib diisi)</span></ion-label>\n              <ion-select formControlName=\"kota\" (ionChange)=\"onSelectedChange('city')\" placeholder=\"Kota/Kabupaten\" okText=\"Pilih\">\n                <ion-select-option *ngFor=\"let c of city\" [value]=\"c.city\">{{c.city}}</ion-select-option>\n              </ion-select>\n              <p *ngIf=\"alamatPengiriman.value['kota']==null || alamatPengiriman.value['kota']==''\" class=\"notifikasi\">Mohon Isi Kota</p>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Kecamatan <span class=\"bintang\">* (Wajib diisi)</span></ion-label>\n              <ion-select formControlName=\"kecamatan\" (ionChange)=\"onSelectedChange('subdistrict')\" placeholder=\"Kecamatan\" okText=\"Pilih\">\n                <ion-select-option *ngFor=\"let s of subdistrict\" [value]=\"s.subdistrict\">{{s.subdistrict}}</ion-select-option>\n              </ion-select>\n              <p *ngIf=\"alamatPengiriman.value['kecamatan']==null || alamatPengiriman.value['kecamatan']==''\" class=\"notifikasi\">Mohon Isi Kecamatan</p>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Kelurahan/Desa <span class=\"bintang\">* (Wajib diisi)</span></ion-label>\n              <ion-select formControlName=\"kelurahan\" (ionChange)=\"onSelectedChange('village')\" placeholder=\"Kelurahan/Desa\" okText=\"Pilih\">\n                <ion-select-option *ngFor=\"let v of village\" [value]=\"v.village\">{{v.village}}</ion-select-option>\n              </ion-select>\n              <p *ngIf=\"alamatPengiriman.value['kelurahan']==null || alamatPengiriman.value['kelurahan']==''\" class=\"notifikasi\">Mohon Isi Kelurahan/Desa</p>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Kode Pos <span class=\"bintang\">* (Wajib diisi)</span></ion-label>\n              <ion-select formControlName=\"kode_pos\" placeholder=\"Kode Pos\" okText=\"Pilih\" >\n                <ion-select-option *ngFor=\"let p of postalcode\" [value]=\"p.postal_code\">{{p.postal_code}}</ion-select-option>\n              </ion-select>\n              <p *ngIf=\"alamatPengiriman.value['kode_pos']==''\" class=\"notifikasi\">Mohon Isi Kode Pos</p>\n\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Lokasi <span class=\"bintang\">* (Wajib diisi)</span></ion-label>\n              <ion-textarea formControlName=\"lokasi\" placeholder=\"Lokasi\" readonly=\"\" [value]=\"lokasi\"></ion-textarea>\n              <p *ngIf=\"alamatPengiriman.value['lokasi']==''\" class=\"notifikasi\">Silahkan Pilih Lokasi</p>\n            </ion-item>\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  <ion-button type=\"button\" (click)=\"map_pengiriman()\" expand=\"block\" fill=\"outline\" >\n                    <ion-icon   name=\"location-outline\"></ion-icon> Pilih Lokasi\n                  </ion-button>\n                </ion-col>\n                \n              </ion-row>\n            </ion-grid>\n            <ion-item>\n              <ion-label position=\"stacked\">Detail Lokasi <span class=\"bintang\">* (Wajib diisi)</span></ion-label>\n              <ion-textarea formControlName=\"alamat_detail\" placeholder=\"Detail Lokasi\"></ion-textarea>\n              <p *ngIf=\"alamatPengiriman.value['alamat_detail']==''\" class=\"notifikasi\">Mohon Isi Detail Lokasi</p>\n            </ion-item>\n            <!-- <ion-item *ngIf=\"postalcode\">\n              <ion-label position=\"floating\">Tipe Gambar</ion-label>\n              <ion-select formControlName=\"tipe_gambar\"  (ionChange)=\"onSelectedChange('tipe_gambar')\" placeholder=\"Tipe Gambar\" okText=\"Pilih\">\n                <ion-select-option [value]=\"camera\">Camera</ion-select-option>\n                <ion-select-option [value]=\"galeri\">Galeri</ion-select-option>\n              </ion-select>\n            </ion-item> -->\n           \n            <div style=\"margin-left:10px; margin-right:10px\" >\n              <ion-label position=\"floating\">Foto Lokasi <span class=\"bintang\">* (Wajib diisi)</span></ion-label>\n              <ion-input formControlName=\"imagelokasi\" type=\"hidden\" [value]=\"foto_upload\"></ion-input>\n              <ion-button   type=\"button\" (click)=\"selectImage()\" expand=\"block\" fill=\"outline\">\n                <ion-icon name=\"camera\"></ion-icon>\n              </ion-button>\n              <!-- <ion-button *ngIf=\"tipe_gambar=='galeri'\" type=\"button\" (click)=\"addPhotoToGallery()\" expand=\"block\" fill=\"outline\">\n                <ion-icon name=\"image-outline\"></ion-icon>\n              </ion-button> -->\n              <p *ngIf=\"alamatPengiriman.value['imagelokasi']==''\" class=\"notifikasi\">Mohon Isi Foto Lokasi</p>\n            </div>\n            <div>\n              <center>\n                  <ion-img [src]=\"foto_upload\" style=\"width:50%;\"></ion-img>\n                </center>\n            </div>\n            \n          </ion-list> \n          \n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <ion-button type=\"button\" color=\"unilever\" expand=\"block\" fill=\"outline\" (click)=\"cancelEdit()\">Cancel</ion-button>\n              </ion-col>\n              <ion-col>\n                <ion-button type=\"button\" color=\"unilever\" expand=\"block\" (click)=\"submitEditPengirimanotp()\" [disabled]=\"!alamatPengiriman.valid\">Simpan Alamat</ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </form>\n      </div>\n    </div>\n  </div>\n  \n</ion-content>\n<ion-footer collapse=\"fade\">\n  <ion-toolbar>\n    <ion-title>v 6.0.1</ion-title>\n  </ion-toolbar>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts.js.map