"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_services_dolphin_service_ts"],{

/***/ 2171:
/*!*********************************************!*\
  !*** ./src/app/services/dolphin.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DolphinService": () => (/* binding */ DolphinService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/authentication.service */ 7053);





//
const api_url = 'https://admin.ulidolphin.com/api/Dolphin5_2023/';
//const api_url: string = 'https://admin.ulidolphin.com/api/Dolphin5MirrorAl/';
let DolphinService = class DolphinService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.token = '';
        this.outlet_id = '';
        this.appVersion = '506';
        this.appVersionnew = '601';
        this.appVersion = this.authService.getAppVersion();
    }
    getpoint() {
        return this.http.get(api_url + 'getpointuliv4/' + this.authService.getToken()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res.retdata)));
    }
    gettop5() {
        return this.http.get(api_url + 'gettop5/' + this.authService.getID()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    setredeemselesai(redeem_no) {
        return this.http.get(api_url + 'setredeemselesai/' + redeem_no.trim()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    gettop5brand() {
        return this.http.get(api_url + 'gettop5brand/' + this.authService.getID()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    gettotalbelanja() {
        return this.http.get(api_url + 'gettotalbelanja/' + this.authService.getID()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    getfop() {
        return this.http.get(api_url + 'getfop/' + this.authService.getID()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    getstatushadiahlist(stat) {
        return this.http.get(api_url + 'getstatushadiahlist/' + this.authService.getID() + '/' + stat).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    getslides() {
        return this.http.get(api_url + 'getslides/' + this.authService.getToken() + '/' + this.appVersion).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res.retdata)));
    }
    getversion() {
        return this.http.get(api_url + 'getversion/' + this.authService.getToken() + '/' + this.appVersion).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    // getversionapps(){
    //   return this.http.get(api_url + 'appVersionnew/'+this.appVersion).pipe(map((res: any) => (res)));
    // }
    getversionapps() {
        return this.http.get(api_url + 'versionapps/' + this.appVersionnew).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    gettransaksi(type) {
        return this.http.get(api_url + 'gettransaksi/' + this.authService.getID() + '/' + type).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res.retdata)));
    }
    gettransaksidetail(type) {
        return this.http.get(api_url + 'gettransaksidetail/' + this.authService.getID() + '/' + type).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res.retdata)));
    }
    gettarget(type) {
        return this.http.get(api_url + 'gettarget/' + this.authService.getID() + '/' + type).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    getfaq() {
        return this.http.get(api_url + 'getfaq').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res.retdata)));
    }
    getreward() {
        return this.http.get(api_url + 'getreward2/' + this.authService.getToken() + '/' + this.appVersion).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res.retdata)));
    }
    getbalanceuli() {
        return this.http.get(api_url + 'getbalanceuli2/' + this.authService.getToken() + '/new').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res.retdata)));
    }
    ewalletdenom(code) {
        return this.http.get(api_url + 'ewalletdenom/' + code).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res.retdata)));
    }
    getdetailprofile() {
        return this.http.get(api_url + 'getdetailprofile/' + this.authService.getID()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res.retdata)));
    }
    getpengirimanbytoken() {
        return this.http.get(api_url + 'getpengirimanbytoken/' + this.authService.getToken()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    sendotp(phoneNum, typ) {
        return this.http.get(api_url + 'sendotpovo/' + phoneNum + '/' + typ).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    //ovo
    checkovo(phoneNum, amount) {
        return this.http.get(api_url + 'checkovo/' + phoneNum.trim() + '/' + amount.trim()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    redeemovo(phoneNum, amount) {
        return this.http.get(api_url + 'redeemovo/' + phoneNum.trim() + '/' + amount.trim()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    redeemovopost(sendData, phoneNum, amount) {
        return this.http.post(api_url + 'redeemovopost/' + this.authService.getID() + '/' + phoneNum.trim() + '/' + amount.trim(), sendData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    checkovostatus(rno) {
        return this.http.get(api_url + 'checkovostatus/' + rno).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    getlistredeemovo() {
        return this.http.get(api_url + 'getlistredeemovo/' + this.authService.getID()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    //.ovo
    //ovo-point
    getstatusredeem() {
        return this.http.get(api_url + 'getstatusredeem/' + this.appVersion + '/' + this.authService.getID()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    getovolist() {
        return this.http.get(api_url + 'getovolist/' + this.authService.getToken() + '/' + this.appVersion).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    ovopointredeem(redeem_code, points, phoneNum) {
        return this.http.get(api_url + 'ovoredeem/' + redeem_code.trim() + '/' + points + '/new/' + this.authService.getToken() + '/' + phoneNum).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    //.ovo-point
    ewalletredeem(ewallettype, redeem_code, phoneNum) {
        return this.http.get(api_url + 'ewalletredeem/' + ewallettype.trim() + '/' + redeem_code.trim() + '/' + this.authService.getID() + '/' + phoneNum).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    exchangerewardGiftUli(sendData, redeem_code, points, type) {
        return this.http.post(api_url + 'exchangerewardgiftuli2/' + redeem_code.trim() + '/' + points + '/' + type + '/' + this.authService.getToken(), sendData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    changePengiriman(sendData) {
        return this.http.post(api_url + 'changepengiriman/' + this.authService.getID(), sendData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    getGantiNoHape() {
        return this.http.get(api_url + 'getGantiNoHape/' + this.authService.getID()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    getResetIMEI() {
        return this.http.get(api_url + 'getResetIMEI/' + this.authService.getID()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    getResetPass() {
        return this.http.get(api_url + 'getResetPass/' + this.authService.getID()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    getforgotpass(_id) {
        return this.http.get(api_url + 'getforgotpass/' + _id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    getregister(_id) {
        return this.http.get(api_url + 'getregisterd5/' + _id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    getOTPEmail(sendData) {
        return this.http.post(api_url + 'getOTPEmail/', sendData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    getOTPChangeEmail(sendData, typeotp) {
        return this.http.post(api_url + 'getOTPChangeEmail/' + typeotp, sendData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    getChangeEmail(sendData) {
        return this.http.post(api_url + 'getChangeEmail/', sendData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    checkimeiget(imei) {
        return this.http.get(api_url + 'checkimei/' + this.authService.getID() + '/' + imei).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    getsplashscreen() {
        return this.http.get(api_url + 'getsplashscreen').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    checkimei(imei, email_address) {
        let sendData = {
            outlet_id: this.authService.getID(),
            email: email_address,
            imei: imei
        };
        console.log('cekdatasend', sendData);
        return this.http.post(api_url + 'checkimei', sendData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    setimei(imei, email_address) {
        let sendData = {
            outlet_id: this.authService.getID(),
            email: email_address,
            imei: imei
        };
        return this.http.post(api_url + 'setimei', sendData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    ppobdenom() {
        return this.http.get(api_url + 'ppobdenom').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res.retdata)));
    }
    ppob_pln_prepaid_inquiry(no, amount) {
        return this.http.get(api_url + 'ppobplnprepaidinquiry/' + no + '/' + amount).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    ppobplnpayment(no, item) {
        return this.http.get(api_url + 'ppobplnpayment/' + no + '/' + item + '/' + this.authService.getID()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    ppobcheck(no) {
        return this.http.get(api_url + 'ppobcheck/' + no + '/' + this.authService.getID()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    ppoblist() {
        return this.http.get(api_url + 'ppoblist/' + this.authService.getID()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    gettop5detail(sendData, type) {
        return this.http.post(api_url + 'gettop5detail/' + this.authService.getID() + '/' + type, sendData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    getnotif() {
        return this.http.get(api_url + 'getnotif/' + this.authService.getToken()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    getredeemtype(parent) {
        return this.http.get(api_url + 'getredeemtype/' + parent + '/' + this.authService.getID()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    getpengiriman() {
        return this.http.get(api_url + 'getpengiriman/' + this.authService.getID()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    getewalletlist() {
        console.log('getewalletlist', api_url + 'getewalletlist/' + this.authService.getID());
        return this.http.get(api_url + 'getewalletlist/' + this.authService.getID()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    getarea(areatype, prov, city, subdistrict, village) {
        let params = areatype;
        if (areatype == 'city') {
            params = params + '/' + prov;
        }
        else if (areatype == 'subdistrict') {
            params = params + '/' + prov + '/' + city;
        }
        else if (areatype == 'village') {
            params = params + '/' + prov + '/' + city + '/' + subdistrict;
        }
        else if (areatype == 'postalcode') {
            params = params + '/' + prov + '/' + city + '/' + subdistrict + '/' + village;
        }
        else {
            params = areatype;
        }
        return this.http.get(api_url + 'getarea/' + params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    // developer ali
    gettransaksidetailpoint(type) {
        return this.http.get(api_url + 'gettransaksidetailpoint/' + this.authService.getID() + '/' + type).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res.retdata)));
    }
    readnotif(id) {
        return this.http.get(api_url + 'readnotif/' + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res.retdata)));
    }
    cekdatapengiriman() {
        return this.http.get(api_url + 'cekdatapengiriman/' + this.authService.getID()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res.retdata[0])));
    }
    tahun() {
        return this.http.get(api_url + 'tahun').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    week() {
        return this.http.get(api_url + 'week').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    filterpoint_basic_poin(tahun, week) {
        return this.http.get(api_url + 'filterpoint_basic_poin/' + this.authService.getID() + '/' + tahun + '/' + week).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    filterpoint(tahun, bulan, type) {
        return this.http.get(api_url + 'filterpoint/' + this.authService.getID() + '/' + tahun + '/' + bulan + '/' + type).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    updatetanggallahir(tanggal) {
        return this.http.get(api_url + 'updatetanggallahir/' + this.authService.getID() + '/' + tanggal).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    banner_target_bu() {
        return this.http.get(api_url + 'banner_target_bu/' + this.authService.getID()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    target_corporate(type) {
        return this.http.get(api_url + 'target_corporate/' + this.authService.getID() + '/' + type).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res.retdata)));
    }
    target_homecare(type) {
        return this.http.get(api_url + 'target_homecare/' + this.authService.getID() + '/' + type).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res.retdata)));
    }
    target_personal_care(type) {
        return this.http.get(api_url + 'target_personal_care/' + this.authService.getID() + '/' + type).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res.retdata)));
    }
    target_nutrition(type) {
        return this.http.get(api_url + 'target_nutrition/' + this.authService.getID() + '/' + type).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res.retdata)));
    }
    target_bw(type) {
        return this.http.get(api_url + 'target_bw/' + this.authService.getID() + '/' + type).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res.retdata)));
    }
    peringkat_belanja() {
        return this.http.get(api_url + 'peringkat_belanja/' + this.authService.getID()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res.retdata)));
    }
    detail_peringkat_belanja(division) {
        return this.http.get(api_url + 'detail_peringkat_belanja/' + this.authService.getID() + '/' + division).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res.retdata)));
    }
    riwayat_poin(type) {
        return this.http.get(api_url + 'riwayat_poin/' + this.authService.getID() + '/' + type).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    cluster_code() {
        return this.http.get(api_url + 'cluster_code/' + this.authService.getID()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    poin_aktif() {
        return this.http.get(api_url + 'poin_aktif/' + this.authService.getID()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    statususerriwayat() {
        return this.http.get(api_url + 'statususerriwayat/' + this.authService.getID()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    unilever_produk() {
        return this.http.get(api_url + 'unilever_produk/' + this.authService.getID()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    header_target_dist() {
        return this.http.get(api_url + 'header_target_dist/' + this.authService.getID()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res.retdata)));
    }
    setupotp() {
        return this.http.get(api_url + 'setupotp').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    whatsappinfo(store_name, outlet_id) {
        return this.http.get(api_url + 'whatsappinfo/' + store_name + '/' + outlet_id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    detail_corporate_distibution(data) {
        return this.http.get(api_url + 'detail_corporate_distibution/' + this.authService.getID() + '/' + data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    updatepos(kodepos) {
        return this.http.get(api_url + 'updatepos/' + kodepos + '/' + this.authService.getID()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    logs_auth(type, page) {
        return this.http.get(api_url + 'logs_auth/' + this.authService.getID() + '/' + type + '/' + page).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
    panduan() {
        return this.http.get(api_url + 'panduan').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => (res)));
    }
};
DolphinService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService }
];
DolphinService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], DolphinService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_services_dolphin_service_ts.js.map