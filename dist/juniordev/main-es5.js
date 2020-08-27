function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/about"];
    };

    var _c1 = function _c1() {
      return ["/articulos"];
    };

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'juniordev';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "scroll",
        value: function scroll() {
          jquery__WEBPACK_IMPORTED_MODULE_1__('html, body').animate({
            scrollTop: jquery__WEBPACK_IMPORTED_MODULE_1__('.divs').offset().top
          }, 600);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 27,
      vars: 6,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "navbar-brand", 2, "color", "#6490a7", "font-size", "25px", 3, "routerLink"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "nav-link", 3, "click"], ["src", "", "alt", ""], [2, "background-color", "#0f2027"], [1, "divs"], [2, "color", "#6490a7"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "JuniorDev");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Articulos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_14_listener() {
            return ctx.scroll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contacto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "footer", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Junior");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "juniordevelopperr@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["#article[_ngcontent-%COMP%]{\n\n}\n\n\nfooter[_ngcontent-%COMP%] {\n  text-align:center;\n  background: transparent;\n  color: white;\n  font-weight:300;\n  font-size:32px;\n  padding:20px;\n  height: 120px;\n  overflow:hidden;\n  -webkit-backface-visibility: hidden;\n  -webkit-perspective: 1000;\n  -webkit-transform: translate3d(0,0,0);\n}\n\n\n.divs[_ngcontent-%COMP%] {\n  display:inline-block;\n  overflow:hidden;\n  white-space:nowrap;\n}\n\n\n.divs[_ngcontent-%COMP%]:first-of-type {    \n  -webkit-animation: showup 7s infinite;\n          animation: showup 7s infinite;\n}\n\n\n.divs[_ngcontent-%COMP%]:last-of-type {\n  width:0px;\n  -webkit-animation: reveal 7s infinite;\n          animation: reveal 7s infinite;\n}\n\n\n.divs[_ngcontent-%COMP%]:last-of-type   span[_ngcontent-%COMP%] {\n  margin-left:0px;\n  -webkit-animation: slidein 7s infinite;\n          animation: slidein 7s infinite;\n}\n\n\n@-webkit-keyframes showup {\n    0% {opacity:0;}\n    20% {opacity:1;}\n    80% {opacity:1;}\n    100% {opacity:0;}\n}\n\n\n@keyframes showup {\n    0% {opacity:0;}\n    20% {opacity:1;}\n    80% {opacity:1;}\n    100% {opacity:0;}\n}\n\n\n@-webkit-keyframes slidein {\n    0% { margin-left:-800px; }\n    20% { margin-left:-800px; }\n    35% { margin-left:0px; }\n    100% { margin-left:0px; }\n}\n\n\n@keyframes slidein {\n    0% { margin-left:-800px; }\n    20% { margin-left:-800px; }\n    35% { margin-left:0px; }\n    100% { margin-left:0px; }\n}\n\n\n@-webkit-keyframes reveal {\n    0% {opacity:0;width:0px;}\n    20% {opacity:1;width:0px;}\n    30% {width:150px;}\n    80% {opacity:1;}\n    100% {opacity:0;width:150px;}\n}\n\n\n@keyframes reveal {\n    0% {opacity:0;width:0px;}\n    20% {opacity:1;width:0px;}\n    30% {width:150px;}\n    80% {opacity:1;}\n    100% {opacity:0;width:150px;}\n}\n\n\np[_ngcontent-%COMP%] {\n  font-size:18px;\n  color:#d3d5d6;\n  margin-bottom: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7QUFFQTs7O0FBR0E7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1DQUFtQztFQUNuQyx5QkFBeUI7RUFDekIscUNBQXFDO0FBQ3ZDOzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOzs7QUFFQSx5QkFBeUI7Ozs0Q0FHbUI7RUFDMUMscUNBQTZCO1VBQTdCLDZCQUE2QjtBQUMvQjs7O0FBRUE7RUFDRSxTQUFTO0VBQ1QscUNBQTZCO1VBQTdCLDZCQUE2QjtBQUMvQjs7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0NBQThCO1VBQTlCLDhCQUE4QjtBQUNoQzs7O0FBRUE7SUFDSSxJQUFJLFNBQVMsQ0FBQztJQUNkLEtBQUssU0FBUyxDQUFDO0lBQ2YsS0FBSyxTQUFTLENBQUM7SUFDZixNQUFNLFNBQVMsQ0FBQztBQUNwQjs7O0FBTEE7SUFDSSxJQUFJLFNBQVMsQ0FBQztJQUNkLEtBQUssU0FBUyxDQUFDO0lBQ2YsS0FBSyxTQUFTLENBQUM7SUFDZixNQUFNLFNBQVMsQ0FBQztBQUNwQjs7O0FBRUE7SUFDSSxLQUFLLGtCQUFrQixFQUFFO0lBQ3pCLE1BQU0sa0JBQWtCLEVBQUU7SUFDMUIsTUFBTSxlQUFlLEVBQUU7SUFDdkIsT0FBTyxlQUFlLEVBQUU7QUFDNUI7OztBQUxBO0lBQ0ksS0FBSyxrQkFBa0IsRUFBRTtJQUN6QixNQUFNLGtCQUFrQixFQUFFO0lBQzFCLE1BQU0sZUFBZSxFQUFFO0lBQ3ZCLE9BQU8sZUFBZSxFQUFFO0FBQzVCOzs7QUFFQTtJQUNJLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQztJQUN4QixLQUFLLFNBQVMsQ0FBQyxTQUFTLENBQUM7SUFDekIsS0FBSyxXQUFXLENBQUM7SUFDakIsS0FBSyxTQUFTLENBQUM7SUFDZixNQUFNLFNBQVMsQ0FBQyxXQUFXLENBQUM7QUFDaEM7OztBQU5BO0lBQ0ksSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDO0lBQ3hCLEtBQUssU0FBUyxDQUFDLFNBQVMsQ0FBQztJQUN6QixLQUFLLFdBQVcsQ0FBQztJQUNqQixLQUFLLFNBQVMsQ0FBQztJQUNmLE1BQU0sU0FBUyxDQUFDLFdBQVcsQ0FBQztBQUNoQzs7O0FBR0E7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiNhcnRpY2xle1xuXG59XG5cblxuZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OjMwMDtcbiAgZm9udC1zaXplOjMycHg7XG4gIHBhZGRpbmc6MjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgb3ZlcmZsb3c6aGlkZGVuO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbn1cblxuLmRpdnMge1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6aGlkZGVuO1xuICB3aGl0ZS1zcGFjZTpub3dyYXA7XG59XG5cbi5kaXZzOmZpcnN0LW9mLXR5cGUgeyAgICAvKiBGb3IgaW5jcmVhc2luZyBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgICAgICAgICAgICBJRC9DbGFzcyBzaG91bGQndmUgYmVlbiB1c2VkLlxuICAgICAgICAgICAgICAgICAgICAgICBGb3IgYSBzbWFsbCBkZW1vXG4gICAgICAgICAgICAgICAgICAgICAgIGl0J3Mgb2thaXNoIGZvciBub3cgKi9cbiAgYW5pbWF0aW9uOiBzaG93dXAgN3MgaW5maW5pdGU7XG59XG5cbi5kaXZzOmxhc3Qtb2YtdHlwZSB7XG4gIHdpZHRoOjBweDtcbiAgYW5pbWF0aW9uOiByZXZlYWwgN3MgaW5maW5pdGU7XG59XG5cbi5kaXZzOmxhc3Qtb2YtdHlwZSBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6MHB4O1xuICBhbmltYXRpb246IHNsaWRlaW4gN3MgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc2hvd3VwIHtcbiAgICAwJSB7b3BhY2l0eTowO31cbiAgICAyMCUge29wYWNpdHk6MTt9XG4gICAgODAlIHtvcGFjaXR5OjE7fVxuICAgIDEwMCUge29wYWNpdHk6MDt9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVpbiB7XG4gICAgMCUgeyBtYXJnaW4tbGVmdDotODAwcHg7IH1cbiAgICAyMCUgeyBtYXJnaW4tbGVmdDotODAwcHg7IH1cbiAgICAzNSUgeyBtYXJnaW4tbGVmdDowcHg7IH1cbiAgICAxMDAlIHsgbWFyZ2luLWxlZnQ6MHB4OyB9XG59XG5cbkBrZXlmcmFtZXMgcmV2ZWFsIHtcbiAgICAwJSB7b3BhY2l0eTowO3dpZHRoOjBweDt9XG4gICAgMjAlIHtvcGFjaXR5OjE7d2lkdGg6MHB4O31cbiAgICAzMCUge3dpZHRoOjE1MHB4O31cbiAgICA4MCUge29wYWNpdHk6MTt9XG4gICAgMTAwJSB7b3BhY2l0eTowO3dpZHRoOjE1MHB4O31cbn1cblxuXG5wIHtcbiAgZm9udC1zaXplOjE4cHg7XG4gIGNvbG9yOiNkM2Q1ZDY7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.routing */
    "./src/app/app.routing.ts");
    /* harmony import */


    var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @tinymce/tinymce-angular */
    "./node_modules/@tinymce/tinymce-angular/__ivy_ngcc__/fesm2015/tinymce-tinymce-angular.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony import */


    var _components_article_article_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/article/article.component */
    "./src/app/components/article/article.component.ts");
    /* harmony import */


    var _components_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/article-list/article-list.component */
    "./src/app/components/article-list/article-list.component.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_articles_comenzar_programacion_general_desarollo_web_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/articles/comenzar-programacion-general/desarollo-web.component */
    "./src/app/components/articles/comenzar-programacion-general/desarollo-web.component.ts");
    /* harmony import */


    var _components_articles_desarollo_web_junior_desarollo_web_junior_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/articles/desarollo-web-junior/desarollo-web-junior.component */
    "./src/app/components/articles/desarollo-web-junior/desarollo-web-junior.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_app_routing__WEBPACK_IMPORTED_MODULE_2__["appRoutingProviders"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing__WEBPACK_IMPORTED_MODULE_2__["routing"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_3__["EditorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _components_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_8__["ArticleListComponent"], _components_article_article_component__WEBPACK_IMPORTED_MODULE_7__["ArticleComponent"], _components_articles_comenzar_programacion_general_desarollo_web_component__WEBPACK_IMPORTED_MODULE_10__["DesarolloWebComponent"], _components_articles_desarollo_web_junior_desarollo_web_junior_component__WEBPACK_IMPORTED_MODULE_11__["DesarolloWebJuniorComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_3__["EditorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _components_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_8__["ArticleListComponent"], _components_article_article_component__WEBPACK_IMPORTED_MODULE_7__["ArticleComponent"], _components_articles_comenzar_programacion_general_desarollo_web_component__WEBPACK_IMPORTED_MODULE_10__["DesarolloWebComponent"], _components_articles_desarollo_web_junior_desarollo_web_junior_component__WEBPACK_IMPORTED_MODULE_11__["DesarolloWebJuniorComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing__WEBPACK_IMPORTED_MODULE_2__["routing"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_3__["EditorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
          providers: [_app_routing__WEBPACK_IMPORTED_MODULE_2__["appRoutingProviders"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.routing.ts":
  /*!********************************!*\
    !*** ./src/app/app.routing.ts ***!
    \********************************/

  /*! exports provided: appRoutingProviders, routing */

  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function () {
      return appRoutingProviders;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routing", function () {
      return routing;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony import */


    var _components_article_article_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/article/article.component */
    "./src/app/components/article/article.component.ts");
    /* harmony import */


    var _components_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/article-list/article-list.component */
    "./src/app/components/article-list/article-list.component.ts");
    /* harmony import */


    var _components_articles_comenzar_programacion_general_desarollo_web_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/articles/comenzar-programacion-general/desarollo-web.component */
    "./src/app/components/articles/comenzar-programacion-general/desarollo-web.component.ts");
    /* harmony import */


    var _components_articles_desarollo_web_junior_desarollo_web_junior_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/articles/desarollo-web-junior/desarollo-web-junior.component */
    "./src/app/components/articles/desarollo-web-junior/desarollo-web-junior.component.ts"); //Componentes


    var appRoutes = [{
      path: '',
      component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"]
    }, {
      path: 'articulo/:id',
      component: _components_article_article_component__WEBPACK_IMPORTED_MODULE_2__["ArticleComponent"]
    }, {
      path: 'articulos',
      component: _components_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_3__["ArticleListComponent"]
    }, {
      path: 'about',
      component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"]
    }, {
      path: 'por-donde-empezar-a-programar',
      component: _components_articles_comenzar_programacion_general_desarollo_web_component__WEBPACK_IMPORTED_MODULE_4__["DesarolloWebComponent"]
    }, {
      path: 'por-donde-empezar-en-el-desarollo-web',
      component: _components_articles_desarollo_web_junior_desarollo_web_junior_component__WEBPACK_IMPORTED_MODULE_5__["DesarolloWebJuniorComponent"]
    }, {
      path: '**',
      component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"]
    }];
    var appRoutingProviders = [];

    var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);
    /***/

  },

  /***/
  "./src/app/components/about/about.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/about/about.component.ts ***!
    \*****************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);

        this.title = 'Junior Developer';
        this.subtitle = "Desarollo Web";
        this.email = 'juniordevelopperr@gmail.com';
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 13,
      vars: 3,
      consts: [["id", "content"], ["id", "title"], [1, "about"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "article", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sobre Mi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Hola soy Desarollador web junior y he creado esta pagina para resolver algunas dudas sobre el Desarollo Web desde mi punto de vista, dado que estoy aprendiendo y todav\xEDa tengo algunas dudas, es probable que si estas empezando tengas dudas similares a las mias. Esta pagina no tiene el fin de ense\xF1arte a programar, por lo que no mostrar\xE9 codigo. El fin de esta pagina es que sepas por donde empezar e ir aprendiendo m\xE1s rapido. Si me he equivocado en algo o si tienes dudas y quieres que haga un articulo para resolverlas puedes enviarme un correo yo estare agradecido en responderte. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subtitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.email);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/article-list/article-list.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/article-list/article-list.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ArticleListComponent */

  /***/
  function srcAppComponentsArticleListArticleListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function () {
      return ArticleListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/article.service */
    "./src/app/services/article.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a1) {
      return ["/articulo", a1];
    };

    function ArticleListComponent_div_3_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var article_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, article_r3._id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r3.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r3.resumen);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r3.date);
      }
    }

    function ArticleListComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ArticleListComponent_div_3_div_2_Template, 10, 6, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.articles);
      }
    }

    function ArticleListComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ArticleListComponent = /*#__PURE__*/function () {
      function ArticleListComponent(_articleService) {
        _classCallCheck(this, ArticleListComponent);

        this._articleService = _articleService;
      }

      _createClass(ArticleListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getArticles();
        }
      }, {
        key: "getArticles",
        value: function getArticles() {
          var _this = this;

          //Devolver articulo
          this._articleService.getArticles().subscribe(function (response) {
            if (response.articles) {
              _this.articles = response.articles;
            } else {
              _this.status = 'failed';
            }
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return ArticleListComponent;
    }();

    ArticleListComponent.ɵfac = function ArticleListComponent_Factory(t) {
      return new (t || ArticleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"]));
    };

    ArticleListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ArticleListComponent,
      selectors: [["app-article-list"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"]])],
      decls: 5,
      vars: 2,
      consts: [[1, "articles-list"], [2, "text-align", "center"], ["class", "articles", 4, "ngIf"], ["class", "gif-carga", 4, "ngIf"], [1, "articles"], ["id", "card"], ["class", "card-group", 4, "ngFor", "ngForOf"], [1, "card-group"], [1, "card", 3, "routerLink"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "card-footer"], [1, "text-muted"], [1, "gif-carga"], ["src", "assets/cargando.gif", "alt", ""]],
      template: function ArticleListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Articulos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ArticleListComponent_div_3_Template, 3, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ArticleListComponent_div_4_Template, 2, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.articles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.articles);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: [".articles-list[_ngcontent-%COMP%]{\n  min-height: 800px;\n}\n\n.gif-carga[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    vertical-align: middle;\n    border-style: none;\n    display: block;\n    margin: 0px auto;\n    max-width: 360px;\n    width: 100%;\n}\n\n.articles[_ngcontent-%COMP%]{\n  padding: 12px;\n}\n\n#card[_ngcontent-%COMP%]{\n  display: inline-block;\n  padding: 10px;\n}\n\n.card-group[_ngcontent-%COMP%]{\n  display: inline-flex;\n}\n\n.card[_ngcontent-%COMP%]{\n  margin: 5px;\n  cursor: pointer;\n  transition: all 300ms;\n}\n\n.card[_ngcontent-%COMP%]:hover{\n  box-shadow: 0px 0px 5px black;\n  transform: translateY(-10px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcnRpY2xlLWxpc3QvYXJ0aWNsZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qiw0QkFBNEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FydGljbGUtbGlzdC9hcnRpY2xlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcnRpY2xlcy1saXN0e1xuICBtaW4taGVpZ2h0OiA4MDBweDtcbn1cblxuLmdpZi1jYXJnYSBpbWd7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBtYXgtd2lkdGg6IDM2MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYXJ0aWNsZXN7XG4gIHBhZGRpbmc6IDEycHg7XG59XG5cbiNjYXJke1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jYXJkLWdyb3Vwe1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLmNhcmR7XG4gIG1hcmdpbjogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbn1cblxuLmNhcmQ6aG92ZXJ7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IGJsYWNrO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-article-list',
          templateUrl: './article-list.component.html',
          styleUrls: ['./article-list.component.css'],
          providers: [_services_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"]]
        }]
      }], function () {
        return [{
          type: _services_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/article/article.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/article/article.component.ts ***!
    \*********************************************************/

  /*! exports provided: ArticleComponent */

  /***/
  function srcAppComponentsArticleArticleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleComponent", function () {
      return ArticleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/article.service */
    "./src/app/services/article.service.ts");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ArticleComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ArticleComponent = /*#__PURE__*/function () {
      function ArticleComponent(_articleService, _router, _route) {
        _classCallCheck(this, ArticleComponent);

        this._articleService = _articleService;
        this._router = _router;
        this._route = _route;
        this.etiquetas = "<p>";
      }

      _createClass(ArticleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this._route.params.subscribe(function (params) {
            var id = params.id;

            _this2.getArticle(id);
          });
        }
      }, {
        key: "getArticle",
        value: function getArticle(id) {
          var _this3 = this;

          this._articleService.getArticle(id).subscribe(function (response) {
            console.log(response);
            _this3.article = response.article;
            jquery__WEBPACK_IMPORTED_MODULE_2__('.body').append(_this3.article.content); //Funciones de articulos:

            _this3.boton = jquery__WEBPACK_IMPORTED_MODULE_2__('.BJS');

            if (_this3.boton.length >= 1) {
              //$('html, body').animate({ scrollTop: ($('.areas').offset().top)},600);
              jquery__WEBPACK_IMPORTED_MODULE_2__('.BJS').click(function () {
                setTimeout(function () {
                  jquery__WEBPACK_IMPORTED_MODULE_2__('body').css('background', '#f0d91d');
                  jquery__WEBPACK_IMPORTED_MODULE_2__('.BJS').css('background', '#f0d91d');
                  setTimeout(function () {
                    jquery__WEBPACK_IMPORTED_MODULE_2__('body').css('background', '#ff6620');
                    jquery__WEBPACK_IMPORTED_MODULE_2__('.BJS').css('background', '#ff6620');
                    setTimeout(function () {
                      jquery__WEBPACK_IMPORTED_MODULE_2__('body').css('background', 'rgba(255, 255, 255, 0.8)');
                      jquery__WEBPACK_IMPORTED_MODULE_2__('.BJS').css('background', '#182128');
                      setTimeout(function () {}, 600);
                    }, 1500);
                  }, 1500);
                }, 1000);
              });
            }
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return ArticleComponent;
    }();

    ArticleComponent.ɵfac = function ArticleComponent_Factory(t) {
      return new (t || ArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    ArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ArticleComponent,
      selectors: [["app-article"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"]])],
      decls: 3,
      vars: 1,
      consts: [[1, "container"], [1, "body"], ["class", "gif-carga", 4, "ngIf"], [1, "gif-carga"], ["src", "assets/cargando.gif", "alt", ""]],
      template: function ArticleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "article", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ArticleComponent_div_2_Template, 2, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.article);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: [".container[_ngcontent-%COMP%]{\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  min-height: 1200px;\n}\n\n.gif-carga[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    vertical-align: middle;\n    border-style: none;\n    display: block;\n    margin: 0px auto;\n    max-width: 360px;\n    width: 100%;\n}\n\n\n\n.BJS[_ngcontent-%COMP%]{\n  cursor: pointer;\n  width: 50%;\n  height: 50px;\n  border-radius: 8px;\n  text-align: center;\n  background: #e9d54d;\n  padding: 5px;\n  transition: all 600ms;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUEscUJBQXFCOztBQUNyQjtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWluLWhlaWdodDogMTIwMHB4O1xufVxuXG4uZ2lmLWNhcmdhIGltZ3tcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIG1heC13aWR0aDogMzYwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi8qQXJ0LkRlc2Fycm9sbG8gV2ViKi9cbi5CSlN7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2U5ZDU0ZDtcbiAgcGFkZGluZzogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNjAwbXM7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-article',
          templateUrl: './article.component.html',
          styleUrls: ['./article.component.css'],
          providers: [_services_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"]]
        }]
      }], function () {
        return [{
          type: _services_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/articles/comenzar-programacion-general/desarollo-web.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/components/articles/comenzar-programacion-general/desarollo-web.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: DesarolloWebComponent */

  /***/
  function srcAppComponentsArticlesComenzarProgramacionGeneralDesarolloWebComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DesarolloWebComponent", function () {
      return DesarolloWebComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);

    var DesarolloWebComponent = /*#__PURE__*/function () {
      function DesarolloWebComponent() {
        _classCallCheck(this, DesarolloWebComponent);
      }

      _createClass(DesarolloWebComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "scroll",
        value: function scroll() {
          jquery__WEBPACK_IMPORTED_MODULE_1__('html, body').animate({
            scrollTop: jquery__WEBPACK_IMPORTED_MODULE_1__('.areas').offset().top
          }, 600);
        }
      }]);

      return DesarolloWebComponent;
    }();

    DesarolloWebComponent.ɵfac = function DesarolloWebComponent_Factory(t) {
      return new (t || DesarolloWebComponent)();
    };

    DesarolloWebComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DesarolloWebComponent,
      selectors: [["app-desarollo-web"]],
      decls: 104,
      vars: 0,
      consts: [[1, "container"], [1, "data"], [1, ""], [1, "resaltado", 2, "cursor", "pointer", "color", "#007bff", 3, "click"], ["target", "_blank", "href", "https://www.youtube.com/watch?v=OPlGMplfEbc"], [1, "resaltado"], ["href", "https://eloquentjavascript.net/", "target", "_blank", 1, "resaltado"], [1, "div-area"], ["id", "img"], ["src", "assets/img/como-empezar-a-programar/img.jpg", "alt", "Areas de la programaci\xF3n"], [1, "areas"], [1, "lista"], ["href", "https://ed.team/blog/cuales-son-las-areas-de-la-programacion", "target", "_blank"], [1, "fin"]],
      template: function DesarolloWebComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xBFPor donde empezar a programar?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Lo primero que debes saber es ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xBFqu\xE9 quieres hacer?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ", antes de aprender un lenguaje, ya que hay muchas ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DesarolloWebComponent_Template_span_click_10_listener() {
            return ctx.scroll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "areas en la programaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ". Por ejemplo si quieres desarrollar un juego, deber\xEDas aprender un lenguaje basado en C, ya que la mayor\xEDa de los lenguajes de programaci\xF3n orientados a videojuegos est\xE1n basados en este lenguaje, pero si quieres hacer una pagina web profesional deber\xEDas aprender un lenguaje como JavaScript. As\xED que lo primero es decidir que lenguaje vas a estudiar seg\xFAn lo que quieres hacer o porque. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Si no entendiste nada de esto te recomiendo ver ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Este video");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, ". Tambi\xE9n puedes comenzar de una forma mas general en la programaci\xF3n aprendiendo fundamentos de la programaci\xF3n, Pseudoc\xF3digo y algoritmos. Puedes tomar cualquiera de estos caminos, lo importante es la practica para desarrollar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "la l\xF3gica de programaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Si quieres empezar ahora y ver ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "codigo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " te recomiendo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "este libro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, ". La primera parte de este libro no tiene desperdicio alguno, te va a servir para adentrarte en la programaci\xF3n y para casi cualquier area de la programaci\xF3n. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\xBFQue Lenguaje de programaci\xF3n deber\xEDa aprender?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Es la pregunta que todos nos hacemos cuando queremos empezar en la programaci\xF3n, y es probable que hayas buscado cual es el mejor lenguaje de programaci\xF3n y no lo hayas encontrado, porque simplemente no existe el mejor lenguaje. Cada lenguaje tiene lo suyo, algunos son m\xE1s f\xE1ciles de aprender que otros, o est\xE1n distinados a distintas ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DesarolloWebComponent_Template_span_click_34_listener() {
            return ctx.scroll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "areas en la programaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, ". Para saber que lenguaje aprender como dije arriba deber\xEDas preguntarte ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\xBFPor qu\xE9 quieres aprender a programar?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, ". Si quieres aprender a programar para ganar dinero, puedes buscar los lenguajes mejores pagados por las empresas, y si tienes una idea buscar los lenguajes para ejecutarla. Lo importante es que sepas que estas haciendo y a donde quieres llegar. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Si todav\xEDa no sabes con que lenguaje empezar estas son algunas areas de la programaci\xF3n:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Busca los lenguajes y tecnologias que se utilizan en el area que quieres aprender, y cuales son las mas utilizados.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Desarrollo web");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Desarrollo m\xF3vil");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Videojuegos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Realidad virtual y aumentada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Desarrollo de aplicaciones de escritorio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Sistemas operativos / Embebidos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Seguridad inform\xE1tica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Machine learning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Cloud computing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Si quieres saber m\xE1s de las areas puedes ir a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "EDteam");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\xBFComo aprender a programar?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Ya sabiendo que lenguaje quieres estudiar puedes empezar buscando informaci\xF3n en internet sobre \xE9l, como en YouTube para que te puedas guiar antes de leer alg\xFAn libro, tomar un curso, o ir a la Universidad. Lo principal es que sepas como es el lenguaje, su entorno y las tecnologias que los rodean, y as\xED poder empezar lo mas r\xE1pido posible. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Puedes aprender un lenguaje:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Con un libro:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " recomiendo mucho esto, porque por lo menos a mi jamas se me olvid\xF3 lo que aprend\xED en un libro.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Empezando un proyecto peque\xF1o o con ejercicios b\xE1sicos:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "si comienzas un proyecto peque\xF1o aprenderas mas sobre el lenguaje y las tecnolog\xEDas que lo rodean. Puedes buscar ejercicios y proyectos, en libros y en YouTube. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Tomando un curso por internet:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " si tomas un curso te recomendar\xEDa informarte en internet antes de hacerlo. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\xBFCu\xE1nto tiempo se tarda en aprender un lenguaje?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Dependiendo del lenguaje que estudies y como lo hagas es lo que te vas a tardar, pero generalmente depende de t\xED. Tienes que saber que cualquier lenguaje que estudies te va a llevar tiempo aprenderlo, no trates de ir muy rapido o de aprender todo en poco tiempo, tomate tu tiempo y ve a tu ritmo, si aprendes un lenguaje te ayudar\xE1 a aprender otros mas f\xE1cil . Si le dedicas unas buenas horas por d\xEDa es probable que en 6 meses ya tengas unas buenas bases del lenguaje, esto te va a ayudar mucho a poder desarrollar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "la l\xF3gica de programaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, ". Cuando empec\xE9 estaba muy confundido y no sab\xEDa como comenzar o por donde, por eso te recomiendo buscar informaci\xF3n acerca del lenguaje y el area de programaci\xF3n antes de empezar. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Conclusi\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " No hay una forma de empezar en la programaci\xF3n, el lenguaje o tecnolog\xEDa que decidas va a estar bien y te ayudar\xE1 aprender otros lenguajes mucho mas f\xE1cil, lo importante es que guste lo que haces y nunca perder de vista el objetivo o la idea principal. Si tienes alguna duda, puedes enviarme un correo en la direcci\xF3n de aqu\xED abajo, y estar\xE9 encantado de ayudarte. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".img-p[_ngcontent-%COMP%]{\n  width: 100%;\n  margin: 0px auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcnRpY2xlcy9jb21lbnphci1wcm9ncmFtYWNpb24tZ2VuZXJhbC9kZXNhcm9sbG8td2ViLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FydGljbGVzL2NvbWVuemFyLXByb2dyYW1hY2lvbi1nZW5lcmFsL2Rlc2Fyb2xsby13ZWIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctcHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DesarolloWebComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-desarollo-web',
          templateUrl: './desarollo-web.component.html',
          styleUrls: ['./desarollo-web.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/articles/desarollo-web-junior/desarollo-web-junior.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/components/articles/desarollo-web-junior/desarollo-web-junior.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: DesarolloWebJuniorComponent */

  /***/
  function srcAppComponentsArticlesDesarolloWebJuniorDesarolloWebJuniorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DesarolloWebJuniorComponent", function () {
      return DesarolloWebJuniorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);

    var DesarolloWebJuniorComponent = /*#__PURE__*/function () {
      function DesarolloWebJuniorComponent() {
        _classCallCheck(this, DesarolloWebJuniorComponent);

        this.etiquetas = "<p>";
      }

      _createClass(DesarolloWebJuniorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "scroll",
        value: function scroll() {
          jquery__WEBPACK_IMPORTED_MODULE_1__('html, body').animate({
            scrollTop: jquery__WEBPACK_IMPORTED_MODULE_1__('.divs').offset().top
          }, 600);
        }
      }, {
        key: "cambiaColor",
        value: function cambiaColor() {
          setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('#content').css('background', '#f0d91d');
            jquery__WEBPACK_IMPORTED_MODULE_1__('.BJS').css('background', '#f0d91d');
            document.getElementById("demo").innerHTML = "3";
            setTimeout(function () {
              jquery__WEBPACK_IMPORTED_MODULE_1__('#content').css('background', '#ff6620');
              jquery__WEBPACK_IMPORTED_MODULE_1__('.BJS').css('background', '#ff6620');
              document.getElementById("demo").innerHTML = "2";
              setTimeout(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__('#content').css('background', 'rgba(255, 255, 255, 0.8)');
                jquery__WEBPACK_IMPORTED_MODULE_1__('.BJS').css('background', '#182128');
                document.getElementById("demo").innerHTML = "1";
                setTimeout(function () {
                  document.getElementById("demo").innerHTML = "JS";
                }, 600);
              }, 1500);
            }, 1500);
          }, 1000);
        }
      }, {
        key: "countDown",
        value: function countDown() {}
      }]);

      return DesarolloWebJuniorComponent;
    }();

    DesarolloWebJuniorComponent.ɵfac = function DesarolloWebJuniorComponent_Factory(t) {
      return new (t || DesarolloWebJuniorComponent)();
    };

    DesarolloWebJuniorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DesarolloWebJuniorComponent,
      selectors: [["app-desarollo-web-junior"]],
      decls: 195,
      vars: 1,
      consts: [[1, "container"], [1, "div-area"], [1, "resaltado"], [1, ""], [1, "subtitle"], ["target", "_blank", "href", "https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/HTML_basics", 1, "resaltado"], ["id", "img", 2, "background", "#ff6620"], ["src", "assets/img/des-principiantes/html.jpg", "alt", "Como agregar un estilo CSS"], [1, "resaltado", 2, "cursor", "pointer", "color", "#3d7bff", 3, "click"], ["src", "assets/img/des-principiantes/img8.jpg", "alt", "Como agregar un estilo CSS"], [1, "resultado"], [1, "resaltado-h2"], [1, "BJS", 3, "click"], ["id", "demo", 2, "color", "white"], [2, "font-size", "22px", "margin-top", "30px", "font-weight", "500", "display", "block"], [2, "border-bottom", "1px solid #ccc"], [1, "card-group", 2, "margin-top", "20px", "margin-bottom", "20px"], [1, "card", 2, "width", "100%"], ["src", "assets/img/des-principiantes/front.jpg", "alt", "Ejemplo Front-End", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["src", "assets/img/des-principiantes/back1.jpg", "alt", "Ejemplo Back-End", 1, "card-img-top"], [2, "padding-left", "20px"], [1, "resaltado", 2, "color", "#050f35"], [1, "resaltado", 2, "color", "#09354c"], [1, "resumen"], [2, "color", "#638ea4"], [1, "lista"]],
      template: function DesarolloWebJuniorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Empezando en el Desarrollo Web 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Este articulo tiene el objetivo de guiarte para empezar en el Desarrollo Web");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Antes de empezar en el desarrollo web tienes que saber lo que se necesita para desarrollar una pagina web basica, y las partes para desarrollar una pagina web mas complejas. Hay mucho que aprender pero esto es lo b\xE1sico que debes saber si quieres empezar en esto. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\xBFQue se nesecita para crear una pagina web?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Esto es lo b\xE1sico que necesitas aprender para crear una p\xE1gina web, sin esto es casi imposible o imposible crear una web. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Editor de C\xF3digo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Aqu\xED es donde vas a escribir el c\xF3digo de tu web, existen muchos editores de codigo como Sublime text, Atom, Visual Studio Code, etc. No hace falta que elijas el mejor, la mayor\xEDa cumplen bien su funci\xF3n quedate con el que m\xE1s te guste o se te haga c\xF3modo. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Apariencia:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Para crear la apariencia de una web se necesita HTML(para darle estructura a la web) y CSS(Para darle estilos a la web). ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "HTML:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Siglas en ingl\xE9s de HyperText Markup Language , hace referencia al lenguaje de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "marcado (HTML no es un lenguaje de programaci\xF3n)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " para la elaboraci\xF3n de la estructura de una p\xE1ginas web. Si quieres conocer los conceptos b\xE1sico de HTML puedes ir ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "aqu\xED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Ejemplo:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " esta p\xE1gina web est\xE1 hecha con etiquetas como ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " que representa un parrafo, dentro de el he escrito esto que estas leyendo. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "CSS:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " En espa\xF1ol ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Hojas de estilo en cascada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, ", es un lenguaje de dise\xF1o gr\xE1fico para definir aspecto de una p\xE1gina web y crear la presentaci\xF3n de esta.\u200B B\xE1sicamente se utiliza para que una web se vea mejor. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Ejemplo:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Este es el ejemplo mas b\xE1sico del Mundo, se puede hacer mas complejas con CSS como el ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DesarolloWebJuniorComponent_Template_span_click_52_listener() {
            return ctx.scroll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "footer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " de esta pagina. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Texto resaltado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "No te preocupes si no has entendido esto, con un poco de pr\xE1ctica en poco tiempo puedes aprender facilmente estos conceptos.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "JavaScript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " JavaScript ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "NO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " es Java, es un lenguaje de programaci\xF3n que se utiliza principalmente para crear p\xE1ginas web din\xE1micas. Una p\xE1gina web din\xE1mica es aquella que incorpora efectos como texto que aparece y desaparece, animaciones, acciones que se activan al pulsar botones y ventanas con mensajes de aviso al usuario. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Ejemplo:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Este es un ejemplo b\xE1sico de JavaScript, has click en el boton de abajo para ver el ejemplo. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DesarolloWebJuniorComponent_Template_div_click_74_listener() {
            return ctx.cambiaColor();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h2", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "JS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Sabiendo estos conceptos ya puedes crear una pagina web b\xE1sica.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\xBFComo empezar en el desarrollo web en 2020?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Para empezar, el desarrollo web se divide en dos partes: lado del cliente (Front-End) y lado del servidor (Back-End). Ac\xE1 abajo te dejo un ejemplo muy simplificado de los dos. Tienes que saber que el desarrollo web es muy amplio y este articulo solo es para guiarte por donde empezar. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Front-End");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Es la parte visual de la aplicaci\xF3n web, es la parte que ve el usuario. Este conjunto crea la experiencia del usuario y recibe los datos del Back-End para mostrarlo de manera que el usuario lo entienda. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Para ser desarollador Front-End tienes que saber: HTML, CSS y JavaScript con ellos puedes hacer el Front-End de una Web , pero hay tecnolog\xEDas que deber\xEDas aprender como Frameworks y Librer\xEDas. Estas tecnolog\xEDas te har\xE1n el trabajo mucho m\xE1s f\xE1cil y te va a ahorrar mucho tiempo. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Back-End");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " El backend es la parte del desarrollo web que se encarga de que toda la l\xF3gica de una p\xE1gina web funcione. Esta parte es la que se encarga de almacenar datos(imagenes, textos, archivos, etc), llevar los datos al Front-End y devolverlos cuando sea requerido. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Estas son alguna cosas que tienes que aprender del Back-End-End: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Base de datos y cach\xE9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "APIs(REST)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Lenguajes de Servidor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "\xBFCual deber\xEDa aprender?\xBFDesarrollo Back-End o Front-End?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Deber\xEDas aprender el que m\xE1s te guste, pero ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "yo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " te recomendar\xEDa aprender los dos o aprender alg\xFAn ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Stack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, ", ya que va a beneficiarte tanto profesionalmente como laboralmente. Ac\xE1 abajo te dejo lo que deber\xEDas aprender de cada uno. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Front-End");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Frameworks y Librer\xEDas JavaScript: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " Un framework es una herramienta de desarrollo web que se define como una aplicaci\xF3n o conjunto de m\xF3dulos que permiten el desarrollo r\xE1pido y \xE1gil de aplicaciones ya que tienen librer\xEDas y/o funcionalidades ya creadas. B\xE1sicamente hace el trabajo de desarollador mas r\xE1pido y f\xE1cil. Estos son algunos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Frameworks JavaScript m\xE1s populares:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Angular, React y Vue. Los tres son muy buenos, te recomiendo que los investigues para sepas cual es el que m\xE1s te conviene o que m\xE1s te interesa para lo que quieres hacer. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Frameworks CSS: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Un framework de CSS es una biblioteca de estilos gen\xE9ricos que puede ser usada para implementar dise\xF1os web(como botones, iconos, targetas, etc). Los frameworks CSS vienen con clases ya creadas, esto te va ahorrar mucho tiempo al crear una p\xE1gina web. Uno de los ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Frameworks CSS m\xE1s Populares");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " es ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Bootstrap.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Pre Procesadores de CSS: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " Un preprocesador de CSS es una herramienta que nos permite escribir pseudo-c\xF3digo CSS que luego ser\xE1 convertido a CSS real . B\xE1sicamente hace que este lenguaje de dise\xF1o tenga variables, condiciones, bucles o funciones como un lenguaje como JavaScript. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Estos son algunos de los mas conocidos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " Sass, Less y Stylus. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Back-End");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Lenguaje de Base de Datos:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " Adem\xE1s de los lenguajes de programaci\xF3n, tienes que aprender un lenguaje de bases de datos para poder almacenar la informaci\xF3n, que es lo mas importante de cualquier aplicaci\xF3n web . ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Lenguaje del lado del servidor:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " Se conoce como lenguaje del lado del servidor a aquel que se ejecuta en el servidor web, inmediatamente antes de que el sitio web se env\xEDe a trav\xE9s de Internet al usuario. Este se encarga de recibir solicitudes de clientes que solicitan p\xE1ginas HTML u otro tipo de archivos como im\xE1genes y entregarlos al usuario. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Algunos lenguajes de servidor son");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "PHP, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Node.JS (programaci\xF3n backend en JavaScript)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, ", Python, entre otros. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Frameworks y Librer\xEDas:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " El Framework sigue siendo una gr\xE1n ayuda al desarrollar como en el Front-End pero en este caso todos los frameworks tienen la principal tarea de crear un servidor web. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " He tratado de simplificar lo m\xE1s posible este articulo para guiarte en el desarrollo web desde el punto de vista de alguien que no sabe nada sobre el desarrollo web. Se que esto te puede parecer mucho ahora pero cuando empieces a aprender te daras cuenta que no. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "h3", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Consejo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " Habras notado que no hay un solo camino por donde empezar en esto y como en este articulo no voy a venderte un curso o libro de programaci\xF3n, no voy a recomendarte ning\xFAn lenguaje. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Te aconsejo Aprender un Stack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "\xBFQue es un Stack?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, " B\xE1sicamente, es una lista de todos los servicios tecnol\xF3gicos utilizados para construir y ejecutar una sola aplicaci\xF3n. Facebook, por ejemplo, est\xE1 compuesto por una combinaci\xF3n de frameworks de codificaci\xF3n y lenguajes, entre los que se incluyen JavaScript, HTML, CSS, PHP y ReactJS. Este es el \u201Cstack tecnol\xF3gico\u201D de Facebook. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " Por lo general un Stack tiene todo nescesario para crear una web(o aplicaci\xF3n) y te ser\xE1 m\xE1s f\xE1cil buscar un Stack, a tener que buscar Framework por Framework y lenguaje por lenguaje. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Stacks m\xE1s populares:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "ul", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "MEAN Stack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "MERN Stack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "MEVN Stack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "LAMP Stack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Te recomiendo buscar m\xE1s informaci\xF3n sobre estos u otros stacks.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.etiquetas);
        }
      },
      styles: [".resultado[_ngcontent-%COMP%]{\n  background: #ccc;\n  border-left: 2px solid #ff6620;\n}\n\n.resaltado-h2[_ngcontent-%COMP%]{\n  color: #6490a7;\n  text-decoration: underline;\n  padding: 12px;\n}\n\n.img[_ngcontent-%COMP%]{\n  width: 70%;\n  margin: 0px auto;\n  display: block;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcnRpY2xlcy9kZXNhcm9sbG8td2ViLWp1bmlvci9kZXNhcm9sbG8td2ViLWp1bmlvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCwwQkFBMEI7RUFDMUIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hcnRpY2xlcy9kZXNhcm9sbG8td2ViLWp1bmlvci9kZXNhcm9sbG8td2ViLWp1bmlvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VsdGFkb3tcbiAgYmFja2dyb3VuZDogI2NjYztcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZmY2NjIwO1xufVxuXG4ucmVzYWx0YWRvLWgye1xuICBjb2xvcjogIzY0OTBhNztcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHBhZGRpbmc6IDEycHg7XG59XG5cbi5pbWd7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DesarolloWebJuniorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-desarollo-web-junior',
          templateUrl: './desarollo-web-junior.component.html',
          styleUrls: ['./desarollo-web-junior.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/article.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/article.service.ts ***!
    \*********************************************/

  /*! exports provided: ArticleService */

  /***/
  function srcAppServicesArticleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleService", function () {
      return ArticleService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./global */
    "./src/app/services/global.ts");

    var ArticleService = /*#__PURE__*/function () {
      function ArticleService(_http) {
        _classCallCheck(this, ArticleService);

        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_2__["Global"].url;
      }

      _createClass(ArticleService, [{
        key: "testService",
        value: function testService() {
          return "probando servicio de Angular";
        }
      }, {
        key: "saveArticle",
        value: function saveArticle(article) {
          var params = JSON.stringify(article);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
          return this._http.post(this.url + 'save-article', params, {
            headers: headers
          });
        }
      }, {
        key: "getArticles",
        value: function getArticles() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
          return this._http.get(this.url + 'articles', {
            headers: headers
          });
        }
      }, {
        key: "getArticle",
        value: function getArticle(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
          return this._http.get(this.url + 'article/' + id, {
            headers: headers
          });
        }
      }, {
        key: "deleteArticle",
        value: function deleteArticle(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
          return this._http["delete"](this.url + 'article/' + id, {
            headers: headers
          });
        }
      }, {
        key: "updateArticle",
        value: function updateArticle(article) {
          var params = JSON.stringify(article);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
          return this._http.put(this.url + 'article/' + article._id, params, {
            headers: headers
          });
        }
      }]);

      return ArticleService;
    }();

    ArticleService.ɵfac = function ArticleService_Factory(t) {
      return new (t || ArticleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ArticleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ArticleService,
      factory: ArticleService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/global.ts":
  /*!************************************!*\
    !*** ./src/app/services/global.ts ***!
    \************************************/

  /*! exports provided: Global */

  /***/
  function srcAppServicesGlobalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Global", function () {
      return Global;
    });

    var Global = {
      url: "/api/"
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\USUARIO\Desktop\juniordev-cdb-master\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map