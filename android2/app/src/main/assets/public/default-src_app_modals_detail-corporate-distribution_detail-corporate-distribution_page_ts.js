"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_modals_detail-corporate-distribution_detail-corporate-distribution_page_ts"],{

/***/ 1258:
/*!********************************************************************************************!*\
  !*** ./src/app/modals/detail-corporate-distribution/detail-corporate-distribution.page.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailCorporateDistributionPage": () => (/* binding */ DetailCorporateDistributionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _detail_corporate_distribution_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-corporate-distribution.page.html?ngResource */ 1498);
/* harmony import */ var _detail_corporate_distribution_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-corporate-distribution.page.scss?ngResource */ 8264);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dolphin.service */ 2171);






let DetailCorporateDistributionPage = class DetailCorporateDistributionPage {
    constructor(modalController, navParams, dolphinService) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.dolphinService = dolphinService;
    }
    ngOnInit() {
        console.log('cekitemdata', this.navParams.data.item);
        this.dolphinService.detail_corporate_distibution(this.navParams.data.item).subscribe((val) => {
            this.data = val.retdata;
            this.title = val.retdata[0].basepack;
            console.log('cekvalmamen', val);
        });
    }
    closeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const onClosedData = false;
            yield this.modalController.dismiss(onClosedData);
        });
    }
};
DetailCorporateDistributionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams },
    { type: _services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__.DolphinService }
];
DetailCorporateDistributionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-detail-corporate-distribution',
        template: _detail_corporate_distribution_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_detail_corporate_distribution_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailCorporateDistributionPage);



/***/ }),

