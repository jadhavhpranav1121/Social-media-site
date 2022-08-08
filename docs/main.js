(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/Entertainment/Academics/Projects/Angular Projects/social-media-site/src/main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_tools_authenticator_authenticator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/tools/authenticator/authenticator.component */ "FRkT");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





class HomeComponent {
    constructor(loginSheet) {
        this.loginSheet = loginSheet;
    }
    ngOnInit() {
    }
    onGetStartedClick() {
        this.loginSheet.open(src_app_tools_authenticator_authenticator_component__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorComponent"]);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 12, vars: 0, consts: [["id", "home-page"], ["id", "home-page-landing"], ["id", "landing-left"], ["id", "landing-right"], ["id", "landing-right-content"], ["mat-flat-button", "", "color", "warn", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Social Media App Platform");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Share your favorite stories! #Codeible ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_9_listener() { return ctx.onGetStartedClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: ["#home-page[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#home-page-landing[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: url('home_page.jpg');\r\n    background-size: cover;\r\n    background-position: center;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 100%;\r\n    min-height: 800px;\r\n}\r\n\r\n#landing-right[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    color: white;\r\n    align-items: center;\r\n}\r\n\r\n#landing-right-content[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    padding: 1em 1em 1em 3em;\r\n}\r\n\r\n#landing-right-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 4em;\r\n}\r\n\r\n#landing-right-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 2em;\r\n}\r\n\r\n#landing-right-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    font-size: 2em;\r\n    padding: .5em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBaUQ7SUFDakQsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHdCQUF3QjtJQUN4QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0FBQ2pCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNob21lLXBhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNob21lLXBhZ2UtbGFuZGluZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaG9tZV9wYWdlLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogODAwcHg7XHJcbn1cclxuXHJcbiNsYW5kaW5nLXJpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jbGFuZGluZy1yaWdodC1jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxZW0gMWVtIDFlbSAzZW07XHJcbn1cclxuXHJcbiNsYW5kaW5nLXJpZ2h0LWNvbnRlbnQgaDEge1xyXG4gICAgZm9udC1zaXplOiA0ZW07XHJcbn1cclxuXHJcbiNsYW5kaW5nLXJpZ2h0LWNvbnRlbnQgcCB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuI2xhbmRpbmctcmlnaHQtY29udGVudCBidXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBwYWRkaW5nOiAuNWVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"] }]; }, null); })();


/***/ }),

/***/ "6qde":
/*!**********************************************!*\
  !*** ./src/app/tools/post/post.component.ts ***!
  \**********************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var firebasets_firebasetsFirestore_firebaseTSFirestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebasets/firebasetsFirestore/firebaseTSFirestore */ "3GV7");
/* harmony import */ var _reply_reply_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reply/reply.component */ "sHxp");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








