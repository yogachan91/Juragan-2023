"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_modals_belanja-modal_belanja-modal_page_ts"],{

/***/ 4519:
/*!************************************************************!*\
  !*** ./src/app/modals/belanja-modal/belanja-modal.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BelanjaModalPage": () => (/* binding */ BelanjaModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _belanja_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./belanja-modal.page.html?ngResource */ 1936);
/* harmony import */ var _belanja_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./belanja-modal.page.scss?ngResource */ 1514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dolphin.service */ 2171);







let BelanjaModalPage = class BelanjaModalPage {
    constructor(modalController, router, dolphinService, alertController) {
        this.modalController = modalController;
        this.router = router;
        this.dolphinService = dolphinService;
        this.alertController = alertController;
        this.onload();
    }
    onload() {
        this.dolphinService.peringkat_belanja().subscribe((data) => {
            if (data) {
                if (data.includes('Belum ada')) {
                    this.peringkat_belanja = [];
                }
                else {
                    const d_n = new Date();
                    let month = d_n.getMonth();
                    let month_next = month + 1;
                    if (month == 1) {
                        this.bln = 'Jan';
                    }
                    if (month == 2) {
                        this.bln = 'Feb';
                    }
                    if (month == 3) {
                        this.bln = 'Mar';
                    }
                    if (month == 4) {
                        this.bln = 'Apr';
                    }
                    if (month == 5) {
                        this.bln = 'Mei';
                    }
                    if (month == 6) {
                        this.bln = 'Jun';
                    }
                    if (month == 7) {
                        this.bln = 'Jul';
                    }
                    if (month == 8) {
                        this.bln = 'Agu';
                    }
                    if (month == 9) {
                        this.bln = 'Sep';
                    }
                    if (month == 10) {
                        this.bln = 'Okt';
                    }
                    if (month == 11) {
                        this.bln = 'Nov';
                    }
                    if (month == 12) {
                        this.bln = 'Des';
                    }
                    if (month_next == 1) {
                        this.bln_next = 'Jan';
                    }
                    if (month_next == 2) {
                        this.bln_next = 'Feb';
                    }
                    if (month_next == 3) {
                        this.bln_next = 'Mar';
                    }
                    if (month_next == 4) {
                        this.bln_next = 'Apr';
                    }
                    if (month_next == 5) {
                        this.bln_next = 'Mei';
                    }
                    if (month_next == 6) {
                        this.bln_next = 'Jun';
                    }
                    if (month_next == 7) {
                        this.bln_next = 'Jul';
                    }
                    if (month_next == 8) {
                        this.bln_next = 'Agu';
                    }
                    if (month_next == 9) {
                        this.bln_next = 'Sep';
                    }
                    if (month_next == 10) {
                        this.bln_next = 'Okt';
                    }
                    if (month_next == 11) {
                        this.bln_next = 'Nov';
                    }
                    if (month_next == 12) {
                        this.bln_next = 'Des';
                    }
                    else if (month == 12) {
                        this.bln_next = 'Jan';
                    }
                    //  console.log('peringkat_belanja', month);
                    this.peringkat_belanja = data;
                }
            }
        });
    }
    closeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const onClosedData = false;
            yield this.modalController.dismiss(onClosedData);
        });
    }
    detail(val) {
        let navigationExtras = { state: { item: val } };
        this.router.navigate(['detail-belanja'], navigationExtras);
        this.closeModal();
    }
};
BelanjaModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_dolphin_service__WEBPACK_IMPORTED_MODULE_2__.DolphinService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
BelanjaModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-belanja-modal',
        template: _belanja_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_belanja_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BelanjaModalPage);



/***/ }),