/***/ 8264:
/*!*********************************************************************************************************!*\
  !*** ./src/app/modals/detail-corporate-distribution/detail-corporate-distribution.page.scss?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = "ion-title {\n  color: #1c1c1d;\n}\n\n.background {\n  background-color: #1505a8;\n}\n\n.boxed {\n  display: block;\n  border-bottom: 1px solid #e0e0e0;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.inv {\n  display: block;\n  font-size: 0.8em;\n  line-height: 2px;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: 600;\n  color: #3D5CFF !important;\n}\n\n.inv2 {\n  display: block;\n  font-size: 0.8em;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: 600;\n  color: #3D5CFF !important;\n}\n\n.dt {\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 0.7em;\n}\n\n.amount {\n  font-size: 0.8em;\n  line-height: 2px;\n  text-align: right;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.amount_invoice {\n  font-size: 0.8em;\n  text-align: right;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.bonus-title {\n  color: rgb(113, 113, 113);\n  font-size: 10px;\n}\n\n.bonus-title_invoice {\n  color: rgb(113, 113, 113);\n  font-size: 10px;\n  font-weight: bold;\n}\n\n.bonus-title_bold {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.detail_poin {\n  color: #e8712c;\n  font-weight: bold;\n  padding: 0;\n}\n\n.bonus-text {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.6em;\n  text-align: right;\n  font-weight: 500;\n}\n\n.bonus-text-loyality {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.12px;\n  text-align: right;\n  font-weight: 500;\n}\n\n.bonus-text_bold {\n  color: rgba(0, 0, 0, 0.6);\n  text-align: right;\n  font-weight: 500;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.bonus-box {\n  background-color: #f5f6ff;\n  border-radius: 5px;\n  margin-bottom: 3px;\n}\n\n.bonus-box_2 {\n  background-color: #effafb;\n  border-radius: 5px;\n  margin-bottom: 3px;\n}\n\n.r-name {\n  display: block;\n  font-size: 0.8em;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: 600;\n  color: #3D5CFF !important;\n}\n\n.r-no {\n  font-size: 0.7em;\n  text-align: right;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.r-date {\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 0.7em;\n}\n\n.r-poin {\n  font-size: 0.7em;\n  float: right;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.cekresi {\n  float: right;\n  padding-left: 5px;\n  color: #3D5CFF !important;\n}\n\n.lapor {\n  color: #ad0023 !important;\n}\n\n.selesai {\n  color: #1b6c00 !important;\n}\n\n.statuses {\n  font-weight: bold;\n  color: #7d93ff !important;\n}\n\n.statuses-selesai {\n  font-weight: bold;\n  color: #00bb51 !important;\n}\n\n.top5-head {\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-right: 10px;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background-color: #3D5CFF;\n}\n\n.top5-title {\n  color: #FFF;\n  font-weight: 500;\n  display: block;\n  font-size: 0.9em;\n}\n\n.top5-content {\n  margin-left: 10px;\n  margin-right: 10px;\n  border-width: 0px 1px 1px 1px;\n  border-style: solid;\n  border-color: #e1e1e1;\n}\n\n.top5-cat {\n  font-size: 0.9em;\n  font-weight: 500;\n}\n\n.top5-rightmonth {\n  font-size: 0.7em;\n  color: #4b80f0;\n  text-align: right;\n}\n\n.top5-leftmonth {\n  font-size: 0.7em;\n  color: #ec7b9c;\n}\n\n.top5-left, .top5-right {\n  font-size: 0.8em;\n  color: #444;\n}\n\n.top5-right {\n  text-align: right;\n}\n\n.detail_list_poin {\n  border-style: solid;\n  border-width: 0.5px;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 12px;\n}\n\n.card_2 {\n  /* Add shadows to create the \"card\" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  padding: 10px;\n  border-radius: 10px;\n}\n\n.card_3 {\n  /* Add shadows to create the \"card\" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  padding: 10px;\n  border-radius: 10px;\n  margin-top: -35px;\n}\n\n/* On mouse-over, add a deeper shadow */\n\n.card_2:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n/* Add some padding inside the card container */\n\n.ion-segment-buttons {\n  width: 590px;\n  min-width: 150px;\n}\n\nion-spinner {\n  width: 0.8em;\n  height: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC1jb3Jwb3JhdGUtZGlzdHJpYnV0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFDQTtFQUNJLHlCQUFBO0FBRUo7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFEQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUlKOztBQURBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBREE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFEQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUlKOztBQURBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFJSjs7QUFEQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFEQTtFQUVJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFHSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBR0E7RUFDSSx5QkFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUVBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBRko7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUtBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBRko7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUFGSjs7QUFLQTtFQUNBLGlCQUFBO0FBRkE7O0FBSUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBREo7O0FBR0E7RUFDSSw0Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHRTtFQUNFLDRDQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0UsdUNBQUE7O0FBQ0E7RUFDRSwyQ0FBQTtBQUFKOztBQUdFLCtDQUFBOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBREo7O0FBR0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUFKIiwiZmlsZSI6ImRldGFpbC1jb3Jwb3JhdGUtZGlzdHJpYnV0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBjb2xvcjogIzFjMWMxZDtcclxufVxyXG4uYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTA1YTg7XHJcbn1cclxuXHJcblxyXG4uYm94ZWQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uaW52IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgbGluZS1oZWlnaHQ6MnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgY29sb3I6ICMzRDVDRkYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmludjIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IC44ZW07XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNyk7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICBjb2xvcjogIzNENUNGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHQge1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xyXG4gICAgZm9udC1zaXplOiAuN2VtO1xyXG59XHJcblxyXG4uYW1vdW50IHtcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgIGxpbmUtaGVpZ2h0OjJweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC43KTtcclxufVxyXG5cclxuLmFtb3VudF9pbnZvaWNlIHtcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xyXG59XHJcblxyXG4uYm9udXMtdGl0bGUge1xyXG4gICAgY29sb3I6IHJnYigxMTMsIDExMywgMTEzKTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLmJvbnVzLXRpdGxlX2ludm9pY2Uge1xyXG4gICAgY29sb3I6IHJnYigxMTMsIDExMywgMTEzKTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5ib251cy10aXRsZV9ib2xke1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjYpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5kZXRhaWxfcG9pbiB7XHJcbiAgICBjb2xvcjogI2U4NzEyYztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmJvbnVzLXRleHQge1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjYpO1xyXG4gICAgZm9udC1zaXplOiAuNmVtO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5ib251cy10ZXh0LWxveWFsaXR5IHtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcclxuICAgIGZvbnQtc2l6ZTogLjEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmJvbnVzLXRleHRfYm9sZCB7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNik7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmJvbnVzLWJveCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG59XHJcblxyXG4uYm9udXMtYm94XzIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZmFmYjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG5cclxuLnItbmFtZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC43KTtcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgIGNvbG9yOiAjM0Q1Q0ZGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yLW5vIHtcclxuICAgIGZvbnQtc2l6ZTogLjdlbTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC43KTtcclxufVxyXG5cclxuLnItZGF0ZSB7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNSk7XHJcbiAgICBmb250LXNpemU6IC43ZW07XHJcbn1cclxuXHJcbi5yLXBvaW4ge1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogbGF2ZW5kZXI7XHJcbiAgICBmb250LXNpemU6IC43ZW07XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xyXG4gICAgLy8gcGFkZGluZzo0cHg7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOjNweDtcclxuXHJcbn1cclxuXHJcbi5jZWtyZXNpIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmctbGVmdDo1cHg7XHJcbiAgICBjb2xvcjogIzNENUNGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGFwb3Ige1xyXG4gICAgY29sb3I6ICNhZDAwMjMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlbGVzYWkge1xyXG4gICAgY29sb3I6ICMxYjZjMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN0YXR1c2VzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICM3ZDkzZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN0YXR1c2VzLXNlbGVzYWkgeyBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwMGJiNTEgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi50b3A1LWhlYWQge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNENUNGRjtcclxufVxyXG5cclxuLnRvcDUtdGl0bGUge1xyXG4gICAgY29sb3I6I0ZGRjtcclxuICAgIFxyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAuOWVtO1xyXG59XHJcblxyXG4udG9wNS1jb250ZW50IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHggMXB4IDFweCAxcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTFlMWUxO1xyXG59XHJcblxyXG4udG9wNS1jYXQge1xyXG4gICAgZm9udC1zaXplOiAuOWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnRvcDUtcmlnaHRtb250aCB7XHJcbiAgICBmb250LXNpemU6IC43ZW07XHJcbiAgICBjb2xvcjogIzRiODBmMDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4udG9wNS1sZWZ0bW9udGgge1xyXG4gICAgZm9udC1zaXplOiAuN2VtO1xyXG4gICAgY29sb3I6ICNlYzdiOWM7XHJcbn1cclxuXHJcbi50b3A1LWxlZnQsIC50b3A1LXJpZ2h0IHtcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG59XHJcblxyXG4udG9wNS1yaWdodCB7XHJcbnRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5kZXRhaWxfbGlzdF9wb2lue1xyXG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkOyBcclxuICAgIGJvcmRlci13aWR0aDogMC41cHg7IFxyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjYpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5jYXJkXzIge1xyXG4gICAgLyogQWRkIHNoYWRvd3MgdG8gY3JlYXRlIHRoZSBcImNhcmRcIiBlZmZlY3QgKi9cclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcblxyXG4gIC5jYXJkXzMge1xyXG4gICAgLyogQWRkIHNoYWRvd3MgdG8gY3JlYXRlIHRoZSBcImNhcmRcIiBlZmZlY3QgKi9cclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IC0zNXB4O1xyXG4gIH1cclxuICBcclxuICAvKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBkZWVwZXIgc2hhZG93ICovXHJcbiAgLmNhcmRfMjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG4gIH1cclxuICBcclxuICAvKiBBZGQgc29tZSBwYWRkaW5nIGluc2lkZSB0aGUgY2FyZCBjb250YWluZXIgKi9cclxuICBcclxuICAuaW9uLXNlZ21lbnQtYnV0dG9ucyB7XHJcbiAgICB3aWR0aDogNTkwcHg7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIH1cclxuICBpb24tc3Bpbm5lciB7XHJcbiAgICB3aWR0aDogMC44ZW07XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxuICB9XHJcbiAiXX0= */";

/***/ }),

/***/ 1498:
/*!*********************************************************************************************************!*\
  !*** ./src/app/modals/detail-corporate-distribution/detail-corporate-distribution.page.html?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Detail SKU</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-scroll scrollX=\"true\">\n  <ion-list>\n    <ion-item class=\"bonus-title_invoice\">\n      {{title}}\n    </ion-item>\n    <ion-item *ngFor=\"let v of data\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"4\" class=\"bonus-title_invoice\">{{v.sku_code}}</ion-col>\n          <ion-col size=\"8\" class=\"bonus-title_invoice\">{{v.product_description}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"4\" class=\"bonus-title\">Quantity</ion-col>\n          <ion-col size=\"8\" class=\"bonus-text\">{{v.quantity}} Pcs</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"4\" class=\"bonus-title\">Pencapaian</ion-col>\n          <ion-col size=\"8\" class=\"bonus-text\">Rp. {{v.total}}</ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n</ion-scroll>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_modals_detail-corporate-distribution_detail-corporate-distribution_page_ts.js.map