function PostComponent_mat_icon_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_mat_icon_8_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onLikeClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_mat_icon_9_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onLikeClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "favorite_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PostComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.firestore = new firebasets_firebasetsFirestore_firebaseTSFirestore__WEBPACK_IMPORTED_MODULE_1__["FirebaseTSFirestore"]();
    }
    ngOnInit() {
        this.getCreatorInfo();
    }
    onReplyClick() {
        this.dialog.open(_reply_reply_component__WEBPACK_IMPORTED_MODULE_2__["ReplyComponent"], { data: this.postData.postId });
    }
    getCreatorInfo() {
        this.firestore.getDocument({
            path: ["Users", this.postData.creatorId],
            onComplete: result => {
                let userDocument = result.data();
                this.creatorName = userDocument.publicName;
                this.creatorDescription = userDocument.description;
            }
        });
    }
    onLikeClick() {
        this.firestore.update({
            path: ["Posts", this.postData.postId],
            data: {
                like: !this.postData.like
            },
            onComplete: (docId) => {
            }
        });
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], inputs: { postData: "postData" }, decls: 16, vars: 7, consts: [["mat-card-image", "", 3, "src"], ["class", "action-item", "color", "warn", 3, "click", 4, "ngIf"], ["color", "warn", 1, "action-item", 3, "click"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PostComponent_mat_icon_8_Template, 2, 0, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PostComponent_mat_icon_9_Template, 2, 0, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_Template_mat_icon_click_10_listener() { return ctx.onReplyClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "chat_bubble_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.creatorName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.creatorDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.postData == null ? null : ctx.postData.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.postData == null ? null : ctx.postData.like));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.postData == null ? null : ctx.postData.like);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.creatorName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.postData == null ? null : ctx.postData.comment, " ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"]], styles: ["mat-card[_ngcontent-%COMP%]{\r\n    margin-top:30px;\r\n    \r\n}\r\n.action-item[_ngcontent-%COMP%] {\r\n    margin-left: .5em;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQiIsImZpbGUiOiJwb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZHtcclxuICAgIG1hcmdpbi10b3A6MzBweDtcclxuICAgIFxyXG59XHJcbi5hY3Rpb24taXRlbSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLjVlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post',
                templateUrl: './post.component.html',
                styleUrls: ['./post.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, { postData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "8rb8":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tools_authenticator_authenticator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tools/authenticator/authenticator.component */ "FRkT");
/* harmony import */ var firebasets_firebasetsAuth_firebaseTSAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebasets/firebasetsAuth/firebaseTSAuth */ "mWs4");
/* harmony import */ var firebasets_firebasetsFirestore_firebaseTSFirestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebasets/firebasetsFirestore/firebaseTSFirestore */ "3GV7");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loader.service */ "lwos");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tools_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../tools/profile/profile.component */ "FPDJ");










function HeaderComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_12_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onLoginClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login / Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hello, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getUsername() ? ctx_r1.getUsername() : "Demo");
} }
function HeaderComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_14_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onLogoutClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(loginSheet, router, loader) {
        this.loginSheet = loginSheet;
        this.router = router;
        this.loader = loader;
        this.hamburgerhidden = false;
        this.auth = new firebasets_firebasetsAuth_firebaseTSAuth__WEBPACK_IMPORTED_MODULE_2__["FirebaseTSAuth"]();
        this.firestore = new firebasets_firebasetsFirestore_firebaseTSFirestore__WEBPACK_IMPORTED_MODULE_3__["FirebaseTSFirestore"]();
        this.userHasProfile = true;
        this.auth.listenToSignInStateChanges(user => {
            this.auth.checkSignInState({
                whenSignedIn: user => {
                },
                whenSignedOut: user => {
                    HeaderComponent.userDocument = null;
                },
                whenSignedInAndEmailNotVerified: user => {
                    this.router.navigate(["emailVerification"]);
                },
                whenSignedInAndEmailVerified: user => {
                    this.getUserProfile();
                },
                whenChanged: user => {
                }
            });
        });
    }
    ngOnInit() {
    }
    static getUserDocument() {
        return HeaderComponent.userDocument;
    }
    getUsername() {
        try {
            this.loader.show();
            console.log(HeaderComponent.userDocument);
            return HeaderComponent.userDocument.publicName;
        }
        catch (err) {
            console.log(err);
        }
    }
    getUserProfile() {
        return new Promise((resolved, rejected) => {
            this.firestore.listenToDocument({
                name: "Getting Documents",
                path: ["Users", this.auth.getAuth().currentUser.uid],
                onUpdate: (result) => {
                    HeaderComponent.userDocument = result.data();
                    this.userHasProfile = result.exists;
                    HeaderComponent.userDocument.userId = this.auth.getAuth().currentUser.uid;
                    if (this.userHasProfile) {
                        this.router.navigate(["postfeed"]);
                        resolved(1);
                    }
                    else {
                        resolved(0);
                    }
                }
            });
        });
    }
    add(number1, number2) {
        return number1 + number2;
    }
    onLogoutClick() {
        this.auth.signOut();
        this.router.navigate(["/"]);
    }
    loggedIn() {
        return this.auth.isSignedIn();
    }
    onLoginClick() {
        this.loginSheet.open(_tools_authenticator_authenticator_component__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorComponent"]);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheet"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 16, vars: 5, consts: [[1, "navbar"], [1, "logo"], ["href", "#", 1, "logo"], [1, "push-left"], ["id", "menu-toggler", "data-class", "menu-active", 1, "hamburger", 3, "hidden"], [1, "hamburger-line", "hamburger-line-top"], [1, "hamburger-line", "hamburger-line-middle"], [1, "hamburger-line", "hamburger-line-bottom"], ["id", "primary-menu", 1, "menu", "nav-menu"], ["class", "menu-item", 3, "click", 4, "ngIf"], ["class", "menu-item username-design", 4, "ngIf"], [3, "show"], [1, "menu-item", 3, "click"], [1, "menu-item", "username-design"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "SOCIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderComponent_li_12_Template, 2, 0, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeaderComponent_div_13_Template, 4, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HeaderComponent_div_14_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-profile", 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.hamburgerhidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn() && ctx.userHasProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.loggedIn() && !ctx.userHasProfile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _tools_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"]], styles: [".username-design[_ngcontent-%COMP%]{\n\tmargin-right: 20px;\n }\n .logo[_ngcontent-%COMP%] {\n\t max-width: 200px;\n}\n .navbar[_ngcontent-%COMP%] {\n\ttop: 0;\n    z-index: 10000000;\n\t align-items: center;\n\t background: #fff;\n\t box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);\n\t display: flex;\n\t flex-direction: row;\n\t font-family: sans-serif;\n\t padding: 10px 50px;\n\t background-color: rgba(255, 255, 255, 0.2);\n\t backdrop-filter: blur(20px) saturate(160%) contrast(45%) brightness(140%);\n\t -webkit-backdrop-filter: blur(20px) saturate(160%) contrast(45%) brightness(140%);\n\t position:fixed;\n\t width: 100%;\n}\n .push-left[_ngcontent-%COMP%] {\n\t margin-left: auto;\n}\n .logo[_ngcontent-%COMP%] {\n\ttext-decoration: none;\n\tfont-weight: bold;\n\tcolor: black;\n\tfont-size: 1.2em;\n}\n .logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n\tcolor: #0071F3;\n}\n \n .hamburger[_ngcontent-%COMP%] {\n\t background: transparent;\n\t border: none;\n\t cursor: pointer;\n\t display: none;\n\t outline: none;\n\t height: 30px;\n\t position: relative;\n\t width: 30px;\n\t z-index: 1000;\n}\n @media screen and (max-width: 768px) {\n\t .hamburger[_ngcontent-%COMP%] {\n\t\t display: inline-block;\n\t}\n}\n .hamburger-line[_ngcontent-%COMP%] {\n\t background: #272727;\n\t height: 3px;\n\t position: absolute;\n\t left: 0;\n\t transition: all 0.2s ease-out;\n\t width: 100%;\n}\n .hamburger[_ngcontent-%COMP%]:hover   .hamburger-line[_ngcontent-%COMP%] {\n\t background: #777;\n}\n .hamburger-line-top[_ngcontent-%COMP%] {\n\t top: 3px;\n}\n .menu-active[_ngcontent-%COMP%]   .hamburger-line-top[_ngcontent-%COMP%] {\n\t top: 50%;\n\t transform: rotate(45deg) translatey(-50%);\n}\n .hamburger-line-middle[_ngcontent-%COMP%] {\n\t top: 50%;\n\t transform: translatey(-50%);\n}\n .menu-active[_ngcontent-%COMP%]   .hamburger-line-middle[_ngcontent-%COMP%] {\n\t left: 50%;\n\t opacity: 0;\n\t width: 0;\n}\n .hamburger-line-bottom[_ngcontent-%COMP%] {\n\t bottom: 3px;\n}\n .menu-active[_ngcontent-%COMP%]   .hamburger-line-bottom[_ngcontent-%COMP%] {\n\t bottom: 50%;\n\t transform: rotate(-45deg) translatey(50%);\n}\n .nav-menu[_ngcontent-%COMP%] {\n\t display: flex;\n\t list-style: none;\n\t margin: 0;\n\t padding: 0;\n\t transition: all 0.25s ease-in;\n}\n @media screen and (max-width: 768px) {\n\t .nav-menu[_ngcontent-%COMP%] {\n\t\t background: #fff;\n\t\t flex-direction: column;\n\t\t justify-content: center;\n\t\t opacity: 0;\n\t\t position: absolute;\n\t\t top: 0;\n\t\t right: 0;\n\t\t bottom: 0;\n\t\t left: 0;\n\t\t transform: translatey(-100%);\n\t\t text-align: center;\n\t}\n\t .menu-active[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%] {\n\t\t transform: translatey(0%);\n\t\t opacity: 1;\n\t}\n}\n .menu-item[_ngcontent-%COMP%]{\n\tcursor:pointer;\n}\n .nav-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\t color: #444;\n\t display: block;\n\t line-height: 30px;\n\t margin: 0px 10px;\n\t text-decoration: none;\n\t text-transform: uppercase;\n\t cursor: pointer;\n}\n .nav-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n\t color: #777;\n\t text-decoration: underline;\n}\n @media screen and (max-width: 768px) {\n\t .nav-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\t\t font-size: 20px;\n\t\t margin: 8px;\n\t}\n}\n .sub-nav[_ngcontent-%COMP%] {\n\t border: 1px solid #ccc;\n\t display: none;\n\t position: absolute;\n\t background-color: #fff;\n\t padding: 5px 5px;\n\t list-style: none;\n\t width: 230px;\n}\n @media screen and (max-width: 768px) {\n\t .sub-nav[_ngcontent-%COMP%] {\n\t\t position: relative;\n\t\t width: 100%;\n\t\t display: none;\n\t\t background-color: rgba(0, 0, 0, 0.20);\n\t\t box-sizing: border-box;\n\t}\n}\n .nav__link[_ngcontent-%COMP%]:hover    + .sub-nav[_ngcontent-%COMP%] {\n\t display: block;\n}\n .sub-nav[_ngcontent-%COMP%]:hover {\n\t display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDO0NBQ0Esa0JBQWtCO0NBQ2xCO0NBQ0E7RUFDQyxnQkFBZ0I7QUFDbEI7Q0FDQztDQUNBLE1BQU07SUFDSCxpQkFBaUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix5Q0FBeUM7RUFDekMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLDBDQUEwQztFQUMxQyx5RUFBeUU7RUFDekUsaUZBQWlGO0VBQ2pGLGNBQWM7RUFDZCxXQUFXO0FBQ2I7Q0FDQztFQUNDLGlCQUFpQjtBQUNuQjtDQUNBO0NBQ0MscUJBQXFCO0NBQ3JCLGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCO0NBQ0E7Q0FDQyxjQUFjO0FBQ2Y7Q0FDQSxTQUFTO0NBQ1I7RUFDQyx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7QUFDZjtDQUNDO0VBQ0M7R0FDQyxxQkFBcUI7Q0FDdkI7QUFDRDtDQUNDO0VBQ0MsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLDZCQUE2QjtFQUM3QixXQUFXO0FBQ2I7Q0FDQztFQUNDLGdCQUFnQjtBQUNsQjtDQUNDO0VBQ0MsUUFBUTtBQUNWO0NBQ0M7RUFDQyxRQUFRO0VBQ1IseUNBQXlDO0FBQzNDO0NBQ0M7RUFDQyxRQUFRO0VBQ1IsMkJBQTJCO0FBQzdCO0NBQ0M7RUFDQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLFFBQVE7QUFDVjtDQUNDO0VBQ0MsV0FBVztBQUNiO0NBQ0M7RUFDQyxXQUFXO0VBQ1gseUNBQXlDO0FBQzNDO0NBQ0M7RUFDQyxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsNkJBQTZCO0FBQy9CO0NBQ0M7RUFDQztHQUNDLGdCQUFnQjtHQUNoQixzQkFBc0I7R0FDdEIsdUJBQXVCO0dBQ3ZCLFVBQVU7R0FDVixrQkFBa0I7R0FDbEIsTUFBTTtHQUNOLFFBQVE7R0FDUixTQUFTO0dBQ1QsT0FBTztHQUNQLDRCQUE0QjtHQUM1QixrQkFBa0I7Q0FDcEI7RUFDQztHQUNDLHlCQUF5QjtHQUN6QixVQUFVO0NBQ1o7QUFDRDtDQUNBO0NBQ0MsY0FBYztBQUNmO0NBQ0M7RUFDQyxXQUFXO0VBQ1gsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCO0NBQ0M7RUFDQyxXQUFXO0VBQ1gsMEJBQTBCO0FBQzVCO0NBQ0M7RUFDQztHQUNDLGVBQWU7R0FDZixXQUFXO0NBQ2I7QUFDRDtDQUNDO0VBQ0Msc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkO0NBQ0M7RUFDQztHQUNDLGtCQUFrQjtHQUNsQixXQUFXO0dBQ1gsYUFBYTtHQUNiLHFDQUFxQztHQUNyQyxzQkFBc0I7Q0FDeEI7QUFDRDtDQUNDO0VBQ0MsY0FBYztBQUNoQjtDQUNDO0VBQ0MsY0FBYztBQUNoQiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAudXNlcm5hbWUtZGVzaWdue1xuXHRtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gfVxuIC5sb2dvIHtcblx0IG1heC13aWR0aDogMjAwcHg7XG59XG4gLm5hdmJhciB7XG5cdHRvcDogMDtcbiAgICB6LWluZGV4OiAxMDAwMDAwMDtcblx0IGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdCBiYWNrZ3JvdW5kOiAjZmZmO1xuXHQgYm94LXNoYWRvdzogMCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG5cdCBkaXNwbGF5OiBmbGV4O1xuXHQgZmxleC1kaXJlY3Rpb246IHJvdztcblx0IGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuXHQgcGFkZGluZzogMTBweCA1MHB4O1xuXHQgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuXHQgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpIHNhdHVyYXRlKDE2MCUpIGNvbnRyYXN0KDQ1JSkgYnJpZ2h0bmVzcygxNDAlKTtcblx0IC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpIHNhdHVyYXRlKDE2MCUpIGNvbnRyYXN0KDQ1JSkgYnJpZ2h0bmVzcygxNDAlKTtcblx0IHBvc2l0aW9uOmZpeGVkO1xuXHQgd2lkdGg6IDEwMCU7XG59XG4gLnB1c2gtbGVmdCB7XG5cdCBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5sb2dvIHtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0Y29sb3I6IGJsYWNrO1xuXHRmb250LXNpemU6IDEuMmVtO1xufVxuLmxvZ28gc3Bhbntcblx0Y29sb3I6ICMwMDcxRjM7XG59XG4vKiBNZW51ICovXG4gLmhhbWJ1cmdlciB7XG5cdCBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0IGJvcmRlcjogbm9uZTtcblx0IGN1cnNvcjogcG9pbnRlcjtcblx0IGRpc3BsYXk6IG5vbmU7XG5cdCBvdXRsaW5lOiBub25lO1xuXHQgaGVpZ2h0OiAzMHB4O1xuXHQgcG9zaXRpb246IHJlbGF0aXZlO1xuXHQgd2lkdGg6IDMwcHg7XG5cdCB6LWluZGV4OiAxMDAwO1xufVxuIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdCAuaGFtYnVyZ2VyIHtcblx0XHQgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHR9XG59XG4gLmhhbWJ1cmdlci1saW5lIHtcblx0IGJhY2tncm91bmQ6ICMyNzI3Mjc7XG5cdCBoZWlnaHQ6IDNweDtcblx0IHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0IGxlZnQ6IDA7XG5cdCB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcblx0IHdpZHRoOiAxMDAlO1xufVxuIC5oYW1idXJnZXI6aG92ZXIgLmhhbWJ1cmdlci1saW5lIHtcblx0IGJhY2tncm91bmQ6ICM3Nzc7XG59XG4gLmhhbWJ1cmdlci1saW5lLXRvcCB7XG5cdCB0b3A6IDNweDtcbn1cbiAubWVudS1hY3RpdmUgLmhhbWJ1cmdlci1saW5lLXRvcCB7XG5cdCB0b3A6IDUwJTtcblx0IHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGV5KC01MCUpO1xufVxuIC5oYW1idXJnZXItbGluZS1taWRkbGUge1xuXHQgdG9wOiA1MCU7XG5cdCB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTUwJSk7XG59XG4gLm1lbnUtYWN0aXZlIC5oYW1idXJnZXItbGluZS1taWRkbGUge1xuXHQgbGVmdDogNTAlO1xuXHQgb3BhY2l0eTogMDtcblx0IHdpZHRoOiAwO1xufVxuIC5oYW1idXJnZXItbGluZS1ib3R0b20ge1xuXHQgYm90dG9tOiAzcHg7XG59XG4gLm1lbnUtYWN0aXZlIC5oYW1idXJnZXItbGluZS1ib3R0b20ge1xuXHQgYm90dG9tOiA1MCU7XG5cdCB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZXkoNTAlKTtcbn1cbiAubmF2LW1lbnUge1xuXHQgZGlzcGxheTogZmxleDtcblx0IGxpc3Qtc3R5bGU6IG5vbmU7XG5cdCBtYXJnaW46IDA7XG5cdCBwYWRkaW5nOiAwO1xuXHQgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW47XG59XG4gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcblx0IC5uYXYtbWVudSB7XG5cdFx0IGJhY2tncm91bmQ6ICNmZmY7XG5cdFx0IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0IGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdCBvcGFjaXR5OiAwO1xuXHRcdCBwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0IHRvcDogMDtcblx0XHQgcmlnaHQ6IDA7XG5cdFx0IGJvdHRvbTogMDtcblx0XHQgbGVmdDogMDtcblx0XHQgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KC0xMDAlKTtcblx0XHQgdGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cdCAubWVudS1hY3RpdmUgLm5hdi1tZW51IHtcblx0XHQgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDAlKTtcblx0XHQgb3BhY2l0eTogMTtcblx0fVxufVxuLm1lbnUtaXRlbXtcblx0Y3Vyc29yOnBvaW50ZXI7XG59XG4gLm5hdi1tZW51IC5tZW51LWl0ZW0gYSB7XG5cdCBjb2xvcjogIzQ0NDtcblx0IGRpc3BsYXk6IGJsb2NrO1xuXHQgbGluZS1oZWlnaHQ6IDMwcHg7XG5cdCBtYXJnaW46IDBweCAxMHB4O1xuXHQgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHQgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0IGN1cnNvcjogcG9pbnRlcjtcbn1cbiAubmF2LW1lbnUgLm1lbnUtaXRlbSBhOmhvdmVyIHtcblx0IGNvbG9yOiAjNzc3O1xuXHQgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcblx0IC5uYXYtbWVudSAubWVudS1pdGVtIGEge1xuXHRcdCBmb250LXNpemU6IDIwcHg7XG5cdFx0IG1hcmdpbjogOHB4O1xuXHR9XG59XG4gLnN1Yi1uYXYge1xuXHQgYm9yZGVyOiAxcHggc29saWQgI2NjYztcblx0IGRpc3BsYXk6IG5vbmU7XG5cdCBwb3NpdGlvbjogYWJzb2x1dGU7XG5cdCBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHQgcGFkZGluZzogNXB4IDVweDtcblx0IGxpc3Qtc3R5bGU6IG5vbmU7XG5cdCB3aWR0aDogMjMwcHg7XG59XG4gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcblx0IC5zdWItbmF2IHtcblx0XHQgcG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdCB3aWR0aDogMTAwJTtcblx0XHQgZGlzcGxheTogbm9uZTtcblx0XHQgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIwKTtcblx0XHQgYm94LXNpemluZzogYm9yZGVyLWJveDtcblx0fVxufVxuIC5uYXZfX2xpbms6aG92ZXIgKyAuc3ViLW5hdiB7XG5cdCBkaXNwbGF5OiBibG9jaztcbn1cbiAuc3ViLW5hdjpob3ZlciB7XG5cdCBkaXNwbGF5OiBibG9jaztcbn1cbiAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheet"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    firebaseConfig: {
        apiKey: "AIzaSyCR4GgkJHZJy6aNVH55deBDNe7BV769Klg",
        authDomain: "social-media-8fc2b.firebaseapp.com",
        projectId: "social-media-8fc2b",
        storageBucket: "social-media-8fc2b.appspot.com",
        messagingSenderId: "73777798896",
        appId: "1:73777798896:web:7de9e4101b1555c6ce6c35",
        measurementId: "G-YBYP56DTF4"
    }
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "FPDJ":
/*!****************************************************!*\
  !*** ./src/app/tools/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var firebasets_firebasetsFirestore_firebaseTSFirestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebasets/firebasetsFirestore/firebaseTSFirestore */ "3GV7");
/* harmony import */ var firebasets_firebasetsAuth_firebaseTSAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebasets/firebasetsAuth/firebaseTSAuth */ "mWs4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






const _c0 = function (a0, a1) { return { "active": a0, "idle": a1 }; };
class ProfileComponent {
    constructor() {
        this.firestore = new firebasets_firebasetsFirestore_firebaseTSFirestore__WEBPACK_IMPORTED_MODULE_1__["FirebaseTSFirestore"]();
        this.auth = new firebasets_firebasetsAuth_firebaseTSAuth__WEBPACK_IMPORTED_MODULE_2__["FirebaseTSAuth"]();
    }
    ngOnInit() {
    }
    onContinueClick(nameInput, descriptionInput) {
        let name = nameInput.value;
        let description = descriptionInput.value;
        this.firestore.create({
            path: ["Users", this.auth.getAuth().currentUser.uid],
            data: {
                publicName: name,
                description: description
            },
            onComplete: (docId) => {
                alert("Profile Created");
                nameInput.value = "";
                descriptionInput.value = "";
            },
            onFail: (err) => {
            }
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], inputs: { show: "show" }, decls: 8, vars: 4, consts: [["id", "profile", 3, "ngClass"], ["id", "profile-content"], ["placeholder", "Name"], ["nameInput", ""], ["placeholder", "Description"], ["descriptionInput", ""], ["mat-flat-button", "", "color", "warn", 3, "click"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "textarea", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.onContinueClick(_r0, _r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.show, !ctx.show));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: ["#profile[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    height: 100vh;\r\n    background-color: rgb(29, 29, 29);\r\n    z-index: 9;\r\n    transition-duration: .5s;\r\n    overflow: hidden;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.active[_ngcontent-%COMP%] {\r\n    width: 100vw;\r\n}\r\n\r\n.idle[_ngcontent-%COMP%] {\r\n    width: 0;\r\n}\r\n\r\n#profile-content[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 500px;\r\n    padding: 2em;\r\n    box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n}\r\n\r\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 1em;\r\n    border-radius: 1em;\r\n    margin-bottom: .5em;\r\n    resize: none;\r\n    outline: none;\r\n    border: 1px solid gray;\r\n    box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sUUFBUTtJQUNSLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixnQkFBZ0I7O0lBRWhCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsOEJBQThCO0FBQ2xDIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcm9maWxlIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMjksIDI5KTtcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuNXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG59XHJcblxyXG4uaWRsZSB7XHJcbiAgICB3aWR0aDogMDtcclxufVxyXG5cclxuI3Byb2ZpbGUtY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBwYWRkaW5nOiAyZW07XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5pbnB1dCwgdGV4dGFyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return []; }, { show: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "FRkT":
/*!****************************************************************!*\
  !*** ./src/app/tools/authenticator/authenticator.component.ts ***!
  \****************************************************************/
/*! exports provided: AuthenticatorComponent, AuthenticatorCompState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatorComponent", function() { return AuthenticatorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatorCompState", function() { return AuthenticatorCompState; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var firebasets_firebasetsAuth_firebaseTSAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebasets/firebasetsAuth/firebaseTSAuth */ "mWs4");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");







function AuthenticatorComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticatorComponent_div_5_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onLogin(_r3, _r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthenticatorComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 5, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 7, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticatorComponent_div_6_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onRegisterClick(_r7, _r8, _r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthenticatorComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 5, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticatorComponent_div_7_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onResetClick(_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AuthenticatorComponent {
    constructor(bottomSheetRef) {
        this.bottomSheetRef = bottomSheetRef;
        this.state = AuthenticatorCompState.LOGIN;
        this.firebasetsAuth = new firebasets_firebasetsAuth_firebaseTSAuth__WEBPACK_IMPORTED_MODULE_1__["FirebaseTSAuth"]();
    }
    ngOnInit() {
    }
    onResetClick(resetEmail) {
        let email = resetEmail.value;
        if (this.isNotEmpty(email)) {
            this.firebasetsAuth.sendPasswordResetEmail({
                email: email,
                onComplete: (err) => {
                    this.bottomSheetRef.dismiss();
                }
            });
        }
    }
    onLogin(loginEmail, loginPassword) {
        let email = loginEmail.value;
        let password = loginPassword.value;
        console.log(password);
        if (this.isNotEmpty(email) && this.isNotEmpty(password)) {
            this.firebasetsAuth.signInWith({
                email: email,
                password: password,
                onComplete: (uc) => {
                    this.bottomSheetRef.dismiss();
                },
                onFail: (err) => {
                    alert(err);
                }
            });
        }
    }
    onRegisterClick(registerEmail, registerPassword, registerConfirmPassword) {
        let email = registerEmail.value;
        let password = registerPassword.value;
        let confirmPassword = registerConfirmPassword.value;
        if (this.isNotEmpty(email) &&
            this.isNotEmpty(password) &&
            this.isNotEmpty(confirmPassword) &&
            this.isAMatch(password, confirmPassword)) {
            this.firebasetsAuth.createAccountWith({
                email: email,
                password: password,
                onComplete: (uc) => {
                    this.bottomSheetRef.dismiss();
                },
                onFail: (err) => {
                    alert("Failed to create the account.");
                }
            });
        }
    }
    isNotEmpty(text) {
        return text != null && text.length > 0;
    }
    isAMatch(text, comparedWith) {
        return text == comparedWith;
    }
    onForgotPasswordClick() {
        this.state = AuthenticatorCompState.FORGOT_PASSWORD;
    }
    onCreateAccountClick() {
        this.state = AuthenticatorCompState.REGISTER;
    }
    onLoginClick() {
        this.state = AuthenticatorCompState.LOGIN;
    }
    isLoginState() {
        return this.state == AuthenticatorCompState.LOGIN;
    }
    isRegisterState() {
        return this.state == AuthenticatorCompState.REGISTER;
    }
    isForgotPasswordState() {
        return this.state == AuthenticatorCompState.FORGOT_PASSWORD;
    }
    getStateText() {
        switch (this.state) {
            case AuthenticatorCompState.LOGIN:
                return "Login";
            case AuthenticatorCompState.REGISTER:
                return "Register";
            case AuthenticatorCompState.FORGOT_PASSWORD:
                return "Forgot Password";
        }
    }
}
AuthenticatorComponent.ɵfac = function AuthenticatorComponent_Factory(t) { return new (t || AuthenticatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"])); };
AuthenticatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthenticatorComponent, selectors: [["app-authenticator"]], decls: 15, vars: 4, consts: [["id", "authenticator"], ["id", "authenticator-content"], [4, "ngIf"], ["align", "end"], ["mat-flat-button", "", 3, "click"], ["placeholder", "Email"], ["loginEmail", ""], ["placeholder", "Password", "type", "password"], ["loginPassword", ""], ["mat-flat-button", "", "color", "warn", 3, "click"], ["registerEmail", ""], ["registerPassword", ""], ["placeholder", "Confirm Password", "type", "password"], ["registerConfirmPassword", ""], ["resetEmail", ""]], template: function AuthenticatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AuthenticatorComponent_div_5_Template, 7, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AuthenticatorComponent_div_6_Template, 9, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AuthenticatorComponent_div_7_Template, 5, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticatorComponent_Template_button_click_9_listener() { return ctx.onForgotPasswordClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticatorComponent_Template_button_click_11_listener() { return ctx.onCreateAccountClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Create an Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticatorComponent_Template_button_click_13_listener() { return ctx.onLoginClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getStateText());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoginState());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isRegisterState());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isForgotPasswordState());
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: ["#authenticator[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 1em;\r\n    box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n}\r\n\r\n#authenticator-content[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 30em;\r\n    padding: 1.5em;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    margin: .5em;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 1em;\r\n    margin: .5em 0;\r\n    border-radius: 5px;\r\n    outline: none;\r\n    border: 1px solid rgba(15, 15, 15, .3);\r\n    box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFHQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDhCQUE4QjtBQUNsQyIsImZpbGUiOiJhdXRoZW50aWNhdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYXV0aGVudGljYXRvciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuI2F1dGhlbnRpY2F0b3ItY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMzBlbTtcclxuICAgIHBhZGRpbmc6IDEuNWVtO1xyXG59XHJcblxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1hcmdpbjogLjVlbTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBtYXJnaW46IC41ZW0gMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1LCAxNSwgMTUsIC4zKTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-authenticator',
                templateUrl: './authenticator.component.html',
                styleUrls: ['./authenticator.component.css']
            }]
    }], function () { return [{ type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"] }]; }, null); })();
var AuthenticatorCompState;
(function (AuthenticatorCompState) {
    AuthenticatorCompState[AuthenticatorCompState["LOGIN"] = 0] = "LOGIN";
    AuthenticatorCompState[AuthenticatorCompState["REGISTER"] = 1] = "REGISTER";
    AuthenticatorCompState[AuthenticatorCompState["FORGOT_PASSWORD"] = 2] = "FORGOT_PASSWORD";
})(AuthenticatorCompState || (AuthenticatorCompState = {}));


/***/ }),

/***/ "FxTl":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Hcrv":
/*!********************************************************!*\
  !*** ./src/app/pages/post-feed/post-feed.component.ts ***!
  \********************************************************/
/*! exports provided: PostFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostFeedComponent", function() { return PostFeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_tools_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/tools/create-post/create-post.component */ "QGhw");
/* harmony import */ var firebasets_firebasetsFirestore_firebaseTSFirestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebasets/firebasetsFirestore/firebaseTSFirestore */ "3GV7");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");





function PostFeedComponent_app_post_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post", 3);
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("postData", post_r1);
} }
class PostFeedComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.firestore = new firebasets_firebasetsFirestore_firebaseTSFirestore__WEBPACK_IMPORTED_MODULE_2__["FirebaseTSFirestore"]();
        this.posts = [];
    }
    ngOnInit() {
        this.getPosts();
    }
    onCreatePostClick() {
        this.dialog.open(src_app_tools_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_1__["CreatePostComponent"]);
    }
    getPosts() {
        this.firestore.getCollection({
            path: ["Posts"],
            where: [
                new firebasets_firebasetsFirestore_firebaseTSFirestore__WEBPACK_IMPORTED_MODULE_2__["OrderBy"]("timestamp", "desc"),
                new firebasets_firebasetsFirestore_firebaseTSFirestore__WEBPACK_IMPORTED_MODULE_2__["Limit"](10)
            ],
            onComplete: (result) => {
                result.docs.forEach(doc => {
                    let post = doc.data();
                    post.postId = doc.id;
                    this.posts.push(post);
                });
            },
            onFail: err => {
                alert("failed to provide posts");
            }
        });
    }
}
PostFeedComponent.ɵfac = function PostFeedComponent_Factory(t) { return new (t || PostFeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
PostFeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostFeedComponent, selectors: [["app-post-feed"]], decls: 5, vars: 1, consts: [["id", "post-feed"], [3, "postData", 4, "ngFor", "ngForOf"], ["mat-fab", "", "color", "warn", "id", "post-button", 3, "click"], [3, "postData"]], template: function PostFeedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostFeedComponent_app_post_1_Template, 1, 1, "app-post", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostFeedComponent_Template_button_click_2_listener() { return ctx.onCreatePostClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
    } }, styles: ["#post-button[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: 2em;\r\n    right: 2em;\r\n    \r\n}\r\n\r\n#post-feed[_ngcontent-%COMP%] {\r\n    max-width: 500px;\r\n    margin-top: 9em;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtZmVlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVOztBQUVkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InBvc3QtZmVlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Bvc3QtYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMmVtO1xyXG4gICAgcmlnaHQ6IDJlbTtcclxuICAgIFxyXG59XHJcblxyXG4jcG9zdC1mZWVkIHtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA5ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostFeedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-feed',
                templateUrl: './post-feed.component.html',
                styleUrls: ['./post-feed.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "QGhw":
/*!************************************************************!*\
  !*** ./src/app/tools/create-post/create-post.component.ts ***!
  \************************************************************/
/*! exports provided: CreatePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostComponent", function() { return CreatePostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var firebasets_firebasetsAuth_firebaseTSAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebasets/firebasetsAuth/firebaseTSAuth */ "mWs4");
/* harmony import */ var firebasets_firebasetsFirestore_firebaseTSFirestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebasets/firebasetsFirestore/firebaseTSFirestore */ "3GV7");
/* harmony import */ var firebasets_firebasetsStorage_firebaseTSStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebasets/firebasetsStorage/firebaseTSStorage */ "jrN9");
/* harmony import */ var firebasets_firebasetsApp_firebaseTSApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebasets/firebasetsApp/firebaseTSApp */ "5tN/");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");











function CreatePostComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CreatePostComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.auth = new firebasets_firebasetsAuth_firebaseTSAuth__WEBPACK_IMPORTED_MODULE_1__["FirebaseTSAuth"]();
        this.firestore = new firebasets_firebasetsFirestore_firebaseTSFirestore__WEBPACK_IMPORTED_MODULE_2__["FirebaseTSFirestore"]();
        this.storage = new firebasets_firebasetsStorage_firebaseTSStorage__WEBPACK_IMPORTED_MODULE_3__["FirebaseTSStorage"]();
    }
    ngOnInit() {
    }
    onPostClick(commentInput) {
        let comment = commentInput.value;
        if (comment.length <= 0)
            return;
        if (this.selectedImageFile) {
            this.uploadImagePost(comment);
        }
        else {
            this.uploadPost(comment);
        }
    }
    uploadImagePost(comment) {
        let postId = this.firestore.genDocId();
        this.storage.upload({
            uploadName: "upload Image Post",
            path: ["Posts", postId, "image"],
            data: {
                data: this.selectedImageFile
            },
            onComplete: (downloadUrl) => {
                this.firestore.create({
                    path: ["Posts", postId],
                    data: {
                        comment: comment,
                        creatorId: this.auth.getAuth().currentUser.uid,
                        imageUrl: downloadUrl,
                        timestamp: firebasets_firebasetsApp_firebaseTSApp__WEBPACK_IMPORTED_MODULE_4__["FirebaseTSApp"].getFirestoreTimestamp(),
                        like: false
                    },
                    onComplete: (docId) => {
                        this.dialog.close();
                    }
                });
            }
        });
    }
    uploadPost(comment) {
        this.firestore.create({
            path: ["Posts"],
            data: {
                comment: comment,
                creatorId: this.auth.getAuth().currentUser.uid,
                timestamp: firebasets_firebasetsApp_firebaseTSApp__WEBPACK_IMPORTED_MODULE_4__["FirebaseTSApp"].getFirestoreTimestamp()
            },
            onComplete: (docId) => {
                this.dialog.close();
            }
        });
    }
    onPhotoSelected(photoSelector) {
        this.selectedImageFile = photoSelector.files[0];
        if (!this.selectedImageFile)
            return;
        let fileReader = new FileReader();
        fileReader.readAsDataURL(this.selectedImageFile);
        fileReader.addEventListener("loadend", ev => {
            let readableString = fileReader.result.toString();
            let postPreviewImage = document.getElementById("post-preview-image");
            postPreviewImage.src = readableString;
        });
    }
}
CreatePostComponent.ɵfac = function CreatePostComponent_Factory(t) { return new (t || CreatePostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"])); };
CreatePostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreatePostComponent, selectors: [["app-create-post"]], decls: 17, vars: 1, consts: [["placeholder", "Type Message..."], ["commentInput", ""], ["id", "post-preview", 4, "ngIf"], ["align", "end"], ["mat-button", "", "color", "warn"], ["for", "photo-upload"], ["id", "photo-upload", "type", "file", "accept", "image/*", 3, "change"], ["photoSelector", ""], ["mat-flat-button", "", "color", "warn", 3, "click"], ["id", "post-preview"], ["id", "post-preview-image"]], template: function CreatePostComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "textarea", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CreatePostComponent_div_7_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreatePostComponent_Template_input_change_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return ctx.onPhotoSelected(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "insert_photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatePostComponent_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.onPostClick(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedImageFile);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]], styles: ["#photo-upload[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n    padding: 1em;\r\n    resize: none;\r\n    width: 250px;\r\n    min-height: 200px;\r\n    border: none;\r\n    outline: none;\r\n}\r\n\r\n#post-preview[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n    margin-top: 1em;\r\n}\r\n\r\n#post-preview-image[_ngcontent-%COMP%] {\r\n    object-fit: cover;\r\n    object-position: center;\r\n    width: 150px;\r\n    height: 100px;\r\n    border-radius: 1em;\r\n    border: 1px dashed gray;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0IiLCJmaWxlIjoiY3JlYXRlLXBvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwaG90by11cGxvYWQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuI3Bvc3QtcHJldmlldyB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG5cclxuI3Bvc3QtcHJldmlldy1pbWFnZSB7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcclxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCBncmF5O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreatePostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-post',
                templateUrl: './create-post.component.html',
                styleUrls: ['./create-post.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tools_authenticator_authenticator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools/authenticator/authenticator.component */ "FRkT");
/* harmony import */ var firebasets_firebasetsAuth_firebaseTSAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebasets/firebasetsAuth/firebaseTSAuth */ "mWs4");
/* harmony import */ var firebasets_firebasetsFirestore_firebaseTSFirestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebasets/firebasetsFirestore/firebaseTSFirestore */ "3GV7");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/header/header.component */ "8rb8");
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/footer/footer.component */ "FxTl");









