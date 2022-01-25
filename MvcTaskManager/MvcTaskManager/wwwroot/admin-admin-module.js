(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "3RKl":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/components/client-locations/client-locations.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ClientLocationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientLocationsComponent", function() { return ClientLocationsComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models_client_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/client-location */ "avw3");
/* harmony import */ var src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipes/filter.pipe */ "BhhM");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_client_locations_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/client-locations.service */ "4D4e");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pipes/paging.pipe */ "tuZ1");
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../pipes/sort.pipe */ "eLiO");












const _c0 = ["defaultTextBox_New"];
const _c1 = ["defaultTextBox_Edit"];
function ClientLocationsComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 53);
} }
function ClientLocationsComponent_i_26_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_i_26_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r11.sortBy = "clientLocationName"; return ctx_r11.sortOrder = "ASC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ClientLocationsComponent_i_27_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_i_27_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.sortOrder = "DESC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ClientLocationsComponent_i_28_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_i_28_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.sortOrder = "ASC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ClientLocationsComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_tr_31_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const clientLocation_r17 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.onEditClick($event, clientLocation_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_tr_31_Template_button_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const clientLocation_r17 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r21.onDeleteClick($event, clientLocation_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const clientLocation_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](clientLocation_r17.clientLocationName);
} }
const _c2 = function (a0) { return { "active": a0 }; };
function ClientLocationsComponent_ng_container_40_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_ng_container_40_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25); const page_r23 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r24.onPageIndexClicked(page_r23.pageIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r23 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c2, page_r23.pageIndex == ctx_r22.currentPageIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](page_r23.pageIndex + 1);
} }
function ClientLocationsComponent_ng_container_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ClientLocationsComponent_ng_container_40_li_1_Template, 3, 4, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r5.pages);
} }
function ClientLocationsComponent_ng_container_41_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ClientLocationsComponent_ng_container_41_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_ng_container_41_li_8_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r28.onPageIndexClicked(ctx_r28.currentPageIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r27.currentPageIndex + 1);
} }
function ClientLocationsComponent_ng_container_41_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_ng_container_41_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r30.onPageIndexClicked(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_ng_container_41_Template_li_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r32.onPageIndexClicked(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ClientLocationsComponent_ng_container_41_li_7_Template, 2, 0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ClientLocationsComponent_ng_container_41_li_8_Template, 3, 2, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_ng_container_41_Template_li_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r33.onPageIndexClicked(ctx_r33.pages.length - 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_ng_container_41_Template_li_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r34.onPageIndexClicked(ctx_r34.pages.length - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c2, ctx_r6.currentPageIndex == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c2, ctx_r6.currentPageIndex == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c2, ctx_r6.currentPageIndex == ctx_r6.pages.length - 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.pages.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c2, ctx_r6.currentPageIndex == ctx_r6.pages.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.pages.length);
} }
function ClientLocationsComponent_span_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Client Location Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ClientLocationsComponent_span_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Client Location Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c3 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
class ClientLocationsComponent {
    //Constructor
    constructor(clientLocationsService, formBuilder) {
        this.clientLocationsService = clientLocationsService;
        this.formBuilder = formBuilder;
        //Objects for Holding Model Data
        this.clientLocations = [];
        this.showLoading = true;
        //Objects for Delete
        this.deleteClientLocation = new src_app_models_client_location__WEBPACK_IMPORTED_MODULE_1__["ClientLocation"]();
        this.editIndex = null;
        this.deleteIndex = null;
        //Properties for Searching
        this.searchBy = "clientLocationName";
        this.searchText = "";
        //Properties for Paging
        this.currentPageIndex = 0;
        this.pages = [];
        this.pageSize = 7;
        //Properties for Sorting
        this.sortBy = "clientLocationName";
        this.sortOrder = "ASC";
    }
    ngOnInit() {
        //Get data from database
        this.clientLocationsService.getClientLocations().subscribe((response) => {
            this.clientLocations = response;
            this.showLoading = false;
            this.calculateNoOfPages();
        });
        //Create newForm
        this.newForm = this.formBuilder.group({
            clientLocationID: this.formBuilder.control(null),
            clientLocationName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
        //Create editForm
        this.editForm = this.formBuilder.group({
            clientLocationID: this.formBuilder.control(null),
            clientLocationName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
    }
    calculateNoOfPages() {
        //Get no. of Pages
        let filterPipe = new src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]();
        var noOfPages = Math.ceil(filterPipe.transform(this.clientLocations, this.searchBy, this.searchText).length / this.pageSize);
        this.pages = [];
        //Generate pages
        for (let i = 0; i < noOfPages; i++) {
            this.pages.push({ pageIndex: i });
        }
        this.currentPageIndex = 0;
    }
    onPageIndexClicked(ind) {
        //Set currentPageIndex
        if (ind >= 0 && ind < this.pages.length) {
            this.currentPageIndex = ind;
        }
    }
    onNewClick(event) {
        //reset the newForm
        this.newForm.reset({ clientLocationID: 0 });
        setTimeout(() => {
            //Focus the ClientLocation textbox in newForm
            this.defaultTextBox_New.nativeElement.focus();
        }, 100);
    }
    onSaveClick() {
        if (this.newForm.valid) {
            //Invoke the REST-API call
            this.clientLocationsService.insertClientLocation(this.newForm.value).subscribe((response) => {
                //Add Response to Grid
                var p = new src_app_models_client_location__WEBPACK_IMPORTED_MODULE_1__["ClientLocation"]();
                p.clientLocationID = response.clientLocationID;
                p.clientLocationName = response.clientLocationName;
                this.clientLocations.push(p);
                //Reset the newForm
                this.newForm.reset();
                jquery__WEBPACK_IMPORTED_MODULE_3__("#newClientLocationFormCancel").trigger("click");
                this.calculateNoOfPages();
                this.calculateNoOfPages();
            }, (error) => {
                console.log(error);
            });
        }
    }
    onEditClick(event, clientLocation) {
        //Reset the editForm
        this.editForm.reset();
        setTimeout(() => {
            //Set data into editForm
            this.editForm.patchValue(clientLocation);
            this.editIndex = this.clientLocations.indexOf(clientLocation);
            //Focus the ClientLocation textbox in editForm
            this.defaultTextBox_Edit.nativeElement.focus();
        }, 100);
    }
    onUpdateClick() {
        if (this.editForm.valid) {
            //Invoke the REST-API call
            this.clientLocationsService.updateClientLocation(this.editForm.value).subscribe((response) => {
                //Update the response in Grid
                this.clientLocations[this.editIndex] = response;
                //Reset the editForm
                this.editForm.reset();
                jquery__WEBPACK_IMPORTED_MODULE_3__("#editClientLocationFormCancel").trigger("click");
            }, (error) => {
                console.log(error);
            });
        }
    }
    onDeleteClick(event, clientLocation) {
        //Set data into deleteClientLocation
        this.deleteClientLocation.clientLocationID = clientLocation.clientLocationID;
        this.deleteClientLocation.clientLocationName = clientLocation.clientLocationName;
        this.deleteIndex = this.clientLocations.indexOf(clientLocation);
    }
    onDeleteConfirmClick() {
        //Invoke the REST-API call
        this.clientLocationsService.deleteClientLocation(this.deleteClientLocation.clientLocationID).subscribe((response) => {
            //Delete object in Grid
            this.clientLocations.splice(this.deleteIndex, 1);
            //Clear deleteCountry
            this.deleteClientLocation.clientLocationID = null;
            this.deleteClientLocation.clientLocationName = null;
            //Recall the calculateNoOfPages
            this.calculateNoOfPages();
        }, (error) => {
            console.log(error);
        });
    }
    onSearchTextChange(event) {
        this.calculateNoOfPages();
    }
}
ClientLocationsComponent.ɵfac = function ClientLocationsComponent_Factory(t) { return new (t || ClientLocationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_client_locations_service__WEBPACK_IMPORTED_MODULE_5__["ClientLocationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
ClientLocationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ClientLocationsComponent, selectors: [["app-client-locations"]], viewQuery: function ClientLocationsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_New = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_Edit = _t.first);
    } }, decls: 114, vars: 34, consts: [["class", "fa fa-circle-o-notch fa-spin", "style", "font-size:24px", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "form-group", "row"], [1, "col-md-12", "col-lg-12", "col-xl-2"], ["data-toggle", "modal", "data-target", "#newClientLocationModal", 1, "btn", "btn-primary", 3, "click"], ["for", "drpSearchBy", 1, "col-form-label", "col-md-6", "col-lg-2", "offset-xl-1", "col-xl-2", "text-right"], [1, "col-md-6", "col-lg-4", "col-xl-3"], ["id", "drpSearchBy", "name", "SearchBy", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "clientLocationName"], ["for", "textSearchText", 1, "col-form-label", "col-md-6", "col-lg-2", "col-xl-1", "text-right"], [1, "input-group"], ["type", "text", "id", "txtSearchText", "name", "SearchText", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "col-xl-8", "col-lg-9", "mx-auto"], [1, "table", "table-bordered"], [1, "table-light", "text-dark"], ["class", "fa fa-sort hand-icon", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-up hand-icon text-primary", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-down hand-icon text-primary", 3, "click", 4, "ngIf"], [1, "text-center", 2, "width", "200px"], [4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mt-1"], [1, "page-item", 3, "click"], ["href", "#", "onclick", "return false", 1, "page-link", "bg-secondary", "text-white"], [4, "ngIf"], ["novalidate", "novalidate", 3, "formGroup"], ["role", "dialog", "id", "newClientLocationModal", 1, "modal"], [1, "modal-dialog", "modal-md"], [1, "modal-content"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], ["for", "txtNewClientLocationName", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "id", "txtNewClientLocationName", "placeholder", "Client Location Name", "name", "ClientLocationName", "formControlName", "clientLocationName", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_New", ""], ["class", "text-danger", 4, "ngIf"], [1, "modal-footer"], ["data-dismiss", "modal", "id", "newClientLocationFormCancel", "type", "button", 1, "btn", "btn-warning"], [1, "btn", "btn-success", 3, "click"], ["role", "dialog", "id", "editClientLocationModal", 1, "modal"], ["for", "txtEditClientLocationName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditClientLocationName", "placeholder", "Client Location Name", "name", "ClientLocationName", "formControlName", "clientLocationName", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_Edit", ""], ["data-dismiss", "modal", "id", "editClientLocationFormCancel", "type", "button", 1, "btn", "btn-warning"], ["role", "dialog", "id", "deleteModal", 1, "modal"], [1, "text-warning"], ["for", "txtDeleteClientLocationName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteClientLocationName", "placeholder", "Client Location Name", "name", "ClientLocationName", "disabled", "disabled", 1, "form-control-plain-text", 2, "width", "300px", 3, "ngModel", "ngModelChange"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-warning"], ["data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-circle-o-notch", "fa-spin", 2, "font-size", "24px"], [1, "fa", "fa-sort", "hand-icon", 3, "click"], [1, "fa", "fa-sort-up", "hand-icon", "text-primary", 3, "click"], [1, "fa", "fa-sort-down", "hand-icon", "text-primary", 3, "click"], [1, "text-center"], ["data-toggle", "modal", "data-target", "#editClientLocationModal", 1, "btn", "btn-info", 3, "click"], ["data-toggle", "modal", "data-target", "#deleteModal", 1, "btn", "btn-warning", 3, "click"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass", "click"], ["href", "#", "onclick", "return false", 1, "page-link"], ["class", "page-item", 3, "ngClass", "click", 4, "ngIf"], [1, "text-danger"]], template: function ClientLocationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ClientLocationsComponent_i_1_Template, 1, 0, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_Template_button_click_6_listener($event) { return ctx.onNewClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Create Client Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Search by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ClientLocationsComponent_Template_select_ngModelChange_11_listener($event) { return ctx.searchBy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Client Location Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Search:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ClientLocationsComponent_Template_input_ngModelChange_18_listener($event) { return ctx.searchText = $event; })("keyup", function ClientLocationsComponent_Template_input_keyup_18_listener($event) { return ctx.onSearchTextChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Department ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, ClientLocationsComponent_i_26_Template, 1, 0, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, ClientLocationsComponent_i_27_Template, 1, 0, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, ClientLocationsComponent_i_28_Template, 1, 0, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, ClientLocationsComponent_tr_31_Template, 9, 1, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](32, "paging");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_Template_li_click_37_listener() { return ctx.onPageIndexClicked(ctx.currentPageIndex - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, ClientLocationsComponent_ng_container_40_Template, 2, 1, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, ClientLocationsComponent_ng_container_41_Template, 17, 16, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_Template_li_click_42_listener() { return ctx.onPageIndexClicked(ctx.currentPageIndex + 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "New Client Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Client Location Name *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](60, "input", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](62, ClientLocationsComponent_span_62_Template, 2, 0, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_Template_button_click_66_listener() { return ctx.onSaveClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "Edit Client Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "Client Location Name *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](83, "input", 44, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](85, ClientLocationsComponent_span_85_Template, 2, 0, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_Template_button_click_89_listener() { return ctx.onUpdateClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, "Delete Client Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](100, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103, "Are you sure to delete this Client Location?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](106, "Client Location Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ClientLocationsComponent_Template_input_ngModelChange_108_listener($event) { return ctx.deleteClientLocation.clientLocationName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientLocationsComponent_Template_button_click_112_listener() { return ctx.onDeleteConfirmClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortBy != "clientLocationName");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortBy == "clientLocationName" && ctx.sortOrder == "ASC");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortBy == "clientLocationName" && ctx.sortOrder == "DESC");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](32, 16, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](33, 20, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](34, 24, ctx.clientLocations, ctx.searchBy, ctx.searchText), ctx.sortBy, ctx.sortOrder), ctx.currentPageIndex, ctx.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pages.length <= 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pages.length > 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.newForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](28, _c3, ctx.newForm.get("clientLocationName").invalid && (ctx.newForm.get("clientLocationName").dirty || ctx.newForm.get("clientLocationName").touched || ctx.newForm.valid), ctx.newForm.get("clientLocationName").valid && (ctx.newForm.get("clientLocationName").dirty || ctx.newForm.get("clientLocationName").touched || ctx.newForm.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.newForm.get("clientLocationName").invalid && (ctx.newForm.get("clientLocationName").dirty || ctx.newForm.get("clientLocationName").touched || ctx.newForm.valid) && (ctx.newForm.get("clientLocationName").errors == null ? null : ctx.newForm.get("clientLocationName").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](31, _c3, ctx.editForm.get("clientLocationName").invalid && (ctx.editForm.get("clientLocationName").dirty || ctx.editForm.get("clientLocationName").touched || ctx.editForm.valid), ctx.editForm.get("clientLocationName").valid && (ctx.editForm.get("clientLocationName").dirty || ctx.editForm.get("clientLocationName").touched || ctx.editForm.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.editForm.get("clientLocationName").invalid && (ctx.editForm.get("clientLocationName").dirty || ctx.editForm.get("clientLocationName").touched || ctx.editForm.valid) && (ctx.editForm.get("clientLocationName").errors == null ? null : ctx.editForm.get("clientLocationName").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.deleteClientLocation.clientLocationName);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultClassDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"]], pipes: [_pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_8__["PagingPipe"], _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_9__["SortPipe"], src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQtbG9jYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "8dlv":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/components/task-priorities/task-priorities.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TaskPrioritiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskPrioritiesComponent", function() { return TaskPrioritiesComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models_task_priority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/task-priority */ "cluD");
/* harmony import */ var src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipes/filter.pipe */ "BhhM");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_task_priorities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/task-priorities.service */ "6bg8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pipes/paging.pipe */ "tuZ1");
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../pipes/sort.pipe */ "eLiO");












const _c0 = ["defaultTextBox_New"];
const _c1 = ["defaultTextBox_Edit"];
function TaskPrioritiesComponent_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 53);
} }
function TaskPrioritiesComponent_i_27_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_i_27_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r11.sortBy = "taskPriorityName"; return ctx_r11.sortOrder = "ASC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TaskPrioritiesComponent_i_28_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_i_28_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.sortOrder = "DESC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TaskPrioritiesComponent_i_29_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_i_29_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.sortOrder = "ASC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TaskPrioritiesComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_tr_32_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const taskPriority_r17 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.onEditClick($event, taskPriority_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_tr_32_Template_button_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const taskPriority_r17 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r21.onDeleteClick($event, taskPriority_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const taskPriority_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](taskPriority_r17.taskPriorityName);
} }
const _c2 = function (a0) { return { "active": a0 }; };
function TaskPrioritiesComponent_ng_container_41_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_ng_container_41_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25); const page_r23 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r24.onPageIndexClicked(page_r23.pageIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r23 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c2, page_r23.pageIndex == ctx_r22.currentPageIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](page_r23.pageIndex + 1);
} }
function TaskPrioritiesComponent_ng_container_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TaskPrioritiesComponent_ng_container_41_li_1_Template, 3, 4, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r5.pages);
} }
function TaskPrioritiesComponent_ng_container_42_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TaskPrioritiesComponent_ng_container_42_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_ng_container_42_li_8_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r28.onPageIndexClicked(ctx_r28.currentPageIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r27.currentPageIndex + 1);
} }
function TaskPrioritiesComponent_ng_container_42_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_ng_container_42_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r30.onPageIndexClicked(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_ng_container_42_Template_li_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r32.onPageIndexClicked(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, TaskPrioritiesComponent_ng_container_42_li_7_Template, 2, 0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, TaskPrioritiesComponent_ng_container_42_li_8_Template, 3, 2, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_ng_container_42_Template_li_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r33.onPageIndexClicked(ctx_r33.pages.length - 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_ng_container_42_Template_li_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r34.onPageIndexClicked(ctx_r34.pages.length - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c2, ctx_r6.currentPageIndex == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c2, ctx_r6.currentPageIndex == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c2, ctx_r6.currentPageIndex == ctx_r6.pages.length - 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.pages.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c2, ctx_r6.currentPageIndex == ctx_r6.pages.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.pages.length);
} }
function TaskPrioritiesComponent_span_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Task Priority Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TaskPrioritiesComponent_span_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Task Priority Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c3 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
class TaskPrioritiesComponent {
    //Constructor
    constructor(taskPrioritiesService, formBuilder) {
        this.taskPrioritiesService = taskPrioritiesService;
        this.formBuilder = formBuilder;
        //Objects for Holding Model Data
        this.taskPriorities = [];
        this.showLoading = true;
        //Objects for Delete
        this.deleteTaskPriority = new src_app_models_task_priority__WEBPACK_IMPORTED_MODULE_1__["TaskPriority"]();
        this.editIndex = null;
        this.deleteIndex = null;
        //Properties for Searching
        this.searchBy = "taskPriorityName";
        this.searchText = "";
        //Properties for Paging
        this.currentPageIndex = 0;
        this.pages = [];
        this.pageSize = 7;
        //Properties for Sorting
        this.sortBy = "taskPriorityName";
        this.sortOrder = "ASC";
    }
    ngOnInit() {
        //Get data from database
        this.taskPrioritiesService.getTaskPriorities().subscribe((response) => {
            this.taskPriorities = response;
            this.showLoading = false;
            this.calculateNoOfPages();
        });
        //Create newForm
        this.newForm = this.formBuilder.group({
            taskPriorityID: this.formBuilder.control(null),
            taskPriorityName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
        //Create editForm
        this.editForm = this.formBuilder.group({
            taskPriorityID: this.formBuilder.control(null),
            taskPriorityName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
    }
    calculateNoOfPages() {
        //Get no. of Pages
        let filterPipe = new src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]();
        var noOfPages = Math.ceil(filterPipe.transform(this.taskPriorities, this.searchBy, this.searchText).length / this.pageSize);
        this.pages = [];
        //Generate pages
        for (let i = 0; i < noOfPages; i++) {
            this.pages.push({ pageIndex: i });
        }
        this.currentPageIndex = 0;
    }
    onPageIndexClicked(ind) {
        //Set currentPageIndex
        if (ind >= 0 && ind < this.pages.length) {
            this.currentPageIndex = ind;
        }
    }
    onNewClick(event) {
        //reset the newForm
        this.newForm.reset({ taskPriorityID: 0 });
        setTimeout(() => {
            //Focus the TaskPriority textbox in newForm
            this.defaultTextBox_New.nativeElement.focus();
        }, 100);
    }
    onSaveClick() {
        if (this.newForm.valid) {
            //Invoke the REST-API call
            this.taskPrioritiesService.insertTaskPriority(this.newForm.value).subscribe((response) => {
                //Add Response to Grid
                var p = new src_app_models_task_priority__WEBPACK_IMPORTED_MODULE_1__["TaskPriority"]();
                p.taskPriorityID = response.taskPriorityID;
                p.taskPriorityName = response.taskPriorityName;
                this.taskPriorities.push(p);
                //Reset the newForm
                this.newForm.reset();
                jquery__WEBPACK_IMPORTED_MODULE_3__("#newTaskPriorityFormCancel").trigger("click");
                this.calculateNoOfPages();
                this.calculateNoOfPages();
            }, (error) => {
                console.log(error);
            });
        }
    }
    onEditClick(event, taskPriority) {
        //Reset the editForm
        this.editForm.reset();
        setTimeout(() => {
            //Set data into editForm
            this.editForm.patchValue(taskPriority);
            this.editIndex = this.taskPriorities.indexOf(taskPriority);
            //Focus the TaskPriority textbox in editForm
            this.defaultTextBox_Edit.nativeElement.focus();
        }, 100);
    }
    onUpdateClick() {
        if (this.editForm.valid) {
            //Invoke the REST-API call
            this.taskPrioritiesService.updateTaskPriority(this.editForm.value).subscribe((response) => {
                //Update the response in Grid
                this.taskPriorities[this.editIndex] = response;
                //Reset the editForm
                this.editForm.reset();
                jquery__WEBPACK_IMPORTED_MODULE_3__("#editTaskPriorityFormCancel").trigger("click");
            }, (error) => {
                console.log(error);
            });
        }
    }
    onDeleteClick(event, taskPriority) {
        //Set data into deleteTaskPriority
        this.deleteTaskPriority.taskPriorityID = taskPriority.taskPriorityID;
        this.deleteTaskPriority.taskPriorityName = taskPriority.taskPriorityName;
        this.deleteIndex = this.taskPriorities.indexOf(taskPriority);
    }
    onDeleteConfirmClick() {
        //Invoke the REST-API call
        this.taskPrioritiesService.deleteTaskPriority(this.deleteTaskPriority.taskPriorityID).subscribe((response) => {
            //Delete object in Grid
            this.taskPriorities.splice(this.deleteIndex, 1);
            //Clear deleteCountry
            this.deleteTaskPriority.taskPriorityID = null;
            this.deleteTaskPriority.taskPriorityName = null;
            //Recall the calculateNoOfPages
            this.calculateNoOfPages();
        }, (error) => {
            console.log(error);
        });
    }
    onSearchTextChange(event) {
        this.calculateNoOfPages();
    }
}
TaskPrioritiesComponent.ɵfac = function TaskPrioritiesComponent_Factory(t) { return new (t || TaskPrioritiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_task_priorities_service__WEBPACK_IMPORTED_MODULE_5__["TaskPrioritiesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
TaskPrioritiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TaskPrioritiesComponent, selectors: [["app-task-priorities"]], viewQuery: function TaskPrioritiesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_New = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_Edit = _t.first);
    } }, decls: 115, vars: 34, consts: [["class", "fa fa-circle-o-notch fa-spin", "style", "font-size:24px", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "form-group", "row"], [1, "col-md-12", "col-lg-12", "col-xl-2"], ["data-toggle", "modal", "data-target", "#newTaskPriorityModal", 1, "btn", "btn-primary", 3, "click"], ["for", "drpSearchBy", 1, "col-form-label", "col-md-6", "col-lg-2", "offset-xl-1", "col-xl-2", "text-right"], [1, "col-md-6", "col-lg-4", "col-xl-3"], ["id", "drpSearchBy", "name", "SearchBy", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "taskPriorityName"], ["for", "textSearchText", 1, "col-form-label", "col-md-6", "col-lg-2", "col-xl-1", "text-right"], [1, "input-group"], ["type", "text", "id", "txtSearchText", "name", "SearchText", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "col-xl-8", "col-lg-9", "mx-auto"], [1, "table"], [1, "table-dark", "text-dark"], ["class", "fa fa-sort hand-icon", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-up hand-icon text-primary", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-down hand-icon text-primary", 3, "click", 4, "ngIf"], [1, "text-center", 2, "width", "200px"], [4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mt-1"], [1, "page-item", 3, "click"], ["href", "#", "onclick", "return false", 1, "page-link", "bg-secondary", "text-white"], [4, "ngIf"], ["novalidate", "novalidate", 3, "formGroup"], ["role", "dialog", "id", "newTaskPriorityModal", 1, "modal"], [1, "modal-dialog", "modal-md"], [1, "modal-content"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], ["for", "txtNewTaskPriorityName", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "id", "txtNewTaskPriorityName", "placeholder", "Task Priority Name", "name", "TaskPriorityName", "formControlName", "taskPriorityName", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_New", ""], ["class", "text-danger", 4, "ngIf"], [1, "modal-footer"], ["data-dismiss", "modal", "id", "newTaskPriorityFormCancel", "type", "button", 1, "btn", "btn-warning"], [1, "btn", "btn-success", 3, "click"], ["role", "dialog", "id", "editTaskPriorityModal", 1, "modal"], ["for", "txtEditTaskPriorityName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditTaskPriorityName", "placeholder", "Task Priority Name", "name", "TaskPriorityName", "formControlName", "taskPriorityName", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_Edit", ""], ["data-dismiss", "modal", "id", "editTaskPriorityFormCancel", "type", "button", 1, "btn", "btn-warning"], ["role", "dialog", "id", "deleteModal", 1, "modal"], [1, "text-warning"], ["for", "txtDeleteTaskPriorityName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteTaskPriorityName", "placeholder", "Task Priority Name", "name", "TaskPriorityName", "disabled", "disabled", 1, "form-control-plain-text", 2, "width", "300px", 3, "ngModel", "ngModelChange"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-warning"], ["data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-circle-o-notch", "fa-spin", 2, "font-size", "24px"], [1, "fa", "fa-sort", "hand-icon", 3, "click"], [1, "fa", "fa-sort-up", "hand-icon", "text-primary", 3, "click"], [1, "fa", "fa-sort-down", "hand-icon", "text-primary", 3, "click"], [1, "text-center"], ["data-toggle", "modal", "data-target", "#editTaskPriorityModal", 1, "btn", "btn-info", 3, "click"], ["data-toggle", "modal", "data-target", "#deleteModal", 1, "btn", "btn-warning", 3, "click"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass", "click"], ["href", "#", "onclick", "return false", 1, "page-link"], ["class", "page-item", 3, "ngClass", "click", 4, "ngIf"], [1, "text-danger"]], template: function TaskPrioritiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Task Priorities ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TaskPrioritiesComponent_i_2_Template, 1, 0, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_Template_button_click_7_listener($event) { return ctx.onNewClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Create Task Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Search by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskPrioritiesComponent_Template_select_ngModelChange_12_listener($event) { return ctx.searchBy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Task Priority Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Search:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskPrioritiesComponent_Template_input_ngModelChange_19_listener($event) { return ctx.searchText = $event; })("keyup", function TaskPrioritiesComponent_Template_input_keyup_19_listener($event) { return ctx.onSearchTextChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " Task Priority Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, TaskPrioritiesComponent_i_27_Template, 1, 0, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, TaskPrioritiesComponent_i_28_Template, 1, 0, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, TaskPrioritiesComponent_i_29_Template, 1, 0, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, TaskPrioritiesComponent_tr_32_Template, 9, 1, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "paging");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](35, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_Template_li_click_38_listener() { return ctx.onPageIndexClicked(ctx.currentPageIndex - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, TaskPrioritiesComponent_ng_container_41_Template, 2, 1, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, TaskPrioritiesComponent_ng_container_42_Template, 17, 16, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_Template_li_click_43_listener() { return ctx.onPageIndexClicked(ctx.currentPageIndex + 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "New Task Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Task Priority Name *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "input", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](63, TaskPrioritiesComponent_span_63_Template, 2, 0, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_Template_button_click_67_listener() { return ctx.onSaveClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "Edit Task Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "Task Priority Name *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](84, "input", 44, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](86, TaskPrioritiesComponent_span_86_Template, 2, 0, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_Template_button_click_90_listener() { return ctx.onUpdateClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, "Delete Task Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, "Are you sure to delete this Task Priority?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "Task Priority Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskPrioritiesComponent_Template_input_ngModelChange_109_listener($event) { return ctx.deleteTaskPriority.taskPriorityName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](112, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskPrioritiesComponent_Template_button_click_113_listener() { return ctx.onDeleteConfirmClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](114, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortBy != "taskPriorityName");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortBy == "taskPriorityName" && ctx.sortOrder == "ASC");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortBy == "taskPriorityName" && ctx.sortOrder == "DESC");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](33, 16, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](34, 20, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](35, 24, ctx.taskPriorities, ctx.searchBy, ctx.searchText), ctx.sortBy, ctx.sortOrder), ctx.currentPageIndex, ctx.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pages.length <= 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pages.length > 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.newForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](28, _c3, ctx.newForm.get("taskPriorityName").invalid && (ctx.newForm.get("taskPriorityName").dirty || ctx.newForm.get("taskPriorityName").touched || ctx.newForm.valid), ctx.newForm.get("taskPriorityName").valid && (ctx.newForm.get("taskPriorityName").dirty || ctx.newForm.get("taskPriorityName").touched || ctx.newForm.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.newForm.get("taskPriorityName").invalid && (ctx.newForm.get("taskPriorityName").dirty || ctx.newForm.get("taskPriorityName").touched || ctx.newForm.valid) && (ctx.newForm.get("taskPriorityName").errors == null ? null : ctx.newForm.get("taskPriorityName").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](31, _c3, ctx.editForm.get("taskPriorityName").invalid && (ctx.editForm.get("taskPriorityName").dirty || ctx.editForm.get("taskPriorityName").touched || ctx.editForm.valid), ctx.editForm.get("taskPriorityName").valid && (ctx.editForm.get("taskPriorityName").dirty || ctx.editForm.get("taskPriorityName").touched || ctx.editForm.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.editForm.get("taskPriorityName").invalid && (ctx.editForm.get("taskPriorityName").dirty || ctx.editForm.get("taskPriorityName").touched || ctx.editForm.valid) && (ctx.editForm.get("taskPriorityName").errors == null ? null : ctx.editForm.get("taskPriorityName").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.deleteTaskPriority.taskPriorityName);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultClassDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"]], pipes: [_pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_8__["PagingPipe"], _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_9__["SortPipe"], src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrLXByaW9yaXRpZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "9kti":
/*!*******************************************************************!*\
  !*** ./src/app/admin/components/countries/countries.component.ts ***!
  \*******************************************************************/
/*! exports provided: CountriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesComponent", function() { return CountriesComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models_country__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/country */ "pgfe");
/* harmony import */ var src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipes/filter.pipe */ "BhhM");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_countries_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/countries.service */ "1XgV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pipes/paging.pipe */ "tuZ1");
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../pipes/sort.pipe */ "eLiO");












const _c0 = ["defaultTextBox_New"];
const _c1 = ["defaultTextBox_Edit"];
function CountriesComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 53);
} }
function CountriesComponent_i_26_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_i_26_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r11.sortBy = "countryName"; return ctx_r11.sortOrder = "ASC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CountriesComponent_i_27_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_i_27_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.sortOrder = "DESC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CountriesComponent_i_28_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_i_28_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.sortOrder = "ASC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CountriesComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_tr_31_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const country_r17 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.onEditClick($event, country_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_tr_31_Template_button_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const country_r17 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r21.onDeleteClick($event, country_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](country_r17.countryName);
} }
const _c2 = function (a0) { return { "active": a0 }; };
function CountriesComponent_ng_container_40_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_ng_container_40_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25); const page_r23 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r24.onPageIndexClicked(page_r23.pageIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r23 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c2, page_r23.pageIndex == ctx_r22.currentPageIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](page_r23.pageIndex + 1);
} }
function CountriesComponent_ng_container_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CountriesComponent_ng_container_40_li_1_Template, 3, 4, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r5.pages);
} }
function CountriesComponent_ng_container_41_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CountriesComponent_ng_container_41_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_ng_container_41_li_8_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r28.onPageIndexClicked(ctx_r28.currentPageIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r27.currentPageIndex + 1);
} }
function CountriesComponent_ng_container_41_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_ng_container_41_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r30.onPageIndexClicked(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_ng_container_41_Template_li_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r32.onPageIndexClicked(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, CountriesComponent_ng_container_41_li_7_Template, 2, 0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, CountriesComponent_ng_container_41_li_8_Template, 3, 2, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_ng_container_41_Template_li_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r33.onPageIndexClicked(ctx_r33.pages.length - 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_ng_container_41_Template_li_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r34.onPageIndexClicked(ctx_r34.pages.length - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c2, ctx_r6.currentPageIndex == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c2, ctx_r6.currentPageIndex == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c2, ctx_r6.currentPageIndex == ctx_r6.pages.length - 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.pages.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c2, ctx_r6.currentPageIndex == ctx_r6.pages.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.pages.length);
} }
function CountriesComponent_span_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Country Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CountriesComponent_span_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Country Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c3 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
class CountriesComponent {
    //Constructor
    constructor(countriesService, formBuilder) {
        this.countriesService = countriesService;
        this.formBuilder = formBuilder;
        //Objects for Holding Model Data
        this.countries = [];
        this.showLoading = false;
        //Objects for Delete
        this.deleteCountry = new src_app_models_country__WEBPACK_IMPORTED_MODULE_1__["Country"]();
        this.editIndex = null;
        this.deleteIndex = null;
        //Properties for Searching
        this.searchBy = "countryName";
        this.searchText = "";
        //Properties for Paging
        this.currentPageIndex = 0;
        this.pages = [];
        this.pageSize = 7;
        //Sorting
        this.sortBy = "countryName";
        this.sortOrder = "ASC"; //ASC | DESC
    }
    ngOnInit() {
        //Get data from database
        this.countriesService.getCountries().subscribe((response) => {
            this.countries = response;
            this.showLoading = false;
            this.calculateNoOfPages();
        });
        //Create newForm
        this.newForm = this.formBuilder.group({
            countryID: this.formBuilder.control(null),
            countryName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
        //Create editForm
        this.editForm = this.formBuilder.group({
            countryID: this.formBuilder.control(null),
            countryName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
    }
    calculateNoOfPages() {
        //Get no. of Pages
        let filterPipe = new src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]();
        var noOfPages = Math.ceil(filterPipe.transform(this.countries, this.searchBy, this.searchText).length / this.pageSize);
        this.pages = [];
        //Generate pages
        for (let i = 0; i < noOfPages; i++) {
            this.pages.push({ pageIndex: i });
        }
        this.currentPageIndex = 0;
    }
    onPageIndexClicked(ind) {
        //Set currentPageIndex
        if (ind >= 0 && ind < this.pages.length) {
            this.currentPageIndex = ind;
        }
    }
    onNewClick(event) {
        //reset the newForm
        this.newForm.reset({ countryID: 0 });
        setTimeout(() => {
            //Focus the ClientLocation textbox in newForm
            this.defaultTextBox_New.nativeElement.focus();
        }, 100);
    }
    onSaveClick() {
        if (this.newForm.valid) {
            //Invoke the REST-API call
            this.countriesService.insertCountry(this.newForm.value).subscribe((response) => {
                //Add Response to Grid
                var p = new src_app_models_country__WEBPACK_IMPORTED_MODULE_1__["Country"]();
                p.countryID = response.countryID;
                p.countryName = response.countryName;
                this.countries.push(p);
                //Reset the newForm
                this.newForm.reset();
                jquery__WEBPACK_IMPORTED_MODULE_3__("#newCountryFormCancel").trigger("click");
                this.calculateNoOfPages();
            }, (error) => {
                console.log(error);
            });
        }
    }
    onEditClick(event, country) {
        //Reset the editForm
        this.editForm.reset();
        setTimeout(() => {
            //Set data into editForm
            this.editForm.patchValue(country);
            this.editIndex = this.countries.indexOf(country);
            //Focus the ClientLocation textbox in editForm
            this.defaultTextBox_Edit.nativeElement.focus();
        }, 100);
    }
    onUpdateClick() {
        if (this.editForm.valid) {
            //Invoke the REST-API call
            this.countriesService.updateCountry(this.editForm.value).subscribe((response) => {
                //Update the response in Grid
                this.countries[this.editIndex] = response;
                //Reset the editForm
                this.editForm.reset();
                jquery__WEBPACK_IMPORTED_MODULE_3__("#editCountryFormCancel").trigger("click");
            }, (error) => {
                console.log(error);
            });
        }
    }
    onDeleteClick(event, country) {
        //Set data into deleteCountry
        this.deleteCountry.countryID = country.countryID;
        this.deleteCountry.countryName = country.countryName;
        this.deleteIndex = this.countries.indexOf(country);
    }
    onDeleteConfirmClick() {
        //Invoke the REST-API call
        this.countriesService.deleteCountry(this.deleteCountry.countryID).subscribe((response) => {
            //Delete object in Grid
            this.countries.splice(this.deleteIndex, 1);
            //Clear deleteCountry
            this.deleteCountry.countryID = null;
            this.deleteCountry.countryName = null;
            this.calculateNoOfPages();
        }, (error) => {
            console.log(error);
        });
    }
    onSearchTextChange(event) {
        //Recall the calculateNoOfPages
        this.calculateNoOfPages();
    }
}
CountriesComponent.ɵfac = function CountriesComponent_Factory(t) { return new (t || CountriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_countries_service__WEBPACK_IMPORTED_MODULE_5__["CountriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
CountriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CountriesComponent, selectors: [["app-countries"]], viewQuery: function CountriesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_New = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_Edit = _t.first);
    } }, decls: 114, vars: 34, consts: [["class", "fa fa-circle-o-notch fa-spin", "style", "font-size:24px", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "form-group", "row"], [1, "col-md-12", "col-lg-12", "col-xl-2"], ["data-toggle", "modal", "data-target", "#newCountryModal", 1, "btn", "btn-primary", 3, "click"], ["for", "drpSearchBy", 1, "col-form-label", "col-md-6", "col-lg-2", "offset-xl-1", "col-xl-2", "text-right"], [1, "col-md-6", "col-lg-4", "col-xl-3"], ["id", "drpSearchBy", "name", "SearchBy", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "countryName"], ["for", "textSearchText", 1, "col-form-label", "col-md-6", "col-lg-2", "col-xl-1", "text-right"], [1, "input-group"], ["type", "text", "id", "txtSearchText", "name", "SearchText", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "col-xl-8", "col-lg-9", "mx-auto"], [1, "table"], [1, "table-dark", "text-dark"], ["class", "fa fa-sort hand-icon", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-up hand-icon text-primary", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-down hand-icon text-primary", 3, "click", 4, "ngIf"], [1, "text-center", 2, "width", "200px"], [4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mt-1"], [1, "page-item", 3, "click"], ["href", "#", "onclick", "return false", 1, "page-link", "bg-secondary", "text-white"], [4, "ngIf"], ["novalidate", "novalidate", 3, "formGroup"], ["role", "dialog", "id", "newCountryModal", 1, "modal"], [1, "modal-dialog", "modal-md"], [1, "modal-content"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], ["for", "txtNewCountryName", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "id", "txtNewCountryName", "placeholder", "Country Name", "name", "CountryName", "formControlName", "countryName", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_New", ""], ["class", "text-danger", 4, "ngIf"], [1, "modal-footer"], ["data-dismiss", "modal", "id", "newCountryFormCancel", "type", "button", 1, "btn", "btn-warning"], [1, "btn", "btn-success", 3, "click"], ["role", "dialog", "id", "editCountryModal", 1, "modal"], ["for", "txtEditCountryName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditCountryName", "placeholder", "Country Name", "name", "CountryName", "formControlName", "countryName", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_Edit", ""], ["data-dismiss", "modal", "id", "editCountryFormCancel", "type", "button", 1, "btn", "btn-warning"], ["role", "dialog", "id", "deleteCountryModal", 1, "modal"], [1, "text-warning"], ["for", "txtDeleteCountryName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteCountryName", "placeholder", "Country Name", "name", "CountryName", "disabled", "disabled", 1, "form-control-plain-text", 2, "width", "300px", 3, "ngModel", "ngModelChange"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-warning"], ["data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-circle-o-notch", "fa-spin", 2, "font-size", "24px"], [1, "fa", "fa-sort", "hand-icon", 3, "click"], [1, "fa", "fa-sort-up", "hand-icon", "text-primary", 3, "click"], [1, "fa", "fa-sort-down", "hand-icon", "text-primary", 3, "click"], [1, "text-center"], ["data-toggle", "modal", "data-target", "#editCountryModal", "data-backdrop", "false", 1, "btn", "btn-info", 3, "click"], ["data-toggle", "modal", "data-target", "#deleteCountryModal", "data-backdrop", "false", 1, "btn", "btn-warning", 3, "click"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass", "click"], ["href", "#", "onclick", "return false", 1, "page-link"], ["class", "page-item", 3, "ngClass", "click", 4, "ngIf"], [1, "text-danger"]], template: function CountriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CountriesComponent_i_1_Template, 1, 0, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_Template_button_click_6_listener($event) { return ctx.onNewClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Create Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Search by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CountriesComponent_Template_select_ngModelChange_11_listener($event) { return ctx.searchBy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Country Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Search:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CountriesComponent_Template_input_ngModelChange_18_listener($event) { return ctx.searchText = $event; })("keyup", function CountriesComponent_Template_input_keyup_18_listener($event) { return ctx.onSearchTextChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " Country Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, CountriesComponent_i_26_Template, 1, 0, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, CountriesComponent_i_27_Template, 1, 0, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, CountriesComponent_i_28_Template, 1, 0, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, CountriesComponent_tr_31_Template, 9, 1, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](32, "paging");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_Template_li_click_37_listener() { return ctx.onPageIndexClicked(ctx.currentPageIndex - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, CountriesComponent_ng_container_40_Template, 2, 1, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, CountriesComponent_ng_container_41_Template, 17, 16, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_Template_li_click_42_listener() { return ctx.onPageIndexClicked(ctx.currentPageIndex + 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "New Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Country Name *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](60, "input", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](62, CountriesComponent_span_62_Template, 2, 0, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_Template_button_click_66_listener() { return ctx.onSaveClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "Edit Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "Country Name *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](83, "input", 44, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](85, CountriesComponent_span_85_Template, 2, 0, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_Template_button_click_89_listener() { return ctx.onUpdateClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, "Delete Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](100, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103, "Are you sure to delete this Country?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](106, "Country Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CountriesComponent_Template_input_ngModelChange_108_listener($event) { return ctx.deleteCountry.countryName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CountriesComponent_Template_button_click_112_listener() { return ctx.onDeleteConfirmClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortBy != "countryName");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortBy == "countryName" && ctx.sortOrder == "ASC");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortBy == "countryName" && ctx.sortOrder == "DESC");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](32, 16, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](33, 20, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](34, 24, ctx.countries, ctx.searchBy, ctx.searchText), ctx.sortBy, ctx.sortOrder), ctx.currentPageIndex, ctx.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pages.length <= 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pages.length > 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.newForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](28, _c3, ctx.newForm.get("countryName").invalid && (ctx.newForm.get("countryName").dirty || ctx.newForm.get("countryName").touched || ctx.newForm.valid), ctx.newForm.get("countryName").valid && (ctx.newForm.get("countryName").dirty || ctx.newForm.get("countryName").touched || ctx.newForm.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.newForm.get("countryName").invalid && (ctx.newForm.get("countryName").dirty || ctx.newForm.get("countryName").touched || ctx.newForm.valid) && (ctx.newForm.get("countryName").errors == null ? null : ctx.newForm.get("countryName").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](31, _c3, ctx.editForm.get("countryName").invalid && (ctx.editForm.get("countryName").dirty || ctx.editForm.get("countryName").touched || ctx.editForm.valid), ctx.editForm.get("countryName").valid && (ctx.editForm.get("countryName").dirty || ctx.editForm.get("countryName").touched || ctx.editForm.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.editForm.get("countryName").invalid && (ctx.editForm.get("countryName").dirty || ctx.editForm.get("countryName").touched || ctx.editForm.valid) && (ctx.editForm.get("countryName").errors == null ? null : ctx.editForm.get("countryName").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.deleteCountry.countryName);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultClassDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"]], pipes: [_pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_8__["PagingPipe"], _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_9__["SortPipe"], src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3VudHJpZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "I/Vx":
/*!***********************************************************************!*\
  !*** ./src/app/admin/components/store-order/store-order.component.ts ***!
  \***********************************************************************/
/*! exports provided: StoreOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreOrderComponent", function() { return StoreOrderComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models_rejected_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/rejected-status */ "kHQe");
/* harmony import */ var src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipes/filter.pipe */ "BhhM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_wh_checker_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/wh-checker-dashboard.service */ "hMF/");
/* harmony import */ var src_app_services_system_capability_status_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/system-capability-status.service */ "lJP4");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../pipes/paging.pipe */ "tuZ1");
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../pipes/sort.pipe */ "eLiO");

















const _c0 = ["defaultTextBox_New"];
const _c1 = ["defaultTextBox_Edit"];
const _c2 = ["RejectStatusDescription"];
const _c3 = ["RejectStatusUpdate"];
function StoreOrderComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 31);
} }
function StoreOrderComponent_i_43_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StoreOrderComponent_i_43_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r7.sortBy = "reject_status_name"; return ctx_r7.sortOrder = "ASC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function StoreOrderComponent_i_44_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StoreOrderComponent_i_44_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.sortOrder = "DESC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function StoreOrderComponent_i_45_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StoreOrderComponent_i_45_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.sortOrder = "ASC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function StoreOrderComponent_tr_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const storeOrder_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](storeOrder_r13.is_approved_prepa_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](storeOrder_r13.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](storeOrder_r13.store_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](storeOrder_r13.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](storeOrder_r13.area);
} }
const _c4 = function (a0) { return { "active": a0 }; };
function StoreOrderComponent_ng_container_63_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StoreOrderComponent_ng_container_63_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const page_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r17.onPageIndexClicked(page_r16.pageIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c4, page_r16.pageIndex == ctx_r15.currentPageIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](page_r16.pageIndex + 1);
} }
function StoreOrderComponent_ng_container_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, StoreOrderComponent_ng_container_63_li_1_Template, 3, 4, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.pages);
} }
function StoreOrderComponent_ng_container_64_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function StoreOrderComponent_ng_container_64_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StoreOrderComponent_ng_container_64_li_8_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r21.onPageIndexClicked(ctx_r21.currentPageIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r20.currentPageIndex + 1);
} }
function StoreOrderComponent_ng_container_64_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StoreOrderComponent_ng_container_64_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r23.onPageIndexClicked(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StoreOrderComponent_ng_container_64_Template_li_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r25.onPageIndexClicked(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, StoreOrderComponent_ng_container_64_li_7_Template, 2, 0, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, StoreOrderComponent_ng_container_64_li_8_Template, 3, 2, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StoreOrderComponent_ng_container_64_Template_li_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r26.onPageIndexClicked(ctx_r26.pages.length - 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StoreOrderComponent_ng_container_64_Template_li_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r27.onPageIndexClicked(ctx_r27.pages.length - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c4, ctx_r6.currentPageIndex == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c4, ctx_r6.currentPageIndex == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c4, ctx_r6.currentPageIndex == ctx_r6.pages.length - 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r6.pages.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c4, ctx_r6.currentPageIndex == ctx_r6.pages.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r6.pages.length);
} }
class StoreOrderComponent {
    constructor(whCheckerDashboardService, formBuilder, systemCapabilityStatusService, toastr) {
        this.whCheckerDashboardService = whCheckerDashboardService;
        this.formBuilder = formBuilder;
        this.systemCapabilityStatusService = systemCapabilityStatusService;
        this.toastr = toastr;
        //Objects for Holding Model Data
        this.storeOrders = [];
        this.showLoading = true;
        this.totalStoreOrderRowCount = null;
        //Objects for Delete
        this.deleteRejectStatus = new src_app_models_rejected_status__WEBPACK_IMPORTED_MODULE_1__["RejectedStatus"]();
        this.editIndex = null;
        this.deleteIndex = null;
        //Properties for Searching
        this.searchBy = "reject_status_name";
        this.searchText = "";
        //Properties for Paging
        this.currentPageIndex = 0;
        this.pages = [];
        this.pageSize = 7;
        //Properties for Sorting
        this.sortBy = "reject_status_name";
        this.sortOrder = "ASC";
    }
    ngOnInit() {
        //Get data from database
        this.whCheckerDashboardService.getStoreOrders().subscribe((response) => {
            this.storeOrders = response;
            this.showLoading = false;
            this.calculateNoOfPages();
            this.totalStoreOrderRowCount = response.length;
        });
        //Create newForm
        this.newForm = this.formBuilder.group({
            id: this.formBuilder.control(null),
            reject_status_name: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            is_active: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
        //Create editForm
        this.editForm = this.formBuilder.group({
            id: this.formBuilder.control(null),
            reject_status_name: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            is_active: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
        // Here 
        this.samples = this.systemCapabilityStatusService.getSystemCapabilityStatus();
    }
    calculateNoOfPages() {
        //Get no. of Pages
        let filterPipe = new src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]();
        var noOfPages = Math.ceil(filterPipe.transform(this.storeOrders, this.searchBy, this.searchText).length / this.pageSize);
        this.pages = [];
        //Generate pages
        for (let i = 0; i < noOfPages; i++) {
            this.pages.push({ pageIndex: i });
        }
        this.currentPageIndex = 0;
    }
    onPageIndexClicked(ind) {
        //Set currentPageIndex
        if (ind >= 0 && ind < this.pages.length) {
            this.currentPageIndex = ind;
        }
    }
    FieldOutRequiredField() {
        this.toastr.warning('Field out the required fields!', 'Notifications');
    }
    onSearchTextChange(event) {
        this.calculateNoOfPages();
    }
}
StoreOrderComponent.ɵfac = function StoreOrderComponent_Factory(t) { return new (t || StoreOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_wh_checker_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["WhCheckerDashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_system_capability_status_service__WEBPACK_IMPORTED_MODULE_5__["SystemCapabilityStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"])); };
StoreOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: StoreOrderComponent, selectors: [["app-store-order"]], viewQuery: function StoreOrderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c3, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_New = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_Edit = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.RejectStatusDescription = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.RejectStatusUpdate = _t.first);
    } }, decls: 68, vars: 24, consts: [["class", "fa fa-circle-o-notch fa-spin", "style", "font-size:24px", 4, "ngIf"], [1, "col-xl-8", "col-lg-9", "mx-auto", "mb-4"], [1, "system-name"], ["matBadgeColor", "primary", 3, "matBadge"], [1, "row"], [1, "col-xl-12"], [1, "form-group", "row"], ["for", "drpSearchBy", 1, "col-form-label", "col-md-6", "col-lg-2", "offset-xl-1", "col-xl-2", "text-right"], [1, "col-md-6", "col-lg-4", "col-xl-3"], ["id", "drpSearchBy", "name", "SearchBy", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "is_approved_prepa_date"], ["value", "category"], ["value", "store_name"], ["value", "route"], ["value", "area"], ["for", "textSearchText", 1, "col-form-label", "col-md-6", "col-lg-2", "col-xl-1", "text-right"], [1, "input-group"], ["type", "text", "id", "txtSearchText", "name", "SearchText", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "col-xl-8", "col-lg-9", "mx-auto"], [1, "table", "table-striped", "table-bordered", "nowrap", "table-responsive-xl"], [1, "text-light", "header-bg-color-um", "system-name"], ["class", "fa fa-sort hand-icon", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-up hand-icon text-primary", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-down hand-icon text-primary", 3, "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mt-1"], [1, "page-item", 3, "click"], ["mat-stroked-button", "", "color", "primary", "href", "#", "onclick", "return false", 1, "mr-1", "font-color-black"], [4, "ngIf"], ["mat-stroked-button", "", "color", "primary", "href", "#", "onclick", "return false", 1, "ml-1", "font-color-black"], [1, "fa", "fa-circle-o-notch", "fa-spin", 2, "font-size", "24px"], [1, "fa", "fa-sort", "hand-icon", 3, "click"], [1, "fa", "fa-sort-up", "hand-icon", "text-primary", 3, "click"], [1, "fa", "fa-sort-down", "hand-icon", "text-primary", 3, "click"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass", "click"], ["href", "#", "onclick", "return false", 1, "page-link"], ["class", "page-item", 3, "ngClass", "click", 4, "ngIf"]], template: function StoreOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, StoreOrderComponent_i_1_Template, 1, 0, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "STORE ORDER ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Search by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function StoreOrderComponent_Template_select_ngModelChange_14_listener($event) { return ctx.searchBy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Preparation Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "ng ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "ng ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "ng ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Route");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "ng ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "ng ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Search:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function StoreOrderComponent_Template_input_ngModelChange_34_listener($event) { return ctx.searchText = $event; })("keyup", function StoreOrderComponent_Template_input_keyup_34_listener($event) { return ctx.onSearchTextChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, " Preparation Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, StoreOrderComponent_i_43_Template, 1, 0, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, StoreOrderComponent_i_44_Template, 1, 0, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, StoreOrderComponent_i_45_Template, 1, 0, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, " Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, " Store ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, " Route ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, " Area ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, StoreOrderComponent_tr_54_Template, 11, 5, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](55, "paging");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](56, "sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](57, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StoreOrderComponent_Template_li_click_60_listener() { return ctx.onPageIndexClicked(ctx.currentPageIndex - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, StoreOrderComponent_ng_container_63_Template, 2, 1, "ng-container", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, StoreOrderComponent_ng_container_64_Template, 17, 16, "ng-container", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StoreOrderComponent_Template_li_click_65_listener() { return ctx.onPageIndexClicked(ctx.currentPageIndex + 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Nexts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 10, ctx.totalStoreOrderRowCount));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.sortBy != "reject_status_name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.sortBy == "reject_status_name" && ctx.sortOrder == "ASC");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.sortBy == "reject_status_name" && ctx.sortOrder == "DESC");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](55, 12, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](56, 16, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](57, 20, ctx.storeOrders, ctx.searchBy, ctx.searchText), ctx.sortBy, ctx.sortOrder), ctx.currentPageIndex, ctx.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.pages.length <= 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.pages.length > 10);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadge"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatAnchor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__["DefaultClassDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"], _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_13__["PagingPipe"], _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_14__["SortPipe"], src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]], styles: [".font-color-black[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3RvcmUtb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoic3RvcmUtb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9udC1jb2xvci1ibGFja3tcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "JxWU":
/*!***************************************!*\
  !*** ./src/app/models/task-status.ts ***!
  \***************************************/
/*! exports provided: TaskStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskStatus", function() { return TaskStatus; });
class TaskStatus {
    constructor() {
        this.taskStatusID = null;
        this.taskStatusName = null;
    }
}


/***/ }),

/***/ "OdQg":
/*!*************************************************************************************************************!*\
  !*** ./src/app/admin/components/cancelled-potransaction-status/cancelled-potransaction-status.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: CancelledPOTransactionStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelledPOTransactionStatusComponent", function() { return CancelledPOTransactionStatusComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pipes/filter.pipe */ "BhhM");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_models_cancelled_potransaction_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/cancelled-potransaction-status */ "zo1J");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_cancelled_potransaction_status_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/cancelled-potransaction-status.service */ "r8+Z");
/* harmony import */ var src_app_services_system_capability_status_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/system-capability-status.service */ "lJP4");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../pipes/paging.pipe */ "tuZ1");
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../pipes/sort.pipe */ "eLiO");



















const _c0 = ["defaultTextBox_New"];
const _c1 = ["defaultTextBox_Edit"];
const _c2 = ["RejectStatusDescription"];
const _c3 = ["DeleteRejectStatusDescription"];
const _c4 = ["UpdateRejectStatusDescription"];
function CancelledPOTransactionStatusComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 59);
} }
function CancelledPOTransactionStatusComponent_i_29_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_i_29_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); ctx_r19.sortBy = "reject_status_name"; return ctx_r19.sortOrder = "ASC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CancelledPOTransactionStatusComponent_i_30_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_i_30_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r21.sortOrder = "DESC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CancelledPOTransactionStatusComponent_i_31_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_i_31_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r23.sortOrder = "ASC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CancelledPOTransactionStatusComponent_tr_36_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_tr_36_Template_button_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const clientLocation_r25 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r27.onEditClick($event, clientLocation_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_tr_36_Template_button_click_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const clientLocation_r25 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r29.onDeleteClick($event, clientLocation_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const clientLocation_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](clientLocation_r25.status_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](clientLocation_r25.is_active);
} }
const _c5 = function (a0) { return { "active": a0 }; };
function CancelledPOTransactionStatusComponent_ng_container_45_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_ng_container_45_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33); const page_r31 = ctx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r32.onPageIndexClicked(page_r31.pageIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r31 = ctx.$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c5, page_r31.pageIndex == ctx_r30.currentPageIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](page_r31.pageIndex + 1);
} }
function CancelledPOTransactionStatusComponent_ng_container_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CancelledPOTransactionStatusComponent_ng_container_45_li_1_Template, 3, 4, "li", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.pages);
} }
function CancelledPOTransactionStatusComponent_ng_container_46_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CancelledPOTransactionStatusComponent_ng_container_46_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_ng_container_46_li_8_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r36.onPageIndexClicked(ctx_r36.currentPageIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r35.currentPageIndex + 1);
} }
function CancelledPOTransactionStatusComponent_ng_container_46_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_ng_container_46_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r38.onPageIndexClicked(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_ng_container_46_Template_li_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r40.onPageIndexClicked(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, CancelledPOTransactionStatusComponent_ng_container_46_li_7_Template, 2, 0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, CancelledPOTransactionStatusComponent_ng_container_46_li_8_Template, 3, 2, "li", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_ng_container_46_Template_li_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r39); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r41.onPageIndexClicked(ctx_r41.pages.length - 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_ng_container_46_Template_li_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r39); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r42.onPageIndexClicked(ctx_r42.pages.length - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c5, ctx_r6.currentPageIndex == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c5, ctx_r6.currentPageIndex == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c5, ctx_r6.currentPageIndex == ctx_r6.pages.length - 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.pages.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](14, _c5, ctx_r6.currentPageIndex == ctx_r6.pages.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.pages.length);
} }
function CancelledPOTransactionStatusComponent_span_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Status can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CancelledPOTransactionStatusComponent_option_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const SystemCapabilityStatus_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", SystemCapabilityStatus_r43.current_system_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", SystemCapabilityStatus_r43.current_system_status, " ");
} }
function CancelledPOTransactionStatusComponent_span_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Status can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CancelledPOTransactionStatusComponent_option_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const SystemCapabilityStatus_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", SystemCapabilityStatus_r44.current_system_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", SystemCapabilityStatus_r44.current_system_status, " ");
} }
function CancelledPOTransactionStatusComponent_span_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Status can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c6 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
class CancelledPOTransactionStatusComponent {
    constructor(cancelledPOTransactionStatusService, formBuilder, systemCapabilityStatusService, toastr) {
        this.cancelledPOTransactionStatusService = cancelledPOTransactionStatusService;
        this.formBuilder = formBuilder;
        this.systemCapabilityStatusService = systemCapabilityStatusService;
        this.toastr = toastr;
        //Objects for Holding Model Data
        this.clientLocations = [];
        this.showLoading = true;
        //Objects for Delete
        this.deleteRejectStatus = new src_app_models_cancelled_potransaction_status__WEBPACK_IMPORTED_MODULE_3__["CancelledPOTransactionStatus"]();
        this.editIndex = null;
        this.deleteIndex = null;
        //Properties for Searching
        this.searchBy = "reject_status_name";
        this.searchText = "";
        //Properties for Paging
        this.currentPageIndex = 0;
        this.pages = [];
        this.pageSize = 7;
        //Properties for Sorting
        this.sortBy = "reject_status_name";
        this.sortOrder = "ASC";
    }
    ngOnInit() {
        //Get data from database
        this.cancelledPOTransactionStatusService.getListOfStatusOfData().subscribe((response) => {
            this.clientLocations = response;
            this.showLoading = false;
            this.calculateNoOfPages();
        });
        //Create newForm
        this.newForm = this.formBuilder.group({
            id: this.formBuilder.control(null),
            status_name: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            is_active: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
        //Create editForm
        this.editForm = this.formBuilder.group({
            id: this.formBuilder.control(null),
            status_name: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            is_active: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
        // Here 
        this.samples = this.systemCapabilityStatusService.getSystemCapabilityStatus();
    }
    calculateNoOfPages() {
        //Get no. of Pages
        let filterPipe = new src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_1__["FilterPipe"]();
        var noOfPages = Math.ceil(filterPipe.transform(this.clientLocations, this.searchBy, this.searchText).length / this.pageSize);
        this.pages = [];
        //Generate pages
        for (let i = 0; i < noOfPages; i++) {
            this.pages.push({ pageIndex: i });
        }
        this.currentPageIndex = 0;
    }
    onPageIndexClicked(ind) {
        //Set currentPageIndex
        if (ind >= 0 && ind < this.pages.length) {
            this.currentPageIndex = ind;
        }
    }
    onNewClick(event) {
        //reset the newForm
        this.newForm.reset({ id: 0 });
        setTimeout(() => {
            //Focus the ClientLocation textbox in newForm
            this.defaultTextBox_New.nativeElement.focus();
        }, 100);
    }
    onSaveClick() {
        if (this.newForm.valid) {
            //Start
            var StatusofReject = this.RejectStatusDescription.nativeElement.value;
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Are you sure that you want to append new status?',
                text: StatusofReject,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {
                    //Invoke the REST-API call
                    this.cancelledPOTransactionStatusService.insertDataStatus(this.newForm.value).subscribe((response) => {
                        //Add Response to Grid
                        var p = new src_app_models_cancelled_potransaction_status__WEBPACK_IMPORTED_MODULE_3__["CancelledPOTransactionStatus"]();
                        p.id = response.id;
                        p.status_name = response.status_name;
                        p.is_active = response.is_active;
                        this.clientLocations.push(p);
                        //Reset the newForm
                        this.newForm.reset();
                        jquery__WEBPACK_IMPORTED_MODULE_2__("#newClientLocationFormCancel").trigger("click");
                        this.calculateNoOfPages();
                    }, (error) => {
                        console.log(error);
                    });
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Append!', 'Your data is updated on production', 'success');
                }
            });
            //End
        }
        else {
            this.FieldOutRequiredField();
        }
    }
    FieldOutRequiredField() {
        this.toastr.warning('Field out the required fields!', 'Notifications');
    }
    onEditClick(event, RejectedStatusParam) {
        //Reset the editForm
        this.editForm.reset();
        setTimeout(() => {
            //Set data into editForm
            this.editForm.patchValue(RejectedStatusParam);
            this.editIndex = this.clientLocations.indexOf(RejectedStatusParam);
            //Focus the ClientLocation textbox in editForm
            this.defaultTextBox_Edit.nativeElement.focus();
        }, 100);
    }
    onUpdateClick() {
        if (this.editForm.valid) {
            var Status = this.UpdateRejectStatusDescription.nativeElement.value;
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Are you sure that you want to modify the status?',
                text: Status,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {
                    //Invoke the REST-API call
                    this.cancelledPOTransactionStatusService.updateDataStatus(this.editForm.value).subscribe((response) => {
                        //Update the response in Grid
                        this.clientLocations[this.editIndex] = response;
                        //Reset the editForm
                        this.editForm.reset();
                        jquery__WEBPACK_IMPORTED_MODULE_2__("#editClientLocationFormCancel").trigger("click");
                    }, (error) => {
                        console.log(error);
                    });
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Updated!', 'your data on production has been modified', 'success');
                }
            });
        }
    }
    onDeleteClick(event, CancelledPOTransactionStatus) {
        //Set data into deleteClientLocation
        this.deleteRejectStatus.id = CancelledPOTransactionStatus.id;
        this.deleteRejectStatus.status_name = CancelledPOTransactionStatus.status_name;
        this.deleteIndex = this.clientLocations.indexOf(CancelledPOTransactionStatus);
    }
    onDeleteConfirmClick() {
        var StatusofRm = this.DeleteRejectStatusDescription.nativeElement.value;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Are you sure that you want to delete the status?',
            text: StatusofRm,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                //Invoke the REST-API call
                this.cancelledPOTransactionStatusService.deleteDataStatus(this.deleteRejectStatus.id).subscribe((response) => {
                    //Delete object in Grid
                    this.clientLocations.splice(this.deleteIndex, 1);
                    //Clear deleteCountry
                    this.deleteRejectStatus.id = null;
                    this.deleteRejectStatus.status_name = null;
                    this.deleteRejectStatus.is_active = null;
                    //Recall the calculateNoOfPages
                    this.calculateNoOfPages();
                }, (error) => {
                    console.log(error);
                });
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Deleted!', 'data has been removed on production.', 'success');
            }
        });
    }
    onSearchTextChange(event) {
        this.calculateNoOfPages();
    }
}
CancelledPOTransactionStatusComponent.ɵfac = function CancelledPOTransactionStatusComponent_Factory(t) { return new (t || CancelledPOTransactionStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_cancelled_potransaction_status_service__WEBPACK_IMPORTED_MODULE_6__["CancelledPOTransactionStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_system_capability_status_service__WEBPACK_IMPORTED_MODULE_7__["SystemCapabilityStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"])); };
CancelledPOTransactionStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CancelledPOTransactionStatusComponent, selectors: [["app-cancelled-potransaction-status"]], viewQuery: function CancelledPOTransactionStatusComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c4, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_New = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_Edit = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.RejectStatusDescription = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.DeleteRejectStatusDescription = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.UpdateRejectStatusDescription = _t.first);
    } }, decls: 138, vars: 49, consts: [["class", "fa fa-circle-o-notch fa-spin", "style", "font-size:24px", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "form-group", "row"], [1, "col-md-12", "col-lg-12", "col-xl-2"], ["mat-stroked-button", "", "color", "primary", "data-toggle", "modal", "data-target", "#newClientLocationModal", "data-backdrop", "false", "data-keyboard", "false", 3, "click"], ["for", "drpSearchBy", 1, "col-form-label", "col-md-6", "col-lg-2", "offset-xl-1", "col-xl-2", "text-right"], [1, "col-md-6", "col-lg-4", "col-xl-3"], ["id", "drpSearchBy", "name", "SearchBy", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "status_name"], ["for", "textSearchText", 1, "col-form-label", "col-md-6", "col-lg-2", "col-xl-1", "text-right"], [1, "input-group"], ["type", "text", "id", "txtSearchText", "name", "SearchText", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "col-xl-8", "col-lg-9", "mx-auto"], [1, "table", "table-striped", "table-bordered", "nowrap", "table-responsive-xl", 2, "width", "100%"], [1, "text-light", "header-bg-color-um", "system-name"], ["class", "fa fa-sort hand-icon", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-up hand-icon text-primary", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-down hand-icon text-primary", 3, "click", 4, "ngIf"], [1, "text-center", 2, "width", "200px"], [4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mt-1"], [1, "page-item", 3, "click"], ["mat-stroked-button", "", "color", "primary", "href", "#", "onclick", "return false", 1, "mr-1"], [4, "ngIf"], ["mat-stroked-button", "", "color", "primary", "href", "#", "onclick", "return false", 1, "ml-1"], ["novalidate", "novalidate", 3, "formGroup"], ["role", "dialog", "id", "newClientLocationModal", 1, "modal"], [1, "modal-dialog", "modal-md"], [1, "modal-content"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], ["for", "txtNewClientLocationName", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "id", "txtNewstatus_name", "placeholder", "Status", "name", "status_name", "formControlName", "status_name", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_New", "", "RejectStatusDescription", ""], ["class", "text-danger", 4, "ngIf"], ["for", "drpEditClientLocation", 1, "col-sm-4", "col-form-label"], ["id", "txtNewis_active", "name", "is_active", "formControlName", "is_active", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_New", ""], ["value", "null"], [3, "value", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["role", "dialog", "id", "editClientLocationModal", 1, "modal"], ["for", "txtEditClientLocationName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditstatus_name", "placeholder", "Status", "name", "status_name", "formControlName", "status_name", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_Edit", ""], ["defaultTextBox_New", "", "UpdateRejectStatusDescription", ""], ["role", "dialog", "id", "deleteModal", 1, "modal"], ["floatLabel", "auto", "appearance", "standard", "color", "primary", 1, "w-100"], ["type", "text", "matInput", "", "id", "txtStatusName", "placeholder", "Status", "name", "status_name", "disabled", "disabled", 3, "ngModel", "ngModelChange"], ["DeleteRejectStatusDescription", ""], ["matPrefix", ""], [1, "material-icons-outlined"], ["mat-stroked-button", "", "color", "warn", "data-dismiss", "modal", 3, "click"], [1, "fa", "fa-circle-o-notch", "fa-spin", 2, "font-size", "24px"], [1, "fa", "fa-sort", "hand-icon", 3, "click"], [1, "fa", "fa-sort-up", "hand-icon", "text-primary", 3, "click"], [1, "fa", "fa-sort-down", "hand-icon", "text-primary", 3, "click"], [1, "text-center"], ["mat-stroked-button", "", "color", "primary", "data-toggle", "modal", "data-target", "#editClientLocationModal", "data-backdrop", "false", "data-keyboard", "false", 3, "click"], ["mat-stroked-button", "", "color", "warn", "data-toggle", "modal", "data-target", "#deleteModal", "data-backdrop", "false", "data-keyboard", "false", 3, "click"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass", "click"], ["href", "#", "onclick", "return false", 1, "page-link"], ["class", "page-item", 3, "ngClass", "click", 4, "ngIf"], [1, "text-danger"], [3, "value"]], template: function CancelledPOTransactionStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CancelledPOTransactionStatusComponent_i_1_Template, 1, 0, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_Template_button_click_6_listener($event) { return ctx.onNewClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Search by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CancelledPOTransactionStatusComponent_Template_select_ngModelChange_13_listener($event) { return ctx.searchBy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Status Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "ng ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Search:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CancelledPOTransactionStatusComponent_Template_input_ngModelChange_21_listener($event) { return ctx.searchText = $event; })("keyup", function CancelledPOTransactionStatusComponent_Template_input_keyup_21_listener($event) { return ctx.onSearchTextChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, CancelledPOTransactionStatusComponent_i_29_Template, 1, 0, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, CancelledPOTransactionStatusComponent_i_30_Template, 1, 0, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, CancelledPOTransactionStatusComponent_i_31_Template, 1, 0, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, " Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, CancelledPOTransactionStatusComponent_tr_36_Template, 11, 2, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](37, "paging");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](38, "sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](39, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_Template_li_click_42_listener() { return ctx.onPageIndexClicked(ctx.currentPageIndex - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, CancelledPOTransactionStatusComponent_ng_container_45_Template, 2, 1, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, CancelledPOTransactionStatusComponent_ng_container_46_Template, 17, 16, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_Template_li_click_47_listener() { return ctx.onPageIndexClicked(ctx.currentPageIndex + 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "form", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Append RM Rejected Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Rejected Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](65, "input", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, CancelledPOTransactionStatusComponent_span_68_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "select", 41, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "Please Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](77, CancelledPOTransactionStatusComponent_option_77_Template, 2, 2, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](78, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_Template_button_click_80_listener() { return ctx.onSaveClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "form", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "Edit Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](97, "input", 49, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](99, CancelledPOTransactionStatusComponent_span_99_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102, "Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "select", 41, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, "Please Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](109, CancelledPOTransactionStatusComponent_option_109_Template, 2, 2, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](110, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](111, CancelledPOTransactionStatusComponent_span_111_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_Template_button_click_113_listener() { return ctx.onUpdateClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](121, "Delete Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](126, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](127, "mat-form-field", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "input", 54, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CancelledPOTransactionStatusComponent_Template_input_ngModelChange_128_listener($event) { return ctx.deleteRejectStatus.status_name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](131, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](132, "mat-icon", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](133, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](134, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](135, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CancelledPOTransactionStatusComponent_Template_button_click_136_listener() { return ctx.onDeleteConfirmClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](137, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortBy != "reject_status_name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortBy == "reject_status_name" && ctx.sortOrder == "ASC");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortBy == "reject_status_name" && ctx.sortOrder == "DESC");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](37, 21, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](38, 25, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](39, 29, ctx.clientLocations, ctx.searchBy, ctx.searchText), ctx.sortBy, ctx.sortOrder), ctx.currentPageIndex, ctx.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pages.length <= 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pages.length > 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.newForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](37, _c6, ctx.newForm.get("status_name").invalid && (ctx.newForm.get("status_name").dirty || ctx.newForm.get("status_name").touched || ctx.newForm.valid), ctx.newForm.get("status_name").valid && (ctx.newForm.get("status_name").dirty || ctx.newForm.get("status_name").touched || ctx.newForm.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.newForm.get("status_name").invalid && (ctx.newForm.get("status_name").dirty || ctx.newForm.get("status_name").touched || ctx.newForm.valid) && (ctx.newForm.get("status_name").errors == null ? null : ctx.newForm.get("status_name").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](40, _c6, ctx.newForm.get("is_active").invalid && (ctx.newForm.get("is_active").dirty || ctx.newForm.get("is_active").touched || ctx.newForm.valid), ctx.newForm.get("is_active").valid && (ctx.newForm.get("is_active").dirty || ctx.newForm.get("is_active").touched || ctx.newForm.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](78, 33, ctx.samples));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](43, _c6, ctx.editForm.get("status_name").invalid && (ctx.editForm.get("status_name").dirty || ctx.editForm.get("status_name").touched || ctx.editForm.valid), ctx.editForm.get("status_name").valid && (ctx.editForm.get("status_name").dirty || ctx.editForm.get("status_name").touched || ctx.editForm.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editForm.get("status_name").invalid && (ctx.editForm.get("status_name").dirty || ctx.editForm.get("status_name").touched || ctx.editForm.valid) && (ctx.editForm.get("status_name").errors == null ? null : ctx.editForm.get("status_name").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](46, _c6, ctx.newForm.get("is_active").invalid && (ctx.newForm.get("is_active").dirty || ctx.newForm.get("is_active").touched || ctx.newForm.valid), ctx.newForm.get("is_active").valid && (ctx.newForm.get("is_active").dirty || ctx.newForm.get("is_active").touched || ctx.newForm.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](110, 35, ctx.samples));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editForm.get("is_active").invalid && (ctx.editForm.get("is_active").dirty || ctx.editForm.get("is_active").touched || ctx.editForm.valid) && (ctx.editForm.get("is_active").errors == null ? null : ctx.editForm.get("is_active").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.deleteRejectStatus.status_name);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatAnchor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__["DefaultClassDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatPrefix"]], pipes: [_pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_15__["PagingPipe"], _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_16__["SortPipe"], src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_1__["FilterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5jZWxsZWQtcG90cmFuc2FjdGlvbi1zdGF0dXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ROVb":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/components/rejected-status/rejected-status.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RejectedStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectedStatusComponent", function() { return RejectedStatusComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models_rejected_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/rejected-status */ "kHQe");
/* harmony import */ var src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipes/filter.pipe */ "BhhM");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_rejected_status_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/rejected-status.service */ "EVuK");
/* harmony import */ var src_app_services_system_capability_status_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/system-capability-status.service */ "lJP4");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../pipes/paging.pipe */ "tuZ1");
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../pipes/sort.pipe */ "eLiO");

















const _c0 = ["defaultTextBox_New"];
const _c1 = ["defaultTextBox_Edit"];
const _c2 = ["RejectStatusDescription"];
const _c3 = ["RejectStatusUpdate"];
function RejectedStatusComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 56);
} }
function RejectedStatusComponent_i_29_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RejectedStatusComponent_i_29_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); ctx_r18.sortBy = "reject_status_name"; return ctx_r18.sortOrder = "ASC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RejectedStatusComponent_i_30_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RejectedStatusComponent_i_30_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r20.sortOrder = "DESC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RejectedStatusComponent_i_31_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RejectedStatusComponent_i_31_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r22.sortOrder = "ASC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RejectedStatusComponent_tr_36_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RejectedStatusComponent_tr_36_Template_button_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27); const clientLocation_r24 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r26.onEditClick($event, clientLocation_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const clientLocation_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](clientLocation_r24.reject_status_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](clientLocation_r24.is_active);
} }
const _c4 = function (a0) { return { "active": a0 }; };
function RejectedStatusComponent_ng_container_45_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RejectedStatusComponent_ng_container_45_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31); const page_r29 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r30.onPageIndexClicked(page_r29.pageIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r29 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c4, page_r29.pageIndex == ctx_r28.currentPageIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](page_r29.pageIndex + 1);
} }
function RejectedStatusComponent_ng_container_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RejectedStatusComponent_ng_container_45_li_1_Template, 3, 4, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.pages);
} }
function RejectedStatusComponent_ng_container_46_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RejectedStatusComponent_ng_container_46_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RejectedStatusComponent_ng_container_46_li_8_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r34.onPageIndexClicked(ctx_r34.currentPageIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r33.currentPageIndex + 1);
} }
function RejectedStatusComponent_ng_container_46_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RejectedStatusComponent_ng_container_46_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r36.onPageIndexClicked(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RejectedStatusComponent_ng_container_46_Template_li_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r38.onPageIndexClicked(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, RejectedStatusComponent_ng_container_46_li_7_Template, 2, 0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, RejectedStatusComponent_ng_container_46_li_8_Template, 3, 2, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RejectedStatusComponent_ng_container_46_Template_li_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r39.onPageIndexClicked(ctx_r39.pages.length - 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RejectedStatusComponent_ng_container_46_Template_li_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r40.onPageIndexClicked(ctx_r40.pages.length - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c4, ctx_r6.currentPageIndex == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c4, ctx_r6.currentPageIndex == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c4, ctx_r6.currentPageIndex == ctx_r6.pages.length - 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.pages.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](14, _c4, ctx_r6.currentPageIndex == ctx_r6.pages.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.pages.length);
} }
function RejectedStatusComponent_span_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Status of Reject can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RejectedStatusComponent_option_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const SystemCapabilityStatus_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", SystemCapabilityStatus_r41.current_system_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", SystemCapabilityStatus_r41.current_system_status, " ");
} }
function RejectedStatusComponent_span_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Status of Reject can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RejectedStatusComponent_option_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const SystemCapabilityStatus_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", SystemCapabilityStatus_r42.current_system_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", SystemCapabilityStatus_r42.current_system_status, " ");
} }
function RejectedStatusComponent_span_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Status can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c5 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
class RejectedStatusComponent {
    constructor(rejectedStatusService, formBuilder, systemCapabilityStatusService, toastr) {
        this.rejectedStatusService = rejectedStatusService;
        this.formBuilder = formBuilder;
        this.systemCapabilityStatusService = systemCapabilityStatusService;
        this.toastr = toastr;
        //Objects for Holding Model Data
        this.clientLocations = [];
        this.showLoading = true;
        //Objects for Delete
        this.deleteRejectStatus = new src_app_models_rejected_status__WEBPACK_IMPORTED_MODULE_1__["RejectedStatus"]();
        this.editIndex = null;
        this.deleteIndex = null;
        //Properties for Searching
        this.searchBy = "reject_status_name";
        this.searchText = "";
        //Properties for Paging
        this.currentPageIndex = 0;
        this.pages = [];
        this.pageSize = 7;
        //Properties for Sorting
        this.sortBy = "reject_status_name";
        this.sortOrder = "ASC";
    }
    ngOnInit() {
        //Get data from database
        this.rejectedStatusService.getListOfStatusOfReject().subscribe((response) => {
            this.clientLocations = response;
            this.showLoading = false;
            this.calculateNoOfPages();
        });
        //Create newForm
        this.newForm = this.formBuilder.group({
            id: this.formBuilder.control(null),
            reject_status_name: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            is_active: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
        //Create editForm
        this.editForm = this.formBuilder.group({
            id: this.formBuilder.control(null),
            reject_status_name: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            is_active: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
        // Here 
        this.samples = this.systemCapabilityStatusService.getSystemCapabilityStatus();
    }
    calculateNoOfPages() {
        //Get no. of Pages
        let filterPipe = new src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]();
        var noOfPages = Math.ceil(filterPipe.transform(this.clientLocations, this.searchBy, this.searchText).length / this.pageSize);
        this.pages = [];
        //Generate pages
        for (let i = 0; i < noOfPages; i++) {
            this.pages.push({ pageIndex: i });
        }
        this.currentPageIndex = 0;
    }
    onPageIndexClicked(ind) {
        //Set currentPageIndex
        if (ind >= 0 && ind < this.pages.length) {
            this.currentPageIndex = ind;
        }
    }
    onNewClick(event) {
        //reset the newForm
        this.newForm.reset({ id: 0 });
        setTimeout(() => {
            //Focus the ClientLocation textbox in newForm
            this.defaultTextBox_New.nativeElement.focus();
        }, 100);
    }
    onSaveClick() {
        if (this.newForm.valid) {
            var Status = this.RejectStatusDescription.nativeElement.value;
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Are you sure that you want to append new status?',
                text: Status,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Append!', 'Your data is updated on production', 'success');
                }
            });
            //Invoke the REST-API call
            this.rejectedStatusService.insertRejectStatus(this.newForm.value).subscribe((response) => {
                //Add Response to Grid
                var p = new src_app_models_rejected_status__WEBPACK_IMPORTED_MODULE_1__["RejectedStatus"]();
                p.id = response.id;
                p.reject_status_name = response.reject_status_name;
                p.is_active = response.is_active;
                this.clientLocations.push(p);
                //Reset the newForm
                this.newForm.reset();
                jquery__WEBPACK_IMPORTED_MODULE_3__("#newClientLocationFormCancel").trigger("click");
                this.calculateNoOfPages();
                this.calculateNoOfPages();
            }, (error) => {
                console.log(error);
            });
        }
        else {
            this.FieldOutRequiredField();
        }
    }
    FieldOutRequiredField() {
        this.toastr.warning('Field out the required fields!', 'Notifications');
    }
    onEditClick(event, RejectedStatusParam) {
        //Reset the editForm
        this.editForm.reset();
        setTimeout(() => {
            //Set data into editForm
            this.editForm.patchValue(RejectedStatusParam);
            this.editIndex = this.clientLocations.indexOf(RejectedStatusParam);
            //Focus the ClientLocation textbox in editForm
            this.defaultTextBox_Edit.nativeElement.focus();
        }, 100);
    }
    onUpdateClick() {
        if (this.editForm.valid) {
            var Status = this.RejectStatusUpdate.nativeElement.value;
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Are you sure that you want to modify the status?',
                text: Status,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {
                    //Invoke the REST-API call
                    this.rejectedStatusService.updateRejectedStatus(this.editForm.value).subscribe((response) => {
                        //Update the response in Grid
                        this.clientLocations[this.editIndex] = response;
                        //Reset the editForm
                        this.editForm.reset();
                        jquery__WEBPACK_IMPORTED_MODULE_3__("#editClientLocationFormCancel").trigger("click");
                    }, (error) => {
                        console.log(error);
                    });
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Updated!', 'your data on production has been modified', 'success');
                }
            });
        }
    }
    onDeleteClick(event, RejectedStatus) {
        //Set data into deleteClientLocation
        this.deleteRejectStatus.id = RejectedStatus.id;
        this.deleteRejectStatus.reject_status_name = RejectedStatus.reject_status_name;
        this.deleteIndex = this.clientLocations.indexOf(RejectedStatus);
    }
    onDeleteConfirmClick() {
        //Invoke the REST-API call
        this.rejectedStatusService.deleteRejectedStatus(this.deleteRejectStatus.id).subscribe((response) => {
            //Delete object in Grid
            this.clientLocations.splice(this.deleteIndex, 1);
            //Clear deleteCountry
            this.deleteRejectStatus.id = null;
            this.deleteRejectStatus.reject_status_name = null;
            this.deleteRejectStatus.is_active = null;
            //Recall the calculateNoOfPages
            this.calculateNoOfPages();
        }, (error) => {
            console.log(error);
        });
    }
    onSearchTextChange(event) {
        this.calculateNoOfPages();
    }
}
RejectedStatusComponent.ɵfac = function RejectedStatusComponent_Factory(t) { return new (t || RejectedStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_rejected_status_service__WEBPACK_IMPORTED_MODULE_6__["RejectedStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_system_capability_status_service__WEBPACK_IMPORTED_MODULE_7__["SystemCapabilityStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"])); };
RejectedStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: RejectedStatusComponent, selectors: [["app-rejected-status"]], viewQuery: function RejectedStatusComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c3, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_New = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_Edit = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.RejectStatusDescription = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.RejectStatusUpdate = _t.first);
    } }, decls: 134, vars: 49, consts: [["class", "fa fa-circle-o-notch fa-spin", "style", "font-size:24px", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "form-group", "row"], [1, "col-md-12", "col-lg-12", "col-xl-2"], ["mat-stroked-button", "", "color", "primary", "data-toggle", "modal", "data-target", "#newClientLocationModal", "data-backdrop", "false", "data-keyboard", "false", 3, "click"], ["for", "drpSearchBy", 1, "col-form-label", "col-md-6", "col-lg-2", "offset-xl-1", "col-xl-2", "text-right"], [1, "col-md-6", "col-lg-4", "col-xl-3"], ["id", "drpSearchBy", "name", "SearchBy", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "reject_status_name"], ["for", "textSearchText", 1, "col-form-label", "col-md-6", "col-lg-2", "col-xl-1", "text-right"], [1, "input-group"], ["type", "text", "id", "txtSearchText", "name", "SearchText", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "col-xl-8", "col-lg-9", "mx-auto"], [1, "table", "table-striped", "table-bordered", "nowrap", "table-responsive-xl", 2, "width", "100%"], [1, "text-light", "header-bg-color-um", "system-name"], ["class", "fa fa-sort hand-icon", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-up hand-icon text-primary", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-down hand-icon text-primary", 3, "click", 4, "ngIf"], [1, "text-center", 2, "width", "200px"], [4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mt-1"], [1, "page-item", 3, "click"], ["mat-stroked-button", "", "color", "primary", "href", "#", "onclick", "return false", 1, "mr-1"], [4, "ngIf"], ["mat-stroked-button", "", "color", "primary", "href", "#", "onclick", "return false", 1, "ml-1"], ["novalidate", "novalidate", 3, "formGroup"], ["role", "dialog", "id", "newClientLocationModal", 1, "modal"], [1, "modal-dialog", "modal-md"], [1, "modal-content"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], ["for", "txtNewClientLocationName", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "id", "txtNewreject_status_name", "placeholder", "Reject Status", "name", "reject_status_name", "formControlName", "reject_status_name", "autocomplete", "off", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_New", "", "RejectStatusDescription", ""], ["class", "text-danger", 4, "ngIf"], ["for", "drpEditClientLocation", 1, "col-sm-4", "col-form-label"], ["id", "txtNewis_active", "name", "is_active", "formControlName", "is_active", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_New", ""], ["value", "null"], [3, "value", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["role", "dialog", "id", "editClientLocationModal", 1, "modal"], ["for", "txtEditClientLocationName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditreject_status_name", "placeholder", "Reject Status", "name", "reject_status_name", "autocomplete", "off", "formControlName", "reject_status_name", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_Edit", "", "RejectStatusUpdate", ""], ["mat-stroked-button", "", "color", "warn", 3, "click"], ["role", "dialog", "id", "deleteModal", 1, "modal"], ["for", "txtDeleteClientLocationName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteClientLocationName", "placeholder", "Client Location Name", "name", "ClientLocationName", "disabled", "disabled", 1, "form-control-plain-text", 2, "width", "300px", 3, "ngModel", "ngModelChange"], ["mat-stroked-button", "", "color", "primary", "data-dismiss", "modal", 3, "click"], [1, "fa", "fa-circle-o-notch", "fa-spin", 2, "font-size", "24px"], [1, "fa", "fa-sort", "hand-icon", 3, "click"], [1, "fa", "fa-sort-up", "hand-icon", "text-primary", 3, "click"], [1, "fa", "fa-sort-down", "hand-icon", "text-primary", 3, "click"], [1, "text-center"], ["mat-stroked-button", "", "color", "primary", "data-toggle", "modal", "data-target", "#editClientLocationModal", "data-backdrop", "false", "data-keyboard", "false", 3, "click"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass", "click"], ["href", "#", "onclick", "return false", 1, "page-link"], ["class", "page-item", 3, "ngClass", "click", 4, "ngIf"], [1, "text-danger"], [3, "value"]], template: function RejectedStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RejectedStatusComponent_i_1_Template, 1, 0, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RejectedStatusComponent_Template_button_click_6_listener($event) { return ctx.onNewClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Search by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RejectedStatusComponent_Template_select_ngModelChange_13_listener($event) { return ctx.searchBy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Status Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "ng ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Search:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RejectedStatusComponent_Template_input_ngModelChange_21_listener($event) { return ctx.searchText = $event; })("keyup", function RejectedStatusComponent_Template_input_keyup_21_listener($event) { return ctx.onSearchTextChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, RejectedStatusComponent_i_29_Template, 1, 0, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, RejectedStatusComponent_i_30_Template, 1, 0, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, RejectedStatusComponent_i_31_Template, 1, 0, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, " Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, RejectedStatusComponent_tr_36_Template, 9, 2, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](37, "paging");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](38, "sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](39, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RejectedStatusComponent_Template_li_click_42_listener() { return ctx.onPageIndexClicked(ctx.currentPageIndex - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, RejectedStatusComponent_ng_container_45_Template, 2, 1, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, RejectedStatusComponent_ng_container_46_Template, 17, 16, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RejectedStatusComponent_Template_li_click_47_listener() { return ctx.onPageIndexClicked(ctx.currentPageIndex + 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "form", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Append Rejected Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Rejected Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](65, "input", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, RejectedStatusComponent_span_68_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "select", 41, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "Please Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](77, RejectedStatusComponent_option_77_Template, 2, 2, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](78, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RejectedStatusComponent_Template_button_click_80_listener() { return ctx.onSaveClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "form", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "Edit Reject Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](97, "input", 49, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](100, RejectedStatusComponent_span_100_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103, "Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "select", 41, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, "Please Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](109, RejectedStatusComponent_option_109_Template, 2, 2, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](110, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](111, RejectedStatusComponent_span_111_Template, 2, 0, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RejectedStatusComponent_Template_button_click_113_listener() { return ctx.onUpdateClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](121, "Delete Rejection Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](126, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](127, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](128, "Client Location Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RejectedStatusComponent_Template_input_ngModelChange_130_listener($event) { return ctx.deleteRejectStatus.reject_status_name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](132, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RejectedStatusComponent_Template_button_click_132_listener() { return ctx.onDeleteConfirmClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](133, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortBy != "reject_status_name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortBy == "reject_status_name" && ctx.sortOrder == "ASC");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortBy == "reject_status_name" && ctx.sortOrder == "DESC");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](37, 21, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](38, 25, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](39, 29, ctx.clientLocations, ctx.searchBy, ctx.searchText), ctx.sortBy, ctx.sortOrder), ctx.currentPageIndex, ctx.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pages.length <= 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pages.length > 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.newForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](37, _c5, ctx.newForm.get("reject_status_name").invalid && (ctx.newForm.get("reject_status_name").dirty || ctx.newForm.get("reject_status_name").touched || ctx.newForm.valid), ctx.newForm.get("reject_status_name").valid && (ctx.newForm.get("reject_status_name").dirty || ctx.newForm.get("reject_status_name").touched || ctx.newForm.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.newForm.get("reject_status_name").invalid && (ctx.newForm.get("reject_status_name").dirty || ctx.newForm.get("reject_status_name").touched || ctx.newForm.valid) && (ctx.newForm.get("reject_status_name").errors == null ? null : ctx.newForm.get("reject_status_name").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](40, _c5, ctx.newForm.get("is_active").invalid && (ctx.newForm.get("is_active").dirty || ctx.newForm.get("is_active").touched || ctx.newForm.valid), ctx.newForm.get("is_active").valid && (ctx.newForm.get("is_active").dirty || ctx.newForm.get("is_active").touched || ctx.newForm.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](78, 33, ctx.samples));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](43, _c5, ctx.editForm.get("reject_status_name").invalid && (ctx.editForm.get("reject_status_name").dirty || ctx.editForm.get("reject_status_name").touched || ctx.editForm.valid), ctx.editForm.get("reject_status_name").valid && (ctx.editForm.get("reject_status_name").dirty || ctx.editForm.get("reject_status_name").touched || ctx.editForm.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editForm.get("reject_status_name").invalid && (ctx.editForm.get("reject_status_name").dirty || ctx.editForm.get("reject_status_name").touched || ctx.editForm.valid) && (ctx.editForm.get("reject_status_name").errors == null ? null : ctx.editForm.get("reject_status_name").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](46, _c5, ctx.newForm.get("is_active").invalid && (ctx.newForm.get("is_active").dirty || ctx.newForm.get("is_active").touched || ctx.newForm.valid), ctx.newForm.get("is_active").valid && (ctx.newForm.get("is_active").dirty || ctx.newForm.get("is_active").touched || ctx.newForm.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](110, 35, ctx.samples));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editForm.get("is_active").invalid && (ctx.editForm.get("is_active").dirty || ctx.editForm.get("is_active").touched || ctx.editForm.valid) && (ctx.editForm.get("is_active").errors == null ? null : ctx.editForm.get("is_active").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.deleteRejectStatus.reject_status_name);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatAnchor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__["DefaultClassDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"]], pipes: [_pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_13__["PagingPipe"], _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_14__["SortPipe"], src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWplY3RlZC1zdGF0dXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Tt1n":
/*!***************************************************************!*\
  !*** ./src/app/admin/components/project/project.component.ts ***!
  \***************************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/projects.service */ "CoJz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








const _c0 = ["selectionBox"];
const _c1 = ["tbl"];
const _c2 = function (a3) { return ["/admin", "projects", "view", a3]; };
const _c3 = ["*"];
class ProjectComponent {
    constructor(projectsService) {
        this.projectsService = projectsService;
        this.editClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hideDetails = false;
    }
    ngOnChanges(simpleChanges) {
        console.info("--------------ngOnChanges called");
        for (let propName in simpleChanges) {
            let chng = simpleChanges[propName];
            let cur = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
            console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
        if (simpleChanges["project"]) {
            //this.project.teamSize += 1;
        }
    }
    ngOnInit() {
        console.info("--------------ngOnInit called");
        this.MySubscription = this.projectsService.MySubject.subscribe((hide) => {
            this.hideDetails = hide;
        });
    }
    ngDoCheck() {
        console.info("--------------ngDoCheck called");
    }
    ngAfterContentInit() {
        console.info("--------------ngAfterContentInit called");
        console.log(this.selectionBoxes.toArray());
    }
    ngAfterContentChecked() {
        console.info("--------------ngAfterContentChecked called");
    }
    ngAfterViewInit() {
        console.info("--------------ngAfterViewInit called");
        console.log(this.tbl);
    }
    ngAfterViewChecked() {
        console.info("--------------ngAfterViewChecked called");
    }
    onEditClick(event, i) {
        this.editClick.emit({ event, i });
    }
    onDeleteClick(event, i) {
        this.deleteClick.emit({ event, i });
    }
    ngOnDestroy() {
        console.info("--------------ngOnDestroy called");
        this.MySubscription.unsubscribe();
    }
    isAllCheckedChange(b) {
        let selectionBox = this.selectionBoxes.toArray();
        if (b) {
            for (let i = 0; i < selectionBox.length; i++) {
                selectionBox[i].check();
            }
        }
        else {
            for (let i = 0; i < selectionBox.length; i++) {
                selectionBox[i].unCheck();
            }
        }
    }
}
ProjectComponent.ɵfac = function ProjectComponent_Factory(t) { return new (t || ProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_projects_service__WEBPACK_IMPORTED_MODULE_1__["ProjectsService"])); };
ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectComponent, selectors: [["app-project"]], contentQueries: function ProjectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c0, 0);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.selectionBoxes = _t);
    } }, viewQuery: function ProjectComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tbl = _t.first);
    } }, inputs: { project: ["currentProject", "project"], i: ["recordIndex", "i"] }, outputs: { editClick: "editClick", deleteClick: "deleteClick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c3, decls: 91, vars: 16, consts: [[1, "card", "card-primary"], [1, "card-header", "bg-cards"], [1, "row"], [1, "col-11"], [1, "flex"], [1, "box-1"], ["floatLabel", "auto", "appearance", "standard", "color", "primary"], ["type", "text", "matInput", "", "disabled", "disabled", 3, "value"], ["matPrefix", ""], [1, "material-icons-outlined"], [1, "box-2"], [1, "col-1"], [1, "card-body", "bg-cards", "padding-my-table"], [1, "table", "table-borderless", "table-sm", 3, "hidden"], ["tbl", ""], ["colspan", "2"], [1, "card-footer", "bg-cards"], ["mat-stroked-button", "", "color", "primary", "data-toggle", "modal", "data-target", "#editModal", 3, "click"], ["mat-stroked-button", "", "color", "warn", "data-toggle", "modal", "data-target", "#deleteModal", 3, "click"], ["mat-stroked-button", "", "color", "accent", 3, "routerLink"]], template: function ProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Transaction # ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Item Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Item Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "qr_code_scanner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "table", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "PO No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "PO Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "PR No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "PR Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Supplier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Qty. Ordered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "UOM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Client Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Date Added");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_Template_button_click_72_listener($event) { return ctx.onEditClick($event, ctx.i); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_Template_button_click_77_listener($event) { return ctx.onDeleteClick($event, ctx.i); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Cancel PO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "remove_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_Template_button_click_82_listener($event) { return ctx.onDeleteClick($event, ctx.i); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.projectID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.project.projectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.project.item_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.hideDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.po_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.po_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.pr_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.pr_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.supplier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.project.qty_order, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.qty_uom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.clientLocation == null ? null : ctx.project.clientLocation.clientLocationName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.dateOfStart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c2, ctx.project.projectID));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatPrefix"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: [".bg-cards[_ngcontent-%COMP%] {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvamVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHVCQUFBO0FBQUoiLCJmaWxlIjoicHJvamVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1jYXJkc1xue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4iXX0= */"] });


/***/ }),

/***/ "UZCw":
/*!***************************************************************!*\
  !*** ./src/app/admin/components/masters/masters.component.ts ***!
  \***************************************************************/
/*! exports provided: MastersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MastersComponent", function() { return MastersComponent; });
/* harmony import */ var src_app_allowable_percentage_allowable_percentage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/allowable-percentage/allowable-percentage.component */ "kMAa");
/* harmony import */ var src_app_directives_component_loader_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/directives/component-loader.directive */ "OsQp");
/* harmony import */ var src_app_returned_potransaction_status_returned_potransaction_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/returned-potransaction-status/returned-potransaction-status.component */ "P5ZJ");
/* harmony import */ var _asp_net_roles_asp_net_roles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../asp-net-roles/asp-net-roles.component */ "yFWS");
/* harmony import */ var _cancelled_potransaction_status_cancelled_potransaction_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cancelled-potransaction-status/cancelled-potransaction-status.component */ "OdQg");
/* harmony import */ var _client_locations_client_locations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../client-locations/client-locations.component */ "3RKl");
/* harmony import */ var _countries_countries_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../countries/countries.component */ "9kti");
/* harmony import */ var _rejected_status_rejected_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rejected-status/rejected-status.component */ "ROVb");
/* harmony import */ var _task_priorities_task_priorities_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../task-priorities/task-priorities.component */ "8dlv");
/* harmony import */ var _task_status_task_status_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../task-status/task-status.component */ "XoK7");
/* harmony import */ var _tbl_nearly_expiry_mgmt_tbl_nearly_expiry_mgmt_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tbl-nearly-expiry-mgmt/tbl-nearly-expiry-mgmt.component */ "hxFl");
/* harmony import */ var _user_account_user_account_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../user-account/user-account.component */ "8oVE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");


















const _c0 = function (a0) { return { "active": a0 }; };
function MastersComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MastersComponent_a_6_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5); const masterMenuItem_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r4.menuItemClick(masterMenuItem_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const masterMenuItem_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](2, _c0, ctx_r0.activeItem == masterMenuItem_r3.itemName));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", masterMenuItem_r3.displayName, " ");
} }
function MastersComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MastersComponent_li_9_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); const tab_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r7.activeItem = tab_r6.itemName; });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MastersComponent_li_9_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); const tab_r6 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r9.onCloseClick(tab_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("href", "#" + tab_r6.itemName, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](3, _c0, ctx_r1.activeItem == tab_r6.itemName));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", tab_r6.displayName, " ");
} }
function MastersComponent_div_12_ng_template_2_Template(rf, ctx) { }
function MastersComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, MastersComponent_div_12_ng_template_2_Template, 0, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", tab_r10.itemName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](2, _c0, ctx_r2.activeItem == tab_r10.itemName));
} }
class MastersComponent {
    constructor(componentFactoryResolver, router) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.router = router;
        this.RouteNames = "";
        this.masterMenuItems = [];
        this.tabs = [];
    }
    ngOnInit() {
        console.log(this.router.url); //  /routename
        this.RouteNames = this.router.url;
        if (this.RouteNames == "/admin/masters") {
            this.masterMenuItems = [
                { itemName: "Countries", displayName: "Location", component: _countries_countries_component__WEBPACK_IMPORTED_MODULE_6__["CountriesComponent"] },
                { itemName: "ClientLocations", displayName: "Department", component: _client_locations_client_locations_component__WEBPACK_IMPORTED_MODULE_5__["ClientLocationsComponent"] },
                { itemName: "TaskPriorities", displayName: "Task Priorities", component: _task_priorities_task_priorities_component__WEBPACK_IMPORTED_MODULE_8__["TaskPrioritiesComponent"] },
                { itemName: "TaskStatus", displayName: "Task Status", component: _task_status_task_status_component__WEBPACK_IMPORTED_MODULE_9__["TaskStatusComponent"] },
                { itemName: "RejectedStatus", displayName: "RM Rejected Status", component: _rejected_status_rejected_status_component__WEBPACK_IMPORTED_MODULE_7__["RejectedStatusComponent"] },
                { itemName: "CancelledPOTransactionStatus", displayName: "RM Reject Status of QC", component: _cancelled_potransaction_status_cancelled_potransaction_status_component__WEBPACK_IMPORTED_MODULE_4__["CancelledPOTransactionStatusComponent"] },
                { itemName: "ReturnedPOTransactionStatus", displayName: "RM Cancelled PO Status", component: src_app_returned_potransaction_status_returned_potransaction_status_component__WEBPACK_IMPORTED_MODULE_2__["ReturnedPOTransactionStatusComponent"] },
                { itemName: "AccountManagement", displayName: "Account Management", component: _user_account_user_account_component__WEBPACK_IMPORTED_MODULE_11__["UserAccountComponent"] },
                { itemName: "AllowablePercentage", displayName: "Allowable Percentage", component: src_app_allowable_percentage_allowable_percentage_component__WEBPACK_IMPORTED_MODULE_0__["AllowablePercentageComponent"] },
                { itemName: "ExpirationDaysManagement", displayName: "Expiration Days", component: _tbl_nearly_expiry_mgmt_tbl_nearly_expiry_mgmt_component__WEBPACK_IMPORTED_MODULE_10__["TblNearlyExpiryMgmtComponent"] },
                { itemName: "User Roles", displayName: "User Roles", component: _asp_net_roles_asp_net_roles_component__WEBPACK_IMPORTED_MODULE_3__["AspNetRolesComponent"] },
            ];
        }
        if (this.RouteNames == "/admin/masters/user") {
            this.masterMenuItems = [
                { itemName: "AccountManagement", displayName: "Account Management", component: _user_account_user_account_component__WEBPACK_IMPORTED_MODULE_11__["UserAccountComponent"] },
                { itemName: "User Roles", displayName: "User Roles", component: _asp_net_roles_asp_net_roles_component__WEBPACK_IMPORTED_MODULE_3__["AspNetRolesComponent"] },
            ];
        }
        if (this.RouteNames == "/admin/masters/rmclassification") {
            this.masterMenuItems = [
                { itemName: "AllowablePercentage", displayName: "Allowable Percentage", component: src_app_allowable_percentage_allowable_percentage_component__WEBPACK_IMPORTED_MODULE_0__["AllowablePercentageComponent"] },
                { itemName: "ExpirationDaysManagement", displayName: "Expiration Days", component: _tbl_nearly_expiry_mgmt_tbl_nearly_expiry_mgmt_component__WEBPACK_IMPORTED_MODULE_10__["TblNearlyExpiryMgmtComponent"] },
            ];
        }
        if (this.RouteNames == "/admin/masters/rmcancelandreturn") {
            this.masterMenuItems = [
                { itemName: "RejectedStatus", displayName: "RM Rejected Status", component: _rejected_status_rejected_status_component__WEBPACK_IMPORTED_MODULE_7__["RejectedStatusComponent"] },
                { itemName: "CancelledPOTransactionStatus", displayName: "RM Reject Status of QC", component: _cancelled_potransaction_status_cancelled_potransaction_status_component__WEBPACK_IMPORTED_MODULE_4__["CancelledPOTransactionStatusComponent"] },
                { itemName: "ReturnedPOTransactionStatus", displayName: "RM Cancelled PO Status", component: src_app_returned_potransaction_status_returned_potransaction_status_component__WEBPACK_IMPORTED_MODULE_2__["ReturnedPOTransactionStatusComponent"] },
            ];
        }
    }
    menuItemClick(clickedMasterMenuItem) {
        //console.log(clickedMasterMenuItem);
        this.activeItem = clickedMasterMenuItem.itemName;
        let matchingTabs = this.tabs.filter((tab) => {
            return tab.itemName == clickedMasterMenuItem.itemName;
        });
        if (matchingTabs.length == 0) {
            this.tabs.push({
                tabIndex: this.tabs.length,
                itemName: clickedMasterMenuItem.itemName,
                displayName: clickedMasterMenuItem.displayName
            });
            setTimeout(() => {
                var componentLoadersArray = this.componentLoaders.toArray();
                var componentFactory = this.componentFactoryResolver.resolveComponentFactory(clickedMasterMenuItem.component);
                var viewContainterRef = componentLoadersArray[this.tabs.length - 1].viewContainerRef;
                var componentRef = viewContainterRef.createComponent(componentFactory);
                this.tabs[this.tabs.length - 1].viewContainerRef = viewContainterRef;
                if (clickedMasterMenuItem.component.name == "CountriesComponent") {
                    var componentInstance = componentRef.instance;
                    // componentInstance.message = "Hello to Countries";
                }
            }, 100);
        }
    }
    onCloseClick(clickedTab) {
        clickedTab.viewContainerRef.remove();
        this.tabs.splice(this.tabs.indexOf(clickedTab), 1);
        if (this.tabs.length > 0) {
            this.activeItem = this.tabs[0].itemName;
        }
    }
}
MastersComponent.ɵfac = function MastersComponent_Factory(t) { return new (t || MastersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"])); };
MastersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: MastersComponent, selectors: [["app-masters"]], viewQuery: function MastersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](src_app_directives_component_loader_directive__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderDirective"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.componentLoaders = _t);
    } }, decls: 13, vars: 3, consts: [[1, "col-md-10", "system-name", 2, "width", "100%"], [1, "row"], [1, "col-md-2"], [1, "list-group"], ["href", "#", "class", "list-group-item list-group-item-action", "onclick", "return false", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "col-md-8"], ["role", "tablist", 1, "nav", "nav-tabs"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "tab-content"], ["class", "tab-pane fade show", "role", "tabpanel", 3, "id", "ngClass", 4, "ngFor", "ngForOf"], ["href", "#", "onclick", "return false", 1, "list-group-item", "list-group-item-action", 3, "ngClass", "click"], [1, "nav-item"], ["data-toggle", "tab", "role", "tab", 1, "nav-link", 3, "href", "ngClass", "click"], [1, "fa", "fa-window-close", 3, "click"], ["role", "tabpanel", 1, "tab-pane", "fade", "show", 3, "id", "ngClass"], [1, "pl-md-3", "pr-md-3", "mx-auto"], ["appComponentLoader", ""]], template: function MastersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "MASTER LIST SET-UP");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, MastersComponent_a_6_Template, 2, 4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, MastersComponent_li_9_Template, 4, 5, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, MastersComponent_div_12_Template, 3, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.masterMenuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.tabs);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_16__["DefaultClassDirective"], src_app_directives_component_loader_directive__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXN0ZXJzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "VTHj":
/*!*************************************************************!*\
  !*** ./src/app/admin/admin-routing/admin-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guards_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../guards/can-activate-guard.service */ "Ib1u");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/dashboard/dashboard.component */ "eEfz");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/projects/projects.component */ "stSC");
/* harmony import */ var _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/project-details/project-details.component */ "VTZD");
/* harmony import */ var _components_masters_masters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/masters/masters.component */ "UZCw");
/* harmony import */ var _components_projects_cancelled_po_projects_cancelled_po_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/projects-cancelled-po/projects-cancelled-po.component */ "cNT6");
/* harmony import */ var _components_projects_partial_po_projects_partial_po_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/projects-partial-po/projects-partial-po.component */ "k8Sd");
/* harmony import */ var _components_projet_ponearly_expiry_approval_projet_ponearly_expiry_approval_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/projet-ponearly-expiry-approval/projet-ponearly-expiry-approval.component */ "gzVQ");
/* harmony import */ var _components_tbl_nearly_expiry_mgmt_tbl_nearly_expiry_mgmt_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/tbl-nearly-expiry-mgmt/tbl-nearly-expiry-mgmt.component */ "hxFl");
/* harmony import */ var _components_wh_rejection_approval_wh_rejection_approval_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/wh-rejection-approval/wh-rejection-approval.component */ "v8sE");
/* harmony import */ var _components_store_order_store_order_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/store-order/store-order.component */ "I/Vx");
/* harmony import */ var _components_prepared_store_order_prepared_store_order_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/prepared-store-order/prepared-store-order.component */ "A1pb");
/* harmony import */ var _components_store_order_active_cancelled_transaction_store_order_active_cancelled_transaction_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/store-order-active-cancelled-transaction/store-order-active-cancelled-transaction.component */ "GuzH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");
















// import { WhCheckerDashboardComponent } from '../components/wh-checker-dashboard/wh-checker-dashboard.component';
const routes = [
    { path: "", canActivate: [_guards_can_activate_guard_service__WEBPACK_IMPORTED_MODULE_1__["CanActivateGuardService"]], data: { expectedRole: "Admin" }, children: [
            { path: "dashboard", component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], data: { linkIndex: 0 } },
            { path: "projects", component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"], data: { linkIndex: 2 } },
            { path: "projects/view/:projectid", component: _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_4__["ProjectDetailsComponent"], data: { linkIndex: 3 } },
            { path: "masters", component: _components_masters_masters_component__WEBPACK_IMPORTED_MODULE_5__["MastersComponent"], data: { linkIndex: 4 } },
            { path: "projectscancel", component: _components_projects_cancelled_po_projects_cancelled_po_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsCancelledPoComponent"], data: { linkIndex: 5 } },
            { path: "projectspartialpo", component: _components_projects_partial_po_projects_partial_po_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsPartialPoComponent"], data: { linkIndex: 6 } },
            { path: "projectsnearlyxpiryapproval", component: _components_projet_ponearly_expiry_approval_projet_ponearly_expiry_approval_component__WEBPACK_IMPORTED_MODULE_8__["ProjetPONearlyExpiryApprovalComponent"], data: { linkIndex: 7 } },
            { path: "expirydaymgmt", component: _components_tbl_nearly_expiry_mgmt_tbl_nearly_expiry_mgmt_component__WEBPACK_IMPORTED_MODULE_9__["TblNearlyExpiryMgmtComponent"], data: { linkIndex: 8 } },
            { path: "masters/user", component: _components_masters_masters_component__WEBPACK_IMPORTED_MODULE_5__["MastersComponent"], data: { linkIndex: 9 } },
            { path: "masters/rmclassification", component: _components_masters_masters_component__WEBPACK_IMPORTED_MODULE_5__["MastersComponent"], data: { linkIndex: 10 } },
            { path: "masters/rmcancelandreturn", component: _components_masters_masters_component__WEBPACK_IMPORTED_MODULE_5__["MastersComponent"], data: { linkIndex: 11 } },
            { path: "whrejectionapproval", component: _components_wh_rejection_approval_wh_rejection_approval_component__WEBPACK_IMPORTED_MODULE_10__["WhRejectionApprovalComponent"], data: { linkIndex: 12 } },
            { path: "whstoreorder", component: _components_store_order_store_order_component__WEBPACK_IMPORTED_MODULE_11__["StoreOrderComponent"], data: { linkIndex: 13 } },
            { path: "wh-prepared-store-order", component: _components_prepared_store_order_prepared_store_order_component__WEBPACK_IMPORTED_MODULE_12__["PreparedStoreOrderComponent"], data: { linkIndex: 14 } },
            { path: "wh-cancelledprepared-store-order", component: _components_store_order_active_cancelled_transaction_store_order_active_cancelled_transaction_component__WEBPACK_IMPORTED_MODULE_13__["StoreOrderActiveCancelledTransactionComponent"], data: { linkIndex: 15 } },
        ] },
];
class AdminRoutingModule {
}
AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); };
AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "VTZD":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/components/project-details/project-details.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProjectDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsComponent", function() { return ProjectDetailsComponent; });
/* harmony import */ var src_app_models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/project */ "AuN9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/projects.service */ "CoJz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _pipes_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../pipes/number-to-words.pipe */ "giDM");







const _c0 = function () { return ["/admin", "projects"]; };
class ProjectDetailsComponent {
    constructor(activatedRoute, projectsService) {
        this.activatedRoute = activatedRoute;
        this.projectsService = projectsService;
        this.project = new src_app_models_project__WEBPACK_IMPORTED_MODULE_0__["Project"]();
    }
    ngOnInit() {
        this.routeParamasSubscription = this.activatedRoute.params.subscribe((params) => {
            let pid = params["projectid"];
            this.projectsService.getProjectByProjectID(pid).subscribe((proj) => {
                this.project = proj;
            });
        });
    }
    ngOnDestroy() {
        this.routeParamasSubscription.unsubscribe();
    }
}
ProjectDetailsComponent.ɵfac = function ProjectDetailsComponent_Factory(t) { return new (t || ProjectDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"])); };
ProjectDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectDetailsComponent, selectors: [["app-project-details"]], decls: 39, vars: 11, consts: [[1, "row"], [1, "col-md-8", "col-lg-6", "col-xl-5", "mx-auto"], [1, "card", "card-primary", "mb-1"], [1, "card-header"], [1, "card-body"], [1, "table", "table-borderless", "table-sm"], [1, "text-info"], [1, "card-footer"], ["mat-stroked-button", "", "color", "accent", 3, "routerLink"]], template: function ProjectDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Date of Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Team Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "numberToWords");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Client Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("#", ctx.project.projectID, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.project.projectName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.project.dateOfStart);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.project.teamSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 8, ctx.project.teamSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.project.clientLocation == null ? null : ctx.project.clientLocation.clientLocationName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.project.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c0));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], pipes: [_pipes_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_6__["NumberToWordsPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "XoK7":
/*!***********************************************************************!*\
  !*** ./src/app/admin/components/task-status/task-status.component.ts ***!
  \***********************************************************************/
/*! exports provided: TaskStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskStatusComponent", function() { return TaskStatusComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models_task_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/task-status */ "JxWU");
/* harmony import */ var src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipes/filter.pipe */ "BhhM");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_task_statuses_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/task-statuses.service */ "GqYe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../pipes/paging.pipe */ "tuZ1");
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../pipes/sort.pipe */ "eLiO");














const _c0 = ["defaultTextBox_New"];
const _c1 = ["defaultTextBox_Edit"];
function TaskStatusComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 53);
} }
function TaskStatusComponent_i_28_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_i_28_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r11.sortBy = "taskStatusName"; return ctx_r11.sortOrder = "ASC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TaskStatusComponent_i_29_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_i_29_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.sortOrder = "DESC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TaskStatusComponent_i_30_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_i_30_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.sortOrder = "ASC"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TaskStatusComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_tr_33_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const taskStatus_r17 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.onEditClick($event, taskStatus_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_tr_33_Template_button_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const taskStatus_r17 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r21.onDeleteClick($event, taskStatus_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const taskStatus_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](taskStatus_r17.taskStatusName);
} }
const _c2 = function (a0) { return { "active": a0 }; };
function TaskStatusComponent_ng_container_42_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_ng_container_42_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25); const page_r23 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r24.onPageIndexClicked(page_r23.pageIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r23 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c2, page_r23.pageIndex == ctx_r22.currentPageIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](page_r23.pageIndex + 1);
} }
function TaskStatusComponent_ng_container_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TaskStatusComponent_ng_container_42_li_1_Template, 3, 4, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r5.pages);
} }
function TaskStatusComponent_ng_container_43_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TaskStatusComponent_ng_container_43_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_ng_container_43_li_8_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r28.onPageIndexClicked(ctx_r28.currentPageIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r27.currentPageIndex + 1);
} }
function TaskStatusComponent_ng_container_43_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_ng_container_43_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r30.onPageIndexClicked(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_ng_container_43_Template_li_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r32.onPageIndexClicked(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, TaskStatusComponent_ng_container_43_li_7_Template, 2, 0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, TaskStatusComponent_ng_container_43_li_8_Template, 3, 2, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_ng_container_43_Template_li_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r33.onPageIndexClicked(ctx_r33.pages.length - 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_ng_container_43_Template_li_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r34.onPageIndexClicked(ctx_r34.pages.length - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c2, ctx_r6.currentPageIndex == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c2, ctx_r6.currentPageIndex == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c2, ctx_r6.currentPageIndex == ctx_r6.pages.length - 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.pages.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c2, ctx_r6.currentPageIndex == ctx_r6.pages.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.pages.length);
} }
function TaskStatusComponent_span_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Task Status Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TaskStatusComponent_span_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Task Status Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c3 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
class TaskStatusComponent {
    //Constructor
    constructor(taskStatusesService, formBuilder) {
        this.taskStatusesService = taskStatusesService;
        this.formBuilder = formBuilder;
        //Objects for Holding Model Data
        this.taskStatuses = [];
        this.showLoading = true;
        //Objects for Delete
        this.deleteTaskStatus = new src_app_models_task_status__WEBPACK_IMPORTED_MODULE_1__["TaskStatus"]();
        this.editIndex = null;
        this.deleteIndex = null;
        //Properties for Searching
        this.searchBy = "taskStatusName";
        this.searchText = "";
        //Properties for Paging
        this.currentPageIndex = 0;
        this.pages = [];
        this.pageSize = 7;
        //Properties for Sorting
        this.sortBy = "taskStatusName";
        this.sortOrder = "ASC";
    }
    ngOnInit() {
        //Get data from database
        this.taskStatusesService.getTaskStatuses().subscribe((response) => {
            this.taskStatuses = response;
            this.showLoading = false;
            this.calculateNoOfPages();
        });
        //Create newForm
        this.newForm = this.formBuilder.group({
            taskStatusID: this.formBuilder.control(null),
            taskStatusName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
        //Create editForm
        this.editForm = this.formBuilder.group({
            taskStatusID: this.formBuilder.control(null),
            taskStatusName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
    }
    calculateNoOfPages() {
        //Get no. of Pages
        let filterPipe = new src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]();
        var noOfPages = Math.ceil(filterPipe.transform(this.taskStatuses, this.searchBy, this.searchText).length / this.pageSize);
        this.pages = [];
        //Generate pages
        for (let i = 0; i < noOfPages; i++) {
            this.pages.push({ pageIndex: i });
        }
        this.currentPageIndex = 0;
    }
    onPageIndexClicked(ind) {
        //Set currentPageIndex
        if (ind >= 0 && ind < this.pages.length) {
            this.currentPageIndex = ind;
        }
    }
    onNewClick(event) {
        //reset the newForm
        this.newForm.reset({ taskStatusID: 0 });
        setTimeout(() => {
            //Focus the TaskStatus textbox in newForm
            this.defaultTextBox_New.nativeElement.focus();
        }, 100);
    }
    onSaveClick() {
        if (this.newForm.valid) {
            //Invoke the REST-API call
            this.taskStatusesService.insertTaskStatus(this.newForm.value).subscribe((response) => {
                //Add Response to Grid
                var p = new src_app_models_task_status__WEBPACK_IMPORTED_MODULE_1__["TaskStatus"]();
                p.taskStatusID = response.taskStatusID;
                p.taskStatusName = response.taskStatusName;
                this.taskStatuses.push(p);
                //Reset the newForm
                this.newForm.reset();
                jquery__WEBPACK_IMPORTED_MODULE_3__("#newTaskStatusFormCancel").trigger("click");
                this.calculateNoOfPages();
                this.calculateNoOfPages();
            }, (error) => {
                console.log(error);
            });
        }
    }
    onEditClick(event, taskStatus) {
        //Reset the editForm
        this.editForm.reset();
        setTimeout(() => {
            this.editForm.patchValue(taskStatus);
            this.editIndex = this.taskStatuses.indexOf(taskStatus);
            //Focus the TaskStatus textbox in editForm
            this.defaultTextBox_Edit.nativeElement.focus();
        }, 100);
    }
    onUpdateClick() {
        if (this.editForm.valid) {
            //Invoke the REST-API call
            this.taskStatusesService.updateTaskStatus(this.editForm.value).subscribe((response) => {
                //Update the response in Grid
                this.taskStatuses[this.editIndex] = response;
                //Reset the editForm
                this.editForm.reset();
                jquery__WEBPACK_IMPORTED_MODULE_3__("#editTaskStatusFormCancel").trigger("click");
            }, (error) => {
                console.log(error);
            });
        }
    }
    onDeleteClick(event, taskStatus) {
        //Set data into deleteTaskStatus
        this.deleteTaskStatus.taskStatusID = taskStatus.taskStatusID;
        this.deleteTaskStatus.taskStatusName = taskStatus.taskStatusName;
        this.deleteIndex = this.taskStatuses.indexOf(taskStatus);
    }
    onDeleteConfirmClick() {
        //Invoke the REST-API call
        this.taskStatusesService.deleteTaskStatus(this.deleteTaskStatus.taskStatusID).subscribe((response) => {
            //Delete object in Grid
            this.taskStatuses.splice(this.deleteIndex, 1);
            //Clear deleteCountry
            this.deleteTaskStatus.taskStatusID = null;
            this.deleteTaskStatus.taskStatusName = null;
            //Recall the calculateNoOfPages
            this.calculateNoOfPages();
        }, (error) => {
            console.log(error);
        });
    }
    onSearchTextChange(event) {
        this.calculateNoOfPages();
    }
}
TaskStatusComponent.ɵfac = function TaskStatusComponent_Factory(t) { return new (t || TaskStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_task_statuses_service__WEBPACK_IMPORTED_MODULE_5__["TaskStatusesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
TaskStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TaskStatusComponent, selectors: [["app-task-status"]], viewQuery: function TaskStatusComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_New = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_Edit = _t.first);
    } }, decls: 116, vars: 34, consts: [["class", "fa fa-circle-o-notch fa-spin", "style", "font-size:24px", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "form-group", "row"], [1, "col-md-12", "col-lg-12", "col-xl-2"], ["mat-stroked-button", "", "color", "primary", "data-toggle", "modal", "data-target", "#newTaskStatusModal", 3, "click"], ["for", "drpSearchBy", 1, "col-form-label", "col-md-6", "col-lg-2", "offset-xl-1", "col-xl-2", "text-right"], [1, "col-md-6", "col-lg-4", "col-xl-3"], ["id", "drpSearchBy", "name", "SearchBy", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "taskStatusName"], ["for", "textSearchText", 1, "col-form-label", "col-md-6", "col-lg-2", "col-xl-1", "text-right"], [1, "input-group"], ["type", "text", "id", "txtSearchText", "name", "SearchText", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "col-xl-8", "col-lg-9", "mx-auto"], [1, "table"], [1, "table-dark", "text-dark"], ["class", "fa fa-sort hand-icon", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-up hand-icon text-primary", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-down hand-icon text-primary", 3, "click", 4, "ngIf"], [1, "text-center", 2, "width", "200px"], [4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mt-1"], [1, "page-item", 3, "click"], ["href", "#", "onclick", "return false", 1, "page-link", "bg-secondary", "text-white"], [4, "ngIf"], ["novalidate", "novalidate", 3, "formGroup"], ["role", "dialog", "id", "newTaskStatusModal", 1, "modal"], [1, "modal-dialog", "modal-md"], [1, "modal-content"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], ["for", "txtNewTaskStatusName", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "id", "txtNewTaskStatusName", "placeholder", "Task Status Name", "name", "TaskStatusName", "formControlName", "taskStatusName", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_New", ""], ["class", "text-danger", 4, "ngIf"], [1, "modal-footer"], ["data-dismiss", "modal", "id", "newTaskStatusFormCancel", "type", "button", 1, "btn", "btn-warning"], [1, "btn", "btn-success", 3, "click"], ["role", "dialog", "id", "editTaskStatusModal", 1, "modal"], ["for", "txtEditTaskStatusName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditTaskStatusName", "placeholder", "Task Status Name", "name", "TaskStatusName", "formControlName", "taskStatusName", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_Edit", ""], ["data-dismiss", "modal", "id", "editTaskStatusFormCancel", "type", "button", 1, "btn", "btn-warning"], ["role", "dialog", "id", "deleteModal", 1, "modal"], [1, "text-warning"], ["for", "txtDeleteTaskStatusName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteTaskStatusName", "placeholder", "Task Status Name", "name", "TaskStatusName", "disabled", "disabled", 1, "form-control-plain-text", 2, "width", "300px", 3, "ngModel", "ngModelChange"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-warning"], ["data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-circle-o-notch", "fa-spin", 2, "font-size", "24px"], [1, "fa", "fa-sort", "hand-icon", 3, "click"], [1, "fa", "fa-sort-up", "hand-icon", "text-primary", 3, "click"], [1, "fa", "fa-sort-down", "hand-icon", "text-primary", 3, "click"], [1, "text-center"], ["data-toggle", "modal", "data-target", "#editTaskStatusModal", 1, "btn", "btn-info", 3, "click"], ["data-toggle", "modal", "data-target", "#deleteModal", 1, "btn", "btn-warning", 3, "click"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass", "click"], ["href", "#", "onclick", "return false", 1, "page-link"], ["class", "page-item", 3, "ngClass", "click", 4, "ngIf"], [1, "text-danger"]], template: function TaskStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TaskStatusComponent_i_1_Template, 1, 0, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_Template_button_click_6_listener($event) { return ctx.onNewClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Create Task Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Search by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskStatusComponent_Template_select_ngModelChange_13_listener($event) { return ctx.searchBy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Task Status Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Search:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskStatusComponent_Template_input_ngModelChange_20_listener($event) { return ctx.searchText = $event; })("keyup", function TaskStatusComponent_Template_input_keyup_20_listener($event) { return ctx.onSearchTextChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " Task Status Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, TaskStatusComponent_i_28_Template, 1, 0, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, TaskStatusComponent_i_29_Template, 1, 0, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, TaskStatusComponent_i_30_Template, 1, 0, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, TaskStatusComponent_tr_33_Template, 9, 1, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "paging");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](35, "sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](36, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_Template_li_click_39_listener() { return ctx.onPageIndexClicked(ctx.currentPageIndex - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, TaskStatusComponent_ng_container_42_Template, 2, 1, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, TaskStatusComponent_ng_container_43_Template, 17, 16, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_Template_li_click_44_listener() { return ctx.onPageIndexClicked(ctx.currentPageIndex + 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "New Task Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Task Status Name *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "input", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](64, TaskStatusComponent_span_64_Template, 2, 0, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_Template_button_click_68_listener() { return ctx.onSaveClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "Edit Task Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "Task Status Name *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](85, "input", 44, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](87, TaskStatusComponent_span_87_Template, 2, 0, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_Template_button_click_91_listener() { return ctx.onUpdateClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99, "Delete Task Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](102, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105, "Are you sure to delete this Task Status?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](108, "Task Status Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TaskStatusComponent_Template_input_ngModelChange_110_listener($event) { return ctx.deleteTaskStatus.taskStatusName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskStatusComponent_Template_button_click_114_listener() { return ctx.onDeleteConfirmClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortBy != "taskStatusName");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortBy == "taskStatusName" && ctx.sortOrder == "ASC");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortBy == "taskStatusName" && ctx.sortOrder == "DESC");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](34, 16, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](35, 20, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](36, 24, ctx.taskStatuses, ctx.searchBy, ctx.searchText), ctx.sortBy, ctx.sortOrder), ctx.currentPageIndex, ctx.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pages.length <= 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pages.length > 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.newForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](28, _c3, ctx.newForm.get("taskStatusName").invalid && (ctx.newForm.get("taskStatusName").dirty || ctx.newForm.get("taskStatusName").touched || ctx.newForm.valid), ctx.newForm.get("taskStatusName").valid && (ctx.newForm.get("taskStatusName").dirty || ctx.newForm.get("taskStatusName").touched || ctx.newForm.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.newForm.get("taskStatusName").invalid && (ctx.newForm.get("taskStatusName").dirty || ctx.newForm.get("taskStatusName").touched || ctx.newForm.valid) && (ctx.newForm.get("taskStatusName").errors == null ? null : ctx.newForm.get("taskStatusName").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](31, _c3, ctx.editForm.get("taskStatusName").invalid && (ctx.editForm.get("taskStatusName").dirty || ctx.editForm.get("taskStatusName").touched || ctx.editForm.valid), ctx.editForm.get("taskStatusName").valid && (ctx.editForm.get("taskStatusName").dirty || ctx.editForm.get("taskStatusName").touched || ctx.editForm.valid)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.editForm.get("taskStatusName").invalid && (ctx.editForm.get("taskStatusName").dirty || ctx.editForm.get("taskStatusName").touched || ctx.editForm.valid) && (ctx.editForm.get("taskStatusName").errors == null ? null : ctx.editForm.get("taskStatusName").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.deleteTaskStatus.taskStatusName);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"]], pipes: [_pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_10__["PagingPipe"], _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_11__["SortPipe"], src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrLXN0YXR1cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "cluD":
/*!*****************************************!*\
  !*** ./src/app/models/task-priority.ts ***!
  \*****************************************/
/*! exports provided: TaskPriority */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskPriority", function() { return TaskPriority; });
class TaskPriority {
    constructor() {
        this.taskPriorityID = null;
        this.taskPriorityName = null;
    }
}


/***/ }),

/***/ "doYw":
/*!****************************************!*\
  !*** ./src/app/charts/column-chart.ts ***!
  \****************************************/
/*! exports provided: columnChartOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnChartOptions", function() { return columnChartOptions; });
const columnChartOptions = {
    chart: {
        type: "column"
    },
    title: {
        text: "Monthly Revenue"
    },
    subtitle: {
        text: "QC Checklist (in thousands)"
    },
    xAxis: {
        categories: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ]
    },
    yAxis: {
        title: { text: 'Revenue (millions)' }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
        }
    },
    series: [{
            name: 'Revenue',
            data: [49.9, 71.5, 106.4, 129.2, 140.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
};


/***/ }),

/***/ "eEfz":
/*!*******************************************************************!*\
  !*** ./src/app/admin/components/dashboard/dashboard.component.ts ***!
  \*******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-highcharts */ "a0Xn");
/* harmony import */ var src_app_charts_column_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/charts/column-chart */ "doYw");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/dashboard.service */ "0AbP");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var src_app_services_wh_checker_dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/wh-checker-dashboard.service */ "hMF/");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");


















function DashboardComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "RM PO Receiving");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 1, ctx_r0.totalPoRowCount));
} }
function DashboardComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "RM PO Receiving");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 1, ctx_r1.totalPoRowCount));
} }
function DashboardComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "RM PO Receiving");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 1, ctx_r2.totalPoRowCount));
} }
const _c0 = function () { return ["/admin", "whstoreorder"]; };
function DashboardComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Store Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 2, ctx_r3.totalStoreOrderRowCount));
} }
function DashboardComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Warehouse Receiving");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 1, ctx_r4.totalPoPartialReceiving));
} }
function DashboardComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Warehouse Receiving");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 1, ctx_r5.totalPoPartialReceiving));
} }
function DashboardComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Warehouse Receiving");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 1, ctx_r6.totalPoPartialReceiving));
} }
const _c1 = function () { return ["/admin", "wh-prepared-store-order"]; };
function DashboardComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Prepared Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 2, ctx_r7.totalStoreOrderPreparedDistinctRowCount));
} }
function DashboardComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Raw Material Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 1, ctx_r8.totalPoPartialRejectatWH));
} }
function DashboardComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Raw Material Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 1, ctx_r9.totalPoPartialRejectatWH));
} }
function DashboardComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Raw Material Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 1, ctx_r10.totalPoPartialRejectatWH));
} }
function DashboardComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Dispatching Record");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 1, 0));
} }
function DashboardComponent_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Cancelled PO");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 1, ctx_r12.totalPoRowCountCancelled));
} }
function DashboardComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Cancelled PO");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 1, ctx_r13.totalPoRowCountCancelled));
} }
function DashboardComponent_ng_container_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Cancelled PO");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 1, ctx_r14.totalPoRowCountCancelled));
} }
const _c2 = function () { return ["/admin", "wh-cancelledprepared-store-order"]; };
function DashboardComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Cancelled Transactions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 2, ctx_r15.totalCancelledTransactions));
} }
function DashboardComponent_mat_progress_bar_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-progress-bar", 23);
} }
const _c3 = function () { return ["/admin", "projectspartialpo"]; };
function DashboardComponent_mat_expansion_panel_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-expansion-panel-header", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-panel-title", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "playlist_remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-panel-description", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "table", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "PO Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Item Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Qty. Order:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Qty. Actual Delivery:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Unit Of Measure:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Qty. Reject:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Qty. Received:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Received By:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "mat-action-row", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "pageview");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "\u00A0Browse ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const WhReject_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](WhReject_r18.item_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Return Date: ", WhReject_r18.is_wh_received_date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](WhReject_r18.po_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](WhReject_r18.item_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](WhReject_r18.qty_order);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](WhReject_r18.actual_delivery);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](WhReject_r18.qty_uom);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](WhReject_r18.is_wh_reject);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", WhReject_r18.actual_delivery - WhReject_r18.is_wh_reject, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](WhReject_r18.is_wh_received_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c3));
} }
class DashboardComponent {
    constructor(dashboardService, loginService, mediaObserver, whCheckerDashboardService) {
        this.dashboardService = dashboardService;
        this.loginService = loginService;
        this.mediaObserver = mediaObserver;
        this.whCheckerDashboardService = whCheckerDashboardService;
        this.Years = [];
        this.TeamMembersSummary = [];
        this.TeamMembers = [];
        //properties
        this.dashboardGridCols = 4;
        this.cardColspan = 2;
        this.bookings = [];
        this.WhRejects = [];
        this.WhStoreOrders = [];
        this.columnChart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_0__["Chart"](src_app_charts_column_chart__WEBPACK_IMPORTED_MODULE_1__["columnChartOptions"]);
        this.bookingsLoadingStarted = false;
        this.projects = [];
        this.totalPoRowCount = null;
        this.totalPoRowCountCancelled = null;
        this.totalPoPartialReceiving = null;
        this.totalPoPartialRejectatWH = null;
        this.totalPartialPoReceivingRejectRowCount = null;
        this.totalStoreOrderRowCount = null;
        this.totalStoreOrderPreparedDistinctRowCount = null;
        this.totalCancelledTransactions = null;
    }
    ngOnInit() {
        //responsive dashbaord
        this.mediaObserver.asObservable().subscribe((media) => {
            if (media.some(mediaChange => mediaChange.mqAlias == "lt-sm")) {
                this.dashboardGridCols = 1;
                this.cardColspan = 1;
            }
            else if (media.some(mediaChange => mediaChange.mqAlias == "lt-md")) {
                this.dashboardGridCols = 2;
                this.cardColspan = 2;
            }
            else {
                this.dashboardGridCols = 4;
                this.cardColspan = 2;
            }
        });
        //
        //bookings
        // this.bookingsLoadingStarted = true;
        // this.dashboardService.getBookings().subscribe(
        //   (response: any) =>
        //   {
        //     this.bookings = response;
        //     this.bookingsLoadingStarted = false;
        //     this.totalPartialPoReceivingRejectRowCount = response.length;
        //   },
        //   (error) =>
        //   {
        //     console.log(error);
        //     this.bookingsLoadingStarted = false;
        //   }
        // );
        this.loginService.detectIfAlreadyLoggedIn();
        this.Designation = "Team Leader";
        // this.Username = "Gerard Singian";
        this.ToDay = new Date();
        this.Clients = [
            "ABC Infotech Ltd.", "DEF Software Solutions", "GHI Industries"
        ];
        this.Projects = [
            "Project A", "Project B", "Project C", "Project D"
        ];
        for (var i = 2019; i >= 2010; i--) {
            this.Years.push(i);
        }
        this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();
        this.DashboardPoSummary();
        this.DashboardPoSummaryCancelled();
        this.DashboardPoSummaryPartialReceiving();
        this.DashboardPoSummaryPartialReceivingRejectonWH();
        this.DashboardStoreOrder();
        this.DashboardDistinctPreparedStoreOrder();
        // this.DashboardDistinctCancelledPreparedStoreOrder();
        this.DashboardAllTotalCancelledItems();
        // this.IntervalPageforRefresh();
    }
    IntervalPageforRefresh() {
        // this.updateSubscription = interval(1000).subscribe(
        //   (val) => { this.DashboardPoSummary()
        // }
        // );
        //in 10 seconds do something
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(10000).subscribe(x => {
            this.DashboardPoSummary();
        });
    }
    DashboardPoSummary() {
        this.dashboardService.getAllProjects()
            .subscribe((response) => {
            // debugger;
            this.projects = response;
            this.totalPoRowCount = response.length;
        });
    }
    DashboardPoSummaryCancelled() {
        this.dashboardService.getAllProjectsCancelledTransaction()
            .subscribe((response) => {
            // debugger;
            this.projects = response;
            this.totalPoRowCountCancelled = response.length;
        });
    }
    DashboardPoSummaryPartialReceiving() {
        this.dashboardService.getAllProjectsPartialPoService()
            .subscribe((response) => {
            // debugger;
            this.projects = response;
            this.totalPoPartialReceiving = response.length;
        });
    }
    DashboardPoSummaryPartialReceivingRejectonWH() {
        this.dashboardService.getAllProjectsPartialReceivingReject()
            .subscribe((response) => {
            // debugger;
            this.WhRejects = response;
            this.totalPoPartialRejectatWH = response.length;
        });
    }
    DashboardStoreOrder() {
        this.whCheckerDashboardService.getStoreOrders()
            .subscribe((response) => {
            // debugger;
            this.WhStoreOrders = response;
            this.totalStoreOrderRowCount = response.length;
        });
    }
    DashboardDistinctPreparedStoreOrder() {
        this.whCheckerDashboardService.getDistinctPreparedStoreOrders()
            .subscribe((response) => {
            // debugger;
            this.WhStoreOrders = response;
            this.totalStoreOrderPreparedDistinctRowCount = response.length;
        });
    }
    // DashboardDistinctCancelledPreparedStoreOrder() {
    //   this.whCheckerDashboardService.getDistinctPreparedCancelledStoreOrders()
    //     .subscribe(
    //       (response: DryWhStoreOrders[]) => {
    //         // debugger;
    //         this.WhStoreOrders = response;
    //         this.totalCancelledStoreOrderPreparedDistinctRowCount = response.length;
    //       }
    //     );
    // }
    DashboardAllTotalCancelledItems() {
        this.whCheckerDashboardService.getAllPreparedCancelledStoreOrders()
            .subscribe((response) => {
            // debugger;
            this.WhStoreOrders = response;
            this.totalCancelledTransactions = response.length;
        });
    }
    onProjectChange($event) {
        if ($event.target.innerHTML == "Project A") {
            this.ProjectCost = 2113507;
            this.CurrentExpenditure = 96788;
            this.AvailableFunds = 52436;
        }
        else if ($event.target.innerHTML == "Project B") {
            this.ProjectCost = 88923;
            this.CurrentExpenditure = 22450;
            this.AvailableFunds = 2640;
        }
        else if ($event.target.innerHTML == "Project C") {
            this.ProjectCost = 662183;
            this.CurrentExpenditure = 7721;
            this.AvailableFunds = 9811;
        }
        else if ($event.target.innerHTML == "Project D") {
            this.ProjectCost = 928431;
            this.CurrentExpenditure = 562;
            this.AvailableFunds = 883;
        }
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_wh_checker_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["WhCheckerDashboardService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 47, vars: 23, consts: [["gutterSize", "20px", "rowHeight", "100px", 1, "dashboard-grid-list", 3, "cols"], ["fxLayout", "row", "fxLayoutAlign", "start stretch", "matRipple", "", "matTooltip", "Total PO all time", 1, "dashboard-tile", "dashboard-tile-50", "colorful-tile"], ["fxFlex", "1 1 25%", "fxLayout", "column", "fxLayoutAlign", "center center", 1, "h-100"], [4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "start stretch", "matRipple", "", "matTooltip", "Receiving available now", 1, "dashboard-tile", "dashboard-tile-50", "colorful-tile"], ["fxLayout", "row", "fxLayoutAlign", "start stretch", "matRipple", "", "matTooltip", "Rejected raw materials based on quality", 1, "dashboard-tile", "dashboard-tile-50", "colorful-tile"], ["fxLayout", "row", "fxLayoutAlign", "start stretch", "matRipple", "", "matTooltip", "Total cancelled Po all time", 1, "dashboard-tile", "dashboard-tile-50", "colorful-tile"], ["fxFlex", " 1 1 25%", "fxLayout", "column", "fxLayoutAlign", "center center", 1, "h-100"], ["rowspan", "4", 1, "dashboard-tile", "dashboard-tile-5", "scroll", 3, "colspan"], ["fxFlex", "1 1 100%", "fxLayout", "column"], ["fxFlex", "1 1 100%", "fxLayout", "row", "fxLayoutAlign", "start stretch"], ["fxFlex", "1 1 50%", 1, "p-10", "font-weight-bold", "system-name", "text-large"], ["fxFlex", "1 1 50%", 1, "text-right", "p-10"], ["matRipple", "", 1, "hand-icon"], ["value", "60", "mode", "indeterminate", 4, "ngIf"], ["fxFlex", "1 1 100%", 1, "p-5"], [4, "ngFor", "ngForOf"], ["rowspan", "4", 1, "dashboard-tile", "dashboard-tile-6", 3, "colspan"], [1, "w-100", 3, "chart"], ["fxFlex", "1 1 75%", "fxLayout", "column", "fxLayoutAlign", "center start", 1, "h-100", "text-right"], [1, "dashboard-tile-heading"], [1, "dashboard-tile-sub-heading"], [1, "dashboard-tile-heading", 3, "routerLink"], ["value", "60", "mode", "indeterminate"], ["matRipple", ""], ["fxLayout", "row", "fxLayoutAlign", "space-between start", "fxLayout.lt-md", "column", 1, "w-100"], ["fxFlex", "1 1 60%", "fxFlex", "1 1 100%", "fxLayout", "row", "fxLayoutAlign", "start center", 1, "text-large"], [1, "text-black", "ml"], ["fxFlex", "1 1 40%", "fxFlex", "1 1 100%"], [1, "text-right", "w-100"], [1, "w-100"], [1, "w-25"], [1, "font-weight-bold", "p"], ["fxLayoutAlign", "space-between start"], ["mat-button", "", "color", "primary", 1, "mr", 3, "routerLink"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-grid-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-grid-tile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "mark_email_unread");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, DashboardComponent_ng_container_5_Template, 7, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, DashboardComponent_ng_container_6_Template, 7, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, DashboardComponent_ng_container_7_Template, 7, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, DashboardComponent_ng_container_8_Template, 7, 5, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-grid-tile", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "shopping_cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, DashboardComponent_ng_container_13_Template, 7, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, DashboardComponent_ng_container_14_Template, 7, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, DashboardComponent_ng_container_15_Template, 7, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, DashboardComponent_ng_container_16_Template, 7, 5, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-grid-tile", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "thumb_down_off_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, DashboardComponent_ng_container_21_Template, 7, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, DashboardComponent_ng_container_22_Template, 7, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, DashboardComponent_ng_container_23_Template, 7, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, DashboardComponent_ng_container_24_Template, 7, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-grid-tile", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "cancel_schedule_send");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, DashboardComponent_ng_container_29_Template, 7, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, DashboardComponent_ng_container_30_Template, 7, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, DashboardComponent_ng_container_31_Template, 7, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, DashboardComponent_ng_container_32_Template, 7, 5, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-grid-tile", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, DashboardComponent_mat_progress_bar_41_Template, 1, 0, "mat-progress-bar", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, DashboardComponent_mat_expansion_panel_44_Template, 58, 12, "mat-expansion-panel", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "mat-grid-tile", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cols", ctx.dashboardGridCols);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null && ctx.loginService.currentUserRoleSession == "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null && ctx.loginService.currentUserRoleSession == "QCSupervisor");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null && ctx.loginService.currentUserRoleSession == "QC Staff");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null && ctx.loginService.currentUserRoleSession == "WarehouseChecker");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null && ctx.loginService.currentUserRoleSession == "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null && ctx.loginService.currentUserRoleSession == "QC Staff");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null && ctx.loginService.currentUserRoleSession == "QCSupervisor");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null && ctx.loginService.currentUserRoleSession == "WarehouseChecker");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null && ctx.loginService.currentUserRoleSession == "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null && ctx.loginService.currentUserRoleSession == "QCSupervisor");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null && ctx.loginService.currentUserRoleSession == "QC Staff");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null && ctx.loginService.currentUserRoleSession == "WarehouseChecker");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null && ctx.loginService.currentUserRoleSession == "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null && ctx.loginService.currentUserRoleSession == "QC Staff");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null && ctx.loginService.currentUserRoleSession == "QCSupervisor");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null && ctx.loginService.currentUserRoleSession == "WarehouseChecker");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colspan", ctx.cardColspan);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Return Item : ", ctx.totalPoPartialRejectatWH, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.bookingsLoadingStarted);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.WhRejects);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colspan", ctx.cardColspan);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("chart", ctx.columnChart);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTile"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], angular_highcharts__WEBPACK_IMPORTED_MODULE_0__["ChartDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLink"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBar"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionPanelDescription"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionPanelActionRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DecimalPipe"]], styles: [".dashboard-tile-50[_ngcontent-%COMP%] {\n  background-color: #36474f;\n  box-shadow: 0px 0px 7px 0px #000000;\n}\n\n.hideObject[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUseUJBQUE7RUFDQSxtQ0FBQTtBQUFGOztBQUtBO0VBRUksa0JBQUE7QUFISiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzaGJvYXJkLXRpbGUtNTBcbntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2NDc0ZjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMHB4ICMwMDAwMDA7XG4gIC8vIHotaW5kZXg6IDk5O1xuICAvLyBtYXJnaW4tYm90dG9tOiAycHg7XG4gIC8vIG1pbi13aWR0aDogMzYwcHg7XG59XG4uaGlkZU9iamVjdFxue1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn0iXX0= */"] });


/***/ }),

/***/ "eRHK":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/components/check-box-printer/check-box-printer.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CheckBoxPrinterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBoxPrinterComponent", function() { return CheckBoxPrinterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


class CheckBoxPrinterComponent {
    constructor() {
        this.isChecked = false;
    }
    ngOnInit() {
    }
    check() {
        this.isChecked = true;
    }
    unCheck() {
        this.isChecked = false;
    }
}
CheckBoxPrinterComponent.ɵfac = function CheckBoxPrinterComponent_Factory(t) { return new (t || CheckBoxPrinterComponent)(); };
CheckBoxPrinterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckBoxPrinterComponent, selectors: [["app-check-box-printer"]], decls: 2, vars: 1, consts: [["type", "checkbox", "value", "true", "name", "isChecked", "id", "isChecked", 3, "ngModel", "ngModelChange"]], template: function CheckBoxPrinterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckBoxPrinterComponent_Template_input_ngModelChange_1_listener($event) { return ctx.isChecked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.isChecked);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVjay1ib3gtcHJpbnRlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "jkDv":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/my-profile/my-profile.component */ "oVSu");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "eEfz");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dashboard.service */ "0AbP");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/projects/projects.component */ "stSC");
/* harmony import */ var _components_check_box_printer_check_box_printer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/check-box-printer/check-box-printer.component */ "eRHK");
/* harmony import */ var _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/project-details/project-details.component */ "VTZD");
/* harmony import */ var _admin_routing_admin_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-routing/admin-routing.module */ "VTHj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_project_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/project/project.component */ "Tt1n");
/* harmony import */ var _models_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/shared/shared.module */ "8lv1");
/* harmony import */ var _components_countries_countries_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/countries/countries.component */ "9kti");
/* harmony import */ var _components_client_locations_client_locations_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/client-locations/client-locations.component */ "3RKl");
/* harmony import */ var _components_task_status_task_status_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/task-status/task-status.component */ "XoK7");
/* harmony import */ var _components_masters_masters_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/masters/masters.component */ "UZCw");
/* harmony import */ var _components_task_priorities_task_priorities_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/task-priorities/task-priorities.component */ "8dlv");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../material/material.module */ "hctd");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-highcharts */ "a0Xn");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _components_rejected_status_rejected_status_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/rejected-status/rejected-status.component */ "ROVb");
/* harmony import */ var _components_cancelled_potransaction_status_cancelled_potransaction_status_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/cancelled-potransaction-status/cancelled-potransaction-status.component */ "OdQg");
/* harmony import */ var _components_store_order_store_order_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/store-order/store-order.component */ "I/Vx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ "fXoL");






















class AdminModule {
}
AdminModule.ɵfac = function AdminModule_Factory(t) { return new (t || AdminModule)(); };
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ providers: [_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]], imports: [[_models_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _admin_routing_admin_routing_module__WEBPACK_IMPORTED_MODULE_6__["AdminRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_15__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"],
            angular_highcharts__WEBPACK_IMPORTED_MODULE_16__["ChartModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"],
        _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_0__["MyProfileComponent"],
        _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"],
        _components_project_project_component__WEBPACK_IMPORTED_MODULE_8__["ProjectComponent"],
        _components_check_box_printer_check_box_printer_component__WEBPACK_IMPORTED_MODULE_4__["CheckBoxPrinterComponent"],
        _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_5__["ProjectDetailsComponent"],
        _components_countries_countries_component__WEBPACK_IMPORTED_MODULE_10__["CountriesComponent"],
        _components_client_locations_client_locations_component__WEBPACK_IMPORTED_MODULE_11__["ClientLocationsComponent"],
        _components_task_priorities_task_priorities_component__WEBPACK_IMPORTED_MODULE_14__["TaskPrioritiesComponent"],
        _components_task_status_task_status_component__WEBPACK_IMPORTED_MODULE_12__["TaskStatusComponent"],
        _components_masters_masters_component__WEBPACK_IMPORTED_MODULE_13__["MastersComponent"],
        _components_rejected_status_rejected_status_component__WEBPACK_IMPORTED_MODULE_18__["RejectedStatusComponent"],
        _components_cancelled_potransaction_status_cancelled_potransaction_status_component__WEBPACK_IMPORTED_MODULE_19__["CancelledPOTransactionStatusComponent"],
        _components_store_order_store_order_component__WEBPACK_IMPORTED_MODULE_20__["StoreOrderComponent"]], imports: [_models_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _admin_routing_admin_routing_module__WEBPACK_IMPORTED_MODULE_6__["AdminRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_15__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"],
        angular_highcharts__WEBPACK_IMPORTED_MODULE_16__["ChartModule"]], exports: [_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"], _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_0__["MyProfileComponent"], _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"], _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_5__["ProjectDetailsComponent"]] }); })();


/***/ }),

/***/ "oVSu":
/*!*********************************************************************!*\
  !*** ./src/app/admin/components/my-profile/my-profile.component.ts ***!
  \*********************************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MyProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyProfileComponent.ɵfac = function MyProfileComponent_Factory(t) { return new (t || MyProfileComponent)(); };
MyProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyProfileComponent, selectors: [["app-my-profile"]], decls: 2, vars: 0, template: function MyProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "my-profile works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "pgfe":
/*!***********************************!*\
  !*** ./src/app/models/country.ts ***!
  \***********************************/
/*! exports provided: Country */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
class Country {
    constructor() {
        this.countryID = null;
        this.countryName = null;
    }
}


/***/ }),

/***/ "stSC":
/*!*****************************************************************!*\
  !*** ./src/app/admin/components/projects/projects.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pipes/filter.pipe */ "BhhM");
/* harmony import */ var src_app_models_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/project */ "AuN9");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/projects.service */ "CoJz");
/* harmony import */ var _services_client_locations_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/client-locations.service */ "4D4e");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var src_app_services_rejected_status_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/rejected-status.service */ "EVuK");
/* harmony import */ var src_app_services_allowable_percentage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/allowable-percentage.service */ "oVX2");
/* harmony import */ var src_app_services_cancelled_potransaction_status_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/cancelled-potransaction-status.service */ "r8+Z");
/* harmony import */ var src_app_services_projects_partial_po_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/projects-partial-po.service */ "H9Nn");
/* harmony import */ var src_app_services_tbl_nearly_expiry_mgmt_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/tbl-nearly-expiry-mgmt.service */ "wRT8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _directives_client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../directives/client-location-status-validator.directive */ "4QNZ");
/* harmony import */ var _directives_project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../directives/project-idunique-validator.directive */ "73VF");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var src_app_directives_team_size_validator_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/app/directives/team-size-validator.directive */ "KnUO");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/cdk/text-field */ "ihCf");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../pipes/paging.pipe */ "tuZ1");


































const _c0 = ["newForm"];
const _c1 = ["editForm"];
const _c2 = ["prjID"];
const _c3 = ["IsActivated"];
const _c4 = ["received_by"];
const _c5 = ["rejectNo1"];
const _c6 = ["rejectNo2"];
const _c7 = ["rejectNo3"];
const _c8 = ["confirmReject"];
const _c9 = ["rejectIsnotMactchSpanTag"];
const _c10 = ["totalofReject"];
const _c11 = ["rejectedStatusElementNo3"];
const _c12 = ["ActiveAllowablePercentage"];
const _c13 = ["TotalAllowablePercentage"];
const _c14 = ["ExpectedDeliveryActual"];
const _c15 = ["ExpiryDateChild"];
const _c16 = ["ActualDeliveryChild"];
const _c17 = ["RejectedStatus1"];
const _c18 = ["RejectedStatus2"];
const _c19 = ["RejectedStatus3"];
const _c20 = ["ActualRemainingReceiving"];
const _c21 = ["QtyOrdered"];
const _c22 = ["ActiveNearlyExpirySetpoint"];
const _c23 = ["ItemDescription"];
const _c24 = ["PONumber"];
const _c25 = ["ActivePartialReceiving"];
const _c26 = ["remarksSectionA1"];
const _c27 = ["remarksSectionA2"];
const _c28 = ["remarksSectionA3"];
const _c29 = ["remarksSectionA4"];
const _c30 = ["remarksSectionA5"];
const _c31 = ["remarksSectionB1"];
const _c32 = ["remarksSectionB2"];
const _c33 = ["remarksSectionB3"];
const _c34 = ["remarksSectionB4"];
const _c35 = ["remarksSectionB5"];
const _c36 = ["remarksSectionB6"];
const _c37 = ["remarksSectionC1"];
const _c38 = ["remarksSectionC2"];
const _c39 = ["remarksSectionC3"];
const _c40 = ["remarksSectionC4"];
const _c41 = ["remarksSectionD1"];
const _c42 = ["remarksSectionD2"];
const _c43 = ["remarksSectionD3"];
const _c44 = ["remarksSectionD4"];
const _c45 = ["remarksSectionE1"];
const _c46 = ["remarksSectionE2"];
const _c47 = ["remarksSectionE3"];
const _c48 = ["remarksSectionE4"];
const _c49 = ["remarksSectionE5"];
const _c50 = ["remarksSectionE6"];
const _c51 = ["remarksSectionE7"];
const _c52 = ["remarksSectionE8"];
const _c53 = ["prj"];
function ProjectsComponent_i_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 337);
} }
function ProjectsComponent_tr_59_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    const _r276 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_tr_59_ng_container_20_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r276); const i_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r274.onCancelClick($event, i_r272); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "toggle_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function ProjectsComponent_tr_59_Template(rf, ctx) { if (rf & 1) {
    const _r278 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "button", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_tr_59_Template_button_click_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r278); const i_r272 = ctx.index; const ctx_r277 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r277.onEditClick($event, i_r272); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, ProjectsComponent_tr_59_ng_container_20_Template, 5, 0, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r271 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](project_r271.po_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](project_r271.item_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](project_r271.item_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](project_r271.supplier);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](11, 7, project_r271.qty_order, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](14, 11, project_r271.actual_remaining_receiving, "1.0", "en-US"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.loginService.currentUserName != null && ctx_r1.loginService.currentUserRoleSession == "Admin");
} }
const _c54 = function (a0) { return { "link-active-paging": a0 }; };
function ProjectsComponent_ng_container_67_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r282 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_ng_container_67_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r282); const page_r280 = ctx.$implicit; const ctx_r281 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r281.onPageIndexClicked(page_r280.pageIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r280 = ctx.$implicit;
    const ctx_r279 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c54, page_r280.pageIndex == ctx_r279.currentPageIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](page_r280.pageIndex + 1);
} }
function ProjectsComponent_ng_container_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProjectsComponent_ng_container_67_li_1_Template, 3, 4, "li", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.pages);
} }
function ProjectsComponent_ng_container_68_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_ng_container_68_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r286 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_ng_container_68_li_8_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r286); const ctx_r285 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r285.onPageIndexClicked(ctx_r285.currentPageIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r284 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", "link-active-paging");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r284.currentPageIndex + 1);
} }
function ProjectsComponent_ng_container_68_Template(rf, ctx) { if (rf & 1) {
    const _r288 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_ng_container_68_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r288); const ctx_r287 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r287.onPageIndexClicked(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "li", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_ng_container_68_Template_li_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r288); const ctx_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r289.onPageIndexClicked(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ProjectsComponent_ng_container_68_li_7_Template, 2, 0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ProjectsComponent_ng_container_68_li_8_Template, 3, 2, "li", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_ng_container_68_Template_li_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r288); const ctx_r290 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r290.onPageIndexClicked(ctx_r290.pages.length - 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "a", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "li", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_ng_container_68_Template_li_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r288); const ctx_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r291.onPageIndexClicked(ctx_r291.pages.length - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "a", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c54, ctx_r3.currentPageIndex == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c54, ctx_r3.currentPageIndex == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.currentPageIndex > 1 && ctx_r3.currentPageIndex < ctx_r3.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.currentPageIndex > 1 && ctx_r3.currentPageIndex < ctx_r3.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c54, ctx_r3.currentPageIndex == ctx_r3.pages.length - 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.pages.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](14, _c54, ctx_r3.currentPageIndex == ctx_r3.pages.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.pages.length);
} }
function ProjectsComponent_span_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Project ID can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Project ID should contain numbers only");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Duplicate Project ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Project Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Project Name can contain alphabets, digits, dot, hyphen or space only");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Project name should be at least 3 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Date of Start can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Team Size should be a number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Team Size should be divisble by 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_147_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Please select status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_option_156_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const clientLocation_r292 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", clientLocation_r292.clientLocationID);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", clientLocation_r292.clientLocationName, " ");
} }
function ProjectsComponent_span_158_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Please client location");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_159_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Support projects are not allowed at Tokyo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_188_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Project ID can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_189_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Project ID should contain numbers only");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_190_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Duplicate Project ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_196_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Item Code can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_197_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Item Code can contain alphabets, digits, dot, hyphen or space only");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_198_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Item Code should be at least 3 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_224_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Item Description can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_225_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Item Description can contain alphabets, digits, dot, hyphen or space only");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_226_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Item Description should be at least 3 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_288_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Expected Delivery can contain alphabets, digits, dot, hyphen or space only");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_289_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Expected Delivery should be at least 3 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_p_299_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 346, 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r293 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", status_r293.p_allowable_percentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", status_r293.p_allowable_percentage);
} }
function ProjectsComponent_p_309_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 346, 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nearlyexpiry_r295 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", nearlyexpiry_r295.p_nearly_expiry_desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", nearlyexpiry_r295.p_nearly_expiry_desc);
} }
function ProjectsComponent_span_317_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Date of Start can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_340_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Please select status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_357_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "UOM can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_358_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "UOM can contain alphabets, digits, dot, hyphen or space only");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_359_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "UOM should be at least 3 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_mat_hint_366_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nearlyexpiry_r297 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", nearlyexpiry_r297.p_nearly_expiry_desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", nearlyexpiry_r297.p_nearly_expiry_desc, " days before to expired");
} }
function ProjectsComponent_mat_hint_379_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r298 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", status_r298.p_allowable_percentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", status_r298.p_allowable_percentage, " % Allowable");
} }
function ProjectsComponent_span_381_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Qty Actual Delivery can contain alphabets, digits, dot, hyphen or space only");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_382_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Qty Actual Delivery should be at least 3 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_397_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Team Size should be a number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_398_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Team Size should be divisble by 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_option_407_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const clientLocation_r299 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", clientLocation_r299.clientLocationID);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\n", clientLocation_r299.clientLocationName, "\n");
} }
function ProjectsComponent_span_409_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Please client location");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_410_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Support projects are not allowed at Tokyo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_mat_option_425_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 345, 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r300 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", status_r300.reject_status_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", status_r300.reject_status_name, " ");
} }
function ProjectsComponent_mat_option_434_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r302 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", status_r302.reject_status_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", status_r302.reject_status_name, " ");
} }
function ProjectsComponent_mat_option_443_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 345, 351);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r303 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", status_r303.reject_status_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", status_r303.reject_status_name, " ");
} }
function ProjectsComponent_span_463_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Number of Rejection can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_521_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_527_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_544_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_550_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_566_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_572_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_589_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_595_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_612_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_618_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_649_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_655_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_672_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_678_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_695_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_701_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_718_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_724_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_741_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_747_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_764_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_770_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_801_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_807_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_824_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_830_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_847_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_852_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_869_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_875_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_906_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_911_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_927_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_932_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_949_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_955_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_972_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_978_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_1009_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_1014_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_1030_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_1036_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_1053_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_1059_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_1076_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_1082_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_1099_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_1105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_1122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_1128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_1145_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_1151_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_1168_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Compliance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_span_1174_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Remarks required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ProjectsComponent_mat_option_1246_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r305 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", status_r305.status_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", status_r305.status_name, " ");
} }
function ProjectsComponent_p_1248_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "emp", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-form-field", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 352, 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Item Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-hint", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Receiving Transaction");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r306 = ctx.$implicit;
    const ctx_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", status_r306.actual_delivery);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("List of Item for Receiving ", ctx_r270.totalPartialReceivingCancel, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", status_r306.actual_delivery);
} }
const _c55 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
class ProjectsComponent {
    constructor(projectsService, clientLocationsService, toastr, loginService, rejectedStatusService, allowablePercentageService, cancelledPOTransactionStatusService, projectsPartialPoService, tblNearlyExpiryMgmtService, formBuilder) {
        this.projectsService = projectsService;
        this.clientLocationsService = clientLocationsService;
        this.toastr = toastr;
        this.loginService = loginService;
        this.rejectedStatusService = rejectedStatusService;
        this.allowablePercentageService = allowablePercentageService;
        this.cancelledPOTransactionStatusService = cancelledPOTransactionStatusService;
        this.projectsPartialPoService = projectsPartialPoService;
        this.tblNearlyExpiryMgmtService = tblNearlyExpiryMgmtService;
        this.formBuilder = formBuilder;
        this.projects = [];
        this.showLoading = true;
        this.allowableqty = null;
        this.actualqty = null;
        this.expirable_material = null;
        this.newProject = new src_app_models_project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
        this.editProject = new src_app_models_project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
        this.editIndex = null;
        this.deleteProject = new src_app_models_project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
        this.deleteIndex = null;
        this.searchBy = "po_number";
        this.searchText = "";
        this.activeUser = "";
        this.PartialEntry = "";
        this.PartialComment = "";
        this.currentPageIndex = 0;
        this.pages = [];
        this.pageSize = 7;
        this.totalPoRowCount = null;
        this.totalPartial = null;
        this.totalPartialReceivingCancel = null;
        this.PoNumberBinding = "";
        //sample
        this.msgrejectremarksno1 = 0;
        this.msgrejectremarksno2 = 0;
        this.msgrejectremarksno3 = 0;
        //Calculator for Reject
        this.secondInput = 10;
        this.Deactivator = "0";
        this.StringNone = "None";
        this.Activator = "1";
        this.ActualRemaining = 0;
        this.totalPoPartialReceiving = 0;
        this.RandomNumber = 0;
        //FormGroup
        // ReceivijkForm: FormGroup;
        //date-picker
        // minDate: Date = new Date("2021-05-01");
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_4__(new Date()).format('YYYY-MM-DD');
        this.maxDate = moment__WEBPACK_IMPORTED_MODULE_4__(new Date()).format('YYYY-MM-DD');
        // maxDate: Date = new Date("2010-12-31");
        this.dateHint = "Choose date of birth";
        this.startDate = new Date("2002-01-01");
        //Sorting
        this.sortBy = "po_number";
        this.sortOrder = "ASC"; //ASC | DESC
        this.isAllChecked = false;
    }
    dateFilter(date) {
        return date && date.getDay() !== 0 && date.getDay() !== 6;
    }
    onDateChange() {
        // if (this.formGroup.value.dateOfBirth)
        // {
        //   let date = new Date(this.formGroup.value.dateOfBirth);
        //   this.dateHint = `You born on ${date.toString().substr(0, date.toString().indexOf(" "))}`;
        // }
        // else
        // {
        //   this.dateHint = "Choose date of birth";
        // }
    }
    ngOnInit() {
        this.loginService.detectIfAlreadyLoggedIn(); //detect already Login
        this.ToDay = new Date();
        this.activeUser = this.loginService.currentUserName;
        // debugger;
        this.projectsService.getAllProjects()
            .subscribe((response) => {
            // debugger;
            this.projects = response;
            this.showLoading = false;
            this.calculateNoOfPages();
            this.totalPoRowCount = response.length;
        });
        this.clientLocations = this.clientLocationsService.getClientLocations();
        //
        // Here 
        this.RejectStatuses = this.rejectedStatusService.getListOfStatusOfReject();
        // Here 
        this.CancelPoSummary = this.cancelledPOTransactionStatusService.getListOfStatusOfData();
        //
        this.HideRejectRowUsingJquery();
        //Call the PercentaGE aLLOWABLE
        this.AllowablePercentages = this.allowablePercentageService.getAllAlowablePercentage();
        //Call The active Allowable Percentage Dynamic Entry
        this.AllowableNearlyExpiryDays = this.tblNearlyExpiryMgmtService.getAllExpiryDaysData();
    }
    jqueryClearanceTextBox() {
        jquery__WEBPACK_IMPORTED_MODULE_0__("rejectRow1").val("");
        jquery__WEBPACK_IMPORTED_MODULE_0__("rejectRow2").val("");
        jquery__WEBPACK_IMPORTED_MODULE_0__("rejectRow3").val("");
    }
    HideRejectRowUsingJquery() {
        //Number 1
        jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow1").hide();
        jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow12").hide();
        // Number 2
        jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow2").hide();
        jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow22").hide();
        //Number 3
        jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow3").hide();
        jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow32").hide();
        //Button for Removing a Remarks
        jquery__WEBPACK_IMPORTED_MODULE_0__("#remove-remarks-button").hide();
        //total reject & confirmation of reject
        jquery__WEBPACK_IMPORTED_MODULE_0__("#total-reject").hide();
        jquery__WEBPACK_IMPORTED_MODULE_0__("#total-confirm-reject").hide();
    }
    showLimitonAddingRejection() {
        this.toastr.info('You already reached the limit!', 'Notifications');
    }
    showUpdatingSuccess() {
        this.toastr.success('Successfully Updated!', 'Notifications');
    }
    showReceivedSuccess() {
        this.toastr.success('Successfully Receive!', 'Notifications');
    }
    FieldOutRequiredField() {
        this.toastr.warning('Field out the required fields!', 'Notifications');
    }
    PartialReceivingCheckingonCancellation() {
        this.toastr.warning('You have a pending partial receiving!', 'Notifications');
    }
    totalRejectConfirmationField() {
        this.toastr.warning('Confirm the total number of reject!', 'Notifications');
    }
    showDeletedSuccess() {
        this.toastr.success('Successfully Deleted!', 'Notifications');
    }
    showCancelledPOSuccess() {
        this.toastr.success('Cancelled Successfully!', 'Notifications');
    }
    AllowablePercentageExceed() {
        this.toastr.warning('Allowable Percentage Exceed!', 'Notifications');
    }
    MultipleSelectionOfRejectionStatus() {
        this.toastr.warning('Allowable Rejection Status Exceed!', 'Notifications');
    }
    RejectionGreaterThanReceiving() {
        this.toastr.warning('Rejection Qty Greather than Actual Receiving!', 'Notifications');
    }
    GreatherThanTheOrder() {
        this.toastr.warning('Greather than Qty Order!', 'Notifications');
    }
    Alerto() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
        });
    }
    calculateNoOfPages() {
        //Get no. of Pages
        let filterPipe = new src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_1__["FilterPipe"]();
        var resultProjects = filterPipe.transform(this.projects, this.searchBy, this.searchText);
        var noOfPages = Math.ceil(resultProjects.length / this.pageSize);
        // var noOfPages = Math.ceil(filterPipe.transform(this.projects, this.searchBy, this.searchText).length / this.pageSize);
        this.pages = [];
        //Generate Pages
        for (let i = 0; i < noOfPages; i++) {
            this.pages.push({ pageIndex: i });
        }
        this.currentPageIndex = 0;
    }
    isAllCheckedChange(event) {
        let proj = this.projs.toArray();
        for (let i = 0; i < proj.length; i++) {
            proj[i].isAllCheckedChange(this.isAllChecked);
        }
    }
    onNewClick(event) {
        this.newForm.resetForm();
        setTimeout(() => {
            this.received_by.nativeElement.value = this.loginService.currentUserName;
            this.IsActivated.nativeElement.value = "1";
            this.IsActivated.nativeElement.focus();
        }, 100);
    }
    onSaveClick() {
        if (this.newForm.valid) {
            this.newProject.clientLocation.clientLocationID = 0;
            this.newProject.is_activated = "1";
            this.projectsService.insertProject(this.newProject).subscribe((response) => {
                //Add Project to Grid
                var p = new src_app_models_project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
                p.projectID = response.projectID;
                p.projectName = response.projectName;
                p.dateOfStart = response.dateOfStart;
                p.teamSize = response.teamSize;
                p.clientLocation = response.clientLocation;
                p.active = response.active;
                p.clientLocationID = response.clientLocationID;
                p.status = response.status;
                p.is_activated = response.is_activated;
                p.supplier = response.supplier;
                p.item_code = response.item_code;
                p.po_number = response.po_number;
                p.po_date = response.po_date;
                p.pr_number = response.pr_number;
                p.pr_date = response.pr_date;
                p.qty_order = response.qty_order;
                p.qty_uom = response.qty_uom;
                p.mfg_date = response.mfg_date;
                p.expiration_date = response.expiration_date;
                p.expected_delivery = response.expected_delivery;
                p.actual_delivery = response.actual_delivery;
                p.actual_remaining_receiving = response.actual_remaining_receiving;
                p.received_by_QA = response.received_by_QA;
                p.status_of_reject_one = response.status_of_reject_one;
                p.status_of_reject_two = response.status_of_reject_two;
                p.status_of_reject_three = response.status_of_reject_three;
                p.count_of_reject_one = response.count_of_reject_one;
                p.count_of_reject_two = response.count_of_reject_two;
                p.count_of_reject_three = response.count_of_reject_three;
                p.total_of_reject_mat = response.total_of_reject_mat;
                p.a_compliance = response.a_compliance;
                p.a_remarks = response.a_remarks;
                this.projects.push(p);
                //Clear New Project Dialog - TextBoxes
                this.newProject.projectName = null;
                this.newProject.dateOfStart = null;
                this.newProject.teamSize = null;
                this.newProject.active = false;
                this.newProject.clientLocationID = null;
                this.newProject.status = null;
                this.newProject.is_activated = null;
                this.newProject.supplier = null;
                this.newProject.item_code = null;
                this.newProject.po_number = null;
                this.newProject.po_date = null;
                this.newProject.pr_number = null;
                this.newProject.pr_date = null;
                this.newProject.qty_uom = null;
                this.newProject.qty_order = null;
                this.newProject.mfg_date = null;
                this.newProject.expiration_date = null;
                this.newProject.expected_delivery = null;
                this.newProject.actual_delivery = null;
                this.newProject.actual_remaining_receiving = null;
                this.newProject.received_by_QA = null;
                this.newProject.status_of_reject_one = null;
                this.newProject.status_of_reject_two = null;
                this.newProject.status_of_reject_three = null;
                this.newProject.count_of_reject_one = null;
                this.newProject.count_of_reject_two = null;
                this.newProject.count_of_reject_three = null;
                this.newProject.total_of_reject_mat = null;
                this.newProject.a_compliance = null;
                this.newProject.a_remarks = null;
                jquery__WEBPACK_IMPORTED_MODULE_0__("#newFormCancel").trigger("click");
                // this.ngOnInit();
                this.calculateNoOfPages();
            }, (error) => {
                console.log(error);
            });
        }
    }
    resetValueS() {
        this.rejectNo1.nativeElement.value = "0";
        this.rejectNo2.nativeElement.value = "0";
        this.rejectNo3.nativeElement.value = "0";
        this.confirmReject.nativeElement.value = "0";
        this.totalofReject.nativeElement.value = "0";
        this.jqueryClearanceTextBox();
    }
    onEditClick(event, index) {
        //Additional Binding of Searching
        if (jquery__WEBPACK_IMPORTED_MODULE_0__('#txtSearchText').is(":visible")) {
            //Show Visibilit
            this.projectsService.SearchProjects("Po_number", this.searchText)
                .subscribe((response) => {
                // debugger;
                this.projects = response;
                this.showLoading = false;
                this.calculateNoOfPages();
                this.totalPoRowCount = response.length;
            });
        }
        else {
            this.projectsService.getAllProjects()
                .subscribe((response) => {
                // debugger;
                this.projects = response;
            });
            if (this.currentPageIndex == 1) {
                if (index == 0) {
                    index = 7;
                }
                if (index == 1) {
                    index = 8;
                }
                if (index == 2) {
                    index = 9;
                }
                if (index == 3) {
                    index = 10;
                }
                if (index == 4) {
                    index = 11;
                }
                if (index == 5) {
                    index = 12;
                }
                if (index == 6) {
                    index = 13;
                }
            }
            else if (this.currentPageIndex == 2) {
                if (index == 0) {
                    index = 14;
                }
                if (index == 1) {
                    index = 15;
                }
                if (index == 2) {
                    index = 16;
                }
                if (index == 3) {
                    index = 17;
                }
                if (index == 4) {
                    index = 18;
                }
                if (index == 5) {
                    index = 19;
                }
                if (index == 6) {
                    index = 20;
                }
            }
            else if (this.currentPageIndex == 3) {
                if (index == 0) {
                    index = 21;
                }
                if (index == 1) {
                    index = 22;
                }
                if (index == 2) {
                    index = 23;
                }
                if (index == 3) {
                    index = 24;
                }
                if (index == 4) {
                    index = 25;
                }
                if (index == 5) {
                    index = 26;
                }
                if (index == 6) {
                    index = 27;
                }
            }
            else if (this.currentPageIndex == 4) {
                if (index == 0) {
                    index = 28;
                }
                if (index == 1) {
                    index = 29;
                }
                if (index == 2) {
                    index = 30;
                }
                if (index == 3) {
                    index = 31;
                }
                if (index == 4) {
                    index = 32;
                }
                if (index == 5) {
                    index = 33;
                }
                if (index == 6) {
                    index = 34;
                }
            }
            else {
            }
        }
        this.editForm.resetForm();
        this.received_by.nativeElement.value = this.loginService.currentUserName;
        this.resetValueS();
        //first
        this.RandomNumber = Math.floor((Math.random() * 1000000) + 1);
        // this.projectsService.getAllProjects()
        // .subscribe(
        //   (response: Project[]) =>
        //   {
        //     // debugger;
        //     // this.totalPoPartialReceiving = response.length;
        //     this.projects = response;
        //   }
        // );
        //Last
        setTimeout(() => {
            this.editProject.projectID = this.projects[index].projectID;
            // this.editProject.projectID = Math.floor((Math.random() * 1000000) + 1);
            this.editProject.projectName = this.projects[index].projectName;
            this.editProject.dateOfStart = this.projects[index].dateOfStart.split("/").reverse().join("-"); //yyyy-MM-dd
            this.editProject.teamSize = 40;
            this.editProject.active = this.projects[index].active;
            this.editProject.clientLocationID = this.projects[index].clientLocationID;
            this.editProject.clientLocation = this.projects[index].clientLocation;
            this.editProject.status = "In Force";
            this.editProject.supplier = this.projects[index].supplier;
            this.editProject.item_code = this.projects[index].item_code;
            this.editProject.item_class = this.projects[index].item_class;
            this.editProject.item_type = this.projects[index].item_type;
            this.editProject.major_category = this.projects[index].major_category;
            this.editProject.sub_category = this.projects[index].sub_category;
            this.editProject.is_expirable = this.projects[index].is_expirable;
            this.expirable_material = this.projects[index].is_expirable;
            this.editProject.item_description = this.projects[index].item_description;
            this.editProject.po_number = this.projects[index].po_number;
            this.editProject.po_date = this.projects[index].po_date;
            this.editProject.pr_number = this.projects[index].pr_number;
            this.editProject.pr_date = this.projects[index].pr_date;
            this.editProject.qty_order = this.projects[index].qty_order;
            this.editProject.qty_uom = this.projects[index].qty_uom;
            this.editProject.is_activated = this.Activator;
            this.editProject.unit_price = this.projects[index].unit_price;
            // this.editProject.mfg_date = this.projects[index].mfg_date;
            // this.editProject.expiration_date = this.projects[index].expiration_date;
            // this.editProject.expected_delivery = this.projects[index].expected_delivery;
            // this.editProject.actual_delivery = this.projects[index].actual_delivery;
            // this.editProject.actual_remaining_receiving = this.ActualRemaining;
            this.editProject.actual_remaining_receiving = this.projects[index].actual_remaining_receiving;
            this.editProject.received_by_QA = this.activeUser;
            // this.editProject.total_of_reject_mat = this.totalofReject.nativeElement.
            this.editProject.qcReceivingDate = this.ToDay;
            // this.editProject.received_by_QA = this.projects[index].received_by_QA;
            // this.editProject.status_of_reject_one = this.projects[index].status_of_reject_one;
            // this.editProject.status_of_reject_two = this.projects[index].status_of_reject_two;
            // this.editProject.status_of_reject_three = this.projects[index].status_of_reject_three;
            this.editProject.status_of_reject_one = this.StringNone;
            this.editProject.status_of_reject_two = this.StringNone;
            this.editProject.status_of_reject_three = this.StringNone;
            this.editProject.count_of_reject_one = this.Deactivator;
            this.editProject.count_of_reject_two = this.Deactivator;
            this.editProject.count_of_reject_three = this.Deactivator;
            this.editProject.total_of_reject_mat = this.Deactivator;
            //Section 1
            //A
            this.editProject.a_delivery_van_desc = this.projects[index].a_delivery_van_desc;
            // this.editProject.a_compliance = this.projects[index].a_compliance;
            // this.editProject.a_remarks = this.projects[index].a_remarks;
            //B
            this.editProject.b_cooling_system_desc = this.projects[index].b_cooling_system_desc;
            // this.editProject.b_compliance = this.projects[index].b_compliance;
            // this.editProject.b_remarks = this.projects[index].b_remarks;
            //C
            this.editProject.c_inner_walls_desc = this.projects[index].c_inner_walls_desc;
            // this.editProject.c_compliance = this.projects[index].c_compliance;
            // this.editProject.c_remarks = this.projects[index].c_remarks;
            //D
            this.editProject.d_plastic_curtains_desc = this.projects[index].d_plastic_curtains_desc;
            // this.editProject.d_compliance = this.projects[index].d_compliance;
            // this.editProject.d_remarks = this.projects[index].d_remarks;
            //E
            this.editProject.e_thereno_pest_desc = this.projects[index].e_thereno_pest_desc;
            // this.editProject.e_compliance = this.projects[index].e_compliance;
            // this.editProject.e_remarks = this.projects[index].e_remarks;
            //Section 2
            //A
            this.editProject.a_clean_company_dos = this.projects[index].a_clean_company_dos;
            // this.editProject.a_compliance_dos = this.projects[index].a_compliance_dos;
            // this.editProject.a_remarks_dos = this.projects[index].a_remarks_dos;
            //B
            this.editProject.b_delivery_staff_symptoms_dos = this.projects[index].b_delivery_staff_symptoms_dos;
            // this.editProject.b_compliance_dos = this.projects[index].b_compliance_dos;
            // this.editProject.b_remarks_dos = this.projects[index].b_remarks_dos;
            //C
            this.editProject.c_inner_walls_clean_dos = this.projects[index].c_inner_walls_clean_dos;
            // this.editProject.c_compliance_dos = this.projects[index].c_compliance_dos;
            // this.editProject.c_remarks_dos = this.projects[index].c_remarks_dos;
            //D
            this.editProject.d_plastic_curtains_dos = this.projects[index].d_plastic_curtains_dos;
            // this.editProject.d_compliance_dos = this.projects[index].d_compliance_dos;
            // this.editProject.d_remarks_dos = this.projects[index].d_remarks_dos;
            //E
            this.editProject.e_no_accessories_dos = this.projects[index].e_no_accessories_dos;
            // this.editProject.e_compliance_dos = this.projects[index].e_compliance_dos;
            // this.editProject.e_remarks_dos = this.projects[index].e_remarks_dos;
            //F
            this.editProject.f_no_pests_sightings_dos = this.projects[index].f_no_pests_sightings_dos;
            // this.editProject.f_compliance_dos = this.projects[index].f_compliance_dos;
            // this.editProject.f_remarks_dos = this.projects[index].f_remarks_dos;
            //Section 3
            //A
            this.editProject.a_pallet_crates_tres = this.projects[index].a_pallet_crates_tres;
            // this.editProject.a_compliance_tres = this.projects[index].a_compliance_tres;
            // this.editProject.a_remarks_tres = this.projects[index].a_remarks_tres;
            //B
            this.editProject.b_product_contamination_tres = this.projects[index].b_product_contamination_tres;
            // this.editProject.b_compliance_tres = this.projects[index].b_compliance_tres;
            // this.editProject.b_remarks_tres = this.projects[index].b_remarks_tres;
            //C
            this.editProject.c_uncessary_items_tres = this.projects[index].c_uncessary_items_tres;
            // this.editProject.c_compliance_tres = this.projects[index].c_compliance_tres;
            // this.editProject.c_remarks_tres = this.projects[index].c_remarks_tres;
            //D
            this.editProject.d_products_cover_tres = this.projects[index].d_products_cover_tres;
            // this.editProject.d_compliance_tres = this.projects[index].d_compliance_tres;
            // this.editProject.d_remarks_tres = this.projects[index].d_remarks_tres;
            //Serction 4
            //A
            this.editProject.a_certificate_coa_kwatro_desc = this.projects[index].a_certificate_coa_kwatro_desc;
            // this.editProject.a_compliance_kwatro = this.projects[index].a_compliance_kwatro;
            // this.editProject.a_remarks_kwatro = this.projects[index].a_remarks_kwatro;
            //B
            this.editProject.b_po_kwatro_desc = this.projects[index].b_po_kwatro_desc;
            // this.editProject.b_compliance_kwatro = this.projects[index].b_compliance_kwatro;
            // this.editProject.b_remarks_kwatro= this.projects[index].b_remarks_kwatro;
            //C
            this.editProject.c_msds_kwatro_desc = this.projects[index].c_msds_kwatro_desc;
            // this.editProject.c_compliance_kwatro = this.projects[index].c_compliance_kwatro;
            // this.editProject.c_remarks_kwatro= this.projects[index].c_remarks_kwatro;
            //D
            this.editProject.d_food_grade_desc = this.projects[index].d_food_grade_desc;
            // this.editProject.d_compliance_kwatro = this.projects[index].d_compliance_kwatro;
            // this.editProject.d_remarks_kwatro = this.projects[index].d_remarks_kwatro;
            //Section 5
            //A
            this.editProject.a_qty_received_singko_singko = this.projects[index].a_qty_received_singko_singko;
            // this.editProject.a_compliance_singko = this.projects[index].a_compliance_singko;
            // this.editProject.a_remarks_singko = this.projects[index].a_remarks_singko;
            //B
            this.editProject.b_mfg_date_desc_singko = this.projects[index].b_mfg_date_desc_singko;
            // this.editProject.b_compliance_singko = this.projects[index].b_compliance_singko;
            // this.editProject.b_remarks_singko = this.projects[index].b_remarks_singko;
            //C
            this.editProject.c_expirydate_desc_singko = this.projects[index].c_expirydate_desc_singko;
            // this.editProject.c_compliance_singko = this.projects[index].c_compliance_singko;
            // this.editProject.c_remarks_singko = this.projects[index].c_remarks_singko;
            //D
            this.editProject.d_packaging_desc_singko = this.projects[index].d_packaging_desc_singko;
            //  this.editProject.d_compliance_singko = this.projects[index].d_compliance_singko;
            //  this.editProject.d_remarks_singko = this.projects[index].d_remarks_singko;
            //E
            this.editProject.e_no_contaminants_desc_singko = this.projects[index].e_no_contaminants_desc_singko;
            //  this.editProject.e_compliance_singko = this.projects[index].e_compliance_singko;
            //  this.editProject.e_remarks_singko = this.projects[index].e_remarks_singko;
            //F
            this.editProject.f_qtyrejected_desc_singko = this.projects[index].f_qtyrejected_desc_singko;
            //  this.editProject.f_compliance_singko = this.projects[index].f_compliance_singko;
            //  this.editProject.f_remarks_singko = this.projects[index].f_remarks_singko;
            //G
            this.editProject.g_rejected_reason_desc_singko = this.projects[index].g_rejected_reason_desc_singko;
            //  this.editProject.g_compliance_singko = this.projects[index].g_compliance_singko;
            //  this.editProject.g_remarks_singko = this.projects[index].g_remarks_singko;
            //H
            this.editProject.h_lab_sample_desc_singko = this.projects[index].h_lab_sample_desc_singko;
            //  this.editProject.h_compliance_singko = this.projects[index].h_compliance_singko;
            //  this.editProject.h_remarks_singko = this.projects[index].h_remarks_singko;
            jquery__WEBPACK_IMPORTED_MODULE_0__("txtexpected_delivery").val("");
            //Validation of EXPIRATION MATERIALS  
            if (this.expirable_material == "0") {
                this.ExpiryDateChild.nativeElement.value = moment__WEBPACK_IMPORTED_MODULE_4__().format('MM/D/YYYY');
                jquery__WEBPACK_IMPORTED_MODULE_0__("#select_expiry").hide();
                jquery__WEBPACK_IMPORTED_MODULE_0__("#txtEditexpiration_date").hide();
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_0__("#select_expiry").show();
                jquery__WEBPACK_IMPORTED_MODULE_0__("#txtEditexpiration_date").show();
            }
            this.editIndex = index;
        }, 100);
    }
    NearlyExpiryValidation() {
        // JavaScript program to illustrate 
        // calculation of no. of days between two date 
        // To set two dates to two variables
        var date1 = new Date(jquery__WEBPACK_IMPORTED_MODULE_0__('#txtEditReceivingDate').val());
        var date2 = new Date(jquery__WEBPACK_IMPORTED_MODULE_0__('#txtEditexpiration_date').val());
        // To calculate the time difference of two dates
        var Difference_In_Time = date2.getTime() - date1.getTime();
        // To calculate the no. of days between two dates
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        //To display the final no. of days (result)
        document.write("Total number of days between dates  <br>"
            + date1 + "<br> and <br>"
            + date2 + " is: <br> "
            + Difference_In_Days);
        return;
    }
    onUpdateClick() {
        //Computation Start Simang
        this.allowableqty = this.TotalAllowablePercentage.nativeElement.value;
        this.actualqty = this.ActualDeliveryChild.nativeElement.value;
        var TotalAllowablePercentage = this.TotalAllowablePercentage.nativeElement.value;
        var ActualDelivered = this.ActualDeliveryChild.nativeElement.value;
        var aplenght = jquery__WEBPACK_IMPORTED_MODULE_0__('#Allowable_Percentage_id').val().length;
        jquery__WEBPACK_IMPORTED_MODULE_0__('#characters').text(aplenght);
        var adlength = jquery__WEBPACK_IMPORTED_MODULE_0__('#actual_delivery_output').val().length;
        jquery__WEBPACK_IMPORTED_MODULE_0__('#characters').text(adlength);
        if (aplenght > adlength) {
            ///This is the minimun qty set pin for 10, 100, 999
            if (Number(TotalAllowablePercentage) >= Number(ActualDelivered)) {
            }
            else {
                this.AllowablePercentageExceed();
                // alert("Pekwangs");
                jquery__WEBPACK_IMPORTED_MODULE_0__('#actual_delivery_output').val(""); ///LLL
                return;
            }
        }
        else {
            // alert("MINs ");
            //This is for large scale validation for thousand's qty 
            if (this.allowableqty < this.actualqty) {
                this.AllowablePercentageExceed();
                jquery__WEBPACK_IMPORTED_MODULE_0__('#actual_delivery_output').val(""); //Additional Data on 12/6/2021
                return;
            }
        }
        // return;
        //End of Computation Summary
        // JavaScript program to illustrate 
        // calculation of no. of days between two date 
        // To set two dates to two variables
        var date1 = new Date(jquery__WEBPACK_IMPORTED_MODULE_0__('#txtEditReceivingDate').val());
        var date2 = new Date(jquery__WEBPACK_IMPORTED_MODULE_0__('#txtEditexpiration_date').val());
        // To calculate the time difference of two dates
        var Difference_In_Time = date2.getTime() - date1.getTime();
        // To calculate the no. of days between two dates
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        //To display the final no. of days (result)
        // document.write("Total number of days between dates  <br>"
        //                + date1 + "<br> and <br>" 
        //                + date2 + " is: <br> " 
        //                + Difference_In_Days);
        var ExpiryDaysActivated = this.ActiveNearlyExpirySetpoint.nativeElement.value;
        //Laarnie
        if (this.totalofReject.nativeElement.value == this.confirmReject.nativeElement.value) {
        }
        else {
            this.totalRejectConfirmationField();
            this.rejectIsnotMactchSpanTag.nativeElement.innerHTML = "No. of reject is not match";
            this.confirmReject.nativeElement.focus();
            return;
        }
        var ItemDesc = this.ItemDescription.nativeElement.value;
        // totalRejectConfirmationField();
        if (this.editForm.valid) {
            //Start of Questioning in Non Expirable Raw Mater Validation with Else
            if (this.expirable_material == "0") {
                //Start
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: 'Are you sure you want to received the item ?',
                    text: ItemDesc,
                    icon: 'info',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        if (this.editForm.valid) {
                            this.UpdateClickDetails();
                        }
                        else {
                            this.FieldOutRequiredField();
                        }
                    }
                });
                //End 
            }
            else {
                if (Difference_In_Days < ExpiryDaysActivated) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                        title: 'Are you sure you want to received the item expiry ' + Difference_In_Days + ' Days?',
                        text: ItemDesc,
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            if (this.editForm.valid) {
                                this.UpdateClickDetails();
                            }
                            else {
                                this.FieldOutRequiredField();
                            }
                        }
                    });
                }
                else {
                    //Addition of  60 === 60 tickett
                    if (Difference_In_Days == ExpiryDaysActivated) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                            title: 'Are you sure you want to received the item expiry  ' + Difference_In_Days + ' Days?',
                            text: ItemDesc,
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                if (this.editForm.valid) {
                                    this.UpdateClickDetails();
                                }
                                else {
                                    this.FieldOutRequiredField();
                                }
                            }
                        });
                    }
                    else {
                        //Start
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                            title: 'Are you sure you want to received the item ?',
                            text: ItemDesc,
                            icon: 'info',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes!'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                if (this.editForm.valid) {
                                    this.UpdateClickDetails();
                                }
                                else {
                                    this.FieldOutRequiredField();
                                }
                            }
                        });
                        //End 
                    }
                    //End Supporting top
                }
                //Expiry Validaation
            }
        }
        else {
            this.FieldOutRequiredField();
        }
    }
    //Singian
    //Computaion 
    ComputeRemainingQty() {
        const ActualDelivered = this.ActualDeliveryChild.nativeElement.value;
        const QtyOrder = this.QtyOrdered.nativeElement.value;
        const ActualRemainingReceiving = this.ActualRemainingReceiving.nativeElement.value;
        const totalRejection = this.confirmReject.nativeElement.value;
        if (QtyOrder == ActualRemainingReceiving) {
            // this.ActualRemaining = QtyOrder - ActualDelivered;
            // this.ActualRemaining = ActualRemainingReceiving - totalRejection;
            this.ActualRemaining = ActualDelivered - totalRejection;
            this.ActualRemaining = ActualRemainingReceiving - this.ActualRemaining;
        }
        else {
            // this.ActualRemaining = ActualRemainingReceiving - ActualDelivered;
            // this.ActualRemaining = ActualRemainingReceiving - totalRejection;
            this.ActualRemaining = ActualDelivered - totalRejection;
            this.ActualRemaining = ActualRemainingReceiving - this.ActualRemaining;
        }
    }
    UpdateClickDetails() {
        if (this.editForm.valid) {
            //Additional Parse Data Master
            // this.ActualRemaining = 450;
            this.ComputeRemainingQty();
            this.editProject.actual_remaining_receiving = this.ActualRemaining;
            //Variable
            var totalRejection = this.confirmReject.nativeElement.value;
            var ActualDelivered = this.ActualDeliveryChild.nativeElement.value;
            if (totalRejection == 0) {
            }
            else {
                totalRejection = ActualDelivered - totalRejection;
                this.editProject.actual_delivery = totalRejection;
            }
            //End of Variable
            this.projectsService.updateProject(this.editProject).subscribe((response) => {
                var p = new src_app_models_project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
                p.projectID = response.projectID;
                p.projectName = response.projectName;
                p.dateOfStart = response.dateOfStart;
                p.teamSize = response.teamSize;
                p.clientLocation = response.clientLocation;
                p.active = response.active;
                p.clientLocationID = response.clientLocationID;
                p.status = response.status;
                p.supplier = response.supplier;
                p.item_code = response.item_code;
                p.item_description = response.item_description;
                p.po_number = response.po_number;
                p.po_date = response.po_date;
                p.pr_number = response.pr_number;
                p.pr_date = response.pr_date;
                p.qty_order = response.qty_order;
                p.qty_uom = response.qty_uom;
                p.mfg_date = response.mfg_date;
                p.expiration_date = response.expiration_date;
                p.expected_delivery = response.expected_delivery;
                p.actual_delivery = response.actual_delivery;
                p.expected_delivery = response.expected_delivery;
                // this.ActualRemaining = response.actual_remaining_receiving;
                // p.received_by_QA = response.received_by_QA;
                // // this.activeUser = response.received_by_QA;
                p.status_of_reject_one = response.status_of_reject_one;
                p.status_of_reject_two = response.status_of_reject_two;
                p.status_of_reject_three = response.status_of_reject_three;
                p.count_of_reject_one = response.count_of_reject_one;
                p.count_of_reject_two = response.count_of_reject_two;
                p.count_of_reject_three = response.count_of_reject_three;
                p.total_of_reject_mat = response.total_of_reject_mat;
                //Section 1
                //A
                p.a_delivery_van_desc = response.a_delivery_van_desc;
                p.a_compliance = response.a_compliance;
                p.a_remarks = response.a_remarks;
                //B
                p.b_cooling_system_desc = response.b_cooling_system_desc;
                p.b_compliance = response.b_compliance;
                p.b_remarks = response.b_remarks;
                //C
                p.c_inner_walls_desc = response.c_inner_walls_desc;
                p.c_compliance = response.c_compliance;
                p.c_remarks = response.c_remarks;
                //D
                p.d_plastic_curtains_desc = response.d_plastic_curtains_desc;
                p.d_compliance = response.d_compliance;
                p.d_remarks = response.d_remarks;
                //E
                p.e_thereno_pest_desc = response.e_thereno_pest_desc;
                p.e_compliance = response.e_compliance;
                p.e_remarks = response.e_remarks;
                //Section 2
                //A
                p.a_clean_company_dos = response.a_clean_company_dos;
                p.a_compliance_dos = response.a_compliance_dos;
                p.a_remarks_dos = response.a_remarks_dos;
                //B
                p.b_delivery_staff_symptoms_dos = response.b_delivery_staff_symptoms_dos;
                p.b_compliance_dos = response.b_compliance_dos;
                p.b_remarks_dos = response.b_remarks_dos;
                //C
                p.c_inner_walls_clean_dos = response.c_inner_walls_clean_dos;
                p.c_compliance_dos = response.c_compliance_dos;
                p.c_remarks_dos = response.c_remarks_dos;
                //D
                p.d_plastic_curtains_dos = response.d_plastic_curtains_dos;
                p.d_compliance_dos = response.d_compliance_dos;
                p.d_remarks_dos = response.d_remarks_dos;
                //E
                p.e_no_accessories_dos = response.e_no_accessories_dos;
                p.e_compliance_dos = response.e_compliance_dos;
                p.e_remarks_dos = response.e_remarks_dos;
                //F
                p.f_compliance_dos = response.f_compliance_dos;
                p.f_no_pests_sightings_dos = response.f_no_pests_sightings_dos;
                p.f_remarks_dos = response.f_remarks_dos;
                //Section 3 
                //A
                p.a_pallet_crates_tres = response.a_pallet_crates_tres;
                p.a_compliance_tres = response.a_compliance_tres;
                p.a_remarks_tres = response.a_remarks_tres;
                //B
                p.b_product_contamination_tres = response.b_product_contamination_tres;
                p.b_compliance_tres = response.b_compliance_tres;
                p.b_remarks_tres = response.b_remarks_tres;
                //C
                p.c_uncessary_items_tres = response.c_uncessary_items_tres;
                p.c_compliance_tres = response.c_compliance_tres;
                p.c_remarks_tres = response.c_remarks_tres;
                //D
                p.d_products_cover_tres = response.d_products_cover_tres;
                p.d_compliance_tres = response.d_compliance_tres;
                p.d_remarks_tres = response.d_remarks_tres;
                //Section 4
                //A
                p.a_certificate_coa_kwatro_desc = response.a_certificate_coa_kwatro_desc;
                p.a_compliance_kwatro = response.a_compliance_kwatro;
                p.a_remarks_kwatro = response.a_remarks_kwatro;
                //B
                p.b_po_kwatro_desc = response.b_po_kwatro_desc;
                p.b_compliance_kwatro = response.b_compliance_kwatro;
                p.b_remarks_kwatro = response.b_remarks_kwatro;
                //C
                p.c_msds_kwatro_desc = response.c_msds_kwatro_desc;
                p.c_compliance_kwatro = response.c_compliance_kwatro;
                p.c_remarks_kwatro = response.c_remarks_kwatro;
                //D
                p.d_food_grade_desc = response.d_food_grade_desc;
                p.d_compliance_kwatro = response.d_compliance_kwatro;
                p.d_remarks_kwatro = response.d_remarks_kwatro;
                //Section 5
                //A
                p.a_qty_received_singko_singko = response.a_qty_received_singko_singko;
                p.a_compliance_singko = response.a_compliance_singko;
                p.a_remarks_singko = response.a_remarks_singko;
                //B
                p.b_mfg_date_desc_singko = response.b_mfg_date_desc_singko;
                p.b_compliance_singko = response.b_compliance_singko;
                p.b_remarks_singko = response.b_remarks_singko;
                //C
                p.c_expirydate_desc_singko = response.c_expirydate_desc_singko;
                p.c_compliance_singko = response.c_compliance_singko;
                p.c_remarks_singko = response.c_remarks_singko;
                //D
                p.d_packaging_desc_singko = response.d_packaging_desc_singko;
                p.d_compliance_singko = response.d_compliance_singko;
                p.d_remarks_singko = response.d_remarks_singko;
                //E
                p.e_no_contaminants_desc_singko = response.e_no_contaminants_desc_singko;
                p.e_compliance_singko = response.e_compliance_singko;
                p.e_remarks_singko = response.e_remarks_singko;
                //F
                p.f_qtyrejected_desc_singko = response.f_qtyrejected_desc_singko;
                p.f_compliance_singko = response.f_compliance_singko;
                p.f_remarks_singko = response.f_remarks_singko;
                //G
                p.g_rejected_reason_desc_singko = response.g_rejected_reason_desc_singko;
                p.g_compliance_singko = response.g_compliance_singko;
                p.g_remarks_singko = response.g_remarks_singko;
                //H
                p.h_lab_sample_desc_singko = response.h_lab_sample_desc_singko;
                p.h_compliance_singko = response.h_compliance_singko;
                p.h_remarks_singko = response.h_remarks_singko;
                // this.received_by.nativeElement.value = this.loginService.currentUserName;
                this.projects[this.editIndex] = p;
                this.InsertANewPartialReceiving();
                this.InsertPartialDatainMasterTable();
                this.editProject.projectID = null;
                this.editProject.projectName = null;
                this.editProject.dateOfStart = null;
                this.editProject.teamSize = null;
                this.editProject.supplier = null;
                this.editProject.active = false;
                this.editProject.clientLocationID = null;
                this.editProject.status = null;
                this.editProject.item_code = null;
                this.editProject.item_description = null;
                this.editProject.po_number = null;
                this.editProject.po_date = null;
                this.editProject.pr_number = null;
                this.editProject.pr_date = null;
                this.editProject.qty_order = null;
                this.editProject.qty_uom = null;
                this.editProject.mfg_date = null;
                this.editProject.expiration_date = null;
                this.editProject.expected_delivery = null;
                this.editProject.actual_delivery = null;
                this.editProject.actual_remaining_receiving = null;
                this.editProject.received_by_QA = null;
                this.editProject.status_of_reject_one = null;
                this.editProject.status_of_reject_two = null;
                this.editProject.status_of_reject_three = null;
                this.editProject.count_of_reject_one = null;
                this.editProject.count_of_reject_two = null;
                this.editProject.count_of_reject_three = null;
                this.editProject.total_of_reject_mat = null;
                //Section A
                //A
                this.editProject.a_delivery_van_desc = null;
                this.editProject.a_compliance = null;
                this.editProject.a_remarks = null;
                //B
                this.editProject.b_cooling_system_desc = null;
                this.editProject.b_compliance = null;
                this.editProject.b_remarks = null;
                //C
                this.editProject.c_inner_walls_desc = null;
                this.editProject.c_compliance = null;
                this.editProject.c_remarks = null;
                //D
                this.editProject.d_plastic_curtains_desc = null;
                this.editProject.d_compliance = null;
                this.editProject.d_remarks = null;
                //E
                this.editProject.e_thereno_pest_desc = null;
                this.editProject.e_compliance = null;
                this.editProject.e_remarks = null;
                //Section 2
                //A
                this.editProject.a_clean_company_dos = null;
                this.editProject.a_compliance_dos = null;
                this.editProject.a_remarks_dos = null;
                //B
                this.editProject.b_delivery_staff_symptoms_dos = null;
                this.editProject.b_compliance_dos = null;
                this.editProject.b_remarks_dos = null;
                //C
                this.editProject.c_inner_walls_clean_dos = null;
                this.editProject.c_compliance_dos = null;
                this.editProject.c_remarks_dos = null;
                //D
                this.editProject.d_plastic_curtains_dos = null;
                this.editProject.d_compliance_dos = null;
                this.editProject.d_remarks_dos = null;
                //E
                this.editProject.e_no_accessories_dos = null;
                this.editProject.e_compliance_dos = null;
                this.editProject.e_remarks_dos = null;
                //F
                this.editProject.f_compliance_dos = null;
                this.editProject.f_no_pests_sightings_dos = null;
                this.editProject.f_remarks_dos = null;
                //Section 3
                //A
                this.editProject.a_pallet_crates_tres = null;
                this.editProject.a_compliance_tres = null;
                this.editProject.a_remarks_tres = null;
                //B
                this.editProject.b_product_contamination_tres = null;
                this.editProject.b_compliance_tres = null;
                this.editProject.b_remarks_tres = null;
                //C
                this.editProject.c_uncessary_items_tres = null;
                this.editProject.c_compliance_tres = null;
                this.editProject.c_remarks_tres = null;
                //D
                this.editProject.d_products_cover_tres = null;
                this.editProject.d_compliance_tres = null;
                this.editProject.d_remarks_tres = null;
                //Section 4
                //A
                this.editProject.a_certificate_coa_kwatro_desc = null;
                this.editProject.a_compliance_kwatro = null;
                this.editProject.a_remarks_kwatro = null;
                //B
                this.editProject.b_po_kwatro_desc = null;
                this.editProject.b_compliance_kwatro = null;
                this.editProject.b_remarks_kwatro = null;
                //C
                this.editProject.c_msds_kwatro_desc = null;
                this.editProject.c_compliance_kwatro = null;
                this.editProject.c_remarks_kwatro = null;
                //D
                this.editProject.d_food_grade_desc = null;
                this.editProject.d_compliance_kwatro = null;
                this.editProject.d_remarks_kwatro = null;
                //Section 5
                //A
                this.editProject.a_qty_received_singko_singko = null;
                this.editProject.a_compliance_singko = null;
                this.editProject.a_remarks_singko = null;
                //B
                this.editProject.b_mfg_date_desc_singko = null;
                this.editProject.b_compliance_singko = null;
                this.editProject.b_remarks_singko = null;
                //C
                this.editProject.c_expirydate_desc_singko = null;
                this.editProject.c_compliance_singko = null;
                this.editProject.c_remarks_singko = null;
                //D
                this.editProject.d_packaging_desc_singko = null;
                this.editProject.d_compliance_singko = null;
                this.editProject.d_remarks_singko = null;
                //E
                this.editProject.e_no_contaminants_desc_singko = null;
                this.editProject.e_compliance_singko = null;
                this.editProject.e_remarks_singko = null;
                //F
                this.editProject.f_qtyrejected_desc_singko = null;
                this.editProject.f_compliance_singko = null;
                this.editProject.f_remarks_singko = null;
                //G
                this.editProject.g_rejected_reason_desc_singko = null;
                this.editProject.g_compliance_singko = null;
                this.editProject.g_remarks_singko = null;
                //H
                this.editProject.h_lab_sample_desc_singko = null;
                this.editProject.h_compliance_singko = null;
                this.editProject.h_remarks_singko = null;
                //  this.InsertANewPartialReceiving();
                // this.showUpdatingSuccess();
                this.showReceivedSuccess();
                this.ngOnInit();
                jquery__WEBPACK_IMPORTED_MODULE_0__("#editFormCancel").trigger("click");
            }, (error) => {
                console.log(error);
            });
        }
    }
    InsertPartialDatainMasterTable() {
        this.editProject.is_activated = this.PartialEntry;
        this.projectsService.insertProject(this.editProject).subscribe((response) => {
            //Add Project to Grid
            var p = new src_app_models_project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
            p.projectID = response.projectID;
            p.projectName = response.projectName;
            p.dateOfStart = response.dateOfStart;
            p.teamSize = response.teamSize;
            p.clientLocation = response.clientLocation;
            p.active = response.active;
            p.clientLocationID = response.clientLocationID;
            p.status = response.status;
            p.is_activated = response.is_activated;
            p.supplier = response.supplier;
            p.item_code = response.item_code;
            p.po_number = response.po_number;
            p.po_date = response.po_date;
            p.pr_number = response.pr_number;
            p.pr_date = response.pr_date;
            p.qty_order = response.qty_order;
            p.qty_uom = response.qty_uom;
            p.mfg_date = response.mfg_date;
            p.expiration_date = response.expiration_date;
            p.expected_delivery = response.expected_delivery;
            p.actual_delivery = response.actual_delivery;
            p.actual_remaining_receiving = response.actual_remaining_receiving;
            p.received_by_QA = response.received_by_QA;
            this.projects.push(p);
            //Clear New Project Dialog - TextBoxes
        }, (error) => {
            console.log(error);
        });
    }
    //Insert as Partial
    InsertANewPartialReceiving() {
        this.editProject.qcReceivingDate = this.ToDay; //for Secured Data  Flow
        // To set two dates to two variables
        var date1 = new Date(jquery__WEBPACK_IMPORTED_MODULE_0__('#txtEditReceivingDate').val());
        var date2 = new Date(jquery__WEBPACK_IMPORTED_MODULE_0__('#txtEditexpiration_date').val());
        // To calculate the time difference of two dates
        var Difference_In_Time = date2.getTime() - date1.getTime();
        // To calculate the no. of days between two dates
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        var ExpiryDaysActivated = this.ActiveNearlyExpirySetpoint.nativeElement.value;
        if (this.expirable_material == "0") {
            this.editProject.is_expired = '0';
        }
        else {
            //Start
            if (Difference_In_Days == ExpiryDaysActivated) {
                this.editProject.is_expired = '1';
            }
            else {
                if (Difference_In_Days < ExpiryDaysActivated) {
                    this.editProject.is_expired = '1';
                }
                else {
                    this.editProject.is_expired = '0';
                }
            }
            //End
        }
        //Declaration for Partial Entry have a Dynamic Set-point
        var ExpiryDays = this.ActiveNearlyExpirySetpoint.nativeElement.value;
        this.editProject.days_expiry_setup = ExpiryDays;
        // //var Graph Singian
        // var RejectCount  = this.totalofReject.nativeElement.value;
        // var ActualDeliverd = this.ActualDeliveryChild.nativeElement.value;
        // var ComputationReject = ActualDeliverd - RejectCount;
        // this.editProject.actual_delivery = ComputationReject.toString();
        if (this.editForm.valid) {
            this.editProject.projectID = Math.floor((Math.random() * 1000000) + 1);
            this.projectsPartialPoService.insertProject2(this.editProject).subscribe((response) => {
                var p = new src_app_models_project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
                p.primaryID = response.primaryID;
                // p.projectID = response.projectID;
                p.projectName = response.projectName;
                p.dateOfStart = response.dateOfStart;
                p.teamSize = response.teamSize;
                p.clientLocation = response.clientLocation;
                p.active = response.active;
                p.clientLocationID = response.clientLocationID;
                p.status = response.status;
                p.supplier = response.supplier;
                p.item_code = response.item_code;
                p.item_description = response.item_description;
                p.po_number = response.po_number;
                p.po_date = response.po_date;
                p.pr_number = response.pr_number;
                p.pr_date = response.pr_date;
                p.qty_order = response.qty_order;
                p.qty_uom = response.qty_uom;
                p.mfg_date = response.mfg_date;
                p.expiration_date = response.expiration_date;
                p.expected_delivery = response.expected_delivery;
                p.actual_delivery = response.actual_delivery;
                p.expected_delivery = response.expected_delivery;
                //  p.actual_remaining_receiving = response.actual_remaining_receiving;
                // p.received_by_QA = response.received_by_QA;
                // // this.activeUser = response.received_by_QA;
                p.status_of_reject_one = response.status_of_reject_one;
                p.status_of_reject_two = response.status_of_reject_two;
                p.status_of_reject_three = response.status_of_reject_three;
                p.count_of_reject_one = response.count_of_reject_one;
                p.count_of_reject_two = response.count_of_reject_two;
                p.count_of_reject_three = response.count_of_reject_three;
                p.total_of_reject_mat = response.total_of_reject_mat;
                //Section 1
                //A
                p.a_delivery_van_desc = response.a_delivery_van_desc;
                p.a_compliance = response.a_compliance;
                p.a_remarks = response.a_remarks;
                //B
                p.b_cooling_system_desc = response.b_cooling_system_desc;
                p.b_compliance = response.b_compliance;
                p.b_remarks = response.b_remarks;
                //C
                p.c_inner_walls_desc = response.c_inner_walls_desc;
                p.c_compliance = response.c_compliance;
                p.c_remarks = response.c_remarks;
                //D
                p.d_plastic_curtains_desc = response.d_plastic_curtains_desc;
                p.d_compliance = response.d_compliance;
                p.d_remarks = response.d_remarks;
                //E
                p.e_thereno_pest_desc = response.e_thereno_pest_desc;
                p.e_compliance = response.e_compliance;
                p.e_remarks = response.e_remarks;
                //Section 2
                //A
                p.a_clean_company_dos = response.a_clean_company_dos;
                p.a_compliance_dos = response.a_compliance_dos;
                p.a_remarks_dos = response.a_remarks_dos;
                //B
                p.b_delivery_staff_symptoms_dos = response.b_delivery_staff_symptoms_dos;
                p.b_compliance_dos = response.b_compliance_dos;
                p.b_remarks_dos = response.b_remarks_dos;
                //C
                p.c_inner_walls_clean_dos = response.c_inner_walls_clean_dos;
                p.c_compliance_dos = response.c_compliance_dos;
                p.c_remarks_dos = response.c_remarks_dos;
                //D
                p.d_plastic_curtains_dos = response.d_plastic_curtains_dos;
                p.d_compliance_dos = response.d_compliance_dos;
                p.d_remarks_dos = response.d_remarks_dos;
                //E
                p.e_no_accessories_dos = response.e_no_accessories_dos;
                p.e_compliance_dos = response.e_compliance_dos;
                p.e_remarks_dos = response.e_remarks_dos;
                //F
                p.f_compliance_dos = response.f_compliance_dos;
                p.f_no_pests_sightings_dos = response.f_no_pests_sightings_dos;
                p.f_remarks_dos = response.f_remarks_dos;
                //Section 3 
                //A
                p.a_pallet_crates_tres = response.a_pallet_crates_tres;
                p.a_compliance_tres = response.a_compliance_tres;
                p.a_remarks_tres = response.a_remarks_tres;
                //B
                p.b_product_contamination_tres = response.b_product_contamination_tres;
                p.b_compliance_tres = response.b_compliance_tres;
                p.b_remarks_tres = response.b_remarks_tres;
                //C
                p.c_uncessary_items_tres = response.c_uncessary_items_tres;
                p.c_compliance_tres = response.c_compliance_tres;
                p.c_remarks_tres = response.c_remarks_tres;
                //D
                p.d_products_cover_tres = response.d_products_cover_tres;
                p.d_compliance_tres = response.d_compliance_tres;
                p.d_remarks_tres = response.d_remarks_tres;
                //Section 4
                //A
                p.a_certificate_coa_kwatro_desc = response.a_certificate_coa_kwatro_desc;
                p.a_compliance_kwatro = response.a_compliance_kwatro;
                p.a_remarks_kwatro = response.a_remarks_kwatro;
                //B
                p.b_po_kwatro_desc = response.b_po_kwatro_desc;
                p.b_compliance_kwatro = response.b_compliance_kwatro;
                p.b_remarks_kwatro = response.b_remarks_kwatro;
                //C
                p.c_msds_kwatro_desc = response.c_msds_kwatro_desc;
                p.c_compliance_kwatro = response.c_compliance_kwatro;
                p.c_remarks_kwatro = response.c_remarks_kwatro;
                //D
                p.d_food_grade_desc = response.d_food_grade_desc;
                p.d_compliance_kwatro = response.d_compliance_kwatro;
                p.d_remarks_kwatro = response.d_remarks_kwatro;
                //Section 5
                //A
                p.a_qty_received_singko_singko = response.a_qty_received_singko_singko;
                p.a_compliance_singko = response.a_compliance_singko;
                p.a_remarks_singko = response.a_remarks_singko;
                //B
                p.b_mfg_date_desc_singko = response.b_mfg_date_desc_singko;
                p.b_compliance_singko = response.b_compliance_singko;
                p.b_remarks_singko = response.b_remarks_singko;
                //C
                p.c_expirydate_desc_singko = response.c_expirydate_desc_singko;
                p.c_compliance_singko = response.c_compliance_singko;
                p.c_remarks_singko = response.c_remarks_singko;
                //D
                p.d_packaging_desc_singko = response.d_packaging_desc_singko;
                p.d_compliance_singko = response.d_compliance_singko;
                p.d_remarks_singko = response.d_remarks_singko;
                //E
                p.e_no_contaminants_desc_singko = response.e_no_contaminants_desc_singko;
                p.e_compliance_singko = response.e_compliance_singko;
                p.e_remarks_singko = response.e_remarks_singko;
                //F
                p.f_qtyrejected_desc_singko = response.f_qtyrejected_desc_singko;
                p.f_compliance_singko = response.f_compliance_singko;
                p.f_remarks_singko = response.f_remarks_singko;
                //G
                p.g_rejected_reason_desc_singko = response.g_rejected_reason_desc_singko;
                p.g_compliance_singko = response.g_compliance_singko;
                p.g_remarks_singko = response.g_remarks_singko;
                //H
                p.h_lab_sample_desc_singko = response.h_lab_sample_desc_singko;
                p.h_compliance_singko = response.h_compliance_singko;
                p.h_remarks_singko = response.h_remarks_singko;
                p.days_expiry_setup = response.days_expiry_setup;
                p.is_expired = response.is_expired;
                // this.received_by.nativeElement.value = this.loginService.currentUserName;
                //  this.projects[this.editIndex] = p;
                this.projects.push(p);
            }, (error) => {
                console.log(error);
            });
        }
    }
    UpdateSweetAlertMessage() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Updated!', 'Your data has been updated.', 'success');
    }
    ComplianceSectionA1() {
        this.editProject.a_remarks = " ";
        this.remarksSectionA1.nativeElement.disabled = true;
        this.remarksSectionA1.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionA1() {
        this.editProject.a_remarks = "";
        this.remarksSectionA1.nativeElement.disabled = false;
        this.remarksSectionA1.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line
    ComplianceSectionA2() {
        this.editProject.b_remarks = " ";
        this.remarksSectionA2.nativeElement.disabled = true;
        this.remarksSectionA2.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionA2() {
        this.editProject.b_remarks = "";
        this.remarksSectionA2.nativeElement.disabled = false;
        this.remarksSectionA2.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line
    ComplianceSectionA3() {
        this.editProject.c_remarks = " ";
        this.remarksSectionA3.nativeElement.disabled = true;
        this.remarksSectionA3.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionA3() {
        this.editProject.c_remarks = "";
        this.remarksSectionA3.nativeElement.disabled = false;
        this.remarksSectionA3.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line
    ComplianceSectionA4() {
        this.editProject.d_remarks = " ";
        this.remarksSectionA4.nativeElement.disabled = true;
        this.remarksSectionA4.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionA4() {
        this.editProject.d_remarks = "";
        this.remarksSectionA4.nativeElement.disabled = false;
        this.remarksSectionA4.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line
    ComplianceSectionA5() {
        this.editProject.e_remarks = " ";
        this.remarksSectionA5.nativeElement.disabled = true;
        this.remarksSectionA5.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionA5() {
        this.editProject.e_remarks = "";
        this.remarksSectionA5.nativeElement.disabled = false;
        this.remarksSectionA5.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Section 2
    ComplianceSectionB1() {
        this.editProject.a_remarks_dos = " ";
        this.remarksSectionB1.nativeElement.disabled = true;
        this.remarksSectionB1.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionB1() {
        this.editProject.a_remarks_dos = "";
        this.remarksSectionB1.nativeElement.disabled = false;
        this.remarksSectionB1.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line
    ComplianceSectionB2() {
        this.editProject.b_remarks_dos = " ";
        this.remarksSectionB2.nativeElement.disabled = true;
        this.remarksSectionB2.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionB2() {
        this.editProject.b_remarks_dos = "";
        this.remarksSectionB2.nativeElement.disabled = false;
        this.remarksSectionB2.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line
    ComplianceSectionB3() {
        this.editProject.c_remarks_dos = " ";
        this.remarksSectionB3.nativeElement.disabled = true;
        this.remarksSectionB3.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionB3() {
        this.editProject.c_remarks_dos = "";
        this.remarksSectionB3.nativeElement.disabled = false;
        this.remarksSectionB3.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line
    ComplianceSectionB4() {
        this.editProject.d_remarks_dos = " ";
        this.remarksSectionB4.nativeElement.disabled = true;
        this.remarksSectionB4.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionB4() {
        this.editProject.d_remarks_dos = "";
        this.remarksSectionB4.nativeElement.disabled = false;
        this.remarksSectionB4.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line
    ComplianceSectionB5() {
        this.editProject.e_remarks_dos = " ";
        this.remarksSectionB5.nativeElement.disabled = true;
        this.remarksSectionB5.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionB5() {
        this.editProject.e_remarks_dos = "";
        this.remarksSectionB5.nativeElement.disabled = false;
        this.remarksSectionB5.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line
    ComplianceSectionB6() {
        this.editProject.f_remarks_dos = " ";
        this.remarksSectionB6.nativeElement.disabled = true;
        this.remarksSectionB6.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionB6() {
        this.editProject.f_remarks_dos = "";
        this.remarksSectionB6.nativeElement.disabled = false;
        this.remarksSectionB6.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line
    ComplianceSectionC1() {
        this.editProject.a_remarks_tres = " ";
        this.remarksSectionC1.nativeElement.disabled = true;
        this.remarksSectionC1.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionC1() {
        this.editProject.a_remarks_tres = "";
        this.remarksSectionC1.nativeElement.disabled = false;
        this.remarksSectionC1.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line
    ComplianceSectionC2() {
        this.editProject.b_remarks_tres = " ";
        this.remarksSectionC2.nativeElement.disabled = true;
        this.remarksSectionC2.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionC2() {
        this.editProject.b_remarks_tres = "";
        this.remarksSectionC2.nativeElement.disabled = false;
        this.remarksSectionC2.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line
    ComplianceSectionC3() {
        this.editProject.c_remarks_tres = " ";
        this.remarksSectionC3.nativeElement.disabled = true;
        this.remarksSectionC3.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionC3() {
        this.editProject.c_remarks_tres = "";
        this.remarksSectionC3.nativeElement.disabled = false;
        this.remarksSectionC3.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line
    ComplianceSectionC4() {
        this.editProject.d_remarks_tres = " ";
        this.remarksSectionC4.nativeElement.disabled = true;
        this.remarksSectionC4.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionC4() {
        this.editProject.d_remarks_tres = "";
        this.remarksSectionC4.nativeElement.disabled = false;
        this.remarksSectionC4.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line for Part 4
    //Break Line
    ComplianceSectionD1() {
        this.editProject.a_remarks_kwatro = " ";
        this.remarksSectionD1.nativeElement.disabled = true;
        this.remarksSectionD1.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionD1() {
        this.editProject.a_remarks_kwatro = "";
        this.remarksSectionD1.nativeElement.disabled = false;
        this.remarksSectionD1.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line
    ComplianceSectionD2() {
        this.editProject.b_remarks_kwatro = " ";
        this.remarksSectionD2.nativeElement.disabled = true;
        this.remarksSectionD2.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionD2() {
        this.editProject.b_remarks_kwatro = "";
        this.remarksSectionD2.nativeElement.disabled = false;
        this.remarksSectionD2.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line
    ComplianceSectionD3() {
        this.editProject.c_remarks_kwatro = " ";
        this.remarksSectionD3.nativeElement.disabled = true;
        this.remarksSectionD3.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionD3() {
        this.editProject.c_remarks_kwatro = "";
        this.remarksSectionD3.nativeElement.disabled = false;
        this.remarksSectionD3.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break Line
    ComplianceSectionD4() {
        this.editProject.d_remarks_kwatro = " ";
        this.remarksSectionD4.nativeElement.disabled = true;
        this.remarksSectionD4.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionD4() {
        this.editProject.d_remarks_kwatro = "";
        this.remarksSectionD4.nativeElement.disabled = false;
        this.remarksSectionD4.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Final BreakLine
    ComplianceSectionE1() {
        this.editProject.a_remarks_singko = " ";
        this.remarksSectionE1.nativeElement.disabled = true;
        this.remarksSectionE1.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionE1() {
        this.editProject.a_remarks_singko = "";
        this.remarksSectionE1.nativeElement.disabled = false;
        this.remarksSectionE1.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break 2
    ComplianceSectionE2() {
        this.editProject.b_remarks_singko = " ";
        this.remarksSectionE2.nativeElement.disabled = true;
        this.remarksSectionE2.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionE2() {
        this.editProject.b_remarks_singko = "";
        this.remarksSectionE2.nativeElement.disabled = false;
        this.remarksSectionE2.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break 3
    ComplianceSectionE3() {
        this.editProject.c_remarks_singko = " ";
        this.remarksSectionE3.nativeElement.disabled = true;
        this.remarksSectionE3.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionE3() {
        this.editProject.c_remarks_singko = "";
        this.remarksSectionE3.nativeElement.disabled = false;
        this.remarksSectionE3.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break 4
    ComplianceSectionE4() {
        this.editProject.d_remarks_singko = " ";
        this.remarksSectionE4.nativeElement.disabled = true;
        this.remarksSectionE4.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionE4() {
        this.editProject.d_remarks_singko = "";
        this.remarksSectionE4.nativeElement.disabled = false;
        this.remarksSectionE4.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break 5
    ComplianceSectionE5() {
        this.editProject.e_remarks_singko = " ";
        this.remarksSectionE5.nativeElement.disabled = true;
        this.remarksSectionE5.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionE5() {
        this.editProject.e_remarks_singko = "";
        this.remarksSectionE5.nativeElement.disabled = false;
        this.remarksSectionE5.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break 6
    ComplianceSectionE6() {
        this.editProject.f_remarks_singko = " ";
        this.remarksSectionE6.nativeElement.disabled = true;
        this.remarksSectionE6.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionE6() {
        this.editProject.f_remarks_singko = "";
        this.remarksSectionE6.nativeElement.disabled = false;
        this.remarksSectionE6.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break 7
    ComplianceSectionE7() {
        this.editProject.g_remarks_singko = " ";
        this.remarksSectionE7.nativeElement.disabled = true;
        this.remarksSectionE7.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionE7() {
        this.editProject.g_remarks_singko = "";
        this.remarksSectionE7.nativeElement.disabled = false;
        this.remarksSectionE7.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Break 7
    ComplianceSectionE8() {
        this.editProject.h_remarks_singko = " ";
        this.remarksSectionE8.nativeElement.disabled = true;
        this.remarksSectionE8.nativeElement.style.backgroundColor = '#E0E0E0';
    }
    NoneComplianceSectionE8() {
        this.editProject.h_remarks_singko = "";
        this.remarksSectionE8.nativeElement.disabled = false;
        this.remarksSectionE8.nativeElement.style.backgroundColor = '#FFFFFF';
    }
    //Singian Clan
    onDeleteClick(event, index) {
        this.deleteIndex = index;
        this.deleteProject.projectID = this.projects[index].projectID;
        this.deleteProject.projectName = this.projects[index].projectName;
        this.deleteProject.dateOfStart = this.projects[index].dateOfStart;
        this.deleteProject.teamSize = this.projects[index].teamSize;
        this.deleteProject.supplier = this.projects[index].supplier;
        this.deleteProject.item_code = this.projects[index].item_code;
        this.deleteProject.item_description = this.projects[index].item_description;
        this.deleteProject.po_number = this.projects[index].po_number;
        this.deleteProject.po_date = this.projects[index].po_date;
        this.deleteProject.pr_number = this.projects[index].pr_number;
        this.deleteProject.pr_date = this.projects[index].pr_date;
        this.deleteProject.qty_uom = this.projects[index].qty_uom;
        this.deleteProject.qty_order = this.projects[index].qty_order;
        this.deleteProject.mfg_date = this.projects[index].mfg_date;
        this.deleteProject.expiration_date = this.projects[index].expiration_date;
        this.deleteProject.expected_delivery = this.projects[index].expected_delivery;
        this.deleteProject.actual_delivery = this.projects[index].actual_delivery;
        this.deleteProject.actual_remaining_receiving = this.projects[index].actual_remaining_receiving;
        this.deleteProject.received_by_QA = this.projects[index].received_by_QA;
        this.deleteProject.status_of_reject_one = this.projects[index].status_of_reject_one;
        this.deleteProject.status_of_reject_two = this.projects[index].status_of_reject_two;
        this.deleteProject.status_of_reject_three = this.projects[index].status_of_reject_three;
        this.deleteProject.count_of_reject_one = this.projects[index].count_of_reject_one;
        this.deleteProject.count_of_reject_two = this.projects[index].count_of_reject_two;
        this.deleteProject.count_of_reject_three = this.projects[index].count_of_reject_three;
        this.deleteProject.total_of_reject_mat = this.projects[index].total_of_reject_mat;
        //SECTION 1
        //A
        this.deleteProject.a_delivery_van_desc = this.projects[index].a_delivery_van_desc;
        this.deleteProject.a_compliance = this.projects[index].a_compliance;
        this.deleteProject.a_remarks = this.projects[index].a_remarks;
        //B
        this.deleteProject.b_cooling_system_desc = this.projects[index].b_cooling_system_desc;
        this.deleteProject.b_compliance = this.projects[index].b_compliance;
        this.deleteProject.b_remarks = this.projects[index].b_remarks;
        //C
        this.deleteProject.c_inner_walls_desc = this.projects[index].c_inner_walls_desc;
        this.deleteProject.c_compliance = this.projects[index].c_compliance;
        this.deleteProject.c_remarks = this.projects[index].c_remarks;
        //D
        this.deleteProject.d_plastic_curtains_desc = this.projects[index].d_plastic_curtains_desc;
        this.deleteProject.d_compliance = this.projects[index].d_compliance;
        this.deleteProject.d_remarks = this.projects[index].d_remarks;
        //E
        this.deleteProject.e_thereno_pest_desc = this.projects[index].e_thereno_pest_desc;
        this.deleteProject.e_compliance = this.projects[index].e_compliance;
        this.deleteProject.e_remarks = this.projects[index].e_remarks;
        //Section2
        //A
        this.deleteProject.a_clean_company_dos = this.projects[index].a_clean_company_dos;
        this.deleteProject.a_compliance_dos = this.projects[index].a_compliance_dos;
        this.deleteProject.a_remarks_dos = this.projects[index].a_remarks_dos;
        //B
        this.deleteProject.b_delivery_staff_symptoms_dos = this.projects[index].b_delivery_staff_symptoms_dos;
        this.deleteProject.b_compliance_dos = this.projects[index].b_compliance_dos;
        this.deleteProject.b_remarks_dos = this.projects[index].b_remarks_dos;
        //C
        this.deleteProject.c_inner_walls_clean_dos = this.projects[index].c_inner_walls_clean_dos;
        this.deleteProject.c_compliance_dos = this.projects[index].c_compliance_dos;
        this.deleteProject.c_remarks_dos = this.projects[index].c_remarks_dos;
        //D
        this.deleteProject.d_plastic_curtains_dos = this.projects[index].d_plastic_curtains_dos;
        this.deleteProject.d_compliance_dos = this.projects[index].d_compliance_dos;
        this.deleteProject.d_remarks_dos = this.projects[index].d_remarks_dos;
        //E
        this.deleteProject.e_no_accessories_dos = this.projects[index].e_no_accessories_dos;
        this.deleteProject.e_compliance_dos = this.projects[index].e_compliance_dos;
        this.deleteProject.e_remarks_dos = this.projects[index].e_remarks_dos;
        //Section 4
        //A
        this.deleteProject.a_certificate_coa_kwatro_desc = this.projects[index].a_certificate_coa_kwatro_desc;
        this.deleteProject.a_compliance_kwatro = this.projects[index].a_compliance_kwatro;
        this.deleteProject.a_remarks_kwatro = this.projects[index].a_remarks_kwatro;
        //B
        this.deleteProject.b_po_kwatro_desc = this.projects[index].b_po_kwatro_desc;
        this.deleteProject.b_compliance_kwatro = this.projects[index].b_compliance_kwatro;
        this.deleteProject.b_remarks_kwatro = this.projects[index].b_remarks_kwatro;
        //C
        this.deleteProject.c_msds_kwatro_desc = this.projects[index].c_msds_kwatro_desc;
        this.deleteProject.c_compliance_kwatro = this.projects[index].c_compliance_kwatro;
        this.deleteProject.c_remarks_kwatro = this.projects[index].c_remarks_kwatro;
        //D
        this.deleteProject.d_food_grade_desc = this.projects[index].d_food_grade_desc;
        this.deleteProject.d_compliance_kwatro = this.projects[index].d_compliance_kwatro;
        this.deleteProject.d_remarks_kwatro = this.projects[index].d_remarks_kwatro;
        //Section 5
        //A
        this.deleteProject.a_qty_received_singko_singko = this.projects[index].a_qty_received_singko_singko;
        this.deleteProject.a_compliance_singko = this.projects[index].a_compliance_singko;
        this.deleteProject.a_remarks_singko = this.projects[index].a_remarks_singko;
        //B
        this.deleteProject.b_mfg_date_desc_singko = this.projects[index].b_mfg_date_desc_singko;
        this.deleteProject.b_compliance_singko = this.projects[index].b_compliance_singko;
        this.deleteProject.b_remarks_singko = this.projects[index].b_remarks_singko;
        //C
        this.deleteProject.c_expirydate_desc_singko = this.projects[index].c_expirydate_desc_singko;
        this.deleteProject.c_compliance_singko = this.projects[index].c_compliance_singko;
        this.deleteProject.c_remarks_singko = this.projects[index].c_remarks_singko;
        //D
        this.deleteProject.d_packaging_desc_singko = this.projects[index].d_packaging_desc_singko;
        this.deleteProject.d_compliance_singko = this.projects[index].d_compliance_singko;
        this.deleteProject.d_remarks_singko = this.projects[index].d_remarks_singko;
        //E
        this.deleteProject.e_no_contaminants_desc_singko = this.projects[index].e_no_contaminants_desc_singko;
        this.deleteProject.e_compliance_singko = this.projects[index].e_compliance_singko;
        this.deleteProject.e_remarks_singko = this.projects[index].e_remarks_singko;
        //F
        this.deleteProject.f_qtyrejected_desc_singko = this.projects[index].f_qtyrejected_desc_singko;
        this.deleteProject.f_compliance_singko = this.projects[index].f_compliance_singko;
        this.deleteProject.f_remarks_singko = this.projects[index].f_remarks_singko;
        //G
        this.deleteProject.g_rejected_reason_desc_singko = this.projects[index].g_rejected_reason_desc_singko;
        this.deleteProject.g_compliance_singko = this.projects[index].g_compliance_singko;
        this.deleteProject.g_remarks_singko = this.projects[index].g_remarks_singko;
        //H
        this.deleteProject.h_lab_sample_desc_singko = this.projects[index].h_lab_sample_desc_singko;
        this.deleteProject.h_compliance_singko = this.projects[index].h_compliance_singko;
        this.deleteProject.h_remarks_singko = this.projects[index].h_remarks_singko;
    }
    onDeleteConfirmClick() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Are you sure the you to delete the selected data?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.OnDeleteDetails();
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Deleted!', 'Your file has been deleted.', 'success');
                this.showDeletedSuccess();
            }
        });
    }
    CancelledPoDetails() {
        var Item = this.ItemDescription.nativeElement.value;
        var PoNumero = this.PONumber.nativeElement.value;
        if (jquery__WEBPACK_IMPORTED_MODULE_0__("#ActivePartialReceiving").is(":visible")) {
            // alert("1");
            // return;
            this.PartialReceivingCheckingonCancellation();
            return;
        }
        else {
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Are you sure you want to cancel the PO Number ' + PoNumero + '?',
            text: Item,
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                this.UpdateDeactivatedTransactions();
            }
        });
    }
    onCancelClick(event, index) {
        // if($('#txtSearchText').is(":visible"))
        // {
        // alert("1");
        // }
        // else
        // {
        //   alert("2");
        // }
        // alert(index);
        // alert(this.currentPageIndex);
        this.editForm.resetForm();
        this.received_by.nativeElement.value = this.loginService.currentUserName;
        this.resetValueS();
        //first
        if (jquery__WEBPACK_IMPORTED_MODULE_0__('#txtSearchText').is(":visible")) {
            this.projectsService.SearchProjects("Po_number", this.searchText)
                .subscribe((response) => {
                // debugger;
                this.projects = response;
                this.showLoading = false;
                this.calculateNoOfPages();
                this.totalPoRowCount = response.length;
            });
        }
        else {
            this.projectsService.getAllProjects()
                .subscribe((response) => {
                // debugger;
                this.projects = response;
            });
            if (this.currentPageIndex == 1) {
                if (index == 0) {
                    index = 7;
                }
                if (index == 1) {
                    index = 8;
                }
                if (index == 2) {
                    index = 9;
                }
                if (index == 3) {
                    index = 10;
                }
                if (index == 4) {
                    index = 11;
                }
                if (index == 5) {
                    index = 12;
                }
                if (index == 6) {
                    index = 13;
                }
            }
            else if (this.currentPageIndex == 2) {
                if (index == 0) {
                    index = 14;
                }
                if (index == 1) {
                    index = 15;
                }
                if (index == 2) {
                    index = 16;
                }
                if (index == 3) {
                    index = 17;
                }
                if (index == 4) {
                    index = 18;
                }
                if (index == 5) {
                    index = 19;
                }
                if (index == 6) {
                    index = 20;
                }
            }
            else if (this.currentPageIndex == 3) {
                if (index == 0) {
                    index = 21;
                }
                if (index == 1) {
                    index = 22;
                }
                if (index == 2) {
                    index = 23;
                }
                if (index == 3) {
                    index = 24;
                }
                if (index == 4) {
                    index = 25;
                }
                if (index == 5) {
                    index = 26;
                }
                if (index == 6) {
                    index = 27;
                }
            }
            else if (this.currentPageIndex == 4) {
                if (index == 0) {
                    index = 28;
                }
                if (index == 1) {
                    index = 29;
                }
                if (index == 2) {
                    index = 30;
                }
                if (index == 3) {
                    index = 31;
                }
                if (index == 4) {
                    index = 32;
                }
                if (index == 5) {
                    index = 33;
                }
                if (index == 6) {
                    index = 34;
                }
            }
            else {
            }
        }
        //Last
        setTimeout(() => {
            this.editProject.projectID = this.projects[index].projectID;
            this.editProject.projectName = this.projects[index].projectName;
            this.editProject.dateOfStart = this.projects[index].dateOfStart.split("/").reverse().join("-"); //yyyy-MM-dd
            this.editProject.teamSize = this.projects[index].teamSize;
            this.editProject.active = this.projects[index].active;
            this.editProject.clientLocationID = this.projects[index].clientLocationID;
            this.editProject.clientLocation = this.projects[index].clientLocation;
            this.editProject.status = this.projects[index].status;
            this.editProject.supplier = this.projects[index].supplier;
            this.editProject.item_code = this.projects[index].item_code;
            this.editProject.item_description = this.projects[index].item_description;
            this.editProject.po_number = this.projects[index].po_number;
            this.editProject.po_date = this.projects[index].po_date;
            this.editProject.pr_number = this.projects[index].pr_number;
            this.editProject.pr_date = this.projects[index].pr_date;
            this.editProject.qty_order = this.projects[index].qty_order;
            this.editProject.qty_uom = this.projects[index].qty_uom;
            this.editProject.mfg_date = this.projects[index].mfg_date;
            this.editProject.expiration_date = this.projects[index].expiration_date;
            this.editProject.expected_delivery = this.projects[index].expected_delivery;
            this.editProject.actual_delivery = this.projects[index].actual_delivery;
            this.editProject.actual_remaining_receiving = this.projects[index].actual_remaining_receiving;
            // this.editProject.received_by_QA = this.activeUser;
            this.editProject.is_activated = this.Deactivator;
            this.editProject.cancelled_date = this.ToDay;
            this.editProject.canceled_by = this.activeUser;
            this.editProject.received_by_QA = this.projects[index].received_by_QA;
            this.editProject.unit_price = this.projects[index].unit_price;
            this.editProject.status_of_reject_one = this.projects[index].status_of_reject_one;
            this.editProject.status_of_reject_two = this.projects[index].status_of_reject_two;
            this.editProject.status_of_reject_three = this.projects[index].status_of_reject_three;
            this.editProject.count_of_reject_one = this.projects[index].count_of_reject_one;
            this.editProject.count_of_reject_two = this.projects[index].count_of_reject_two;
            this.editProject.count_of_reject_three = this.projects[index].count_of_reject_three;
            this.editProject.total_of_reject_mat = this.projects[index].total_of_reject_mat;
            //Section 1
            //A
            this.editProject.a_delivery_van_desc = this.projects[index].a_delivery_van_desc;
            this.editProject.a_compliance = this.projects[index].a_compliance;
            this.editProject.a_remarks = this.projects[index].a_remarks;
            //B
            this.editProject.b_cooling_system_desc = this.projects[index].b_cooling_system_desc;
            this.editProject.b_compliance = this.projects[index].b_compliance;
            this.editProject.b_remarks = this.projects[index].b_remarks;
            //C
            this.editProject.c_inner_walls_desc = this.projects[index].c_inner_walls_desc;
            this.editProject.c_compliance = this.projects[index].c_compliance;
            this.editProject.c_remarks = this.projects[index].c_remarks;
            //D
            this.editProject.d_plastic_curtains_desc = this.projects[index].d_plastic_curtains_desc;
            this.editProject.d_compliance = this.projects[index].d_compliance;
            this.editProject.d_remarks = this.projects[index].d_remarks;
            //E
            this.editProject.e_thereno_pest_desc = this.projects[index].e_thereno_pest_desc;
            this.editProject.e_compliance = this.projects[index].e_compliance;
            this.editProject.e_remarks = this.projects[index].e_remarks;
            //Section 2
            //A
            this.editProject.a_clean_company_dos = this.projects[index].a_clean_company_dos;
            this.editProject.a_compliance_dos = this.projects[index].a_compliance_dos;
            this.editProject.a_remarks_dos = this.projects[index].a_remarks_dos;
            //B
            this.editProject.b_delivery_staff_symptoms_dos = this.projects[index].b_delivery_staff_symptoms_dos;
            this.editProject.b_compliance_dos = this.projects[index].b_compliance_dos;
            this.editProject.b_remarks_dos = this.projects[index].b_remarks_dos;
            //C
            this.editProject.c_inner_walls_clean_dos = this.projects[index].c_inner_walls_clean_dos;
            this.editProject.c_compliance_dos = this.projects[index].c_compliance_dos;
            this.editProject.c_remarks_dos = this.projects[index].c_remarks_dos;
            //D
            this.editProject.d_plastic_curtains_dos = this.projects[index].d_plastic_curtains_dos;
            this.editProject.d_compliance_dos = this.projects[index].d_compliance_dos;
            this.editProject.d_remarks_dos = this.projects[index].d_remarks_dos;
            //E
            this.editProject.e_no_accessories_dos = this.projects[index].e_no_accessories_dos;
            this.editProject.e_compliance_dos = this.projects[index].e_compliance_dos;
            this.editProject.e_remarks_dos = this.projects[index].e_remarks_dos;
            //F
            this.editProject.f_no_pests_sightings_dos = this.projects[index].f_no_pests_sightings_dos;
            this.editProject.f_compliance_dos = this.projects[index].f_compliance_dos;
            this.editProject.f_remarks_dos = this.projects[index].f_remarks_dos;
            //Section 3
            //A
            this.editProject.a_pallet_crates_tres = this.projects[index].a_pallet_crates_tres;
            this.editProject.a_compliance_tres = this.projects[index].a_compliance_tres;
            this.editProject.a_remarks_tres = this.projects[index].a_remarks_tres;
            //B
            this.editProject.b_product_contamination_tres = this.projects[index].b_product_contamination_tres;
            this.editProject.b_compliance_tres = this.projects[index].b_compliance_tres;
            this.editProject.b_remarks_tres = this.projects[index].b_remarks_tres;
            //C
            this.editProject.c_uncessary_items_tres = this.projects[index].c_uncessary_items_tres;
            this.editProject.c_compliance_tres = this.projects[index].c_compliance_tres;
            this.editProject.c_remarks_tres = this.projects[index].c_remarks_tres;
            //D
            this.editProject.d_products_cover_tres = this.projects[index].d_products_cover_tres;
            this.editProject.d_compliance_tres = this.projects[index].d_compliance_tres;
            this.editProject.d_remarks_tres = this.projects[index].d_remarks_tres;
            //Serction 4
            //A
            this.editProject.a_certificate_coa_kwatro_desc = this.projects[index].a_certificate_coa_kwatro_desc;
            this.editProject.a_compliance_kwatro = this.projects[index].a_compliance_kwatro;
            this.editProject.a_remarks_kwatro = this.projects[index].a_remarks_kwatro;
            //B
            this.editProject.b_po_kwatro_desc = this.projects[index].b_po_kwatro_desc;
            this.editProject.b_compliance_kwatro = this.projects[index].b_compliance_kwatro;
            this.editProject.b_remarks_kwatro = this.projects[index].b_remarks_kwatro;
            //C
            this.editProject.c_msds_kwatro_desc = this.projects[index].c_msds_kwatro_desc;
            this.editProject.c_compliance_kwatro = this.projects[index].c_compliance_kwatro;
            this.editProject.c_remarks_kwatro = this.projects[index].c_remarks_kwatro;
            //D
            this.editProject.d_food_grade_desc = this.projects[index].d_food_grade_desc;
            this.editProject.d_compliance_kwatro = this.projects[index].d_compliance_kwatro;
            this.editProject.d_remarks_kwatro = this.projects[index].d_remarks_kwatro;
            //Section 5
            //A
            this.editProject.a_qty_received_singko_singko = this.projects[index].a_qty_received_singko_singko;
            this.editProject.a_compliance_singko = this.projects[index].a_compliance_singko;
            this.editProject.a_remarks_singko = this.projects[index].a_remarks_singko;
            //B
            this.editProject.b_mfg_date_desc_singko = this.projects[index].b_mfg_date_desc_singko;
            this.editProject.b_compliance_singko = this.projects[index].b_compliance_singko;
            this.editProject.b_remarks_singko = this.projects[index].b_remarks_singko;
            //C
            this.editProject.c_expirydate_desc_singko = this.projects[index].c_expirydate_desc_singko;
            this.editProject.c_compliance_singko = this.projects[index].c_compliance_singko;
            this.editProject.c_remarks_singko = this.projects[index].c_remarks_singko;
            //D
            this.editProject.d_packaging_desc_singko = this.projects[index].d_packaging_desc_singko;
            this.editProject.d_compliance_singko = this.projects[index].d_compliance_singko;
            this.editProject.d_remarks_singko = this.projects[index].d_remarks_singko;
            //E
            this.editProject.e_no_contaminants_desc_singko = this.projects[index].e_no_contaminants_desc_singko;
            this.editProject.e_compliance_singko = this.projects[index].e_compliance_singko;
            this.editProject.e_remarks_singko = this.projects[index].e_remarks_singko;
            //F
            this.editProject.f_qtyrejected_desc_singko = this.projects[index].f_qtyrejected_desc_singko;
            this.editProject.f_compliance_singko = this.projects[index].f_compliance_singko;
            this.editProject.f_remarks_singko = this.projects[index].f_remarks_singko;
            //G
            this.editProject.g_rejected_reason_desc_singko = this.projects[index].g_rejected_reason_desc_singko;
            this.editProject.g_compliance_singko = this.projects[index].g_compliance_singko;
            this.editProject.g_remarks_singko = this.projects[index].g_remarks_singko;
            //H
            this.editProject.h_lab_sample_desc_singko = this.projects[index].h_lab_sample_desc_singko;
            this.editProject.h_compliance_singko = this.projects[index].h_compliance_singko;
            this.editProject.h_remarks_singko = this.projects[index].h_remarks_singko;
            jquery__WEBPACK_IMPORTED_MODULE_0__("txtexpected_delivery").val("");
            //Addition Set Point for Validation of Partial Data
            // this.ActivePartialReceiving.nativeElement.value = "0"; 
            this.PoNumberBinding = this.projects[index].po_number;
            // this.PoNumberChild.nativeElement.value;
            this.ProjectsAllowableQty = this.projectsPartialPoService.SearchProjects("Po_number", this.PoNumberBinding);
            this.ProjectsAllowableQty.subscribe.toString;
            this.editIndex = index;
            setTimeout(() => {
                if (jquery__WEBPACK_IMPORTED_MODULE_0__("#ActivePartialReceiving").is(":visible")) {
                    // alert("A1");
                    this.PartialComment = "haddata";
                }
                else {
                    // alert("B1");
                    this.PartialComment = "unsetdata";
                    jquery__WEBPACK_IMPORTED_MODULE_0__("#CancelPO").show();
                }
            }, 170);
        }, 100);
    }
    UpdateDeactivatedTransactions() {
        this.projectsService.updateProject(this.editProject).subscribe((response) => {
            var p = new src_app_models_project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
            p.projectID = response.projectID;
            p.projectName = response.projectName;
            p.dateOfStart = response.dateOfStart;
            p.teamSize = response.teamSize;
            p.clientLocation = response.clientLocation;
            p.active = response.active;
            // p.is_activated = response.is_activated;
            p.clientLocationID = response.clientLocationID;
            p.status = response.status;
            p.supplier = response.supplier;
            p.item_code = response.item_code;
            p.item_description = response.item_description;
            p.po_number = response.po_number;
            p.po_date = response.po_date;
            p.pr_number = response.pr_number;
            p.pr_date = response.pr_date;
            p.qty_order = response.qty_order;
            p.qty_uom = response.qty_uom;
            p.mfg_date = response.mfg_date;
            p.expiration_date = response.expiration_date;
            p.expected_delivery = response.expected_delivery;
            p.actual_delivery = response.actual_delivery;
            p.expected_delivery = response.expected_delivery;
            p.actual_remaining_receiving = response.actual_remaining_receiving;
            // p.received_by_QA = response.received_by_QA;
            // // this.activeUser = response.received_by_QA;
            p.status_of_reject_one = response.status_of_reject_one;
            p.status_of_reject_two = response.status_of_reject_two;
            p.status_of_reject_three = response.status_of_reject_three;
            p.count_of_reject_one = response.count_of_reject_one;
            p.count_of_reject_two = response.count_of_reject_two;
            p.count_of_reject_three = response.count_of_reject_three;
            p.total_of_reject_mat = response.total_of_reject_mat;
            //Section 1
            // this.received_by.nativeElement.value = this.loginService.currentUserName;
            this.projects[this.editIndex] = p;
            this.editProject.projectID = null;
            this.editProject.projectName = null;
            this.editProject.dateOfStart = null;
            this.editProject.teamSize = null;
            this.editProject.supplier = null;
            this.editProject.teamSize = null;
            this.editProject.unit_price = null;
            this.editProject.active = false;
            this.editProject.clientLocationID = null;
            this.editProject.status = null;
            this.editProject.item_code = null;
            this.editProject.item_description = null;
            this.editProject.po_number = null;
            this.editProject.po_date = null;
            this.editProject.pr_number = null;
            this.editProject.pr_date = null;
            this.editProject.qty_order = null;
            this.editProject.qty_uom = null;
            this.editProject.mfg_date = null;
            this.editProject.expiration_date = null;
            this.editProject.expected_delivery = null;
            this.editProject.actual_delivery = null;
            this.editProject.actual_remaining_receiving = null;
            this.editProject.received_by_QA = null;
            this.editProject.is_activated = null;
            this.editProject.status_of_reject_one = null;
            this.editProject.status_of_reject_two = null;
            this.editProject.status_of_reject_three = null;
            this.editProject.count_of_reject_one = null;
            this.editProject.count_of_reject_two = null;
            this.editProject.count_of_reject_three = null;
            this.editProject.total_of_reject_mat = null;
            this.showCancelledPOSuccess();
            this.ngOnInit();
            jquery__WEBPACK_IMPORTED_MODULE_0__("#editFormCancel").trigger("click");
        }, (error) => {
            console.log(error);
        });
    }
    OnDeleteDetails() {
        this.projectsService.deleteProject(this.deleteProject.projectID).subscribe((response) => {
            this.projects.splice(this.deleteIndex, 1);
            this.deleteProject.projectID = null;
            this.deleteProject.projectName = null;
            this.deleteProject.teamSize = null;
            this.deleteProject.dateOfStart = null;
            this.deleteProject.supplier = null;
            this.deleteProject.item_code = null;
            this.deleteProject.item_description = null;
            this.deleteProject.po_number = null;
            this.deleteProject.po_date = null;
            this.deleteProject.pr_number = null;
            this.deleteProject.pr_date = null;
            this.deleteProject.qty_order = null;
            this.deleteProject.qty_uom = null;
            this.deleteProject.mfg_date = null;
            this.deleteProject.expiration_date = null;
            this.deleteProject.expected_delivery = null;
            this.deleteProject.actual_delivery = null;
            this.deleteProject.actual_remaining_receiving = null;
            this.deleteProject.received_by_QA = null;
            this.deleteProject.c_inner_walls_desc = null;
            this.deleteProject.c_compliance = null;
            this.deleteProject.c_remarks = null;
            this.deleteProject.d_plastic_curtains_desc = null;
            this.deleteProject.d_compliance = null;
            this.deleteProject.d_remarks = null;
            this.deleteProject.e_thereno_pest_desc = null;
            this.deleteProject.e_compliance = null;
            this.deleteProject.e_remarks = null;
            //Section 2
            //A
            this.deleteProject.a_clean_company_dos = null;
            this.deleteProject.a_compliance_dos = null;
            this.deleteProject.a_remarks_dos = null;
            //B
            this.deleteProject.b_delivery_staff_symptoms_dos = null;
            this.deleteProject.b_compliance_dos = null;
            this.deleteProject.b_remarks_dos = null;
            //C
            this.deleteProject.c_inner_walls_clean_dos = null;
            this.deleteProject.c_compliance_dos = null;
            this.deleteProject.c_remarks_dos = null;
            //D
            this.deleteProject.d_plastic_curtains_dos = null;
            this.deleteProject.d_compliance_dos = null;
            this.deleteProject.d_remarks_dos = null;
            //E
            this.deleteProject.e_no_accessories_dos = null;
            this.deleteProject.e_compliance_dos = null;
            this.deleteProject.e_remarks_dos = null;
            //F
            this.deleteProject.f_compliance_dos = null;
            this.deleteProject.f_no_pests_sightings_dos = null;
            this.deleteProject.f_remarks_dos = null;
            //Section 3
            //A
            this.deleteProject.a_pallet_crates_tres = null;
            this.deleteProject.a_compliance_tres = null;
            this.deleteProject.a_remarks_tres = null;
            //B
            this.deleteProject.b_product_contamination_tres = null;
            this.deleteProject.b_compliance_tres = null;
            this.deleteProject.b_remarks_tres = null;
            //C
            this.deleteProject.c_uncessary_items_tres = null;
            this.deleteProject.c_compliance_tres = null;
            this.deleteProject.c_remarks_tres = null;
            //D
            this.deleteProject.d_products_cover_tres = null;
            this.deleteProject.d_compliance_tres = null;
            this.deleteProject.d_remarks_tres = null;
            //Section 4
            //A
            this.deleteProject.a_certificate_coa_kwatro_desc = null;
            this.deleteProject.a_compliance_kwatro = null;
            this.deleteProject.a_remarks_kwatro = null;
            //B
            this.deleteProject.b_po_kwatro_desc = null;
            this.deleteProject.b_compliance_kwatro = null;
            this.deleteProject.b_remarks_kwatro = null;
            //C
            this.deleteProject.c_msds_kwatro_desc = null;
            this.deleteProject.c_compliance_kwatro = null;
            this.deleteProject.c_remarks_kwatro = null;
            //D
            this.deleteProject.d_food_grade_desc = null;
            this.deleteProject.d_compliance_kwatro = null;
            this.deleteProject.d_remarks_kwatro = null;
            //Section 5
            //A
            this.deleteProject.a_qty_received_singko_singko = null;
            this.deleteProject.a_compliance_singko = null;
            this.deleteProject.a_remarks_singko = null;
            //B
            this.deleteProject.b_mfg_date_desc_singko = null;
            this.deleteProject.b_compliance_singko = null;
            this.deleteProject.b_remarks_singko = null;
            //C
            this.deleteProject.c_expirydate_desc_singko = null;
            this.deleteProject.c_compliance_singko = null;
            this.deleteProject.c_remarks_singko = null;
            ;
            //D
            this.deleteProject.d_packaging_desc_singko = null;
            this.deleteProject.d_compliance_singko = null;
            this.deleteProject.d_remarks_singko = null;
            //E
            this.deleteProject.e_no_contaminants_desc_singko = null;
            this.deleteProject.e_compliance_singko = null;
            this.deleteProject.e_remarks_singko = null;
            //F
            this.deleteProject.f_qtyrejected_desc_singko = null;
            this.deleteProject.f_compliance_singko = null;
            this.deleteProject.f_remarks_singko = null;
            //G
            this.deleteProject.g_rejected_reason_desc_singko = null;
            this.deleteProject.g_compliance_singko = null;
            this.deleteProject.g_remarks_singko = null;
            //H
            this.deleteProject.h_lab_sample_desc_singko = null;
            this.deleteProject.h_compliance_singko = null;
            this.deleteProject.h_remarks_singko = null;
            this.calculateNoOfPages();
        }, (error) => {
            console.log(error);
        });
    }
    onSearchClick() {
        // this.projectsService.SearchProjects(this.searchBy, this.searchText).subscribe(
        //   (response: Project[]) =>
        //   {
        //     this.projects = response;
        //   },
        //   (error) => 
        //   {
        //     console.log(error);
        //   });
    }
    onSearchTextKeyup(event) {
        // this.editForm.resetForm();
        //Recall the calculateNoOfPages
        if (jquery__WEBPACK_IMPORTED_MODULE_0__('#txtSearchText').is(":empty")) {
            // this.ngOnInit();
        }
        this.calculateNoOfPages();
    }
    onHideShowDetails(event) {
        this.projectsService.toggleDetails();
    }
    onPageIndexClicked(pageIndex) {
        // this.currentPageIndex = pageIndex;
        //Set currentPageIndex
        if (pageIndex >= 0 && pageIndex < this.pages.length) {
            this.currentPageIndex = pageIndex;
        }
    }
    onAddAdditionalRejectRow(event) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow1").is(":visible")) {
            // alert("The paragraph  is visible.");
            if (jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow2").is(":visible")) {
                // alert("The paragraph  is visible.");
                if (jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow3").is(":visible")) {
                    // alert("The paragraph  is visible.");
                    // alert("Limit  is exceed!");
                    this.showLimitonAddingRejection();
                }
                else {
                    // alert("The paragraph  is hidden.");
                    jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow3").show();
                    jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow32").show();
                    jquery__WEBPACK_IMPORTED_MODULE_0__("#total-reject").show();
                    jquery__WEBPACK_IMPORTED_MODULE_0__("#total-confirm-reject").show();
                    jquery__WEBPACK_IMPORTED_MODULE_0__("#AddRejectBtn").hide();
                }
            }
            else {
                // alert("The paragraph  is hidden.");
                jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow2").show();
                jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow22").show();
                jquery__WEBPACK_IMPORTED_MODULE_0__("#total-reject").show();
                jquery__WEBPACK_IMPORTED_MODULE_0__("#total-confirm-reject").show();
            }
        }
        else {
            // alert("The paragraph  is hidden.");
            jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow1").show();
            jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow12").show();
            jquery__WEBPACK_IMPORTED_MODULE_0__("#remove-remarks-button").show();
            jquery__WEBPACK_IMPORTED_MODULE_0__("#total-reject").show();
            jquery__WEBPACK_IMPORTED_MODULE_0__("#total-confirm-reject").show();
        }
        // $("#rejectionrow2").show();
        // $("#rejectionrow22").show();
        // $("#rejectionrow3").show();
        // $("#rejectionrow32").show();
        // alert("sds");
    }
    onRemoveAdditionalRejectRow(event) {
        if (jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow3").is(":visible")) {
            // alert("The paragraph  is visible.");
            jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow3").hide();
            jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow32").hide();
        }
        else {
            // alert("The paragraph  is hidden.");
            if (jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow2").is(":visible")) {
                // alert("The paragraph  is visible.");
                jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow2").hide();
                jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow22").hide();
                jquery__WEBPACK_IMPORTED_MODULE_0__("#remove-remarks-button").show();
            }
            else {
                // alert("The paragraph  is hidden.");
                if (jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow1").is(":visible")) {
                    // alert("The paragraph  is visible.");
                    jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow1").hide();
                    jquery__WEBPACK_IMPORTED_MODULE_0__("#rejectionrow12").hide();
                    jquery__WEBPACK_IMPORTED_MODULE_0__("#remove-remarks-button").hide();
                    jquery__WEBPACK_IMPORTED_MODULE_0__("#total-reject").hide();
                    jquery__WEBPACK_IMPORTED_MODULE_0__("#total-confirm-reject").hide();
                }
                else {
                    // alert("The paragraph  is hidden.");
                }
            }
        }
        //Reloading Add Button
        if (jquery__WEBPACK_IMPORTED_MODULE_0__("#AddRejectBtn").is(":visible")) {
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_0__("#AddRejectBtn").show();
        }
    }
    onChangeEventReject1(event) {
        if (this.rejectNo1.nativeElement.value == "") {
            this.rejectNo1.nativeElement.value = "0";
            // console.warn("Empty Quantity in the textInput! ")
        }
        console.log(event.target.value);
        // this.totalofReject.nativeElement.value = this.rejectNo1.nativeElement.value; 
        const a = this.rejectNo1.nativeElement.value;
        const b = this.rejectNo2.nativeElement.value;
        const c = this.rejectNo3.nativeElement.value;
        const ActualDelivered = this.ActualDeliveryChild.nativeElement.value;
        const TotalReject = this.totalofReject.nativeElement.value;
        const summary = +a + +b + +c;
        // console.log(summary);
        this.totalofReject.nativeElement.value = summary;
        // alert("You change a value 1");
        // this.totalofReject.nativeElement.value = this.rejectNo1.nativeElement.value() + 2; 
        if (ActualDelivered > TotalReject) {
            // alert("A");
        }
        else {
            this.RejectionGreaterThanReceiving();
        }
    }
    onChangeEventReject2(event) {
        if (this.rejectNo2.nativeElement.value == "") {
            this.rejectNo2.nativeElement.value = "0";
            console.warn("Empty Quantity in the textInput! ");
        }
        console.log(event.target.value);
        // this.totalofReject.nativeElement.value = this.rejectNo2.nativeElement.value + this.totalofReject.nativeElement.value; 
        const a = this.rejectNo1.nativeElement.value;
        const b = this.rejectNo2.nativeElement.value;
        const c = this.rejectNo3.nativeElement.value;
        const ActualDelivered = this.ActualDeliveryChild.nativeElement.value;
        const TotalReject = this.totalofReject.nativeElement.value;
        const summary = +a + +b + +c;
        console.log(summary);
        this.totalofReject.nativeElement.value = summary;
        // alert("You change a value 2");
        // this.totalofReject.nativeElement.value = this.rejectNo1.nativeElement.value() + 2; 
        if (ActualDelivered > TotalReject) {
            // alert("A");
        }
        else {
            this.RejectionGreaterThanReceiving();
        }
    }
    selectExpiryDate(event) {
        // JavaScript program to illustrate 
        // calculation of no. of days between two date 
        // To set two dates to two variables
        var date1 = new Date(jquery__WEBPACK_IMPORTED_MODULE_0__('#txtEditReceivingDate').val());
        var date2 = new Date(jquery__WEBPACK_IMPORTED_MODULE_0__('#txtEditexpiration_date').val());
        // To calculate the time difference of two dates
        var Difference_In_Time = date2.getTime() - date1.getTime();
        // To calculate the no. of days between two dates
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        //To display the final no. of days (result)
        // document.write("Total number of days between dates  <br>"
        //                + date1 + "<br> and <br>" 
        //                + date2 + " is: <br> " 
        //                + Difference_In_Days);
        var ExpiryDaysActivated = this.ActiveNearlyExpirySetpoint.nativeElement.value;
        var ItemDesc = this.ItemDescription.nativeElement.value;
        if (Difference_In_Days == ExpiryDaysActivated) {
            // alert("ssasa kaba Hahha");
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Below Standard Expiration ' + Difference_In_Days + ' Days?',
                text: ItemDesc,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {
                }
            });
        }
        else {
            this.ExpiryDateChild.nativeElement.value = ' ';
            this.ExpiryDateChild.nativeElement.focus();
        }
        if (Difference_In_Days < ExpiryDaysActivated) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                position: 'top-end',
                icon: 'warning',
                title: 'Below Standards Expiration Days  ' + Difference_In_Days + ' Days?',
                text: ItemDesc,
                showConfirmButton: false,
                timer: 3500
            });
            // Swal.fire({
            //   title: 'Below Standardss Expiration Days  '+ Difference_In_Days +' Days?',
            //   text: ItemDesc,
            //   icon: 'warning',
            //   showCancelButton: true,
            //   confirmButtonColor: '#3085d6',
            //   cancelButtonColor: '#d33',
            //   confirmButtonText: 'Yes'
            // }).then((result) => {
            //   if (result.isConfirmed) {
            //   }
            // })
        }
        else {
            this.ExpiryDateChild.nativeElement.value = ' ';
            this.ExpiryDateChild.nativeElement.focus();
        }
    }
    onChangeEventReject3(event) {
        if (this.rejectNo3.nativeElement.value == "") {
            this.rejectNo3.nativeElement.value = "0";
            console.warn("Empty Quantity in the textInput! ");
        }
        console.log(event.target.value);
        const a = this.rejectNo1.nativeElement.value;
        const b = this.rejectNo2.nativeElement.value;
        const c = this.rejectNo3.nativeElement.value;
        const ActualDelivered = this.ActualDeliveryChild.nativeElement.value;
        const TotalReject = this.totalofReject.nativeElement.value;
        const summary = +a + +b + +c;
        console.log(summary);
        this.totalofReject.nativeElement.value = summary;
        // alert("You change a value 3");
        // this.totalofReject.nativeElement.value = this.rejectNo1.nativeElement.value() + 2; 
        if (ActualDelivered > TotalReject) {
            // alert("A");
        }
        else {
            this.RejectionGreaterThanReceiving();
        }
    }
    validateNumber(e) {
        let input = String.fromCharCode(e.charCode);
        const reg = /^\d*(?:[.,]\d{1,2})?$/;
        if (!reg.test(input)) {
            e.preventDefault();
        }
    }
    decimalFilter(event) {
        const reg = /^-?\d*(\.\d{0,2})?$/;
        let input = event.target.value + String.fromCharCode(event.charCode);
        if (!reg.test(input)) {
            event.preventDefault();
        }
    }
    HideSearchBtn(event) {
        jquery__WEBPACK_IMPORTED_MODULE_0__("#SearchBtnDetailed").show();
    }
    validateRejectedStatus(event) {
        // const Reject1 = this.RejectedStatus1.nativeElement.value;
        // const Reject2 = this.RejectedStatus2.nativeElement.value;
        // const Reject3 = this.RejectedStatus3.nativeElement.value;
        // if(Reject1 == Reject2)
        // {
        //   this.MultipleSelectionOfRejectionStatus();
        // }
    }
    ActualDeliveryComputation(event) {
        // Allowable Percentage Computation
        var TotalAllowablePercentage = this.TotalAllowablePercentage.nativeElement.value;
        var ActualDelivered = this.ActualDeliveryChild.nativeElement.value;
        var QtyOrder = this.QtyOrdered.nativeElement.value;
        var ActualRemainingReceiving = this.ActualRemainingReceiving.nativeElement.value;
        this.ActualRemaining = QtyOrder - ActualDelivered;
        //Add Ons
        //Allowable Percentage
        var aplenght = jquery__WEBPACK_IMPORTED_MODULE_0__('#Allowable_Percentage_id').val().length;
        jquery__WEBPACK_IMPORTED_MODULE_0__('#characters').text(aplenght);
        //Actual Delivery Functionalioty
        var adlength = jquery__WEBPACK_IMPORTED_MODULE_0__('#actual_delivery_output').val().length;
        jquery__WEBPACK_IMPORTED_MODULE_0__('#characters').text(adlength);
        if (aplenght > adlength) {
            //Do Something programmble
            if (Number(TotalAllowablePercentage) >= Number(ActualDelivered)) {
                // alert($('#Allowable_Percentage_id').val());
            }
            else {
                this.AllowablePercentageExceed();
                jquery__WEBPACK_IMPORTED_MODULE_0__('#actual_delivery_output').val("");
            }
        }
        else {
            if (Number(TotalAllowablePercentage) >= Number(ActualDelivered)) {
                // alert($('#Allowable_Percentage_id').val());
                // alert("hahaha");
            }
            else {
                // alert("Error 2");
                this.AllowablePercentageExceed();
                jquery__WEBPACK_IMPORTED_MODULE_0__('#actual_delivery_output').val("");
            }
        } //End Point add Ons
    }
    AllowablePercentageComputation(event) {
        // Allowable Percentage Computation
        const ExpectedDelivery = this.ExpectedDeliveryActual.nativeElement.value;
        const ActivatedAllowablePercentage = this.ActiveAllowablePercentage.nativeElement.value;
        // const TotalAllowablePercentage = this.TotalAllowablePercentage.nativeElement.value;
        const TotalAllowablePercentage = this.TotalAllowablePercentage.nativeElement.value;
        const ActualDelivered = this.ActualDeliveryChild.nativeElement.value;
        const QtyOrder = this.QtyOrdered.nativeElement.value;
        const ActualRemainingReceiving = this.ActualRemainingReceiving.nativeElement.value;
        // const summary = ExpectedDelivery * ActivatedAllowablePercentage;
        // console.log(summary);
        //Allowable Percentage Computation
        const summary = ActivatedAllowablePercentage / 100;
        const summaryadd1 = summary + 1;
        const finalcomputation = ActualRemainingReceiving * summaryadd1;
        this.TotalAllowablePercentage.nativeElement.value = finalcomputation;
        //End of Computation
        if (QtyOrder == ActualRemainingReceiving) {
            // if(ExpectedDelivery > QtyOrder)
            if (ExpectedDelivery == TotalAllowablePercentage) {
            }
            else {
                if (TotalAllowablePercentage >= ExpectedDelivery) {
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_0__("txtexpected_delivery").val("");
                    jquery__WEBPACK_IMPORTED_MODULE_0__("txtexpected_delivery").focus();
                    // this.GreatherThanTheOrder(); //Be Carefull
                }
            }
        }
        else {
            if (TotalAllowablePercentage >= ExpectedDelivery) {
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_0__("txtexpected_delivery").val("");
                jquery__WEBPACK_IMPORTED_MODULE_0__("txtexpected_delivery").focus();
                // this.GreatherThanTheOrder(); //Be Carefull
            }
        }
        //Gerard Singian
    }
    InitialComputation() {
        const a = this.rejectNo1.nativeElement.value;
        const b = this.rejectNo2.nativeElement.value;
        const c = this.rejectNo3.nativeElement.value;
        const ActualDelivered = this.ActualDeliveryChild.nativeElement.value;
        const TotalReject = this.totalofReject.nativeElement.value;
        const summary = +a + +b + +c;
        this.totalofReject.nativeElement.value = summary;
    }
    ConfirmNoofReject(event) {
        // alert("You Press a key in the Keyboard");
        this.InitialComputation();
        if (this.confirmReject.nativeElement.value == "") {
            this.rejectIsnotMactchSpanTag.nativeElement.innerHTML = "";
        }
        else {
            if (this.totalofReject.nativeElement.value == this.confirmReject.nativeElement.value) {
                // this.rejectNo3.nativeElement.value="0";
                // console.warn("Empty Quantity in the textInput! ")
                // this.rejectIsnotMactchSpanTag.nativeElement.innerHTML = "Pexa Marian";
                this.rejectIsnotMactchSpanTag.nativeElement.innerHTML = "";
            }
            else {
                this.rejectIsnotMactchSpanTag.nativeElement.innerHTML = "No. of total reject is not match";
            }
        }
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_projects_service__WEBPACK_IMPORTED_MODULE_6__["ProjectsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_client_locations_service__WEBPACK_IMPORTED_MODULE_7__["ClientLocationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_rejected_status_service__WEBPACK_IMPORTED_MODULE_10__["RejectedStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_allowable_percentage_service__WEBPACK_IMPORTED_MODULE_11__["AllowablePercentageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_cancelled_potransaction_status_service__WEBPACK_IMPORTED_MODULE_12__["CancelledPOTransactionStatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_projects_partial_po_service__WEBPACK_IMPORTED_MODULE_13__["ProjectsPartialPoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_tbl_nearly_expiry_mgmt_service__WEBPACK_IMPORTED_MODULE_14__["TblNearlyExpiryMgmtService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormBuilder"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], viewQuery: function ProjectsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c6, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c7, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c8, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c9, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c10, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c11, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c12, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c13, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c14, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c15, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c16, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c17, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c18, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c19, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c20, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c21, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c22, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c23, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c24, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c25, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c26, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c27, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c28, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c29, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c30, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c31, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c32, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c33, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c34, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c35, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c36, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c37, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c38, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c39, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c40, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c41, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c42, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c43, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c44, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c45, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c46, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c47, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c48, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c49, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c50, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c51, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c52, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c53, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.newForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.editForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.prjID = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.IsActivated = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.received_by = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.rejectNo1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.rejectNo2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.rejectNo3 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.confirmReject = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.rejectIsnotMactchSpanTag = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.totalofReject = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.rejectedStatusElementNo3 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.ActiveAllowablePercentage = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.TotalAllowablePercentage = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.ExpectedDeliveryActual = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.ExpiryDateChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.ActualDeliveryChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.RejectedStatus1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.RejectedStatus2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.RejectedStatus3 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.ActualRemainingReceiving = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.QtyOrdered = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.ActiveNearlyExpirySetpoint = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.ItemDescription = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.PONumber = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.ActivePartialReceiving = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionA1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionA2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionA3 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionA4 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionA5 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionB1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionB2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionB3 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionB4 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionB5 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionB6 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionC1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionC2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionC3 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionC4 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionD1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionD2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionD3 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionD4 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionE1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionE2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionE3 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionE4 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionE5 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionE6 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionE7 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.remarksSectionE8 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.projs = _t);
    } }, decls: 1255, vars: 590, consts: [[1, "row"], [1, "col-xl-12"], [1, "col-xl-8", "col-lg-9", "mx-auto"], [1, "form-group", "form-row"], [1, "col-12"], [1, "system-name"], ["matBadgeColor", "primary", 3, "matBadge"], ["class", "fa fa-circle-o-notch fa-spin", "style", "font-size:34px", 4, "ngIf"], [1, "col-xl-12", "mx-auto"], ["system-name", "", 1, "col-6", "mb-4"], ["floatLabel", "auto", "appearance", "standard", "color", "primary"], ["id", "drpSearchBy", "name", "SearchBy", 3, "ngModel", "ngModelChange", "selectionChange"], ["value", "item_code"], ["value", "item_description"], ["value", "po_number"], ["align", "end"], ["matPrefix", ""], [1, "col-3", "float-right", "hideObject", "system-name"], ["type", "text", "matInput", "", "placeholder", "Enter Some Data", "id", "txtSearchText", "name", "SearchText", 3, "ngModel", "ngModelChange", "keyup"], [1, "table", "table-striped", "table-bordered", "nowrap", "table-responsive-xl", 2, "width", "100%"], [1, "text-light", "header-bg-color-um", "system-name"], [1, "text-center"], [4, "ngFor", "ngForOf"], [1, "pagination", "justify-content-center", "mt-1"], [1, "page-item", 3, "click"], ["mat-stroked-button", "", "color", "primary", "href", "#", "onclick", "return false", 1, "mr-1", "font-color-black"], [4, "ngIf"], ["mat-stroked-button", "", "color", "primary", "href", "#", "onclick", "return false", 1, "ml-1", "font-color-black"], ["novalidate", "novalidate", "appClientLocationStatusValidator", ""], ["newForm", "ngForm"], ["role", "dialog", "id", "newModal", 1, "modal"], [1, "modal-dialog"], [1, "modal-content", 2, "width", "auto"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "form-group", "row"], ["for", "txtNewProjectID", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "id", "txtNewProjectID", "placeholder", "Project ID", "name", "ProjectID", "required", "required", "pattern", "^[0-9]*$", "appProjectIDUniqueValidator", "", 1, "form-control", 2, "width", "130px", 3, "ngModel", "ngClass", "ngModelChange"], ["newProjectID", "ngModel", "prjID", ""], ["class", "text-danger", 4, "ngIf"], ["type", "text", "name", "is_activated", "value", "1", 1, "form-control", 2, "width", "auto", 3, "ngModel", "ngModelChange"], ["newis_activated", "ngModel", "IsActivated", ""], ["for", "txtNewProjectName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtNewProjectName", "placeholder", "Project Name", "name", "ProjectName", "required", "required", "minlength", "3", "maxlength", "30", "pattern", "^[A-Za-z0-9 /-]*$", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["newProjectName", "ngModel"], ["for", "txtNewDateOfStart", 1, "col-sm-4", "col-form-label"], ["type", "date", "id", "txtNewDateOfStart", "placeholder", "Date of Start", "name", "DateOfStart", "required", "required", 1, "form-control", 2, "width", "180px", 3, "ngModel", "ngClass", "ngModelChange"], ["newDateOfStart", "ngModel"], ["for", "txtTeamSize", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtTeamSize", "placeholder", "Team Size", "name", "TeamSize", "pattern", "^[0-9]*$", "maxlength", "7", "appTeamSizeValidator", "5", 1, "form-control", 2, "width", "150px", 3, "ngModel", "ngClass", "ngModelChange"], ["newTeamSize", "ngModel"], ["for", "col-sm-4 col-form-label"], [1, "form-check"], ["type", "checkbox", "id", "chkNewActive", "value", "true", "name", "active", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "chkNewActive", 1, "form-check-label"], ["for", "rbNewStatusInForce", 1, "col-sm-4"], [1, "form-check", "form-check-inline"], ["type", "radio", "id", "rbNewStatusInForce", "value", "In Force", "name", "Status", "required", "required", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["newStatusInForce", "ngModel"], ["for", "rbNewStatusInForce", 1, "form-check-label"], ["type", "radio", "id", "rbNewStatusSupport", "value", "Support", "name", "Status", "required", "required", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["newStatusSupport", "ngModel"], ["for", "rbNewStatusSupport", 1, "form-check-label"], ["for", "drpNewClientLocation", 1, "col-sm-4", "col-form-label"], ["id", "drpNewClientLocation", "name", "ClientLocation", "required", "required", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["newClientLocationID", "ngModel"], ["value", "null"], [3, "value", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["data-dismiss", "modal", "id", "newFormCancel", 1, "btn", "btn-warning"], [1, "btn", "btn-success", 3, "click"], ["editForm", "ngForm"], ["role", "dialog", "id", "editModal", "data-backdrop", "static", "data-keyboard", "false", 1, "modal"], [1, "modal-header", "bg-all"], [1, "modal-title", "white-color"], [1, "flex"], [1, "box-1"], ["type", "text", "matInput", "", "id", "txtEditProjectID", "placeholder", "Checklist ID", "name", "ProjectID", "disabled", "disabled", "required", "required", "pattern", "^[0-9]*$", "appProjectIDUniqueValidator", "", 3, "ngModel", "ngClass", "ngModelChange"], ["editProjectID", "ngModel"], ["type", "text", "matInput", "", "id", "txtEdititem_code", "placeholder", "Item Code", "name", "item_code", "minlength", "3", "maxlength", "30", "pattern", "^[A-Za-z0-9 /-]*$", "disabled", "disabled", 3, "ngModel", "ngClass", "ngModelChange"], ["edititem_code", "ngModel"], ["type", "text", "matInput", "", "id", "txtEdititem_class", "placeholder", "Item Class", "disabled", "disabled", "name", "item_class", "minlength", "3", "maxlength", "30", 3, "ngModel", "ngModelChange"], ["edititem_class", "ngModel"], ["type", "text", "matInput", "", "id", "txtEditmajor_category", "placeholder", "Major Category", "disabled", "disabled", "name", "major_category", "minlength", "3", "maxlength", "30", 3, "ngModel", "ngModelChange"], ["editmajor_category", "ngModel"], [1, "box-2"], ["type", "text", "matInput", "", "id", "txtEditReceivingDate", "disabled", "disabled", "placeholder", "Receiving Date", 3, "value"], [1, "material-icons-outlined"], ["type", "text", "matInput", "", "id", "txtitem_description", "placeholder", "Description", "name", "item_descriptuion", "required", "required", "minlength", "3", "maxlength", "30", "pattern", "^[A-Za-z0-9 /-]*$", "disabled", "disabled", 3, "ngModel", "ngClass", "ngModelChange"], ["edititem_description", "ngModel", "ItemDescription", ""], ["type", "text", "matInput", "", "id", "txtEdititem_type", "placeholder", "Item Type", "disabled", "disabled", "name", "item_type", "minlength", "3", "maxlength", "30", 3, "ngModel", "ngModelChange"], ["edititem_type", "ngModel"], ["type", "text", "matInput", "", "id", "txtEditsub_category", "placeholder", "Sub Category", "disabled", "disabled", "name", "sub_category", "minlength", "3", "maxlength", "30", 3, "ngModel", "ngModelChange"], ["editsub_category", "ngModel"], ["floatLabel", "auto", "appearance", "standard", "color", "primary", 1, "w-100"], ["type", "text", "matInput", "", "id", "txtEditSupplier", "placeholder", "supplier", "name", "supplier", "minlength", "3", "maxlength", "30", "pattern", "^[A-Za-z0-9 /-]*$", "disabled", "disabled", 3, "ngModel", "ngClass", "ngModelChange"], ["editSupplier", "ngModel"], ["type", "text", "matInput", "", "id", "txtUnitPrice", "placeholder", "Unit Price", "name", "unit_price", "minlength", "3", "maxlength", "30", "pattern", "^[A-Za-z0-9 /-]*$", "disabled", "disabled", 3, "ngModel", "ngClass", "ngModelChange"], ["editunit_price", "ngModel"], ["type", "text", "matInput", "", "id", "txtEditpo_number", "placeholder", "PO Number", "name", "po_number", "minlength", "3", "maxlength", "30", "disabled", "disabled", 3, "ngModel", "ngModelChange"], ["editpo_number", "ngModel"], ["type", "text", "matInput", "", "id", "txtEditpr_number", "placeholder", "PR Number", "name", "pr_number", "minlength", "3", "maxlength", "30", "pattern", "^[A-Za-z0-9 /-]*$", "disabled", "disabled", 3, "ngModel", "ngModelChange"], ["editpr_number", "ngModel"], ["type", "text", "matInput", "", "id", "txtqty_order", "placeholder", "Quantity Ordered", "name", "qty_order", "minlength", "3", "maxlength", "30", "pattern", "^[A-Za-z0-9 /-]*$", "disabled", "disabled", 3, "ngModel", "ngClass", "ngModelChange"], ["editqty_order", "ngModel", "QtyOrdered", ""], ["type", "text", "matInput", "", "id", "txtEditmfg_date", "readonly", "", "name", "mfg_date", "readonly", "readonly", 3, "matDatepicker", "max", "ngModel", "ngClass", "ngModelChange"], ["editmfg_date", "ngModel"], ["matSuffix", "", 3, "for"], ["matDatepickerToggleIcon", ""], ["startView", "month"], ["dobDatepicker_mfg", ""], ["type", "text", "matInput", "", "id", "txtexpected_delivery", "placeholder", "Expected Delivery", "name", "expected_delivery", "required", "required", "maxlength", "9", "c", "", 3, "ngModel", "ngClass", "ngModelChange", "keypress", "keyup"], ["editexpected_delivery", "ngModel", "ExpectedDeliveryActual", ""], ["type", "text", "matInput", "", "id", "txtactual_remaining_receiving", "name", "actual_remaining_receiving", "disabled", "disabled", 3, "ngModel", "ngClass", "ngModelChange"], ["editactual_remaining_receiving", "ngModel", "ActualRemainingReceiving", ""], [1, "hideObject"], ["type", "text", "id", "Allowable_Percentage_id"], ["TotalAllowablePercentage", ""], [1, "form-group", "row", "hideObject"], ["for", "txtEditDateOfStart", 1, "col-sm-4", "col-form-label"], ["type", "date", "id", "txtEditDateOfStart", "placeholder", "Date of Start", "name", "DateOfStart", "required", "required", 1, "form-control", 2, "width", "180px", 3, "ngModel", "ngClass", "ngModelChange"], ["editDateOfStart", "ngModel"], [1, "col-sm-4"], ["type", "checkbox", "id", "chkEditActive", "value", "true", "name", "active", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "chkEditActive", 1, "form-check-label"], ["for", "rbEditStatusInForce", 1, "col-sm-4"], [1, "form-check", "form-check-inline", "hideObject"], ["type", "radio", "id", "rbEditStatusInForce", "value", "In Force", "name", "Status", "required", "required", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["editStatusInForce", "ngModel"], ["for", "rbEditStatusInForce", 1, "form-check-label"], ["type", "radio", "id", "rbEditStatusSupport", "value", "Support", "name", "Status", "required", "required", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["editStatusSupport", "ngModel"], ["for", "rbEditStatusSupport", 1, "form-check-label"], ["type", "text", "matInput", "", "id", "txtpo_date", "placeholder", "PO Date", "name", "po_date", "required", "required", "minlength", "3", "maxlength", "30", "pattern", "^[A-Za-z0-9 /-]*$", "disabled", "disabled", 3, "ngModel", "ngModelChange"], ["editpo_date", "ngModel"], ["type", "text", "matInput", "", "id", "txtEditipr_date", "placeholder", "PR Date", "name", "pr_date", "required", "required", "minlength", "3", "maxlength", "30", "pattern", "^[A-Za-z0-9 /-]*$", "disabled", "disabled", 3, "ngModel", "ngModelChange"], ["editpr_date", "ngModel"], ["type", "text", "matInput", "", "id", "txtEditqty_uom", "placeholder", "Unit Of Measure", "name", "qty_uom", "minlength", "3", "maxlength", "30", "pattern", "^[A-Za-z0-9 /-]*$", "disabled", "disabled", 3, "ngModel", "ngClass", "ngModelChange"], ["editqty_uom", "ngModel"], ["type", "text", "matInput", "", "id", "txtEditexpiration_date", "readonly", "", "name", "expiration_date", 3, "matDatepicker", "min", "ngModel", "ngClass", "ngModelChange", "dateChange"], ["editexpiration_date", "ngModel", "ExpiryDateChild", ""], ["align", "end", 3, "value", 4, "ngFor", "ngForOf"], ["matDatepickerToggleIcon", "", "id", "select_expiry"], ["dobDatepicker", ""], ["type", "text", "matInput", "", "id", "actual_delivery_output", "placeholder", "Quantity Actual Delivered", "required", "required", "name", "actual_delivery", "maxlength", "9", "autocomplete", "off", 3, "ngModel", "ngClass", "ngModelChange", "keypress", "keyup"], ["editactual_delivery", "ngModel", "ActualDeliveryChild", ""], ["type", "text", "matInput", "", "id", "txtEditreceived_by_QA", "disabled", "disabled", 3, "value"], ["received_by", ""], ["for", "txtEditTeamSize", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditTeamSize", "placeholder", "Team Size", "name", "TeamSize", "pattern", "^[0-9]*$", "maxlength", "7", "appTeamSizeValidator", "5", 1, "form-control", 2, "width", "150px", 3, "ngModel", "ngClass", "ngModelChange"], ["editTeamSize", "ngModel"], ["for", "drpEditClientLocation", 1, "col-sm-4", "col-form-label"], ["id", "drpEditClientLocation", "name", "ClientLocation", "required", "required", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["editClientLocationID", "ngModel"], ["mat-fab", "", "color", "warn", "id", "AddRejectBtn", 3, "click"], ["mat-fab", "", "color", "primary", "id", "remove-remarks-button", 1, "ml-80", 3, "click"], ["id", "rejectionrow1", 1, "form-group", "row"], ["appearance", "fill"], ["name", "status_of_reject_one", "id", "drpEditRejectStatusOne", 3, "ngModel", "selectionChange", "ngModelChange"], ["id", "rejectionrow2", 1, "form-group", "row"], ["name", "status_of_reject_two", "id", "drpEditRejectStatusTwo", 3, "ngModel", "ngModelChange", "selectionChange"], ["RejectedStatus2", ""], ["id", "rejectionrow32", 1, "form-group", "row"], ["rejectedStatusElementNo3", ""], ["name", "status_of_reject_three", "id", "drpEditRejectStatusThree", 3, "ngModel", "ngModelChange", "selectionChange"], ["id", "total-reject", 1, "form-group", "row"], ["type", "text", "matInput", "", "name", "total_of_reject_mat", "readonly", "readonly", 3, "ngModel", "ngModelChange"], ["totalofReject", ""], ["id", "rejectionrow12", 1, "form-group", "row"], ["type", "text", "name", "count_of_reject_one", "matInput", "", "maxlength", "9", "id", "rejectRow1", 3, "ngModel", "ngClass", "keyup", "ngModelChange", "keypress"], ["rejectNo1", "", "editcount_of_reject_one", "ngModel"], ["id", "rejectionrow22", 1, "form-group", "row"], ["type", "text", "name", "count_of_reject_two", "matInput", "", "maxlength", "9", "id", "rejectRow2", 3, "ngModel", "ngClass", "keyup", "ngModelChange", "keypress"], ["rejectNo2", "", "editcount_of_reject_two", "ngModel"], ["id", "rejectionrow3", 1, "form-group", "row"], ["type", "text", "name", "count_of_reject_three", "matInput", "", "maxlength", "9", "id", "rejectRow3", 3, "ngModel", "ngClass", "keyup", "ngModelChange", "keypress"], ["rejectNo3", "", "editcount_of_reject_three", "ngModel"], ["id", "total-confirm-reject", 1, "form-group", "row"], ["type", "text", "matInput", "", "name", "total_of_reject_mat", 3, "ngModel", "ngModelChange", "keyup", "keypress"], ["confirmReject", ""], [1, "text-danger", "rejectIsnotMactchSpanTagclass"], ["rejectIsnotMactchSpanTag", ""], [1, "table", "table-bordered"], ["scope", "col"], ["scope", "row"], ["cdkTextareaAutosize", "", "matInput", "", "name", "a_delivery_van_desc", "required", "", "readonly", "", 1, "text-area-main", 3, "ngModel", "ngClass", "ngModelChange"], ["edita_delivery_van_desc", "ngModel"], ["name", "a_compliance", "id", "rbEditCompliance", "required", "required", 3, "ngModel", "ngModelChange"], ["editCompliance", "ngModel"], ["value", "Compliance", 3, "click"], ["value", "Non-Compliance", 3, "click"], ["cdkTextareaAutosize", "", "matInput", "", "name", "a_remarks", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["edita_remarks", "ngModel", "remarksSectionA1", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "b_cooling_system_desc", "readonly", "", 1, "text-area-main2", 3, "ngModel", "ngClass", "ngModelChange"], ["editb_cooling_system_desc", "ngModel"], ["id", "rbEditCompliance", "name", "b_compliance", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "b_remarks", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editb_remarks", "ngModel", "remarksSectionA2", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "c_inner_walls_desc", "readonly", "", 1, "text-area-main3", 3, "ngModel", "ngClass", "ngModelChange"], ["editc_inner_walls_desc", "ngModel"], ["id", "rbEditCompliance", "name", "c_compliance", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "c_remarks", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editc_remarks", "ngModel", "remarksSectionA3", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "d_plastic_curtains_desc", "readonly", "", 1, "text-area-main4", 3, "ngModel", "ngClass", "ngModelChange"], ["editd_plastic_curtains_desc", "ngModel"], ["id", "rbEditCompliance", "name", "d_compliance", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "d_remarks", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editd_remarks", "ngModel", "remarksSectionA4", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "e_thereno_pest_desc", "readonly", "", 1, "text-area-main5", 3, "ngModel", "ngClass", "ngModelChange"], ["edite_thereno_pest_desc", "ngModel"], ["id", "rbEditCompliance", "name", "e_compliance", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "e_remarks", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["edite_remarks", "ngModel", "remarksSectionA5", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "a_clean_company_dos", "readonly", "", 1, "text-area-main", 3, "ngModel", "ngClass", "ngModelChange"], ["edita_clean_company_dos", "ngModel"], ["id", "rbEditCompliance", "name", "a_compliance_dos", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "a_remarks_dos", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["edita_remarks_dos", "ngModel", "remarksSectionB1", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "b_delivery_staff_symptoms_dos", "readonly", "", 1, "text-area-main2", 3, "ngModel", "ngClass", "ngModelChange"], ["editb_delivery_staff_symptoms_dos", "ngModel"], ["id", "rbEditCompliance", "name", "b_compliance_dos", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "b_remarks_dos", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editb_remarks_dos", "ngModel", "remarksSectionB2", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "c_inner_walls_clean_dos", "readonly", "", 1, "text-area-main3", 3, "ngModel", "ngClass", "ngModelChange"], ["editc_inner_walls_clean_dos", "ngModel"], ["id", "rbEditCompliance", "name", "c_compliance_dos", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "c_remarks_dos", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editc_remarks_dos", "ngModel", "remarksSectionB3", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "d_plastic_curtains_dos", "readonly", "", 1, "text-area-main4", 3, "ngModel", "ngClass", "ngModelChange"], ["editd_plastic_curtains_dos", "ngModel"], ["id", "rbEditCompliance", "name", "d_compliance_dos", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "d_remarks_dos", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editd_remarks_dos", "ngModel", "remarksSectionB4", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "e_no_accessories_dos", "readonly", "", 1, "text-area-main5", 3, "ngModel", "ngClass", "ngModelChange"], ["edite_no_accessories_dos", "ngModel"], ["id", "rbEditCompliance", "name", "e_compliance_dos", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "e_remarks_dos", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["edite_remarks_dos", "ngModel", "remarksSectionB5", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "f_no_pests_sightings_dos", "readonly", "", 1, "text-area-main5", 3, "ngModel", "ngClass", "ngModelChange"], ["editf_no_pests_sightings_dos", "ngModel"], ["id", "rbEditCompliance", "name", "f_compliance_dos", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "f_remarks_dos", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editf_remarks_dos", "ngModel", "remarksSectionB6", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "a_pallet_crates_tres", "readonly", "", 1, "text-area-main", 3, "ngModel", "ngClass", "ngModelChange"], ["edita_pallet_crates_tres", "ngModel"], ["name", "a_compliance_tres", "id", "rbEditCompliance", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "a_remarks_tres", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["edita_remarks_tres", "ngModel", "remarksSectionC1", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "b_product_contamination_tres", "readonly", "", 1, "text-area-main2", 3, "ngModel", "ngClass", "ngModelChange"], ["editb_product_contamination_tres", "ngModel"], ["id", "rbEditCompliance", "name", "b_compliance_tres", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "b_remarks_tres", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editb_remarks_tres", "ngModel", "remarksSectionC2", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "c_uncessary_items_tres", "readonly", "", 1, "text-area-main3", 3, "ngModel", "ngClass", "ngModelChange"], ["editc_uncessary_items_tres", "ngModel"], ["id", "rbEditCompliance", "name", "c_compliance_tres", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "c_remarks_tres", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editc_remarks_tres", "ngModel", "remarksSectionC3", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "d_products_cover_tres", "readonly", "", 1, "text-area-main4", 3, "ngModel", "ngClass", "ngModelChange"], ["editd_products_cover_tres", "ngModel"], ["id", "rbEditCompliance", "name", "d_compliance_tres", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "d_remarks_tres", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editd_remarks_tres", "ngModel", "remarksSectionC4", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "a_certificate_coa_kwatro_desc", "readonly", "", 1, "text-area-main", 3, "ngModel", "ngClass", "ngModelChange"], ["edita_certificate_coa_kwatro_desc", "ngModel"], ["name", "a_compliance_kwatro", "id", "rbEditCompliance", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "a_remarks_kwatro", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["edita_remarks_kwatro", "ngModel", "remarksSectionD1", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "b_po_kwatro_desc", "readonly", "", 1, "text-area-main2", 3, "ngModel", "ngClass", "ngModelChange"], ["editb_po_kwatro_desc", "ngModel"], ["id", "rbEditCompliance", "name", "b_compliance_kwatro", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "b_remarks_kwatro", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editb_remarks_kwatro", "ngModel", "remarksSectionD2", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "c_msds_kwatro_desc", "readonly", "", 1, "text-area-main3", 3, "ngModel", "ngClass", "ngModelChange"], ["editc_msds_kwatro_desc", "ngModel"], ["id", "rbEditCompliance", "name", "c_compliance_kwatro", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "c_remarks_kwatro", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editc_remarks_kwatro", "ngModel", "remarksSectionD3", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "d_food_grade_desc", "readonly", "", 1, "text-area-main4", 3, "ngModel", "ngClass", "ngModelChange"], ["editd_food_grade_desc", "ngModel"], ["id", "rbEditCompliance", "name", "d_compliance_kwatro", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "d_remarks_kwatro", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editd_remarks_kwatro", "ngModel", "remarksSectionD4", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "a_qty_received_singko_singko", "readonly", "", 1, "text-area-main", 3, "ngModel", "ngClass", "ngModelChange"], ["edita_qty_received_singko_singko", "ngModel"], ["name", "a_compliance_singko", "id", "rbEditCompliance", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "a_remarks_singko", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["edita_remarks_singko", "ngModel", "remarksSectionE1", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "b_mfg_date_desc_singko", "readonly", "", 1, "text-area-main2", 3, "ngModel", "ngClass", "ngModelChange"], ["editb_mfg_date_desc_singko", "ngModel"], ["id", "rbEditCompliance", "name", "b_compliance_singko", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "b_remarks_singko", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editb_remarks_singko", "ngModel", "remarksSectionE2", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "c_expirydate_desc_singko", "readonly", "", 1, "text-area-main3", 3, "ngModel", "ngClass", "ngModelChange"], ["editc_expirydate_desc_singko", "ngModel"], ["id", "rbEditCompliance", "name", "c_compliance_singko", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "c_remarks_singko", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editc_remarks_singko", "ngModel", "remarksSectionE3", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "d_packaging_desc_singko", "readonly", "", 1, "text-area-main4", 3, "ngModel", "ngClass", "ngModelChange"], ["editd_packaging_desc_singko", "ngModel"], ["id", "rbEditCompliance", "name", "d_compliance_singko", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "d_remarks_singko", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editd_remarks_singko", "ngModel", "remarksSectionE4", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "e_no_contaminants_desc_singko", "readonly", "", 1, "text-area-main4", 3, "ngModel", "ngClass", "ngModelChange"], ["edite_no_contaminants_desc_singko", "ngModel"], ["id", "rbEditCompliance", "name", "e_compliance_singko", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "e_remarks_singko", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["edite_remarks_singko", "ngModel", "remarksSectionE5", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "f_qtyrejected_desc_singko", "readonly", "", 1, "text-area-main4", 3, "ngModel", "ngClass", "ngModelChange"], ["editf_qtyrejected_desc_singko", "ngModel"], ["id", "rbEditCompliance", "name", "f_compliance_singko", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "f_remarks_singko", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editf_remarks_singko", "ngModel", "remarksSectionE6", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "g_rejected_reason_desc_singko", "readonly", "", 1, "text-area-main4", 3, "ngModel", "ngClass", "ngModelChange"], ["editg_rejected_reason_desc_singko", "ngModel"], ["id", "rbEditCompliance", "name", "g_compliance_singko", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "g_remarks_singko", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["editg_remarks_singko", "ngModel", "remarksSectionE7", ""], ["cdkTextareaAutosize", "", "matInput", "", "name", "h_lab_sample_desc_singko", "readonly", "", 1, "text-area-main4", 3, "ngModel", "ngClass", "ngModelChange"], ["edith_lab_sample_desc_singko", "ngModel"], ["id", "rbEditCompliance", "name", "h_compliance_singko", "required", "required", 3, "ngModel", "ngModelChange"], ["cdkTextareaAutosize", "", "matInput", "", "name", "h_remarks_singko", "required", "", 1, "text-area-main", "bg-color-yellow-textarea", 3, "ngModel", "ngClass", "ngModelChange"], ["edith_remarks_singko", "ngModel", "remarksSectionE8", ""], ["mat-stroked-button", "", "color", "primary", 1, "mr-2", 3, "click"], ["mat-stroked-button", "", "color", "warn", "data-dismiss", "modal", "id", "editFormCancel"], ["role", "dialog", "id", "deleteModal", 1, "modal"], ["type", "text", "matInput", "", "id", "txtDeleteProjectID", "placeholder", "Project ID", "name", "ProjectID", "disabled", "disabled", 3, "ngModel", "ngModelChange"], ["type", "text", "matInput", "", "id", "txtDeleteProjectName", "placeholder", "Description", "name", "item_description", "disabled", "disabled", 3, "ngModel", "ngModelChange"], ["mat-stroked-button", "", "color", "accent", "data-dismiss", "modal", 1, "mr-2"], ["mat-stroked-button", "", "color", "warn", "data-dismiss", "modal", 3, "click"], ["role", "dialog", "id", "CancelledTransactionModal", 1, "modal"], ["PONumber", ""], ["appearance", "fill", 1, "w-100"], ["name", "cancelled_reason", "required", "", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-circle-o-notch", "fa-spin", 2, "font-size", "34px"], ["mat-icon-button", "", "color", "black", "data-toggle", "modal", "data-target", "#editModal", "data-backdrop", "false", "title", "Edit", "data-keyboard", "false", 3, "click"], ["mat-icon-button", "", "color", "warn", "data-toggle", "modal", "data-target", "#CancelledTransactionModal", "data-backdrop", "false", "data-keyboard", "false", 3, "click"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass", "click"], ["href", "#", "onclick", "return false", 1, "page-link"], ["class", "page-item", 3, "ngClass", "click", 4, "ngIf"], [1, "text-danger"], [3, "value"], ["type", "text", 3, "value"], ["ActiveAllowablePercentage", ""], ["ActiveNearlyExpirySetpoint", ""], ["align", "end", 3, "value"], ["RejectedStatus1", ""], ["RejectedStatus3", ""], ["type", "text", "matInput", "", "id", "ActivePartialReceiving", "disabled", "disabled", 3, "value"], ["ActivePartialReceiving", ""]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "QC RM PO RECEIVING ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, ProjectsComponent_i_12_Template, 1, 0, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_select_ngModelChange_19_listener($event) { return ctx.searchBy = $event; })("selectionChange", function ProjectsComponent_Template_mat_select_selectionChange_19_listener($event) { return ctx.HideSearchBtn($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Item Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Item Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "PO Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Search by");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-hint", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Choose a Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "zoom_in");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_34_listener($event) { return ctx.searchText = $event; })("keyup", function ProjectsComponent_Template_input_keyup_34_listener($event) { return ctx.onSearchTextKeyup($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "mat-hint", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Search description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "PO\u00A0No. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Item\u00A0Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, " Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, " Supplier ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Qty.\u00A0Ordered ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Remaining ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](59, ProjectsComponent_tr_59_Template, 21, 15, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](60, "paging");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](61, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "ul", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_li_click_64_listener() { return ctx.onPageIndexClicked(ctx.currentPageIndex - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](67, ProjectsComponent_ng_container_67_Template, 2, 1, "ng-container", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, ProjectsComponent_ng_container_68_Template, 17, 16, "ng-container", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_li_click_69_listener() { return ctx.onPageIndexClicked(ctx.currentPageIndex + 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "form", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, "New Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, "Project ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "input", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_88_listener($event) { return ctx.newProject.projectID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](91, ProjectsComponent_span_91_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](92, ProjectsComponent_span_92_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](93, ProjectsComponent_span_93_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "Is Activated");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "input", 43, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_98_listener($event) { return ctx.newProject.is_activated = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "input", 46, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_105_listener($event) { return ctx.newProject.projectName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](107, ProjectsComponent_span_107_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](108, ProjectsComponent_span_108_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](109, ProjectsComponent_span_109_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, "Date of Starts");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "input", 49, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_114_listener($event) { return ctx.newProject.dateOfStart = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](116, ProjectsComponent_span_116_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](119, "Team Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "input", 52, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_121_listener($event) { return ctx.newProject.teamSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](123, ProjectsComponent_span_123_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](124, ProjectsComponent_span_124_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](126, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](127, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_130_listener($event) { return ctx.newProject.active = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](132, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](134, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](135, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](138, "input", 60, 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_138_listener($event) { return ctx.newProject.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](140, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](141, "In Force");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](142, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](143, "input", 63, 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_143_listener($event) { return ctx.newProject.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](145, "label", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](146, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](147, ProjectsComponent_span_147_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](148, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](149, "label", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](150, "Client Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](152, "select", 67, 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_select_ngModelChange_152_listener($event) { return ctx.newProject.clientLocationID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](154, "option", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](155, "Please Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](156, ProjectsComponent_option_156_Template, 2, 2, "option", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](157, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](158, ProjectsComponent_span_158_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](159, ProjectsComponent_span_159_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](160, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](161, "button", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](162, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](163, "button", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_163_listener() { return ctx.onSaveClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](164, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](165, "form", 28, 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](167, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](168, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](169, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](170, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](171, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](172, "RECEIVING CHECKLIST");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](173, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](174, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](175, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](176, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](177, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](178, "RAW MATERIAL INFORMATIONS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](179, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](180, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](181, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](182, "input", 80, 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_182_listener($event) { return ctx.editProject.projectID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](184, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](185, "Transaction ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](186, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](187, "format_list_numbered");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](188, ProjectsComponent_span_188_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](189, ProjectsComponent_span_189_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](190, ProjectsComponent_span_190_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](191, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](192, "input", 82, 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_192_listener($event) { return ctx.editProject.item_code = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](194, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](195, "Item Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](196, ProjectsComponent_span_196_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](197, ProjectsComponent_span_197_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](198, ProjectsComponent_span_198_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](199, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](200, "input", 84, 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_200_listener($event) { return ctx.editProject.item_class = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](202, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](203, "Item Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](204, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](205, "input", 86, 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_205_listener($event) { return ctx.editProject.major_category = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](207, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](208, "Major Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](209, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](210, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](211, "input", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](212, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](213, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](214, "Receiving Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](215, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](216, "calendar_today");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](217, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](218, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](219, "input", 91, 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_219_listener($event) { return ctx.editProject.item_description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](222, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](223, "Item Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](224, ProjectsComponent_span_224_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](225, ProjectsComponent_span_225_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](226, ProjectsComponent_span_226_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](227, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](228, "input", 93, 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_228_listener($event) { return ctx.editProject.item_type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](230, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](231, "Item Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](232, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](233, "input", 95, 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_233_listener($event) { return ctx.editProject.sub_category = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](235, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](236, "Sub Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](237, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](238, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](239, "mat-form-field", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](240, "input", 98, 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_240_listener($event) { return ctx.editProject.supplier = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](242, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](243, "Supplier");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](244, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](245, "mat-form-field", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](246, "input", 100, 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_246_listener($event) { return ctx.editProject.unit_price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](248, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](249, "Unit Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](250, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](251, "RECEIVING INFORMATION ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](252, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](253, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](254, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](255, "input", 102, 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_255_listener($event) { return ctx.editProject.po_number = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](257, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](258, "Po Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](259, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](260, "input", 104, 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_260_listener($event) { return ctx.editProject.pr_number = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](262, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](263, "PR Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](264, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](265, "input", 106, 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_265_listener($event) { return ctx.editProject.qty_order = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](268, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](269, "Quantity Ordered");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](270, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](271, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](272, "MFTG. Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](273, "input", 108, 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_273_listener($event) { return ctx.editProject.mfg_date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](275, "mat-hint", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](276, "Product Mftg Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](277, "mat-datepicker-toggle", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](278, "mat-icon", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](279, "keyboard_arrow_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](280, "mat-datepicker", 112, 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](282, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](283, "input", 114, 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_283_listener($event) { return ctx.editProject.expected_delivery = $event; })("keypress", function ProjectsComponent_Template_input_keypress_283_listener($event) { return ctx.decimalFilter($event); })("keyup", function ProjectsComponent_Template_input_keyup_283_listener($event) { return ctx.AllowablePercentageComputation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](286, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](287, "Expected Delivery");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](288, ProjectsComponent_span_288_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](289, ProjectsComponent_span_289_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](290, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](291, "input", 116, 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_291_listener($event) { return ctx.editProject.actual_remaining_receiving = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](294, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](295, "Remaining Needed");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](296, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](297, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](298, " Note :Active Allowable Percentage BUJE Singian");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](299, ProjectsComponent_p_299_Template, 3, 2, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](300, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](301, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](302, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](303, "GrandTotal of Allowable Percentage Haha");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](304, "input", 119, 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](306, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](307, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](308, "Note : Active Expiration Days Set Point Only");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](309, ProjectsComponent_p_309_Template, 3, 2, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](310, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](311, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](312, "label", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](313, "Date of Start exx");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](314, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](315, "input", 123, 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_315_listener($event) { return ctx.editProject.dateOfStart = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](317, ProjectsComponent_span_317_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](318, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](319, "label", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](320, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](321, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](322, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](323, "input", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_323_listener($event) { return ctx.editProject.active = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](324, "label", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](325, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](326, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](327, "label", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](328, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](329, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](330, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](331, "input", 130, 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_331_listener($event) { return ctx.editProject.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](333, "label", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](334, "In Force");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](335, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](336, "input", 133, 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_336_listener($event) { return ctx.editProject.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](338, "label", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](339, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](340, ProjectsComponent_span_340_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](341, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](342, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](343, "input", 136, 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_343_listener($event) { return ctx.editProject.po_date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](345, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](346, "Po Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](347, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](348, "input", 138, 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_348_listener($event) { return ctx.editProject.pr_date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](350, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](351, "PR Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](352, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](353, "input", 140, 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_353_listener($event) { return ctx.editProject.qty_uom = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](355, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](356, "Unit Of Measure");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](357, ProjectsComponent_span_357_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](358, ProjectsComponent_span_358_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](359, ProjectsComponent_span_359_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](360, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](361, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](362, "Expiry Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](363, "input", 142, 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_363_listener($event) { return ctx.editProject.expiration_date = $event; })("dateChange", function ProjectsComponent_Template_input_dateChange_363_listener($event) { return ctx.selectExpiryDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](366, ProjectsComponent_mat_hint_366_Template, 2, 2, "mat-hint", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](367, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](368, "mat-datepicker-toggle", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](369, "mat-icon", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](370, "keyboard_arrow_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](371, "mat-datepicker", 112, 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](373, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](374, "input", 147, 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_374_listener($event) { return ctx.editProject.actual_delivery = $event; })("keypress", function ProjectsComponent_Template_input_keypress_374_listener($event) { return ctx.decimalFilter($event); })("keyup", function ProjectsComponent_Template_input_keyup_374_listener($event) { return ctx.ActualDeliveryComputation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](377, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](378, "QTY. Actual Delivered");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](379, ProjectsComponent_mat_hint_379_Template, 2, 2, "mat-hint", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](380, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](381, ProjectsComponent_span_381_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](382, ProjectsComponent_span_382_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](383, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](384, "input", 149, 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](386, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](387, "Assigned Person ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](388, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](389, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](390, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](391, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](392, "label", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](393, "Team Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](394, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](395, "input", 152, 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_395_listener($event) { return ctx.editProject.teamSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](397, ProjectsComponent_span_397_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](398, ProjectsComponent_span_398_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](399, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](400, "label", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](401, "Client Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](402, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](403, "select", 155, 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_select_ngModelChange_403_listener($event) { return ctx.editProject.clientLocationID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](405, "option", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](406, "Please Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](407, ProjectsComponent_option_407_Template, 2, 2, "option", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](408, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](409, ProjectsComponent_span_409_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](410, ProjectsComponent_span_410_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](411, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](412, "REJECTION INFORMATION ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](413, "button", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_413_listener($event) { return ctx.onAddAdditionalRejectRow($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](414, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](415, "button", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_415_listener($event) { return ctx.onRemoveAdditionalRejectRow($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](416, "Undo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](417, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](418, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](419, "div", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](420, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](421, "mat-form-field", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](422, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](423, "Rejected Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](424, "mat-select", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function ProjectsComponent_Template_mat_select_selectionChange_424_listener($event) { return ctx.validateRejectedStatus($event); })("ngModelChange", function ProjectsComponent_Template_mat_select_ngModelChange_424_listener($event) { return ctx.editProject.status_of_reject_one = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](425, ProjectsComponent_mat_option_425_Template, 3, 2, "mat-option", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](426, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](427, "div", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](428, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](429, "mat-form-field", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](430, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](431, "Rejected Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](432, "mat-select", 163, 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_select_ngModelChange_432_listener($event) { return ctx.editProject.status_of_reject_two = $event; })("selectionChange", function ProjectsComponent_Template_mat_select_selectionChange_432_listener($event) { return ctx.validateRejectedStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](434, ProjectsComponent_mat_option_434_Template, 2, 2, "mat-option", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](435, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](436, "div", 165, 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](438, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](439, "mat-form-field", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](440, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](441, "Rejected Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](442, "mat-select", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_select_ngModelChange_442_listener($event) { return ctx.editProject.status_of_reject_three = $event; })("selectionChange", function ProjectsComponent_Template_mat_select_selectionChange_442_listener($event) { return ctx.validateRejectedStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](443, ProjectsComponent_mat_option_443_Template, 3, 2, "mat-option", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](444, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](445, "div", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](446, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](447, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](448, "input", 169, 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_448_listener($event) { return ctx.editProject.total_of_reject_mat = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](450, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](451, "Total No. of Reject");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](452, "mat-hint", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](453, "Grand Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](454, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](455, "div", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](456, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](457, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](458, "input", 172, 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function ProjectsComponent_Template_input_keyup_458_listener($event) { return ctx.onChangeEventReject1($event); })("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_458_listener($event) { return ctx.editProject.count_of_reject_one = $event; })("keypress", function ProjectsComponent_Template_input_keypress_458_listener($event) { return ctx.validateNumber($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](461, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](462, "No.of Reject");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](463, ProjectsComponent_span_463_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](464, "div", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](465, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](466, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](467, "input", 175, 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function ProjectsComponent_Template_input_keyup_467_listener($event) { return ctx.onChangeEventReject2($event); })("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_467_listener($event) { return ctx.editProject.count_of_reject_two = $event; })("keypress", function ProjectsComponent_Template_input_keypress_467_listener($event) { return ctx.validateNumber($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](470, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](471, "No.of Reject");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](472, "div", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](473, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](474, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](475, "input", 178, 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function ProjectsComponent_Template_input_keyup_475_listener($event) { return ctx.onChangeEventReject3($event); })("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_475_listener($event) { return ctx.editProject.count_of_reject_three = $event; })("keypress", function ProjectsComponent_Template_input_keypress_475_listener($event) { return ctx.validateNumber($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](478, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](479, "No.of Reject");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](480, "div", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](481, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](482, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](483, "input", 181, 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_483_listener($event) { return ctx.editProject.total_of_reject_mat = $event; })("keyup", function ProjectsComponent_Template_input_keyup_483_listener($event) { return ctx.ConfirmNoofReject($event); })("keypress", function ProjectsComponent_Template_input_keypress_483_listener($event) { return ctx.validateNumber($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](485, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](486, "Confirm No. of Reject");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](487, "mat-hint", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](488, "Confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](489, "span", 183, 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](491, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](492, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](493, "table", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](494, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](495, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](496, "th", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](497, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](498, "th", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](499, "Delivery Van Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](500, "th", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](501, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](502, "th", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](503, "Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](504, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](505, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](506, "th", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](507, "a.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](508, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](509, "textarea", 188, 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_509_listener($event) { return ctx.editProject.a_delivery_van_desc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](511, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](512, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](513, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](514, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](515, "mat-radio-group", 190, 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_515_listener($event) { return ctx.editProject.a_compliance = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](517, "mat-radio-button", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_517_listener() { return ctx.ComplianceSectionA1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](518, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](519, "mat-radio-button", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_519_listener() { return ctx.NoneComplianceSectionA1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](520, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](521, ProjectsComponent_span_521_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](522, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](523, "textarea", 194, 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_523_listener($event) { return ctx.editProject.a_remarks = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](526, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](527, ProjectsComponent_span_527_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](528, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](529, "th", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](530, "b.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](531, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](532, "textarea", 196, 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_532_listener($event) { return ctx.editProject.b_cooling_system_desc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](534, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](535, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](536, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](537, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](538, "mat-radio-group", 198, 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_538_listener($event) { return ctx.editProject.b_compliance = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](540, "mat-radio-button", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_540_listener() { return ctx.ComplianceSectionA2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](541, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](542, "mat-radio-button", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_542_listener() { return ctx.NoneComplianceSectionA2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](543, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](544, ProjectsComponent_span_544_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](545, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](546, "textarea", 199, 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_546_listener($event) { return ctx.editProject.b_remarks = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](549, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](550, ProjectsComponent_span_550_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](551, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](552, "th", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](553, "c.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](554, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](555, "textarea", 201, 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_555_listener($event) { return ctx.editProject.c_inner_walls_desc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](557, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](558, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](559, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](560, "mat-radio-group", 203, 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_560_listener($event) { return ctx.editProject.c_compliance = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](562, "mat-radio-button", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_562_listener() { return ctx.ComplianceSectionA3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](563, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](564, "mat-radio-button", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_564_listener() { return ctx.NoneComplianceSectionA3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](565, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](566, ProjectsComponent_span_566_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](567, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](568, "textarea", 204, 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_568_listener($event) { return ctx.editProject.c_remarks = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](571, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](572, ProjectsComponent_span_572_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](573, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](574, "th", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](575, "d.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](576, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](577, "textarea", 206, 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_577_listener($event) { return ctx.editProject.d_plastic_curtains_desc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](579, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](580, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](581, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](582, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](583, "mat-radio-group", 208, 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_583_listener($event) { return ctx.editProject.d_compliance = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](585, "mat-radio-button", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_585_listener() { return ctx.ComplianceSectionA4(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](586, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](587, "mat-radio-button", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_587_listener() { return ctx.NoneComplianceSectionA4(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](588, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](589, ProjectsComponent_span_589_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](590, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](591, "textarea", 209, 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_591_listener($event) { return ctx.editProject.d_remarks = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](594, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](595, ProjectsComponent_span_595_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](596, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](597, "th", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](598, "e.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](599, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](600, "textarea", 211, 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_600_listener($event) { return ctx.editProject.e_thereno_pest_desc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](602, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](603, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](604, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](605, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](606, "mat-radio-group", 213, 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_606_listener($event) { return ctx.editProject.e_compliance = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](608, "mat-radio-button", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_608_listener() { return ctx.ComplianceSectionA5(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](609, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](610, "mat-radio-button", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_610_listener() { return ctx.NoneComplianceSectionA5(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](611, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](612, ProjectsComponent_span_612_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](613, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](614, "textarea", 214, 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_614_listener($event) { return ctx.editProject.e_remarks = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](617, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](618, ProjectsComponent_span_618_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](619, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](620, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](621, "table", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](622, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](623, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](624, "th", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](625, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](626, "th", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](627, "||. Hygine Practices");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](628, "th", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](629, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](630, "th", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](631, "Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](632, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](633, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](634, "th", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](635, "a.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](636, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](637, "textarea", 216, 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_637_listener($event) { return ctx.editProject.a_clean_company_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](639, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](640, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](641, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](642, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](643, "mat-radio-group", 218, 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_643_listener($event) { return ctx.editProject.a_compliance_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](645, "mat-radio-button", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_645_listener() { return ctx.ComplianceSectionB1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](646, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](647, "mat-radio-button", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_647_listener() { return ctx.NoneComplianceSectionB1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](648, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](649, ProjectsComponent_span_649_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](650, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](651, "textarea", 219, 220);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_651_listener($event) { return ctx.editProject.a_remarks_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](654, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](655, ProjectsComponent_span_655_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](656, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](657, "th", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](658, "b.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](659, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](660, "textarea", 221, 222);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_660_listener($event) { return ctx.editProject.b_delivery_staff_symptoms_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](662, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](663, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](664, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](665, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](666, "mat-radio-group", 223, 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_666_listener($event) { return ctx.editProject.b_compliance_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](668, "mat-radio-button", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_668_listener() { return ctx.ComplianceSectionB2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](669, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](670, "mat-radio-button", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_670_listener() { return ctx.NoneComplianceSectionB2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](671, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](672, ProjectsComponent_span_672_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](673, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](674, "textarea", 224, 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_674_listener($event) { return ctx.editProject.b_remarks_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](677, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](678, ProjectsComponent_span_678_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](679, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](680, "th", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](681, "c.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](682, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](683, "textarea", 226, 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_683_listener($event) { return ctx.editProject.c_inner_walls_clean_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](685, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](686, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](687, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](688, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](689, "mat-radio-group", 228, 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_689_listener($event) { return ctx.editProject.c_compliance_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](691, "mat-radio-button", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_691_listener() { return ctx.ComplianceSectionB3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](692, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](693, "mat-radio-button", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_693_listener() { return ctx.NoneComplianceSectionB3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](694, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](695, ProjectsComponent_span_695_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](696, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](697, "textarea", 229, 230);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_697_listener($event) { return ctx.editProject.c_remarks_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](700, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](701, ProjectsComponent_span_701_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](702, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](703, "th", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](704, "d.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](705, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](706, "textarea", 231, 232);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_706_listener($event) { return ctx.editProject.d_plastic_curtains_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](708, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](709, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](710, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](711, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](712, "mat-radio-group", 233, 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_712_listener($event) { return ctx.editProject.d_compliance_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](714, "mat-radio-button", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_714_listener() { return ctx.ComplianceSectionB4(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](715, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](716, "mat-radio-button", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_716_listener() { return ctx.NoneComplianceSectionB4(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](717, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](718, ProjectsComponent_span_718_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](719, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](720, "textarea", 234, 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_720_listener($event) { return ctx.editProject.d_remarks_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](723, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](724, ProjectsComponent_span_724_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](725, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](726, "th", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](727, "e.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](728, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](729, "textarea", 236, 237);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_729_listener($event) { return ctx.editProject.e_no_accessories_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](731, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](732, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](733, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](734, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](735, "mat-radio-group", 238, 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_735_listener($event) { return ctx.editProject.e_compliance_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](737, "mat-radio-button", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_737_listener() { return ctx.ComplianceSectionB5(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](738, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](739, "mat-radio-button", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_739_listener() { return ctx.NoneComplianceSectionB5(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](740, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](741, ProjectsComponent_span_741_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](742, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](743, "textarea", 239, 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_743_listener($event) { return ctx.editProject.e_remarks_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](746, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](747, ProjectsComponent_span_747_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](748, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](749, "th", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](750, "f.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](751, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](752, "textarea", 241, 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_752_listener($event) { return ctx.editProject.f_no_pests_sightings_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](754, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](755, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](756, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](757, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](758, "mat-radio-group", 243, 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_758_listener($event) { return ctx.editProject.f_compliance_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](760, "mat-radio-button", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_760_listener() { return ctx.ComplianceSectionB6(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](761, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](762, "mat-radio-button", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_762_listener() { return ctx.NoneComplianceSectionB6(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](763, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](764, ProjectsComponent_span_764_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](765, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](766, "textarea", 244, 245);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_766_listener($event) { return ctx.editProject.f_remarks_dos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](769, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](770, ProjectsComponent_span_770_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](771, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](772, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](773, "table", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](774, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](775, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](776, "th", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](777, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](778, "th", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](779, "|||. Food Handling");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](780, "th", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](781, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](782, "th", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](783, "Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](784, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](785, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](786, "th", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](787, "a.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](788, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](789, "textarea", 246, 247);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_789_listener($event) { return ctx.editProject.a_pallet_crates_tres = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](791, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](792, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](793, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](794, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](795, "mat-radio-group", 248, 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_795_listener($event) { return ctx.editProject.a_compliance_tres = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](797, "mat-radio-button", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_797_listener() { return ctx.ComplianceSectionC1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](798, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](799, "mat-radio-button", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_799_listener() { return ctx.NoneComplianceSectionC1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](800, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](801, ProjectsComponent_span_801_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](802, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](803, "textarea", 249, 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_803_listener($event) { return ctx.editProject.a_remarks_tres = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](806, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](807, ProjectsComponent_span_807_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](808, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](809, "th", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](810, "b.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](811, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](812, "textarea", 251, 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_812_listener($event) { return ctx.editProject.b_product_contamination_tres = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](814, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](815, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](816, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](817, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](818, "mat-radio-group", 253, 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_818_listener($event) { return ctx.editProject.b_compliance_tres = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](820, "mat-radio-button", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_820_listener() { return ctx.ComplianceSectionC2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](821, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](822, "mat-radio-button", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_822_listener() { return ctx.NoneComplianceSectionC2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](823, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](824, ProjectsComponent_span_824_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](825, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](826, "textarea", 254, 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_826_listener($event) { return ctx.editProject.b_remarks_tres = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](829, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](830, ProjectsComponent_span_830_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](831, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](832, "th", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](833, "c.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](834, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](835, "textarea", 256, 257);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_835_listener($event) { return ctx.editProject.c_uncessary_items_tres = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](837, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](838, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](839, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](840, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](841, "mat-radio-group", 258, 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_841_listener($event) { return ctx.editProject.c_compliance_tres = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](843, "mat-radio-button", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_843_listener() { return ctx.ComplianceSectionC3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](844, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](845, "mat-radio-button", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_845_listener() { return ctx.NoneComplianceSectionC3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](846, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](847, ProjectsComponent_span_847_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](848, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](849, "textarea", 259, 260);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_849_listener($event) { return ctx.editProject.c_remarks_tres = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](852, ProjectsComponent_span_852_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](853, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](854, "th", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](855, "d.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](856, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](857, "textarea", 261, 262);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_857_listener($event) { return ctx.editProject.d_products_cover_tres = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](859, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](860, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](861, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](862, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](863, "mat-radio-group", 263, 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_863_listener($event) { return ctx.editProject.d_compliance_tres = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](865, "mat-radio-button", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_865_listener() { return ctx.ComplianceSectionC4(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](866, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](867, "mat-radio-button", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_867_listener() { return ctx.NoneComplianceSectionC4(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](868, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](869, ProjectsComponent_span_869_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](870, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](871, "textarea", 264, 265);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_871_listener($event) { return ctx.editProject.d_remarks_tres = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](874, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](875, ProjectsComponent_span_875_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](876, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](877, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](878, "table", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](879, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](880, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](881, "th", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](882, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](883, "th", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](884, "|V. DOCUMENTATION REQUIREMENTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](885, "th", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](886, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](887, "th", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](888, "Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](889, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](890, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](891, "th", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](892, "a.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](893, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](894, "textarea", 266, 267);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_894_listener($event) { return ctx.editProject.a_certificate_coa_kwatro_desc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](896, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](897, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](898, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](899, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](900, "mat-radio-group", 268, 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_900_listener($event) { return ctx.editProject.a_compliance_kwatro = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](902, "mat-radio-button", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_902_listener() { return ctx.ComplianceSectionD1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](903, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](904, "mat-radio-button", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_904_listener() { return ctx.NoneComplianceSectionD1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](905, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](906, ProjectsComponent_span_906_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](907, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](908, "textarea", 269, 270);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_908_listener($event) { return ctx.editProject.a_remarks_kwatro = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](911, ProjectsComponent_span_911_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](912, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](913, "th", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](914, "b.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](915, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](916, "textarea", 271, 272);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_916_listener($event) { return ctx.editProject.b_po_kwatro_desc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](918, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](919, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](920, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](921, "mat-radio-group", 273, 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_921_listener($event) { return ctx.editProject.b_compliance_kwatro = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](923, "mat-radio-button", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_923_listener() { return ctx.ComplianceSectionD2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](924, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](925, "mat-radio-button", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_925_listener() { return ctx.NoneComplianceSectionD2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](926, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](927, ProjectsComponent_span_927_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](928, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](929, "textarea", 274, 275);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_929_listener($event) { return ctx.editProject.b_remarks_kwatro = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](932, ProjectsComponent_span_932_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](933, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](934, "th", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](935, "c.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](936, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](937, "textarea", 276, 277);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_937_listener($event) { return ctx.editProject.c_msds_kwatro_desc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](939, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](940, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](941, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](942, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](943, "mat-radio-group", 278, 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_943_listener($event) { return ctx.editProject.c_compliance_kwatro = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](945, "mat-radio-button", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_945_listener() { return ctx.ComplianceSectionD3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](946, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](947, "mat-radio-button", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_947_listener() { return ctx.NoneComplianceSectionD3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](948, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](949, ProjectsComponent_span_949_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](950, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](951, "textarea", 279, 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_951_listener($event) { return ctx.editProject.c_remarks_kwatro = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](954, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](955, ProjectsComponent_span_955_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](956, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](957, "th", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](958, "d.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](959, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](960, "textarea", 281, 282);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_960_listener($event) { return ctx.editProject.d_food_grade_desc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](962, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](963, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](964, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](965, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](966, "mat-radio-group", 283, 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_966_listener($event) { return ctx.editProject.d_compliance_kwatro = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](968, "mat-radio-button", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_968_listener() { return ctx.ComplianceSectionD4(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](969, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](970, "mat-radio-button", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_970_listener() { return ctx.NoneComplianceSectionD4(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](971, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](972, ProjectsComponent_span_972_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](973, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](974, "textarea", 284, 285);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_974_listener($event) { return ctx.editProject.d_remarks_kwatro = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](977, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](978, ProjectsComponent_span_978_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](979, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](980, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](981, "table", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](982, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](983, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](984, "th", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](985, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](986, "th", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](987, "V. DELIVERY PERSONAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](988, "th", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](989, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](990, "th", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](991, "Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](992, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](993, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](994, "th", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](995, "a.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](996, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](997, "textarea", 286, 287);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_997_listener($event) { return ctx.editProject.a_qty_received_singko_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](999, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1000, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1001, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1002, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1003, "mat-radio-group", 288, 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_1003_listener($event) { return ctx.editProject.a_compliance_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1005, "mat-radio-button", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_1005_listener() { return ctx.ComplianceSectionE1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1006, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1007, "mat-radio-button", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_1007_listener() { return ctx.NoneComplianceSectionE1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1008, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1009, ProjectsComponent_span_1009_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1010, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1011, "textarea", 289, 290);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_1011_listener($event) { return ctx.editProject.a_remarks_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1014, ProjectsComponent_span_1014_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1015, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1016, "th", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1017, "b.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1018, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1019, "textarea", 291, 292);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_1019_listener($event) { return ctx.editProject.b_mfg_date_desc_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1021, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1022, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1023, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1024, "mat-radio-group", 293, 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_1024_listener($event) { return ctx.editProject.b_compliance_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1026, "mat-radio-button", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_1026_listener() { return ctx.ComplianceSectionE2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1027, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1028, "mat-radio-button", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_1028_listener() { return ctx.NoneComplianceSectionE2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1029, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1030, ProjectsComponent_span_1030_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1031, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1032, "textarea", 294, 295);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_1032_listener($event) { return ctx.editProject.b_remarks_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1035, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1036, ProjectsComponent_span_1036_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1037, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1038, "th", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1039, "c.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1040, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1041, "textarea", 296, 297);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_1041_listener($event) { return ctx.editProject.c_expirydate_desc_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1043, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1044, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1045, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1046, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1047, "mat-radio-group", 298, 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_1047_listener($event) { return ctx.editProject.c_compliance_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1049, "mat-radio-button", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_1049_listener() { return ctx.ComplianceSectionE3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1050, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1051, "mat-radio-button", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_1051_listener() { return ctx.NoneComplianceSectionE3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1052, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1053, ProjectsComponent_span_1053_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1054, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1055, "textarea", 299, 300);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_1055_listener($event) { return ctx.editProject.c_remarks_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1058, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1059, ProjectsComponent_span_1059_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1060, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1061, "th", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1062, "d.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1063, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1064, "textarea", 301, 302);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_1064_listener($event) { return ctx.editProject.d_packaging_desc_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1066, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1067, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1068, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1069, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1070, "mat-radio-group", 303, 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_1070_listener($event) { return ctx.editProject.d_compliance_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1072, "mat-radio-button", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_1072_listener() { return ctx.ComplianceSectionE4(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1073, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1074, "mat-radio-button", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_1074_listener() { return ctx.NoneComplianceSectionE4(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1075, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1076, ProjectsComponent_span_1076_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1077, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1078, "textarea", 304, 305);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_1078_listener($event) { return ctx.editProject.d_remarks_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1081, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1082, ProjectsComponent_span_1082_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1083, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1084, "th", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1085, "e.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1086, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1087, "textarea", 306, 307);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_1087_listener($event) { return ctx.editProject.e_no_contaminants_desc_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1089, "  \n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1090, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1091, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1092, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1093, "mat-radio-group", 308, 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_1093_listener($event) { return ctx.editProject.e_compliance_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1095, "mat-radio-button", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_1095_listener() { return ctx.ComplianceSectionE5(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1096, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1097, "mat-radio-button", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_1097_listener() { return ctx.NoneComplianceSectionE5(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1098, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1099, ProjectsComponent_span_1099_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1100, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1101, "textarea", 309, 310);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_1101_listener($event) { return ctx.editProject.e_remarks_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1104, "  \n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1105, ProjectsComponent_span_1105_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1106, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1107, "th", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1108, "f.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1109, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1110, "textarea", 311, 312);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_1110_listener($event) { return ctx.editProject.f_qtyrejected_desc_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1112, "    \n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1113, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1114, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1115, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1116, "mat-radio-group", 313, 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_1116_listener($event) { return ctx.editProject.f_compliance_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1118, "mat-radio-button", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_1118_listener() { return ctx.ComplianceSectionE6(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1119, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1120, "mat-radio-button", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_1120_listener() { return ctx.NoneComplianceSectionE6(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1121, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1122, ProjectsComponent_span_1122_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1123, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1124, "textarea", 314, 315);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_1124_listener($event) { return ctx.editProject.f_remarks_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1127, "    \n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1128, ProjectsComponent_span_1128_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1129, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1130, "th", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1131, "g.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1132, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1133, "textarea", 316, 317);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_1133_listener($event) { return ctx.editProject.g_rejected_reason_desc_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1135, "    \n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1136, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1137, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1138, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1139, "mat-radio-group", 318, 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_1139_listener($event) { return ctx.editProject.g_compliance_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1141, "mat-radio-button", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_1141_listener() { return ctx.ComplianceSectionE7(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1142, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1143, "mat-radio-button", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_1143_listener() { return ctx.NoneComplianceSectionE7(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1144, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1145, ProjectsComponent_span_1145_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1146, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1147, "textarea", 319, 320);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_1147_listener($event) { return ctx.editProject.g_remarks_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1150, "    \n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1151, ProjectsComponent_span_1151_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1152, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1153, "th", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1154, "h.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1155, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1156, "textarea", 321, 322);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_1156_listener($event) { return ctx.editProject.h_lab_sample_desc_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1158, "      \n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1159, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1160, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1161, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1162, "mat-radio-group", 323, 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_radio_group_ngModelChange_1162_listener($event) { return ctx.editProject.h_compliance_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1164, "mat-radio-button", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_1164_listener() { return ctx.ComplianceSectionE8(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1165, "Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1166, "mat-radio-button", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_mat_radio_button_click_1166_listener() { return ctx.NoneComplianceSectionE8(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1167, "Non-Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1168, ProjectsComponent_span_1168_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1169, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1170, "textarea", 324, 325);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_textarea_ngModelChange_1170_listener($event) { return ctx.editProject.h_remarks_singko = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1173, "      \n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1174, ProjectsComponent_span_1174_Template, 2, 0, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1175, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1176, "button", 326);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_1176_listener() { return ctx.onUpdateClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1177, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1178, "button", 327);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1179, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1180, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1181, "div", 328);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1182, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1183, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1184, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1185, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1186, "Delete PO Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1187, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1188, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1189, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1190, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1191, "mat-form-field", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1192, "input", 329);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_1192_listener($event) { return ctx.deleteProject.projectID = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1193, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1194, "Transaction ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1195, "mat-hint", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1196, "Main id of the Transaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1197, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1198, "format_list_numbered");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1199, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1200, "mat-form-field", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1201, "input", 330);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_1201_listener($event) { return ctx.deleteProject.item_description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1202, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1203, "Item Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1204, "mat-hint", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1205, "The subject of the transaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1206, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1207, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1208, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1209, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1210, "button", 331);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1211, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1212, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1213, "keyboard_return");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1214, "button", 332);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_1214_listener() { return ctx.onDeleteConfirmClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1215, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1216, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1217, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1218, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1219, "div", 333);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1220, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1221, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1222, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1223, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1224, "Cancelled PO Receiving");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1225, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1226, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1227, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1228, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1229, "mat-form-field", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1230, "input", 329, 334);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_1230_listener($event) { return ctx.editProject.po_number = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1232, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1233, "PO Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1234, "mat-form-field", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1235, "input", 330);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_1235_listener($event) { return ctx.editProject.item_description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1236, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1237, "Item Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1238, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1239, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1240, "span", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1241, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1242, "mat-form-field", 335);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1243, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1244, "Reason");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1245, "mat-select", 336);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_mat_select_ngModelChange_1245_listener($event) { return ctx.editProject.cancelled_reason = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1246, ProjectsComponent_mat_option_1246_Template, 2, 2, "mat-option", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1247, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1248, ProjectsComponent_p_1248_Template, 13, 3, "p", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1249, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1250, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1251, "button", 332);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_1251_listener() { return ctx.CancelledPoDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1252, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1253, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1254, "toggle_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](73);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](89);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](99);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](106);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](115);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](122);
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](139);
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](153);
        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](166);
        const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](183);
        const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](193);
        const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](220);
        const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](241);
        const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](247);
        const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](266);
        const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](274);
        const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](281);
        const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](284);
        const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](292);
        const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](316);
        const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](332);
        const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](354);
        const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](364);
        const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](372);
        const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](375);
        const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](396);
        const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](404);
        const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](460);
        const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](469);
        const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](477);
        const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](510);
        const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](516);
        const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](524);
        const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](533);
        const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](547);
        const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](556);
        const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](569);
        const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](578);
        const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](592);
        const _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](601);
        const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](615);
        const _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](638);
        const _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](652);
        const _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](661);
        const _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](675);
        const _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](684);
        const _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](698);
        const _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](707);
        const _r157 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](721);
        const _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](730);
        const _r163 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](744);
        const _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](753);
        const _r169 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](767);
        const _r172 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](790);
        const _r175 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](804);
        const _r178 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](813);
        const _r181 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](827);
        const _r184 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](836);
        const _r187 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](850);
        const _r190 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](858);
        const _r193 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](872);
        const _r196 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](895);
        const _r199 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](909);
        const _r202 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](917);
        const _r205 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](930);
        const _r208 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](938);
        const _r211 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](952);
        const _r214 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](961);
        const _r217 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](975);
        const _r220 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](998);
        const _r223 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1012);
        const _r226 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1020);
        const _r229 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1033);
        const _r232 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1042);
        const _r235 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1056);
        const _r238 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1065);
        const _r241 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1079);
        const _r244 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1088);
        const _r247 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1102);
        const _r250 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1111);
        const _r253 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1125);
        const _r256 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1134);
        const _r259 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1148);
        const _r262 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1157);
        const _r265 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1171);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 324, ctx.totalPoRowCount));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](60, 326, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](61, 330, ctx.projects, ctx.searchBy, ctx.searchText), ctx.currentPageIndex, ctx.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pages.length <= 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pages.length > 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.newProject.projectID)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](359, _c55, _r5.invalid && (_r5.dirty || _r5.touched || _r4.submitted), _r5.valid && (_r5.dirty || _r5.touched || _r4.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r5.invalid && (_r5.dirty || _r5.touched || _r4.submitted) && (_r5.errors == null ? null : _r5.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r5.invalid && (_r5.dirty || _r5.touched || _r4.submitted) && (_r5.errors == null ? null : _r5.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r5.invalid && (_r5.dirty || _r5.touched || _r4.submitted) && (_r5.errors == null ? null : _r5.errors.uniqueProjectID));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.newProject.is_activated);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.newProject.projectName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](362, _c55, _r12.invalid && (_r12.dirty || _r12.touched || _r4.submitted), _r12.valid && (_r10.dirty || _r12.touched || _r4.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r12.invalid && (_r12.dirty || _r12.touched || _r4.submitted) && (_r12.errors == null ? null : _r12.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r12.invalid && (_r12.dirty || _r12.touched || _r4.submitted) && (_r12.errors == null ? null : _r12.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r12.invalid && (_r12.dirty || _r12.touched || _r4.submitted) && (_r12.errors == null ? null : _r12.errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.newProject.dateOfStart)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](365, _c55, _r16.invalid && (_r16.dirty || _r16.touched || _r4.submitted), _r16.valid && (_r16.dirty || _r16.touched || _r4.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r16.invalid && (_r16.dirty || _r16.touched || _r4.submitted) && (_r16.errors == null ? null : _r16.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.newProject.teamSize)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](368, _c55, _r18.invalid && (_r18.dirty || _r18.touched || _r4.submitted), _r18.valid && (_r18.dirty || _r18.touched || _r4.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r18.invalid && (_r18.dirty || _r18.touched || _r4.submitted) && (_r18.errors == null ? null : _r18.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r18.invalid && (_r18.dirty || _r18.touched || _r4.submitted) && (_r18.errors == null ? null : _r18.errors.divisible));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.newProject.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.newProject.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.newProject.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r21.invalid && (_r21.dirty || _r21.touched || _r4.submitted) && (_r21.errors == null ? null : _r21.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.newProject.clientLocationID)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](371, _c55, _r24.invalid && (_r24.dirty || _r24.touched || _r4.submitted), _r24.valid && (_r24.dirty || _r24.touched || _r4.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](157, 334, ctx.clientLocations));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r24.invalid && (_r24.dirty || _r24.touched || _r4.submitted) && (_r24.errors == null ? null : _r24.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched || _r4.submitted) && (_r4.errors == null ? null : _r4.errors.clientLocationStatus));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.projectID)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](374, _c55, _r29.invalid && (_r29.dirty || _r29.touched || _r4.submitted), _r29.valid && (_r29.dirty || _r29.touched || _r4.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r29.invalid && (_r29.dirty || _r29.touched || _r28.submitted) && (_r29.errors == null ? null : _r29.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r29.invalid && (_r29.dirty || _r29.touched || _r28.submitted) && (_r29.errors == null ? null : _r29.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r29.invalid && (_r29.dirty || _r29.touched || _r28.submitted) && (_r29.errors == null ? null : _r29.errors.uniqueProjectID));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.item_code)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](377, _c55, _r33.invalid && (_r33.dirty || _r33.touched || _r28.submitted), _r33.valid && (_r33.dirty || _r33.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r33.invalid && (_r33.dirty || _r33.touched || _r28.submitted) && (_r33.errors == null ? null : _r33.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r33.invalid && (_r33.dirty || _r33.touched || _r28.submitted) && (_r33.errors == null ? null : _r33.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r33.invalid && (_r33.dirty || _r33.touched || _r28.submitted) && (_r33.errors == null ? null : _r33.errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.item_class);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.major_category);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](212, 336, ctx.ToDay, "M/d/y"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.item_description)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](380, _c55, _r39.invalid && (_r39.dirty || _r39.touched || _r28.submitted), _r39.valid && (_r39.dirty || _r39.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r39.invalid && (_r39.dirty || _r39.touched || _r28.submitted) && (_r39.errors == null ? null : _r39.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r39.invalid && (_r39.dirty || _r39.touched || _r28.submitted) && (_r39.errors == null ? null : _r39.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r39.invalid && (_r39.dirty || _r39.touched || _r28.submitted) && (_r39.errors == null ? null : _r39.errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.item_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.sub_category);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.supplier)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](383, _c55, _r46.invalid && (_r46.dirty || _r46.touched || _r28.submitted), _r46.valid && (_r46.dirty || _r46.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.unit_price)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](386, _c55, _r47.invalid && (_r47.dirty || _r47.touched || _r28.submitted), _r47.valid && (_r47.dirty || _r46.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.po_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.pr_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.qty_order)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](389, _c55, _r50.invalid && (_r50.dirty || _r50.touched || _r28.submitted), _r50.valid && (_r50.dirty || _r50.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r53)("max", ctx.maxDate)("ngModel", ctx.editProject.mfg_date)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](392, _c55, _r52.invalid && (_r52.dirty || _r52.touched || _r28.submitted), _r52.valid && (_r52.dirty || _r52.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.expected_delivery)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](395, _c55, _r54.invalid && (_r54.dirty || _r54.touched || _r28.submitted), _r54.valid && (_r54 || _r54.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r54.invalid && (_r54.dirty || _r54.touched || _r28.submitted) && (_r54.errors == null ? null : _r54.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r54.invalid && (_r54.dirty || _r54.touched || _r28.submitted) && (_r54.errors == null ? null : _r54.errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.actual_remaining_receiving)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](398, _c55, _r58.invalid && (_r58.dirty || _r58.touched || _r28.submitted), _r58.valid && (_r58.dirty || _r58.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](300, 339, ctx.AllowablePercentages));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](310, 341, ctx.AllowableNearlyExpiryDays));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.dateOfStart)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](401, _c55, _r63.invalid && (_r63.dirty || _r63.touched || _r28.submitted), _r63.valid && (_r63.dirty || _r63.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r63.invalid && _r28.submitted && (_r63.errors == null ? null : _r63.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r65.invalid && (_r65.dirty || _r65.touched || _r28.submitted) && (_r65.errors == null ? null : _r65.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.po_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.pr_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.qty_uom)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](404, _c55, _r70.invalid && (_r70.dirty || _r70.touched || _r28.submitted), _r70.valid && (_r70.dirty || _r70.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r70.invalid && (_r70.dirty || _r70.touched || _r28.submitted) && (_r70.errors == null ? null : _r70.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r70.invalid && (_r70.dirty || _r70.touched || _r28.submitted) && (_r70.errors == null ? null : _r70.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r70.invalid && (_r70.dirty || _r70.touched || _r28.submitted) && (_r70.errors == null ? null : _r70.errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r77)("min", ctx.minDate)("ngModel", ctx.editProject.expiration_date)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](407, _c55, _r74.invalid && (_r74.dirty || _r74.touched || _r28.submitted), _r74.valid && (_r74.dirty || _r74.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](367, 343, ctx.AllowableNearlyExpiryDays));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r77);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.actual_delivery)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](410, _c55, _r78.invalid && (_r78.dirty || _r78.touched || _r28.submitted), _r78.valid && (_r78.dirty || _r78.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](380, 345, ctx.AllowablePercentages));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r78.invalid && (_r78.dirty || _r78.touched || _r28.submitted) && (_r78.errors == null ? null : _r78.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r78.invalid && (_r78.dirty || _r78.touched || _r28.submitted) && (_r78.errors == null ? null : _r78.errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("value", " ", ctx.loginService.currentUserName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.teamSize)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](413, _c55, _r84.invalid && (_r84.dirty || _r84.touched || _r28.submitted), _r84.valid && (_r84.dirty || _r84.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r84.invalid && (_r84.dirty || _r84.touched || _r28.submitted) && (_r84.errors == null ? null : _r84.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r84.invalid && (_r84.dirty || _r84.touched || _r28.submitted) && (_r84.errors == null ? null : _r84.errors.divisible));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.clientLocationID)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](416, _c55, _r87.invalid && (_r87.dirty || _r87.touched || _r28.submitted), _r87.valid && (_r87.dirty || _r87.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](408, 347, ctx.clientLocations));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r87.invalid && (_r87.dirty || _r87.touched || _r28.submitted) && (_r87.errors == null ? null : _r87.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r28.invalid && (_r28.dirty || _r28.touched || _r28.submitted) && (_r28.errors == null ? null : _r28.errors.clientLocationStatus));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.status_of_reject_one);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](426, 349, ctx.RejectStatuses));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.status_of_reject_two);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](435, 351, ctx.RejectStatuses));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.status_of_reject_three);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](444, 353, ctx.RejectStatuses));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.total_of_reject_mat);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.count_of_reject_one)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](419, _c55, _r98.invalid && (_r98.dirty || _r98.touched || _r28.submitted), _r98.valid && (_r98.dirty || _r98.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r98.invalid && (_r98.dirty || _r98.touched || _r28.submitted) && (_r98.errors == null ? null : _r98.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.count_of_reject_two)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](422, _c55, _r101.invalid && (_r101.dirty || _r101.touched || _r28.submitted), _r101.valid && (_r101.dirty || _r101.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.count_of_reject_three)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](425, _c55, _r103.invalid && (_r103.dirty || _r103.touched || _r28.submitted), _r103.valid && (_r103.dirty || _r103.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.total_of_reject_mat);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.a_delivery_van_desc)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](428, _c55, _r106.invalid && (_r106.dirty || _r106.touched || _r28.submitted), _r106.valid && (_r106.dirty || _r106.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.a_compliance);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r107.invalid && (_r107.dirty || _r107.touched || _r28.submitted) && (_r107.errors == null ? null : _r107.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.a_remarks)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](431, _c55, _r109.invalid && (_r109.dirty || _r109.touched || _r28.submitted), _r109.valid && (_r109.dirty || _r109.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r109.invalid && (_r109.dirty || _r109.touched || _r28.submitted) && (_r109.errors == null ? null : _r109.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.b_cooling_system_desc)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](434, _c55, _r112.invalid && (_r112.dirty || _r112.touched || _r28.submitted), _r112.valid && (_r112.dirty || _r112.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.b_compliance);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r107.invalid && (_r107.dirty || _r107.touched || _r28.submitted) && (_r107.errors == null ? null : _r107.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.b_remarks)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](437, _c55, _r115.invalid && (_r115.dirty || _r115.touched || _r28.submitted), _r115.valid && (_r115.dirty || _r115.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r115.invalid && (_r115.dirty || _r115.touched || _r28.submitted) && (_r115.errors == null ? null : _r115.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.c_inner_walls_desc)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](440, _c55, _r118.invalid && (_r118.dirty || _r118.touched || _r28.submitted), _r118.valid && (_r118.dirty || _r118.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.c_compliance);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r107.invalid && (_r107.dirty || _r107.touched || _r28.submitted) && (_r107.errors == null ? null : _r107.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.c_remarks)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](443, _c55, _r121.invalid && (_r121.dirty || _r121.touched || _r28.submitted), _r121.valid && (_r121.dirty || _r121.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r121.invalid && (_r121.dirty || _r121.touched || _r28.submitted) && (_r121.errors == null ? null : _r121.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.d_plastic_curtains_desc)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](446, _c55, _r124.invalid && (_r124.dirty || _r124.touched || _r28.submitted), _r124.valid && (_r124.dirty || _r124.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.d_compliance);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r107.invalid && (_r107.dirty || _r107.touched || _r28.submitted) && (_r107.errors == null ? null : _r107.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.d_remarks)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](449, _c55, _r127.invalid && (_r127.dirty || _r127.touched || _r28.submitted), _r127.valid && (_r127.dirty || _r127.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r127.invalid && (_r127.dirty || _r127.touched || _r28.submitted) && (_r127.errors == null ? null : _r127.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.e_thereno_pest_desc)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](452, _c55, _r130.invalid && (_r130.dirty || _r130.touched || _r28.submitted), _r130.valid && (_r130.dirty || _r130.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.e_compliance);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r107.invalid && (_r107.dirty || _r107.touched || _r28.submitted) && (_r107.errors == null ? null : _r107.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.e_remarks)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](455, _c55, _r133.invalid && (_r133.dirty || _r133.touched || _r28.submitted), _r133.valid && (_r133.dirty || _r133.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r133.invalid && (_r133.dirty || _r133.touched || _r28.submitted) && (_r133.errors == null ? null : _r133.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.a_clean_company_dos)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](458, _c55, _r136.invalid && (_r136.dirty || _r136.touched || _r28.submitted), _r136.valid && (_r136.dirty || _r136.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.a_compliance_dos);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r107.invalid && (_r107.dirty || _r107.touched || _r28.submitted) && (_r107.errors == null ? null : _r107.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.a_remarks_dos)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](461, _c55, _r139.invalid && (_r139.dirty || _r139.touched || _r28.submitted), _r139.valid && (_r139.dirty || _r139.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r139.invalid && (_r139.dirty || _r139.touched || _r28.submitted) && (_r139.errors == null ? null : _r139.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.b_delivery_staff_symptoms_dos)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](464, _c55, _r142.invalid && (_r142.dirty || _r142.touched || _r28.submitted), _r142.valid && (_r142.dirty || _r142.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.b_compliance_dos);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r107.invalid && (_r107.dirty || _r107.touched || _r28.submitted) && (_r107.errors == null ? null : _r107.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.b_remarks_dos)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](467, _c55, _r145.invalid && (_r145.dirty || _r145.touched || _r28.submitted), _r145.valid && (_r145.dirty || _r145.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r145.invalid && (_r145.dirty || _r145.touched || _r28.submitted) && (_r145.errors == null ? null : _r145.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.c_inner_walls_clean_dos)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](470, _c55, _r148.invalid && (_r148.dirty || _r148.touched || _r28.submitted), _r148.valid && (_r148.dirty || _r148.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.c_compliance_dos);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r107.invalid && (_r107.dirty || _r107.touched || _r28.submitted) && (_r107.errors == null ? null : _r107.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.c_remarks_dos)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](473, _c55, _r151.invalid && (_r151.dirty || _r151.touched || _r28.submitted), _r151.valid && (_r151.dirty || _r151.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r151.invalid && (_r151.dirty || _r151.touched || _r28.submitted) && (_r151.errors == null ? null : _r151.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.d_plastic_curtains_dos)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](476, _c55, _r154.invalid && (_r154.dirty || _r154.touched || _r28.submitted), _r154.valid && (_r154.dirty || _r154.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.d_compliance_dos);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r107.invalid && (_r107.dirty || _r107.touched || _r28.submitted) && (_r107.errors == null ? null : _r107.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.d_remarks_dos)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](479, _c55, _r157.invalid && (_r157.dirty || _r157.touched || _r28.submitted), _r157.valid && (_r157.dirty || _r157.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r157.invalid && (_r157.dirty || _r157.touched || _r28.submitted) && (_r157.errors == null ? null : _r157.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.e_no_accessories_dos)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](482, _c55, _r160.invalid && (_r160.dirty || _r160.touched || _r28.submitted), _r160.valid && (_r160.dirty || _r160.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.e_compliance_dos);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r107.invalid && (_r107.dirty || _r107.touched || _r28.submitted) && (_r107.errors == null ? null : _r107.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.e_remarks_dos)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](485, _c55, _r163.invalid && (_r163.dirty || _r163.touched || _r28.submitted), _r163.valid && (_r163.dirty || _r163.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r163.invalid && (_r163.dirty || _r163.touched || _r28.submitted) && (_r163.errors == null ? null : _r163.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.f_no_pests_sightings_dos)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](488, _c55, _r166.invalid && (_r166.dirty || _r166.touched || _r28.submitted), _r166.valid && (_r166.dirty || _r166.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.f_compliance_dos);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r107.invalid && (_r107.dirty || _r107.touched || _r28.submitted) && (_r107.errors == null ? null : _r107.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.f_remarks_dos)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](491, _c55, _r169.invalid && (_r169.dirty || _r169.touched || _r28.submitted), _r169.valid && (_r169.dirty || _r169.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r169.invalid && (_r169.dirty || _r169.touched || _r28.submitted) && (_r169.errors == null ? null : _r169.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.a_pallet_crates_tres)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](494, _c55, _r172.invalid && (_r172.dirty || _r172.touched || _r28.submitted), _r172.valid && (_r172.dirty || _r172.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.a_compliance_tres);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r107.invalid && (_r107.dirty || _r107.touched || _r28.submitted) && (_r107.errors == null ? null : _r107.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.a_remarks_tres)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](497, _c55, _r175.invalid && (_r175.dirty || _r175.touched || _r28.submitted), _r175.valid && (_r175.dirty || _r175.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r175.invalid && (_r175.dirty || _r175.touched || _r28.submitted) && (_r175.errors == null ? null : _r175.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.b_product_contamination_tres)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](500, _c55, _r178.invalid && (_r178.dirty || _r178.touched || _r28.submitted), _r178.valid && (_r178.dirty || _r178.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.b_compliance_tres);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r107.invalid && (_r107.dirty || _r107.touched || _r28.submitted) && (_r107.errors == null ? null : _r107.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.b_remarks_tres)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](503, _c55, _r181.invalid && (_r181.dirty || _r181.touched || _r28.submitted), _r181.valid && (_r181.dirty || _r181.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r181.invalid && (_r181.dirty || _r181.touched || _r28.submitted) && (_r181.errors == null ? null : _r181.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.c_uncessary_items_tres)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](506, _c55, _r184.invalid && (_r184.dirty || _r184.touched || _r28.submitted), _r184.valid && (_r184.dirty || _r184.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.c_compliance_tres);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r107.invalid && (_r107.dirty || _r107.touched || _r28.submitted) && (_r107.errors == null ? null : _r107.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.c_remarks_tres)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](509, _c55, _r187.invalid && (_r187.dirty || _r187.touched || _r28.submitted), _r187.valid && (_r187.dirty || _r187.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r187.invalid && (_r187.dirty || _r187.touched || _r28.submitted) && (_r187.errors == null ? null : _r187.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.d_products_cover_tres)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](512, _c55, _r190.invalid && (_r190.dirty || _r190.touched || _r28.submitted), _r190.valid && (_r190.dirty || _r190.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.d_compliance_tres);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r107.invalid && (_r107.dirty || _r107.touched || _r28.submitted) && (_r107.errors == null ? null : _r107.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.d_remarks_tres)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](515, _c55, _r193.invalid && (_r193.dirty || _r193.touched || _r28.submitted), _r193.valid && (_r193.dirty || _r193.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r193.invalid && (_r193.dirty || _r193.touched || _r28.submitted) && (_r193.errors == null ? null : _r193.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.a_certificate_coa_kwatro_desc)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](518, _c55, _r196.invalid && (_r196.dirty || _r196.touched || _r28.submitted), _r196.valid && (_r196.dirty || _r196.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.a_compliance_kwatro);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r107.invalid && (_r107.dirty || _r107.touched || _r28.submitted) && (_r107.errors == null ? null : _r107.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.a_remarks_kwatro)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](521, _c55, _r199.invalid && (_r199.dirty || _r199.touched || _r28.submitted), _r199.valid && (_r199.dirty || _r199.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r199.invalid && (_r199.dirty || _r199.touched || _r28.submitted) && (_r199.errors == null ? null : _r199.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.b_po_kwatro_desc)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](524, _c55, _r202.invalid && (_r202.dirty || _r202.touched || _r28.submitted), _r202.valid && (_r202.dirty || _r202.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.b_compliance_kwatro);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r107.invalid && (_r107.dirty || _r107.touched || _r28.submitted) && (_r107.errors == null ? null : _r107.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.b_remarks_kwatro)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](527, _c55, _r205.invalid && (_r205.dirty || _r205.touched || _r28.submitted), _r205.valid && (_r205.dirty || _r205.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r205.invalid && (_r205.dirty || _r205.touched || _r28.submitted) && (_r205.errors == null ? null : _r205.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.c_msds_kwatro_desc)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](530, _c55, _r208.invalid && (_r208.dirty || _r208.touched || _r28.submitted), _r208.valid && (_r208.dirty || _r208.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.c_compliance_kwatro);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r107.invalid && (_r107.dirty || _r107.touched || _r28.submitted) && (_r107.errors == null ? null : _r107.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.c_remarks_kwatro)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](533, _c55, _r211.invalid && (_r211.dirty || _r211.touched || _r28.submitted), _r211.valid && (_r211.dirty || _r211.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r211.invalid && (_r211.dirty || _r211.touched || _r28.submitted) && (_r211.errors == null ? null : _r211.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.d_food_grade_desc)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](536, _c55, _r214.invalid && (_r214.dirty || _r214.touched || _r28.submitted), _r214.valid && (_r214.dirty || _r214.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.d_compliance_kwatro);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r107.invalid && (_r107.dirty || _r107.touched || _r28.submitted) && (_r107.errors == null ? null : _r107.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.d_remarks_kwatro)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](539, _c55, _r217.invalid && (_r217.dirty || _r217.touched || _r28.submitted), _r217.valid && (_r217.dirty || _r217.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r217.invalid && (_r217.dirty || _r217.touched || _r28.submitted) && (_r217.errors == null ? null : _r217.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.a_qty_received_singko_singko)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](542, _c55, _r220.invalid && (_r220.dirty || _r220.touched || _r28.submitted), _r220.valid && (_r220.dirty || _r220.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.a_compliance_singko);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r107.invalid && (_r107.dirty || _r107.touched || _r28.submitted) && (_r107.errors == null ? null : _r107.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.a_remarks_singko)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](545, _c55, _r223.invalid && (_r223.dirty || _r223.touched || _r28.submitted), _r223.valid && (_r223.dirty || _r223.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r223.invalid && (_r223.dirty || _r223.touched || _r28.submitted) && (_r223.errors == null ? null : _r223.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.b_mfg_date_desc_singko)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](548, _c55, _r226.invalid && (_r226.dirty || _r226.touched || _r28.submitted), _r226.valid && (_r226.dirty || _r226.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.b_compliance_singko);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r107.invalid && (_r107.dirty || _r107.touched || _r28.submitted) && (_r107.errors == null ? null : _r107.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.b_remarks_singko)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](551, _c55, _r229.invalid && (_r229.dirty || _r229.touched || _r28.submitted), _r229.valid && (_r229.dirty || _r229.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r229.invalid && (_r229.dirty || _r229.touched || _r28.submitted) && (_r229.errors == null ? null : _r229.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.c_expirydate_desc_singko)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](554, _c55, _r232.invalid && (_r232.dirty || _r232.touched || _r28.submitted), _r232.valid && (_r232.dirty || _r232.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.c_compliance_singko);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r107.invalid && (_r107.dirty || _r107.touched || _r28.submitted) && (_r107.errors == null ? null : _r107.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.c_remarks_singko)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](557, _c55, _r235.invalid && (_r235.dirty || _r235.touched || _r28.submitted), _r235.valid && (_r235.dirty || _r235.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r235.invalid && (_r235.dirty || _r235.touched || _r28.submitted) && (_r235.errors == null ? null : _r235.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.d_packaging_desc_singko)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](560, _c55, _r238.invalid && (_r238.dirty || _r238.touched || _r28.submitted), _r238.valid && (_r238.dirty || _r238.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.d_compliance_singko);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r107.invalid && (_r107.dirty || _r107.touched || _r28.submitted) && (_r107.errors == null ? null : _r107.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.d_remarks_singko)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](563, _c55, _r241.invalid && (_r241.dirty || _r241.touched || _r28.submitted), _r241.valid && (_r241.dirty || _r241.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r241.invalid && (_r241.dirty || _r241.touched || _r28.submitted) && (_r241.errors == null ? null : _r241.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.e_no_contaminants_desc_singko)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](566, _c55, _r244.invalid && (_r244.dirty || _r244.touched || _r28.submitted), _r244.valid && (_r244.dirty || _r244.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.e_compliance_singko);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r107.invalid && (_r107.dirty || _r107.touched || _r28.submitted) && (_r107.errors == null ? null : _r107.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.e_remarks_singko)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](569, _c55, _r247.invalid && (_r247.dirty || _r247.touched || _r28.submitted), _r247.valid && (_r247.dirty || _r247.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r247.invalid && (_r247.dirty || _r247.touched || _r28.submitted) && (_r247.errors == null ? null : _r247.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.f_qtyrejected_desc_singko)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](572, _c55, _r250.invalid && (_r250.dirty || _r250.touched || _r28.submitted), _r250.valid && (_r250.dirty || _r250.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.f_compliance_singko);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r107.invalid && (_r107.dirty || _r107.touched || _r28.submitted) && (_r107.errors == null ? null : _r107.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.f_remarks_singko)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](575, _c55, _r253.invalid && (_r253.dirty || _r253.touched || _r28.submitted), _r253.valid && (_r253.dirty || _r253.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r253.invalid && (_r253.dirty || _r253.touched || _r28.submitted) && (_r253.errors == null ? null : _r253.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.g_rejected_reason_desc_singko)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](578, _c55, _r256.invalid && (_r256.dirty || _r256.touched || _r28.submitted), _r256.valid && (_r256.dirty || _r256.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.g_compliance_singko);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r107.invalid && (_r107.dirty || _r107.touched || _r28.submitted) && (_r107.errors == null ? null : _r107.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.g_remarks_singko)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](581, _c55, _r259.invalid && (_r259.dirty || _r259.touched || _r28.submitted), _r259.valid && (_r259.dirty || _r259.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r259.invalid && (_r259.dirty || _r259.touched || _r28.submitted) && (_r259.errors == null ? null : _r259.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.h_lab_sample_desc_singko)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](584, _c55, _r262.invalid && (_r262.dirty || _r262.touched || _r28.submitted), _r262.valid && (_r262.dirty || _r262.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.h_compliance_singko);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r107.invalid && (_r107.dirty || _r107.touched || _r28.submitted) && (_r107.errors == null ? null : _r107.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.h_remarks_singko)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](587, _c55, _r265.invalid && (_r265.dirty || _r265.touched || _r28.submitted), _r265.valid && (_r265.dirty || _r265.touched || _r28.submitted)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r265.invalid && (_r265.dirty || _r265.touched || _r28.submitted) && (_r265.errors == null ? null : _r265.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.deleteProject.projectID);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.deleteProject.item_description);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.po_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.item_description);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.editProject.cancelled_reason);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1247, 355, ctx.CancelPoSummary));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1249, 357, ctx.ProjectsAllowableQty));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.PartialComment);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCard"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__["MatBadge"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatPrefix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatAnchor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"], _directives_client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_25__["ClientLocationStatusValidatorDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["PatternValidator"], _directives_project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_26__["ProjectIDUniqueValidatorDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__["DefaultClassDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["MaxLengthValidator"], src_app_directives_team_size_validator_directive__WEBPACK_IMPORTED_MODULE_28__["TeamSizeValidatorDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_z"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatDatepickerToggleIcon"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButton"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_30__["CdkTextareaAutosize"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_19__["DecimalPipe"], _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_32__["PagingPipe"], src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_1__["FilterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["DatePipe"]], styles: [".projectcard[_ngcontent-%COMP%] {\n  height: 450px;\n}\n\n  .cdk-overlay-container {\n  z-index: 1200 !important;\n}\n\n  .mat-form-field-empty.mat-form-field-label {\n  color: #eeee08;\n}\n\n.rejectIsnotMactchSpanTagclass[_ngcontent-%COMP%] {\n  display: noness;\n}\n\n.removal-remarks[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\n.input[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n\n.text-area-main[_ngcontent-%COMP%] {\n  height: 80px;\n}\n\n.text-area-main2[_ngcontent-%COMP%] {\n  height: 130px;\n}\n\n.text-area-main3[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.text-area-main4[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.text-area-main5[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\nb[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.hideObject[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.haddata[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.unsetdata[_ngcontent-%COMP%] {\n  display: unset;\n}\n\n.mat-drawer-shown[_ngcontent-%COMP%] {\n  visibility: hidden !important;\n}\n\n.zerobadge0[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.bg-color-yellow-textarea[_ngcontent-%COMP%] {\n  outline: none !important;\n  border: 1px solid yellow;\n  box-shadow: 0 0 10px #719ece;\n  border-radius: 10px;\n}\n\n.mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: #165c7d !important;\n}\n\n.mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%] {\n  background-color: #165c7d !important;\n  z-index: 3;\n}\n\n.mat-radio-button[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: #165c7d !important;\n  z-index: 3;\n}\n\n .mat-radio-outer-circle {\n  outline: none !important;\n  box-shadow: 0 0 10px #719ece;\n  border-color: yellow !important;\n  \n}\n\n .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: black !important;\n  \n}\n\n.font-color-black[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtBQUNGOztBQU1BO0VBQ0UsY0FBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtBQUhGOztBQUtBO0VBQ0Usa0JBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7QUFGRjs7QUFJQTtFQUNFLFlBQUE7QUFERjs7QUFHQTtFQUNFLGFBQUE7QUFBRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7QUFHRjs7QUFBQTtFQUNFLHlDQUFBO0FBR0Y7O0FBQUE7RUFDRSxhQUFBO0FBR0Y7O0FBREE7RUFDRSxhQUFBO0FBSUY7O0FBRkE7RUFDRSxjQUFBO0FBS0Y7O0FBSEE7RUFDRSw2QkFBQTtBQU1GOztBQUhBO0VBQ0UsYUFBQTtBQU1GOztBQUhBO0VBQ0Usd0JBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUFNRjs7QUFKQTtFQUNFLG9DQUFBO0FBT0Y7O0FBSkE7RUFDRSxvQ0FBQTtFQUNBLFVBQUE7QUFPRjs7QUFKQTtFQUNFLGdDQUFBO0VBQ0EsVUFBQTtBQU9GOztBQUpBO0VBQ0Usd0JBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQWlDLDBCQUFBO0FBUW5DOztBQUxBO0VBRUUsOEJBQUE7RUFBZ0MsMEJBQUE7QUFRbEM7O0FBTEE7RUFDRSxZQUFBO0FBUUYiLCJmaWxlIjoicHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdGNhcmQge1xuICBoZWlnaHQ6IDQ1MHB4O1xufVxuXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDEyMDAgIWltcG9ydGFudDtcbn1cblxuLy8gOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1lbXB0eS5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuLy8gICAgIGNvbG9yOiB5ZWxsb3c7XG4vLyB9XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZW1wdHkubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogcmdiKDIzOCwgMjM4LCA4KTtcbn1cblxuLnJlamVjdElzbm90TWFjdGNoU3BhblRhZ2NsYXNzIHtcbiAgZGlzcGxheTogbm9uZXNzO1xufVxuLnJlbW92YWwtcmVtYXJrcyB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmlucHV0IHtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnRleHQtYXJlYS1tYWluIHtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuLnRleHQtYXJlYS1tYWluMiB7XG4gIGhlaWdodDogMTMwcHg7XG59XG4udGV4dC1hcmVhLW1haW4zIHtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbi50ZXh0LWFyZWEtbWFpbjQge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuLnRleHQtYXJlYS1tYWluNSB7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbmIge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLmhpZGVPYmplY3Qge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmhhZGRhdGEge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnVuc2V0ZGF0YSB7XG4gIGRpc3BsYXk6IHVuc2V0O1xufVxuLm1hdC1kcmF3ZXItc2hvd24ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLnplcm9iYWRnZTAge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYmctY29sb3IteWVsbG93LXRleHRhcmVhIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCB5ZWxsb3c7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM3MTllY2U7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIsIDkyLCAxMjUpICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIsIDkyLCAxMjUpICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5tYXQtcmFkaW8tYnV0dG9uIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjIsIDkyLCAxMjUpICFpbXBvcnRhbnQ7IC8vIE92ZXJyaWRlIG1hdGVyaWFsXG4gIHotaW5kZXg6IDM7XG59XG5cbjo6bmctZGVlcC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAjNzE5ZWNlO1xuICBib3JkZXItY29sb3I6IHllbGxvdyAhaW1wb3J0YW50OyAvKm91dGVyIHJpbmcgY29sb3IgY2hhbmdlKi9cbn1cblxuOjpuZy1kZWVwLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZFxuICAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gIGJvcmRlci1jb2xvcjogYmxhY2sgIWltcG9ydGFudDsgLypvdXRlciByaW5nIGNvbG9yIGNoYW5nZSovXG59XG5cbi5mb250LWNvbG9yLWJsYWNre1xuICBjb2xvcjogYmxhY2s7XG59XG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map