/***/ 1514:
/*!*************************************************************************!*\
  !*** ./src/app/modals/belanja-modal/belanja-modal.page.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "ion-title {\n  color: #3D5CFF;\n}\n\n.boxed {\n  display: block;\n  border-bottom: 1px solid #e0e0e0;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.inv {\n  display: block;\n  font-size: 0.8em;\n  line-height: 2px;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: 600;\n  color: #3D5CFF !important;\n}\n\n.inv2 {\n  display: block;\n  font-size: 0.8em;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: 600;\n  color: #3D5CFF !important;\n}\n\n.dt {\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 0.7em;\n}\n\n.amount {\n  font-size: 0.8em;\n  line-height: 2px;\n  text-align: right;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.amount_invoice {\n  font-size: 0.8em;\n  text-align: right;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.bonus-title {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.7em;\n}\n\n.bonus-title_tgl1 {\n  color: rgba(100, 2, 2, 0.6);\n  font-size: 0.7em;\n  font-weight: bold;\n}\n\n.bonus-title_invoice {\n  color: orange;\n  font-size: 0.8em;\n}\n\n.bonus-title_bold {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.detail_poin {\n  color: #e8712c;\n  font-weight: bold;\n  padding: 0;\n}\n\n.bonus-text {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.7em;\n  text-align: right;\n  font-weight: 500;\n}\n\n.bonus-text_tgl1 {\n  color: rgba(2, 6, 122, 0.6);\n  font-size: 0.7em;\n  text-align: right;\n  font-weight: 500;\n  font-weight: bold;\n}\n\n.bonus-text_right {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.7em;\n  text-align: right;\n  font-weight: 500;\n}\n\n.bonus-text-loyality {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.12px;\n  text-align: right;\n  font-weight: 500;\n}\n\n.bonus-text_bold {\n  color: rgba(0, 0, 0, 0.6);\n  text-align: right;\n  font-weight: 500;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.bonus-box {\n  background-color: #f5f6ff;\n  border-radius: 5px;\n  margin-bottom: 3px;\n}\n\n.bonus-box_2 {\n  background-color: #effafb;\n  border-radius: 5px;\n  margin-bottom: 3px;\n}\n\n.r-name {\n  display: block;\n  font-size: 0.8em;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: 600;\n  color: #3D5CFF !important;\n}\n\n.r-no {\n  font-size: 0.7em;\n  text-align: right;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.r-date {\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 0.7em;\n}\n\n.r-poin {\n  font-size: 0.7em;\n  float: right;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.cekresi {\n  float: right;\n  padding-left: 5px;\n  color: #3D5CFF !important;\n}\n\n.lapor {\n  color: #ad0023 !important;\n}\n\n.selesai {\n  color: #1b6c00 !important;\n}\n\n.statuses {\n  font-weight: bold;\n  color: #7d93ff !important;\n}\n\n.statuses-selesai {\n  font-weight: bold;\n  color: #00bb51 !important;\n}\n\n.top5-head {\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-right: 10px;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background-color: #3D5CFF;\n}\n\n.top5-title {\n  color: #FFF;\n  font-weight: 500;\n  display: block;\n  font-size: 0.9em;\n}\n\n.top5-content {\n  margin-left: 10px;\n  margin-right: 10px;\n  border-width: 0px 1px 1px 1px;\n  border-style: solid;\n  border-color: #e1e1e1;\n}\n\n.top5-cat {\n  font-size: 0.9em;\n  font-weight: 500;\n}\n\n.top5-rightmonth {\n  font-size: 0.7em;\n  color: #4b80f0;\n  text-align: right;\n}\n\n.top5-leftmonth {\n  font-size: 0.7em;\n  color: #ec7b9c;\n}\n\n.top5-left, .top5-right {\n  font-size: 0.8em;\n  color: #444;\n}\n\n.top5-right {\n  text-align: right;\n}\n\n.detail_list_poin {\n  border-style: solid;\n  border-width: 0.5px;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 12px;\n}\n\n.card_2 {\n  /* Add shadows to create the \"card\" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  padding: 5px;\n  border-radius: 10px;\n}\n\n/* On mouse-over, add a deeper shadow */\n\n.card_2:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n/* Add some padding inside the card container */\n\n.ion-segment-buttons {\n  width: 650px;\n  min-width: 150px;\n}\n\n.underline {\n  border-style: solid;\n  border-width: 0.1px;\n  border-color: #d4d4d4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlbGFuamEtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFFSjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0E7RUFDSSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFEQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUlKOztBQURBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBREE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFEQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUlKOztBQURBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFJSjs7QUFEQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFEQTtFQUVJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFHSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBR0E7RUFDSSx5QkFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUVBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBRko7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUtBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBRko7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUFGSjs7QUFLQTtFQUNBLGlCQUFBO0FBRkE7O0FBSUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBREo7O0FBR0E7RUFDSSw0Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHRSx1Q0FBQTs7QUFDQTtFQUNFLDJDQUFBO0FBQUo7O0FBR0UsK0NBQUE7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJRTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQURKIiwiZmlsZSI6ImJlbGFuamEtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjM0Q1Q0ZGO1xyXG59XHJcblxyXG4uYm94ZWQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uaW52IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgbGluZS1oZWlnaHQ6MnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgY29sb3I6ICMzRDVDRkYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmludjIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IC44ZW07XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNyk7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICBjb2xvcjogIzNENUNGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHQge1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xyXG4gICAgZm9udC1zaXplOiAuN2VtO1xyXG59XHJcblxyXG4uYW1vdW50IHtcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgIGxpbmUtaGVpZ2h0OjJweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC43KTtcclxufVxyXG5cclxuLmFtb3VudF9pbnZvaWNlIHtcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xyXG59XHJcblxyXG4uYm9udXMtdGl0bGUge1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjYpO1xyXG4gICAgZm9udC1zaXplOiAuN2VtO1xyXG59XHJcblxyXG4uYm9udXMtdGl0bGVfdGdsMSB7XHJcbiAgICBjb2xvcjogcmdiYSgxMDAsIDIsIDIsIDAuNik7XHJcbiAgICBmb250LXNpemU6IC43ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmJvbnVzLXRpdGxlX2ludm9pY2Uge1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxufVxyXG4uYm9udXMtdGl0bGVfYm9sZHtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZGV0YWlsX3BvaW4ge1xyXG4gICAgY29sb3I6ICNlODcxMmM7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5ib251cy10ZXh0IHtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcclxuICAgIGZvbnQtc2l6ZTogLjdlbTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmJvbnVzLXRleHRfdGdsMSB7XHJcbiAgICBjb2xvcjogcmdiYSgyLCA2LCAxMjIsIDAuNik7XHJcbiAgICBmb250LXNpemU6IC43ZW07XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmJvbnVzLXRleHRfcmlnaHQge1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjYpO1xyXG4gICAgZm9udC1zaXplOiAuN2VtO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5ib251cy10ZXh0LWxveWFsaXR5IHtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcclxuICAgIGZvbnQtc2l6ZTogLjEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmJvbnVzLXRleHRfYm9sZCB7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNik7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmJvbnVzLWJveCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG59XHJcblxyXG4uYm9udXMtYm94XzIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZmFmYjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG5cclxuLnItbmFtZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC43KTtcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgIGNvbG9yOiAjM0Q1Q0ZGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yLW5vIHtcclxuICAgIGZvbnQtc2l6ZTogLjdlbTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC43KTtcclxufVxyXG5cclxuLnItZGF0ZSB7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNSk7XHJcbiAgICBmb250LXNpemU6IC43ZW07XHJcbn1cclxuXHJcbi5yLXBvaW4ge1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogbGF2ZW5kZXI7XHJcbiAgICBmb250LXNpemU6IC43ZW07XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xyXG4gICAgLy8gcGFkZGluZzo0cHg7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOjNweDtcclxuXHJcbn1cclxuXHJcbi5jZWtyZXNpIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmctbGVmdDo1cHg7XHJcbiAgICBjb2xvcjogIzNENUNGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGFwb3Ige1xyXG4gICAgY29sb3I6ICNhZDAwMjMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlbGVzYWkge1xyXG4gICAgY29sb3I6ICMxYjZjMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN0YXR1c2VzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICM3ZDkzZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN0YXR1c2VzLXNlbGVzYWkgeyBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwMGJiNTEgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi50b3A1LWhlYWQge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNENUNGRjtcclxufVxyXG5cclxuLnRvcDUtdGl0bGUge1xyXG4gICAgY29sb3I6I0ZGRjtcclxuICAgIFxyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAuOWVtO1xyXG59XHJcblxyXG4udG9wNS1jb250ZW50IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHggMXB4IDFweCAxcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTFlMWUxO1xyXG59XHJcblxyXG4udG9wNS1jYXQge1xyXG4gICAgZm9udC1zaXplOiAuOWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnRvcDUtcmlnaHRtb250aCB7XHJcbiAgICBmb250LXNpemU6IC43ZW07XHJcbiAgICBjb2xvcjogIzRiODBmMDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4udG9wNS1sZWZ0bW9udGgge1xyXG4gICAgZm9udC1zaXplOiAuN2VtO1xyXG4gICAgY29sb3I6ICNlYzdiOWM7XHJcbn1cclxuXHJcbi50b3A1LWxlZnQsIC50b3A1LXJpZ2h0IHtcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG59XHJcblxyXG4udG9wNS1yaWdodCB7XHJcbnRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5kZXRhaWxfbGlzdF9wb2lue1xyXG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkOyBcclxuICAgIGJvcmRlci13aWR0aDogMC41cHg7IFxyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjYpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5jYXJkXzIge1xyXG4gICAgLyogQWRkIHNoYWRvd3MgdG8gY3JlYXRlIHRoZSBcImNhcmRcIiBlZmZlY3QgKi9cclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBkZWVwZXIgc2hhZG93ICovXHJcbiAgLmNhcmRfMjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG4gIH1cclxuICBcclxuICAvKiBBZGQgc29tZSBwYWRkaW5nIGluc2lkZSB0aGUgY2FyZCBjb250YWluZXIgKi9cclxuICBcclxuICAuaW9uLXNlZ21lbnQtYnV0dG9ucyB7XHJcbiAgICB3aWR0aDogNjUwcHg7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnVuZGVybGluZXtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDAuMXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZDRkNGQ0O1xyXG4gIH0iXX0= */";

/***/ }),

/***/ 1936:
/*!*************************************************************************!*\
  !*** ./src/app/modals/belanja-modal/belanja-modal.page.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Peringkat Belanja</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    <div *ngFor=\"let v of peringkat_belanja\" (click)=\"detail(v.Division)\">\n      <ion-row>\n        <ion-col class=\"bonus-title_bold\">{{v.Division}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"bonus-title_tgl1\">{{bln}}</ion-col>\n        <ion-col class=\"bonus-text_tgl1\">{{bln_next}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"bonus-title\">Rp. {{v.TOTAL_PREVIOUS|number}}</ion-col>\n        <ion-col class=\"bonus-text_right\">Rp. {{v.TOTAL_CURRENT|number}}</ion-col>\n      </ion-row>\n      <div class=\"underline\"></div>\n    </div>\n\n    \n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_modals_belanja-modal_belanja-modal_page_ts.js.map