class AppComponent {
    constructor(loginSheet, router) {
        this.loginSheet = loginSheet;
        this.router = router;
        this.title = 'SocialMediaSite';
        this.auth = new firebasets_firebasetsAuth_firebaseTSAuth__WEBPACK_IMPORTED_MODULE_2__["FirebaseTSAuth"]();
        this.firestore = new firebasets_firebasetsFirestore_firebaseTSFirestore__WEBPACK_IMPORTED_MODULE_3__["FirebaseTSFirestore"]();
        this.userHasProfile = true;
        this.auth.listenToSignInStateChanges(user => {
            this.auth.checkSignInState({
                whenSignedIn: user => {
                },
                whenSignedOut: user => {
                    AppComponent.userDocument = null;
                },
                whenSignedInAndEmailNotVerified: user => {
                    this.router.navigate(["emailVerification"]);
                },
                whenSignedInAndEmailVerified: user => {
                    this.getUserProfile();
                },
                whenChanged: user => {
                }
            });
        });
    }
    static getUserDocument() {
        return AppComponent.userDocument;
    }
    getUsername() {
        try {
            console.log(AppComponent.userDocument);
            return AppComponent.userDocument.publicName;
        }
        catch (err) {
            console.log(err);
        }
    }
    getUserProfile() {
        return new Promise((resolved, rejected) => {
            this.firestore.listenToDocument({
                name: "Getting Documents",
                path: ["Users", this.auth.getAuth().currentUser.uid],
                onUpdate: (result) => {
                    AppComponent.userDocument = result.data();
                    this.userHasProfile = result.exists;
                    AppComponent.userDocument.userId = this.auth.getAuth().currentUser.uid;
                    if (this.userHasProfile) {
                        this.router.navigate(["postfeed"]);
                        resolved(1);
                    }
                    else {
                        resolved(0);
                    }
                }
            });
        });
    }
    add(number1, number2) {
        return number1 + number2;
    }
    onLogoutClick() {
        this.auth.signOut();
    }
    loggedIn() {
        return this.auth.isSignedIn();
    }
    onLoginClick() {
        this.loginSheet.open(_tools_authenticator_authenticator_component__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorComponent"]);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheet"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheet"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "WBie":
/*!**************************************************************************!*\
  !*** ./src/app/pages/email-verification/email-verification.component.ts ***!
  \**************************************************************************/
/*! exports provided: EmailVerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailVerificationComponent", function() { return EmailVerificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var firebasets_firebasetsAuth_firebaseTSAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebasets/firebasetsAuth/firebaseTSAuth */ "mWs4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





class EmailVerificationComponent {
    constructor(router) {
        this.router = router;
        this.auth = new firebasets_firebasetsAuth_firebaseTSAuth__WEBPACK_IMPORTED_MODULE_1__["FirebaseTSAuth"]();
    }
    ngOnInit() {
        if (this.auth.isSignedIn() &&
            !this.auth.getAuth().currentUser.emailVerified) {
            this.auth.sendVerificationEmail();
        }
        else {
            this.router.navigate([""]);
        }
    }
    onResendClick() {
        this.auth.sendVerificationEmail();
    }
}
EmailVerificationComponent.ɵfac = function EmailVerificationComponent_Factory(t) { return new (t || EmailVerificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
EmailVerificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmailVerificationComponent, selectors: [["app-email-verification"]], decls: 5, vars: 0, consts: [["id", "email-verification"], ["mat-flat-button", "", 3, "click"]], template: function EmailVerificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your Email is Not Verified");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailVerificationComponent_Template_button_click_3_listener() { return ctx.onResendClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Resend Verification Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: ["#email-verification[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: 8em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLXZlcmlmaWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkIiLCJmaWxlIjoiZW1haWwtdmVyaWZpY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZW1haWwtdmVyaWZpY2F0aW9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDhlbTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailVerificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-email-verification',
                templateUrl: './email-verification.component.html',
                styleUrls: ['./email-verification.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var firebasets_firebasetsApp_firebaseTSApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebasets/firebasetsApp/firebaseTSApp */ "5tN/");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _tools_authenticator_authenticator_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tools/authenticator/authenticator.component */ "FRkT");
/* harmony import */ var _pages_email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/email-verification/email-verification.component */ "WBie");
/* harmony import */ var _tools_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tools/profile/profile.component */ "FPDJ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _pages_post_feed_post_feed_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/post-feed/post-feed.component */ "Hcrv");
/* harmony import */ var _tools_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tools/create-post/create-post.component */ "QGhw");
/* harmony import */ var _tools_post_post_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tools/post/post.component */ "6qde");
/* harmony import */ var _tools_reply_reply_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tools/reply/reply.component */ "sHxp");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/header/header.component */ "8rb8");
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./core/footer/footer.component */ "FxTl");
/* harmony import */ var _core_loader_loader_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./core/loader/loader.component */ "aPAT");
/* harmony import */ var _core_services_loader_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./core/services/loader.service */ "lwos");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ "ofXK");




























