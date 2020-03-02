(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"about-us row\">\n    <div class=\"about-us__content p-3 pb-5 col-md-12\">\n        <div class=\"about-us__content__title\">\n            <h1>About us</h1>\n        </div>\n        <div class=\"about-us__content__description mt-4 col-md-12\">\n            <p>The Georgian Messenger was first published on February 25, 1919, during the time of the first Georgian independent democratic republic (1918-1921). On February 25, 1921, Russian Bolsheviks occupied Georgia. The Editor-in-Chief of the newspaper at that time was Elisabeth Orbeliani. The original Georgian Messenger was a weekly newspaper and only 13 issues were ever published.\n                The newspaper was revived in October 1990 after Georgia regained its independence from the Soviet Union. The Georgian Messenger was then published irregularly until August 1993 under Irakli Kenchoshvili.\n                The Editor-in-Chief of The Messenger is Zaza Gachechiladze, Ph.D, a specialist in English literature and the author of books on Dylan Thomas and Geoffrey Chaucer. Before the Messenger, he founded and was Editor-in-Chief of the English language Georgian Times from 1994-2001.\n                The Messenger's subscribers include foreign embassies and governments, NGOs, top hotels, airlines and other businesses, as well as home readers. It is distributed in more than twenty countries throughout the world including the United States, Britain, Germany, Russia, Ukraine, Holland, France, Iran and Turkey.\n                Among the newspaper's contributors are leading experts in political science, economics and Georgian culture. The Messenger's reporters work throughout Georgia to cover breaking news stories and explain their significance, providing a vital source of information both for those living here and those planning to visit Georgia for the first time.\n                The newspaper's coverage includes Georgia and the South Caucasus, as well as the broader post-Soviet space.\n                The Messenger's trusted reporting is regularly cited by analysts with the Jamestown Foundation and Radio Free Europe / Radio Liberty among others, and its editors have been interviewed by BBC World, the Guardian, NewsHour with Jim Lehrer and other leading news outlets.\n                </p>\n        </div>\n        <div class=\"about-us__content__staff col-md-12 mt-5\">\n            <div class=\"about-us__content__staff__title d-flex justify-content-center col-12\">\n                <h4>The Messenger Staff</h4>\n            </div>\n            <div class=\"about-us__content__staff__img mt-4 mb-3 col-12\">\n                <!-- <div class=\"about-us__content__staff__img__content\">\n                    <img src=\"assets/image/team.svg\" alt=\"team\">\n                </div> -->\n            </div>\n            <div class=\"about-us__content__staff__description col-md-12 d-flex justify-content-center row align-items-center\">\n                <div class=\"col-md-12 mt-4\">\n                    <p>Founded by Prof. Zaza Gachechiladze</p>\n                </div>\n               \n                <div class=\"row staff-border justify-content-center mt-4 w-100 align-items-center \" >\n                    <div class=\"about-us__content__staff__staff col-md-6\" style=\"\n                        text-align: center;\n                        border-right: 2px solid black;\">\n                        <div class=\"col-md-12\">\n                            <h4>Tamar Gachechiladze</h4>\n                            <p>Publisher</p>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <h4>Mariam Mchedlidze</h4>\n                            <p>Editor-in-Chief</p>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <h4>Levan Abramishvili</h4>\n                            <p>Executive Editor</p>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <h4>Nika Gamtsemlidze</h4>\n                            <p>Staff Journalist</p>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <h4>Mariam Chanishvili</h4>\n                            <p>Reporter</p>\n                        </div>\n                    </div>\n    \n    \n                    <div class=\"about-us__content__staff__staff col-md-6\" style=\"text-align: center;\">\n                        <div class=\"col-md-12\">\n                            <h4>Nino Metreveli</h4>\n                            <p>Director</p>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <h4>Khatuna Gogichaishvili</h4>\n                            <p>Layout Designer, Photographer</p>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <h4>Liza Mchedlidze</h4>\n                            <p>Layout Designer</p>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <h4>Natalia Kochiashvili</h4>\n                            <p>Correspondent</p>\n                        </div>\n                    </div>\n                </div>\n\n\n            </div>\n\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/add-ads/add-ads.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/add-ads/add-ads.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-news\" *ngIf=\"!isFormSubmited; else showFormSubmitted\">\n    <form action=\"\" [formGroup]=\"adsFrom\"  (ngSubmit)=\"onSubmit()\">\n        <div class=\"col-12 mt-3\">\n            <input type=\"text\" class=\"input-group-text\" placeholder=\"Link\" formControlName=\"linkPath\">\n        </div>\n        <div class=\"col-12 mt-3 d-flex\">\n            <input type=\"file\" \n                   (change) = 'onFileUpload($event.target.files)'\n                   style=\"outline: none;\">\n                <span *ngIf=\"showErr\" style=\"color: red;\">Please only .png .jpeg type Image formats</span>\n        </div>  \n        <div class=\"col-12 button-submit mt-4\">\n            <button type=\"submit\" class=\"btn btn-dark btn-lg\">Add ADS</button>\n        </div>\n    </form>\n</div>\n\n<ng-template #showFormSubmitted>  \n    <div class=\"submit-again\">\n        <h1>Form Submitted</h1>\n        <button (click)=\"submitFormAgain()\" class=\"btn btn-primary\">Add another ADS</button>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/add-culture/add-culture.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/add-culture/add-culture.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-news\" *ngIf=\"!isFormSubmited; else showFormSubmitted\">\n    <form action=\"\" [formGroup]=\"cultureFrom\"  (ngSubmit)=\"onSubmit()\">\n        <div class=\"col-12 mt-3\">\n            <input type=\"text\" class=\"input-group-text\" placeholder=\"title\" formControlName=\"title\">\n        </div>\n        <div class=\"col-12 mt-3\">\n            <textarea formControlName=\"description\" \n                     class=\"input-group-text\" \n                     placeholder=\"description\" \n                     cols=\"50\" \n                     rows=\"10\"\n                     style=\"text-align: start;\">\n            </textarea>\n        </div>\n        <div class=\"col-12 mt-3\">  \n            <input type=\"text\" class=\"input-group-text\" placeholder=\"dd/mm/yy\" formControlName=\"date\">\n        </div>\n        <div class=\"col-12 mt-3 d-flex\">\n            <input type=\"file\" \n                   (change) = 'onFileUpload($event.target.files)'\n                   style=\"outline: none;\">\n            <span *ngIf=\"showErr\" style=\"color: red;\">Please only .png .jpeg type Image formats</span>\n\n        </div>  \n        <div class=\"col-12 button-submit mt-4\">\n            <button type=\"submit\" class=\"btn btn-dark btn-lg\">Add Culture & Lifestyle</button>\n        </div>\n    </form>\n</div>\n\n<ng-template #showFormSubmitted>\n    <div class=\"submit-again\">\n        <h1>Form Submitted</h1>\n        <button (click)=\"submitFormAgain()\" class=\"btn btn-primary\">Add another Culture & Lifestyle</button>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/add-economy/add-economy.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/add-economy/add-economy.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-news\" *ngIf=\"!isFormSubmited; else showFormSubmitted\">\n    <form action=\"\" [formGroup]=\"economyFrom\"  (ngSubmit)=\"onSubmit()\">\n        <div class=\"col-12 mt-3\">\n            <input type=\"text\" class=\"input-group-text\" placeholder=\"title\" formControlName=\"title\">\n        </div>\n        <div class=\"col-12 mt-3\">\n            <textarea formControlName=\"description\" \n                     class=\"input-group-text\" \n                     placeholder=\"description\" \n                     cols=\"50\" \n                     rows=\"10\"\n                     style=\"text-align: start;\">\n            </textarea>\n        </div>\n        <div class=\"col-12 mt-3\">  \n            <input type=\"text\" class=\"input-group-text\" placeholder=\"dd/mm/yy\" formControlName=\"date\">\n        </div>\n        <div class=\"col-12 mt-3 d-flex\">   \n            <input type=\"file\" \n                   (change) = 'onFileUpload($event.target.files)'\n                   style=\"outline: none;\">\n            <span *ngIf=\"showErr\" style=\"color: red;\">Please only .png .jpeg type Image formats</span>\n        </div>  \n        <div class=\"col-12 button-submit mt-4\">\n            <button type=\"submit\" class=\"btn btn-dark btn-lg\">Add Economy</button>\n        </div>\n    </form>\n</div>\n\n<ng-template #showFormSubmitted>\n    <div class=\"submit-again\">\n        <h1>Form Submitted</h1>\n        <button (click)=\"submitFormAgain()\" class=\"btn btn-primary\">Add another Economy</button>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/add-headlines/add-headlines.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/add-headlines/add-headlines.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-headlines\" *ngIf=\"!isFormSubmitted; else showSubmitted\">\n    <form action=\"\" [formGroup]=\"headlinesForm\"  (ngSubmit)=\"onSubmit()\">\n        <div class=\"col-12 mt-3\">\n            <input type=\"text\" class=\"input-group-text\" placeholder=\"title\" formControlName=\"title\">\n        </div>\n        <div class=\"col-12 mt-3\">\n            <textarea formControlName=\"description\" \n                        class=\"input-group-text\" \n                        placeholder=\"description\" \n                        cols=\"50\" \n                        rows=\"10\"\n                        style=\"text-align: start;\">\n            </textarea>\n        </div>\n        <div class=\"col-12 mt-3\">  \n            <input type=\"text\" class=\"input-group-text\" placeholder=\"dd/mm/yy\" formControlName=\"date\">\n        </div>\n        <div class=\"col-12 mt-3 d-flex\">\n            <input type=\"file\" \n                   (change)=\"onFileUpload($event.target.files)\">\n                   <span *ngIf=\"showErr\" style=\"color: red;\">Please only .png .jpeg type Image formats</span>\n        </div>\n        <div class=\"col-12 mt-4 button-submit\">\n            <button type=\"submit\" class=\"btn btn-dark btn-lg\">Add Headlines</button>\n        </div>\n    </form>\n</div>\n\n<ng-template #showSubmitted>\n    <div class=\"submited\">\n        <h1>Submited</h1>\n        <button (click)=\"submitFormAgain()\" class=\"btn btn-primary\">Add another Headline</button>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/add-news/add-news.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/add-news/add-news.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-news\" *ngIf=\"!isFormSubmited; else showFormSubmitted\">\n    <form action=\"\" [formGroup]=\"newsForm\"  (ngSubmit)=\"onSubmit()\">\n        <div class=\"col-12 mt-3\">\n            <input type=\"text\" class=\"input-group-text\" placeholder=\"title\" formControlName=\"title\">\n        </div>\n        <div class=\"col-12 mt-3\">\n            <textarea formControlName=\"description\" \n                     class=\"input-group-text\" \n                     placeholder=\"description\" \n                     cols=\"50\" \n                     rows=\"10\"\n                     style=\"text-align: start;\">\n            </textarea>\n        </div>\n        <div class=\"col-12 mt-3\">  \n            <input type=\"text\" class=\"input-group-text\" placeholder=\"date\" formControlName=\"date\">\n        </div>\n        <div class=\"col-12 mt-3 d-flex\">\n            <input type=\"file\" \n                   (change) = 'onFileUpload($event.target.files)'\n                   style=\"outline: none;\">\n                   <span *ngIf=\"isImgValid\">Please upload only .png or .jpeg format images</span>\n        </div>  \n        <div class=\"col-12 button-submit mt-4\">\n            <button type=\"submit\" class=\"btn btn-dark btn-lg\">Add news</button>\n        </div>\n    </form>\n</div>\n\n<ng-template #showFormSubmitted>\n    <div class=\"submit-again\">\n        <h1>Form Submitted</h1>\n        <button (click)=\"submitFormAgain()\" class=\"btn btn-primary\">Add another News</button>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/add-politics/add-politics.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/add-politics/add-politics.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-news\" *ngIf=\"!isFormSubmited; else showFormSubmitted\">\n    <form action=\"\" [formGroup]=\"politicsForm\"  (ngSubmit)=\"onSubmit()\">\n        <div class=\"col-12 mt-3\">\n            <input type=\"text\" class=\"input-group-text\" placeholder=\"title\" formControlName=\"title\">\n        </div>\n        <div class=\"col-12 mt-3\">\n            <textarea formControlName=\"description\" \n                     class=\"input-group-text\" \n                     placeholder=\"description\" \n                     cols=\"50\" \n                     rows=\"10\"\n                     style=\"text-align: start;\">\n            </textarea>\n        </div>\n        <div class=\"col-12 mt-3\">  \n            <input type=\"text\" class=\"input-group-text\" placeholder=\"dd/mm/yy\" formControlName=\"date\">\n        </div>\n        <div class=\"col-12 mt-3 d-flex\">\n            <input type=\"file\" \n                   (change) = 'onFileUpload($event.target.files)'\n                   style=\"outline: none;\">\n        <span *ngIf=\"showErr\" style=\"color: red;\">Please only .png .jpeg type Image formats</span>\n\n        </div>  \n        <div class=\"col-12 button-submit mt-4\">\n            <button type=\"submit\" class=\"btn btn-dark btn-lg\">Add Politics</button>\n        </div>\n    </form>\n</div>\n\n<ng-template #showFormSubmitted>\n    <div class=\"submit-again\">\n        <h1>Form Submitted</h1>\n        <button (click)=\"submitFormAgain()\" class=\"btn btn-primary\">Add another Politics</button>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/admin-login/admin-login.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/admin-login/admin-login.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"authorize\" *ngIf=\"!isAdmin\">\n    <form [formGroup]=\"adminForm\" (ngSubmit) = 'submitForm()'>\n        <div class=\"col-md-6\">\n            <input type=\"text\" placeholder=\"Username\" class=\"form-control\" formControlName=\"userName\">\n        </div>\n        <div class=\"col-md-6 mt-3\">\n            <input type=\"text\" placeholder=\"Password\" class=\"form-control\" type=\"password\" formControlName=\"password\">\n        </div>\n        <div class=\"col-md-6 mt-3\" *ngIf=\"showErr\">\n            <span style=\"color: red;\"> Wrong Username or Password </span>\n        </div>\n        <div class=\"col-md-6 mt-3 d-flex justify-content-end\">\n            <button class=\"btn btn-dark lg\" type=\"submit\">Login</button>\n        </div>\n    </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/admin-navigation/admin-navigation.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/admin-navigation/admin-navigation.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"admin-navigation\">\n    <div class=\"col-12\">\n        <h1>Admin panel</h1>\n    </div>\n    <div class=\"col-12 mt-5\">\n        <a [routerLink]=\"[ '/admin/add-headlines' ]\" routerLinkActive=\"active\">Add-Headlines</a>\n    </div>\n    <div class=\"col-12 mt-3\">\n        <a [routerLink]=\"[ '/admin/add-politics' ]\" routerLinkActive=\"active\">Add Politics</a>\n    </div>\n    <div class=\"col-12 mt-3\">\n        <a [routerLink]=\"[ '/admin/add-culture' ]\" routerLinkActive=\"active\">Add Culture & Lifestyle</a>\n    </div>\n    <div class=\"col-12 mt-3\">\n        <a [routerLink]=\"[ '/admin/add-economy' ]\" routerLinkActive=\"active\">Add Economy</a>\n    </div>  \n    <div class=\"col-12 mt-3\">\n        <a [routerLink]=\"[ '/admin/add-ads' ]\" routerLinkActive=\"active\">Add ADS</a>\n    </div>  \n\n\n    <div class=\"col-12 mt-5\">\n        <a [routerLink]=\"[ '/admin/all-news' ]\" routerLinkActive=\"active\">Remove News</a>\n    </div>\n    <div class=\"col-12 mt-3\">\n        <a [routerLink]=\"[ '/admin/all-headlines' ]\" routerLinkActive=\"active\">Remove Headlines</a>\n    </div>\n    <div class=\"col-12 mt-3\">\n        <a [routerLink]=\"[ '/admin/all-ads' ]\" routerLinkActive=\"active\">Remove ADS</a>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/admin-panel.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/admin-panel.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<router-outlet></router-outlet>\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/all-ads/all-ads.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/all-ads/all-ads.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>REMOVE ADS</h1>\n<div class=\"row news\" *ngFor=\"let item of allAds; let i = index\">\n    <div class=\"news__title col-12 d-flex justify-content-center mt-3\" style=\"background-color: cadetblue;\">\n        <div (click)=\"toggleAds(i)\"  \n             class=\"news__title col-12 d-flex justify-content-center\">\n            <h4 (click)=\"toggleAds(i)\" style=\"cursor: pointer;\"> {{  item.linkPath }} </h4>\n        </div>\n    </div>\n    <div  class=\"col-12 news mt-3\" *ngIf=\"item.isActive\" >\n        <p> {{ 'ID: ' + item._id }} </p>\n        <p> {{ 'Link - (URL): ' + item.linkPath }} </p>\n        <button class=\"btn btn-danger\" (click)=\"removeAds(item._id, i)\"> Remove </button>\n    </div>\n</div>  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/all-headlines/all-headlines.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/all-headlines/all-headlines.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>REMOVE Headlines</h1>\n<div class=\"col-12 row\">\n    <div class=\"col-12 d-flex mt-3\">\n        <div class=\"col-md-8\">\n            <input type=\"text\" \n                    class=\"form-control\" \n                    placeholder=\"Search\" \n                    [(ngModel)]=\"keyWord\" \n                    (keyup.enter) = 'filterHeadlines($event.target.value)'>\n        </div>\n        <div class=\"col-md-4\">\n            <button class=\"btn btn-dark\" (click)=\"filterHeadlines(keyWord)\">Search</button>\n        </div>\n    </div>\n    <div class=\"col-12 mt-3\">\n        <button class=\"btn btn-primary\" (click)=\"showAllHeadlines()\">Show all Headlines</button>\n    </div>\n</div>\n\n<ng-container *ngIf=\"!isFiltered; else showFilter\">\n    <div class=\"row news\" *ngFor=\"let item of allHeadlines; let i = index\" >\n        <div class=\"news__title col-12 d-flex justify-content-center mt-3\" style=\"background-color: cadetblue;\">\n            <div class=\"news__title col-12 d-flex justify-content-center\">\n                <h4 (click)=\"toggleHeadlines(i)\"> {{  item.title }} </h4>\n            </div>\n        </div>\n        <div class=\"col-12 news mt-3\" *ngIf=\"item.isActive\" >\n            <p> {{ 'ID: ' + item._id }} </p>\n            <p> {{ 'Title: ' + item.title }} </p>\n            <p> {{ 'Description: ' + item.description }} </p>\n            <button class=\"btn btn-danger\" (click)=\"deleteHeadlines( i ,item._id )\"> Remove </button>\n        </div>\n    </div>    \n</ng-container>\n\n\n\n<ng-template #showFilter>\n    <div class=\"row news\" *ngFor=\"let item of allFilteredHeadlines; let i = index\">\n        <div class=\"news__title col-12 d-flex justify-content-center mt-3\" style=\"background-color: cadetblue;\">\n            <div class=\"news__title col-12 d-flex justify-content-center\">\n                <h4 (click)=\"toggleFiltered(i)\"> {{  item.title }} </h4>\n            </div>\n        </div>\n        <div class=\"col-12 news mt-3\" *ngIf=\"item.isActive\" >\n            <p> {{ 'ID: ' + item._id }} </p>\n            <p> {{ 'Title: ' + item.title }} </p>\n            <p> {{ 'Description: ' + item.description }} </p>\n            <button class=\"btn btn-danger\" (click)=\"deleteHeadlines( i ,item._id )\"> Remove </button>\n        </div>\n    </div> \n</ng-template> \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/all-news/all-news.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/all-news/all-news.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"row news\">\n    <div class=\"news__title col-12 d-flex justify-content-center mt-3\" style=\"background-color: cadetblue;\">\n        <a [routerLink]=\"['/admin/remove-news']\" routerLinkActive=\"router-link-active\" >\n            <button class=\"large button\"> Remove News </button>\n        </a>\n    </div>\n \n    <div class=\"news__title col-12 d-flex justify-content-center mt-3\" style=\"background-color: cadetblue;\">\n        <a [routerLink]=\"['/admin/remove-politics']\" routerLinkActive=\"router-link-active\" >\n            <button class=\"large button\"> Remove Politics </button>\n        </a>\n    </div>\n \n    <div class=\"news__title col-12 d-flex justify-content-center mt-3\" style=\"background-color: cadetblue;\">\n        <a [routerLink]=\"['/admin/remove-culture']\" routerLinkActive=\"router-link-active\" >\n            <button class=\"large button\"> Remove Culture & Lifestyles </button>\n        </a>\n    </div>\n \n    <div class=\"news__title col-12 d-flex justify-content-center mt-3\" style=\"background-color: cadetblue;\">\n        <a [routerLink]=\"['/admin/remove-economy']\" routerLinkActive=\"router-link-active\" >\n            <button class=\"large button\"> Remove Economy </button>\n        </a>\n    </div>\n\n</div>   ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/all-news/remove-culture/remove-culture.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/all-news/remove-culture/remove-culture.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>REMOVE Culture</h1>\n<div class=\"col-12 row\">\n    <div class=\"col-12 d-flex mt-3\">\n        <div class=\"col-md-8\">\n            <input type=\"text\" \n                    class=\"form-control\" \n                    placeholder=\"Search\" \n                    [(ngModel)]=\"searcKey\" \n                    (keyup.enter) = 'filterCulture($event.target.value)'>\n        </div>\n        <div class=\"col-md-4\">\n            <button class=\"btn btn-dark\" (click)=\"filterCulture(searcKey)\">Search</button>\n        </div>\n    </div>  \n    <div class=\"col-12 mt-3\">\n        <button class=\"btn btn-primary\" (click)=\"showAllCulture()\">Show all Culture</button>\n    </div>\n</div>\n\n<ng-container *ngIf=\"!isFiltered; else showFilter\">\n    <div class=\"row news\" *ngFor=\"let item of allCulture; let i = index\" >\n        <div class=\"news__title col-12 d-flex justify-content-center mt-3\" style=\"background-color: cadetblue;\">\n            <div class=\"news__title col-12 d-flex justify-content-center\">\n                <h4 (click)=\"toggle(i)\"> {{  item.title }} </h4>\n            </div>\n        </div>\n        <div class=\"col-12 news mt-3\" *ngIf=\"item.isActive\" >\n            <p> {{ 'ID: ' + item._id }} </p>\n            <p> {{ 'Title: ' + item.title }} </p>\n            <p> {{ 'Description: ' + item.description }} </p>\n            <button class=\"btn btn-danger\" (click)=\"deleteCulture( i ,item._id )\"> Remove </button>\n        </div>\n    </div>   \n</ng-container>\n\n\n\n<ng-template #showFilter>\n    <div class=\"row news\" *ngFor=\"let item of allFilteredCulture; let i = index\">\n        <div class=\"news__title col-12 d-flex justify-content-center mt-3\" style=\"background-color: cadetblue;\">\n            <div class=\"news__title col-12 d-flex justify-content-center\">\n                <h4 (click)=\"toggleFiltered(i)\"> {{  item.title }} </h4>\n            </div>\n        </div>\n        <div class=\"col-12 news mt-3\" *ngIf=\"item.isActive\" >\n            <p> {{ 'ID: ' + item._id }} </p>\n            <p> {{ 'Title: ' + item.title }} </p>\n            <p> {{ 'Description: ' + item.description }} </p>\n            <button class=\"btn btn-danger\" (click)=\"deleteCulture( i ,item._id )\"> Remove </button>\n        </div>\n    </div> \n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/all-news/remove-economy/remove-economy.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/all-news/remove-economy/remove-economy.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>REMOVE Economy</h1>\n<div class=\"col-12 row\">\n    <div class=\"col-12 d-flex mt-3\">\n        <div class=\"col-md-8\">\n            <input type=\"text\" \n                    class=\"form-control\" \n                    placeholder=\"Search\" \n                    [(ngModel)]=\"searcKey\" (keyup.enter) = 'filterEconomy($event.target.value)'>\n        </div>\n        <div class=\"col-md-4\">\n            <button class=\"btn btn-dark\" (click)=\"filterEconomy(searcKey)\">Search</button>\n        </div>\n    </div>\n    <div class=\"col-12 mt-3\">\n        <button class=\"btn btn-primary\" (click)=\"showAllEconomy()\">Show all Economy</button>\n    </div>\n</div>\n\n<ng-container *ngIf=\"!isFilterActive; else showFilter\">\n    <div class=\"row news\" *ngFor=\"let item of allEconomy; let i = index\" >\n        <div class=\"news__title col-12 d-flex justify-content-center mt-3\" style=\"background-color: cadetblue;\">\n            <div class=\"news__title col-12 d-flex justify-content-center\">\n                <h4 (click)=\"toggle(i)\"> {{  item.title }} </h4>\n            </div>\n        </div>\n        <div class=\"col-12 news mt-3\" *ngIf=\"item.isActive\" >\n            <p> {{ 'ID: ' + item._id }} </p>\n            <p> {{ 'Title: ' + item.title }} </p>\n            <p> {{ 'Description: ' + item.description }} </p>\n            <button class=\"btn btn-danger\" (click)=\"deleteEconomy( i ,item._id )\"> Remove </button>\n        </div>\n    </div>   \n</ng-container>\n\n\n\n<ng-template #showFilter>\n    <div class=\"row news\" *ngFor=\"let item of allFilteredEconomy; let i = index\">\n        <div class=\"news__title col-12 d-flex justify-content-center mt-3\" style=\"background-color: cadetblue;\">\n            <div class=\"news__title col-12 d-flex justify-content-center\">\n                <h4 (click)=\"toggleFiltered(i)\"> {{  item.title }} </h4>\n            </div>\n        </div>\n        <div class=\"col-12 news mt-3\" *ngIf=\"item.isActive\" >\n            <p> {{ 'ID: ' + item._id }} </p>\n            <p> {{ 'Title: ' + item.title }} </p>\n            <p> {{ 'Description: ' + item.description }} </p>\n            <button class=\"btn btn-danger\" (click)=\"deleteEconomy( i ,item._id )\"> Remove </button>\n        </div>\n    </div> \n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/all-news/remove-news/remove-news.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/all-news/remove-news/remove-news.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>REMOVE FROM NEWS</h1>\n<div class=\"col-12 row\">\n    <div class=\"col-12 d-flex mt-3\">\n        <div class=\"col-md-8\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"searcKey\" (keyup.enter) = 'filterNews($event.target.value)'>\n        </div>\n        <div class=\"col-md-4\">\n            <button class=\"btn btn-dark\" (click)=\"filterNews(searcKey)\">Search</button>\n        </div>\n    </div>\n    <div class=\"col-12 mt-3\">\n        <button class=\"btn btn-primary\" (click)=\"showAllNews()\">Show all News</button>\n    </div>\n</div>\n\n<ng-container *ngIf=\"!isFilterActive; else showFilter\">\n    <div class=\"row news\" *ngFor=\"let item of allNews; let i = index\" >\n        <div class=\"news__title col-12 d-flex justify-content-center mt-3\" style=\"background-color: cadetblue;\">\n            <div class=\"news__title col-12 d-flex justify-content-center\">\n                <h4 (click)=\"toggleNews(i)\"> {{  item.title }} </h4>\n            </div>\n        </div>\n        <div class=\"col-12 news mt-3\" *ngIf=\"item.isActive\" >\n            <p> {{ 'ID: ' + item._id }} </p>\n            <p> {{ 'Title: ' + item.title }} </p>\n            <p> {{ 'Description: ' + item.description }} </p>\n            <button class=\"btn btn-danger\" (click)=\"removeNews( i ,item._id )\"> Remove </button>\n        </div>\n    </div>   \n</ng-container>\n\n\n\n<ng-template #showFilter>\n    <div class=\"row news\" *ngFor=\"let item of allFilteredNews; let i = index\">\n        <div class=\"news__title col-12 d-flex justify-content-center mt-3\" style=\"background-color: cadetblue;\">\n            <div class=\"news__title col-12 d-flex justify-content-center\">\n                <h4 (click)=\"toggleFitered(i)\"> {{  item.title }} </h4>\n            </div>\n        </div>\n        <div class=\"col-12 news mt-3\" *ngIf=\"item.isActive\" >\n            <p> {{ 'ID: ' + item._id }} </p>\n            <p> {{ 'Title: ' + item.title }} </p>\n            <p> {{ 'Description: ' + item.description }} </p>\n            <button class=\"btn btn-danger\" (click)=\"removeNews( i ,item._id )\"> Remove </button>\n        </div>\n    </div> \n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/all-news/remove-politics/remove-politics.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/all-news/remove-politics/remove-politics.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>REMOVE Politics</h1>\n<div class=\"col-12 row\">\n    <div class=\"col-12 d-flex mt-3\">\n        <div class=\"col-md-8\">\n            <input type=\"text\" \n                    class=\"form-control\" \n                    placeholder=\"Search\" \n                    [(ngModel)]=\"keyWord\" \n                    (keyup.enter) = 'filterPolitics($event.target.value)'>\n        </div>\n        <div class=\"col-md-4\">\n            <button class=\"btn btn-dark\" (click)=\"filterPolitics(keyWord)\">Search</button>\n        </div>\n    </div>\n    <div class=\"col-12 mt-3\">\n        <button class=\"btn btn-primary\" (click)=\"showAllPolitics()\">Show all Politics</button>\n    </div>\n</div>\n\n<ng-container *ngIf=\"!isFilterActive; else showFilter\">\n    <div class=\"row news\" *ngFor=\"let item of allPolitics; let i = index\" >\n        <div class=\"news__title col-12 d-flex justify-content-center mt-3\" style=\"background-color: cadetblue;\">\n            <div class=\"news__title col-12 d-flex justify-content-center\">\n                <h4 (click)=\"toggle(i)\"> {{  item.title }} </h4>\n            </div>\n        </div>\n        <div class=\"col-12 news mt-3\" *ngIf=\"item.isActive\" >\n            <p> {{ 'ID: ' + item._id }} </p>\n            <p> {{ 'Title: ' + item.title }} </p>\n            <p> {{ 'Description: ' + item.description }} </p>\n            <button class=\"btn btn-danger\" (click)=\"deletePolitics( i ,item._id )\"> Remove </button>\n        </div>\n    </div>   \n</ng-container>\n\n\n\n<ng-template #showFilter>\n    <div class=\"row news\" *ngFor=\"let item of allFilteredPolitics; let i = index\">\n        <div class=\"news__title col-12 d-flex justify-content-center mt-3\" style=\"background-color: cadetblue;\">\n            <div class=\"news__title col-12 d-flex justify-content-center\">\n                <h4 (click)=\"toggleFiltered(i)\"> {{  item.title }} </h4>\n            </div>\n        </div>\n        <div class=\"col-12 news mt-3\" *ngIf=\"item.isActive\" >\n            <p> {{ 'ID: ' + item._id }} </p>\n            <p> {{ 'Title: ' + item.title }} </p>\n            <p> {{ 'Description: ' + item.description }} </p>\n            <button class=\"btn btn-danger\" (click)=\"deletePolitics( i ,item._id )\"> Remove </button>\n        </div>\n    </div> \n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/advertisement/advertisement.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/advertisement/advertisement.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contact row p-3\">\n    <div class=\"contact__title col-md-12\">\n        <h1>Advertising</h1>\n    </div>\n    <div class=\"contact__img col-md-12 mt-5 d-flex justify-content-center\">\n        <div class=\"contact__img__content \">\n            <img src=\"assets/image/ads.svg\" alt=\"conact\">\n        </div>\n    </div>\n    <div class=\"col-md-12 contact__description mt-5\">\n       <div class=\"contact__description__title col-12\">   \n           <p>For a price sheet of advertising rates, \n               please contact us at messenger@messenger.com.ge or call (995 32) 939 169.\n            </p>\n       </div>\n       <div class=\"col-md-12 contact__button d-flex justify-content-center\">\n        <a [routerLink]=\"[ '/contact' ]\">\n            <button class=\"large button\">\n                Contact us\n            </button>\n        </a> \n       </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"isAdminActive; else showApp\">\n  <div class=\"container-fluid\" style=\"min-height: 100vh;\">\n    <div class=\"row h-100\" style=\"min-height: 100vh;\">\n      <div class=\"admin-navingation col-lg-3\">\n        <app-admin-navigation *ngIf=\"isAdmin\"></app-admin-navigation>\n    </div>\n    <div class=\"admin-content pb-5 col-lg-9 mt-5 h-100\" >\n        <app-admin-panel *ngIf=\"isAdmin\"></app-admin-panel>\n        <app-admin-login *ngIf=\"!isAdmin\" (result) = 'getAdminStatus($event)'></app-admin-login>\n\n    </div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-template #showApp>\n  <div class=\"container pb-5\" *ngIf=\"!isAdminActive\" style=\"min-height: 100vh;\">\n    <div class=\"row\">\n      <!-- * * * Search * *  -->\n      <div class=\"col-md-12 mt-3\">\n        <app-search></app-search>\n      </div>\n      <!-- * * * Main Header with Logo * *  -->\n      <div class=\"col-md-12 mt-3\">\n        <app-header></app-header>\n      </div>\n        <!-- * * * Navigation * *  -->\n      <div class=\"col-md-12\" id=\"navigation\" > \n        <app-navigation></app-navigation>\n\n      </div>\n     \n      <!-- * * * Router Content * * *  -->\n      <div class=\"main-content col-12 mt-3 p-0 pb-5\" [@routeAnimations]=\"prepareRoute(outlet)\">\n        <router-outlet #outlet=\"outlet\" ></router-outlet>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n\n <!-- * * * Footer * * *  -->\n<div class=\"footer w-100\" >\n  <app-footer></app-footer>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contact row p-3 pb-5\">\n    <div class=\"contact__title col-md-12\">\n        <h1>Contact</h1>\n    </div>\n    <div class=\"contact__img col-md-6 mt-5\">\n        <div class=\"contact__img__content\">\n            <img src=\"assets/image/contact.svg\" alt=\"conact\">\n        </div>\n    </div>\n    <div class=\"col-md-6 contact__description mt-5\">\n       <div class=\"contact__description__title col-12\">\n           <p>We welcome questions and comments. \n            The paper can be purchased directly at the editorial offices or found at select stores in Tbilisi.\n            </p>\n       </div>\n       <div class=\"contact__description__contact col-md-12\">\n            <div class=\"contact__description__contact__email col-12 d-flex\">\n                <i class=\"fas fa-phone-alt\"></i>\n                <p>Phone: </p>\n                <div class=\"d-block\">\n                    <span class=\"pr-2\">(+995) 599 501452;</span>\n                    <span class=\"pr-2\">(+995) 599 565621;</span>\n                    <span>(+995) 599 710809</span>\n                </div>\n            </div>\n            <div class=\"contact__description__contact__email col-12 d-flex\">\n                <i class=\"fas fa-location-arrow\"></i>\n                <p>Location: </p>\n                <span>43 Belinski Street, Tbilisi, Georgia</span>\n            </div>\n            <div class=\"contact__description__contact__email col-12 d-flex\">\n                <i class=\"fas fa-envelope\"></i>\n                <p>Email: </p>\n                <span>messenger@messenger.com.ge</span>\n            </div>\n       </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/culture/culture-details/culture-details.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/culture/culture-details/culture-details.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"news row\" *ngIf=\"cultures.length > 0\">\n    <div class=\"col-md-12\"  >\n        <div class=\"main p-2 row\" >\n            <div class=\"col-12\" *ngFor=\"let item of cultures; first as isFirst\">\n                <div class=\"main__title col-12\" >\n                    <h4 style=\"cursor: auto;\"> {{ item.title }} </h4>  \n                </div>\n                <div class=\"main__social mt-2 col-12 d-flex justify-content-between\">\n                    <div class=\"col-md-9 p-0\">\n                        <span> {{ item.date }} </span>\n                    </div>\n                    <div class=\"col-md-3  d-flex justify-content-end\">\n                        <!-- <i class=\"fab fa-twitter\"></i> -->\n                        <!-- <i class=\"fab fa-linkedin-in\"></i>   -->\n                        <!-- <fb-like [url]=\"'http://167.172.172.153:8080/#/culutre-lifystyle/' + item._id\" ></fb-like> -->\n                        <button class=\"facebook\" ceiboShare  \n                            [facebook] = \"{u: 'http://167.172.172.153:8080/#/culutre-lifystyle/' + item._id}\">\n                            <img class=\"img\" style=\"vertical-align:middle\" src=\"https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/jydh1rvUVNm.png\" alt=\"\" width=\"12\" height=\"12\">\n                            <span>Share</span> \n                        </button>\n                        <!-- <i class=\"fab fa-instagram\"></i> -->\n                    </div>   \n                </div>\n                <div>\n                    <div class=\"row align-items-center\">\n                        <div class=\"main__image mt-3 d-flex justify-content-center col-lg-12\" >\n                            <div class=\"main__image__content\">\n                                <img *ngIf=\"item.file.path\"\n                                     [src]=\"item.file.path\">\n                               \n                            \n                            </div>\n                        </div>\n                    \n                        <div class=\"main__description mt-4 col-lg-12 main__description\">\n                            <p> {{item.description  }} </p>\n                        </div>\n\n                    </div>\n            \n                </div>\n            </div>\n        </div>\n    </div>\n</div>   \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/culture/culture.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/culture/culture.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"news row\" *ngIf=\" allCulutre.length > 0\" >\n    <div class=\"col-md-12\" >\n        <div class=\"main p-2 row\" >\n            <div class=\"col-12 mt-3\" *ngFor=\"let item of allCulutre; first as isFirst\" [ngClass]=\"{'mt-3': isFirst, 'mt-5': !isFirst}\">\n                <div class=\"main__title col-12\" >\n                    <h4 (click)=\"routeToCulture(item._id)\"> {{ item.title }} </h4>  \n                </div>\n                <div class=\"main__social mt-2 col-12 d-flex justify-content-between\">\n                    <div class=\"col-md-9 p-0\">\n                        <span> {{ item.date  }} </span>\n                    </div>\n                    <div class=\"col-md-3  d-flex justify-content-end pr-0\">\n                        <!-- <i class=\"fab fa-twitter\"></i> -->\n                        <!-- <i class=\"fab fa-linkedin-in\"></i>   -->\n                        <!-- <fb-like [url]=\"'http://167.172.172.153:8080/#/culutre-lifystyle/' + item._id\" ></fb-like> -->\n                        <button class=\"facebook\" ceiboShare  \n                            [facebook] = \"{u: 'http://167.172.172.153:8080/#/culutre-lifystyle/' + item._id}\">\n                            <img class=\"img\" style=\"vertical-align:middle\" src=\"https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/jydh1rvUVNm.png\" alt=\"\" width=\"12\" height=\"12\">\n                            <span>Share</span> \n                        </button>\n                        <!-- <i class=\"fab fa-instagram\"></i> -->\n                    </div>   \n                </div>\n                <div>\n                    <div class=\"row align-items-center\">\n                        <div class=\"main__image mt-3 d-flex justify-content-center col-lg-6\" \n                            (click)=\"routeToCulture(item._id)\"\n                            style=\"cursor: pointer;\">\n                            <div class=\"main__image__content\">\n                                <img *ngIf=\"item.file.path\"\n                                    appLazyLoad\n                                     [src]=\"item.file.path\">\n                               \n                            \n                            </div>\n                        </div>\n                    \n                        <div class=\"main__description mt-4 col-lg-6 main__description\"\n                            (click)=\"routeToCulture(item._id)\"\n                            style=\"cursor: pointer;\">\n                            <p> {{item.description | slice:0:1000   }} </p>\n                        </div>\n\n                    </div>\n            \n                </div>\n            </div>\n        </div>\n    </div>\n</div>   \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/economy/economy-details/economy-details.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/economy/economy-details/economy-details.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"news row\" *ngIf=\"economies.length > 0\">\n    <div class=\"col-md-12\"  >\n        <div class=\"main p-2 row\" >\n            <div class=\"col-12\" *ngFor=\"let item of economies; first as isFirst\">\n                <div class=\"main__title col-12\" >\n                    <h4 style=\"cursor: auto;\"> {{ item.title }} </h4>  \n                </div>\n                <div class=\"main__social mt-2 col-12 d-flex justify-content-between\">\n                    <div class=\"col-md-9 p-0\">\n                        <span> {{ item.date }} </span>\n                    </div>\n                    <div class=\"col-md-3  d-flex justify-content-end\">\n                        <!-- <i class=\"fab fa-twitter\"></i> -->\n                        <!-- <i class=\"fab fa-linkedin-in\"></i>   -->\n                        <!-- <fb-like [url]=\"'http://167.172.172.153:8080/#/economy/' + item._id\" ></fb-like> -->\n                        <button class=\"facebook\" ceiboShare  \n                            [facebook] = \"{u: 'http://167.172.172.153:8080/#/economy/' + item._id}\">\n                            <img class=\"img\" style=\"vertical-align:middle\" src=\"https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/jydh1rvUVNm.png\" alt=\"\" width=\"12\" height=\"12\">\n                            <span>Share</span> \n                        </button>\n                        <!-- <i class=\"fab fa-instagram\"></i> -->\n                    </div>   \n                </div>\n                <div>\n                    <div class=\"row align-items-center\">\n                        <div class=\"main__image mt-3 d-flex justify-content-center col-lg-12\" >\n                            <div class=\"main__image__content\">\n                                <img *ngIf=\"item.file.path\"\n                                     [src]=\"item.file.path\">\n                               \n                            \n                            </div>\n                        </div>\n                    \n                        <div class=\"main__description mt-4 col-lg-12 main__description\">\n                            <p> {{item.description  }} </p>\n                        </div>\n\n                    </div>\n            \n                </div>\n            </div>\n        </div>\n    </div>\n</div>   \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/economy/economy.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/economy/economy.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"news row\" *ngIf=\" allEconomy.length > 0\">\n    <div class=\"col-md-12\"  >\n        <div class=\"main p-2 row\" >\n            <div class=\"col-12 mt-3\" *ngFor=\"let item of allEconomy; first as isFirst\" [ngClass]=\"{'mt-3': isFirst, 'mt-5': !isFirst}\">\n                <div class=\"main__title col-12\" >\n                    <h4 (click)=\"routeToEconomyDetails(item._id)\"> {{ item.title }} </h4>  \n                </div>\n                <div class=\"main__social mt-2 col-12 d-flex justify-content-between\">\n                    <div class=\"col-md-9 p-0\">\n                        <span> {{ item.date }} </span>\n                    </div>\n                    <div class=\"col-md-3  d-flex justify-content-end pr-0\">\n                        <!-- <i class=\"fab fa-twitter\"></i> -->\n                        <!-- <i class=\"fab fa-linkedin-in\"></i>   -->\n                        <!-- <fb-like [url]=\"'http://167.172.172.153:8080/#/economy/' + item._id\" ></fb-like> -->\n                        <button class=\"facebook\" ceiboShare  \n                            [facebook] = \"{u: 'http://167.172.172.153:8080/#/economy/' + item._id}\">\n                            <img class=\"img\" style=\"vertical-align:middle\" src=\"https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/jydh1rvUVNm.png\" alt=\"\" width=\"12\" height=\"12\">\n                            <span>Share</span> \n                         </button>\n                        <!-- <i class=\"fab fa-instagram\"></i> -->\n                    </div>   \n                </div>\n                <div>\n                    <div class=\"row align-items-center\">\n                        <div class=\"main__image mt-3 d-flex justify-content-center col-lg-6\" >\n                            <div class=\"main__image__content\" \n                                (click)=\"routeToEconomyDetails(item._id)\" style=\"cursor: pointer;\">\n                                <img *ngIf=\"item.file.path\"\n                                    appLazyLoad\n                                     [src]=\"item.file.path\">\n                               \n                            \n                            </div>\n                        </div>\n                    \n                        <div class=\"main__description mt-4 col-lg-6 main__description\" \n                            (click)=\"routeToEconomyDetails(item._id)\" style=\"cursor: pointer;\">\n                            <p> {{item.description  | slice:0:1000 }} </p>\n                        </div>\n\n                    </div>\n            \n                </div>\n            </div>\n        </div>\n    </div>\n</div>   \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer\">\n    <div class=\"contrainer h-100\">\n        <div class=\"row h-100 justyfy-content-between align-items-center\">\n            <div class=\"col-5 h-100 d-flex align-items-center justify-content-center\">\n                <p class=\"mt-3\">© COPYRIGHT 2020</p>\n            </div>\n            <div class=\"col-6 d-flex justify-content-end d-flex align-items-center h-100\" >\n                <p class=\"mt-3\">CREATED BY</p>\n                <div class=\"image ml-3\">\n                    <a href=\"http://webuko.ge/\">\n                        <img \n                        appLazyLoad\n                        src=\"assets/image/webuko.png\" alt=\"\">\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header row\">\n    <div class=\"header__headline col-xl-3\">\n        <div class=\"\">\n            <p>The Messenger</p>\n        </div>\n        <div class=\"\">\n            <span>Georgia's leading English language daily newspaper !</span>\n        </div>\n    </div>\n    <div class=\"header__image col-xl-6 d-flex justify-content-center align-items-center\" \n        [routerLink]=\"[ '/home' ]\" \n        style=\"cursor: pointer; outline: none;\">\n        <!-- <img src=\"assets/image/logo1.png\" alt=\"image\"> -->\n        <h4 class=\"red\">The</h4>\n        <h4>Messenger</h4>\n    </div>\n    <div class=\"header__follow col-xl-3 mb-3\">  \n        <div class=\"\">\n            <p>Follow</p>\n        </div>\n        <div class=\"d-flex\">\n            <a class=\"social\">Twitter</a>\n            <span>-</span>\n            <a class=\"social\" href=\"https://www.facebook.com/Thegeorgianmessenger/\" target=\"_blank\">Facebook</a>\n            <span>-</span>\n            <a class=\"social\">Instagram</a>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/headlines/headline-details/headline-details.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/headlines/headline-details/headline-details.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"headlines row p-3'\" *ngIf=\"headlineData.file\">\n            <div class=\"col-12 headlines-title mt-3\" style=\"word-wrap: break-word;\">\n                <h4>{{ headlineData.title }}</h4>\n            </div>\n            <div class=\"headlines__content col-md-12\">\n                <div class=\"popular  p-3 mb-5\" >\n                    <!-- <div class=\"mt-3\"> -->\n                        <div class=\"popular__title col-12\">\n                            <span> {{ headlineData.date }} </span>\n                        </div>\n                        <div class=\"popular__img col-12 mt-3 d-flex justify-content-center\">\n                            <div class =\"popular__img__content\">\n                                <img [src]=\"headlineData.file.path\" alt=\"\">\n                            </div>\n                        </div>\n                        <div class=\"popular__description mt-4 col-12\">\n                            <h4 style=\"cursor: unset;\"> {{ headlineData.title }}  </h4>\n                            <span> {{ headlineData.description }} </span>\n                        </div>\n                    <!-- </div> -->\n                </div>\n          </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/headlines/headlines.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/headlines/headlines.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"row\"> -->\n    <ng-container  >\n        <div [ngClass]=\"{'headlines p-3': router.url === '/headlines'}\">\n            <div class=\"col-12 headlines-title mt-3\">\n                <h4>Headlines</h4>\n            </div>\n            <div class=\"headlines__content col-md-12\">\n                <div class=\"popular row p-3 mb-5\" >\n                    <div class=\"mt-3 col-12 p-0\"*ngFor=\"let item of allHeadlines\">\n                        <div class=\"popular__title col-12\">\n                            <span> {{ item.date }} </span>\n                        </div>\n                        <div class=\"popular__img col-12 mt-3 d-flex justify-content-center\" >\n                            <div [ngClass]=\"{'popular__img__content': router.url === '/headlines', \n                                             'content-on-main' :   router.url !== '/headlines'}\">\n                                <img *ngIf=\"item.file.path\" \n                                        [src]=\"item.file.path\" alt=\"img\" \n                                        (click)=\"routeToHeadlineDetails(item._id)\"\n                                        style=\"cursor: pointer;\">\n\n                            </div>\n                        </div>\n                        <div class=\"popular__description mt-4 col-12 p-0\">\n                            <h4 (click)=\"routeToHeadlineDetails(item._id)\" *ngIf=\"router.url === '/home'\">{{ item.title }}</h4>\n                            <h4 (click)=\"routeToHeadlineDetails(item._id)\" \n                                style=\"font-size: 1.4rem;\" \n                                *ngIf=\"router.url !== '/home'\"\n                                 >\n                                 {{ item.title }}\n                            </h4>\n                            <div class=\"\">\n                                <p *ngIf=\"router.url === '/home'\"\n                                    (click)=\"routeToHeadlineDetails(item._id)\"\n                                    style=\"cursor: pointer;\"> {{item.description | slice:0:120  }} </p>\n                                <p *ngIf=\"router.url === '/home'\"  \n                                    style = 'cursor: pointer; color: #de1e26;' \n                                    (click)=\"routeToHeadlineDetails(item._id)\"> See more \n                                </p>\n                            </div>\n                            <p *ngIf=\"router.url !== '/home'\"\n                                (click)=\"routeToHeadlineDetails(item._id)\"\n                                style=\"cursor: pointer;\"> {{ item.description  }} </p>\n                        </div>\n                    </div>\n                    <div class=\"headlines__content__button col-12 d-flex justify-content-center\" *ngIf=\"isShowAllHeadlinesActive\">\n                        <button class=\"large button\" (click)=\"navigateToHeadlines()\">Show all headlines</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ng-container>\n\n    \n<!-- </div> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/ads/ads.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/ads/ads.component.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-12 p-0 mt-4\">\n    <div class=\"ads__img col-12 p-0\">\n        <div class=\"ads__img__content\">\n            <img \n                src=\"assets/image/adv.svg\" \n                appLazyLoad\n                alt=\"\">\n        </div>\n    </div>\n    <div class=\"ads__description mt-3 p-3\">\n        <h4>Advertise</h4>\n        <p>For a price sheet of advertising rates, please contact \n        </p>\n    <div class=\"col-md-12 contact__button d-flex justify-content-center\">\n        <a [routerLink]=\"[ '/contact' ]\">\n            <button class=\"large button\">\n                Contact us\n            </button>\n        </a> \n    </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/ads/commercial/commercial.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/ads/commercial/commercial.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-12 ads p-0 mt-4 pb-5\">\n    <div class=\"ads__description mt-3 p-3 col-12\">\n        <h4>Advertisements</h4>\n    </div>\n    <div class=\"ads__img col-12 mt-3\" *ngFor=\"let item of allAds\">\n        <div class=\"ads__img__content\" (click)=\"linkToUrl(item.linkPath)\">\n            <img  appLazyLoad \n                 [src]=\"item.file.path\" alt=\"my-image\">\n        </div>\n    </div>\n   \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"home w-100\">\n    <div class=\"home__content  d-flex justify-content-between row\">\n        <div class=\"home__content__headline col-lg-3 mb-3\">\n            <app-headlines></app-headlines>\n        </div>\n        <div class=\"col-lg-9\">\n            <app-slider></app-slider>\n\n            <div class=\"home__content__main mt-2 pl-3 row\">\n                <div class=\"col-lg-9\" >   \n                    <app-news></app-news>  \n                </div>\n                <div class=\"col-lg-3 p-0\" >   \n                    <app-ads></app-ads>\n                    <app-commercial></app-commercial>\n                </div>\n            </div>  \n        </div>   \n        \n       \n\n    </div>   \n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/slider/currency/currency.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/slider/currency/currency.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"slider__valute p-0 mt-3 p-2\" >\n    \n    <div class=\"slider__valute__item col-12 d-flex justify-content-around\">\n      <div class=\"slider__valute__item__image\">\n        <img src=\"assets/image/usa.svg\" alt=\"\">\n      </div>\n      <p>USD: </p>\n      <p> {{ USD + ' GEL' }} </p>\n    </div>\n\n    <div class=\"slider__valute__item col-12 d-flex justify-content-around\">\n      <div class=\"slider__valute__item__image\">\n        <img src=\"assets/image/euro.svg\" alt=\"\">\n      </div>\n      <p>EUR: </p>\n      <p> {{ EURO + ' GEL' }} </p>\n    </div>\n\n    <div class=\"slider__valute__item col-12 d-flex justify-content-around\">\n      <div class=\"slider__valute__item__image\">\n        <img src=\"assets/image/uk.svg\" alt=\"\">\n      </div>\n      <p>GBP: </p>\n      <p> {{ GBP + ' GEL' }} </p>\n    </div>\n\n    <div class=\"slider__valute__item col-12 d-flex justify-content-around\">\n      <div class=\"slider__valute__item__image\">\n        <img src=\"assets/image/rus.svg\" alt=\"\">\n      </div>\n      <p>RUB: </p>\n      <p> {{ RUB + ' GEL' }} </p>\n    </div>\n\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/slider/slider.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/slider/slider.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <div class=\"slider d-flex row justify-content-between mb-3\">\n\n    <!-- * * *Images slider * * * *  -->\n    <div class=\"slider__slider col-lg-12 mb-3 d-flex align-items-center\">\n      <ngb-carousel #carousel interval=\"3000\" [pauseOnHover]=\"pauseOnHover\" (slide)=\"onSlide($event)\">\n          <ng-template ngbSlide *ngFor=\"let img of images; index as i\">\n            <div class=\"carousel-caption\">\n              <h3 (click)=\"routerToHeadlinesDetails(img._id)\" style=\"cursor: pointer;\"> {{ img.title }} </h3>\n            </div>\n            <a  target=\"_blank\" rel=\"nofollow noopener noreferrer\" \n                                style=\"cursor: pointer;\">\n              <div class=\"picsum-img-wrapper\">\n                <img *ngIf=\"img.file.path\" \n                      appLazyLoad\n                      [src]=\"img.file.path\" \n                      alt=\"My image {{i + 1}} description\"\n                      \n                      >\n              </div>\n            </a>\n          </ng-template>\n        </ngb-carousel>\n  </div>\n  <!-- End  -->\n  <!-- * * * *Weather * ** *  -->\n  <!-- <div class=\"slider__weather col-lg-2 p-0 mb-3\">\n    <div class=\"mt-4\">\n      <app-weather></app-weather>\n    </div>\n  </div> -->\n  \n\n  </div>\n\n\n  \n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/slider/weather/weather.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/slider/weather/weather.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"divWeatherMain\"> \n    <div *ngIf=\"WeatherData.isDay\" class=\"weatherWidgetRow\">\n        <i class=\"fas fa-3x fa-sun sun\"></i>  \n    </div>   \n    <div *ngIf=\"!WeatherData.isDay\" class=\"weatherWidgetRow\">\n        <i class=\"fas fa-3x fa-moon moon\"></i>  \n    </div>   \n    <div class=\"weatherWidgetRow cloudDiv\">\n        <i class=\"fas fa-cloud fa-3x cloud\"></i>\n    </div>\n    <div class=\"weatherWidgetRow\" style=\"font-size: 22px;margin-top: 5px;\">{{WeatherData.temp_celcius}}°</div>\n    <div class=\"weatherWidgetRow\" style=\"font-size: 12px;\">{{WeatherData.temp_min}}° / {{WeatherData.temp_max}}°</div>\n    <div class=\"weatherWidgetRow\" style=\"font-size: 12px;\">Feels Like: {{WeatherData.temp_feels_like}}°</div>\n    <div class=\"weatherWidgetRow\" style=\"font-size: 20px;margin-top: 10px;\">{{WeatherData.name}}</div>\n    <!-- <div class=\"weatherWidgetRow\" style=\"font-size: 12px;\">Humidity: {{WeatherData.main.humidity}}%</div> -->\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-navigation pt-2 pb-2 row\">\n    <div class=\"main-navigation__item col-md-2\">\n        <a [routerLink]=\"[ '/home' ]\" routerLinkActive=\"active\">Home</a>\n    </div>\n    <div class=\"main-navigation__item col-md-2\">\n        <a [routerLink]=\"[ '/news' ]\" routerLinkActive=\"active\" >News</a>\n    </div>\n    <div class=\"main-navigation__item col-md-2\">\n        <a [routerLink]=\"[ '/politics' ]\" routerLinkActive=\"active\">Politics</a>\n    </div>\n    <div class=\"main-navigation__item col-md-2\">\n        <a [routerLink]=\"[ '/culutre-lifystyle' ]\" routerLinkActive=\"active\">Culture & Lifestyle</a>\n    </div>\n    <div class=\"main-navigation__item col-md-2\" style=\"text-align: center;\">\n        <a [routerLink]=\"[ '/economy' ]\" routerLinkActive=\"active\" >Economy</a>\n    </div>\n    <div class=\"main-navigation__item col-md-2\">\n        <a [routerLink]=\"[ '/contact' ]\" routerLinkActive=\"active\" >Contact</a>\n    </div>  \n    \n<div class=\"nav\" style=\"z-index: 69;\">\n    <i class=\" ml-3 fas fa-bars\" id=\"burger\" (click)=\"toggleMenu('open')\" \n    *ngIf=\"!isMenuActive\" \n    style=\"font-size: 2rem; cursor: pointer; \"></i>\n\n    <nav role=\"navigation\" style = \" \n                                    position: fixed;\n                                    top: 1.5rem;\n                                    left: 50%;\"\n                                     >\n        <div id=\"menuToggle\">\n      \n          <!-- <input type=\"checkbox\"  /> -->\n          \n       \n       \n          <!-- <span></span> -->\n          \n\n          <ul id=\"menu\" style=\"text-align: center;\" *ngIf=\"isMenuActive\" >\n             <a>\n                 <li>\n                    <i class=\"fas fa-times\" (click)=\"toggleMenu('close')\" \n                    *ngIf=\"isMenuActive\" \n                    style=\"font-size: 2rem; cursor: pointer;\"></i>\n                 </li>\n             </a>\n        \n\n            <a [routerLink]=\"[ '/home' ]\" \n                routerLinkActive = 'active-for-mobile '\n                (click)=\"toggleMenu('close')\"\n                >\n                <li>HOME</li>\n            </a>\n            <a [routerLink]=\"[ '/news' ]\" \n                routerLinkActive = 'active-for-mobile '\n                (click)=\"toggleMenu('close')\">\n                <li>NEWS</li>\n            </a>\n            <a [routerLink]=\"[ '/politics' ]\" \n                routerLinkActive = 'active-for-mobile '\n                (click)=\"toggleMenu('close')\">\n                <li>POLITICS</li>\n            </a>\n            <a [routerLink]=\"[ '/culutre-lifystyle' ]\" \n                routerLinkActive = 'active-for-mobile '\n                (click)=\"toggleMenu('close')\">\n                <li>CULTURE</li>\n            </a>\n            <a [routerLink]=\"[ '/economy' ]\" \n                routerLinkActive = 'active-for-mobile '\n                (click)=\"toggleMenu('close')\">    \n                <li>ECONOMY</li>\n            </a>\n            <a [routerLink]=\"[ '/contact' ]\" \n                routerLinkActive = 'active-for-mobile '\n                (click)=\"toggleMenu('close')\" >\n                <li>CONTACT</li>\n            </a>\n            \n          </ul>\n        </div>\n      </nav>\n        \n    </div>\n\n</div>\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news-details/news-details.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/news-details/news-details.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"news w-100\" *ngIf=\"newsData.file\">\n  <div class=\"col-md-12\" class =\"news__content\">\n      <div class=\"main row\" >\n          <div class=\"col-12\" class =\"mt-4 p-3 w-100\">\n              <div class=\"main__title col-12\" >\n                  <h4 style=\"cursor: auto;\">  {{ newsData.title }} </h4>\n              </div>\n              <div class=\"main__social mt-2 col-12 d-flex justify-content-between\">\n                  <div class=\"col-md-9 p-0\">\n                      <span> {{ newsData.date }}  </span>\n                  </div>\n                  <div class=\"col-md-3  d-flex justify-content-end pr-0\">\n                      <!-- <i class=\"fab fa-twitter\"></i> -->\n                      <!-- <i class=\"fab fa-linkedin-in\"></i>   -->\n                      <!-- <i class=\"fab fa-facebook-f\"></i> -->\n                      <!-- <fb-like [url]=\"'http://167.172.172.153:8080/#/news/' + newsData._id\" ></fb-like> -->\n                      <button class=\"facebook\" ceiboShare  \n                            [facebook] = \"{u: 'http://167.172.172.153:8080/#/news/' + newsData._id}\">\n                            <img class=\"img\" style=\"vertical-align:middle\" src=\"https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/jydh1rvUVNm.png\" alt=\"\" width=\"12\" height=\"12\">\n                            <span>Share</span> \n                     </button>\n                      <!-- <i class=\"fab fa-instagram\"></i> -->\n                  </div>   \n              </div>\n              <div class=\"row\" style=\"align-items: center;\">\n                  <div class=\"main__image mt-3 d-flex justify-content-center\" \n                       class =\"col-lg-12 main__image mt-3 d-flex justify-content-center \">\n                      <div class=\"main__image__content\">\n                          <img appLazyLoad [src]=\"newsData.file.path\" style=\"border-radius: .5rem;\">\n                      </div>\n                  </div>   \n              \n                  <div class=\"main__description col-lg-12 mt-4\">\n                      <p> {{ newsData.description }}  </p>\n                  </div>\n          \n              </div>\n          </div>\n      </div>\n  </div>\n</div>   ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"news row\">\n    <div class=\"col-md-12\" *ngIf=\"allNews.length > 0 \" [ngClass]=\"{'news__content': router.url === '/news'}\">\n        <div class=\"main p-2 row\" >\n            <div class=\"col-12\" *ngFor=\"let item of allNews; first as isFirst\" \n                                [ngClass]=\"{'mt-3': isFirst && router.url === '/news', 'mt-5': !isFirst && router.url === '/news'}\">\n                <div class=\"main__title col-12\" >\n                    <h4 (click)=\"routeToNewsDetails(item._id)\"> {{ item.title }} </h4>\n                </div>\n                <div class=\"main__social mt-2 mb-2 col-12 d-flex justify-content-between pr-0\">\n                    <div class=\"col-md-9 p-0\">\n                        <span> {{ item.date }} </span>\n                    </div>\n                    <div class=\"col-md-3  d-flex justify-content-end pr-0\">\n                        <!-- <i class=\"fab fa-twitter\"></i> -->\n                        <!-- <i class=\"fab fa-linkedin-in\"></i>   -->\n                        <!-- <i class=\"fab fa-facebook-f\"></i> -->\n                        <!-- <fb-like [url]=\"'http://167.172.172.153:8080/#/news/' + item._id\" ></fb-like> -->\n                        <button class=\"facebook\" ceiboShare  \n                                [facebook] = \"{u: 'http://167.172.172.153:8080/#/news/' + item._id}\">\n                                <img class=\"img\" style=\"vertical-align:middle\" src=\"https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/jydh1rvUVNm.png\" alt=\"\" width=\"12\" height=\"12\">\n                                <span>Share</span> \n                        </button>\n                \n                        <!-- <i class=\"fab fa-instagram\"></i>    -->\n                    </div>        \n                </div>\n                <div [ngClass]=\"{'row align-items-center': router.url === '/news'}\">\n                    <div class=\"main__image mt-3 d-flex justify-content-center\" \n                         [ngClass]=\"{'col-lg-6 main__image mt-3 d-flex justify-content-center': router.url === '/news'}\"\n                         (click)=\"routeToNewsDetails(item._id)\" style=\"cursor: pointer;\">\n                        <div class=\"main__image__content\">\n                            <img *ngIf=\"item.file.path\"\n                                 appLazyLoad\n                                 [src]=\"item.file.path\"\n                                 [ngClass]=\"{'border-radius': router.url === '/news'}\">\n                           \n                        \n                        </div>\n                    </div>\n                \n                    <div class=\"main__description mt-4\"\n                         [ngClass]=\"{'col-lg-6 main__description': router.url === '/news'}\"\n                         (click)=\"routeToNewsDetails(item._id)\" style=\"cursor: pointer;\">\n                         <div class=\"\">\n                            <p *ngIf=\"router.url === '/home'\"> {{item.description | slice:0:150  }} </p>\n                            <p *ngIf=\"router.url === '/home'\"  \n                                style = 'cursor: pointer; color: #de1e26;' \n                                (click)=\"routeToNewsDetails(item._id)\"> See more \n                            </p>\n                        </div>\n                        <p *ngIf=\"router.url === '/news'\"> {{ item.description | slice:0:1000   }} </p>\n\n                    </div>\n            \n                </div>\n            </div>\n            <div class=\"main__buttons col-12 d-flex justify-content-center\" *ngIf=\"isShowAllNewsActive\">\n                <button class=\"large button\" (click)=\"navigateRouteToNews()\">Show all news</button>\n            </div>\n        </div>\n    </div>\n    <ng-template #showLoad>\n        <h1>Loading...</h1>\n    </ng-template>\n    \n</div>   \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"not-found row align-items-center\">\n    <div class=\"not-found__img col-md-12 d-flex justify-content-center\">\n        <div class=\"not-found__img__content \">\n            <img src=\"assets/image/404.svg\" alt=\"\">\n        </div>\n    </div>\n    <div class=\"not-found__text col-md-12\">\n        <h4>Sorry page not Found</h4>\n    </div>\n    <div class=\"not-found__buttons col-12 d-flex justify-content-center mt-2\">\n        <a [routerLink]=\"[ '/home' ]\">\n            <button class=\"large button\">\n                Go Home\n            </button>\n        </a> \n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/politics/politics-details/politics-details.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/politics/politics-details/politics-details.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"news row\" *ngIf=\"politics.length > 0\">\n    <div class=\"col-md-12\"  >\n        <div class=\"main p-2 row\" >\n            <div class=\"col-12 \" *ngFor=\"let item of politics; first as isFirst\">\n                <div class=\"main__title col-12\" >\n                    <h4 style=\"cursor: auto;\"> {{ item.title }} </h4>  \n                </div>\n                <div class=\"main__social mt-2 col-12 d-flex justify-content-between\">\n                    <div class=\"col-md-9 p-0\">\n                        <span> {{ item.date }} </span>  \n                    </div>\n                    <div class=\"col-md-3  d-flex justify-content-end pr-0\">\n                        <!-- <i class=\"fab fa-twitter\"></i> -->\n                        <!-- <i class=\"fab fa-linkedin-in\"></i>   -->\n                        <!-- <fb-like [url]=\"'http://167.172.172.153:8080/#/politics/' + item._id\" ></fb-like> -->\n                        <button class=\"facebook\" ceiboShare  \n                                [facebook] = \"{u: 'http://167.172.172.153:8080/#/politics/' + item._id}\">\n                                <img class=\"img\" style=\"vertical-align:middle\" src=\"https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/jydh1rvUVNm.png\" alt=\"\" width=\"12\" height=\"12\">\n                                <span>Share</span> \n                        </button>\n                        <!-- <i class=\"fab fa-instagram\"></i> -->\n                    </div>    \n                </div>\n                <div>\n                    <div class=\"row align-items-center\">\n                        <div class=\"main__image mt-3 d-flex justify-content-center col-lg-12\" >\n                            <div class=\"main__image__content\">\n                                <img *ngIf=\"item.file.path\"\n                                     [src]=\"item.file.path\">\n                            </div>\n                        </div>\n                    \n                        <div class=\"main__description mt-4 col-lg-12 main__description\">\n                            <p> {{item.description  }} </p>\n                        </div>\n\n                    </div>\n            \n                </div>\n            </div>\n        </div>\n    </div>\n</div>   \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/politics/politics.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/politics/politics.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"news row\" *ngIf=\" allPoltics.length > 0\">\n    <div class=\"col-md-12\"  >\n        <div class=\"main p-2 row\" >\n            <div class=\"col-12\" *ngFor=\"let item of allPoltics; first as isFirst\" [ngClass]=\"{'mt-3': isFirst, 'mt-5': !isFirst}\">\n                <div class=\"main__title col-12\" >\n                    <h4 (click)=\"routeToPolitics(item._id)\"> {{ item.title }} </h4>  \n                </div>\n                <div class=\"main__social mt-2 col-12 d-flex justify-content-between\">\n                    <div class=\"col-md-9 p-0\">\n                        <span> {{ item.date  }} </span>\n                    </div>\n                    <div class=\"col-md-3  d-flex justify-content-end pr-0\">\n                        <!-- <i class=\"fab fa-twitter\"></i> -->\n                        <!-- <i class=\"fab fa-linkedin-in\"></i>   -->\n                        <!-- <fb-like [url]=\"'http://167.172.172.153:8080/#/politics/' + item._id\" ></fb-like> -->\n                        <button class=\"facebook\" ceiboShare  \n                                [facebook] = \"{u: 'http://167.172.172.153:8080/#/politics/' + item._id}\">\n                                <img class=\"img\" style=\"vertical-align:middle\" src=\"https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/jydh1rvUVNm.png\" alt=\"\" width=\"12\" height=\"12\">\n                                <span>Share</span> \n                        </button>\n                        <!-- <i class=\"fab fa-instagram\"></i> -->\n                    </div>   \n                </div>\n                <div>\n                    <div class=\"row align-items-center\">\n                        <div class=\"main__image mt-3 d-flex justify-content-center col-lg-6\"\n                            (click)=\"routeToPolitics(item._id)\" \n                            style=\"cursor: pointer;\">\n                            <div class=\"main__image__content\">\n                                <img *ngIf=\"item.file.path\"\n                                    appLazyLoad\n                                     [src]=\"item.file.path\">\n                               \n                            \n                            </div>\n                        </div>\n                    \n                        <div class=\"main__description mt-4 col-lg-6 main__description\"\n                            (click)=\"routeToPolitics(item._id)\" \n                            style=\"cursor: pointer;\">\n                            <p> {{item.description | slice:0:1000  }} </p>\n                        </div>\n\n                    </div>\n            \n                </div>\n            </div>\n        </div>\n    </div>\n</div>   \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"search row justify-content-between pb-2\">\n    <div class=\"search__box col-md-4 d-flex\">\n        <div class=\"col\">\n            <a [routerLink]=\"[ '/about-us' ]\">ABOUT US</a>\n        </div>\n        <div class=\"col\">\n            <a [routerLink]=\"[ '/advertisement' ]\">ADVERTISE</a>\n        </div>\n        <div class=\"col\">\n            <a [routerLink]=\"[ '/contact' ]\">CONTACT US</a>\n        </div>\n    </div>   \n\n    <div class=\"search__box col-md-4 d-flex justify-content-center align-items-center\">\n        <span> {{ currentDate }} </span>\n    </div>\n\n    <div class=\"search__box col-md-4 d-flex justify-content-end align-items-center\">\n        <div *ngIf=\"isInputActive\" class=\"\">\n            <input type=\"text\" class=\"form-control search-field\" >\n        </div>\n        <!-- <i class=\"fas fa-search ml-2\" (click)=\"toggleInput()\"></i> -->\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/about-us/about-us.component.scss":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.button {\n  display: inline-block;\n  *display: inline;\n  zoom: 1;\n  padding: 6px 20px;\n  margin: 0;\n  cursor: pointer;\n  border: 1px solid #bbb;\n  overflow: visible;\n  font: bold 13px arial, helvetica, sans-serif;\n  text-decoration: none;\n  white-space: nowrap;\n  color: #555;\n  outline: none;\n  background-color: #ddd;\n  -webkit-transition: background-color 0.2s ease-out;\n  transition: background-color 0.2s ease-out;\n  background-clip: padding-box;\n  /* Fix bleeding */\n  border-radius: 3px;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3), 0 2px 2px -1px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.button:hover {\n  background-color: #eee;\n  color: #555;\n}\n\n.button:active {\n  background: #e9e9e9;\n  position: relative;\n  top: 1px;\n  text-shadow: none;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3) inset;\n}\n\n.button[disabled], .button[disabled]:hover, .button[disabled]:active {\n  border-color: #eaeaea;\n  background: #fafafa;\n  cursor: default;\n  position: static;\n  color: #999;\n  /* Usually, !important should be avoided but here it's really needed :) */\n  box-shadow: none !important;\n  text-shadow: none !important;\n}\n\n.button.large {\n  padding: 12px 30px;\n  text-transform: uppercase;\n}\n\n.button.large:active {\n  top: 2px;\n}\n\n.about-us__content {\n  border-radius: 0.5rem;\n  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.7);\n  border: 2px solid #000000;\n  border-radius: 0.5rem;\n}\n\n.about-us__content__title h1 {\n  text-align: center;\n  font-family: \"Lora\", serif;\n  border-bottom: 2px solid #000000;\n  padding-bottom: 0.5rem;\n}\n\n.about-us__content__staff__title h4 {\n  text-align: center;\n  font-family: \"Lora\", serif;\n  font-size: 2rem;\n  display: inline;\n  border-bottom: 2px solid #000000;\n  padding-bottom: 0.5rem;\n}\n\n.about-us__content__staff__img__content {\n  width: 100%;\n  height: 20rem;\n}\n\n.about-us__content__staff__img__content img {\n  width: 100%;\n  height: 100%;\n}\n\n.about-us__content__staff__description p {\n  text-align: center;\n  font-weight: bold;\n}\n\n.about-us__content__staff__description__title h4 {\n  font-family: \"Lora\", serif;\n  text-align: center;\n  font-weight: bold;\n}\n\n@media (max-width: 768px) {\n  .about-us__content__staff__staff {\n    border: none !important;\n  }\n}\n\n.about-us__content__staff__staff h4 {\n  font-size: 1rem;\n  font-weight: 400;\n  color: #de1e26;\n  display: inline;\n}\n\n.about-us__content__staff__staff p {\n  color: #000000;\n  font-size: 0.975rem;\n  font-family: \"Lora\", serif;\n}\n\n.staff-border {\n  padding: 2rem;\n  border-radius: 2rem;\n  background-color: #e8e8e8d2;\n  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.7);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hc3NldHMvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvb3h5bW9uc3Rlci9EZXNrdG9wL21lc3Nlbmdlci1tYWdhemluZS9jbGllbnQvc3JjL2FwcC9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDWko7O0FEZUU7RUFDRSxxQkFBQTtHQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUVBLHNCQUFBO0VBUUEsa0RBQUE7RUFJQSwwQ0FBQTtFQUNBLDRCQUFBO0VBQThCLGlCQUFBO0VBRzlCLGtCQUFBO0VBR0EsaUhBQUE7RUFDQSw2Q0FBQTtFQUVBLDJCQUFBO0VBQ0EseUJBQUE7RUFFQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNwQko7O0FEdUJFO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0FDcEJKOztBRHVCRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFHQSw4Q0FBQTtBQ3BCSjs7QUR1QkU7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlFQUFBO0VBR0EsMkJBQUE7RUFDQSw0QkFBQTtBQ3BCSjs7QUR1QkU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FDcEJKOztBRHVCRTtFQUNFLFFBQUE7QUNwQko7O0FDMUVJO0VBRUkscUJBQUE7RUFDQSwyQ0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUQ0RVI7O0FDekVZO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7QUQyRWhCOztBQ2xFZ0I7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0FEb0VwQjs7QUMvRGdCO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QURpRXBCOztBQy9Eb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBRGlFeEI7O0FDM0RnQjtFQUVJLGtCQUFBO0VBQ0EsaUJBQUE7QUQ0RHBCOztBQ3ZEb0I7RUFDSSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUR5RHhCOztBQzVDZ0I7RUFMSjtJQU1RLHVCQUFBO0VEK0NsQjtBQUNGOztBQzdDZ0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjRnhFZDtFRXlFYyxlQUFBO0FEK0NwQjs7QUMxQ2lCO0VBQ0ksY0ZsRmI7RUVtRmEsbUJBQUE7RUFDQSwwQkFBQTtBRDRDckI7O0FDbkNBO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQ0Y3Rks7QUNrSVQiLCJmaWxlIjoic3JjL2FwcC9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gKiAqICogQ29sb3JzICogKiAqIFxuXG4kYmxhY2s6ICMwMDAwMDA7IFxuJGdyZXk6ICNlOGU4ZTg7IFxuJHdoaXRlOiAjZWVlZTsgXG4kcmVkOiAjZGUxZTI2O1xuJGRhcmstZ3JleTogIzc3Nzc3NztcbiRzaGFkb3c6IDBweCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIC43KTsgXG5cblxuLy8gQnV0dG9uc1xuXG4uYnV0dG9uOjotbW96LWZvY3VzLWlubmVye1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICAuYnV0dG9ue1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAqZGlzcGxheTogaW5saW5lO1xuICAgIHpvb206IDE7XG4gICAgcGFkZGluZzogNnB4IDIwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGZvbnQ6IGJvbGQgMTNweCBhcmlhbCwgaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbShyZ2JhKDI1NSwyNTUsMjU1LDEpKSwgdG8ocmdiYSgyNTUsMjU1LDI1NSwwKSkpO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94OyAvKiBGaXggYmxlZWRpbmcgKi9cbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgLjMpLCAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKSBpbnNldDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpIGluc2V0O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpIGluc2V0O1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsIC45KTtcbiAgICBcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbiAgXG4gIC5idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBjb2xvcjogIzU1NTtcbiAgfVxuICBcbiAgLmJ1dHRvbjphY3RpdmV7XG4gICAgYmFja2dyb3VuZDogI2U5ZTllOTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxcHg7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMykgaW5zZXQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMykgaW5zZXQ7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjMpIGluc2V0O1xuICB9XG4gIFxuICAuYnV0dG9uW2Rpc2FibGVkXSwgLmJ1dHRvbltkaXNhYmxlZF06aG92ZXIsIC5idXR0b25bZGlzYWJsZWRdOmFjdGl2ZXtcbiAgICBib3JkZXItY29sb3I6ICNlYWVhZWE7XG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBjb2xvcjogIzk5OTtcbiAgICAvKiBVc3VhbGx5LCAhaW1wb3J0YW50IHNob3VsZCBiZSBhdm9pZGVkIGJ1dCBoZXJlIGl0J3MgcmVhbGx5IG5lZWRlZCA6KSAqL1xuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJ1dHRvbi5sYXJnZXtcbiAgICBwYWRkaW5nOiAxMnB4IDMwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICBcbiAgLmJ1dHRvbi5sYXJnZTphY3RpdmV7XG4gICAgdG9wOiAycHg7XG4gIH1cbiAgXG4gICIsIi5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICpkaXNwbGF5OiBpbmxpbmU7XG4gIHpvb206IDE7XG4gIHBhZGRpbmc6IDZweCAyMHB4O1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JiYjtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGZvbnQ6IGJvbGQgMTNweCBhcmlhbCwgaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiAjNTU1O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAvKiBGaXggYmxlZWRpbmcgKi9cbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIC1tb3otYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgaW5zZXQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgaW5zZXQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIGluc2V0O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgY29sb3I6ICM1NTU7XG59XG5cbi5idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2U5ZTllOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDFweDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIC1tb3otYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zKSBpbnNldDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpIGluc2V0O1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpIGluc2V0O1xufVxuXG4uYnV0dG9uW2Rpc2FibGVkXSwgLmJ1dHRvbltkaXNhYmxlZF06aG92ZXIsIC5idXR0b25bZGlzYWJsZWRdOmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogI2VhZWFlYTtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBjb2xvcjogIzk5OTtcbiAgLyogVXN1YWxseSwgIWltcG9ydGFudCBzaG91bGQgYmUgYXZvaWRlZCBidXQgaGVyZSBpdCdzIHJlYWxseSBuZWVkZWQgOikgKi9cbiAgLW1vei1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24ubGFyZ2Uge1xuICBwYWRkaW5nOiAxMnB4IDMwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5idXR0b24ubGFyZ2U6YWN0aXZlIHtcbiAgdG9wOiAycHg7XG59XG5cbi5hYm91dC11c19fY29udGVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuLmFib3V0LXVzX19jb250ZW50X190aXRsZSBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDAwMDA7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG59XG4uYWJvdXQtdXNfX2NvbnRlbnRfX3N0YWZmX190aXRsZSBoNCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwMDAwO1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xufVxuLmFib3V0LXVzX19jb250ZW50X19zdGFmZl9faW1nX19jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjByZW07XG59XG4uYWJvdXQtdXNfX2NvbnRlbnRfX3N0YWZmX19pbWdfX2NvbnRlbnQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5hYm91dC11c19fY29udGVudF9fc3RhZmZfX2Rlc2NyaXB0aW9uIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmFib3V0LXVzX19jb250ZW50X19zdGFmZl9fZGVzY3JpcHRpb25fX3RpdGxlIGg0IHtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYWJvdXQtdXNfX2NvbnRlbnRfX3N0YWZmX19zdGFmZiB7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5hYm91dC11c19fY29udGVudF9fc3RhZmZfX3N0YWZmIGg0IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI2RlMWUyNjtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLmFib3V0LXVzX19jb250ZW50X19zdGFmZl9fc3RhZmYgcCB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDAuOTc1cmVtO1xuICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xufVxuXG4uc3RhZmYtYm9yZGVyIHtcbiAgcGFkZGluZzogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlOGQyO1xuICBib3gtc2hhZG93OiAwcHggOHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjcpO1xufSIsIkBpbXBvcnQgJ3NyYy9hc3NldHMvdmFyaWFibGVzJzsgXG5cbi5hYm91dC11cyB7XG4gICAgJl9fY29udGVudCB7XG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRncmV5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDhweCAxNXB4IHJnYmEoMCwgMCwgMCwgLjcpO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkYmxhY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xuXG4gICAgICAgICZfX3RpdGxlIHtcbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRibGFjaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XG4gICAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZfX3N0YWZmIHtcbiAgICAgICAgICAgICZfX3RpdGxlIHtcbiAgICAgICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmX19pbWcge1xuICAgICAgICAgICAgICAgICZfX2NvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHJlbTtcblxuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICZfX2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29sb3I6ICRyZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICZfX3RpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmX19zdGFmZiB7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDBweCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIC43KTtcbiAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbG9yOiAjZDAwNzEwO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRibGFjaztcbiAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjk3NXJlbTtcbiAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xuXG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgIH1cbn1cblxuLnN0YWZmLWJvcmRlciB7XG4gICAgLy8gYm9yZGVyOiAycHggc29saWQgJGJsYWNrO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4ZDI7XG4gICAgYm94LXNoYWRvdzogJHNoYWRvdztcblxufSJdfQ== */");

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutUsComponent = class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-us.component.scss */ "./src/app/about-us/about-us.component.scss")).default]
    })
], AboutUsComponent);



/***/ }),

/***/ "./src/app/admin-panel/add-ads/add-ads.component.scss":
/*!************************************************************!*\
  !*** ./src/app/admin-panel/add-ads/add-ads.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXBhbmVsL2FkZC1hZHMvYWRkLWFkcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/admin-panel/add-ads/add-ads.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin-panel/add-ads/add-ads.component.ts ***!
  \**********************************************************/
/*! exports provided: AddAdsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAdsComponent", function() { return AddAdsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_ads_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ads.service */ "./src/app/services/ads.service.ts");




let AddAdsComponent = class AddAdsComponent {
    constructor(fb, adsService) {
        this.fb = fb;
        this.adsService = adsService;
        this.isFormSubmited = false;
        this.isImgValid = false;
        this.showErr = false;
        this.adsFrom = this.fb.group({
            linkPath: '',
        });
    }
    ngOnInit() {
    }
    onFileUpload(files) {
        this.fileToUpload = files[0];
        const formData = new FormData();
        formData.append('file', this.fileToUpload);
        this.adsFrom.value.file = formData;
        if (this.fileToUpload.type === 'image/png' || this.fileToUpload.type === 'image/jpeg') {
            this.isImgValid = true;
            console.log("VALID");
            this.showErr = false;
        }
        else {
            this.isImgValid = false;
            this.showErr = true;
        }
    }
    ;
    onSubmit() {
        const fd = new FormData();
        fd.append('linkPath', this.adsFrom.get('linkPath').value);
        fd.append('file', this.fileToUpload);
        console.log(fd);
        if (this.isImgValid) {
            this.adsService
                .addAds(fd)
                .subscribe(data => {
                console.log(data);
                this.isFormSubmited = true;
                this.adsFrom.reset();
            }, err => {
                console.log(err);
            });
        }
    }
    ;
    submitFormAgain() {
        return this.isFormSubmited = false;
    }
};
AddAdsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_ads_service__WEBPACK_IMPORTED_MODULE_3__["AdsService"] }
];
AddAdsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-ads',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-ads.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/add-ads/add-ads.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-ads.component.scss */ "./src/app/admin-panel/add-ads/add-ads.component.scss")).default]
    })
], AddAdsComponent);



/***/ }),

/***/ "./src/app/admin-panel/add-culture/add-culture.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/admin-panel/add-culture/add-culture.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("textarea {\n  white-space: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hcHAvYWRtaW4tcGFuZWwvYWRkLWN1bHR1cmUvYWRkLWN1bHR1cmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluLXBhbmVsL2FkZC1jdWx0dXJlL2FkZC1jdWx0dXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXBhbmVsL2FkZC1jdWx0dXJlL2FkZC1jdWx0dXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGV4dGFyZWEge1xuICAgIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xufSIsInRleHRhcmVhIHtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/admin-panel/add-culture/add-culture.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin-panel/add-culture/add-culture.component.ts ***!
  \******************************************************************/
/*! exports provided: AddCultureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCultureComponent", function() { return AddCultureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");




let AddCultureComponent = class AddCultureComponent {
    constructor(fb, adminService) {
        this.fb = fb;
        this.adminService = adminService;
        this.isFormSubmited = false;
        this.isImgValid = false;
        this.showErr = false;
        this.cultureFrom = this.fb.group({
            title: '',
            description: '',
            date: '',
            file: null
        });
    }
    ngOnInit() {
    }
    onFileUpload(files) {
        this.fileToUpload = files[0];
        const formData = new FormData();
        formData.append('file', this.fileToUpload);
        this.cultureFrom.value.file = formData;
        if (this.fileToUpload.type === 'image/png' || this.fileToUpload.type === 'image/jpeg') {
            this.isImgValid = true;
            console.log("VALID");
            this.showErr = false;
        }
        else {
            this.isImgValid = false;
            this.showErr = true;
        }
    }
    ;
    onSubmit() {
        const fd = new FormData();
        fd.append('file', this.fileToUpload);
        fd.append('title', this.cultureFrom.get('title').value);
        fd.append('description', this.cultureFrom.get('description').value);
        fd.append('date', this.cultureFrom.get('date').value);
        if (this.isImgValid) {
            this.adminService
                .addCulture(fd)
                .subscribe(data => {
                console.log(data);
                this.isFormSubmited = true;
                this.cultureFrom.reset();
            }, err => {
                console.log(err);
            });
        }
    }
    ;
    submitFormAgain() {
        return this.isFormSubmited = false;
    }
};
AddCultureComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"] }
];
AddCultureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-culture',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-culture.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/add-culture/add-culture.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-culture.component.scss */ "./src/app/admin-panel/add-culture/add-culture.component.scss")).default]
    })
], AddCultureComponent);



/***/ }),

/***/ "./src/app/admin-panel/add-economy/add-economy.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/admin-panel/add-economy/add-economy.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("textarea {\n  white-space: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hcHAvYWRtaW4tcGFuZWwvYWRkLWVjb25vbXkvYWRkLWVjb25vbXkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluLXBhbmVsL2FkZC1lY29ub215L2FkZC1lY29ub215LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXBhbmVsL2FkZC1lY29ub215L2FkZC1lY29ub215LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGV4dGFyZWEge1xuICAgIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xufSIsInRleHRhcmVhIHtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/admin-panel/add-economy/add-economy.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin-panel/add-economy/add-economy.component.ts ***!
  \******************************************************************/
/*! exports provided: AddEconomyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEconomyComponent", function() { return AddEconomyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");




let AddEconomyComponent = class AddEconomyComponent {
    constructor(fb, adminService) {
        this.fb = fb;
        this.adminService = adminService;
        this.isFormSubmited = false;
        this.isImgValid = false;
        this.showErr = false;
        this.economyFrom = this.fb.group({
            title: '',
            description: '',
            date: '',
            file: null
        });
    }
    ngOnInit() {
    }
    onFileUpload(files) {
        this.fileToUpload = files[0];
        const formData = new FormData();
        formData.append('file', this.fileToUpload);
        this.economyFrom.value.file = formData;
        if (this.fileToUpload.type === 'image/png' || this.fileToUpload.type === 'image/jpeg') {
            this.isImgValid = true;
            console.log("VALID");
            this.showErr = false;
        }
        else {
            this.isImgValid = false;
            this.showErr = true;
        }
    }
    ;
    onSubmit() {
        const fd = new FormData();
        fd.append('file', this.fileToUpload);
        fd.append('title', this.economyFrom.get('title').value);
        fd.append('description', this.economyFrom.get('description').value);
        fd.append('date', this.economyFrom.get('date').value);
        if (this.isImgValid) {
            this.adminService
                .addEconomy(fd)
                .subscribe(data => {
                console.log(data);
                this.isFormSubmited = true;
                this.economyFrom.reset();
            }, err => {
                console.log(err);
            });
        }
    }
    ;
    submitFormAgain() {
        return this.isFormSubmited = false;
    }
};
AddEconomyComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"] }
];
AddEconomyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-economy',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-economy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/add-economy/add-economy.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-economy.component.scss */ "./src/app/admin-panel/add-economy/add-economy.component.scss")).default]
    })
], AddEconomyComponent);



/***/ }),

/***/ "./src/app/admin-panel/add-headlines/add-headlines.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/admin-panel/add-headlines/add-headlines.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("textarea {\n  white-space: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hcHAvYWRtaW4tcGFuZWwvYWRkLWhlYWRsaW5lcy9hZGQtaGVhZGxpbmVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi1wYW5lbC9hZGQtaGVhZGxpbmVzL2FkZC1oZWFkbGluZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tcGFuZWwvYWRkLWhlYWRsaW5lcy9hZGQtaGVhZGxpbmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGV4dGFyZWEge1xuICAgIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xufSIsInRleHRhcmVhIHtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/admin-panel/add-headlines/add-headlines.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin-panel/add-headlines/add-headlines.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddHeadlinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHeadlinesComponent", function() { return AddHeadlinesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_headlines_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/headlines.service */ "./src/app/services/headlines.service.ts");




let AddHeadlinesComponent = class AddHeadlinesComponent {
    constructor(fb, headlineService) {
        this.fb = fb;
        this.headlineService = headlineService;
        this.fileToUpload = null;
        this.isFormSubmitted = false;
        this.isImgValid = false;
        this.showErr = false;
        this.headlinesForm = this.fb.group({
            title: '',
            description: '',
            date: '',
            file: null
        });
    }
    ngOnInit() {
    }
    onFileUpload(files) {
        this.fileToUpload = files[0];
        console.log(this.fileToUpload);
        if (this.fileToUpload.type === 'image/png' || this.fileToUpload.type === 'image/jpeg') {
            this.isImgValid = true;
            console.log("VALID");
            this.showErr = false;
        }
        else {
            this.isImgValid = false;
            this.showErr = true;
        }
    }
    onSubmit() {
        const fd = new FormData();
        fd.append('file', this.fileToUpload);
        fd.append('title', this.headlinesForm.get('title').value);
        fd.append('description', this.headlinesForm.get('description').value);
        fd.append('date', this.headlinesForm.get('date').value);
        if (this.isImgValid) {
            this.headlineService
                .addHeadlines(fd)
                .subscribe(data => {
                console.log(data);
                this.isFormSubmitted = true;
                this.headlinesForm.reset();
            }, err => {
                console.log(err);
            });
        }
        else {
            console.log("invalid form");
        }
    }
    ;
    submitFormAgain() {
        return this.isFormSubmitted = false;
    }
    ;
};
AddHeadlinesComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_headlines_service__WEBPACK_IMPORTED_MODULE_3__["HeadlinesService"] }
];
AddHeadlinesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-headlines',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-headlines.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/add-headlines/add-headlines.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-headlines.component.scss */ "./src/app/admin-panel/add-headlines/add-headlines.component.scss")).default]
    })
], AddHeadlinesComponent);



/***/ }),

/***/ "./src/app/admin-panel/add-news/add-news.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/admin-panel/add-news/add-news.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("textarea {\n  white-space: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hcHAvYWRtaW4tcGFuZWwvYWRkLW5ld3MvYWRkLW5ld3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluLXBhbmVsL2FkZC1uZXdzL2FkZC1uZXdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXBhbmVsL2FkZC1uZXdzL2FkZC1uZXdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGV4dGFyZWEge1xuICAgIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xufSIsInRleHRhcmVhIHtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/admin-panel/add-news/add-news.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin-panel/add-news/add-news.component.ts ***!
  \************************************************************/
/*! exports provided: AddNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewsComponent", function() { return AddNewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/news.service */ "./src/app/services/news.service.ts");




let AddNewsComponent = class AddNewsComponent {
    constructor(fb, newsService) {
        this.fb = fb;
        this.newsService = newsService;
        this.isFormSubmited = false;
        this.isImgValid = false;
        this.newsForm = this.fb.group({
            title: '',
            description: '',
            date: '',
            file: null
        });
    }
    ngOnInit() {
    }
    onFileUpload(files) {
        this.fileToUpload = files[0];
        const formData = new FormData();
        formData.append('file', this.fileToUpload);
        ``;
        this.newsForm.value.file = formData;
        if (this.fileToUpload.type.includes('file/png') || this.fileToUpload.type.includes('file/jpeg')) {
            this.isImgValid = true;
        }
        else {
            this.isImgValid = false;
        }
    }
    ;
    onSubmit() {
        const fd = new FormData();
        fd.append('file', this.fileToUpload);
        fd.append('title', this.newsForm.get('title').value);
        fd.append('description', this.newsForm.get('description').value);
        fd.append('date', this.newsForm.get('date').value);
        if (this.isImgValid) {
            this.newsService
                .addNews(fd)
                .subscribe(data => {
                console.log(data);
                this.isFormSubmited = true;
                this.newsForm.reset();
            }, err => {
                console.log(err);
            });
        }
    }
    ;
    submitFormAgain() {
        return this.isFormSubmited = false;
    }
};
AddNewsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"] }
];
AddNewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-news',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-news.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/add-news/add-news.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-news.component.scss */ "./src/app/admin-panel/add-news/add-news.component.scss")).default]
    })
], AddNewsComponent);



/***/ }),

/***/ "./src/app/admin-panel/add-politics/add-politics.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/admin-panel/add-politics/add-politics.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("textarea {\n  white-space: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hcHAvYWRtaW4tcGFuZWwvYWRkLXBvbGl0aWNzL2FkZC1wb2xpdGljcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4tcGFuZWwvYWRkLXBvbGl0aWNzL2FkZC1wb2xpdGljcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1wYW5lbC9hZGQtcG9saXRpY3MvYWRkLXBvbGl0aWNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGV4dGFyZWEge1xuICAgIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xufSIsInRleHRhcmVhIHtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/admin-panel/add-politics/add-politics.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin-panel/add-politics/add-politics.component.ts ***!
  \********************************************************************/
/*! exports provided: AddPoliticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPoliticsComponent", function() { return AddPoliticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");




let AddPoliticsComponent = class AddPoliticsComponent {
    constructor(fb, adminService) {
        this.fb = fb;
        this.adminService = adminService;
        this.isFormSubmited = false;
        this.isImgValid = false;
        this.showErr = false;
        this.politicsForm = this.fb.group({
            title: '',
            description: '',
            date: '',
            file: null
        });
    }
    ngOnInit() {
    }
    onFileUpload(files) {
        this.fileToUpload = files[0];
        const formData = new FormData();
        formData.append('file', this.fileToUpload);
        this.politicsForm.value.file = formData;
        if (this.fileToUpload.type === 'image/png' || this.fileToUpload.type === 'image/jpeg') {
            this.isImgValid = true;
            console.log("VALID");
            this.showErr = false;
        }
        else {
            this.isImgValid = false;
            this.showErr = true;
        }
    }
    ;
    onSubmit() {
        const fd = new FormData();
        fd.append('file', this.fileToUpload);
        fd.append('title', this.politicsForm.get('title').value);
        fd.append('description', this.politicsForm.get('description').value);
        fd.append('date', this.politicsForm.get('date').value);
        if (this.isImgValid) {
            this.adminService
                .addPolitics(fd)
                .subscribe(data => {
                console.log(data);
                this.isFormSubmited = true;
                this.politicsForm.reset();
            }, err => {
                console.log(err);
            });
        }
    }
    ;
    submitFormAgain() {
        return this.isFormSubmited = false;
    }
};
AddPoliticsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"] }
];
AddPoliticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-politics',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-politics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/add-politics/add-politics.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-politics.component.scss */ "./src/app/admin-panel/add-politics/add-politics.component.scss")).default]
    })
], AddPoliticsComponent);



/***/ }),

/***/ "./src/app/admin-panel/admin-login/admin-login.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/admin-panel/admin-login/admin-login.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXBhbmVsL2FkbWluLWxvZ2luL2FkbWluLWxvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin-panel/admin-login/admin-login.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin-panel/admin-login/admin-login.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AdminLoginComponent = class AdminLoginComponent {
    constructor(fb, adminService, router) {
        this.fb = fb;
        this.adminService = adminService;
        this.router = router;
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
        this.isAdmin = false;
        this.showErr = false;
        this.adminForm = this.fb.group({
            userName: '',
            password: ''
        });
    }
    ngOnInit() {
    }
    submitForm() {
        console.log(this.adminForm.value.userName);
        this.adminService
            .loginAdmin(this.adminForm.value)
            .subscribe(data => {
            console.log(data);
            const acessToken = data['acessToken'];
            if (acessToken) {
                this.showErr = false;
                this.result.emit(true);
                this.adminService.setToken(acessToken);
                this.isAdmin = true;
                this.router.navigate(['/admin/add-headlines']);
            }
            else {
                this.result.emit(false);
                this.isAdmin = false;
            }
        }, err => {
            this.showErr = true;
            this.isAdmin = false;
            this.result.emit(false);
            console.log("wrong form");
        });
    }
};
AdminLoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AdminLoginComponent.prototype, "result", void 0);
AdminLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/admin-login/admin-login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-login.component.scss */ "./src/app/admin-panel/admin-login/admin-login.component.scss")).default]
    })
], AdminLoginComponent);



/***/ }),

/***/ "./src/app/admin-panel/admin-navigation/admin-navigation.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/admin-panel/admin-navigation/admin-navigation.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.button {\n  display: inline-block;\n  *display: inline;\n  zoom: 1;\n  padding: 6px 20px;\n  margin: 0;\n  cursor: pointer;\n  border: 1px solid #bbb;\n  overflow: visible;\n  font: bold 13px arial, helvetica, sans-serif;\n  text-decoration: none;\n  white-space: nowrap;\n  color: #555;\n  outline: none;\n  background-color: #ddd;\n  -webkit-transition: background-color 0.2s ease-out;\n  transition: background-color 0.2s ease-out;\n  background-clip: padding-box;\n  /* Fix bleeding */\n  border-radius: 3px;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3), 0 2px 2px -1px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.button:hover {\n  background-color: #eee;\n  color: #555;\n}\n\n.button:active {\n  background: #e9e9e9;\n  position: relative;\n  top: 1px;\n  text-shadow: none;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3) inset;\n}\n\n.button[disabled], .button[disabled]:hover, .button[disabled]:active {\n  border-color: #eaeaea;\n  background: #fafafa;\n  cursor: default;\n  position: static;\n  color: #999;\n  /* Usually, !important should be avoided but here it's really needed :) */\n  box-shadow: none !important;\n  text-shadow: none !important;\n}\n\n.button.large {\n  padding: 12px 30px;\n  text-transform: uppercase;\n}\n\n.button.large:active {\n  top: 2px;\n}\n\nh1 {\n  font-family: \"Lincoln\";\n  font-size: 4rem;\n  margin-top: 3rem;\n  text-align: center;\n  color: #A4A6B3;\n  border: 1px solid #A4A6B3;\n}\n\ndiv a {\n  color: #A4A6B3;\n  font-family: \"Lora\", serif;\n  font-size: 1.5rem;\n  text-decoration: none;\n  font-display: swap;\n}\n\n.active {\n  color: white !important;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hc3NldHMvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2FkbWluLXBhbmVsL2FkbWluLW5hdmlnYXRpb24vYWRtaW4tbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hcHAvYWRtaW4tcGFuZWwvYWRtaW4tbmF2aWdhdGlvbi9hZG1pbi1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNaSjs7QURlRTtFQUNFLHFCQUFBO0dBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBRUEsc0JBQUE7RUFRQSxrREFBQTtFQUlBLDBDQUFBO0VBQ0EsNEJBQUE7RUFBOEIsaUJBQUE7RUFHOUIsa0JBQUE7RUFHQSxpSEFBQTtFQUNBLDZDQUFBO0VBRUEsMkJBQUE7RUFDQSx5QkFBQTtFQUVBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ3BCSjs7QUR1QkU7RUFDRSxzQkFBQTtFQUNBLFdBQUE7QUNwQko7O0FEdUJFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUdBLDhDQUFBO0FDcEJKOztBRHVCRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUVBQUE7RUFHQSwyQkFBQTtFQUNBLDRCQUFBO0FDcEJKOztBRHVCRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUNwQko7O0FEdUJFO0VBQ0UsUUFBQTtBQ3BCSjs7QUMzRUE7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FEOEVKOztBQ3hFSTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBRDJFUjs7QUN0RUE7RUFDSSx1QkFBQTtFQUNBLHFCQUFBO0FEeUVKIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tcGFuZWwvYWRtaW4tbmF2aWdhdGlvbi9hZG1pbi1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyAqICogKiBDb2xvcnMgKiAqICogXG5cbiRibGFjazogIzAwMDAwMDsgXG4kZ3JleTogI2U4ZThlODsgXG4kd2hpdGU6ICNlZWVlOyBcbiRyZWQ6ICNkZTFlMjY7XG4kZGFyay1ncmV5OiAjNzc3Nzc3O1xuJHNoYWRvdzogMHB4IDhweCAxNXB4IHJnYmEoMCwgMCwgMCwgLjcpOyBcblxuXG4vLyBCdXR0b25zXG5cbi5idXR0b246Oi1tb3otZm9jdXMtaW5uZXJ7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIC5idXR0b257XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICpkaXNwbGF5OiBpbmxpbmU7XG4gICAgem9vbTogMTtcbiAgICBwYWRkaW5nOiA2cHggMjBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgZm9udDogYm9sZCAxM3B4IGFyaWFsLCBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgYm90dG9tLCBmcm9tKHJnYmEoMjU1LDI1NSwyNTUsMSkpLCB0byhyZ2JhKDI1NSwyNTUsMjU1LDApKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSksIHJnYmEoMjU1LDI1NSwyNTUsMCkpO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICBcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZS1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7IC8qIEZpeCBibGVlZGluZyAqL1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpIGluc2V0O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAuNSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMykgaW5zZXQ7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAuNSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMykgaW5zZXQ7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwgLjkpO1xuICAgIFxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuICBcbiAgLmJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGNvbG9yOiAjNTU1O1xuICB9XG4gIFxuICAuYnV0dG9uOmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDFweDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4zKSBpbnNldDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4zKSBpbnNldDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMykgaW5zZXQ7XG4gIH1cbiAgXG4gIC5idXR0b25bZGlzYWJsZWRdLCAuYnV0dG9uW2Rpc2FibGVkXTpob3ZlciwgLmJ1dHRvbltkaXNhYmxlZF06YWN0aXZle1xuICAgIGJvcmRlci1jb2xvcjogI2VhZWFlYTtcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIC8qIFVzdWFsbHksICFpbXBvcnRhbnQgc2hvdWxkIGJlIGF2b2lkZWQgYnV0IGhlcmUgaXQncyByZWFsbHkgbmVlZGVkIDopICovXG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYnV0dG9uLmxhcmdle1xuICAgIHBhZGRpbmc6IDEycHggMzBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIFxuICAuYnV0dG9uLmxhcmdlOmFjdGl2ZXtcbiAgICB0b3A6IDJweDtcbiAgfVxuICBcbiAgIiwiLmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgKmRpc3BsYXk6IGlubGluZTtcbiAgem9vbTogMTtcbiAgcGFkZGluZzogNnB4IDIwcHg7XG4gIG1hcmdpbjogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgZm9udDogYm9sZCAxM3B4IGFyaWFsLCBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6ICM1NTU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIC8qIEZpeCBibGVlZGluZyAqL1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSBpbnNldDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSBpbnNldDtcbiAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgaW5zZXQ7XG4gIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBjb2xvcjogIzU1NTtcbn1cblxuLmJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpIGluc2V0O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMykgaW5zZXQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMykgaW5zZXQ7XG59XG5cbi5idXR0b25bZGlzYWJsZWRdLCAuYnV0dG9uW2Rpc2FibGVkXTpob3ZlciwgLmJ1dHRvbltkaXNhYmxlZF06YWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZWFlYWVhO1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIGNvbG9yOiAjOTk5O1xuICAvKiBVc3VhbGx5LCAhaW1wb3J0YW50IHNob3VsZCBiZSBhdm9pZGVkIGJ1dCBoZXJlIGl0J3MgcmVhbGx5IG5lZWRlZCA6KSAqL1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbi5sYXJnZSB7XG4gIHBhZGRpbmc6IDEycHggMzBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmJ1dHRvbi5sYXJnZTphY3RpdmUge1xuICB0b3A6IDJweDtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogXCJMaW5jb2xuXCI7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI0E0QTZCMztcbiAgYm9yZGVyOiAxcHggc29saWQgI0E0QTZCMztcbn1cblxuZGl2IGEge1xuICBjb2xvcjogI0E0QTZCMztcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG4uYWN0aXZlIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iLCJAaW1wb3J0ICdzcmMvYXNzZXRzL3ZhcmlhYmxlcyc7XG5cbmgxIHtcbiAgICBmb250LWZhbWlseTogJ0xpbmNvbG4nO1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI0E0QTZCMzsgXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0E0QTZCMztcblxufTsgXG5cblxuZGl2IHtcbiAgICBhIHtcbiAgICAgICAgY29sb3I6ICNBNEE2QjM7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcblxuICAgIH1cbn1cblxuLmFjdGl2ZSB7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG59Il19 */");

/***/ }),

/***/ "./src/app/admin-panel/admin-navigation/admin-navigation.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin-panel/admin-navigation/admin-navigation.component.ts ***!
  \****************************************************************************/
/*! exports provided: AdminNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminNavigationComponent", function() { return AdminNavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminNavigationComponent = class AdminNavigationComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminNavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-navigation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/admin-navigation/admin-navigation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-navigation.component.scss */ "./src/app/admin-panel/admin-navigation/admin-navigation.component.scss")).default]
    })
], AdminNavigationComponent);



/***/ }),

/***/ "./src/app/admin-panel/admin-panel.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin-panel/admin-panel.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXBhbmVsL2FkbWluLXBhbmVsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin-panel/admin-panel.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-panel/admin-panel.component.ts ***!
  \******************************************************/
/*! exports provided: AdminPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelComponent", function() { return AdminPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminPanelComponent = class AdminPanelComponent {
    constructor() {
        this.isAdmin = false;
    }
    ngOnInit() {
        console.log(localStorage.key);
    }
};
AdminPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/admin-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-panel.component.scss */ "./src/app/admin-panel/admin-panel.component.scss")).default]
    })
], AdminPanelComponent);



/***/ }),

/***/ "./src/app/admin-panel/admin-panel.module.ts":
/*!***************************************************!*\
  !*** ./src/app/admin-panel/admin-panel.module.ts ***!
  \***************************************************/
/*! exports provided: AdminPanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelModule", function() { return AdminPanelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _add_news_add_news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-news/add-news.component */ "./src/app/admin-panel/add-news/add-news.component.ts");
/* harmony import */ var _add_headlines_add_headlines_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-headlines/add-headlines.component */ "./src/app/admin-panel/add-headlines/add-headlines.component.ts");
/* harmony import */ var _all_news_all_news_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./all-news/all-news.component */ "./src/app/admin-panel/all-news/all-news.component.ts");
/* harmony import */ var _all_headlines_all_headlines_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-headlines/all-headlines.component */ "./src/app/admin-panel/all-headlines/all-headlines.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-panel.component */ "./src/app/admin-panel/admin-panel.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _admin_navigation_admin_navigation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-navigation/admin-navigation.component */ "./src/app/admin-panel/admin-navigation/admin-navigation.component.ts");
/* harmony import */ var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin-login/admin-login.component */ "./src/app/admin-panel/admin-login/admin-login.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth.guard */ "./src/app/admin-panel/auth.guard.ts");
/* harmony import */ var _add_politics_add_politics_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-politics/add-politics.component */ "./src/app/admin-panel/add-politics/add-politics.component.ts");
/* harmony import */ var _add_culture_add_culture_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-culture/add-culture.component */ "./src/app/admin-panel/add-culture/add-culture.component.ts");
/* harmony import */ var _add_economy_add_economy_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./add-economy/add-economy.component */ "./src/app/admin-panel/add-economy/add-economy.component.ts");
/* harmony import */ var _all_news_remove_culture_remove_culture_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./all-news/remove-culture/remove-culture.component */ "./src/app/admin-panel/all-news/remove-culture/remove-culture.component.ts");
/* harmony import */ var _all_news_remove_economy_remove_economy_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./all-news/remove-economy/remove-economy.component */ "./src/app/admin-panel/all-news/remove-economy/remove-economy.component.ts");
/* harmony import */ var _all_news_remove_politics_remove_politics_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./all-news/remove-politics/remove-politics.component */ "./src/app/admin-panel/all-news/remove-politics/remove-politics.component.ts");
/* harmony import */ var _all_news_remove_news_remove_news_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./all-news/remove-news/remove-news.component */ "./src/app/admin-panel/all-news/remove-news/remove-news.component.ts");
/* harmony import */ var _add_ads_add_ads_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./add-ads/add-ads.component */ "./src/app/admin-panel/add-ads/add-ads.component.ts");
/* harmony import */ var _all_ads_all_ads_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./all-ads/all-ads.component */ "./src/app/admin-panel/all-ads/all-ads.component.ts");























const routes = [
    { path: 'admin-login', component: _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_12__["AdminLoginComponent"], },
    { path: 'admin', component: _admin_panel_component__WEBPACK_IMPORTED_MODULE_8__["AdminPanelComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
        children: [
            { path: 'add-news', component: _add_news_add_news_component__WEBPACK_IMPORTED_MODULE_3__["AddNewsComponent"], },
            { path: 'add-headlines', component: _add_headlines_add_headlines_component__WEBPACK_IMPORTED_MODULE_4__["AddHeadlinesComponent"], },
            { path: 'add-culture', component: _add_culture_add_culture_component__WEBPACK_IMPORTED_MODULE_15__["AddCultureComponent"], },
            { path: 'add-economy', component: _add_economy_add_economy_component__WEBPACK_IMPORTED_MODULE_16__["AddEconomyComponent"], },
            { path: 'add-politics', component: _add_politics_add_politics_component__WEBPACK_IMPORTED_MODULE_14__["AddPoliticsComponent"], },
            { path: 'all-news', component: _all_news_all_news_component__WEBPACK_IMPORTED_MODULE_5__["AllNewsComponent"], },
            { path: 'all-headlines', component: _all_headlines_all_headlines_component__WEBPACK_IMPORTED_MODULE_6__["AllHeadlinesComponent"], },
            { path: 'remove-culture', component: _all_news_remove_culture_remove_culture_component__WEBPACK_IMPORTED_MODULE_17__["RemoveCultureComponent"], },
            { path: 'remove-economy', component: _all_news_remove_economy_remove_economy_component__WEBPACK_IMPORTED_MODULE_18__["RemoveEconomyComponent"], },
            { path: 'remove-politics', component: _all_news_remove_politics_remove_politics_component__WEBPACK_IMPORTED_MODULE_19__["RemovePoliticsComponent"], },
            { path: 'remove-news', component: _all_news_remove_news_remove_news_component__WEBPACK_IMPORTED_MODULE_20__["RemoveNewsComponent"], },
            { path: 'add-ads', component: _add_ads_add_ads_component__WEBPACK_IMPORTED_MODULE_21__["AddAdsComponent"], },
            { path: 'all-ads', component: _all_ads_all_ads_component__WEBPACK_IMPORTED_MODULE_22__["AllAdsComponent"], },
        ] },
];
const COMPONENTS = [
    _add_news_add_news_component__WEBPACK_IMPORTED_MODULE_3__["AddNewsComponent"],
    _all_news_remove_culture_remove_culture_component__WEBPACK_IMPORTED_MODULE_17__["RemoveCultureComponent"],
    _all_news_remove_economy_remove_economy_component__WEBPACK_IMPORTED_MODULE_18__["RemoveEconomyComponent"],
    _all_news_remove_politics_remove_politics_component__WEBPACK_IMPORTED_MODULE_19__["RemovePoliticsComponent"],
    _all_news_remove_news_remove_news_component__WEBPACK_IMPORTED_MODULE_20__["RemoveNewsComponent"],
    _add_headlines_add_headlines_component__WEBPACK_IMPORTED_MODULE_4__["AddHeadlinesComponent"],
    _all_news_all_news_component__WEBPACK_IMPORTED_MODULE_5__["AllNewsComponent"],
    _all_headlines_all_headlines_component__WEBPACK_IMPORTED_MODULE_6__["AllHeadlinesComponent"],
    _all_news_all_news_component__WEBPACK_IMPORTED_MODULE_5__["AllNewsComponent"],
    _all_headlines_all_headlines_component__WEBPACK_IMPORTED_MODULE_6__["AllHeadlinesComponent"],
    _admin_navigation_admin_navigation_component__WEBPACK_IMPORTED_MODULE_11__["AdminNavigationComponent"],
    _admin_panel_component__WEBPACK_IMPORTED_MODULE_8__["AdminPanelComponent"],
    _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_12__["AdminLoginComponent"],
    _add_politics_add_politics_component__WEBPACK_IMPORTED_MODULE_14__["AddPoliticsComponent"],
    _add_culture_add_culture_component__WEBPACK_IMPORTED_MODULE_15__["AddCultureComponent"],
    _add_economy_add_economy_component__WEBPACK_IMPORTED_MODULE_16__["AddEconomyComponent"],
    _add_ads_add_ads_component__WEBPACK_IMPORTED_MODULE_21__["AddAdsComponent"],
    _all_ads_all_ads_component__WEBPACK_IMPORTED_MODULE_22__["AllAdsComponent"],
];
let AdminPanelModule = class AdminPanelModule {
};
AdminPanelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: COMPONENTS,
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)
        ],
        providers: [
            _auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]
        ],
        exports: [
            COMPONENTS,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
        ]
    })
], AdminPanelModule);



/***/ }),

/***/ "./src/app/admin-panel/all-ads/all-ads.component.scss":
/*!************************************************************!*\
  !*** ./src/app/admin-panel/all-ads/all-ads.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXBhbmVsL2FsbC1hZHMvYWxsLWFkcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/admin-panel/all-ads/all-ads.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin-panel/all-ads/all-ads.component.ts ***!
  \**********************************************************/
/*! exports provided: AllAdsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllAdsComponent", function() { return AllAdsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_ads_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ads.service */ "./src/app/services/ads.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AllAdsComponent = class AllAdsComponent {
    constructor(adsService) {
        this.adsService = adsService;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.allAds = [];
    }
    ngOnInit() {
        this.getAllAds();
    }
    getAllAds() {
        return this.adsService
            .getAllAds()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(data => {
            this.allAds = data['adsData'];
            console.log(this.allAds);
        }, err => console.log(err));
    }
    ;
    toggleAds(index) {
        const item = this.allAds[index];
        item.isActive === false ? item.isActive = true : item.isActive = false;
    }
    ;
    removeAds(id, index) {
        this.adsService
            .removeAds(id)
            .subscribe(data => {
            console.log(data);
            this.allAds.splice(index, 1);
        }, err => console.log(err));
    }
};
AllAdsComponent.ctorParameters = () => [
    { type: src_app_services_ads_service__WEBPACK_IMPORTED_MODULE_2__["AdsService"] }
];
AllAdsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all-ads',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./all-ads.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/all-ads/all-ads.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./all-ads.component.scss */ "./src/app/admin-panel/all-ads/all-ads.component.scss")).default]
    })
], AllAdsComponent);



/***/ }),

/***/ "./src/app/admin-panel/all-headlines/all-headlines.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/admin-panel/all-headlines/all-headlines.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h4 {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hcHAvYWRtaW4tcGFuZWwvYWxsLWhlYWRsaW5lcy9hbGwtaGVhZGxpbmVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi1wYW5lbC9hbGwtaGVhZGxpbmVzL2FsbC1oZWFkbGluZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1wYW5lbC9hbGwtaGVhZGxpbmVzL2FsbC1oZWFkbGluZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSIsImg0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/admin-panel/all-headlines/all-headlines.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin-panel/all-headlines/all-headlines.component.ts ***!
  \**********************************************************************/
/*! exports provided: AllHeadlinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllHeadlinesComponent", function() { return AllHeadlinesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_headlines_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/headlines.service */ "./src/app/services/headlines.service.ts");



let AllHeadlinesComponent = class AllHeadlinesComponent {
    constructor(headlineService) {
        this.headlineService = headlineService;
        this.allHeadlines = [];
        this.allFilteredHeadlines = [];
        this.isFiltered = false;
    }
    ngOnInit() {
        this.getAllHeadlines();
    }
    getAllHeadlines() {
        return this.headlineService
            .getAllHeadlines()
            .subscribe(data => {
            data['headlinesData'].map(item => item.isActive = false);
            this.allHeadlines = data['headlinesData'];
            console.log(this.allHeadlines);
        }, err => {
            console.log(err);
        });
    }
    ;
    toggleHeadlines(index) {
        const item = this.allHeadlines[index];
        item.isActive === false ? item.isActive = true : item.isActive = false;
    }
    ;
    toggleFiltered(index) {
        const item = this.allFilteredHeadlines[index];
        item['isActive'] === false ? item['isActive'] = true : item['isActive'] = false;
    }
    ;
    deleteHeadlines(index, id) {
        return this.headlineService
            .deleteHeadlines(id)
            .subscribe(data => {
            console.log(data);
            this.allHeadlines.splice(index, 1);
        }, err => {
            console.log(err);
        });
    }
    ;
    filterHeadlines(keyword) {
        this.allFilteredHeadlines = this.allHeadlines.filter(item => {
            if (item.title.trim().toLocaleLowerCase() === keyword.trim().toLocaleLowerCase()) {
                this.isFiltered = true;
                return item;
            }
            ;
        });
    }
    ;
    showAllHeadlines() {
        this.isFiltered = false;
    }
    ngOnDestroy() {
        this.getAllHeadlines().unsubscribe();
    }
};
AllHeadlinesComponent.ctorParameters = () => [
    { type: src_app_services_headlines_service__WEBPACK_IMPORTED_MODULE_2__["HeadlinesService"] }
];
AllHeadlinesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all-headlines',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./all-headlines.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/all-headlines/all-headlines.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./all-headlines.component.scss */ "./src/app/admin-panel/all-headlines/all-headlines.component.scss")).default]
    })
], AllHeadlinesComponent);



/***/ }),

/***/ "./src/app/admin-panel/all-news/all-news.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/admin-panel/all-news/all-news.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.button {\n  display: inline-block;\n  *display: inline;\n  zoom: 1;\n  padding: 6px 20px;\n  margin: 0;\n  cursor: pointer;\n  border: 1px solid #bbb;\n  overflow: visible;\n  font: bold 13px arial, helvetica, sans-serif;\n  text-decoration: none;\n  white-space: nowrap;\n  color: #555;\n  outline: none;\n  background-color: #ddd;\n  -webkit-transition: background-color 0.2s ease-out;\n  transition: background-color 0.2s ease-out;\n  background-clip: padding-box;\n  /* Fix bleeding */\n  border-radius: 3px;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3), 0 2px 2px -1px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.button:hover {\n  background-color: #eee;\n  color: #555;\n}\n\n.button:active {\n  background: #e9e9e9;\n  position: relative;\n  top: 1px;\n  text-shadow: none;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3) inset;\n}\n\n.button[disabled], .button[disabled]:hover, .button[disabled]:active {\n  border-color: #eaeaea;\n  background: #fafafa;\n  cursor: default;\n  position: static;\n  color: #999;\n  /* Usually, !important should be avoided but here it's really needed :) */\n  box-shadow: none !important;\n  text-shadow: none !important;\n}\n\n.button.large {\n  padding: 12px 30px;\n  text-transform: uppercase;\n}\n\n.button.large:active {\n  top: 2px;\n}\n\nh4 {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hc3NldHMvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2FkbWluLXBhbmVsL2FsbC1uZXdzL2FsbC1uZXdzLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvb3h5bW9uc3Rlci9EZXNrdG9wL21lc3Nlbmdlci1tYWdhemluZS9jbGllbnQvc3JjL2FwcC9hZG1pbi1wYW5lbC9hbGwtbmV3cy9hbGwtbmV3cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDWko7O0FEZUU7RUFDRSxxQkFBQTtHQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUVBLHNCQUFBO0VBUUEsa0RBQUE7RUFJQSwwQ0FBQTtFQUNBLDRCQUFBO0VBQThCLGlCQUFBO0VBRzlCLGtCQUFBO0VBR0EsaUhBQUE7RUFDQSw2Q0FBQTtFQUVBLDJCQUFBO0VBQ0EseUJBQUE7RUFFQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNwQko7O0FEdUJFO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0FDcEJKOztBRHVCRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFHQSw4Q0FBQTtBQ3BCSjs7QUR1QkU7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlFQUFBO0VBR0EsMkJBQUE7RUFDQSw0QkFBQTtBQ3BCSjs7QUR1QkU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FDcEJKOztBRHVCRTtFQUNFLFFBQUE7QUNwQko7O0FDM0VBO0VBQ0ksZUFBQTtBRDhFSiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXBhbmVsL2FsbC1uZXdzL2FsbC1uZXdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyAqICogKiBDb2xvcnMgKiAqICogXG5cbiRibGFjazogIzAwMDAwMDsgXG4kZ3JleTogI2U4ZThlODsgXG4kd2hpdGU6ICNlZWVlOyBcbiRyZWQ6ICNkZTFlMjY7XG4kZGFyay1ncmV5OiAjNzc3Nzc3O1xuJHNoYWRvdzogMHB4IDhweCAxNXB4IHJnYmEoMCwgMCwgMCwgLjcpOyBcblxuXG4vLyBCdXR0b25zXG5cbi5idXR0b246Oi1tb3otZm9jdXMtaW5uZXJ7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIC5idXR0b257XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICpkaXNwbGF5OiBpbmxpbmU7XG4gICAgem9vbTogMTtcbiAgICBwYWRkaW5nOiA2cHggMjBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgZm9udDogYm9sZCAxM3B4IGFyaWFsLCBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgYm90dG9tLCBmcm9tKHJnYmEoMjU1LDI1NSwyNTUsMSkpLCB0byhyZ2JhKDI1NSwyNTUsMjU1LDApKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSksIHJnYmEoMjU1LDI1NSwyNTUsMCkpO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICBcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZS1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7IC8qIEZpeCBibGVlZGluZyAqL1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpIGluc2V0O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAuNSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMykgaW5zZXQ7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAuNSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMykgaW5zZXQ7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwgLjkpO1xuICAgIFxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuICBcbiAgLmJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGNvbG9yOiAjNTU1O1xuICB9XG4gIFxuICAuYnV0dG9uOmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDFweDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4zKSBpbnNldDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4zKSBpbnNldDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMykgaW5zZXQ7XG4gIH1cbiAgXG4gIC5idXR0b25bZGlzYWJsZWRdLCAuYnV0dG9uW2Rpc2FibGVkXTpob3ZlciwgLmJ1dHRvbltkaXNhYmxlZF06YWN0aXZle1xuICAgIGJvcmRlci1jb2xvcjogI2VhZWFlYTtcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIC8qIFVzdWFsbHksICFpbXBvcnRhbnQgc2hvdWxkIGJlIGF2b2lkZWQgYnV0IGhlcmUgaXQncyByZWFsbHkgbmVlZGVkIDopICovXG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYnV0dG9uLmxhcmdle1xuICAgIHBhZGRpbmc6IDEycHggMzBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIFxuICAuYnV0dG9uLmxhcmdlOmFjdGl2ZXtcbiAgICB0b3A6IDJweDtcbiAgfVxuICBcbiAgIiwiLmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgKmRpc3BsYXk6IGlubGluZTtcbiAgem9vbTogMTtcbiAgcGFkZGluZzogNnB4IDIwcHg7XG4gIG1hcmdpbjogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgZm9udDogYm9sZCAxM3B4IGFyaWFsLCBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6ICM1NTU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIC8qIEZpeCBibGVlZGluZyAqL1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSBpbnNldDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSBpbnNldDtcbiAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgaW5zZXQ7XG4gIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBjb2xvcjogIzU1NTtcbn1cblxuLmJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpIGluc2V0O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMykgaW5zZXQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMykgaW5zZXQ7XG59XG5cbi5idXR0b25bZGlzYWJsZWRdLCAuYnV0dG9uW2Rpc2FibGVkXTpob3ZlciwgLmJ1dHRvbltkaXNhYmxlZF06YWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZWFlYWVhO1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIGNvbG9yOiAjOTk5O1xuICAvKiBVc3VhbGx5LCAhaW1wb3J0YW50IHNob3VsZCBiZSBhdm9pZGVkIGJ1dCBoZXJlIGl0J3MgcmVhbGx5IG5lZWRlZCA6KSAqL1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbi5sYXJnZSB7XG4gIHBhZGRpbmc6IDEycHggMzBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmJ1dHRvbi5sYXJnZTphY3RpdmUge1xuICB0b3A6IDJweDtcbn1cblxuaDQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiQGltcG9ydCAnc3JjL2Fzc2V0cy92YXJpYWJsZXMnOyBcblxuaDQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/admin-panel/all-news/all-news.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin-panel/all-news/all-news.component.ts ***!
  \************************************************************/
/*! exports provided: AllNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllNewsComponent", function() { return AllNewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/news.service */ "./src/app/services/news.service.ts");



let AllNewsComponent = class AllNewsComponent {
    constructor(newsService) {
        this.newsService = newsService;
        this.allNews = [];
    }
    ngOnInit() {
        this.getAllNews();
    }
    getAllNews() {
        return this.newsService
            .getNews()
            .subscribe(data => {
            data['newsData'].map(item => item.isActive = false);
            this.allNews = data['newsData'];
            console.log(this.allNews);
        }, err => {
            console.log(err);
        });
    }
    ;
    toggleNews(index) {
        const item = this.allNews[index];
        item.isActive === false ? item.isActive = true : item.isActive = false;
    }
    ;
    removeNews(index, newsID) {
        return this.newsService
            .deleteNews(newsID)
            .subscribe(data => {
            console.log(data);
            this.allNews.splice(index, 1);
        }, err => {
            console.log(err);
        });
    }
    ngOnDestroy() {
        this.getAllNews().unsubscribe();
    }
};
AllNewsComponent.ctorParameters = () => [
    { type: src_app_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"] }
];
AllNewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all-news',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./all-news.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/all-news/all-news.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./all-news.component.scss */ "./src/app/admin-panel/all-news/all-news.component.scss")).default]
    })
], AllNewsComponent);



/***/ }),

/***/ "./src/app/admin-panel/all-news/remove-culture/remove-culture.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/admin-panel/all-news/remove-culture/remove-culture.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  font-size: 1.6rem;\n  font-family: \"Lora\", serif;\n  text-align: center;\n  border: 2px solid black;\n  pad: 1rem;\n  border-radius: 0.8rem;\n  cursor: pointer;\n}\n\nh4 {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hcHAvYWRtaW4tcGFuZWwvYWxsLW5ld3MvcmVtb3ZlLWN1bHR1cmUvcmVtb3ZlLWN1bHR1cmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluLXBhbmVsL2FsbC1uZXdzL3JlbW92ZS1jdWx0dXJlL3JlbW92ZS1jdWx0dXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1wYW5lbC9hbGwtbmV3cy9yZW1vdmUtY3VsdHVyZS9yZW1vdmUtY3VsdHVyZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBwYWQ6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogLjhyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5oNCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSIsImgxIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIHBhZDogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmg0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/admin-panel/all-news/remove-culture/remove-culture.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/admin-panel/all-news/remove-culture/remove-culture.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RemoveCultureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveCultureComponent", function() { return RemoveCultureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let RemoveCultureComponent = class RemoveCultureComponent {
    constructor(adminService) {
        this.adminService = adminService;
        this.allCulture = [];
        this.allFilteredCulture = [];
        this.isFiltered = false;
        this.isActive = false;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
        this.getAllCulture();
    }
    getAllCulture() {
        return this.adminService
            .getCulture()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(data => {
            console.log(data);
            this.allCulture = data['cultureData'];
            this.allCulture.map(item => item.isActive = false);
        });
    }
    ;
    toggle(index) {
        const item = this.allCulture[index];
        item.isActive === false ? item.isActive = true : item.isActive = false;
    }
    ;
    toggleFiltered(index) {
        const item = this.allFilteredCulture[index];
        item['isActive'] === false ? item['isActive'] = true : item['isActive'] = false;
    }
    ;
    deleteCulture(index, id) {
        return this.adminService
            .removeCulture(id)
            .subscribe(data => {
            console.log(data);
            this.allCulture.splice(index, 1);
        }, err => {
            console.log(err);
        });
    }
    ;
    filterCulture(keyword) {
        this.allFilteredCulture = this.allCulture.filter(item => {
            if (item.title.trim().toLocaleLowerCase() === keyword.trim().toLocaleLowerCase()) {
                this.isFiltered = true;
                return item;
            }
            ;
        });
    }
    ;
    showAllCulture() {
        this.isFiltered = false;
    }
    ngOnDestroy() {
        this.getAllCulture().unsubscribe();
    }
};
RemoveCultureComponent.ctorParameters = () => [
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] }
];
RemoveCultureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-remove-culture',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./remove-culture.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/all-news/remove-culture/remove-culture.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./remove-culture.component.scss */ "./src/app/admin-panel/all-news/remove-culture/remove-culture.component.scss")).default]
    })
], RemoveCultureComponent);



/***/ }),

/***/ "./src/app/admin-panel/all-news/remove-economy/remove-economy.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/admin-panel/all-news/remove-economy/remove-economy.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  font-size: 1.6rem;\n  font-family: \"Lora\", serif;\n  text-align: center;\n  border: 2px solid black;\n  pad: 1rem;\n  border-radius: 0.8rem;\n  cursor: pointer;\n}\n\nh4 {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hcHAvYWRtaW4tcGFuZWwvYWxsLW5ld3MvcmVtb3ZlLWVjb25vbXkvcmVtb3ZlLWVjb25vbXkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluLXBhbmVsL2FsbC1uZXdzL3JlbW92ZS1lY29ub215L3JlbW92ZS1lY29ub215LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1wYW5lbC9hbGwtbmV3cy9yZW1vdmUtZWNvbm9teS9yZW1vdmUtZWNvbm9teS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBwYWQ6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogLjhyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5oNCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSIsImgxIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIHBhZDogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmg0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/admin-panel/all-news/remove-economy/remove-economy.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/admin-panel/all-news/remove-economy/remove-economy.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RemoveEconomyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveEconomyComponent", function() { return RemoveEconomyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let RemoveEconomyComponent = class RemoveEconomyComponent {
    constructor(adminService) {
        this.adminService = adminService;
        this.allEconomy = [];
        this.allFilteredEconomy = [];
        this.isFilterActive = false;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.getAllCulture();
    }
    getAllCulture() {
        return this.adminService
            .getAllEconomy()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(data => {
            console.log(data);
            this.allEconomy = data['economyData'];
        });
    }
    ;
    toggle(index) {
        const item = this.allEconomy[index];
        item.isActive === false ? item.isActive = true : item.isActive = false;
    }
    ;
    toggleFiltered(index) {
        const item = this.allFilteredEconomy[index];
        item['isActive'] === false ? item['isActive'] = true : item['isActive'] = false;
    }
    ;
    deleteEconomy(index, id) {
        return this.adminService
            .removeEconomy(id)
            .subscribe(data => {
            console.log(data);
            this.allEconomy.splice(index, 1);
        }, err => {
            console.log(err);
        });
    }
    filterEconomy(keyword) {
        this.allFilteredEconomy = this.allEconomy.filter(item => {
            if (item.title.trim().toLocaleLowerCase() === keyword.trim().toLocaleLowerCase()) {
                this.isFilterActive = true;
                return item;
            }
            ;
        });
    }
    ;
    showAllEconomy() {
        this.isFilterActive = false;
    }
    ngOnDestroy() {
        this.getAllCulture().unsubscribe();
    }
};
RemoveEconomyComponent.ctorParameters = () => [
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] }
];
RemoveEconomyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-remove-economy',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./remove-economy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/all-news/remove-economy/remove-economy.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./remove-economy.component.scss */ "./src/app/admin-panel/all-news/remove-economy/remove-economy.component.scss")).default]
    })
], RemoveEconomyComponent);



/***/ }),

/***/ "./src/app/admin-panel/all-news/remove-news/remove-news.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/admin-panel/all-news/remove-news/remove-news.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  font-size: 1.6rem;\n  font-family: \"Lora\", serif;\n  text-align: center;\n  border: 2px solid black;\n  pad: 1rem;\n  border-radius: 0.8rem;\n  cursor: pointer;\n}\n\nh4 {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hcHAvYWRtaW4tcGFuZWwvYWxsLW5ld3MvcmVtb3ZlLW5ld3MvcmVtb3ZlLW5ld3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluLXBhbmVsL2FsbC1uZXdzL3JlbW92ZS1uZXdzL3JlbW92ZS1uZXdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1wYW5lbC9hbGwtbmV3cy9yZW1vdmUtbmV3cy9yZW1vdmUtbmV3cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBwYWQ6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogLjhyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5oNCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSIsImgxIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIHBhZDogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmg0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/admin-panel/all-news/remove-news/remove-news.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin-panel/all-news/remove-news/remove-news.component.ts ***!
  \***************************************************************************/
/*! exports provided: RemoveNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveNewsComponent", function() { return RemoveNewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let RemoveNewsComponent = class RemoveNewsComponent {
    constructor(newsService) {
        this.newsService = newsService;
        this.allNews = [];
        this.allFilteredNews = [];
        this.isFilterActive = false;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.getAllNews();
    }
    getAllNews() {
        return this.newsService
            .getNews()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(data => {
            data['newsData'].map(item => item.isActive = false);
            this.allNews = data['newsData'];
            console.log(this.allNews);
        }, err => {
            console.log(err);
        });
    }
    ;
    toggleNews(index) {
        const item = this.allNews[index];
        item.isActive === false ? item.isActive = true : item.isActive = false;
    }
    ;
    toggleFitered(index) {
        const item = this.allFilteredNews[index];
        item.isActive === false ? item.isActive = true : item.isActive = false;
    }
    ;
    removeNews(index, newsID) {
        return this.newsService
            .deleteNews(newsID)
            .subscribe(data => {
            console.log(data);
            this.allNews.splice(index, 1);
        }, err => {
            console.log(err);
        });
    }
    ;
    filterNews(keyword) {
        this.allFilteredNews = this.allNews.filter(item => {
            if (item.title.trim().toLocaleLowerCase() === keyword.trim().toLocaleLowerCase()) {
                this.isFilterActive = true;
                return item;
            }
            ;
        });
    }
    ;
    showAllNews() {
        this.isFilterActive = false;
    }
    ngOnDestroy() {
        this.getAllNews().unsubscribe();
    }
};
RemoveNewsComponent.ctorParameters = () => [
    { type: src_app_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"] }
];
RemoveNewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-remove-news',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./remove-news.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/all-news/remove-news/remove-news.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./remove-news.component.scss */ "./src/app/admin-panel/all-news/remove-news/remove-news.component.scss")).default]
    })
], RemoveNewsComponent);



/***/ }),

/***/ "./src/app/admin-panel/all-news/remove-politics/remove-politics.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/admin-panel/all-news/remove-politics/remove-politics.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  font-size: 1.6rem;\n  font-family: \"Lora\", serif;\n  text-align: center;\n  border: 2px solid black;\n  pad: 1rem;\n  border-radius: 0.8rem;\n  cursor: pointer;\n}\n\nh4 {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hcHAvYWRtaW4tcGFuZWwvYWxsLW5ld3MvcmVtb3ZlLXBvbGl0aWNzL3JlbW92ZS1wb2xpdGljcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4tcGFuZWwvYWxsLW5ld3MvcmVtb3ZlLXBvbGl0aWNzL3JlbW92ZS1wb2xpdGljcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tcGFuZWwvYWxsLW5ld3MvcmVtb3ZlLXBvbGl0aWNzL3JlbW92ZS1wb2xpdGljcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBwYWQ6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogLjhyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5oNCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSIsImgxIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIHBhZDogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmg0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/admin-panel/all-news/remove-politics/remove-politics.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/admin-panel/all-news/remove-politics/remove-politics.component.ts ***!
  \***********************************************************************************/
/*! exports provided: RemovePoliticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemovePoliticsComponent", function() { return RemovePoliticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let RemovePoliticsComponent = class RemovePoliticsComponent {
    constructor(adminService) {
        this.adminService = adminService;
        this.allPolitics = [];
        this.isFilterActive = false;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.getAllCulture();
    }
    getAllCulture() {
        return this.adminService
            .getAllPolitics()
            .subscribe(data => {
            console.log(data);
            this.allPolitics = data['politicsData'];
        });
    }
    ;
    toggle(index) {
        const item = this.allPolitics[index];
        item.isActive === false ? item.isActive = true : item.isActive = false;
    }
    ;
    toggleFiltered(index) {
        const item = this.allFilteredPolitics[index];
        item['isActive'] === false ? item['isActive'] = true : item['isActive'] = false;
    }
    ;
    deletePolitics(index, id) {
        return this.adminService
            .removePolitics(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(data => {
            console.log(data);
            this.allPolitics.splice(index, 1);
        }, err => {
            console.log(err);
        });
    }
    ;
    filterPolitics(keyword) {
        this.allFilteredPolitics = this.allPolitics.filter(item => {
            if (item.title.trim().toLocaleLowerCase() === keyword.trim().toLocaleLowerCase()) {
                this.isFilterActive = true;
                return item;
            }
            ;
        });
    }
    ;
    showAllPolitics() {
        this.isFilterActive = false;
    }
    ngOnDestroy() {
        this.getAllCulture().unsubscribe();
    }
};
RemovePoliticsComponent.ctorParameters = () => [
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] }
];
RemovePoliticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-remove-politics',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./remove-politics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/all-news/remove-politics/remove-politics.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./remove-politics.component.scss */ "./src/app/admin-panel/all-news/remove-politics/remove-politics.component.scss")).default]
    })
], RemovePoliticsComponent);



/***/ }),

/***/ "./src/app/admin-panel/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/admin-panel/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");




let AuthGuard = class AuthGuard {
    constructor(adminService, router) {
        this.adminService = adminService;
        this.router = router;
    }
    canActivate(next, state) {
        // this.router.navigate['/admin-login']; 
        // return false
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/advertisement/advertisement.component.scss":
/*!************************************************************!*\
  !*** ./src/app/advertisement/advertisement.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.button {\n  display: inline-block;\n  *display: inline;\n  zoom: 1;\n  padding: 6px 20px;\n  margin: 0;\n  cursor: pointer;\n  border: 1px solid #bbb;\n  overflow: visible;\n  font: bold 13px arial, helvetica, sans-serif;\n  text-decoration: none;\n  white-space: nowrap;\n  color: #555;\n  outline: none;\n  background-color: #ddd;\n  -webkit-transition: background-color 0.2s ease-out;\n  transition: background-color 0.2s ease-out;\n  background-clip: padding-box;\n  /* Fix bleeding */\n  border-radius: 3px;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3), 0 2px 2px -1px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.button:hover {\n  background-color: #eee;\n  color: #555;\n}\n\n.button:active {\n  background: #e9e9e9;\n  position: relative;\n  top: 1px;\n  text-shadow: none;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3) inset;\n}\n\n.button[disabled], .button[disabled]:hover, .button[disabled]:active {\n  border-color: #eaeaea;\n  background: #fafafa;\n  cursor: default;\n  position: static;\n  color: #999;\n  /* Usually, !important should be avoided but here it's really needed :) */\n  box-shadow: none !important;\n  text-shadow: none !important;\n}\n\n.button.large {\n  padding: 12px 30px;\n  text-transform: uppercase;\n}\n\n.button.large:active {\n  top: 2px;\n}\n\n.contact {\n  border-radius: 0.5rem;\n  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.7);\n  border: 2px solid #000000;\n  border-radius: 0.5rem;\n}\n\n.contact__title h1 {\n  text-align: center;\n  font-family: \"Lora\", serif;\n  border-bottom: 2px solid #000000;\n  padding-bottom: 0.5rem;\n}\n\n.contact__img__content {\n  width: 35rem;\n  height: 15rem;\n}\n\n.contact__img__content img {\n  width: 100%;\n  height: 100%;\n}\n\n.contact__description__title p {\n  font-size: 1rem;\n  font-weight: 500;\n  text-align: center;\n  font-weight: bold;\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid #777777;\n}\n\n.contact__description__contact {\n  margin-top: 2rem;\n}\n\n.contact__description__contact__email {\n  text-align: center;\n  margin-top: 1rem;\n}\n\n.contact__description__contact__email i {\n  font-size: 1.3rem;\n  color: #de1e26;\n  margin-right: 0.6rem;\n  text-align: center;\n  margin-top: 0.2rem;\n}\n\n.contact__description__contact__email p {\n  color: #de1e26;\n  font-weight: bolder;\n  margin-right: 0.5rem;\n  font-size: 1rem;\n}\n\n.contact__description__contact__email span {\n  font-size: 0.875rem;\n  text-align: left;\n  line-height: 1.5rem;\n}\n\nbutton {\n  background-color: #de1e26 !important;\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hc3NldHMvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2FkdmVydGlzZW1lbnQvYWR2ZXJ0aXNlbWVudC5jb21wb25lbnQuc2NzcyIsIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hcHAvYWR2ZXJ0aXNlbWVudC9hZHZlcnRpc2VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNaSjs7QURlRTtFQUNFLHFCQUFBO0dBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBRUEsc0JBQUE7RUFRQSxrREFBQTtFQUlBLDBDQUFBO0VBQ0EsNEJBQUE7RUFBOEIsaUJBQUE7RUFHOUIsa0JBQUE7RUFHQSxpSEFBQTtFQUNBLDZDQUFBO0VBRUEsMkJBQUE7RUFDQSx5QkFBQTtFQUVBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ3BCSjs7QUR1QkU7RUFDRSxzQkFBQTtFQUNBLFdBQUE7QUNwQko7O0FEdUJFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUdBLDhDQUFBO0FDcEJKOztBRHVCRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUVBQUE7RUFHQSwyQkFBQTtFQUNBLDRCQUFBO0FDcEJKOztBRHVCRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUNwQko7O0FEdUJFO0VBQ0UsUUFBQTtBQ3BCSjs7QUMzRUE7RUFFSSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBRDZFSjs7QUMxRVE7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtBRDRFWjs7QUN2RVE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBRHlFWjs7QUN4RVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBRDBFaEI7O0FDbkVZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QURxRWhCOztBQ2pFUTtFQUNJLGdCQUFBO0FEbUVaOztBQ2xFWTtFQUVJLGtCQUFBO0VBQ0EsZ0JBQUE7QURtRWhCOztBQ2xFZ0I7RUFDSSxpQkFBQTtFQUNBLGNGM0NkO0VFNENjLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRG9FcEI7O0FDakVnQjtFQUNJLGNGbERkO0VFbURjLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FEbUVwQjs7QUNqRWdCO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FEbUVwQjs7QUMzREE7RUFDSSxvQ0FBQTtFQUNBLHVCQUFBO0FEOERKIiwiZmlsZSI6InNyYy9hcHAvYWR2ZXJ0aXNlbWVudC9hZHZlcnRpc2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyAqICogKiBDb2xvcnMgKiAqICogXG5cbiRibGFjazogIzAwMDAwMDsgXG4kZ3JleTogI2U4ZThlODsgXG4kd2hpdGU6ICNlZWVlOyBcbiRyZWQ6ICNkZTFlMjY7XG4kZGFyay1ncmV5OiAjNzc3Nzc3O1xuJHNoYWRvdzogMHB4IDhweCAxNXB4IHJnYmEoMCwgMCwgMCwgLjcpOyBcblxuXG4vLyBCdXR0b25zXG5cbi5idXR0b246Oi1tb3otZm9jdXMtaW5uZXJ7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIC5idXR0b257XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICpkaXNwbGF5OiBpbmxpbmU7XG4gICAgem9vbTogMTtcbiAgICBwYWRkaW5nOiA2cHggMjBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgZm9udDogYm9sZCAxM3B4IGFyaWFsLCBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgYm90dG9tLCBmcm9tKHJnYmEoMjU1LDI1NSwyNTUsMSkpLCB0byhyZ2JhKDI1NSwyNTUsMjU1LDApKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSksIHJnYmEoMjU1LDI1NSwyNTUsMCkpO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICBcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZS1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7IC8qIEZpeCBibGVlZGluZyAqL1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpIGluc2V0O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAuNSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMykgaW5zZXQ7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAuNSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMykgaW5zZXQ7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwgLjkpO1xuICAgIFxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuICBcbiAgLmJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGNvbG9yOiAjNTU1O1xuICB9XG4gIFxuICAuYnV0dG9uOmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDFweDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4zKSBpbnNldDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4zKSBpbnNldDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMykgaW5zZXQ7XG4gIH1cbiAgXG4gIC5idXR0b25bZGlzYWJsZWRdLCAuYnV0dG9uW2Rpc2FibGVkXTpob3ZlciwgLmJ1dHRvbltkaXNhYmxlZF06YWN0aXZle1xuICAgIGJvcmRlci1jb2xvcjogI2VhZWFlYTtcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIC8qIFVzdWFsbHksICFpbXBvcnRhbnQgc2hvdWxkIGJlIGF2b2lkZWQgYnV0IGhlcmUgaXQncyByZWFsbHkgbmVlZGVkIDopICovXG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYnV0dG9uLmxhcmdle1xuICAgIHBhZGRpbmc6IDEycHggMzBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIFxuICAuYnV0dG9uLmxhcmdlOmFjdGl2ZXtcbiAgICB0b3A6IDJweDtcbiAgfVxuICBcbiAgIiwiLmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgKmRpc3BsYXk6IGlubGluZTtcbiAgem9vbTogMTtcbiAgcGFkZGluZzogNnB4IDIwcHg7XG4gIG1hcmdpbjogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgZm9udDogYm9sZCAxM3B4IGFyaWFsLCBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6ICM1NTU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIC8qIEZpeCBibGVlZGluZyAqL1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSBpbnNldDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSBpbnNldDtcbiAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgaW5zZXQ7XG4gIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBjb2xvcjogIzU1NTtcbn1cblxuLmJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpIGluc2V0O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMykgaW5zZXQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMykgaW5zZXQ7XG59XG5cbi5idXR0b25bZGlzYWJsZWRdLCAuYnV0dG9uW2Rpc2FibGVkXTpob3ZlciwgLmJ1dHRvbltkaXNhYmxlZF06YWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZWFlYWVhO1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIGNvbG9yOiAjOTk5O1xuICAvKiBVc3VhbGx5LCAhaW1wb3J0YW50IHNob3VsZCBiZSBhdm9pZGVkIGJ1dCBoZXJlIGl0J3MgcmVhbGx5IG5lZWRlZCA6KSAqL1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbi5sYXJnZSB7XG4gIHBhZGRpbmc6IDEycHggMzBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmJ1dHRvbi5sYXJnZTphY3RpdmUge1xuICB0b3A6IDJweDtcbn1cblxuLmNvbnRhY3Qge1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cbi5jb250YWN0X190aXRsZSBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDAwMDA7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG59XG4uY29udGFjdF9faW1nX19jb250ZW50IHtcbiAgd2lkdGg6IDM1cmVtO1xuICBoZWlnaHQ6IDE1cmVtO1xufVxuLmNvbnRhY3RfX2ltZ19fY29udGVudCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRhY3RfX2Rlc2NyaXB0aW9uX190aXRsZSBwIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzc3Nzc3Nztcbn1cbi5jb250YWN0X19kZXNjcmlwdGlvbl9fY29udGFjdCB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG4uY29udGFjdF9fZGVzY3JpcHRpb25fX2NvbnRhY3RfX2VtYWlsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuLmNvbnRhY3RfX2Rlc2NyaXB0aW9uX19jb250YWN0X19lbWFpbCBpIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGNvbG9yOiAjZGUxZTI2O1xuICBtYXJnaW4tcmlnaHQ6IDAuNnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAwLjJyZW07XG59XG4uY29udGFjdF9fZGVzY3JpcHRpb25fX2NvbnRhY3RfX2VtYWlsIHAge1xuICBjb2xvcjogI2RlMWUyNjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5jb250YWN0X19kZXNjcmlwdGlvbl9fY29udGFjdF9fZW1haWwgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZTFlMjYgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59IiwiQGltcG9ydCAnc3JjL2Fzc2V0cy92YXJpYWJsZXMnOyBcblxuLmNvbnRhY3Qge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRncmV5O1xuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIC43KTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XG5cbiAgICAmX190aXRsZSB7XG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRibGFjaztcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2ltZyB7XG4gICAgICAgICZfX2NvbnRlbnQge1xuICAgICAgICAgICAgd2lkdGg6IDM1cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxNXJlbTtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fZGVzY3JpcHRpb24gIHtcbiAgICAgICAgJl9fdGl0bGUge1xuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRkYXJrLWdyZXk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmX19jb250YWN0IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgICAgICAmX19lbWFpbCB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHJlZDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNnJlbTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAuMnJlbTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRyZWQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjg3NXJlbTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/advertisement/advertisement.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/advertisement/advertisement.component.ts ***!
  \**********************************************************/
/*! exports provided: AdvertisementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementComponent", function() { return AdvertisementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdvertisementComponent = class AdvertisementComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdvertisementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-advertisement',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./advertisement.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/advertisement/advertisement.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./advertisement.component.scss */ "./src/app/advertisement/advertisement.component.scss")).default]
    })
], AdvertisementComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./advertisement/advertisement.component */ "./src/app/advertisement/advertisement.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _headlines_headlines_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./headlines/headlines.component */ "./src/app/headlines/headlines.component.ts");
/* harmony import */ var _headlines_headline_details_headline_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./headlines/headline-details/headline-details.component */ "./src/app/headlines/headline-details/headline-details.component.ts");
/* harmony import */ var _news_news_details_news_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./news/news-details/news-details.component */ "./src/app/news/news-details/news-details.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _politics_politics_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./politics/politics.component */ "./src/app/politics/politics.component.ts");
/* harmony import */ var _culture_culture_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./culture/culture.component */ "./src/app/culture/culture.component.ts");
/* harmony import */ var _economy_economy_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./economy/economy.component */ "./src/app/economy/economy.component.ts");
/* harmony import */ var _politics_politics_details_politics_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./politics/politics-details/politics-details.component */ "./src/app/politics/politics-details/politics-details.component.ts");
/* harmony import */ var _economy_economy_details_economy_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./economy/economy-details/economy-details.component */ "./src/app/economy/economy-details/economy-details.component.ts");
/* harmony import */ var _culture_culture_details_culture_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./culture/culture-details/culture-details.component */ "./src/app/culture/culture-details/culture-details.component.ts");
/* harmony import */ var _home_ads_ads_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/ads/ads.component */ "./src/app/home/ads/ads.component.ts");



















const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], data: { animation: '1' } },
    { path: 'news', component: _news_news_component__WEBPACK_IMPORTED_MODULE_4__["NewsComponent"], data: { animation: '2' } },
    { path: 'news/:id', component: _news_news_details_news_details_component__WEBPACK_IMPORTED_MODULE_10__["NewsDetailsComponent"], data: { animation: '3' } },
    { path: 'politics', component: _politics_politics_component__WEBPACK_IMPORTED_MODULE_12__["PoliticsComponent"], data: { animation: '4' } },
    { path: 'politics/:id', component: _politics_politics_details_politics_details_component__WEBPACK_IMPORTED_MODULE_15__["PoliticsDetailsComponent"], data: { animation: '5' } },
    { path: 'culutre-lifystyle', component: _culture_culture_component__WEBPACK_IMPORTED_MODULE_13__["CultureComponent"], data: { animation: '6' } },
    { path: 'culutre-lifystyle/:id', component: _culture_culture_details_culture_details_component__WEBPACK_IMPORTED_MODULE_17__["CultureDetailsComponent"], data: { animation: '7' } },
    { path: 'economy', component: _economy_economy_component__WEBPACK_IMPORTED_MODULE_14__["EconomyComponent"], data: { animation: '8' } },
    { path: 'economy/:id', component: _economy_economy_details_economy_details_component__WEBPACK_IMPORTED_MODULE_16__["EconomyDetailsComponent"], data: { animation: '9' } },
    { path: 'headlines', component: _headlines_headlines_component__WEBPACK_IMPORTED_MODULE_8__["HeadlinesComponent"], data: { animation: '10' } },
    { path: 'headlines/:id', component: _headlines_headline_details_headline_details_component__WEBPACK_IMPORTED_MODULE_9__["HeadlineDetailsComponent"], data: { animation: '11' } },
    { path: 'about-us', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__["AboutUsComponent"], data: { animation: '12' } },
    { path: 'advertisement', component: _advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_6__["AdvertisementComponent"], data: { animation: '13' } },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], data: { animation: '14' } },
    { path: 'ads', component: _home_ads_ads_component__WEBPACK_IMPORTED_MODULE_18__["AdsComponent"], data: { animation: '15' } },
    { path: '**', redirectTo: '/404' },
    { path: '404', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"], data: { animation: '16' } }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.browser.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.browser.module.ts ***!
  \***************************************/
/*! exports provided: AppBrowserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBrowserModule", function() { return AppBrowserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _admin_panel_admin_panel_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-panel/admin-panel.module */ "./src/app/admin-panel/admin-panel.module.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");










let AppBrowserModule = class AppBrowserModule {
};
AppBrowserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _admin_panel_admin_panel_module__WEBPACK_IMPORTED_MODULE_8__["AdminPanelModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _app_module__WEBPACK_IMPORTED_MODULE_9__["AppModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserTransferStateModule"]
        ],
        // providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppBrowserModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".admin-navingation {\n  background-color: #363740;\n}\n\n.main-content {\n  min-height: 100vh;\n}\n\n@media (max-width: 992px) {\n  #navigation {\n    top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSx5QkFBQTtBQ0FKOztBREdBO0VBQ0ksaUJBQUE7QUNBSjs7QURNSTtFQUZKO0lBS1EsTUFBQTtFQ0pOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRtaW4tbmF2aW5nYXRpb24ge1xuICAgIC8vIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNzQwO1xufTsgXG5cbi5tYWluLWNvbnRlbnQge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG5cbiNuYXZpZ2F0aW9uIHtcbiAgICBcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAgICBcbiAgICAgIFxuICAgICAgICB0b3A6IDA7XG4gICAgfVxufVxuXG4iLCIuYWRtaW4tbmF2aW5nYXRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNzQwO1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAjbmF2aWdhdGlvbiB7XG4gICAgdG9wOiAwO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _route_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./route-animations */ "./src/app/route-animations.ts");




let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'messenger-magazine-app';
        this.isAdminActive = false;
        this.isAdmin = false;
    }
    ngOnInit() {
        this.router.events.subscribe((url) => {
            this.router.url.includes('/admin') ? this.isAdminActive = true : this.isAdminActive = false;
        });
    }
    getAdminStatus(e) {
        this.isAdmin = e;
    }
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        animations: [
            _route_animations__WEBPACK_IMPORTED_MODULE_3__["fader"]
        ],
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_slider_slider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/slider/slider.component */ "./src/app/home/slider/slider.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./advertisement/advertisement.component */ "./src/app/advertisement/advertisement.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_ads_ads_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/ads/ads.component */ "./src/app/home/ads/ads.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _headlines_headlines_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./headlines/headlines.component */ "./src/app/headlines/headlines.component.ts");
/* harmony import */ var _admin_panel_admin_panel_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin-panel/admin-panel.module */ "./src/app/admin-panel/admin-panel.module.ts");
/* harmony import */ var _headlines_headline_details_headline_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./headlines/headline-details/headline-details.component */ "./src/app/headlines/headline-details/headline-details.component.ts");
/* harmony import */ var _news_news_details_news_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./news/news-details/news-details.component */ "./src/app/news/news-details/news-details.component.ts");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var _services_headlines_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/headlines.service */ "./src/app/services/headlines.service.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _economy_economy_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./economy/economy.component */ "./src/app/economy/economy.component.ts");
/* harmony import */ var _culture_culture_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./culture/culture.component */ "./src/app/culture/culture.component.ts");
/* harmony import */ var _politics_politics_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./politics/politics.component */ "./src/app/politics/politics.component.ts");
/* harmony import */ var _home_slider_weather_weather_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./home/slider/weather/weather.component */ "./src/app/home/slider/weather/weather.component.ts");
/* harmony import */ var _economy_economy_details_economy_details_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./economy/economy-details/economy-details.component */ "./src/app/economy/economy-details/economy-details.component.ts");
/* harmony import */ var _politics_politics_details_politics_details_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./politics/politics-details/politics-details.component */ "./src/app/politics/politics-details/politics-details.component.ts");
/* harmony import */ var _culture_culture_details_culture_details_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./culture/culture-details/culture-details.component */ "./src/app/culture/culture-details/culture-details.component.ts");
/* harmony import */ var _home_slider_currency_currency_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./home/slider/currency/currency.component */ "./src/app/home/slider/currency/currency.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _image_lazy_load_image_lazy_load_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./image-lazy-load/image-lazy-load.module */ "./src/app/image-lazy-load/image-lazy-load.module.ts");
/* harmony import */ var _home_ads_commercial_commercial_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./home/ads/commercial/commercial.component */ "./src/app/home/ads/commercial/commercial.component.ts");
/* harmony import */ var ng2_social_share__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ng2-social-share */ "./node_modules/ng2-social-share/src/ng2-social-share.js");
/* harmony import */ var ng2_social_share__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(ng2_social_share__WEBPACK_IMPORTED_MODULE_37__);



































// import { JwSocialButtonsModule } from 'jw-angular-social-buttons';



let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _home_slider_slider_component__WEBPACK_IMPORTED_MODULE_7__["SliderComponent"],
            _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
            _news_news_component__WEBPACK_IMPORTED_MODULE_12__["NewsComponent"],
            _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_13__["AboutUsComponent"],
            _advertisement_advertisement_component__WEBPACK_IMPORTED_MODULE_14__["AdvertisementComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"],
            _news_news_details_news_details_component__WEBPACK_IMPORTED_MODULE_22__["NewsDetailsComponent"],
            _headlines_headline_details_headline_details_component__WEBPACK_IMPORTED_MODULE_21__["HeadlineDetailsComponent"],
            _home_ads_ads_component__WEBPACK_IMPORTED_MODULE_16__["AdsComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
            _headlines_headlines_component__WEBPACK_IMPORTED_MODULE_19__["HeadlinesComponent"],
            _economy_economy_component__WEBPACK_IMPORTED_MODULE_26__["EconomyComponent"],
            _culture_culture_component__WEBPACK_IMPORTED_MODULE_27__["CultureComponent"],
            _politics_politics_component__WEBPACK_IMPORTED_MODULE_28__["PoliticsComponent"],
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_25__["PageNotFoundComponent"],
            _home_slider_weather_weather_component__WEBPACK_IMPORTED_MODULE_29__["WeatherWidgetMainComponent"],
            _economy_economy_details_economy_details_component__WEBPACK_IMPORTED_MODULE_30__["EconomyDetailsComponent"],
            _politics_politics_details_politics_details_component__WEBPACK_IMPORTED_MODULE_31__["PoliticsDetailsComponent"],
            _culture_culture_details_culture_details_component__WEBPACK_IMPORTED_MODULE_32__["CultureDetailsComponent"],
            _home_slider_currency_currency_component__WEBPACK_IMPORTED_MODULE_33__["CurrencyComponent"],
            _home_ads_commercial_commercial_component__WEBPACK_IMPORTED_MODULE_36__["CommercialComponent"],
            ng2_social_share__WEBPACK_IMPORTED_MODULE_37__["CeiboShare"]
        ],
        imports: [
            _admin_panel_admin_panel_module__WEBPACK_IMPORTED_MODULE_20__["AdminPanelModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
            // JwSocialButtonsModule,  
            _image_lazy_load_image_lazy_load_module__WEBPACK_IMPORTED_MODULE_35__["ImageLazyLoadModule"],
        ],
        providers: [
            _services_news_service__WEBPACK_IMPORTED_MODULE_23__["NewsService"],
            _services_headlines_service__WEBPACK_IMPORTED_MODULE_24__["HeadlinesService"],
            // AuthGuard
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_34__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_34__["HashLocationStrategy"] },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.button {\n  display: inline-block;\n  *display: inline;\n  zoom: 1;\n  padding: 6px 20px;\n  margin: 0;\n  cursor: pointer;\n  border: 1px solid #bbb;\n  overflow: visible;\n  font: bold 13px arial, helvetica, sans-serif;\n  text-decoration: none;\n  white-space: nowrap;\n  color: #555;\n  outline: none;\n  background-color: #ddd;\n  -webkit-transition: background-color 0.2s ease-out;\n  transition: background-color 0.2s ease-out;\n  background-clip: padding-box;\n  /* Fix bleeding */\n  border-radius: 3px;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3), 0 2px 2px -1px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.button:hover {\n  background-color: #eee;\n  color: #555;\n}\n\n.button:active {\n  background: #e9e9e9;\n  position: relative;\n  top: 1px;\n  text-shadow: none;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3) inset;\n}\n\n.button[disabled], .button[disabled]:hover, .button[disabled]:active {\n  border-color: #eaeaea;\n  background: #fafafa;\n  cursor: default;\n  position: static;\n  color: #999;\n  /* Usually, !important should be avoided but here it's really needed :) */\n  box-shadow: none !important;\n  text-shadow: none !important;\n}\n\n.button.large {\n  padding: 12px 30px;\n  text-transform: uppercase;\n}\n\n.button.large:active {\n  top: 2px;\n}\n\n.contact {\n  border-radius: 0.5rem;\n  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.7);\n  border: 2px solid #000000;\n  border-radius: 0.5rem;\n}\n\n.contact__title h1 {\n  text-align: center;\n  font-family: \"Lora\", serif;\n  border-bottom: 2px solid #000000;\n  padding-bottom: 0.5rem;\n}\n\n.contact__img__content {\n  width: 100%;\n  height: 100%;\n}\n\n.contact__img__content img {\n  width: 100%;\n  height: 100%;\n}\n\n.contact__description__title p {\n  font-size: 1rem;\n  font-weight: 500;\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid #777777;\n}\n\n.contact__description__contact {\n  margin-top: 2rem;\n}\n\n.contact__description__contact__email {\n  text-align: center;\n  margin-top: 1rem;\n}\n\n.contact__description__contact__email i {\n  font-size: 1.3rem;\n  color: #de1e26;\n  margin-right: 0.6rem;\n  text-align: center;\n  margin-top: 0.2rem;\n}\n\n.contact__description__contact__email p {\n  color: #de1e26;\n  font-weight: bolder;\n  margin-right: 0.5rem;\n  font-size: 1rem;\n}\n\n.contact__description__contact__email span {\n  font-size: 0.875rem;\n  text-align: left;\n  line-height: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hc3NldHMvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNaSjs7QURlRTtFQUNFLHFCQUFBO0dBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBRUEsc0JBQUE7RUFRQSxrREFBQTtFQUlBLDBDQUFBO0VBQ0EsNEJBQUE7RUFBOEIsaUJBQUE7RUFHOUIsa0JBQUE7RUFHQSxpSEFBQTtFQUNBLDZDQUFBO0VBRUEsMkJBQUE7RUFDQSx5QkFBQTtFQUVBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ3BCSjs7QUR1QkU7RUFDRSxzQkFBQTtFQUNBLFdBQUE7QUNwQko7O0FEdUJFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUdBLDhDQUFBO0FDcEJKOztBRHVCRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUVBQUE7RUFHQSwyQkFBQTtFQUNBLDRCQUFBO0FDcEJKOztBRHVCRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUNwQko7O0FEdUJFO0VBQ0UsUUFBQTtBQ3BCSjs7QUMzRUE7RUFFSSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBRDZFSjs7QUMxRVE7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtBRDRFWjs7QUN2RVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBRHlFWjs7QUN4RVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBRDBFaEI7O0FDbkVZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBRUEsc0JBQUE7RUFDQSxnQ0FBQTtBRG9FaEI7O0FDaEVRO0VBQ0ksZ0JBQUE7QURrRVo7O0FDakVZO0VBRUksa0JBQUE7RUFDQSxnQkFBQTtBRGtFaEI7O0FDakVnQjtFQUNJLGlCQUFBO0VBQ0EsY0YxQ2Q7RUUyQ2Msb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FEbUVwQjs7QUNoRWdCO0VBQ0ksY0ZqRGQ7RUVrRGMsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QURrRXBCOztBQ2hFZ0I7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QURrRXBCIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyAqICogKiBDb2xvcnMgKiAqICogXG5cbiRibGFjazogIzAwMDAwMDsgXG4kZ3JleTogI2U4ZThlODsgXG4kd2hpdGU6ICNlZWVlOyBcbiRyZWQ6ICNkZTFlMjY7XG4kZGFyay1ncmV5OiAjNzc3Nzc3O1xuJHNoYWRvdzogMHB4IDhweCAxNXB4IHJnYmEoMCwgMCwgMCwgLjcpOyBcblxuXG4vLyBCdXR0b25zXG5cbi5idXR0b246Oi1tb3otZm9jdXMtaW5uZXJ7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIC5idXR0b257XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICpkaXNwbGF5OiBpbmxpbmU7XG4gICAgem9vbTogMTtcbiAgICBwYWRkaW5nOiA2cHggMjBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgZm9udDogYm9sZCAxM3B4IGFyaWFsLCBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgYm90dG9tLCBmcm9tKHJnYmEoMjU1LDI1NSwyNTUsMSkpLCB0byhyZ2JhKDI1NSwyNTUsMjU1LDApKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSksIHJnYmEoMjU1LDI1NSwyNTUsMCkpO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICBcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZS1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7IC8qIEZpeCBibGVlZGluZyAqL1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpIGluc2V0O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAuNSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMykgaW5zZXQ7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAuNSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMykgaW5zZXQ7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwgLjkpO1xuICAgIFxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuICBcbiAgLmJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGNvbG9yOiAjNTU1O1xuICB9XG4gIFxuICAuYnV0dG9uOmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDFweDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4zKSBpbnNldDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4zKSBpbnNldDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMykgaW5zZXQ7XG4gIH1cbiAgXG4gIC5idXR0b25bZGlzYWJsZWRdLCAuYnV0dG9uW2Rpc2FibGVkXTpob3ZlciwgLmJ1dHRvbltkaXNhYmxlZF06YWN0aXZle1xuICAgIGJvcmRlci1jb2xvcjogI2VhZWFlYTtcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIC8qIFVzdWFsbHksICFpbXBvcnRhbnQgc2hvdWxkIGJlIGF2b2lkZWQgYnV0IGhlcmUgaXQncyByZWFsbHkgbmVlZGVkIDopICovXG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYnV0dG9uLmxhcmdle1xuICAgIHBhZGRpbmc6IDEycHggMzBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIFxuICAuYnV0dG9uLmxhcmdlOmFjdGl2ZXtcbiAgICB0b3A6IDJweDtcbiAgfVxuICBcbiAgIiwiLmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgKmRpc3BsYXk6IGlubGluZTtcbiAgem9vbTogMTtcbiAgcGFkZGluZzogNnB4IDIwcHg7XG4gIG1hcmdpbjogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgZm9udDogYm9sZCAxM3B4IGFyaWFsLCBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6ICM1NTU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIC8qIEZpeCBibGVlZGluZyAqL1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSBpbnNldDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSBpbnNldDtcbiAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgaW5zZXQ7XG4gIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBjb2xvcjogIzU1NTtcbn1cblxuLmJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpIGluc2V0O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMykgaW5zZXQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMykgaW5zZXQ7XG59XG5cbi5idXR0b25bZGlzYWJsZWRdLCAuYnV0dG9uW2Rpc2FibGVkXTpob3ZlciwgLmJ1dHRvbltkaXNhYmxlZF06YWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZWFlYWVhO1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIGNvbG9yOiAjOTk5O1xuICAvKiBVc3VhbGx5LCAhaW1wb3J0YW50IHNob3VsZCBiZSBhdm9pZGVkIGJ1dCBoZXJlIGl0J3MgcmVhbGx5IG5lZWRlZCA6KSAqL1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbi5sYXJnZSB7XG4gIHBhZGRpbmc6IDEycHggMzBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmJ1dHRvbi5sYXJnZTphY3RpdmUge1xuICB0b3A6IDJweDtcbn1cblxuLmNvbnRhY3Qge1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cbi5jb250YWN0X190aXRsZSBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDAwMDA7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG59XG4uY29udGFjdF9faW1nX19jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jb250YWN0X19pbWdfX2NvbnRlbnQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jb250YWN0X19kZXNjcmlwdGlvbl9fdGl0bGUgcCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3Nzc3Nzc7XG59XG4uY29udGFjdF9fZGVzY3JpcHRpb25fX2NvbnRhY3Qge1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuLmNvbnRhY3RfX2Rlc2NyaXB0aW9uX19jb250YWN0X19lbWFpbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi5jb250YWN0X19kZXNjcmlwdGlvbl9fY29udGFjdF9fZW1haWwgaSB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBjb2xvcjogI2RlMWUyNjtcbiAgbWFyZ2luLXJpZ2h0OiAwLjZyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMC4ycmVtO1xufVxuLmNvbnRhY3RfX2Rlc2NyaXB0aW9uX19jb250YWN0X19lbWFpbCBwIHtcbiAgY29sb3I6ICNkZTFlMjY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBmb250LXNpemU6IDFyZW07XG59XG4uY29udGFjdF9fZGVzY3JpcHRpb25fX2NvbnRhY3RfX2VtYWlsIHNwYW4ge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xufSIsIkBpbXBvcnQgJ3NyYy9hc3NldHMvdmFyaWFibGVzJzsgXG5cbi5jb250YWN0IHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTtcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE1cHggcmdiYSgwLCAwLCAwLCAuNyk7XG4gICAgYm9yZGVyOiAycHggc29saWQgJGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xuXG4gICAgJl9fdGl0bGUge1xuICAgICAgICBoMSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkYmxhY2s7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19pbWcge1xuICAgICAgICAmX19jb250ZW50IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19kZXNjcmlwdGlvbiAge1xuICAgICAgICAmX190aXRsZSB7XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAvLyBjb2xvcjogJGRhcmstZ3JleTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZGFyay1ncmV5O1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJl9fY29udGFjdCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgICAgICAgJl9fZW1haWwge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRyZWQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLjZyZW07XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLjJyZW07XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC44NzVyZW07XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/culture/culture-details/culture-details.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/culture/culture-details/culture-details.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.button {\n  display: inline-block;\n  *display: inline;\n  zoom: 1;\n  padding: 6px 20px;\n  margin: 0;\n  cursor: pointer;\n  border: 1px solid #bbb;\n  overflow: visible;\n  font: bold 13px arial, helvetica, sans-serif;\n  text-decoration: none;\n  white-space: nowrap;\n  color: #555;\n  outline: none;\n  background-color: #ddd;\n  -webkit-transition: background-color 0.2s ease-out;\n  transition: background-color 0.2s ease-out;\n  background-clip: padding-box;\n  /* Fix bleeding */\n  border-radius: 3px;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3), 0 2px 2px -1px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.button:hover {\n  background-color: #eee;\n  color: #555;\n}\n\n.button:active {\n  background: #e9e9e9;\n  position: relative;\n  top: 1px;\n  text-shadow: none;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3) inset;\n}\n\n.button[disabled], .button[disabled]:hover, .button[disabled]:active {\n  border-color: #eaeaea;\n  background: #fafafa;\n  cursor: default;\n  position: static;\n  color: #999;\n  /* Usually, !important should be avoided but here it's really needed :) */\n  box-shadow: none !important;\n  text-shadow: none !important;\n}\n\n.button.large {\n  padding: 12px 30px;\n  text-transform: uppercase;\n}\n\n.button.large:active {\n  top: 2px;\n}\n\n.news {\n  border-radius: 0.5rem;\n  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.7);\n  border: 2px solid #000000;\n  border-radius: 0.5rem;\n}\n\nimg {\n  border-radius: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hc3NldHMvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2N1bHR1cmUvY3VsdHVyZS1kZXRhaWxzL2N1bHR1cmUtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hcHAvY3VsdHVyZS9jdWx0dXJlLWRldGFpbHMvY3VsdHVyZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNaSjs7QURlRTtFQUNFLHFCQUFBO0dBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBRUEsc0JBQUE7RUFRQSxrREFBQTtFQUlBLDBDQUFBO0VBQ0EsNEJBQUE7RUFBOEIsaUJBQUE7RUFHOUIsa0JBQUE7RUFHQSxpSEFBQTtFQUNBLDZDQUFBO0VBRUEsMkJBQUE7RUFDQSx5QkFBQTtFQUVBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ3BCSjs7QUR1QkU7RUFDRSxzQkFBQTtFQUNBLFdBQUE7QUNwQko7O0FEdUJFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUdBLDhDQUFBO0FDcEJKOztBRHVCRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUVBQUE7RUFHQSwyQkFBQTtFQUNBLDRCQUFBO0FDcEJKOztBRHVCRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUNwQko7O0FEdUJFO0VBQ0UsUUFBQTtBQ3BCSjs7QUMzRUE7RUFFSSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBRDZFSjs7QUMxRUE7RUFDSSxxQkFBQTtBRDZFSiIsImZpbGUiOiJzcmMvYXBwL2N1bHR1cmUvY3VsdHVyZS1kZXRhaWxzL2N1bHR1cmUtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gKiAqICogQ29sb3JzICogKiAqIFxuXG4kYmxhY2s6ICMwMDAwMDA7IFxuJGdyZXk6ICNlOGU4ZTg7IFxuJHdoaXRlOiAjZWVlZTsgXG4kcmVkOiAjZGUxZTI2O1xuJGRhcmstZ3JleTogIzc3Nzc3NztcbiRzaGFkb3c6IDBweCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIC43KTsgXG5cblxuLy8gQnV0dG9uc1xuXG4uYnV0dG9uOjotbW96LWZvY3VzLWlubmVye1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICAuYnV0dG9ue1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAqZGlzcGxheTogaW5saW5lO1xuICAgIHpvb206IDE7XG4gICAgcGFkZGluZzogNnB4IDIwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGZvbnQ6IGJvbGQgMTNweCBhcmlhbCwgaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbShyZ2JhKDI1NSwyNTUsMjU1LDEpKSwgdG8ocmdiYSgyNTUsMjU1LDI1NSwwKSkpO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94OyAvKiBGaXggYmxlZWRpbmcgKi9cbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgLjMpLCAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKSBpbnNldDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpIGluc2V0O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpIGluc2V0O1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsIC45KTtcbiAgICBcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbiAgXG4gIC5idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBjb2xvcjogIzU1NTtcbiAgfVxuICBcbiAgLmJ1dHRvbjphY3RpdmV7XG4gICAgYmFja2dyb3VuZDogI2U5ZTllOTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxcHg7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMykgaW5zZXQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMykgaW5zZXQ7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjMpIGluc2V0O1xuICB9XG4gIFxuICAuYnV0dG9uW2Rpc2FibGVkXSwgLmJ1dHRvbltkaXNhYmxlZF06aG92ZXIsIC5idXR0b25bZGlzYWJsZWRdOmFjdGl2ZXtcbiAgICBib3JkZXItY29sb3I6ICNlYWVhZWE7XG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBjb2xvcjogIzk5OTtcbiAgICAvKiBVc3VhbGx5LCAhaW1wb3J0YW50IHNob3VsZCBiZSBhdm9pZGVkIGJ1dCBoZXJlIGl0J3MgcmVhbGx5IG5lZWRlZCA6KSAqL1xuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJ1dHRvbi5sYXJnZXtcbiAgICBwYWRkaW5nOiAxMnB4IDMwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICBcbiAgLmJ1dHRvbi5sYXJnZTphY3RpdmV7XG4gICAgdG9wOiAycHg7XG4gIH1cbiAgXG4gICIsIi5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICpkaXNwbGF5OiBpbmxpbmU7XG4gIHpvb206IDE7XG4gIHBhZGRpbmc6IDZweCAyMHB4O1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JiYjtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGZvbnQ6IGJvbGQgMTNweCBhcmlhbCwgaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiAjNTU1O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAvKiBGaXggYmxlZWRpbmcgKi9cbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIC1tb3otYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgaW5zZXQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgaW5zZXQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIGluc2V0O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgY29sb3I6ICM1NTU7XG59XG5cbi5idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2U5ZTllOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDFweDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIC1tb3otYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zKSBpbnNldDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpIGluc2V0O1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpIGluc2V0O1xufVxuXG4uYnV0dG9uW2Rpc2FibGVkXSwgLmJ1dHRvbltkaXNhYmxlZF06aG92ZXIsIC5idXR0b25bZGlzYWJsZWRdOmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogI2VhZWFlYTtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBjb2xvcjogIzk5OTtcbiAgLyogVXN1YWxseSwgIWltcG9ydGFudCBzaG91bGQgYmUgYXZvaWRlZCBidXQgaGVyZSBpdCdzIHJlYWxseSBuZWVkZWQgOikgKi9cbiAgLW1vei1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24ubGFyZ2Uge1xuICBwYWRkaW5nOiAxMnB4IDMwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5idXR0b24ubGFyZ2U6YWN0aXZlIHtcbiAgdG9wOiAycHg7XG59XG5cbi5uZXdzIHtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBib3gtc2hhZG93OiAwcHggOHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG5cbmltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn0iLCJAaW1wb3J0ICdzcmMvYXNzZXRzL3ZhcmlhYmxlcyc7IFxuXG4ubmV3cyB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNXB4IHJnYmEoMCwgMCwgMCwgLjcpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbn0gIFxuXG5pbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/culture/culture-details/culture-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/culture/culture-details/culture-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: CultureDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CultureDetailsComponent", function() { return CultureDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_culture_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/culture.service */ "./src/app/services/culture.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let CultureDetailsComponent = class CultureDetailsComponent {
    constructor(cultureSerice, router) {
        this.cultureSerice = cultureSerice;
        this.router = router;
        this.cultures = [];
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
        this.cultureId = this.router.snapshot.params.id;
        this.getEconomyById();
    }
    getEconomyById() {
        return this.cultureSerice
            .getCultureById(this.cultureId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(data => {
            this.cultures = [data];
            console.log(this.cultures);
        }, err => console.log(err));
    }
    ;
};
CultureDetailsComponent.ctorParameters = () => [
    { type: src_app_services_culture_service__WEBPACK_IMPORTED_MODULE_2__["CultureService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
CultureDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-culture-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./culture-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/culture/culture-details/culture-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./culture-details.component.scss */ "./src/app/culture/culture-details/culture-details.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../news/news.component.scss */ "./src/app/news/news.component.scss")).default]
    })
], CultureDetailsComponent);



/***/ }),

/***/ "./src/app/culture/culture.component.scss":
/*!************************************************!*\
  !*** ./src/app/culture/culture.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.button {\n  display: inline-block;\n  *display: inline;\n  zoom: 1;\n  padding: 6px 20px;\n  margin: 0;\n  cursor: pointer;\n  border: 1px solid #bbb;\n  overflow: visible;\n  font: bold 13px arial, helvetica, sans-serif;\n  text-decoration: none;\n  white-space: nowrap;\n  color: #555;\n  outline: none;\n  background-color: #ddd;\n  -webkit-transition: background-color 0.2s ease-out;\n  transition: background-color 0.2s ease-out;\n  background-clip: padding-box;\n  /* Fix bleeding */\n  border-radius: 3px;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3), 0 2px 2px -1px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.button:hover {\n  background-color: #eee;\n  color: #555;\n}\n\n.button:active {\n  background: #e9e9e9;\n  position: relative;\n  top: 1px;\n  text-shadow: none;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3) inset;\n}\n\n.button[disabled], .button[disabled]:hover, .button[disabled]:active {\n  border-color: #eaeaea;\n  background: #fafafa;\n  cursor: default;\n  position: static;\n  color: #999;\n  /* Usually, !important should be avoided but here it's really needed :) */\n  box-shadow: none !important;\n  text-shadow: none !important;\n}\n\n.button.large {\n  padding: 12px 30px;\n  text-transform: uppercase;\n}\n\n.button.large:active {\n  top: 2px;\n}\n\n.news {\n  border-radius: 0.5rem;\n  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.7);\n  border: 2px solid #000000;\n  border-radius: 0.5rem;\n}\n\nimg {\n  border-radius: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hc3NldHMvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2N1bHR1cmUvY3VsdHVyZS5jb21wb25lbnQuc2NzcyIsIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hcHAvY3VsdHVyZS9jdWx0dXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNaSjs7QURlRTtFQUNFLHFCQUFBO0dBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBRUEsc0JBQUE7RUFRQSxrREFBQTtFQUlBLDBDQUFBO0VBQ0EsNEJBQUE7RUFBOEIsaUJBQUE7RUFHOUIsa0JBQUE7RUFHQSxpSEFBQTtFQUNBLDZDQUFBO0VBRUEsMkJBQUE7RUFDQSx5QkFBQTtFQUVBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ3BCSjs7QUR1QkU7RUFDRSxzQkFBQTtFQUNBLFdBQUE7QUNwQko7O0FEdUJFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUdBLDhDQUFBO0FDcEJKOztBRHVCRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUVBQUE7RUFHQSwyQkFBQTtFQUNBLDRCQUFBO0FDcEJKOztBRHVCRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUNwQko7O0FEdUJFO0VBQ0UsUUFBQTtBQ3BCSjs7QUMzRUE7RUFFSSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBRDZFSjs7QUMxRUE7RUFDSSxxQkFBQTtBRDZFSiIsImZpbGUiOiJzcmMvYXBwL2N1bHR1cmUvY3VsdHVyZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gKiAqICogQ29sb3JzICogKiAqIFxuXG4kYmxhY2s6ICMwMDAwMDA7IFxuJGdyZXk6ICNlOGU4ZTg7IFxuJHdoaXRlOiAjZWVlZTsgXG4kcmVkOiAjZGUxZTI2O1xuJGRhcmstZ3JleTogIzc3Nzc3NztcbiRzaGFkb3c6IDBweCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIC43KTsgXG5cblxuLy8gQnV0dG9uc1xuXG4uYnV0dG9uOjotbW96LWZvY3VzLWlubmVye1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICAuYnV0dG9ue1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAqZGlzcGxheTogaW5saW5lO1xuICAgIHpvb206IDE7XG4gICAgcGFkZGluZzogNnB4IDIwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGZvbnQ6IGJvbGQgMTNweCBhcmlhbCwgaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbShyZ2JhKDI1NSwyNTUsMjU1LDEpKSwgdG8ocmdiYSgyNTUsMjU1LDI1NSwwKSkpO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94OyAvKiBGaXggYmxlZWRpbmcgKi9cbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgLjMpLCAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKSBpbnNldDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpIGluc2V0O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpIGluc2V0O1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsIC45KTtcbiAgICBcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbiAgXG4gIC5idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBjb2xvcjogIzU1NTtcbiAgfVxuICBcbiAgLmJ1dHRvbjphY3RpdmV7XG4gICAgYmFja2dyb3VuZDogI2U5ZTllOTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxcHg7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMykgaW5zZXQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMykgaW5zZXQ7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjMpIGluc2V0O1xuICB9XG4gIFxuICAuYnV0dG9uW2Rpc2FibGVkXSwgLmJ1dHRvbltkaXNhYmxlZF06aG92ZXIsIC5idXR0b25bZGlzYWJsZWRdOmFjdGl2ZXtcbiAgICBib3JkZXItY29sb3I6ICNlYWVhZWE7XG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBjb2xvcjogIzk5OTtcbiAgICAvKiBVc3VhbGx5LCAhaW1wb3J0YW50IHNob3VsZCBiZSBhdm9pZGVkIGJ1dCBoZXJlIGl0J3MgcmVhbGx5IG5lZWRlZCA6KSAqL1xuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJ1dHRvbi5sYXJnZXtcbiAgICBwYWRkaW5nOiAxMnB4IDMwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICBcbiAgLmJ1dHRvbi5sYXJnZTphY3RpdmV7XG4gICAgdG9wOiAycHg7XG4gIH1cbiAgXG4gICIsIi5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICpkaXNwbGF5OiBpbmxpbmU7XG4gIHpvb206IDE7XG4gIHBhZGRpbmc6IDZweCAyMHB4O1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JiYjtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGZvbnQ6IGJvbGQgMTNweCBhcmlhbCwgaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiAjNTU1O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAvKiBGaXggYmxlZWRpbmcgKi9cbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIC1tb3otYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgaW5zZXQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgaW5zZXQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIGluc2V0O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgY29sb3I6ICM1NTU7XG59XG5cbi5idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2U5ZTllOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDFweDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIC1tb3otYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zKSBpbnNldDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpIGluc2V0O1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpIGluc2V0O1xufVxuXG4uYnV0dG9uW2Rpc2FibGVkXSwgLmJ1dHRvbltkaXNhYmxlZF06aG92ZXIsIC5idXR0b25bZGlzYWJsZWRdOmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogI2VhZWFlYTtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBjb2xvcjogIzk5OTtcbiAgLyogVXN1YWxseSwgIWltcG9ydGFudCBzaG91bGQgYmUgYXZvaWRlZCBidXQgaGVyZSBpdCdzIHJlYWxseSBuZWVkZWQgOikgKi9cbiAgLW1vei1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24ubGFyZ2Uge1xuICBwYWRkaW5nOiAxMnB4IDMwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5idXR0b24ubGFyZ2U6YWN0aXZlIHtcbiAgdG9wOiAycHg7XG59XG5cbi5uZXdzIHtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBib3gtc2hhZG93OiAwcHggOHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG5cbmltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn0iLCJAaW1wb3J0ICdzcmMvYXNzZXRzL3ZhcmlhYmxlcyc7IFxuXG4ubmV3cyB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNXB4IHJnYmEoMCwgMCwgMCwgLjcpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbn0gIFxuXG5pbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/culture/culture.component.ts":
/*!**********************************************!*\
  !*** ./src/app/culture/culture.component.ts ***!
  \**********************************************/
/*! exports provided: CultureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CultureComponent", function() { return CultureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let CultureComponent = class CultureComponent {
    constructor(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.allCulutre = [];
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.getAllCulture();
    }
    getAllCulture() {
        this.adminService
            .getCulture()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(data => {
            console.log(data);
            this.allCulutre = data['cultureData'].reverse();
        }, err => console.log(err));
    }
    ;
    routeToCulture(id) {
        console.log('In route');
        this.router.navigate([`/culutre-lifystyle/${id}`]);
    }
};
CultureComponent.ctorParameters = () => [
    { type: _services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
CultureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-culture',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./culture.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/culture/culture.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./culture.component.scss */ "./src/app/culture/culture.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../news/news.component.scss */ "./src/app/news/news.component.scss")).default]
    })
], CultureComponent);



/***/ }),

/***/ "./src/app/economy/economy-details/economy-details.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/economy/economy-details/economy-details.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.button {\n  display: inline-block;\n  *display: inline;\n  zoom: 1;\n  padding: 6px 20px;\n  margin: 0;\n  cursor: pointer;\n  border: 1px solid #bbb;\n  overflow: visible;\n  font: bold 13px arial, helvetica, sans-serif;\n  text-decoration: none;\n  white-space: nowrap;\n  color: #555;\n  outline: none;\n  background-color: #ddd;\n  -webkit-transition: background-color 0.2s ease-out;\n  transition: background-color 0.2s ease-out;\n  background-clip: padding-box;\n  /* Fix bleeding */\n  border-radius: 3px;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3), 0 2px 2px -1px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.button:hover {\n  background-color: #eee;\n  color: #555;\n}\n\n.button:active {\n  background: #e9e9e9;\n  position: relative;\n  top: 1px;\n  text-shadow: none;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3) inset;\n}\n\n.button[disabled], .button[disabled]:hover, .button[disabled]:active {\n  border-color: #eaeaea;\n  background: #fafafa;\n  cursor: default;\n  position: static;\n  color: #999;\n  /* Usually, !important should be avoided but here it's really needed :) */\n  box-shadow: none !important;\n  text-shadow: none !important;\n}\n\n.button.large {\n  padding: 12px 30px;\n  text-transform: uppercase;\n}\n\n.button.large:active {\n  top: 2px;\n}\n\n.news {\n  border-radius: 0.5rem;\n  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.7);\n  border: 2px solid #000000;\n  border-radius: 0.5rem;\n}\n\nimg {\n  border-radius: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hc3NldHMvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2Vjb25vbXkvZWNvbm9teS1kZXRhaWxzL2Vjb25vbXktZGV0YWlscy5jb21wb25lbnQuc2NzcyIsIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hcHAvZWNvbm9teS9lY29ub215LWRldGFpbHMvZWNvbm9teS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNaSjs7QURlRTtFQUNFLHFCQUFBO0dBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBRUEsc0JBQUE7RUFRQSxrREFBQTtFQUlBLDBDQUFBO0VBQ0EsNEJBQUE7RUFBOEIsaUJBQUE7RUFHOUIsa0JBQUE7RUFHQSxpSEFBQTtFQUNBLDZDQUFBO0VBRUEsMkJBQUE7RUFDQSx5QkFBQTtFQUVBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ3BCSjs7QUR1QkU7RUFDRSxzQkFBQTtFQUNBLFdBQUE7QUNwQko7O0FEdUJFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUdBLDhDQUFBO0FDcEJKOztBRHVCRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUVBQUE7RUFHQSwyQkFBQTtFQUNBLDRCQUFBO0FDcEJKOztBRHVCRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUNwQko7O0FEdUJFO0VBQ0UsUUFBQTtBQ3BCSjs7QUMzRUE7RUFFSSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBRDZFSjs7QUMxRUE7RUFDSSxxQkFBQTtBRDZFSiIsImZpbGUiOiJzcmMvYXBwL2Vjb25vbXkvZWNvbm9teS1kZXRhaWxzL2Vjb25vbXktZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gKiAqICogQ29sb3JzICogKiAqIFxuXG4kYmxhY2s6ICMwMDAwMDA7IFxuJGdyZXk6ICNlOGU4ZTg7IFxuJHdoaXRlOiAjZWVlZTsgXG4kcmVkOiAjZGUxZTI2O1xuJGRhcmstZ3JleTogIzc3Nzc3NztcbiRzaGFkb3c6IDBweCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIC43KTsgXG5cblxuLy8gQnV0dG9uc1xuXG4uYnV0dG9uOjotbW96LWZvY3VzLWlubmVye1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICAuYnV0dG9ue1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAqZGlzcGxheTogaW5saW5lO1xuICAgIHpvb206IDE7XG4gICAgcGFkZGluZzogNnB4IDIwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGZvbnQ6IGJvbGQgMTNweCBhcmlhbCwgaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbShyZ2JhKDI1NSwyNTUsMjU1LDEpKSwgdG8ocmdiYSgyNTUsMjU1LDI1NSwwKSkpO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94OyAvKiBGaXggYmxlZWRpbmcgKi9cbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgLjMpLCAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKSBpbnNldDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpIGluc2V0O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpIGluc2V0O1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsIC45KTtcbiAgICBcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbiAgXG4gIC5idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBjb2xvcjogIzU1NTtcbiAgfVxuICBcbiAgLmJ1dHRvbjphY3RpdmV7XG4gICAgYmFja2dyb3VuZDogI2U5ZTllOTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxcHg7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMykgaW5zZXQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMykgaW5zZXQ7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjMpIGluc2V0O1xuICB9XG4gIFxuICAuYnV0dG9uW2Rpc2FibGVkXSwgLmJ1dHRvbltkaXNhYmxlZF06aG92ZXIsIC5idXR0b25bZGlzYWJsZWRdOmFjdGl2ZXtcbiAgICBib3JkZXItY29sb3I6ICNlYWVhZWE7XG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBjb2xvcjogIzk5OTtcbiAgICAvKiBVc3VhbGx5LCAhaW1wb3J0YW50IHNob3VsZCBiZSBhdm9pZGVkIGJ1dCBoZXJlIGl0J3MgcmVhbGx5IG5lZWRlZCA6KSAqL1xuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJ1dHRvbi5sYXJnZXtcbiAgICBwYWRkaW5nOiAxMnB4IDMwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICBcbiAgLmJ1dHRvbi5sYXJnZTphY3RpdmV7XG4gICAgdG9wOiAycHg7XG4gIH1cbiAgXG4gICIsIi5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICpkaXNwbGF5OiBpbmxpbmU7XG4gIHpvb206IDE7XG4gIHBhZGRpbmc6IDZweCAyMHB4O1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JiYjtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGZvbnQ6IGJvbGQgMTNweCBhcmlhbCwgaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiAjNTU1O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAvKiBGaXggYmxlZWRpbmcgKi9cbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIC1tb3otYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgaW5zZXQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgaW5zZXQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIGluc2V0O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgY29sb3I6ICM1NTU7XG59XG5cbi5idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2U5ZTllOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDFweDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIC1tb3otYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zKSBpbnNldDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpIGluc2V0O1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpIGluc2V0O1xufVxuXG4uYnV0dG9uW2Rpc2FibGVkXSwgLmJ1dHRvbltkaXNhYmxlZF06aG92ZXIsIC5idXR0b25bZGlzYWJsZWRdOmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogI2VhZWFlYTtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBjb2xvcjogIzk5OTtcbiAgLyogVXN1YWxseSwgIWltcG9ydGFudCBzaG91bGQgYmUgYXZvaWRlZCBidXQgaGVyZSBpdCdzIHJlYWxseSBuZWVkZWQgOikgKi9cbiAgLW1vei1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24ubGFyZ2Uge1xuICBwYWRkaW5nOiAxMnB4IDMwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5idXR0b24ubGFyZ2U6YWN0aXZlIHtcbiAgdG9wOiAycHg7XG59XG5cbi5uZXdzIHtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBib3gtc2hhZG93OiAwcHggOHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG5cbmltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn0iLCJAaW1wb3J0ICdzcmMvYXNzZXRzL3ZhcmlhYmxlcyc7IFxuXG4ubmV3cyB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNXB4IHJnYmEoMCwgMCwgMCwgLjcpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbn0gIFxuXG5pbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/economy/economy-details/economy-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/economy/economy-details/economy-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: EconomyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EconomyDetailsComponent", function() { return EconomyDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_economy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/economy.service */ "./src/app/services/economy.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let EconomyDetailsComponent = class EconomyDetailsComponent {
    constructor(economyService, router) {
        this.economyService = economyService;
        this.router = router;
        this.economies = [];
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
        this.economyID = this.router.snapshot.params.id;
        this.getEconomyById();
    }
    getEconomyById() {
        return this.economyService
            .getEconomyById(this.economyID)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(data => {
            this.economies = [data];
            console.log(this.economies);
        }, err => console.log(err));
    }
    ;
};
EconomyDetailsComponent.ctorParameters = () => [
    { type: src_app_services_economy_service__WEBPACK_IMPORTED_MODULE_2__["EconomyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
EconomyDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-economy-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./economy-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/economy/economy-details/economy-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./economy-details.component.scss */ "./src/app/economy/economy-details/economy-details.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../news/news.component.scss */ "./src/app/news/news.component.scss")).default]
    })
], EconomyDetailsComponent);



/***/ }),

/***/ "./src/app/economy/economy.component.scss":
/*!************************************************!*\
  !*** ./src/app/economy/economy.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.button {\n  display: inline-block;\n  *display: inline;\n  zoom: 1;\n  padding: 6px 20px;\n  margin: 0;\n  cursor: pointer;\n  border: 1px solid #bbb;\n  overflow: visible;\n  font: bold 13px arial, helvetica, sans-serif;\n  text-decoration: none;\n  white-space: nowrap;\n  color: #555;\n  outline: none;\n  background-color: #ddd;\n  -webkit-transition: background-color 0.2s ease-out;\n  transition: background-color 0.2s ease-out;\n  background-clip: padding-box;\n  /* Fix bleeding */\n  border-radius: 3px;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3), 0 2px 2px -1px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.button:hover {\n  background-color: #eee;\n  color: #555;\n}\n\n.button:active {\n  background: #e9e9e9;\n  position: relative;\n  top: 1px;\n  text-shadow: none;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3) inset;\n}\n\n.button[disabled], .button[disabled]:hover, .button[disabled]:active {\n  border-color: #eaeaea;\n  background: #fafafa;\n  cursor: default;\n  position: static;\n  color: #999;\n  /* Usually, !important should be avoided but here it's really needed :) */\n  box-shadow: none !important;\n  text-shadow: none !important;\n}\n\n.button.large {\n  padding: 12px 30px;\n  text-transform: uppercase;\n}\n\n.button.large:active {\n  top: 2px;\n}\n\n.news {\n  border-radius: 0.5rem;\n  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.7);\n  border: 2px solid #000000;\n  border-radius: 0.5rem;\n}\n\nimg {\n  border-radius: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hc3NldHMvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2Vjb25vbXkvZWNvbm9teS5jb21wb25lbnQuc2NzcyIsIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hcHAvZWNvbm9teS9lY29ub215LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNaSjs7QURlRTtFQUNFLHFCQUFBO0dBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBRUEsc0JBQUE7RUFRQSxrREFBQTtFQUlBLDBDQUFBO0VBQ0EsNEJBQUE7RUFBOEIsaUJBQUE7RUFHOUIsa0JBQUE7RUFHQSxpSEFBQTtFQUNBLDZDQUFBO0VBRUEsMkJBQUE7RUFDQSx5QkFBQTtFQUVBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ3BCSjs7QUR1QkU7RUFDRSxzQkFBQTtFQUNBLFdBQUE7QUNwQko7O0FEdUJFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUdBLDhDQUFBO0FDcEJKOztBRHVCRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUVBQUE7RUFHQSwyQkFBQTtFQUNBLDRCQUFBO0FDcEJKOztBRHVCRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUNwQko7O0FEdUJFO0VBQ0UsUUFBQTtBQ3BCSjs7QUMzRUE7RUFFSSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBRDZFSjs7QUMxRUE7RUFDSSxxQkFBQTtBRDZFSiIsImZpbGUiOiJzcmMvYXBwL2Vjb25vbXkvZWNvbm9teS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gKiAqICogQ29sb3JzICogKiAqIFxuXG4kYmxhY2s6ICMwMDAwMDA7IFxuJGdyZXk6ICNlOGU4ZTg7IFxuJHdoaXRlOiAjZWVlZTsgXG4kcmVkOiAjZGUxZTI2O1xuJGRhcmstZ3JleTogIzc3Nzc3NztcbiRzaGFkb3c6IDBweCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIC43KTsgXG5cblxuLy8gQnV0dG9uc1xuXG4uYnV0dG9uOjotbW96LWZvY3VzLWlubmVye1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICAuYnV0dG9ue1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAqZGlzcGxheTogaW5saW5lO1xuICAgIHpvb206IDE7XG4gICAgcGFkZGluZzogNnB4IDIwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGZvbnQ6IGJvbGQgMTNweCBhcmlhbCwgaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbShyZ2JhKDI1NSwyNTUsMjU1LDEpKSwgdG8ocmdiYSgyNTUsMjU1LDI1NSwwKSkpO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94OyAvKiBGaXggYmxlZWRpbmcgKi9cbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgLjMpLCAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKSBpbnNldDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpIGluc2V0O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpIGluc2V0O1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsIC45KTtcbiAgICBcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbiAgXG4gIC5idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBjb2xvcjogIzU1NTtcbiAgfVxuICBcbiAgLmJ1dHRvbjphY3RpdmV7XG4gICAgYmFja2dyb3VuZDogI2U5ZTllOTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxcHg7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMykgaW5zZXQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMykgaW5zZXQ7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjMpIGluc2V0O1xuICB9XG4gIFxuICAuYnV0dG9uW2Rpc2FibGVkXSwgLmJ1dHRvbltkaXNhYmxlZF06aG92ZXIsIC5idXR0b25bZGlzYWJsZWRdOmFjdGl2ZXtcbiAgICBib3JkZXItY29sb3I6ICNlYWVhZWE7XG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBjb2xvcjogIzk5OTtcbiAgICAvKiBVc3VhbGx5LCAhaW1wb3J0YW50IHNob3VsZCBiZSBhdm9pZGVkIGJ1dCBoZXJlIGl0J3MgcmVhbGx5IG5lZWRlZCA6KSAqL1xuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJ1dHRvbi5sYXJnZXtcbiAgICBwYWRkaW5nOiAxMnB4IDMwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICBcbiAgLmJ1dHRvbi5sYXJnZTphY3RpdmV7XG4gICAgdG9wOiAycHg7XG4gIH1cbiAgXG4gICIsIi5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICpkaXNwbGF5OiBpbmxpbmU7XG4gIHpvb206IDE7XG4gIHBhZGRpbmc6IDZweCAyMHB4O1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JiYjtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGZvbnQ6IGJvbGQgMTNweCBhcmlhbCwgaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiAjNTU1O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAvKiBGaXggYmxlZWRpbmcgKi9cbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIC1tb3otYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgaW5zZXQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgaW5zZXQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIGluc2V0O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgY29sb3I6ICM1NTU7XG59XG5cbi5idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2U5ZTllOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDFweDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIC1tb3otYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zKSBpbnNldDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpIGluc2V0O1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpIGluc2V0O1xufVxuXG4uYnV0dG9uW2Rpc2FibGVkXSwgLmJ1dHRvbltkaXNhYmxlZF06aG92ZXIsIC5idXR0b25bZGlzYWJsZWRdOmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogI2VhZWFlYTtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBjb2xvcjogIzk5OTtcbiAgLyogVXN1YWxseSwgIWltcG9ydGFudCBzaG91bGQgYmUgYXZvaWRlZCBidXQgaGVyZSBpdCdzIHJlYWxseSBuZWVkZWQgOikgKi9cbiAgLW1vei1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24ubGFyZ2Uge1xuICBwYWRkaW5nOiAxMnB4IDMwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5idXR0b24ubGFyZ2U6YWN0aXZlIHtcbiAgdG9wOiAycHg7XG59XG5cbi5uZXdzIHtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBib3gtc2hhZG93OiAwcHggOHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG5cbmltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn0iLCJAaW1wb3J0ICdzcmMvYXNzZXRzL3ZhcmlhYmxlcyc7IFxuXG4ubmV3cyB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNXB4IHJnYmEoMCwgMCwgMCwgLjcpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbn1cblxuaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/economy/economy.component.ts":
/*!**********************************************!*\
  !*** ./src/app/economy/economy.component.ts ***!
  \**********************************************/
/*! exports provided: EconomyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EconomyComponent", function() { return EconomyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let EconomyComponent = class EconomyComponent {
    constructor(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.allEconomy = [];
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
        this.getAllEconomy();
    }
    getAllEconomy() {
        this.adminService
            .getAllEconomy()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(data => {
            console.log(data);
            this.allEconomy = data['economyData'].reverse();
        }, err => console.log(err));
    }
    ;
    routeToEconomyDetails(id) {
        console.log('In route');
        this.router.navigate([`/economy/${id}`]);
    }
};
EconomyComponent.ctorParameters = () => [
    { type: _services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
EconomyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-economy',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./economy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/economy/economy.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./economy.component.scss */ "./src/app/economy/economy.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../news/news.component.scss */ "./src/app/news/news.component.scss")).default]
    })
], EconomyComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n  background: #485563;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: -webkit-gradient(linear, left top, right top, from(#485563), to(#29323c));\n  background: linear-gradient(to right, #485563, #29323c);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  width: 100%;\n  height: 5rem;\n}\n\n.image {\n  width: 8rem;\n  height: 4rem;\n}\n\n.image img {\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\np {\n  color: white;\n  letter-spacing: 0.3rem;\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFBO0VBQXFCLDhCQUFBO0VBQzRDLCtCQUFBO0VBQ2pFLHFGQUFBO0VBQUEsdURBQUE7RUFBeUQscUVBQUE7RUFDekQsV0FBQTtFQUNBLFlBQUE7QUNHSjs7QURBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDR1I7O0FEQ0E7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuXG4gICAgYmFja2dyb3VuZDogIzQ4NTU2MzsgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNDg1NTYzLCAjMjkzMjNjKTsgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0ODU1NjMsICMyOTMyM2MpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1cmVtOyBcbn1cblxuLmltYWdlIHtcbiAgICB3aWR0aDogOHJlbTtcbiAgICBoZWlnaHQ6IDRyZW07XG5cbiAgICBpbWcge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbn1cbiAgXG5wIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4zcmVtO1xuICAgIGZvbnQtc2l6ZTogLjg3NXJlbTtcbn0iLCIuZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogIzQ4NTU2MztcbiAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzQ4NTU2MywgIzI5MzIzYyk7XG4gIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzQ4NTU2MywgIzI5MzIzYyk7XG4gIC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNXJlbTtcbn1cblxuLmltYWdlIHtcbiAgd2lkdGg6IDhyZW07XG4gIGhlaWdodDogNHJlbTtcbn1cbi5pbWFnZSBpbWcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5wIHtcbiAgY29sb3I6IHdoaXRlO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcmVtO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.button {\n  display: inline-block;\n  *display: inline;\n  zoom: 1;\n  padding: 6px 20px;\n  margin: 0;\n  cursor: pointer;\n  border: 1px solid #bbb;\n  overflow: visible;\n  font: bold 13px arial, helvetica, sans-serif;\n  text-decoration: none;\n  white-space: nowrap;\n  color: #555;\n  outline: none;\n  background-color: #ddd;\n  -webkit-transition: background-color 0.2s ease-out;\n  transition: background-color 0.2s ease-out;\n  background-clip: padding-box;\n  /* Fix bleeding */\n  border-radius: 3px;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3), 0 2px 2px -1px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.button:hover {\n  background-color: #eee;\n  color: #555;\n}\n\n.button:active {\n  background: #e9e9e9;\n  position: relative;\n  top: 1px;\n  text-shadow: none;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3) inset;\n}\n\n.button[disabled], .button[disabled]:hover, .button[disabled]:active {\n  border-color: #eaeaea;\n  background: #fafafa;\n  cursor: default;\n  position: static;\n  color: #999;\n  /* Usually, !important should be avoided but here it's really needed :) */\n  box-shadow: none !important;\n  text-shadow: none !important;\n}\n\n.button.large {\n  padding: 12px 30px;\n  text-transform: uppercase;\n}\n\n.button.large:active {\n  top: 2px;\n}\n\n.header {\n  border-bottom: 3px solid black;\n}\n\n.header__headline {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n@media (max-width: 992px) {\n  .header__headline {\n    display: none;\n  }\n}\n\n.header__headline p {\n  font-weight: bolder;\n  color: #777777;\n  font-size: 1.2rem;\n  margin: 0;\n  font-family: \"Lora\", serif;\n}\n\n.header__headline span {\n  font-size: 0.875rem;\n  color: #777777;\n}\n\n.header__image {\n  height: 9rem;\n}\n\n.header__image img {\n  width: 100%;\n  height: 100%;\n}\n\n.header__image h4 {\n  font-family: \"Lincoln\";\n  font-size: 6.2rem;\n}\n\n@media (max-width: 585px) {\n  .header__image h4 {\n    font-size: 4rem;\n  }\n}\n\n@media (max-width: 320px) {\n  .header__image h4 {\n    font-size: 3.4rem;\n  }\n}\n\n@media (max-width: 360px) {\n  .header__image h4 {\n    font-size: 3.4rem;\n  }\n}\n\n.header__image .red {\n  color: #de1e26;\n  font-size: 6.2rem;\n}\n\n@media (max-width: 585px) {\n  .header__image .red {\n    font-size: 4rem;\n  }\n}\n\n@media (max-width: 320px) {\n  .header__image .red {\n    font-size: 3.4rem;\n  }\n}\n\n@media (max-width: 360px) {\n  .header__image .red {\n    font-size: 3.4rem;\n  }\n}\n\n.header__follow {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.header__follow p {\n  font-weight: bold;\n  color: #777777;\n  font-size: 0.875rem;\n  margin: 0;\n  padding: 0.4rem;\n}\n\n.header__follow .social {\n  color: #000000;\n  font-size: 0.775rem;\n  font-weight: bold;\n  padding: 0.4rem;\n  text-decoration: none;\n  border: 1px solid transparent;\n}\n\n.header__follow .social:hover {\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  border: 1px solid #000000;\n}\n\n.header__follow span {\n  color: #000000;\n  font-size: 0.775rem;\n  padding-right: 0.4rem;\n  font-weight: bold;\n  cursor: pointer;\n  padding: 0.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hc3NldHMvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9veHltb25zdGVyL0Rlc2t0b3AvbWVzc2VuZ2VyLW1hZ2F6aW5lL2NsaWVudC9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ1pKOztBRGVFO0VBQ0UscUJBQUE7R0FDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFFQSxzQkFBQTtFQVFBLGtEQUFBO0VBSUEsMENBQUE7RUFDQSw0QkFBQTtFQUE4QixpQkFBQTtFQUc5QixrQkFBQTtFQUdBLGlIQUFBO0VBQ0EsNkNBQUE7RUFFQSwyQkFBQTtFQUNBLHlCQUFBO0VBRUEsc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDcEJKOztBRHVCRTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtBQ3BCSjs7QUR1QkU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBR0EsOENBQUE7QUNwQko7O0FEdUJFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5RUFBQTtFQUdBLDJCQUFBO0VBQ0EsNEJBQUE7QUNwQko7O0FEdUJFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQ3BCSjs7QUR1QkU7RUFDRSxRQUFBO0FDcEJKOztBQzNFQTtFQStHSSw4QkFBQTtBRGhDSjs7QUM5RUk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FEZ0ZSOztBQzlFUTtFQUxKO0lBTVEsYUFBQTtFRGlGVjtBQUNGOztBQ2hGUTtFQUNJLG1CQUFBO0VBQ0EsY0ZOQTtFRU9BLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0FEa0ZaOztBQzlFUTtFQUNJLG1CQUFBO0VBQ0EsY0ZmQTtBQytGWjs7QUMzRUk7RUFDSSxZQUFBO0FENkVSOztBQzNFUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FENkVaOztBQzFFUTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7QUQ0RVo7O0FDMUVZO0VBSko7SUFLUSxlQUFBO0VENkVkO0FBQ0Y7O0FDNUVZO0VBUEo7SUFRUSxpQkFBQTtFRCtFZDtBQUNGOztBQzlFWTtFQVZKO0lBV1EsaUJBQUE7RURpRmQ7QUFDRjs7QUM3RVE7RUFDSSxjRjlDTjtFRStDTSxpQkFBQTtBRCtFWjs7QUM3RVk7RUFKSjtJQUtRLGVBQUE7RURnRmQ7QUFDRjs7QUMvRVk7RUFQSjtJQVFRLGlCQUFBO0VEa0ZkO0FBQ0Y7O0FDakZZO0VBVko7SUFXUSxpQkFBQTtFRG9GZDtBQUNGOztBQzlFSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QURnRlI7O0FDOUVRO0VBQ0ksaUJBQUE7RUFDQSxjRnJFQTtFRXNFQSxtQkFBQTtFQUNBLFNBQUE7RUFFQSxlQUFBO0FEK0VaOztBQzFFUTtFQUNJLGNGbkZKO0VFb0ZJLG1CQUFBO0VBRUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBRDJFWjs7QUN2RVk7RUFDSSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EseUJBQUE7QUR5RWhCOztBQ3JFUTtFQUNJLGNGcEdKO0VFcUdJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FEdUVaIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gKiAqICogQ29sb3JzICogKiAqIFxuXG4kYmxhY2s6ICMwMDAwMDA7IFxuJGdyZXk6ICNlOGU4ZTg7IFxuJHdoaXRlOiAjZWVlZTsgXG4kcmVkOiAjZGUxZTI2O1xuJGRhcmstZ3JleTogIzc3Nzc3NztcbiRzaGFkb3c6IDBweCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIC43KTsgXG5cblxuLy8gQnV0dG9uc1xuXG4uYnV0dG9uOjotbW96LWZvY3VzLWlubmVye1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICAuYnV0dG9ue1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAqZGlzcGxheTogaW5saW5lO1xuICAgIHpvb206IDE7XG4gICAgcGFkZGluZzogNnB4IDIwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGZvbnQ6IGJvbGQgMTNweCBhcmlhbCwgaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbShyZ2JhKDI1NSwyNTUsMjU1LDEpKSwgdG8ocmdiYSgyNTUsMjU1LDI1NSwwKSkpO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94OyAvKiBGaXggYmxlZWRpbmcgKi9cbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgLjMpLCAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKSBpbnNldDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpIGluc2V0O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpIGluc2V0O1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsIC45KTtcbiAgICBcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbiAgXG4gIC5idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBjb2xvcjogIzU1NTtcbiAgfVxuICBcbiAgLmJ1dHRvbjphY3RpdmV7XG4gICAgYmFja2dyb3VuZDogI2U5ZTllOTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxcHg7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMykgaW5zZXQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMykgaW5zZXQ7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjMpIGluc2V0O1xuICB9XG4gIFxuICAuYnV0dG9uW2Rpc2FibGVkXSwgLmJ1dHRvbltkaXNhYmxlZF06aG92ZXIsIC5idXR0b25bZGlzYWJsZWRdOmFjdGl2ZXtcbiAgICBib3JkZXItY29sb3I6ICNlYWVhZWE7XG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBjb2xvcjogIzk5OTtcbiAgICAvKiBVc3VhbGx5LCAhaW1wb3J0YW50IHNob3VsZCBiZSBhdm9pZGVkIGJ1dCBoZXJlIGl0J3MgcmVhbGx5IG5lZWRlZCA6KSAqL1xuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJ1dHRvbi5sYXJnZXtcbiAgICBwYWRkaW5nOiAxMnB4IDMwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICBcbiAgLmJ1dHRvbi5sYXJnZTphY3RpdmV7XG4gICAgdG9wOiAycHg7XG4gIH1cbiAgXG4gICIsIi5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICpkaXNwbGF5OiBpbmxpbmU7XG4gIHpvb206IDE7XG4gIHBhZGRpbmc6IDZweCAyMHB4O1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JiYjtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGZvbnQ6IGJvbGQgMTNweCBhcmlhbCwgaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiAjNTU1O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAvKiBGaXggYmxlZWRpbmcgKi9cbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIC1tb3otYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgaW5zZXQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgaW5zZXQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIGluc2V0O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgY29sb3I6ICM1NTU7XG59XG5cbi5idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2U5ZTllOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDFweDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIC1tb3otYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zKSBpbnNldDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpIGluc2V0O1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpIGluc2V0O1xufVxuXG4uYnV0dG9uW2Rpc2FibGVkXSwgLmJ1dHRvbltkaXNhYmxlZF06aG92ZXIsIC5idXR0b25bZGlzYWJsZWRdOmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogI2VhZWFlYTtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBjb2xvcjogIzk5OTtcbiAgLyogVXN1YWxseSwgIWltcG9ydGFudCBzaG91bGQgYmUgYXZvaWRlZCBidXQgaGVyZSBpdCdzIHJlYWxseSBuZWVkZWQgOikgKi9cbiAgLW1vei1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24ubGFyZ2Uge1xuICBwYWRkaW5nOiAxMnB4IDMwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5idXR0b24ubGFyZ2U6YWN0aXZlIHtcbiAgdG9wOiAycHg7XG59XG5cbi5oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XG59XG4uaGVhZGVyX19oZWFkbGluZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5oZWFkZXJfX2hlYWRsaW5lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uaGVhZGVyX19oZWFkbGluZSBwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgY29sb3I6ICM3Nzc3Nzc7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG59XG4uaGVhZGVyX19oZWFkbGluZSBzcGFuIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgY29sb3I6ICM3Nzc3Nzc7XG59XG4uaGVhZGVyX19pbWFnZSB7XG4gIGhlaWdodDogOXJlbTtcbn1cbi5oZWFkZXJfX2ltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaGVhZGVyX19pbWFnZSBoNCB7XG4gIGZvbnQtZmFtaWx5OiBcIkxpbmNvbG5cIjtcbiAgZm9udC1zaXplOiA2LjJyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTg1cHgpIHtcbiAgLmhlYWRlcl9faW1hZ2UgaDQge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC5oZWFkZXJfX2ltYWdlIGg0IHtcbiAgICBmb250LXNpemU6IDMuNHJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC5oZWFkZXJfX2ltYWdlIGg0IHtcbiAgICBmb250LXNpemU6IDMuNHJlbTtcbiAgfVxufVxuLmhlYWRlcl9faW1hZ2UgLnJlZCB7XG4gIGNvbG9yOiAjZGUxZTI2O1xuICBmb250LXNpemU6IDYuMnJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODVweCkge1xuICAuaGVhZGVyX19pbWFnZSAucmVkIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xuICAuaGVhZGVyX19pbWFnZSAucmVkIHtcbiAgICBmb250LXNpemU6IDMuNHJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC5oZWFkZXJfX2ltYWdlIC5yZWQge1xuICAgIGZvbnQtc2l6ZTogMy40cmVtO1xuICB9XG59XG4uaGVhZGVyX19mb2xsb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5oZWFkZXJfX2ZvbGxvdyBwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNzc3Nzc3O1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAuNHJlbTtcbn1cbi5oZWFkZXJfX2ZvbGxvdyAuc29jaWFsIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMC43NzVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAwLjRyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4uaGVhZGVyX19mb2xsb3cgLnNvY2lhbDpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG59XG4uaGVhZGVyX19mb2xsb3cgc3BhbiB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDAuNzc1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDAuNHJlbTtcbn0iLCJAaW1wb3J0ICdzcmMvYXNzZXRzL3ZhcmlhYmxlcyc7IFxuXG4uaGVhZGVyIHtcbiAgICAmX19oZWFkbGluZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6OTkycHgpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICAgICAgY29sb3I6ICRkYXJrLWdyZXk7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xuXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAuODc1cmVtO1xuICAgICAgICAgICAgY29sb3I6ICRkYXJrLWdyZXk7XG4gICAgICAgICAgICAvLyBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAmX19pbWFnZSB7XG4gICAgICAgIGhlaWdodDogOXJlbTtcbiAgICAgICAgLy8gd2lkdGg6IDEwcmVtO1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBoNCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xpbmNvbG4nO1xuICAgICAgICAgICAgZm9udC1zaXplOiA2LjJyZW07XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1ODVweCApIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzIwcHggKSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzLjRyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzYwcHggKSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzLjRyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSAgXG4gICAgICAgIFxuICAgICAgICAucmVkIHtcbiAgICAgICAgICAgIGNvbG9yOiAkcmVkO1xuICAgICAgICAgICAgZm9udC1zaXplOiA2LjJyZW07XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1ODVweCApIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzIwcHggKSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzLjRyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzYwcHggKSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzLjRyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICBcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fZm9sbG93IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIFxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgY29sb3I6ICRkYXJrLWdyZXk7XG4gICAgICAgICAgICBmb250LXNpemU6IC44NzVyZW07XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIHBhZGRpbmc6IC40cmVtO1xuICAgICAgICAgICAgXG5cbiAgICAgICAgfSAgXG5cbiAgICAgICAgLnNvY2lhbCB7XG4gICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAuNzc1cmVtO1xuICAgICAgICAgICAgLy8gcGFkZGluZy1yaWdodDogLjRyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHBhZGRpbmc6IC40cmVtO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgXG5cblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjNzOyAgXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGJsYWNrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAuNzc1cmVtO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogLjRyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IC40cmVtO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XG59Il19 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/headlines/headline-details/headline-details.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/headlines/headline-details/headline-details.component.ts ***!
  \**************************************************************************/
/*! exports provided: HeadlineDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadlineDetailsComponent", function() { return HeadlineDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_headlines_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/headlines.service */ "./src/app/services/headlines.service.ts");




let HeadlineDetailsComponent = class HeadlineDetailsComponent {
    constructor(headlinesService, router) {
        this.headlinesService = headlinesService;
        this.router = router;
        this.headlineData = {};
    }
    ngOnInit() {
        this.headlineID = this.router.snapshot.params.id;
        console.log(this.headlineID);
        this.getHeadlineByID();
    }
    getHeadlineByID() {
        this.headlinesService
            .getHeadlineById(this.headlineID)
            .subscribe(data => {
            console.log(data);
            this.headlineData = data;
        }, err => {
            console.log(err);
        });
    }
};
HeadlineDetailsComponent.ctorParameters = () => [
    { type: src_app_services_headlines_service__WEBPACK_IMPORTED_MODULE_3__["HeadlinesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
HeadlineDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-headline-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./headline-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/headlines/headline-details/headline-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../headlines.component.scss */ "./src/app/headlines/headlines.component.scss")).default]
    })
], HeadlineDetailsComponent);



/***/ }),

/***/ "./src/app/headlines/headlines.component.scss":
/*!****************************************************!*\
  !*** ./src/app/headlines/headlines.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.button {\n  display: inline-block;\n  *display: inline;\n  zoom: 1;\n  padding: 6px 20px;\n  margin: 0;\n  cursor: pointer;\n  border: 1px solid #bbb;\n  overflow: visible;\n  font: bold 13px arial, helvetica, sans-serif;\n  text-decoration: none;\n  white-space: nowrap;\n  color: #555;\n  outline: none;\n  background-color: #ddd;\n  -webkit-transition: background-color 0.2s ease-out;\n  transition: background-color 0.2s ease-out;\n  background-clip: padding-box;\n  /* Fix bleeding */\n  border-radius: 3px;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3), 0 2px 2px -1px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.button:hover {\n  background-color: #eee;\n  color: #555;\n}\n\n.button:active {\n  background: #e9e9e9;\n  position: relative;\n  top: 1px;\n  text-shadow: none;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3) inset;\n}\n\n.button[disabled], .button[disabled]:hover, .button[disabled]:active {\n  border-color: #eaeaea;\n  background: #fafafa;\n  cursor: default;\n  position: static;\n  color: #999;\n  /* Usually, !important should be avoided but here it's really needed :) */\n  box-shadow: none !important;\n  text-shadow: none !important;\n}\n\n.button.large {\n  padding: 12px 30px;\n  text-transform: uppercase;\n}\n\n.button.large:active {\n  top: 2px;\n}\n\n.headlines {\n  background-color: #e8e8e8;\n  border-radius: 0.5rem;\n  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.7);\n  border: 2px solid #000000;\n  border-radius: 0.5rem;\n}\n\n.headlines__title h1 {\n  text-align: center;\n  font-family: \"Lora\", serif;\n  border-bottom: 2px solid #000000;\n  padding-bottom: 0.5rem;\n}\n\n.popular__title {\n  text-align: center;\n}\n\n.popular__title span {\n  color: #777777;\n  font-size: 0.875rem;\n}\n\n.popular__img__content {\n  width: 100%;\n  height: 18rem !important;\n}\n\n.popular__img__content img {\n  width: 100%;\n  height: 100%;\n  border-radius: 0.5rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.popular__description {\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  word-wrap: break-word;\n}\n\n.popular__description h4 {\n  font-size: 1rem;\n  color: #000000;\n  font-weight: bold;\n  font-family: \"Lora\", serif;\n  cursor: pointer;\n}\n\n.popular__description span {\n  font-size: 0.875rem;\n  color: #777777;\n}\n\n.content-on-main {\n  width: 100%;\n  height: 8rem;\n}\n\n.content-on-main img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.headlines-title {\n  text-align: center;\n}\n\n.headlines-title h4 {\n  text-align: center;\n  font-family: \"Lora\", serif;\n  border-bottom: 2px solid #000000;\n  padding-bottom: 0.5rem;\n  font-size: 2rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hc3NldHMvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2hlYWRsaW5lcy9oZWFkbGluZXMuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9veHltb25zdGVyL0Rlc2t0b3AvbWVzc2VuZ2VyLW1hZ2F6aW5lL2NsaWVudC9zcmMvYXBwL2hlYWRsaW5lcy9oZWFkbGluZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ1pKOztBRGVFO0VBQ0UscUJBQUE7R0FDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFFQSxzQkFBQTtFQVFBLGtEQUFBO0VBSUEsMENBQUE7RUFDQSw0QkFBQTtFQUE4QixpQkFBQTtFQUc5QixrQkFBQTtFQUdBLGlIQUFBO0VBQ0EsNkNBQUE7RUFFQSwyQkFBQTtFQUNBLHlCQUFBO0VBRUEsc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDcEJKOztBRHVCRTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtBQ3BCSjs7QUR1QkU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBR0EsOENBQUE7QUNwQko7O0FEdUJFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5RUFBQTtFQUdBLDJCQUFBO0VBQ0EsNEJBQUE7QUNwQko7O0FEdUJFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQ3BCSjs7QUR1QkU7RUFDRSxRQUFBO0FDcEJKOztBQzNFQTtFQUNJLHlCRkNHO0VFQUgscUJBQUE7RUFDQSwyQ0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUQ4RUo7O0FDM0VRO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7QUQ2RVo7O0FDbkVJO0VBQ0ksa0JBQUE7QURzRVI7O0FDcEVRO0VBQ0ksY0ZyQkE7RUVzQkEsbUJBQUE7QURzRVo7O0FDakVRO0VBQ0ksV0FBQTtFQUNBLHdCQUFBO0FEbUVaOztBQ2xFWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FEb0VoQjs7QUMvREk7RUFHSSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FEZ0VSOztBQzlEUTtFQUNJLGVBQUE7RUFDQSxjRnJESjtFRXNESSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBRGdFWjs7QUM1RFE7RUFDSSxtQkFBQTtFQUNBLGNGMURBO0FDd0haOztBQ3REQTtFQUNRLFdBQUE7RUFDQSxZQUFBO0FEeURSOztBQ3hEUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBRDBEWjs7QUN0REE7RUFDSSxrQkFBQTtBRHlESjs7QUN4REk7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FEMERSIiwiZmlsZSI6InNyYy9hcHAvaGVhZGxpbmVzL2hlYWRsaW5lcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gKiAqICogQ29sb3JzICogKiAqIFxuXG4kYmxhY2s6ICMwMDAwMDA7IFxuJGdyZXk6ICNlOGU4ZTg7IFxuJHdoaXRlOiAjZWVlZTsgXG4kcmVkOiAjZGUxZTI2O1xuJGRhcmstZ3JleTogIzc3Nzc3NztcbiRzaGFkb3c6IDBweCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIC43KTsgXG5cblxuLy8gQnV0dG9uc1xuXG4uYnV0dG9uOjotbW96LWZvY3VzLWlubmVye1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICAuYnV0dG9ue1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAqZGlzcGxheTogaW5saW5lO1xuICAgIHpvb206IDE7XG4gICAgcGFkZGluZzogNnB4IDIwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGZvbnQ6IGJvbGQgMTNweCBhcmlhbCwgaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbShyZ2JhKDI1NSwyNTUsMjU1LDEpKSwgdG8ocmdiYSgyNTUsMjU1LDI1NSwwKSkpO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94OyAvKiBGaXggYmxlZWRpbmcgKi9cbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgLjMpLCAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKSBpbnNldDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpIGluc2V0O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpIGluc2V0O1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsIC45KTtcbiAgICBcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbiAgXG4gIC5idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBjb2xvcjogIzU1NTtcbiAgfVxuICBcbiAgLmJ1dHRvbjphY3RpdmV7XG4gICAgYmFja2dyb3VuZDogI2U5ZTllOTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxcHg7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMykgaW5zZXQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMykgaW5zZXQ7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjMpIGluc2V0O1xuICB9XG4gIFxuICAuYnV0dG9uW2Rpc2FibGVkXSwgLmJ1dHRvbltkaXNhYmxlZF06aG92ZXIsIC5idXR0b25bZGlzYWJsZWRdOmFjdGl2ZXtcbiAgICBib3JkZXItY29sb3I6ICNlYWVhZWE7XG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBjb2xvcjogIzk5OTtcbiAgICAvKiBVc3VhbGx5LCAhaW1wb3J0YW50IHNob3VsZCBiZSBhdm9pZGVkIGJ1dCBoZXJlIGl0J3MgcmVhbGx5IG5lZWRlZCA6KSAqL1xuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJ1dHRvbi5sYXJnZXtcbiAgICBwYWRkaW5nOiAxMnB4IDMwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICBcbiAgLmJ1dHRvbi5sYXJnZTphY3RpdmV7XG4gICAgdG9wOiAycHg7XG4gIH1cbiAgXG4gICIsIi5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICpkaXNwbGF5OiBpbmxpbmU7XG4gIHpvb206IDE7XG4gIHBhZGRpbmc6IDZweCAyMHB4O1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JiYjtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGZvbnQ6IGJvbGQgMTNweCBhcmlhbCwgaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiAjNTU1O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAvKiBGaXggYmxlZWRpbmcgKi9cbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIC1tb3otYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgaW5zZXQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgaW5zZXQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIGluc2V0O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgY29sb3I6ICM1NTU7XG59XG5cbi5idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2U5ZTllOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDFweDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIC1tb3otYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zKSBpbnNldDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpIGluc2V0O1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpIGluc2V0O1xufVxuXG4uYnV0dG9uW2Rpc2FibGVkXSwgLmJ1dHRvbltkaXNhYmxlZF06aG92ZXIsIC5idXR0b25bZGlzYWJsZWRdOmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogI2VhZWFlYTtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBjb2xvcjogIzk5OTtcbiAgLyogVXN1YWxseSwgIWltcG9ydGFudCBzaG91bGQgYmUgYXZvaWRlZCBidXQgaGVyZSBpdCdzIHJlYWxseSBuZWVkZWQgOikgKi9cbiAgLW1vei1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24ubGFyZ2Uge1xuICBwYWRkaW5nOiAxMnB4IDMwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5idXR0b24ubGFyZ2U6YWN0aXZlIHtcbiAgdG9wOiAycHg7XG59XG5cbi5oZWFkbGluZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cbi5oZWFkbGluZXNfX3RpdGxlIGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDAwMDtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbn1cblxuLnBvcHVsYXJfX3RpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBvcHVsYXJfX3RpdGxlIHNwYW4ge1xuICBjb2xvcjogIzc3Nzc3NztcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cbi5wb3B1bGFyX19pbWdfX2NvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxOHJlbSAhaW1wb3J0YW50O1xufVxuLnBvcHVsYXJfX2ltZ19fY29udGVudCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLnBvcHVsYXJfX2Rlc2NyaXB0aW9uIHtcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG4ucG9wdWxhcl9fZGVzY3JpcHRpb24gaDQge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBvcHVsYXJfX2Rlc2NyaXB0aW9uIHNwYW4ge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBjb2xvcjogIzc3Nzc3Nztcbn1cblxuLmNvbnRlbnQtb24tbWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDhyZW07XG59XG4uY29udGVudC1vbi1tYWluIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uaGVhZGxpbmVzLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmhlYWRsaW5lcy10aXRsZSBoNCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDAwMDA7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMnJlbSAhaW1wb3J0YW50O1xufSIsIkBpbXBvcnQgJ3NyYy9hc3NldHMvdmFyaWFibGVzJzsgXG5cbi5oZWFkbGluZXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmV5O1xuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIC43KTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XG5cbiAgICAmX190aXRsZSB7XG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRibGFjaztcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcbiAgICBcblxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn07IFxuXG4ucG9wdWxhciB7XG4gIFxuICAgICZfX3RpdGxlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6ICRkYXJrLWdyZXk7XG4gICAgICAgICAgICBmb250LXNpemU6IC44NzVyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19pbWcge1xuICAgICAgICAmX19jb250ZW50IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxOHJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9ICAgXG5cbiAgICAmX19kZXNjcmlwdGlvbiB7XG5cbiAgICAgICAgLW1vei1oeXBoZW5zOmF1dG87XG4gICAgICAgIC1tcy1oeXBoZW5zOmF1dG87XG4gICAgICAgIC13ZWJraXQtaHlwaGVuczphdXRvO1xuICAgICAgICBoeXBoZW5zOmF1dG87XG4gICAgICAgIHdvcmQtd3JhcDpicmVhay13b3JkO1xuXG4gICAgICAgIGg0ICB7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICB9XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IC44NzVyZW07XG4gICAgICAgICAgICBjb2xvcjogJGRhcmstZ3JleTtcbiAgICAgICAgfVxuICAgIH1cblxufTsgXG5cblxuXG4uY29udGVudC1vbi1tYWluIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogOHJlbTtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbi5oZWFkbGluZXMtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoNCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkYmxhY2s7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAycmVtICFpbXBvcnRhbnQ7XG4gIFxuXG4gICAgfVxuICAgIH1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/headlines/headlines.component.ts":
/*!**************************************************!*\
  !*** ./src/app/headlines/headlines.component.ts ***!
  \**************************************************/
/*! exports provided: HeadlinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadlinesComponent", function() { return HeadlinesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_headlines_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/headlines.service */ "./src/app/services/headlines.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let HeadlinesComponent = class HeadlinesComponent {
    constructor(router, headlinesService) {
        this.router = router;
        this.headlinesService = headlinesService;
        this.allHeadlines = [];
        this.isHeadlinesPage = false;
        this.isShowAllHeadlinesActive = false;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
        this.router.url === '/headlines' ? this.isHeadlinesPage = true : this.isHeadlinesPage = false;
        this.getAllHeadlines();
    }
    getAllHeadlines() {
        return this.headlinesService
            .getAllHeadlines()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(data => {
            if (this.router.url !== '/home') {
                this.allHeadlines = data['headlinesData'].reverse();
                console.log(this.allHeadlines);
                this.isShowAllHeadlinesActive = false;
            }
            else {
                let newsData = data['headlinesData'].reverse();
                if (newsData.length >= 8) {
                    this.allHeadlines = [newsData[0],
                        newsData[1],
                        newsData[2],
                        newsData[3],
                        newsData[4],
                        newsData[5],
                        newsData[6],
                        newsData[7],
                    ];
                    this.isShowAllHeadlinesActive = true;
                }
                else {
                    this.allHeadlines = newsData;
                }
                console.log(this.allHeadlines);
            }
        }, err => {
            console.log(err);
        });
    }
    ;
    routeToHeadlineDetails(headlineID) {
        console.log(headlineID);
        this.router.navigate([`/headlines/${headlineID}`]);
    }
    navigateToHeadlines() {
        return this.router.navigate(['/headlines']);
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
};
HeadlinesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_headlines_service__WEBPACK_IMPORTED_MODULE_3__["HeadlinesService"] }
];
HeadlinesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-headlines',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./headlines.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/headlines/headlines.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./headlines.component.scss */ "./src/app/headlines/headlines.component.scss")).default]
    })
], HeadlinesComponent);



/***/ }),

/***/ "./src/app/home/ads/ads.component.scss":
/*!*********************************************!*\
  !*** ./src/app/home/ads/ads.component.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.button {\n  display: inline-block;\n  *display: inline;\n  zoom: 1;\n  padding: 6px 20px;\n  margin: 0;\n  cursor: pointer;\n  border: 1px solid #bbb;\n  overflow: visible;\n  font: bold 13px arial, helvetica, sans-serif;\n  text-decoration: none;\n  white-space: nowrap;\n  color: #555;\n  outline: none;\n  background-color: #ddd;\n  -webkit-transition: background-color 0.2s ease-out;\n  transition: background-color 0.2s ease-out;\n  background-clip: padding-box;\n  /* Fix bleeding */\n  border-radius: 3px;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3), 0 2px 2px -1px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.button:hover {\n  background-color: #eee;\n  color: #555;\n}\n\n.button:active {\n  background: #e9e9e9;\n  position: relative;\n  top: 1px;\n  text-shadow: none;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3) inset;\n}\n\n.button[disabled], .button[disabled]:hover, .button[disabled]:active {\n  border-color: #eaeaea;\n  background: #fafafa;\n  cursor: default;\n  position: static;\n  color: #999;\n  /* Usually, !important should be avoided but here it's really needed :) */\n  box-shadow: none !important;\n  text-shadow: none !important;\n}\n\n.button.large {\n  padding: 12px 30px;\n  text-transform: uppercase;\n}\n\n.button.large:active {\n  top: 2px;\n}\n\n.ads__img__content {\n  width: 100%;\n  height: 10rem;\n}\n\n.ads__img__content img {\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n}\n\n.ads__description {\n  background-color: #e8e8e8;\n  border-radius: 0.5rem;\n}\n\n.ads__description h4 {\n  font-size: 1.3rem;\n  font-family: \"Lora\", serif;\n  font-weight: bold;\n  text-align: center;\n  letter-spacing: 0.1rem;\n}\n\n.ads__description p {\n  font-size: 0.875rem;\n  color: #777777;\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hc3NldHMvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2hvbWUvYWRzL2Fkcy5jb21wb25lbnQuc2NzcyIsIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hcHAvaG9tZS9hZHMvYWRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNaSjs7QURlRTtFQUNFLHFCQUFBO0dBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBRUEsc0JBQUE7RUFRQSxrREFBQTtFQUlBLDBDQUFBO0VBQ0EsNEJBQUE7RUFBOEIsaUJBQUE7RUFHOUIsa0JBQUE7RUFHQSxpSEFBQTtFQUNBLDZDQUFBO0VBRUEsMkJBQUE7RUFDQSx5QkFBQTtFQUVBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ3BCSjs7QUR1QkU7RUFDRSxzQkFBQTtFQUNBLFdBQUE7QUNwQko7O0FEdUJFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUdBLDhDQUFBO0FDcEJKOztBRHVCRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUVBQUE7RUFHQSwyQkFBQTtFQUNBLDRCQUFBO0FDcEJKOztBRHVCRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUNwQko7O0FEdUJFO0VBQ0UsUUFBQTtBQ3BCSjs7QUN6RVE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBRDRFWjs7QUMxRVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7QUQ0RWhCOztBQ3RFSTtFQUNJLHlCRmZEO0VFZ0JDLHFCQUFBO0FEd0VSOztBQ3ZFUTtFQUNJLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUR5RVo7O0FDcEVRO0VBQ0ksbUJBQUE7RUFDQSxjRjFCQTtFRTJCQSxXQUFBO0VBQ0Esa0JBQUE7QURzRVoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2Fkcy9hZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vICogKiAqIENvbG9ycyAqICogKiBcblxuJGJsYWNrOiAjMDAwMDAwOyBcbiRncmV5OiAjZThlOGU4OyBcbiR3aGl0ZTogI2VlZWU7IFxuJHJlZDogI2RlMWUyNjtcbiRkYXJrLWdyZXk6ICM3Nzc3Nzc7XG4kc2hhZG93OiAwcHggOHB4IDE1cHggcmdiYSgwLCAwLCAwLCAuNyk7IFxuXG5cbi8vIEJ1dHRvbnNcblxuLmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcntcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgLmJ1dHRvbntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgKmRpc3BsYXk6IGlubGluZTtcbiAgICB6b29tOiAxO1xuICAgIHBhZGRpbmc6IDZweCAyMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JiYjtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBmb250OiBib2xkIDEzcHggYXJpYWwsIGhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBjb2xvcjogIzU1NTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCBib3R0b20sIGZyb20ocmdiYSgyNTUsMjU1LDI1NSwxKSksIHRvKHJnYmEoMjU1LDI1NSwyNTUsMCkpKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSksIHJnYmEoMjU1LDI1NSwyNTUsMCkpO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSksIHJnYmEoMjU1LDI1NSwyNTUsMCkpO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSksIHJnYmEoMjU1LDI1NSwyNTUsMCkpO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSksIHJnYmEoMjU1LDI1NSwyNTUsMCkpO1xuICAgIFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZS1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICAtbXMtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZS1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZS1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZS1vdXQ7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDsgLyogRml4IGJsZWVkaW5nICovXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC1tb3otYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAuNSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMykgaW5zZXQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgLjMpLCAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKSBpbnNldDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgLjMpLCAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKSBpbnNldDtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LCAuOSk7XG4gICAgXG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG4gIFxuICAuYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgY29sb3I6ICM1NTU7XG4gIH1cbiAgXG4gIC5idXR0b246YWN0aXZle1xuICAgIGJhY2tncm91bmQ6ICNlOWU5ZTk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMXB4O1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgIC1tb3otYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjMpIGluc2V0O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjMpIGluc2V0O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4zKSBpbnNldDtcbiAgfVxuICBcbiAgLmJ1dHRvbltkaXNhYmxlZF0sIC5idXR0b25bZGlzYWJsZWRdOmhvdmVyLCAuYnV0dG9uW2Rpc2FibGVkXTphY3RpdmV7XG4gICAgYm9yZGVyLWNvbG9yOiAjZWFlYWVhO1xuICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgY29sb3I6ICM5OTk7XG4gICAgLyogVXN1YWxseSwgIWltcG9ydGFudCBzaG91bGQgYmUgYXZvaWRlZCBidXQgaGVyZSBpdCdzIHJlYWxseSBuZWVkZWQgOikgKi9cbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5idXR0b24ubGFyZ2V7XG4gICAgcGFkZGluZzogMTJweCAzMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgXG4gIC5idXR0b24ubGFyZ2U6YWN0aXZle1xuICAgIHRvcDogMnB4O1xuICB9XG4gIFxuICAiLCIuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyIHtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAqZGlzcGxheTogaW5saW5lO1xuICB6b29tOiAxO1xuICBwYWRkaW5nOiA2cHggMjBweDtcbiAgbWFyZ2luOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBmb250OiBib2xkIDEzcHggYXJpYWwsIGhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjb2xvcjogIzU1NTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xuICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgLyogRml4IGJsZWVkaW5nICovXG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIGluc2V0O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIGluc2V0O1xuICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSBpbnNldDtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGNvbG9yOiAjNTU1O1xufVxuXG4uYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlOWU5ZTk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxcHg7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMykgaW5zZXQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zKSBpbnNldDtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zKSBpbnNldDtcbn1cblxuLmJ1dHRvbltkaXNhYmxlZF0sIC5idXR0b25bZGlzYWJsZWRdOmhvdmVyLCAuYnV0dG9uW2Rpc2FibGVkXTphY3RpdmUge1xuICBib3JkZXItY29sb3I6ICNlYWVhZWE7XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgY29sb3I6ICM5OTk7XG4gIC8qIFVzdWFsbHksICFpbXBvcnRhbnQgc2hvdWxkIGJlIGF2b2lkZWQgYnV0IGhlcmUgaXQncyByZWFsbHkgbmVlZGVkIDopICovXG4gIC1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLmxhcmdlIHtcbiAgcGFkZGluZzogMTJweCAzMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uYnV0dG9uLmxhcmdlOmFjdGl2ZSB7XG4gIHRvcDogMnB4O1xufVxuXG4uYWRzX19pbWdfX2NvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMHJlbTtcbn1cbi5hZHNfX2ltZ19fY29udGVudCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVyZW07XG59XG4uYWRzX19kZXNjcmlwdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cbi5hZHNfX2Rlc2NyaXB0aW9uIGg0IHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG59XG4uYWRzX19kZXNjcmlwdGlvbiBwIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgY29sb3I6ICM3Nzc3Nzc7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59IiwiQGltcG9ydCAnc3JjL2Fzc2V0cy92YXJpYWJsZXMnOyBcblxuLmFkcyB7XG4gICAgJl9faW1ne1xuICAgICAgICAmX19jb250ZW50IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMHJlbTtcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogLjVyZW07XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IC41cmVtO1xuICAgICAgICAgICAgICAgIC8vIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fZGVzY3JpcHRpb24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gICAgICAgIGg0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcbiAgICBcblxuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IC44NzVyZW07XG4gICAgICAgICAgICBjb2xvcjogJGRhcmstZ3JleTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/ads/ads.component.ts":
/*!*******************************************!*\
  !*** ./src/app/home/ads/ads.component.ts ***!
  \*******************************************/
/*! exports provided: AdsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsComponent", function() { return AdsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_ads_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ads.service */ "./src/app/services/ads.service.ts");



let AdsComponent = class AdsComponent {
    constructor(adsService) {
        this.adsService = adsService;
    }
    ngOnInit() {
        this.getAllAds();
    }
    getAllAds() {
        this.adsService
            .getAllAds()
            .subscribe(data => {
            console.log(data);
        }, err => console.log(err));
    }
};
AdsComponent.ctorParameters = () => [
    { type: src_app_services_ads_service__WEBPACK_IMPORTED_MODULE_2__["AdsService"] }
];
AdsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ads',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ads.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/ads/ads.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ads.component.scss */ "./src/app/home/ads/ads.component.scss")).default]
    })
], AdsComponent);



/***/ }),

/***/ "./src/app/home/ads/commercial/commercial.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/home/ads/commercial/commercial.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.button {\n  display: inline-block;\n  *display: inline;\n  zoom: 1;\n  padding: 6px 20px;\n  margin: 0;\n  cursor: pointer;\n  border: 1px solid #bbb;\n  overflow: visible;\n  font: bold 13px arial, helvetica, sans-serif;\n  text-decoration: none;\n  white-space: nowrap;\n  color: #555;\n  outline: none;\n  background-color: #ddd;\n  -webkit-transition: background-color 0.2s ease-out;\n  transition: background-color 0.2s ease-out;\n  background-clip: padding-box;\n  /* Fix bleeding */\n  border-radius: 3px;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3), 0 2px 2px -1px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.button:hover {\n  background-color: #eee;\n  color: #555;\n}\n\n.button:active {\n  background: #e9e9e9;\n  position: relative;\n  top: 1px;\n  text-shadow: none;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3) inset;\n}\n\n.button[disabled], .button[disabled]:hover, .button[disabled]:active {\n  border-color: #eaeaea;\n  background: #fafafa;\n  cursor: default;\n  position: static;\n  color: #999;\n  /* Usually, !important should be avoided but here it's really needed :) */\n  box-shadow: none !important;\n  text-shadow: none !important;\n}\n\n.button.large {\n  padding: 12px 30px;\n  text-transform: uppercase;\n}\n\n.button.large:active {\n  top: 2px;\n}\n\n.ads {\n  background: #e8e8e8;\n  border-radius: 0.5rem;\n}\n\n.ads__img__content {\n  width: 100%;\n  height: 3.5rem;\n  border-radius: 0.5rem;\n  background-color: black;\n}\n\n.ads__img__content img {\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  cursor: pointer;\n  opacity: 0.8;\n}\n\n.ads__img__content img:hover {\n  opacity: 1;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.ads__description {\n  background-color: #e8e8e8;\n  border-radius: 0.5rem;\n}\n\n.ads__description h4 {\n  font-size: 1.3rem;\n  font-family: \"Lora\", serif;\n  font-weight: bold;\n  text-align: center;\n  letter-spacing: 0.1rem;\n  border-bottom: 2px solid black;\n  padding-bottom: 0.3rem;\n}\n\n.ads__description p {\n  font-size: 0.875rem;\n  color: #777777;\n  width: 100%;\n}\n\n.ads__box__image {\n  width: 100%;\n  height: 7rem;\n}\n\n.ads__box__image__content:hover {\n  background: black;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n\n.ads__box__image img {\n  width: 100%;\n  height: 100%;\n  border-radius: 2px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hc3NldHMvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2hvbWUvYWRzL2NvbW1lcmNpYWwvY29tbWVyY2lhbC5jb21wb25lbnQuc2NzcyIsIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hcHAvaG9tZS9hZHMvY29tbWVyY2lhbC9jb21tZXJjaWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNaSjs7QURlRTtFQUNFLHFCQUFBO0dBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBRUEsc0JBQUE7RUFRQSxrREFBQTtFQUlBLDBDQUFBO0VBQ0EsNEJBQUE7RUFBOEIsaUJBQUE7RUFHOUIsa0JBQUE7RUFHQSxpSEFBQTtFQUNBLDZDQUFBO0VBRUEsMkJBQUE7RUFDQSx5QkFBQTtFQUVBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ3BCSjs7QUR1QkU7RUFDRSxzQkFBQTtFQUNBLFdBQUE7QUNwQko7O0FEdUJFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUdBLDhDQUFBO0FDcEJKOztBRHVCRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUVBQUE7RUFHQSwyQkFBQTtFQUNBLDRCQUFBO0FDcEJKOztBRHVCRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUNwQko7O0FEdUJFO0VBQ0UsUUFBQTtBQ3BCSjs7QUMzRUE7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0FEOEVKOztBQzNFUTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBRDZFWjs7QUMzRVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FENkVoQjs7QUM1RWdCO0VBQ0ksVUFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QUQ4RXBCOztBQ3hFSTtFQUNJLHlCRnpCRDtFRTBCQyxxQkFBQTtBRDBFUjs7QUN6RVE7RUFDSSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBRDJFWjs7QUN0RVE7RUFDSSxtQkFBQTtFQUNBLGNGdENBO0VFdUNBLFdBQUE7QUR3RVo7O0FDbkVRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QURxRVo7O0FDaEVnQjtFQUNJLGlCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBRGtFcEI7O0FDOURZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QURnRWhCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9hZHMvY29tbWVyY2lhbC9jb21tZXJjaWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyAqICogKiBDb2xvcnMgKiAqICogXG5cbiRibGFjazogIzAwMDAwMDsgXG4kZ3JleTogI2U4ZThlODsgXG4kd2hpdGU6ICNlZWVlOyBcbiRyZWQ6ICNkZTFlMjY7XG4kZGFyay1ncmV5OiAjNzc3Nzc3O1xuJHNoYWRvdzogMHB4IDhweCAxNXB4IHJnYmEoMCwgMCwgMCwgLjcpOyBcblxuXG4vLyBCdXR0b25zXG5cbi5idXR0b246Oi1tb3otZm9jdXMtaW5uZXJ7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIC5idXR0b257XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICpkaXNwbGF5OiBpbmxpbmU7XG4gICAgem9vbTogMTtcbiAgICBwYWRkaW5nOiA2cHggMjBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgZm9udDogYm9sZCAxM3B4IGFyaWFsLCBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgYm90dG9tLCBmcm9tKHJnYmEoMjU1LDI1NSwyNTUsMSkpLCB0byhyZ2JhKDI1NSwyNTUsMjU1LDApKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSksIHJnYmEoMjU1LDI1NSwyNTUsMCkpO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICBcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZS1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7IC8qIEZpeCBibGVlZGluZyAqL1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpIGluc2V0O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAuNSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMykgaW5zZXQ7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAuNSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMykgaW5zZXQ7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwgLjkpO1xuICAgIFxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuICBcbiAgLmJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGNvbG9yOiAjNTU1O1xuICB9XG4gIFxuICAuYnV0dG9uOmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDFweDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4zKSBpbnNldDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4zKSBpbnNldDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMykgaW5zZXQ7XG4gIH1cbiAgXG4gIC5idXR0b25bZGlzYWJsZWRdLCAuYnV0dG9uW2Rpc2FibGVkXTpob3ZlciwgLmJ1dHRvbltkaXNhYmxlZF06YWN0aXZle1xuICAgIGJvcmRlci1jb2xvcjogI2VhZWFlYTtcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIC8qIFVzdWFsbHksICFpbXBvcnRhbnQgc2hvdWxkIGJlIGF2b2lkZWQgYnV0IGhlcmUgaXQncyByZWFsbHkgbmVlZGVkIDopICovXG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYnV0dG9uLmxhcmdle1xuICAgIHBhZGRpbmc6IDEycHggMzBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIFxuICAuYnV0dG9uLmxhcmdlOmFjdGl2ZXtcbiAgICB0b3A6IDJweDtcbiAgfVxuICBcbiAgIiwiLmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgKmRpc3BsYXk6IGlubGluZTtcbiAgem9vbTogMTtcbiAgcGFkZGluZzogNnB4IDIwcHg7XG4gIG1hcmdpbjogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgZm9udDogYm9sZCAxM3B4IGFyaWFsLCBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6ICM1NTU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIC8qIEZpeCBibGVlZGluZyAqL1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSBpbnNldDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSBpbnNldDtcbiAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgaW5zZXQ7XG4gIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBjb2xvcjogIzU1NTtcbn1cblxuLmJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpIGluc2V0O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMykgaW5zZXQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMykgaW5zZXQ7XG59XG5cbi5idXR0b25bZGlzYWJsZWRdLCAuYnV0dG9uW2Rpc2FibGVkXTpob3ZlciwgLmJ1dHRvbltkaXNhYmxlZF06YWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZWFlYWVhO1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIGNvbG9yOiAjOTk5O1xuICAvKiBVc3VhbGx5LCAhaW1wb3J0YW50IHNob3VsZCBiZSBhdm9pZGVkIGJ1dCBoZXJlIGl0J3MgcmVhbGx5IG5lZWRlZCA6KSAqL1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbi5sYXJnZSB7XG4gIHBhZGRpbmc6IDEycHggMzBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmJ1dHRvbi5sYXJnZTphY3RpdmUge1xuICB0b3A6IDJweDtcbn1cblxuLmFkcyB7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cbi5hZHNfX2ltZ19fY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbi5hZHNfX2ltZ19fY29udGVudCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuODtcbn1cbi5hZHNfX2ltZ19fY29udGVudCBpbWc6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuLmFkc19fZGVzY3JpcHRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG4uYWRzX19kZXNjcmlwdGlvbiBoNCB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XG59XG4uYWRzX19kZXNjcmlwdGlvbiBwIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgY29sb3I6ICM3Nzc3Nzc7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmFkc19fYm94X19pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDdyZW07XG59XG4uYWRzX19ib3hfX2ltYWdlX19jb250ZW50OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG4uYWRzX19ib3hfX2ltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59IiwiQGltcG9ydCAnc3JjL2Fzc2V0cy92YXJpYWJsZXMnOyBcblxuLmFkcyB7XG4gICAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcblxuICAgICZfX2ltZ3tcbiAgICAgICAgJl9fY29udGVudCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMy41cmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyOyAgXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC44O1xuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fZGVzY3JpcHRpb24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gICAgICAgIGg0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAuM3JlbTtcbiAgICBcblxuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IC44NzVyZW07XG4gICAgICAgICAgICBjb2xvcjogJGRhcmstZ3JleTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fYm94IHtcbiAgICAgICAgJl9faW1hZ2Uge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDdyZW07XG5cbiAgICAgICAgICAgICZfX2NvbnRlbnQge1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC4zcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/ads/commercial/commercial.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/ads/commercial/commercial.component.ts ***!
  \*************************************************************/
/*! exports provided: CommercialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommercialComponent", function() { return CommercialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_ads_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ads.service */ "./src/app/services/ads.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let CommercialComponent = class CommercialComponent {
    constructor(adsService, router) {
        this.adsService = adsService;
        this.router = router;
        this.allAds = [];
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
        this.getAllAds();
    }
    getAllAds() {
        this.adsService
            .getAllAds()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(data => {
            // console.log(data);
            this.allAds = data['adsData'];
            console.log(this.allAds);
        }, err => console.log(err));
    }
    ;
    linkToUrl(url) {
        console.log(url);
        return window.location.href = url;
    }
};
CommercialComponent.ctorParameters = () => [
    { type: src_app_services_ads_service__WEBPACK_IMPORTED_MODULE_2__["AdsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
CommercialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-commercial',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./commercial.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/ads/commercial/commercial.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./commercial.component.scss */ "./src/app/home/ads/commercial/commercial.component.scss")).default]
    })
], CommercialComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.button {\n  display: inline-block;\n  *display: inline;\n  zoom: 1;\n  padding: 6px 20px;\n  margin: 0;\n  cursor: pointer;\n  border: 1px solid #bbb;\n  overflow: visible;\n  font: bold 13px arial, helvetica, sans-serif;\n  text-decoration: none;\n  white-space: nowrap;\n  color: #555;\n  outline: none;\n  background-color: #ddd;\n  -webkit-transition: background-color 0.2s ease-out;\n  transition: background-color 0.2s ease-out;\n  background-clip: padding-box;\n  /* Fix bleeding */\n  border-radius: 3px;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3), 0 2px 2px -1px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.button:hover {\n  background-color: #eee;\n  color: #555;\n}\n\n.button:active {\n  background: #e9e9e9;\n  position: relative;\n  top: 1px;\n  text-shadow: none;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3) inset;\n}\n\n.button[disabled], .button[disabled]:hover, .button[disabled]:active {\n  border-color: #eaeaea;\n  background: #fafafa;\n  cursor: default;\n  position: static;\n  color: #999;\n  /* Usually, !important should be avoided but here it's really needed :) */\n  box-shadow: none !important;\n  text-shadow: none !important;\n}\n\n.button.large {\n  padding: 12px 30px;\n  text-transform: uppercase;\n}\n\n.button.large:active {\n  top: 2px;\n}\n\n.home__content__headline {\n  border-radius: 0.5rem;\n}\n\n@media (max-width: 992px) {\n  .home__content__headline {\n    display: none;\n  }\n}\n\n.home__content__main {\n  display: -webkit-box;\n  display: flex;\n}\n\n.home__content__main div {\n  border-top: 2px solid #e8e8e8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hc3NldHMvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNaSjs7QURlRTtFQUNFLHFCQUFBO0dBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBRUEsc0JBQUE7RUFRQSxrREFBQTtFQUlBLDBDQUFBO0VBQ0EsNEJBQUE7RUFBOEIsaUJBQUE7RUFHOUIsa0JBQUE7RUFHQSxpSEFBQTtFQUNBLDZDQUFBO0VBRUEsMkJBQUE7RUFDQSx5QkFBQTtFQUVBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ3BCSjs7QUR1QkU7RUFDRSxzQkFBQTtFQUNBLFdBQUE7QUNwQko7O0FEdUJFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUdBLDhDQUFBO0FDcEJKOztBRHVCRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUVBQUE7RUFHQSwyQkFBQTtFQUNBLDRCQUFBO0FDcEJKOztBRHVCRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUNwQko7O0FEdUJFO0VBQ0UsUUFBQTtBQ3BCSjs7QUN4RVE7RUFFSSxxQkFBQTtBRDBFWjs7QUN4RVk7RUFKSjtJQUtRLGFBQUE7RUQyRWQ7QUFDRjs7QUN0RVE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7QUR3RVo7O0FDdkVZO0VBRUksNkJBQUE7QUR3RWhCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyAqICogKiBDb2xvcnMgKiAqICogXG5cbiRibGFjazogIzAwMDAwMDsgXG4kZ3JleTogI2U4ZThlODsgXG4kd2hpdGU6ICNlZWVlOyBcbiRyZWQ6ICNkZTFlMjY7XG4kZGFyay1ncmV5OiAjNzc3Nzc3O1xuJHNoYWRvdzogMHB4IDhweCAxNXB4IHJnYmEoMCwgMCwgMCwgLjcpOyBcblxuXG4vLyBCdXR0b25zXG5cbi5idXR0b246Oi1tb3otZm9jdXMtaW5uZXJ7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIC5idXR0b257XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICpkaXNwbGF5OiBpbmxpbmU7XG4gICAgem9vbTogMTtcbiAgICBwYWRkaW5nOiA2cHggMjBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgZm9udDogYm9sZCAxM3B4IGFyaWFsLCBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgYm90dG9tLCBmcm9tKHJnYmEoMjU1LDI1NSwyNTUsMSkpLCB0byhyZ2JhKDI1NSwyNTUsMjU1LDApKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSksIHJnYmEoMjU1LDI1NSwyNTUsMCkpO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICBcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZS1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7IC8qIEZpeCBibGVlZGluZyAqL1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpIGluc2V0O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAuNSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMykgaW5zZXQ7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAuNSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMykgaW5zZXQ7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwgLjkpO1xuICAgIFxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuICBcbiAgLmJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGNvbG9yOiAjNTU1O1xuICB9XG4gIFxuICAuYnV0dG9uOmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDFweDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4zKSBpbnNldDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4zKSBpbnNldDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMykgaW5zZXQ7XG4gIH1cbiAgXG4gIC5idXR0b25bZGlzYWJsZWRdLCAuYnV0dG9uW2Rpc2FibGVkXTpob3ZlciwgLmJ1dHRvbltkaXNhYmxlZF06YWN0aXZle1xuICAgIGJvcmRlci1jb2xvcjogI2VhZWFlYTtcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIC8qIFVzdWFsbHksICFpbXBvcnRhbnQgc2hvdWxkIGJlIGF2b2lkZWQgYnV0IGhlcmUgaXQncyByZWFsbHkgbmVlZGVkIDopICovXG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYnV0dG9uLmxhcmdle1xuICAgIHBhZGRpbmc6IDEycHggMzBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIFxuICAuYnV0dG9uLmxhcmdlOmFjdGl2ZXtcbiAgICB0b3A6IDJweDtcbiAgfVxuICBcbiAgIiwiLmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgKmRpc3BsYXk6IGlubGluZTtcbiAgem9vbTogMTtcbiAgcGFkZGluZzogNnB4IDIwcHg7XG4gIG1hcmdpbjogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgZm9udDogYm9sZCAxM3B4IGFyaWFsLCBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6ICM1NTU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIC8qIEZpeCBibGVlZGluZyAqL1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSBpbnNldDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSBpbnNldDtcbiAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgaW5zZXQ7XG4gIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBjb2xvcjogIzU1NTtcbn1cblxuLmJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpIGluc2V0O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMykgaW5zZXQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMykgaW5zZXQ7XG59XG5cbi5idXR0b25bZGlzYWJsZWRdLCAuYnV0dG9uW2Rpc2FibGVkXTpob3ZlciwgLmJ1dHRvbltkaXNhYmxlZF06YWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZWFlYWVhO1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIGNvbG9yOiAjOTk5O1xuICAvKiBVc3VhbGx5LCAhaW1wb3J0YW50IHNob3VsZCBiZSBhdm9pZGVkIGJ1dCBoZXJlIGl0J3MgcmVhbGx5IG5lZWRlZCA6KSAqL1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbi5sYXJnZSB7XG4gIHBhZGRpbmc6IDEycHggMzBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmJ1dHRvbi5sYXJnZTphY3RpdmUge1xuICB0b3A6IDJweDtcbn1cblxuLmhvbWVfX2NvbnRlbnRfX2hlYWRsaW5lIHtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5ob21lX19jb250ZW50X19oZWFkbGluZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmhvbWVfX2NvbnRlbnRfX21haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmhvbWVfX2NvbnRlbnRfX21haW4gZGl2IHtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNlOGU4ZTg7XG59IiwiQGltcG9ydCAnc3JjL2Fzc2V0cy92YXJpYWJsZXMnOyBcblxuLmhvbWUge1xuICAgICZfX2NvbnRlbnQge1xuXG4gICAgICAgICZfX2hlYWRsaW5lIHtcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRncmV5O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjVyZW07XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICAmX19tYWluIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBkaXYge1xuXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRncmV5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuXG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
        this.newsLength = 0;
        this.headlines = 0;
    }
    ngOnInit() {
    }
    getNewsLength(e) {
        this.newsLength = e.length;
        console.log(e);
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/home/slider/currency/currency.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/home/slider/currency/currency.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: 100%;\n  height: 15rem;\n  border: 1px solid transparent;\n  border: 0.5rem;\n}\n\n.slider__valute {\n  background-color: #e8e8e8;\n  border: 2px solid transparent;\n  border-radius: 0.5rem;\n}\n\n.slider__valute p {\n  font-family: \"Lora\", serif;\n  font-size: 0.775rem;\n  font-weight: normal;\n  color: #777777;\n}\n\n.slider__valute__item {\n  -webkit-box-align: baseline;\n          align-items: baseline;\n}\n\n.slider__valute__item__image {\n  width: 1.5rem;\n  height: 1rem;\n}\n\n.slider__valute__item__image img {\n  width: 100%;\n  height: 100%;\n}\n\n.slider__valute__item__image p {\n  font-size: 0.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hcHAvaG9tZS9zbGlkZXIvY3VycmVuY3kvY3VycmVuY3kuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvc2xpZGVyL2N1cnJlbmN5L2N1cnJlbmN5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUNDSjs7QURPSTtFQUNJLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtBQ0pSOztBRE9RO0VBRUksMEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ05aOztBRFVRO0VBQ0ksMkJBQUE7VUFBQSxxQkFBQTtBQ1JaOztBRFNZO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUNQaEI7O0FEU2dCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNQcEI7O0FEVWdCO0VBQ0ksaUJBQUE7QUNScEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL3NsaWRlci9jdXJyZW5jeS9jdXJyZW5jeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxNXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IC41cmVtO1xuICAgXG59XG5cblxuLnNsaWRlciB7XG5cblxuICAgICZfX3ZhbHV0ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcblxuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAuNzc1cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIGNvbG9yOiAjNzc3Nzc3O1xuXG4gICAgICAgIH1cblxuICAgICAgICAmX19pdGVtIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgICAgICZfX2ltYWdlIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMS41cmVtO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMXJlbTtcblxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjNyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDAuNXJlbTtcbn1cblxuLnNsaWRlcl9fdmFsdXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cbi5zbGlkZXJfX3ZhbHV0ZSBwIHtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcbiAgZm9udC1zaXplOiAwLjc3NXJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICM3Nzc3Nzc7XG59XG4uc2xpZGVyX192YWx1dGVfX2l0ZW0ge1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG4uc2xpZGVyX192YWx1dGVfX2l0ZW1fX2ltYWdlIHtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxcmVtO1xufVxuLnNsaWRlcl9fdmFsdXRlX19pdGVtX19pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnNsaWRlcl9fdmFsdXRlX19pdGVtX19pbWFnZSBwIHtcbiAgZm9udC1zaXplOiAwLjNyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/home/slider/currency/currency.component.ts":
/*!************************************************************!*\
  !*** ./src/app/home/slider/currency/currency.component.ts ***!
  \************************************************************/
/*! exports provided: CurrencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyComponent", function() { return CurrencyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/global.service */ "./src/app/services/global.service.ts");



let CurrencyComponent = class CurrencyComponent {
    constructor(globalSerice) {
        this.globalSerice = globalSerice;
        this.USD = 0;
        this.GBP = 0;
        this.RUB = 0;
        this.EURO = 0;
        this.math = Math;
    }
    ngOnInit() {
        this.getCurrencyRate();
    }
    getCurrencyRate() {
        return this.globalSerice
            .getCurrency()
            .subscribe(data => {
            this.USD = data['usd']['inverseRate'].toString().split('.')[0] + ',' + data['usd']['inverseRate'].toString().split('.')[1].toString().split('')[0];
            this.GBP = data['gbp']['inverseRate'].toString().split('.')[0] + ',' + data['usd']['inverseRate'].toString().split('.')[1].toString().split('')[0];
            this.EURO = data['eur']['inverseRate'].toString().split('.')[0] + ',' + data['usd']['inverseRate'].toString().split('.')[1].toString().split('')[0];
            this.RUB = data['rub']['inverseRate'].toString().split('.')[0] + ',' + data['usd']['inverseRate'].toString().split('.')[1].toString().split('')[0];
        }, err => console.log(err));
    }
};
CurrencyComponent.ctorParameters = () => [
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] }
];
CurrencyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-currency',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./currency.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/slider/currency/currency.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./currency.component.scss */ "./src/app/home/slider/currency/currency.component.scss")).default]
    })
], CurrencyComponent);



/***/ }),

/***/ "./src/app/home/slider/slider.component.scss":
/*!***************************************************!*\
  !*** ./src/app/home/slider/slider.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: 100%;\n  height: 17rem;\n  border: 1px solid transparent;\n  border: 0.5rem;\n}\n\n::ng-deep .carousel-inner {\n  border-radius: 0.5rem;\n  height: 100%;\n  width: 100%;\n  outline: none;\n}\n\n::ng-deep .carousel-item {\n  -webkit-transition: opacity 3s ease !important;\n  transition: opacity 3s ease !important;\n  position: absolute !important;\n  display: block !important;\n  opacity: 0;\n}\n\n::ng-deep .carousel-item.active {\n  position: relative !important;\n  opacity: 1;\n}\n\nngb-carousel {\n  width: inherit;\n  height: inherit;\n  outline: none;\n}\n\n.carousel-inner {\n  overflow: visible;\n}\n\n.carousel-item {\n  display: -webkit-box !important;\n  display: flex !important;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: opacity 1.2s ease-in-out, visibility 1.2s;\n  transition: opacity 1.2s ease-in-out, visibility 1.2s;\n  z-index: -1;\n  position: absolute;\n}\n\n.carousel-item.active {\n  opacity: 1;\n  visibility: visible;\n  z-index: 10;\n}\n\n.carousel-control-prev {\n  z-index: 20;\n}\n\n.carousel-control-next {\n  z-index: 20;\n}\n\n.carousel-indicators {\n  z-index: 20;\n}\n\n.slider__weather {\n  background-color: #e8e8e8;\n  border: 2px solid transparent;\n  border-radius: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hcHAvaG9tZS9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBRUEsY0FBQTtBQ0FKOztBREtBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNGSjs7QURRRTtFQUNFLDhDQUFBO0VBQUEsc0NBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQ0xKOztBRFFDO0VBQ0csNkJBQUE7RUFDQSxVQUFBO0FDTko7O0FEV0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNSRjs7QURZQTtFQUNFLGlCQUFBO0FDVEY7O0FEWUE7RUFDRSwrQkFBQTtFQUFBLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkRBQUE7RUFBQSxxREFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ1RGOztBRFlBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ1RGOztBRFlBO0VBQ0csV0FBQTtBQ1RIOztBRGFBO0VBQ0csV0FBQTtBQ1ZIOztBRGFBO0VBQ0UsV0FBQTtBQ1ZGOztBRGNJO0VBQ0kseUJBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0FDWFIiLCJmaWxlIjoic3JjL2FwcC9ob21lL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTdyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgLy8gb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyOiAuNXJlbTtcbiAgIFxufVxuXG5cbjo6bmctZGVlcCAuY2Fyb3VzZWwtaW5uZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG5cbi8vICBhbmltYXRpb24gMTEgXG46Om5nLWRlZXAge1xuICAuY2Fyb3VzZWwtaXRlbSB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzcyBlYXNlIWltcG9ydGFudDsgICBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrIWltcG9ydGFudDtcbiAgICBvcGFjaXR5OiAwO1xuIH1cblxuIC5jYXJvdXNlbC1pdGVtLmFjdGl2ZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlIWltcG9ydGFudDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59OyBcblxuXG5uZ2ItY2Fyb3VzZWwge1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBvdXRsaW5lOiBub25lOyBcbn1cblxuXG4uY2Fyb3VzZWwtaW5uZXIge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLmNhcm91c2VsLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjJzIGVhc2UtaW4tb3V0LCB2aXNpYmlsaXR5IDEuMnM7XG4gIHotaW5kZXg6IC0xO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jYXJvdXNlbC1pdGVtLmFjdGl2ZXtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgei1pbmRleDogMTA7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICAgei1pbmRleDogMjA7XG59XG5cblxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gICB6LWluZGV4OiAyMDtcbn1cblxuLmNhcm91c2VsLWluZGljYXRvcnN7XG4gIHotaW5kZXg6IDIwO1xufVxuXG4uc2xpZGVyIHtcbiAgICAmX193ZWF0aGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xuICAgIH1cbn0iLCJpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxN3JlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMC41cmVtO1xufVxuXG46Om5nLWRlZXAgLmNhcm91c2VsLWlubmVyIHtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG46Om5nLWRlZXAgLmNhcm91c2VsLWl0ZW0ge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDNzIGVhc2UgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDA7XG59XG46Om5nLWRlZXAgLmNhcm91c2VsLWl0ZW0uYWN0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDE7XG59XG5cbm5nYi1jYXJvdXNlbCB7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5jYXJvdXNlbC1pbm5lciB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4uY2Fyb3VzZWwtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuMnMgZWFzZS1pbi1vdXQsIHZpc2liaWxpdHkgMS4ycztcbiAgei1pbmRleDogLTE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmNhcm91c2VsLWl0ZW0uYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgei1pbmRleDogMTA7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICB6LWluZGV4OiAyMDtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gIHotaW5kZXg6IDIwO1xufVxuXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gIHotaW5kZXg6IDIwO1xufVxuXG4uc2xpZGVyX193ZWF0aGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/slider/slider.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/slider/slider.component.ts ***!
  \*************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_services_headlines_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/headlines.service */ "./src/app/services/headlines.service.ts");
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let SliderComponent = class SliderComponent {
    constructor(headlinesService, globalSerice, router) {
        this.headlinesService = headlinesService;
        this.globalSerice = globalSerice;
        this.router = router;
        this.allHeadlineImages = [];
        this.allHeadlineTitles = [];
        // * * Currency  * * 
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.images = [];
        this.imagesTodisplay = [];
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
    }
    ngOnInit() {
        this.getHeadlines();
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
    getHeadlines() {
        return this.headlinesService
            .getAllHeadlines()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(data => {
            this.allHeadlineImages = data['headlinesData'].map(item => {
                return item;
            });
            this.images = this.allHeadlineImages.map(item => { return item; }).reverse();
            ;
        }, err => {
            console.log(err);
        });
    }
    ;
    routerToHeadlinesDetails(id) {
        return this.router.navigate([`/headlines/${id}`]);
    }
};
SliderComponent.ctorParameters = () => [
    { type: src_app_services_headlines_service__WEBPACK_IMPORTED_MODULE_3__["HeadlinesService"] },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('carousel', { static: true })
], SliderComponent.prototype, "carousel", void 0);
SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slider',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slider.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/slider/slider.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slider.component.scss */ "./src/app/home/slider/slider.component.scss")).default]
    })
], SliderComponent);



/***/ }),

/***/ "./src/app/home/slider/weather/weather.component.scss":
/*!************************************************************!*\
  !*** ./src/app/home/slider/weather/weather.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#divWeatherMain {\n  display: block;\n  border-radius: 10px;\n  color: black;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.weatherWidgetRow {\n  display: block;\n  margin: 0 auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.sun {\n  margin-top: 10px;\n  color: yellow;\n  -webkit-filter: drop-shadow(1px 1px 10px yellow);\n          filter: drop-shadow(1px 1px 10px yellow);\n}\n\n.moon {\n  margin-top: 10px;\n  color: white;\n  -webkit-filter: drop-shadow(1px 1px 10px white);\n          filter: drop-shadow(1px 1px 10px white);\n}\n\n.cloudDiv {\n  margin-top: -40px;\n}\n\n.cloud {\n  color: #68afc5;\n  -webkit-filter: drop-shadow(1px 1px 5px #68afc5);\n          filter: drop-shadow(1px 1px 5px #68afc5);\n  -webkit-animation-name: cloudMovement;\n          animation-name: cloudMovement;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-duration: 10s;\n          animation-duration: 10s;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n}\n\n@-webkit-keyframes cloudMovement {\n  from {\n    margin-left: -55px;\n  }\n  to {\n    margin-left: 65px;\n  }\n}\n\n@keyframes cloudMovement {\n  from {\n    margin-left: -55px;\n  }\n  to {\n    margin-left: 65px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hcHAvaG9tZS9zbGlkZXIvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL3NsaWRlci93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFLQSxZQUFBO0VBQ0EsNERBQUE7QUNISjs7QURNQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDSEo7O0FETUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnREFBQTtVQUFBLHdDQUFBO0FDSEo7O0FETUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtVQUFBLHVDQUFBO0FDSEo7O0FETUE7RUFDSSxpQkFBQTtBQ0hKOztBRE1BO0VBQ0ksY0FBQTtFQUNBLGdEQUFBO1VBQUEsd0NBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtBQ0hKOztBRE1BO0VBQ0k7SUFBSyxrQkFBQTtFQ0ZQO0VER0U7SUFBRyxpQkFBQTtFQ0FMO0FBQ0Y7O0FESEE7RUFDSTtJQUFLLGtCQUFBO0VDRlA7RURHRTtJQUFHLGlCQUFBO0VDQUw7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2xpZGVyL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkaXZXZWF0aGVyTWFpbntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuIFxuICAgIC8vIHdpZHRoOiAyMDBweDtcbiAgICAvLyBiYWNrZ3JvdW5kOiByZ2IoMCwwLDApO1xuICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMCwwLDAsMSkgMCUsIHJnYmEoOCw3LDQyLDEpIDc1JSwgcmdiKDgsIDEwLCA2MykgMTAwJSk7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxuLndlYXRoZXJXaWRnZXRSb3d7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICBtYXJnaW46MCBhdXRvO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLnN1bntcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMXB4IDFweCAxMHB4IHllbGxvdyk7XG59XG5cbi5tb29ue1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDFweCAxcHggMTBweCB3aGl0ZSk7XG59XG5cbi5jbG91ZERpdntcbiAgICBtYXJnaW4tdG9wOiAtNDBweDtcbn1cblxuLmNsb3Vke1xuICAgIGNvbG9yOiByZ2IoMTA0LCAxNzUsIDE5Nyk7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMXB4IDFweCA1cHggcmdiKDEwNCwgMTc1LCAxOTcpKTtcbiAgICBhbmltYXRpb24tbmFtZTogY2xvdWRNb3ZlbWVudDtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEwcztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG59XG5cbkBrZXlmcmFtZXMgY2xvdWRNb3ZlbWVudHtcbiAgICBmcm9te21hcmdpbi1sZWZ0OiAtNTVweDt9XG4gICAgdG97bWFyZ2luLWxlZnQ6IDY1cHg7fVxufVxuIiwiI2RpdldlYXRoZXJNYWluIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG5cbi53ZWF0aGVyV2lkZ2V0Um93IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5zdW4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogeWVsbG93O1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDFweCAxcHggMTBweCB5ZWxsb3cpO1xufVxuXG4ubW9vbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygxcHggMXB4IDEwcHggd2hpdGUpO1xufVxuXG4uY2xvdWREaXYge1xuICBtYXJnaW4tdG9wOiAtNDBweDtcbn1cblxuLmNsb3VkIHtcbiAgY29sb3I6ICM2OGFmYzU7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMXB4IDFweCA1cHggIzY4YWZjNSk7XG4gIGFuaW1hdGlvbi1uYW1lOiBjbG91ZE1vdmVtZW50O1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMHM7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG59XG5cbkBrZXlmcmFtZXMgY2xvdWRNb3ZlbWVudCB7XG4gIGZyb20ge1xuICAgIG1hcmdpbi1sZWZ0OiAtNTVweDtcbiAgfVxuICB0byB7XG4gICAgbWFyZ2luLWxlZnQ6IDY1cHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/slider/weather/weather.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/slider/weather/weather.component.ts ***!
  \**********************************************************/
/*! exports provided: WeatherWidgetMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherWidgetMainComponent", function() { return WeatherWidgetMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WeatherWidgetMainComponent = class WeatherWidgetMainComponent {
    constructor() { }
    ngOnInit() {
        this.WeatherData = {
            main: {},
            isDay: true
        };
        this.getWeatherData();
        console.log(this.WeatherData);
    }
    getWeatherData() {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=tbilisi&appid=ff1bc4683fc7325e9c57e586c20cc03e')
            .then(response => response.json())
            .then(data => { this.setWeatherData(data); });
    }
    setWeatherData(data) {
        this.WeatherData = data;
        let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
        this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
        let currentDate = new Date();
        this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
        this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
        this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
        this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
        this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
    }
};
WeatherWidgetMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-weather',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./weather.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/slider/weather/weather.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./weather.component.scss */ "./src/app/home/slider/weather/weather.component.scss")).default]
    })
], WeatherWidgetMainComponent);



/***/ }),

/***/ "./src/app/image-lazy-load/image-lazy-load.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/image-lazy-load/image-lazy-load.module.ts ***!
  \***********************************************************/
/*! exports provided: ImageLazyLoadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageLazyLoadModule", function() { return ImageLazyLoadModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _lazy_load_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lazy-load.directive */ "./src/app/image-lazy-load/lazy-load.directive.ts");




let ImageLazyLoadModule = class ImageLazyLoadModule {
};
ImageLazyLoadModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        declarations: [_lazy_load_directive__WEBPACK_IMPORTED_MODULE_3__["LazyLoadDirective"]],
        exports: [_lazy_load_directive__WEBPACK_IMPORTED_MODULE_3__["LazyLoadDirective"]]
    })
], ImageLazyLoadModule);



/***/ }),

/***/ "./src/app/image-lazy-load/lazy-load.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/image-lazy-load/lazy-load.directive.ts ***!
  \********************************************************/
/*! exports provided: LazyLoadDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadDirective", function() { return LazyLoadDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LazyLoadDirective = class LazyLoadDirective {
    constructor(el) {
        this.el = el;
        this.srcAttr = null;
    }
    ngAfterViewInit() {
        this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
    }
    canLazyLoad() {
        return window && 'IntersectionObserver' in window;
    }
    lazyLoadImage() {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(({ isIntersecting }) => {
                if (isIntersecting) {
                    this.loadImage();
                    obs.unobserve(this.el.nativeElement);
                }
            });
        });
        obs.observe(this.el.nativeElement);
    }
    loadImage() {
        this.srcAttr = this.src;
    }
};
LazyLoadDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.src')
], LazyLoadDirective.prototype, "srcAttr", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LazyLoadDirective.prototype, "src", void 0);
LazyLoadDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'img[appLazyLoad]'
    })
], LazyLoadDirective);



/***/ }),

/***/ "./src/app/navigation/navigation.component.scss":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.button {\n  display: inline-block;\n  *display: inline;\n  zoom: 1;\n  padding: 6px 20px;\n  margin: 0;\n  cursor: pointer;\n  border: 1px solid #bbb;\n  overflow: visible;\n  font: bold 13px arial, helvetica, sans-serif;\n  text-decoration: none;\n  white-space: nowrap;\n  color: #555;\n  outline: none;\n  background-color: #ddd;\n  -webkit-transition: background-color 0.2s ease-out;\n  transition: background-color 0.2s ease-out;\n  background-clip: padding-box;\n  /* Fix bleeding */\n  border-radius: 3px;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3), 0 2px 2px -1px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.button:hover {\n  background-color: #eee;\n  color: #555;\n}\n\n.button:active {\n  background: #e9e9e9;\n  position: relative;\n  top: 1px;\n  text-shadow: none;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3) inset;\n}\n\n.button[disabled], .button[disabled]:hover, .button[disabled]:active {\n  border-color: #eaeaea;\n  background: #fafafa;\n  cursor: default;\n  position: static;\n  color: #999;\n  /* Usually, !important should be avoided but here it's really needed :) */\n  box-shadow: none !important;\n  text-shadow: none !important;\n}\n\n.button.large {\n  padding: 12px 30px;\n  text-transform: uppercase;\n}\n\n.button.large:active {\n  top: 2px;\n}\n\n.main-navigation {\n  border-bottom: 2px solid #e8e8e8;\n  z-index: 22;\n  /*\n   * And let's slide it in from the left\n   */\n}\n\n.main-navigation__item a {\n  font-weight: bold;\n  color: #000000;\n  font-size: 0.975rem;\n  text-decoration: none;\n  padding-bottom: 0.78rem;\n  border-bottom: 2px solid transparent;\n  white-space: normal;\n  white-space: nowrap;\n}\n\n.main-navigation__item a:hover {\n  border-bottom: 2px solid #000000 !important;\n}\n\n@media (max-width: 992px) {\n  .main-navigation__item {\n    display: none;\n  }\n}\n\n.main-navigation #menuToggle {\n  display: none;\n  position: relative;\n  top: 50px;\n  left: 50px;\n  z-index: 1;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n}\n\n@media (max-width: 991px) {\n  .main-navigation #menuToggle {\n    display: block;\n  }\n}\n\n.main-navigation #menuToggle a {\n  display: none;\n  text-decoration: none;\n  color: #232323;\n  z-index: 9;\n  -webkit-transition: color 0.3s ease;\n  transition: color 0.3s ease;\n}\n\n@media (max-width: 991px) {\n  .main-navigation #menuToggle a {\n    display: block;\n  }\n}\n\n.main-navigation #menu {\n  position: absolute;\n  border: 3px solid black;\n  border-radius: 0.8rem;\n  left: -50%;\n  width: 300px;\n  margin: -100px 0 0 -179px;\n  padding: 30px;\n  padding-top: 25px;\n  background: black;\n  list-style-type: none;\n  -webkit-font-smoothing: antialiased;\n  /* to stop flickering of text in safari */\n  -webkit-transition: -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n  transition: -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n}\n\n.main-navigation #menu li {\n  padding: 20px 0;\n  font-size: 19px;\n  text-align: right;\n  font-weight: bold;\n  color: white;\n  text-align: center;\n  overflow-y: auto;\n}\n\n@media (max-width: 991px) {\n  .main-navigation #menu li {\n    display: block;\n  }\n}\n\n.main-navigation #menuToggle input:checked ~ ul {\n  -webkit-transform: none;\n          transform: none;\n}\n\n@media (max-width: 991px) {\n  .main-navigation #menuToggle input:checked ~ ul {\n    display: block;\n  }\n}\n\n@media (max-width: 992px) {\n  .main-navigation {\n    height: 3rem;\n  }\n}\n\n.active {\n  border-bottom: 2px solid #000000 !important;\n}\n\n.active-for-mobile {\n  border: 2px solid white;\n}\n\na {\n  z-index: 23;\n}\n\n#burger {\n  display: none;\n}\n\n@media (max-width: 992px) {\n  #burger {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hc3NldHMvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNaSjs7QURlRTtFQUNFLHFCQUFBO0dBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBRUEsc0JBQUE7RUFRQSxrREFBQTtFQUlBLDBDQUFBO0VBQ0EsNEJBQUE7RUFBOEIsaUJBQUE7RUFHOUIsa0JBQUE7RUFHQSxpSEFBQTtFQUNBLDZDQUFBO0VBRUEsMkJBQUE7RUFDQSx5QkFBQTtFQUVBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ3BCSjs7QUR1QkU7RUFDRSxzQkFBQTtFQUNBLFdBQUE7QUNwQko7O0FEdUJFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUdBLDhDQUFBO0FDcEJKOztBRHVCRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUVBQUE7RUFHQSwyQkFBQTtFQUNBLDRCQUFBO0FDcEJKOztBRHVCRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUNwQko7O0FEdUJFO0VBQ0UsUUFBQTtBQ3BCSjs7QUMzRUE7RUFDSSxnQ0FBQTtFQUNBLFdBQUE7RUF1R0o7O0lBQUE7QUR0QkE7O0FDL0VRO0VBQ0ksaUJBQUE7RUFDQSxjRkxKO0VFTUksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FEaUZaOztBQzdFWTtFQUNJLDJDQUFBO0FEK0VoQjs7QUMxRVE7RUFuQko7SUFvQlEsYUFBQTtFRDZFVjtBQUNGOztBQ3ZFQTtFQUVFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBRUEsVUFBQTtFQUVBLHlCQUFBO0VBQ0Esc0JBQUE7R0FBQSxxQkFBQTtPQUFBLGlCQUFBO0FEc0VGOztBQ3BFRTtFQVpGO0lBYUksY0FBQTtFRHVFRjtBQUNGOztBQ3BFQTtFQUVFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsbUNBQUE7RUFBQSwyQkFBQTtBRHFFRjs7QUNwRUU7RUFQRjtJQVFJLGNBQUE7RUR1RUY7QUFDRjs7QUNuRUE7RUFHRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBR0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1DQUFBO0VBQ0EseUNBQUE7RUFJQSwyRUFBQTtFQUFBLG1FQUFBO0VBQUEsMkRBQUE7RUFBQSxvSEFBQTtBRDhERjs7QUNyREE7RUFHRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRHFERjs7QUNuREU7RUFYRjtJQVlJLGNBQUE7RURzREY7QUFDRjs7QUNoREE7RUFHRSx1QkFBQTtVQUFBLGVBQUE7QURnREY7O0FDL0NFO0VBSkY7SUFLSSxjQUFBO0VEa0RGO0FBQ0Y7O0FDOUNBO0VBdEhBO0lBdUhJLFlBQUE7RURpREY7QUFDRjs7QUM3Q0E7RUFDSSwyQ0FBQTtBRGdESjs7QUM3Q0E7RUFDRSx1QkFBQTtBRGdERjs7QUM3Q0E7RUFDRSxXQUFBO0FEZ0RGOztBQzdDQTtFQUNFLGFBQUE7QURnREY7O0FDL0NFO0VBRkY7SUFHTSxjQUFBO0VEa0RKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vICogKiAqIENvbG9ycyAqICogKiBcblxuJGJsYWNrOiAjMDAwMDAwOyBcbiRncmV5OiAjZThlOGU4OyBcbiR3aGl0ZTogI2VlZWU7IFxuJHJlZDogI2RlMWUyNjtcbiRkYXJrLWdyZXk6ICM3Nzc3Nzc7XG4kc2hhZG93OiAwcHggOHB4IDE1cHggcmdiYSgwLCAwLCAwLCAuNyk7IFxuXG5cbi8vIEJ1dHRvbnNcblxuLmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcntcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgLmJ1dHRvbntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgKmRpc3BsYXk6IGlubGluZTtcbiAgICB6b29tOiAxO1xuICAgIHBhZGRpbmc6IDZweCAyMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JiYjtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBmb250OiBib2xkIDEzcHggYXJpYWwsIGhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBjb2xvcjogIzU1NTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCBib3R0b20sIGZyb20ocmdiYSgyNTUsMjU1LDI1NSwxKSksIHRvKHJnYmEoMjU1LDI1NSwyNTUsMCkpKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSksIHJnYmEoMjU1LDI1NSwyNTUsMCkpO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSksIHJnYmEoMjU1LDI1NSwyNTUsMCkpO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSksIHJnYmEoMjU1LDI1NSwyNTUsMCkpO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSksIHJnYmEoMjU1LDI1NSwyNTUsMCkpO1xuICAgIFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZS1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICAtbXMtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZS1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZS1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZS1vdXQ7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDsgLyogRml4IGJsZWVkaW5nICovXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC1tb3otYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAuNSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMykgaW5zZXQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgLjMpLCAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKSBpbnNldDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgLjMpLCAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKSBpbnNldDtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LCAuOSk7XG4gICAgXG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG4gIFxuICAuYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgY29sb3I6ICM1NTU7XG4gIH1cbiAgXG4gIC5idXR0b246YWN0aXZle1xuICAgIGJhY2tncm91bmQ6ICNlOWU5ZTk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMXB4O1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgIC1tb3otYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjMpIGluc2V0O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjMpIGluc2V0O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4zKSBpbnNldDtcbiAgfVxuICBcbiAgLmJ1dHRvbltkaXNhYmxlZF0sIC5idXR0b25bZGlzYWJsZWRdOmhvdmVyLCAuYnV0dG9uW2Rpc2FibGVkXTphY3RpdmV7XG4gICAgYm9yZGVyLWNvbG9yOiAjZWFlYWVhO1xuICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgY29sb3I6ICM5OTk7XG4gICAgLyogVXN1YWxseSwgIWltcG9ydGFudCBzaG91bGQgYmUgYXZvaWRlZCBidXQgaGVyZSBpdCdzIHJlYWxseSBuZWVkZWQgOikgKi9cbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5idXR0b24ubGFyZ2V7XG4gICAgcGFkZGluZzogMTJweCAzMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgXG4gIC5idXR0b24ubGFyZ2U6YWN0aXZle1xuICAgIHRvcDogMnB4O1xuICB9XG4gIFxuICAiLCIuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyIHtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAqZGlzcGxheTogaW5saW5lO1xuICB6b29tOiAxO1xuICBwYWRkaW5nOiA2cHggMjBweDtcbiAgbWFyZ2luOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBmb250OiBib2xkIDEzcHggYXJpYWwsIGhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjb2xvcjogIzU1NTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xuICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgLyogRml4IGJsZWVkaW5nICovXG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIGluc2V0O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIGluc2V0O1xuICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSBpbnNldDtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGNvbG9yOiAjNTU1O1xufVxuXG4uYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlOWU5ZTk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxcHg7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMykgaW5zZXQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zKSBpbnNldDtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zKSBpbnNldDtcbn1cblxuLmJ1dHRvbltkaXNhYmxlZF0sIC5idXR0b25bZGlzYWJsZWRdOmhvdmVyLCAuYnV0dG9uW2Rpc2FibGVkXTphY3RpdmUge1xuICBib3JkZXItY29sb3I6ICNlYWVhZWE7XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgY29sb3I6ICM5OTk7XG4gIC8qIFVzdWFsbHksICFpbXBvcnRhbnQgc2hvdWxkIGJlIGF2b2lkZWQgYnV0IGhlcmUgaXQncyByZWFsbHkgbmVlZGVkIDopICovXG4gIC1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLmxhcmdlIHtcbiAgcGFkZGluZzogMTJweCAzMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uYnV0dG9uLmxhcmdlOmFjdGl2ZSB7XG4gIHRvcDogMnB4O1xufVxuXG4ubWFpbi1uYXZpZ2F0aW9uIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlOGU4ZTg7XG4gIHotaW5kZXg6IDIyO1xuICAvKlxuICAgKiBBbmQgbGV0J3Mgc2xpZGUgaXQgaW4gZnJvbSB0aGUgbGVmdFxuICAgKi9cbn1cbi5tYWluLW5hdmlnYXRpb25fX2l0ZW0gYSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAwLjk3NXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nLWJvdHRvbTogMC43OHJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLm1haW4tbmF2aWdhdGlvbl9faXRlbSBhOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDAwMDAgIWltcG9ydGFudDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAubWFpbi1uYXZpZ2F0aW9uX19pdGVtIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4ubWFpbi1uYXZpZ2F0aW9uICNtZW51VG9nZ2xlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwcHg7XG4gIGxlZnQ6IDUwcHg7XG4gIHotaW5kZXg6IDE7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5tYWluLW5hdmlnYXRpb24gI21lbnVUb2dnbGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4ubWFpbi1uYXZpZ2F0aW9uICNtZW51VG9nZ2xlIGEge1xuICBkaXNwbGF5OiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMjMyMzIzO1xuICB6LWluZGV4OiA5O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLm1haW4tbmF2aWdhdGlvbiAjbWVudVRvZ2dsZSBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuLm1haW4tbmF2aWdhdGlvbiAjbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcbiAgbGVmdDogLTUwJTtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IC0xMDBweCAwIDAgLTE3OXB4O1xuICBwYWRkaW5nOiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMjVweDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC8qIHRvIHN0b3AgZmxpY2tlcmluZyBvZiB0ZXh0IGluIHNhZmFyaSAqL1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC43NywgMC4yLCAwLjA1LCAxKTtcbn1cbi5tYWluLW5hdmlnYXRpb24gI21lbnUgbGkge1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAubWFpbi1uYXZpZ2F0aW9uICNtZW51IGxpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuLm1haW4tbmF2aWdhdGlvbiAjbWVudVRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gdWwge1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLm1haW4tbmF2aWdhdGlvbiAjbWVudVRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gdWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLm1haW4tbmF2aWdhdGlvbiB7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICB9XG59XG5cbi5hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDAwMCAhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZlLWZvci1tb2JpbGUge1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxuYSB7XG4gIHotaW5kZXg6IDIzO1xufVxuXG4jYnVyZ2VyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAjYnVyZ2VyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufSIsIkBpbXBvcnQgJ3NyYy9hc3NldHMvdmFyaWFibGVzJzsgXG5cbi5tYWluLW5hdmlnYXRpb24ge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkZ3JleTtcbiAgICB6LWluZGV4OiAyMjtcbiAgICAmX19pdGVtIHtcbiAgICAgICAgYSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IC45NzVyZW07XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogLjc4cmVtO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgXG4gICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHggKSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9OyBcbiAgICB9XG5cbiAgIFxuXG5cbiNtZW51VG9nZ2xlXG57XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MHB4O1xuICBsZWZ0OiA1MHB4O1xuICBcbiAgei1pbmRleDogMTtcbiAgXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCApIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn07IFxufVxuXG4jbWVudVRvZ2dsZSBhXG57XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMyMzIzMjM7XG4gIHotaW5kZXg6IDk7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4ICkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufTtcbn1cblxuXG4jbWVudVxue1xuICAvLyBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAuOHJlbTtcbiAgbGVmdDogLTUwJTtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IC0xMDBweCAwIDAgLTE3OXB4O1xuICBwYWRkaW5nOiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMjVweDtcbiAgXG4gIC8vIGJhY2tncm91bmQ6ICNlZGVkZWQ7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAvKiB0byBzdG9wIGZsaWNrZXJpbmcgb2YgdGV4dCBpbiBzYWZhcmkgKi9cbiAgXG5cbiAgXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjc3LDAuMiwwLjA1LDEuMCk7XG5cbi8vICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4ICkge1xuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xuIFxuLy8gfTsgXG4gIFxufVxuXG4jbWVudSBsaVxue1xuICAvLyBkaXNwbGF5OiBub25lO1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3cteTogYXV0bztcblxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHggKSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59O1xufVxuXG4vKlxuICogQW5kIGxldCdzIHNsaWRlIGl0IGluIGZyb20gdGhlIGxlZnRcbiAqL1xuI21lbnVUb2dnbGUgaW5wdXQ6Y2hlY2tlZCB+IHVsXG57XG4gIC8vIGRpc3BsYXk6IG5vbmU7XG4gIHRyYW5zZm9ybTogbm9uZTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4ICkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufTtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHggKSB7XG4gICAgaGVpZ2h0OiAzcmVtO1xufTsgXG5cbn1cblxuLmFjdGl2ZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRibGFjayAhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZlLWZvci1tb2JpbGUge1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbn1cbiBcbmEge1xuICB6LWluZGV4OiAyMztcbn1cblxuI2J1cmdlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavigationComponent = class NavigationComponent {
    constructor() {
        this.isMenuActive = false;
    }
    ngOnInit() {
    }
    toggleMenu(type) {
        if (type === 'open') {
            this.isMenuActive = true;
            console.log(this.isMenuActive);
            console.log("open");
        }
        else {
            this.isMenuActive = false;
            console.log(this.isMenuActive);
            console.log('close');
        }
        // this.isMenuActive === false ? this.isMenuActive = true : this.isMenuActive = false; 
    }
};
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation.component.scss */ "./src/app/navigation/navigation.component.scss")).default]
    })
], NavigationComponent);



/***/ }),

/***/ "./src/app/news/news-details/news-details.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/news/news-details/news-details.component.ts ***!
  \*************************************************************/
/*! exports provided: NewsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailsComponent", function() { return NewsDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/news.service */ "./src/app/services/news.service.ts");




let NewsDetailsComponent = class NewsDetailsComponent {
    constructor(newsService, router) {
        this.newsService = newsService;
        this.router = router;
        this.newsData = {};
    }
    ngOnInit() {
        this.newsID = this.router.snapshot.params.id;
        this.getNewsByID();
    }
    getNewsByID() {
        this.newsService
            .getNewsById(this.newsID)
            .subscribe(data => {
            console.log(data);
            this.newsData = data;
        }, err => {
            console.log(err);
        });
    }
};
NewsDetailsComponent.ctorParameters = () => [
    { type: src_app_services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
NewsDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./news-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news-details/news-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../news.component.scss */ "./src/app/news/news.component.scss")).default]
    })
], NewsDetailsComponent);



/***/ }),

/***/ "./src/app/news/news.component.scss":
/*!******************************************!*\
  !*** ./src/app/news/news.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.button {\n  display: inline-block;\n  *display: inline;\n  zoom: 1;\n  padding: 6px 20px;\n  margin: 0;\n  cursor: pointer;\n  border: 1px solid #bbb;\n  overflow: visible;\n  font: bold 13px arial, helvetica, sans-serif;\n  text-decoration: none;\n  white-space: nowrap;\n  color: #555;\n  outline: none;\n  background-color: #ddd;\n  -webkit-transition: background-color 0.2s ease-out;\n  transition: background-color 0.2s ease-out;\n  background-clip: padding-box;\n  /* Fix bleeding */\n  border-radius: 3px;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3), 0 2px 2px -1px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.button:hover {\n  background-color: #eee;\n  color: #555;\n}\n\n.button:active {\n  background: #e9e9e9;\n  position: relative;\n  top: 1px;\n  text-shadow: none;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3) inset;\n}\n\n.button[disabled], .button[disabled]:hover, .button[disabled]:active {\n  border-color: #eaeaea;\n  background: #fafafa;\n  cursor: default;\n  position: static;\n  color: #999;\n  /* Usually, !important should be avoided but here it's really needed :) */\n  box-shadow: none !important;\n  text-shadow: none !important;\n}\n\n.button.large {\n  padding: 12px 30px;\n  text-transform: uppercase;\n}\n\n.button.large:active {\n  top: 2px;\n}\n\n.news__content {\n  border-radius: 0.5rem;\n  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.7);\n  border: 2px solid #000000;\n  border-radius: 0.5rem;\n}\n\n.main {\n  padding: 2rem !important;\n}\n\n.main__title h4 {\n  font-family: \"Lora\", serif;\n  font-weight: bolder;\n  font-size: 2rem;\n  text-align: center;\n  border-bottom: 2px solid #000000;\n  padding-bottom: 0.5rem;\n  font-display: swap;\n  cursor: pointer;\n}\n\n.main__social {\n  margin-top: 1.5rem !important;\n}\n\n.main__social span {\n  color: #777777;\n  font-size: 0.875rem;\n}\n\n.main__social i {\n  cursor: pointer;\n}\n\n.main__image__content {\n  width: 100% !important;\n  height: 15rem;\n}\n\n.main__image__content img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.main__description p {\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n\n.border-radius {\n  border-radius: 0.5rem;\n}\n\n.facebook {\n  background: #1877f2;\n  color: white;\n  border-radius: 3px;\n  font-size: 11px;\n  height: 20px;\n  padding: 0 6px;\n  border: none;\n}\n\n.facebook img {\n  vertical-align: middle;\n}\n\n.facebook span {\n  padding-left: 4px;\n  padding-right: 4px;\n  color: white;\n  font-size: 11px;\n  font-weight: bold;\n}\n\n.facebook p {\n  font-family: Helvetica, Arial, sans-serif;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hc3NldHMvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL25ld3MvbmV3cy5jb21wb25lbnQuc2NzcyIsIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNaSjs7QURlRTtFQUNFLHFCQUFBO0dBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBRUEsc0JBQUE7RUFRQSxrREFBQTtFQUlBLDBDQUFBO0VBQ0EsNEJBQUE7RUFBOEIsaUJBQUE7RUFHOUIsa0JBQUE7RUFHQSxpSEFBQTtFQUNBLDZDQUFBO0VBRUEsMkJBQUE7RUFDQSx5QkFBQTtFQUVBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ3BCSjs7QUR1QkU7RUFDRSxzQkFBQTtFQUNBLFdBQUE7QUNwQko7O0FEdUJFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUdBLDhDQUFBO0FDcEJKOztBRHVCRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUVBQUE7RUFHQSwyQkFBQTtFQUNBLDRCQUFBO0FDcEJKOztBRHVCRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUNwQko7O0FEdUJFO0VBQ0UsUUFBQTtBQ3BCSjs7QUMxRUk7RUFFSSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBRDRFUjs7QUN2RUE7RUFDSSx3QkFBQTtBRDBFSjs7QUN4RVE7RUFDSSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBRDBFWjs7QUN0RUk7RUFDSSw2QkFBQTtBRHdFUjs7QUN2RVE7RUFDSSxjRnhCQTtFRXlCQSxtQkFBQTtBRHlFWjs7QUN0RVE7RUFDSSxlQUFBO0FEd0VaOztBQ25FUTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtBRHFFWjs7QUNuRVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QURxRWhCOztBQy9EUTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7QURpRVo7O0FDNURBO0VBQ0kscUJBQUE7QUQrREo7O0FDNURBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FEK0RKOztBQzdESTtFQUNJLHNCQUFBO0FEK0RSOztBQzNESTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FENkRSOztBQ3hESTtFQUNJLHlDQUFBO0VBQ0Esc0JBQUE7QUQwRFIiLCJmaWxlIjoic3JjL2FwcC9uZXdzL25ld3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vICogKiAqIENvbG9ycyAqICogKiBcblxuJGJsYWNrOiAjMDAwMDAwOyBcbiRncmV5OiAjZThlOGU4OyBcbiR3aGl0ZTogI2VlZWU7IFxuJHJlZDogI2RlMWUyNjtcbiRkYXJrLWdyZXk6ICM3Nzc3Nzc7XG4kc2hhZG93OiAwcHggOHB4IDE1cHggcmdiYSgwLCAwLCAwLCAuNyk7IFxuXG5cbi8vIEJ1dHRvbnNcblxuLmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcntcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgLmJ1dHRvbntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgKmRpc3BsYXk6IGlubGluZTtcbiAgICB6b29tOiAxO1xuICAgIHBhZGRpbmc6IDZweCAyMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JiYjtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBmb250OiBib2xkIDEzcHggYXJpYWwsIGhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBjb2xvcjogIzU1NTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCBib3R0b20sIGZyb20ocmdiYSgyNTUsMjU1LDI1NSwxKSksIHRvKHJnYmEoMjU1LDI1NSwyNTUsMCkpKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSksIHJnYmEoMjU1LDI1NSwyNTUsMCkpO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSksIHJnYmEoMjU1LDI1NSwyNTUsMCkpO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSksIHJnYmEoMjU1LDI1NSwyNTUsMCkpO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSksIHJnYmEoMjU1LDI1NSwyNTUsMCkpO1xuICAgIFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZS1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICAtbXMtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZS1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZS1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZS1vdXQ7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDsgLyogRml4IGJsZWVkaW5nICovXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC1tb3otYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAuNSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMykgaW5zZXQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgLjMpLCAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKSBpbnNldDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgLjMpLCAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKSBpbnNldDtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LCAuOSk7XG4gICAgXG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG4gIFxuICAuYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgY29sb3I6ICM1NTU7XG4gIH1cbiAgXG4gIC5idXR0b246YWN0aXZle1xuICAgIGJhY2tncm91bmQ6ICNlOWU5ZTk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMXB4O1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgIC1tb3otYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjMpIGluc2V0O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjMpIGluc2V0O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4zKSBpbnNldDtcbiAgfVxuICBcbiAgLmJ1dHRvbltkaXNhYmxlZF0sIC5idXR0b25bZGlzYWJsZWRdOmhvdmVyLCAuYnV0dG9uW2Rpc2FibGVkXTphY3RpdmV7XG4gICAgYm9yZGVyLWNvbG9yOiAjZWFlYWVhO1xuICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgY29sb3I6ICM5OTk7XG4gICAgLyogVXN1YWxseSwgIWltcG9ydGFudCBzaG91bGQgYmUgYXZvaWRlZCBidXQgaGVyZSBpdCdzIHJlYWxseSBuZWVkZWQgOikgKi9cbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5idXR0b24ubGFyZ2V7XG4gICAgcGFkZGluZzogMTJweCAzMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgXG4gIC5idXR0b24ubGFyZ2U6YWN0aXZle1xuICAgIHRvcDogMnB4O1xuICB9XG4gIFxuICAiLCIuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyIHtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAqZGlzcGxheTogaW5saW5lO1xuICB6b29tOiAxO1xuICBwYWRkaW5nOiA2cHggMjBweDtcbiAgbWFyZ2luOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBmb250OiBib2xkIDEzcHggYXJpYWwsIGhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjb2xvcjogIzU1NTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xuICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgLyogRml4IGJsZWVkaW5nICovXG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIGluc2V0O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIGluc2V0O1xuICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSBpbnNldDtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGNvbG9yOiAjNTU1O1xufVxuXG4uYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlOWU5ZTk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxcHg7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMykgaW5zZXQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zKSBpbnNldDtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zKSBpbnNldDtcbn1cblxuLmJ1dHRvbltkaXNhYmxlZF0sIC5idXR0b25bZGlzYWJsZWRdOmhvdmVyLCAuYnV0dG9uW2Rpc2FibGVkXTphY3RpdmUge1xuICBib3JkZXItY29sb3I6ICNlYWVhZWE7XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgY29sb3I6ICM5OTk7XG4gIC8qIFVzdWFsbHksICFpbXBvcnRhbnQgc2hvdWxkIGJlIGF2b2lkZWQgYnV0IGhlcmUgaXQncyByZWFsbHkgbmVlZGVkIDopICovXG4gIC1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLmxhcmdlIHtcbiAgcGFkZGluZzogMTJweCAzMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uYnV0dG9uLmxhcmdlOmFjdGl2ZSB7XG4gIHRvcDogMnB4O1xufVxuXG4ubmV3c19fY29udGVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuXG4ubWFpbiB7XG4gIHBhZGRpbmc6IDJyZW0gIWltcG9ydGFudDtcbn1cbi5tYWluX190aXRsZSBoNCB7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDAwMDtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWFpbl9fc29jaWFsIHtcbiAgbWFyZ2luLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG59XG4ubWFpbl9fc29jaWFsIHNwYW4ge1xuICBjb2xvcjogIzc3Nzc3NztcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cbi5tYWluX19zb2NpYWwgaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tYWluX19pbWFnZV9fY29udGVudCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTVyZW07XG59XG4ubWFpbl9faW1hZ2VfX2NvbnRlbnQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4ubWFpbl9fZGVzY3JpcHRpb24gcCB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5ib3JkZXItcmFkaXVzIHtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuXG4uZmFjZWJvb2sge1xuICBiYWNrZ3JvdW5kOiAjMTg3N2YyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDAgNnB4O1xuICBib3JkZXI6IG5vbmU7XG59XG4uZmFjZWJvb2sgaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5mYWNlYm9vayBzcGFuIHtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmZhY2Vib29rIHAge1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn0iLCJAaW1wb3J0ICdzcmMvYXNzZXRzL3ZhcmlhYmxlcyc7IFxuXG4ubmV3cyB7XG4gICAgJl9fY29udGVudCB7XG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRncmV5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDhweCAxNXB4IHJnYmEoMCwgMCwgMCwgLjcpO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkYmxhY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xuXG4gICAgfVxufVxuXG4ubWFpbiB7XG4gICAgcGFkZGluZzogMnJlbSAhaW1wb3J0YW50O1xuICAgICZfX3RpdGxlIHtcbiAgICAgICAgaDQge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRibGFjaztcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcbiAgICAgICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICB9XG4gICAgfVxuICAgICZfX3NvY2lhbCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiAkZGFyay1ncmV5O1xuICAgICAgICAgICAgZm9udC1zaXplOiAuODc1cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgaSB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19pbWFnZSB7XG4gICAgICAgICZfX2NvbnRlbnQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGhlaWdodDogMTVyZW07XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fZGVzY3JpcHRpb24ge1xuICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjg3NXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5ib3JkZXItcmFkaXVzIHtcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbn1cblxuLmZhY2Vib29rIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTg3N2YyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBwYWRkaW5nOiAwIDZweDtcbiAgICBib3JkZXI6IG5vbmU7XG5cbiAgICBpbWcge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcblxuXG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cbn1cblxuXG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let NewsComponent = class NewsComponent {
    constructor(newsService, router) {
        this.newsService = newsService;
        this.router = router;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.allNews = [];
        this.isShowAllNewsActive = false;
        this.getFullURL();
    }
    ngOnInit() {
        this.getAllNews();
    }
    getFullURL() {
        return this.fullURL = document.URL;
    }
    getAllNews() {
        return this.newsService
            .getNews()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(data => {
            if (this.router.url !== '/home') {
                this.allNews = data['newsData'].reverse();
                console.log(this.allNews);
                this.result.emit(this.allNews.length);
                this.isShowAllNewsActive = false;
            }
            else {
                let newsData = data['newsData'].reverse();
                if (newsData.length >= 7) {
                    this.allNews = [newsData[0], newsData[1], newsData[2], newsData[3], newsData[4], newsData[5],];
                    this.isShowAllNewsActive = true;
                }
                else {
                    this.allNews = newsData;
                }
                console.log(this.allNews);
                this.result.emit(this.allNews.length);
            }
        }, err => {
            console.log(err);
        });
    }
    ;
    routeToNewsDetails(newsID) {
        this.router.navigate([`/news/${newsID}`]);
    }
    navigateRouteToNews() {
        return this.router.navigate(['/news']);
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
};
NewsComponent.ctorParameters = () => [
    { type: _services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NewsComponent.prototype, "result", void 0);
NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./news.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./news.component.scss */ "./src/app/news/news.component.scss")).default]
    })
], NewsComponent);



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.button {\n  display: inline-block;\n  *display: inline;\n  zoom: 1;\n  padding: 6px 20px;\n  margin: 0;\n  cursor: pointer;\n  border: 1px solid #bbb;\n  overflow: visible;\n  font: bold 13px arial, helvetica, sans-serif;\n  text-decoration: none;\n  white-space: nowrap;\n  color: #555;\n  outline: none;\n  background-color: #ddd;\n  -webkit-transition: background-color 0.2s ease-out;\n  transition: background-color 0.2s ease-out;\n  background-clip: padding-box;\n  /* Fix bleeding */\n  border-radius: 3px;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3), 0 2px 2px -1px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.button:hover {\n  background-color: #eee;\n  color: #555;\n}\n\n.button:active {\n  background: #e9e9e9;\n  position: relative;\n  top: 1px;\n  text-shadow: none;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3) inset;\n}\n\n.button[disabled], .button[disabled]:hover, .button[disabled]:active {\n  border-color: #eaeaea;\n  background: #fafafa;\n  cursor: default;\n  position: static;\n  color: #999;\n  /* Usually, !important should be avoided but here it's really needed :) */\n  box-shadow: none !important;\n  text-shadow: none !important;\n}\n\n.button.large {\n  padding: 12px 30px;\n  text-transform: uppercase;\n}\n\n.button.large:active {\n  top: 2px;\n}\n\n.not-found__img__content {\n  width: 25rem;\n  height: 19rem;\n}\n\n.not-found__img__content img {\n  width: 100%;\n  height: 100%;\n}\n\n.not-found__text {\n  text-align: center;\n  font-family: \"Lincoln\";\n}\n\n.not-found__text h4 {\n  font-size: 4rem;\n}\n\n.not-found__buttons button a {\n  text-decoration: none !important;\n  color: #555 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hc3NldHMvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvb3h5bW9uc3Rlci9EZXNrdG9wL21lc3Nlbmdlci1tYWdhemluZS9jbGllbnQvc3JjL2FwcC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDWko7O0FEZUU7RUFDRSxxQkFBQTtHQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUVBLHNCQUFBO0VBUUEsa0RBQUE7RUFJQSwwQ0FBQTtFQUNBLDRCQUFBO0VBQThCLGlCQUFBO0VBRzlCLGtCQUFBO0VBR0EsaUhBQUE7RUFDQSw2Q0FBQTtFQUVBLDJCQUFBO0VBQ0EseUJBQUE7RUFFQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNwQko7O0FEdUJFO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0FDcEJKOztBRHVCRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFHQSw4Q0FBQTtBQ3BCSjs7QUR1QkU7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlFQUFBO0VBR0EsMkJBQUE7RUFDQSw0QkFBQTtBQ3BCSjs7QUR1QkU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FDcEJKOztBRHVCRTtFQUNFLFFBQUE7QUNwQko7O0FDekVRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUQ0RVo7O0FDMUVZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUQ0RWhCOztBQ3ZFSTtFQUVJLGtCQUFBO0VBQ0Esc0JBQUE7QUR3RVI7O0FDdkVRO0VBRUksZUFBQTtBRHdFWjs7QUNqRVk7RUFDSSxnQ0FBQTtFQUNBLHNCQUFBO0FEbUVoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyAqICogKiBDb2xvcnMgKiAqICogXG5cbiRibGFjazogIzAwMDAwMDsgXG4kZ3JleTogI2U4ZThlODsgXG4kd2hpdGU6ICNlZWVlOyBcbiRyZWQ6ICNkZTFlMjY7XG4kZGFyay1ncmV5OiAjNzc3Nzc3O1xuJHNoYWRvdzogMHB4IDhweCAxNXB4IHJnYmEoMCwgMCwgMCwgLjcpOyBcblxuXG4vLyBCdXR0b25zXG5cbi5idXR0b246Oi1tb3otZm9jdXMtaW5uZXJ7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIC5idXR0b257XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICpkaXNwbGF5OiBpbmxpbmU7XG4gICAgem9vbTogMTtcbiAgICBwYWRkaW5nOiA2cHggMjBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgZm9udDogYm9sZCAxM3B4IGFyaWFsLCBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgYm90dG9tLCBmcm9tKHJnYmEoMjU1LDI1NSwyNTUsMSkpLCB0byhyZ2JhKDI1NSwyNTUsMjU1LDApKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSksIHJnYmEoMjU1LDI1NSwyNTUsMCkpO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICBcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZS1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7IC8qIEZpeCBibGVlZGluZyAqL1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpIGluc2V0O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAuNSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMykgaW5zZXQ7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAuNSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMykgaW5zZXQ7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwgLjkpO1xuICAgIFxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuICBcbiAgLmJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGNvbG9yOiAjNTU1O1xuICB9XG4gIFxuICAuYnV0dG9uOmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDFweDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4zKSBpbnNldDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4zKSBpbnNldDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMykgaW5zZXQ7XG4gIH1cbiAgXG4gIC5idXR0b25bZGlzYWJsZWRdLCAuYnV0dG9uW2Rpc2FibGVkXTpob3ZlciwgLmJ1dHRvbltkaXNhYmxlZF06YWN0aXZle1xuICAgIGJvcmRlci1jb2xvcjogI2VhZWFlYTtcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIC8qIFVzdWFsbHksICFpbXBvcnRhbnQgc2hvdWxkIGJlIGF2b2lkZWQgYnV0IGhlcmUgaXQncyByZWFsbHkgbmVlZGVkIDopICovXG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYnV0dG9uLmxhcmdle1xuICAgIHBhZGRpbmc6IDEycHggMzBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIFxuICAuYnV0dG9uLmxhcmdlOmFjdGl2ZXtcbiAgICB0b3A6IDJweDtcbiAgfVxuICBcbiAgIiwiLmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgKmRpc3BsYXk6IGlubGluZTtcbiAgem9vbTogMTtcbiAgcGFkZGluZzogNnB4IDIwcHg7XG4gIG1hcmdpbjogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgZm9udDogYm9sZCAxM3B4IGFyaWFsLCBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6ICM1NTU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIC8qIEZpeCBibGVlZGluZyAqL1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSBpbnNldDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAycHggMnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSBpbnNldDtcbiAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgaW5zZXQ7XG4gIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBjb2xvcjogIzU1NTtcbn1cblxuLmJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpIGluc2V0O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMykgaW5zZXQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMykgaW5zZXQ7XG59XG5cbi5idXR0b25bZGlzYWJsZWRdLCAuYnV0dG9uW2Rpc2FibGVkXTpob3ZlciwgLmJ1dHRvbltkaXNhYmxlZF06YWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZWFlYWVhO1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIGNvbG9yOiAjOTk5O1xuICAvKiBVc3VhbGx5LCAhaW1wb3J0YW50IHNob3VsZCBiZSBhdm9pZGVkIGJ1dCBoZXJlIGl0J3MgcmVhbGx5IG5lZWRlZCA6KSAqL1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbi5sYXJnZSB7XG4gIHBhZGRpbmc6IDEycHggMzBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmJ1dHRvbi5sYXJnZTphY3RpdmUge1xuICB0b3A6IDJweDtcbn1cblxuLm5vdC1mb3VuZF9faW1nX19jb250ZW50IHtcbiAgd2lkdGg6IDI1cmVtO1xuICBoZWlnaHQ6IDE5cmVtO1xufVxuLm5vdC1mb3VuZF9faW1nX19jb250ZW50IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubm90LWZvdW5kX190ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJMaW5jb2xuXCI7XG59XG4ubm90LWZvdW5kX190ZXh0IGg0IHtcbiAgZm9udC1zaXplOiA0cmVtO1xufVxuLm5vdC1mb3VuZF9fYnV0dG9ucyBidXR0b24gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzU1NSAhaW1wb3J0YW50O1xufSIsIkBpbXBvcnQgJ3NyYy9hc3NldHMvdmFyaWFibGVzJzsgXG5cbi5ub3QtZm91bmQge1xuICAgICZfX2ltZyB7XG4gICAgICAgICZfX2NvbnRlbnQge1xuICAgICAgICAgICAgd2lkdGg6IDI1cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxOXJlbTtcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX190ZXh0IHtcbiAgICAgICAgXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdMaW5jb2xuJztcbiAgICAgICAgaDQge1xuXG4gICAgICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgIH1cblxuICAgICZfX2J1dHRvbnMge1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM1NTUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/page-not-found/page-not-found.component.scss")).default]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/politics/politics-details/politics-details.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/politics/politics-details/politics-details.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.button {\n  display: inline-block;\n  *display: inline;\n  zoom: 1;\n  padding: 6px 20px;\n  margin: 0;\n  cursor: pointer;\n  border: 1px solid #bbb;\n  overflow: visible;\n  font: bold 13px arial, helvetica, sans-serif;\n  text-decoration: none;\n  white-space: nowrap;\n  color: #555;\n  outline: none;\n  background-color: #ddd;\n  -webkit-transition: background-color 0.2s ease-out;\n  transition: background-color 0.2s ease-out;\n  background-clip: padding-box;\n  /* Fix bleeding */\n  border-radius: 3px;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3), 0 2px 2px -1px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.button:hover {\n  background-color: #eee;\n  color: #555;\n}\n\n.button:active {\n  background: #e9e9e9;\n  position: relative;\n  top: 1px;\n  text-shadow: none;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3) inset;\n}\n\n.button[disabled], .button[disabled]:hover, .button[disabled]:active {\n  border-color: #eaeaea;\n  background: #fafafa;\n  cursor: default;\n  position: static;\n  color: #999;\n  /* Usually, !important should be avoided but here it's really needed :) */\n  box-shadow: none !important;\n  text-shadow: none !important;\n}\n\n.button.large {\n  padding: 12px 30px;\n  text-transform: uppercase;\n}\n\n.button.large:active {\n  top: 2px;\n}\n\n.news {\n  border-radius: 0.5rem;\n  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.7);\n  border: 2px solid #000000;\n  border-radius: 0.5rem;\n}\n\nimg {\n  border-radius: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hc3NldHMvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BvbGl0aWNzL3BvbGl0aWNzLWRldGFpbHMvcG9saXRpY3MtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hcHAvcG9saXRpY3MvcG9saXRpY3MtZGV0YWlscy9wb2xpdGljcy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNaSjs7QURlRTtFQUNFLHFCQUFBO0dBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBRUEsc0JBQUE7RUFRQSxrREFBQTtFQUlBLDBDQUFBO0VBQ0EsNEJBQUE7RUFBOEIsaUJBQUE7RUFHOUIsa0JBQUE7RUFHQSxpSEFBQTtFQUNBLDZDQUFBO0VBRUEsMkJBQUE7RUFDQSx5QkFBQTtFQUVBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ3BCSjs7QUR1QkU7RUFDRSxzQkFBQTtFQUNBLFdBQUE7QUNwQko7O0FEdUJFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUdBLDhDQUFBO0FDcEJKOztBRHVCRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUVBQUE7RUFHQSwyQkFBQTtFQUNBLDRCQUFBO0FDcEJKOztBRHVCRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUNwQko7O0FEdUJFO0VBQ0UsUUFBQTtBQ3BCSjs7QUMzRUE7RUFFSSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBRDZFSjs7QUMxRUE7RUFDSSxxQkFBQTtBRDZFSiIsImZpbGUiOiJzcmMvYXBwL3BvbGl0aWNzL3BvbGl0aWNzLWRldGFpbHMvcG9saXRpY3MtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gKiAqICogQ29sb3JzICogKiAqIFxuXG4kYmxhY2s6ICMwMDAwMDA7IFxuJGdyZXk6ICNlOGU4ZTg7IFxuJHdoaXRlOiAjZWVlZTsgXG4kcmVkOiAjZGUxZTI2O1xuJGRhcmstZ3JleTogIzc3Nzc3NztcbiRzaGFkb3c6IDBweCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIC43KTsgXG5cblxuLy8gQnV0dG9uc1xuXG4uYnV0dG9uOjotbW96LWZvY3VzLWlubmVye1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICAuYnV0dG9ue1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAqZGlzcGxheTogaW5saW5lO1xuICAgIHpvb206IDE7XG4gICAgcGFkZGluZzogNnB4IDIwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGZvbnQ6IGJvbGQgMTNweCBhcmlhbCwgaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbShyZ2JhKDI1NSwyNTUsMjU1LDEpKSwgdG8ocmdiYSgyNTUsMjU1LDI1NSwwKSkpO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94OyAvKiBGaXggYmxlZWRpbmcgKi9cbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgLjMpLCAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKSBpbnNldDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpIGluc2V0O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpIGluc2V0O1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsIC45KTtcbiAgICBcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbiAgXG4gIC5idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBjb2xvcjogIzU1NTtcbiAgfVxuICBcbiAgLmJ1dHRvbjphY3RpdmV7XG4gICAgYmFja2dyb3VuZDogI2U5ZTllOTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxcHg7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMykgaW5zZXQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMykgaW5zZXQ7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjMpIGluc2V0O1xuICB9XG4gIFxuICAuYnV0dG9uW2Rpc2FibGVkXSwgLmJ1dHRvbltkaXNhYmxlZF06aG92ZXIsIC5idXR0b25bZGlzYWJsZWRdOmFjdGl2ZXtcbiAgICBib3JkZXItY29sb3I6ICNlYWVhZWE7XG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBjb2xvcjogIzk5OTtcbiAgICAvKiBVc3VhbGx5LCAhaW1wb3J0YW50IHNob3VsZCBiZSBhdm9pZGVkIGJ1dCBoZXJlIGl0J3MgcmVhbGx5IG5lZWRlZCA6KSAqL1xuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJ1dHRvbi5sYXJnZXtcbiAgICBwYWRkaW5nOiAxMnB4IDMwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICBcbiAgLmJ1dHRvbi5sYXJnZTphY3RpdmV7XG4gICAgdG9wOiAycHg7XG4gIH1cbiAgXG4gICIsIi5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICpkaXNwbGF5OiBpbmxpbmU7XG4gIHpvb206IDE7XG4gIHBhZGRpbmc6IDZweCAyMHB4O1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JiYjtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGZvbnQ6IGJvbGQgMTNweCBhcmlhbCwgaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiAjNTU1O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAvKiBGaXggYmxlZWRpbmcgKi9cbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIC1tb3otYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgaW5zZXQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgaW5zZXQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIGluc2V0O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgY29sb3I6ICM1NTU7XG59XG5cbi5idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2U5ZTllOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDFweDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIC1tb3otYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zKSBpbnNldDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpIGluc2V0O1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpIGluc2V0O1xufVxuXG4uYnV0dG9uW2Rpc2FibGVkXSwgLmJ1dHRvbltkaXNhYmxlZF06aG92ZXIsIC5idXR0b25bZGlzYWJsZWRdOmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogI2VhZWFlYTtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBjb2xvcjogIzk5OTtcbiAgLyogVXN1YWxseSwgIWltcG9ydGFudCBzaG91bGQgYmUgYXZvaWRlZCBidXQgaGVyZSBpdCdzIHJlYWxseSBuZWVkZWQgOikgKi9cbiAgLW1vei1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24ubGFyZ2Uge1xuICBwYWRkaW5nOiAxMnB4IDMwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5idXR0b24ubGFyZ2U6YWN0aXZlIHtcbiAgdG9wOiAycHg7XG59XG5cbi5uZXdzIHtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBib3gtc2hhZG93OiAwcHggOHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG5cbmltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn0iLCJAaW1wb3J0ICdzcmMvYXNzZXRzL3ZhcmlhYmxlcyc7IFxuXG4ubmV3cyB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNXB4IHJnYmEoMCwgMCwgMCwgLjcpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbn0gIFxuXG5pbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/politics/politics-details/politics-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/politics/politics-details/politics-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: PoliticsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliticsDetailsComponent", function() { return PoliticsDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_politics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/politics.service */ "./src/app/services/politics.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let PoliticsDetailsComponent = class PoliticsDetailsComponent {
    constructor(politicsService, router) {
        this.politicsService = politicsService;
        this.router = router;
        this.politics = [];
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ngOnInit() {
        this.politicsID = this.router.snapshot.params.id;
        this.getPoliticsById();
    }
    getPoliticsById() {
        return this.politicsService
            .getPoliticsById(this.politicsID)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(data => {
            this.politics = [data];
            console.log(this.politics);
        }, err => console.log(err));
    }
};
PoliticsDetailsComponent.ctorParameters = () => [
    { type: src_app_services_politics_service__WEBPACK_IMPORTED_MODULE_2__["PoliticsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
PoliticsDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-politics-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./politics-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/politics/politics-details/politics-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./politics-details.component.scss */ "./src/app/politics/politics-details/politics-details.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../news/news.component.scss */ "./src/app/news/news.component.scss")).default]
    })
], PoliticsDetailsComponent);



/***/ }),

/***/ "./src/app/politics/politics.component.scss":
/*!**************************************************!*\
  !*** ./src/app/politics/politics.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.button {\n  display: inline-block;\n  *display: inline;\n  zoom: 1;\n  padding: 6px 20px;\n  margin: 0;\n  cursor: pointer;\n  border: 1px solid #bbb;\n  overflow: visible;\n  font: bold 13px arial, helvetica, sans-serif;\n  text-decoration: none;\n  white-space: nowrap;\n  color: #555;\n  outline: none;\n  background-color: #ddd;\n  -webkit-transition: background-color 0.2s ease-out;\n  transition: background-color 0.2s ease-out;\n  background-clip: padding-box;\n  /* Fix bleeding */\n  border-radius: 3px;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3), 0 2px 2px -1px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.button:hover {\n  background-color: #eee;\n  color: #555;\n}\n\n.button:active {\n  background: #e9e9e9;\n  position: relative;\n  top: 1px;\n  text-shadow: none;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3) inset;\n}\n\n.button[disabled], .button[disabled]:hover, .button[disabled]:active {\n  border-color: #eaeaea;\n  background: #fafafa;\n  cursor: default;\n  position: static;\n  color: #999;\n  /* Usually, !important should be avoided but here it's really needed :) */\n  box-shadow: none !important;\n  text-shadow: none !important;\n}\n\n.button.large {\n  padding: 12px 30px;\n  text-transform: uppercase;\n}\n\n.button.large:active {\n  top: 2px;\n}\n\n.news {\n  border-radius: 0.5rem;\n  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.7);\n  border: 2px solid #000000;\n  border-radius: 0.5rem;\n}\n\nimg {\n  border-radius: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hc3NldHMvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BvbGl0aWNzL3BvbGl0aWNzLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvb3h5bW9uc3Rlci9EZXNrdG9wL21lc3Nlbmdlci1tYWdhemluZS9jbGllbnQvc3JjL2FwcC9wb2xpdGljcy9wb2xpdGljcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDWko7O0FEZUU7RUFDRSxxQkFBQTtHQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUVBLHNCQUFBO0VBUUEsa0RBQUE7RUFJQSwwQ0FBQTtFQUNBLDRCQUFBO0VBQThCLGlCQUFBO0VBRzlCLGtCQUFBO0VBR0EsaUhBQUE7RUFDQSw2Q0FBQTtFQUVBLDJCQUFBO0VBQ0EseUJBQUE7RUFFQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNwQko7O0FEdUJFO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0FDcEJKOztBRHVCRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFHQSw4Q0FBQTtBQ3BCSjs7QUR1QkU7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlFQUFBO0VBR0EsMkJBQUE7RUFDQSw0QkFBQTtBQ3BCSjs7QUR1QkU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FDcEJKOztBRHVCRTtFQUNFLFFBQUE7QUNwQko7O0FDM0VBO0VBRUkscUJBQUE7RUFDQSwyQ0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUQ2RUo7O0FDMUVBO0VBQ0kscUJBQUE7QUQ2RUoiLCJmaWxlIjoic3JjL2FwcC9wb2xpdGljcy9wb2xpdGljcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gKiAqICogQ29sb3JzICogKiAqIFxuXG4kYmxhY2s6ICMwMDAwMDA7IFxuJGdyZXk6ICNlOGU4ZTg7IFxuJHdoaXRlOiAjZWVlZTsgXG4kcmVkOiAjZGUxZTI2O1xuJGRhcmstZ3JleTogIzc3Nzc3NztcbiRzaGFkb3c6IDBweCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIC43KTsgXG5cblxuLy8gQnV0dG9uc1xuXG4uYnV0dG9uOjotbW96LWZvY3VzLWlubmVye1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICAuYnV0dG9ue1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAqZGlzcGxheTogaW5saW5lO1xuICAgIHpvb206IDE7XG4gICAgcGFkZGluZzogNnB4IDIwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGZvbnQ6IGJvbGQgMTNweCBhcmlhbCwgaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbShyZ2JhKDI1NSwyNTUsMjU1LDEpKSwgdG8ocmdiYSgyNTUsMjU1LDI1NSwwKSkpO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94OyAvKiBGaXggYmxlZWRpbmcgKi9cbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgLjMpLCAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKSBpbnNldDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpIGluc2V0O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpIGluc2V0O1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsIC45KTtcbiAgICBcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbiAgXG4gIC5idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBjb2xvcjogIzU1NTtcbiAgfVxuICBcbiAgLmJ1dHRvbjphY3RpdmV7XG4gICAgYmFja2dyb3VuZDogI2U5ZTllOTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxcHg7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMykgaW5zZXQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMykgaW5zZXQ7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjMpIGluc2V0O1xuICB9XG4gIFxuICAuYnV0dG9uW2Rpc2FibGVkXSwgLmJ1dHRvbltkaXNhYmxlZF06aG92ZXIsIC5idXR0b25bZGlzYWJsZWRdOmFjdGl2ZXtcbiAgICBib3JkZXItY29sb3I6ICNlYWVhZWE7XG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBjb2xvcjogIzk5OTtcbiAgICAvKiBVc3VhbGx5LCAhaW1wb3J0YW50IHNob3VsZCBiZSBhdm9pZGVkIGJ1dCBoZXJlIGl0J3MgcmVhbGx5IG5lZWRlZCA6KSAqL1xuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJ1dHRvbi5sYXJnZXtcbiAgICBwYWRkaW5nOiAxMnB4IDMwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICBcbiAgLmJ1dHRvbi5sYXJnZTphY3RpdmV7XG4gICAgdG9wOiAycHg7XG4gIH1cbiAgXG4gICIsIi5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICpkaXNwbGF5OiBpbmxpbmU7XG4gIHpvb206IDE7XG4gIHBhZGRpbmc6IDZweCAyMHB4O1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JiYjtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGZvbnQ6IGJvbGQgMTNweCBhcmlhbCwgaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiAjNTU1O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAvKiBGaXggYmxlZWRpbmcgKi9cbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIC1tb3otYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgaW5zZXQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgaW5zZXQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIGluc2V0O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgY29sb3I6ICM1NTU7XG59XG5cbi5idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2U5ZTllOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDFweDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIC1tb3otYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zKSBpbnNldDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpIGluc2V0O1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpIGluc2V0O1xufVxuXG4uYnV0dG9uW2Rpc2FibGVkXSwgLmJ1dHRvbltkaXNhYmxlZF06aG92ZXIsIC5idXR0b25bZGlzYWJsZWRdOmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogI2VhZWFlYTtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBjb2xvcjogIzk5OTtcbiAgLyogVXN1YWxseSwgIWltcG9ydGFudCBzaG91bGQgYmUgYXZvaWRlZCBidXQgaGVyZSBpdCdzIHJlYWxseSBuZWVkZWQgOikgKi9cbiAgLW1vei1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24ubGFyZ2Uge1xuICBwYWRkaW5nOiAxMnB4IDMwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5idXR0b24ubGFyZ2U6YWN0aXZlIHtcbiAgdG9wOiAycHg7XG59XG5cbi5uZXdzIHtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBib3gtc2hhZG93OiAwcHggOHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG5cbmltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn0iLCJAaW1wb3J0ICdzcmMvYXNzZXRzL3ZhcmlhYmxlcyc7IFxuXG4ubmV3cyB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNXB4IHJnYmEoMCwgMCwgMCwgLjcpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbn1cblxuaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/politics/politics.component.ts":
/*!************************************************!*\
  !*** ./src/app/politics/politics.component.ts ***!
  \************************************************/
/*! exports provided: PoliticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliticsComponent", function() { return PoliticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let PoliticsComponent = class PoliticsComponent {
    constructor(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.allPoltics = [];
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
        this.getAllPolitics();
    }
    getAllPolitics() {
        this.adminService
            .getAllPolitics()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(data => {
            console.log(data);
            this.allPoltics = data['politicsData'].reverse();
        }, err => console.log(err));
    }
    ;
    routeToPolitics(id) {
        console.log('In route');
        this.router.navigate([`/politics/${id}`]);
    }
};
PoliticsComponent.ctorParameters = () => [
    { type: _services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
PoliticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-politics',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./politics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/politics/politics.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./politics.component.scss */ "./src/app/politics/politics.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../news/news.component.scss */ "./src/app/news/news.component.scss")).default]
    })
], PoliticsComponent);



/***/ }),

/***/ "./src/app/route-animations.ts":
/*!*************************************!*\
  !*** ./src/app/route-animations.ts ***!
  \*************************************/
/*! exports provided: fader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fader", function() { return fader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


const fader = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* <=> *', [
        // Set a default  style for enter and leave
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                position: 'absolute',
                left: 0,
                width: '100%',
                opacity: 0,
                transform: 'scale(0) translateY(100%)',
            }),
        ], { optional: true }),
        // Animate the new page in
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'scale(1) translateY(0)' })),
        ], { optional: true })
    ]),
]);


/***/ }),

/***/ "./src/app/search/search.component.scss":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.button {\n  display: inline-block;\n  *display: inline;\n  zoom: 1;\n  padding: 6px 20px;\n  margin: 0;\n  cursor: pointer;\n  border: 1px solid #bbb;\n  overflow: visible;\n  font: bold 13px arial, helvetica, sans-serif;\n  text-decoration: none;\n  white-space: nowrap;\n  color: #555;\n  outline: none;\n  background-color: #ddd;\n  -webkit-transition: background-color 0.2s ease-out;\n  transition: background-color 0.2s ease-out;\n  background-clip: padding-box;\n  /* Fix bleeding */\n  border-radius: 3px;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3), 0 2px 2px -1px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.button:hover {\n  background-color: #eee;\n  color: #555;\n}\n\n.button:active {\n  background: #e9e9e9;\n  position: relative;\n  top: 1px;\n  text-shadow: none;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3) inset;\n}\n\n.button[disabled], .button[disabled]:hover, .button[disabled]:active {\n  border-color: #eaeaea;\n  background: #fafafa;\n  cursor: default;\n  position: static;\n  color: #999;\n  /* Usually, !important should be avoided but here it's really needed :) */\n  box-shadow: none !important;\n  text-shadow: none !important;\n}\n\n.button.large {\n  padding: 12px 30px;\n  text-transform: uppercase;\n}\n\n.button.large:active {\n  top: 2px;\n}\n\n.search {\n  border-bottom: 1px solid #e8e8e8;\n}\n\n.search__box a {\n  font-size: 0.675rem;\n  cursor: pointer;\n  font-weight: bold;\n  margin: 0;\n  white-space: nowrap;\n  text-decoration: none;\n  color: #777777;\n}\n\n.search__box span {\n  font-size: 0.875rem;\n  white-space: nowrap;\n  color: #777777;\n  font-weight: bold;\n}\n\n.search__box input {\n  height: 1.3rem;\n}\n\n.search__box input:focus {\n  border-color: rgba(192, 13, 22, 0.25);\n  box-shadow: 0 0 0 0.2rem rgba(192, 13, 22, 0.25);\n}\n\n.search__box i {\n  cursor: pointer;\n  font-size: 0.875rem;\n}\n\n@media (max-width: 768px) {\n  .search__box {\n    margin-top: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL294eW1vbnN0ZXIvRGVza3RvcC9tZXNzZW5nZXItbWFnYXppbmUvY2xpZW50L3NyYy9hc3NldHMvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCIvaG9tZS9veHltb25zdGVyL0Rlc2t0b3AvbWVzc2VuZ2VyLW1hZ2F6aW5lL2NsaWVudC9zcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ1pKOztBRGVFO0VBQ0UscUJBQUE7R0FDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFFQSxzQkFBQTtFQVFBLGtEQUFBO0VBSUEsMENBQUE7RUFDQSw0QkFBQTtFQUE4QixpQkFBQTtFQUc5QixrQkFBQTtFQUdBLGlIQUFBO0VBQ0EsNkNBQUE7RUFFQSwyQkFBQTtFQUNBLHlCQUFBO0VBRUEsc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDcEJKOztBRHVCRTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtBQ3BCSjs7QUR1QkU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBR0EsOENBQUE7QUNwQko7O0FEdUJFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5RUFBQTtFQUdBLDJCQUFBO0VBQ0EsNEJBQUE7QUNwQko7O0FEdUJFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQ3BCSjs7QUR1QkU7RUFDRSxRQUFBO0FDcEJKOztBQzNFQTtFQXdDSSxnQ0FBQTtBRHVDSjs7QUM3RVE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0ZKQTtBQ21GWjs7QUM1RVE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0ZWQTtFRVdBLGlCQUFBO0FEOEVaOztBQ3pFUTtFQUNJLGNBQUE7QUQyRVo7O0FDekVZO0VBQ0kscUNBQUE7RUFDQSxnREFBQTtBRDJFaEI7O0FDdkVRO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FEeUVaOztBQ3RFUTtFQWxDSjtJQW1DUSxnQkFBQTtFRHlFVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gKiAqICogQ29sb3JzICogKiAqIFxuXG4kYmxhY2s6ICMwMDAwMDA7IFxuJGdyZXk6ICNlOGU4ZTg7IFxuJHdoaXRlOiAjZWVlZTsgXG4kcmVkOiAjZGUxZTI2O1xuJGRhcmstZ3JleTogIzc3Nzc3NztcbiRzaGFkb3c6IDBweCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIC43KTsgXG5cblxuLy8gQnV0dG9uc1xuXG4uYnV0dG9uOjotbW96LWZvY3VzLWlubmVye1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICAuYnV0dG9ue1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAqZGlzcGxheTogaW5saW5lO1xuICAgIHpvb206IDE7XG4gICAgcGFkZGluZzogNnB4IDIwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGZvbnQ6IGJvbGQgMTNweCBhcmlhbCwgaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IGJvdHRvbSwgZnJvbShyZ2JhKDI1NSwyNTUsMjU1LDEpKSwgdG8ocmdiYSgyNTUsMjU1LDI1NSwwKSkpO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSwgcmdiYSgyNTUsMjU1LDI1NSwwKSk7XG4gICAgXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2Utb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLW91dDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94OyAvKiBGaXggYmxlZWRpbmcgKi9cbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgLjMpLCAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKSBpbnNldDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpIGluc2V0O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjUpLCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpIGluc2V0O1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsIC45KTtcbiAgICBcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbiAgXG4gIC5idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBjb2xvcjogIzU1NTtcbiAgfVxuICBcbiAgLmJ1dHRvbjphY3RpdmV7XG4gICAgYmFja2dyb3VuZDogI2U5ZTllOTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxcHg7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMykgaW5zZXQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMykgaW5zZXQ7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjMpIGluc2V0O1xuICB9XG4gIFxuICAuYnV0dG9uW2Rpc2FibGVkXSwgLmJ1dHRvbltkaXNhYmxlZF06aG92ZXIsIC5idXR0b25bZGlzYWJsZWRdOmFjdGl2ZXtcbiAgICBib3JkZXItY29sb3I6ICNlYWVhZWE7XG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBjb2xvcjogIzk5OTtcbiAgICAvKiBVc3VhbGx5LCAhaW1wb3J0YW50IHNob3VsZCBiZSBhdm9pZGVkIGJ1dCBoZXJlIGl0J3MgcmVhbGx5IG5lZWRlZCA6KSAqL1xuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJ1dHRvbi5sYXJnZXtcbiAgICBwYWRkaW5nOiAxMnB4IDMwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICBcbiAgLmJ1dHRvbi5sYXJnZTphY3RpdmV7XG4gICAgdG9wOiAycHg7XG4gIH1cbiAgXG4gICIsIi5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICpkaXNwbGF5OiBpbmxpbmU7XG4gIHpvb206IDE7XG4gIHBhZGRpbmc6IDZweCAyMHB4O1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JiYjtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGZvbnQ6IGJvbGQgMTNweCBhcmlhbCwgaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiAjNTU1O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2Utb3V0O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAvKiBGaXggYmxlZWRpbmcgKi9cbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIC1tb3otYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgaW5zZXQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgaW5zZXQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDJweCAycHggLTFweCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIGluc2V0O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgY29sb3I6ICM1NTU7XG59XG5cbi5idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2U5ZTllOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDFweDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIC1tb3otYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zKSBpbnNldDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpIGluc2V0O1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpIGluc2V0O1xufVxuXG4uYnV0dG9uW2Rpc2FibGVkXSwgLmJ1dHRvbltkaXNhYmxlZF06aG92ZXIsIC5idXR0b25bZGlzYWJsZWRdOmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogI2VhZWFlYTtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBjb2xvcjogIzk5OTtcbiAgLyogVXN1YWxseSwgIWltcG9ydGFudCBzaG91bGQgYmUgYXZvaWRlZCBidXQgaGVyZSBpdCdzIHJlYWxseSBuZWVkZWQgOikgKi9cbiAgLW1vei1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24ubGFyZ2Uge1xuICBwYWRkaW5nOiAxMnB4IDMwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5idXR0b24ubGFyZ2U6YWN0aXZlIHtcbiAgdG9wOiAycHg7XG59XG5cbi5zZWFyY2gge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZThlODtcbn1cbi5zZWFyY2hfX2JveCBhIHtcbiAgZm9udC1zaXplOiAwLjY3NXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNzc3Nzc3O1xufVxuLnNlYXJjaF9fYm94IHNwYW4ge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjb2xvcjogIzc3Nzc3NztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2VhcmNoX19ib3ggaW5wdXQge1xuICBoZWlnaHQ6IDEuM3JlbTtcbn1cbi5zZWFyY2hfX2JveCBpbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgxOTIsIDEzLCAyMiwgMC4yNSk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDE5MiwgMTMsIDIyLCAwLjI1KTtcbn1cbi5zZWFyY2hfX2JveCBpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zZWFyY2hfX2JveCB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgfVxufSIsIkBpbXBvcnQgJ3NyYy9hc3NldHMvdmFyaWFibGVzJzsgXG5cbi5zZWFyY2gge1xuICAgICZfX2JveCB7XG4gICAgICAgIGEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAuNjc1cmVtO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICRkYXJrLWdyZXk7XG4gICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAuODc1cmVtO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIGNvbG9yOiAkZGFyay1ncmV5O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBcblxuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgaGVpZ2h0OiAxLjNyZW07XG5cbiAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgxOTIsIDEzLCAyMiwgMC4yNSk7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMTkyLCAxMywgMjIsIDAuMjUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaSB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IC44NzVyZW07XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHggKSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRncmV5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchComponent = class SearchComponent {
    // * * *  / * * * 
    constructor() {
        //  * * * Get current Date 
        this.date = new Date();
        this.month = this.date.getUTCMonth() + 1; //months from 1-12
        this.day = this.date.getUTCDate();
        this.year = this.date.getUTCFullYear();
        this.monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        this.isInputActive = false;
        this.currentDate = this.monthNames[this.date.getMonth()] + "," + this.day + " " + this.year;
    }
    ngOnInit() {
    }
    toggleInput() {
        return this, this.isInputActive === false ? this.isInputActive = true : this.isInputActive = false;
    }
};
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.scss */ "./src/app/search/search.component.scss")).default]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/services/admin.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/admin.service.ts ***!
  \*******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AdminService = class AdminService {
    constructor(http) {
        this.http = http;
    }
    addCulture(cultureForm) {
        const url = 'culture';
        return this.http.post(url, cultureForm);
    }
    ;
    removeCulture(cultureId) {
        const url = `culture/${cultureId}`;
        return this.http.delete(url);
    }
    ;
    getCulture() {
        const url = 'culture';
        return this.http.get(url);
    }
    ;
    addPolitics(politicsForm) {
        const url = 'politics';
        return this.http.post(url, politicsForm);
    }
    ;
    removePolitics(politicsId) {
        const url = `politics/${politicsId}`;
        return this.http.delete(url);
    }
    ;
    getAllPolitics() {
        const url = 'politics';
        return this.http.get(url);
    }
    addEconomy(economyForm) {
        const url = 'economy';
        return this.http.post(url, economyForm);
    }
    ;
    removeEconomy(economyId) {
        const url = `economy/${economyId}`;
        return this.http.delete(url);
    }
    ;
    getAllEconomy() {
        const url = 'economy';
        return this.http.get(url);
    }
    ;
    loginAdmin(adminForm) {
        const url = 'admin-login';
        return this.http.post(url, adminForm);
    }
    ;
    setToken(token) {
        localStorage.setItem('token', token);
    }
    ;
    getToken() {
        console.log(localStorage.getItem('token'));
        return localStorage.getItem('token');
    }
};
AdminService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AdminService);



/***/ }),

/***/ "./src/app/services/ads.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/ads.service.ts ***!
  \*****************************************/
/*! exports provided: AdsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsService", function() { return AdsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AdsService = class AdsService {
    constructor(http) {
        this.http = http;
    }
    getAllAds() {
        return this.http.get('ads');
    }
    ;
    addAds(adsForm) {
        const url = 'ads';
        return this.http.post(url, adsForm);
    }
    ;
    removeAds(id) {
        const url = `ads/${id}`;
        return this.http.delete(url);
    }
};
AdsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AdsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AdsService);



/***/ }),

/***/ "./src/app/services/culture.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/culture.service.ts ***!
  \*********************************************/
/*! exports provided: CultureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CultureService", function() { return CultureService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CultureService = class CultureService {
    constructor(http) {
        this.http = http;
    }
    getCultureById(id) {
        const url = `culture/${id}`;
        return this.http.get(url);
    }
};
CultureService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CultureService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CultureService);



/***/ }),

/***/ "./src/app/services/economy.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/economy.service.ts ***!
  \*********************************************/
/*! exports provided: EconomyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EconomyService", function() { return EconomyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EconomyService = class EconomyService {
    constructor(http) {
        this.http = http;
    }
    getEconomyById(id) {
        const url = `economy/${id}`;
        return this.http.get(url);
    }
};
EconomyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EconomyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EconomyService);



/***/ }),

/***/ "./src/app/services/global.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/global.service.ts ***!
  \********************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let GlobalService = class GlobalService {
    constructor(http) {
        this.http = http;
    }
    getCurrency() {
        const api = 'http://www.floatrates.com/daily/gel.json';
        return this.http.get(api);
    }
    ;
    getWeather() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                let long = position.coords.longitude;
                let lat = position.coords.latitude;
                console.log("ashjdjkashdkjs");
            });
        }
        else {
            console.log('please Allow to show you weather');
        }
    }
};
GlobalService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GlobalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GlobalService);



/***/ }),

/***/ "./src/app/services/headlines.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/headlines.service.ts ***!
  \***********************************************/
/*! exports provided: HeadlinesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadlinesService", function() { return HeadlinesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HeadlinesService = class HeadlinesService {
    constructor(http) {
        this.http = http;
    }
    getAllHeadlines() {
        const url = 'headlines';
        return this.http.get(url);
    }
    ;
    getHeadlineById(headlineID) {
        const url = `headlines/${headlineID}`;
        return this.http.get(url);
    }
    ;
    addHeadlines(headlinesForm) {
        const url = 'headlines';
        return this.http.post(url, headlinesForm);
    }
    ;
    deleteHeadlines(headlinesId) {
        const url = `headlines/${headlinesId}`;
        return this.http.delete(url);
    }
    ;
};
HeadlinesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HeadlinesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HeadlinesService);



/***/ }),

/***/ "./src/app/services/news.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/news.service.ts ***!
  \******************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let NewsService = class NewsService {
    constructor(http) {
        this.http = http;
    }
    getNews() {
        const url = 'http://167.172.172.153:8080/news';
        return this.http.get(url);
    }
    ;
    getNewsById(newsID) {
        const url = `news/${newsID}`;
        return this.http.get(url);
    }
    ;
    deleteNews(newsID) {
        const url = `news/${newsID}`;
        return this.http.delete(url);
    }
    ;
    addNews(newsForm) {
        const url = 'news';
        return this.http.post(url, newsForm);
    }
    ;
};
NewsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
NewsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NewsService);



/***/ }),

/***/ "./src/app/services/politics.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/politics.service.ts ***!
  \**********************************************/
/*! exports provided: PoliticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliticsService", function() { return PoliticsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PoliticsService = class PoliticsService {
    constructor(http) {
        this.http = http;
    }
    getPoliticsById(id) {
        const url = `politics/${id}`;
        return this.http.get(url);
    }
};
PoliticsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PoliticsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PoliticsService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCgFnP86w37WdynO7diJr3fLts-lE7vSzw",
        authDomain: "themessenger-ac4bd.firebaseapp.com",
        databaseURL: "https://themessenger-ac4bd.firebaseio.com",
        projectId: "themessenger-ac4bd",
        storageBucket: "themessenger-ac4bd.appspot.com",
        messagingSenderId: "494817328054",
        appId: "1:494817328054:web:1af95339355172f7185f17",
        measurementId: "G-L51BW9G6RC"
    }
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_browser_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.browser.module */ "./src/app/app.browser.module.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_browser_module__WEBPACK_IMPORTED_MODULE_4__["AppBrowserModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/oxymonster/Desktop/messenger-magazine/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map