class AppModule {
    constructor() {
        firebasets_firebasetsApp_firebaseTSApp__WEBPACK_IMPORTED_MODULE_5__["FirebaseTSApp"].init(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebaseConfig);
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_core_services_loader_service__WEBPACK_IMPORTED_MODULE_23__["LoaderService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _tools_authenticator_authenticator_component__WEBPACK_IMPORTED_MODULE_11__["AuthenticatorComponent"],
        _pages_email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_12__["EmailVerificationComponent"],
        _tools_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
        _pages_post_feed_post_feed_component__WEBPACK_IMPORTED_MODULE_16__["PostFeedComponent"],
        _tools_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_17__["CreatePostComponent"],
        _tools_post_post_component__WEBPACK_IMPORTED_MODULE_18__["PostComponent"],
        _tools_reply_reply_component__WEBPACK_IMPORTED_MODULE_19__["ReplyComponent"],
        _core_header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"],
        _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"],
        _core_loader_loader_component__WEBPACK_IMPORTED_MODULE_22__["LoaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _tools_authenticator_authenticator_component__WEBPACK_IMPORTED_MODULE_11__["AuthenticatorComponent"],
                    _pages_email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_12__["EmailVerificationComponent"],
                    _tools_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                    _pages_post_feed_post_feed_component__WEBPACK_IMPORTED_MODULE_16__["PostFeedComponent"],
                    _tools_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_17__["CreatePostComponent"],
                    _tools_post_post_component__WEBPACK_IMPORTED_MODULE_18__["PostComponent"],
                    _tools_reply_reply_component__WEBPACK_IMPORTED_MODULE_19__["ReplyComponent"],
                    _core_header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"],
                    _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"],
                    _core_loader_loader_component__WEBPACK_IMPORTED_MODULE_22__["LoaderComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"]
                ],
                providers: [_core_services_loader_service__WEBPACK_IMPORTED_MODULE_23__["LoaderService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], function () { return []; }, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_pages_post_feed_post_feed_component__WEBPACK_IMPORTED_MODULE_16__["PostFeedComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_24__["NgForOf"], _tools_post_post_component__WEBPACK_IMPORTED_MODULE_18__["PostComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"]], []);


/***/ }),

/***/ "aPAT":
/*!*************************************************!*\
  !*** ./src/app/core/loader/loader.component.ts ***!
  \*************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/loader.service */ "lwos");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function LoaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoaderComponent {
    constructor(loader) {
        this.loader = loader;
        this.loading = false;
    }
    ngOnInit() {
        this.loadingSubscription = this.loader.loadingStatus.subscribe((value) => {
            this.loading = value;
        });
    }
    ngOnDestroy() {
        this.loadingSubscription.unsubscribe();
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"])); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 1, vars: 1, consts: [["class", "spinner", 4, "ngIf"], [1, "spinner"], [1, "lds-roller"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoaderComponent_div_0_Template, 10, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.css']
            }]
    }], function () { return [{ type: _services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "lwos":
/*!*************************************************!*\
  !*** ./src/app/core/services/loader.service.ts ***!
  \*************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class LoaderService {
    constructor() {
        this.loadingStatus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    set loading(value) {
        this.loadingStatus.next(value);
    }
    show() {
        this.loading = true;
    }
    hide() {
        this.loading = false;
    }
}
LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
LoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoaderService, factory: LoaderService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "sHxp":
/*!************************************************!*\
  !*** ./src/app/tools/reply/reply.component.ts ***!
  \************************************************/
/*! exports provided: ReplyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplyComponent", function() { return ReplyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var firebasets_firebasetsFirestore_firebaseTSFirestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebasets/firebasetsFirestore/firebaseTSFirestore */ "3GV7");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var firebasets_firebasetsApp_firebaseTSApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebasets/firebasetsApp/firebaseTSApp */ "5tN/");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.component */ "Sy1n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");









const _c0 = function (a1) { return { "comment-container": true, "creator-comment-container": a1 }; };
const _c1 = function (a1) { return { "comment": true, "creator-comment": a1 }; };
function ReplyComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r0.isCommentCreator(comment_r2)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r2 == null ? null : comment_r2.creatorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx_r0.isCommentCreator(comment_r2)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r2 == null ? null : comment_r2.comment);
} }
class ReplyComponent {
    constructor(postId) {
        this.postId = postId;
        this.firestore = new firebasets_firebasetsFirestore_firebaseTSFirestore__WEBPACK_IMPORTED_MODULE_1__["FirebaseTSFirestore"]();
        this.comments = [];
    }
    ngOnInit() {
        this.getComments();
    }
    isCommentCreator(comment) {
        try {
            return comment.creatorId == src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"].getUserDocument().userId;
        }
        catch (err) {
        }
    }
    getComments() {
        this.firestore.listenToCollection({
            name: "Post Comments",
            path: ["Posts", this.postId, "PostComments"],
            where: [new firebasets_firebasetsFirestore_firebaseTSFirestore__WEBPACK_IMPORTED_MODULE_1__["OrderBy"]("timestamp", "asc")],
            onUpdate: (result) => {
                result.docChanges().forEach(postCommentDoc => {
                    if (postCommentDoc.type == "added") {
                        this.comments.unshift(postCommentDoc.doc.data());
                    }
                });
            }
        });
    }
    onSendClick(commentInput) {
        if (!(commentInput.value.length > 0))
            return;
        this.firestore.create({
            path: ["Posts", this.postId, "PostComments"],
            data: {
                comment: commentInput.value,
                creatorId: src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"].getUserDocument().userId,
                creatorName: src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"].getUserDocument().publicName,
                timestamp: firebasets_firebasetsApp_firebaseTSApp__WEBPACK_IMPORTED_MODULE_3__["FirebaseTSApp"].getFirestoreTimestamp()
            },
            onComplete: (docId) => {
                commentInput.value = "";
            }
        });
    }
}
ReplyComponent.ɵfac = function ReplyComponent_Factory(t) { return new (t || ReplyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
ReplyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReplyComponent, selectors: [["app-reply"]], decls: 10, vars: 1, consts: [["id", "reply-box"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["id", "reply-action-bar"], ["mat-flat-button", "", "color", "warn", 3, "click"], ["placeholder", "Comment..."], ["commentInput", ""], [3, "ngClass"], [1, "comment-name"]], template: function ReplyComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReplyComponent_div_3_Template, 6, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReplyComponent_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return ctx.onSendClick(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: ["#reply-box[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 300px;\r\n    overflow: auto;\r\n    min-width: 400px;\r\n    max-width: 600px;\r\n    padding: 0 1em;\r\n    box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n}\r\n\r\n#reply-action-bar[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: 3em 1fr;\r\n    margin-top: 1em;\r\n    direction: rtl;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    padding: 1em 2em 1em 1em;\r\n    border: 1px solid gray;\r\n    outline: none;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n    direction: ltr;\r\n}\r\n\r\n.comment-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n.comment-name[_ngcontent-%COMP%] {\r\n    font-size: .9em;\r\n}\r\n\r\n.comment[_ngcontent-%COMP%] {\r\n    border-radius: 1em;\r\n    background-color: gainsboro;\r\n    padding: 1em;\r\n}\r\n\r\n.creator-comment-container[_ngcontent-%COMP%] {\r\n    justify-content: flex-end;\r\n    text-align: end;\r\n}\r\n\r\n.creator-comment[_ngcontent-%COMP%] {\r\n    background-color: tomato;\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcGx5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsV0FBVztJQUNYLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsOEJBQThCO0lBQzlCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEIiLCJmaWxlIjoicmVwbHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNyZXBseS1ib3gge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIHBhZGRpbmc6IDAgMWVtO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuI3JlcGx5LWFjdGlvbi1iYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZW0gMWZyO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgZGlyZWN0aW9uOiBydGw7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIHBhZGRpbmc6IDFlbSAyZW0gMWVtIDFlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlyZWN0aW9uOiBsdHI7XHJcbn1cclxuXHJcbi5jb21tZW50LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY29tbWVudC1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogLjllbTtcclxufVxyXG5cclxuLmNvbW1lbnQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG59XHJcblxyXG4uY3JlYXRvci1jb21tZW50LWNvbnRhaW5lciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG59XHJcblxyXG4uY3JlYXRvci1jb21tZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReplyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reply',
                templateUrl: './reply.component.html',
                styleUrls: ['./reply.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/email-verification/email-verification.component */ "WBie");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_post_feed_post_feed_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/post-feed/post-feed.component */ "Hcrv");







const routes = [
    { path: "", component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "emailVerification", component: _pages_email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_2__["EmailVerificationComponent"] },
    { path: "postfeed", component: _pages_post_feed_post_feed_component__WEBPACK_IMPORTED_MODULE_4__["PostFeedComponent"] },
    { path: "**", component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map