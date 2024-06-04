import {
  CommonModule,
  RouterLink,
  routes
} from "./chunk-MOZP4QRQ.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext
} from "./chunk-JZAGGQYA.js";

// src/app/shared/sidemenu/sidemenu.component.ts
var _SidemenuComponent = class _SidemenuComponent {
  constructor() {
    this.menuItems = routes.map((route) => route.children ?? []).flat().filter((route) => route && route.path).filter((route) => !route.path.includes(":"));
  }
};
_SidemenuComponent.\u0275fac = function SidemenuComponent_Factory(t) {
  return new (t || _SidemenuComponent)();
};
_SidemenuComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidemenuComponent, selectors: [["shared-sidemenu"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 76, vars: 0, consts: [["id", "menu", 1, "bg-gray-900", "min-h-screen", "z-10", "text-slate-300", "w-64", "left-0", "h-screen", "overflow-auto"], ["id", "logo", 1, "my-4", "px-6"], [1, "text-lg", "md:text-2xl", "font-bold", "text-white"], [1, "text-blue-500"], [1, "text-slate-500", "text-sm"], ["id", "profile", 1, "px-6", "pt-10", "pb-3"], [1, "text-slate-500"], ["href", "#", 1, "inline-flex", "space-x-2", "items-center"], ["src", "https://avatars.githubusercontent.com/u/107362565?v=4", "alt", "", 1, "rounded-full", "w-8", "h-8", "mt-1"], [1, "text-sm", "md:text-base", "font-bold"], ["id", "nav", 1, "w-full", "px-6"], ["routerLink", "stations-map", "routerLinkActive", "bg-blue-800", 1, "w-full", "px-2", "inline-flex", "space-x-2", "items-center", "border-b", "border-slate-700", "py-3", "hover:bg-white/5", "transition", "ease-linear", "duration-150"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "stroke-width", "2", "stroke", "currentColor", "fill", "none", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "h-6", "w-6", "text-slate-100"], ["stroke", "none", "d", "M0 0h24v24H0z"], ["x1", "3", "y1", "21", "x2", "21", "y2", "21"], ["d", "M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4"], ["d", "M5 21v-10.15"], ["d", "M19 21v-10.15"], ["d", "M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"], [1, "flex", "flex-col"], [1, "text-lg", "font-bold", "leading-5", "text-white"], [1, "text-sm", "text-white/50", "hidden", "md:block"], ["routerLink", "consult-vehicle", "routerLinkActive", "bg-blue-800", 1, "w-full", "px-2", "inline-flex", "space-x-2", "items-center", "border-b", "border-slate-700", "py-3", "hover:bg-white/5", "transition", "ease-linear", "duration-150"], ["cx", "7", "cy", "17", "r", "2"], ["cx", "17", "cy", "17", "r", "2"], ["d", "M5 17h-2v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"], ["routerLink", "production-agro", "routerLinkActive", "bg-blue-800", 1, "w-full", "px-2", "inline-flex", "space-x-2", "items-center", "border-b", "border-slate-700", "py-3", "hover:bg-white/5", "transition", "ease-linear", "duration-150"], ["cx", "7", "cy", "15", "r", "4"], ["x1", "7", "y1", "15", "x2", "7", "y2", "15.01"], ["cx", "19", "cy", "17", "r", "2"], ["d", "M10.5 17h6.5"], ["d", "M20 15.2v-4.2a1 1 0 0 0 -1 -1h-6l-2 -5h-6v6.5"], ["d", "M18 5h-1a1 1 0 0 0 -1 1v4"], ["routerLink", "address-map", "routerLinkActive", "bg-blue-800", 1, "w-full", "px-2", "inline-flex", "space-x-2", "items-center", "border-b", "border-slate-700", "py-3", "hover:bg-white/5", "transition", "ease-linear", "duration-150"], ["x1", "18", "y1", "6", "x2", "18", "y2", "6.01"], ["d", "M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5"], ["points", "10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15"], ["x1", "9", "y1", "4", "x2", "9", "y2", "17"], ["x1", "15", "y1", "15", "x2", "15", "y2", "20"]], template: function SidemenuComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
    \u0275\u0275text(3, "Fabz");
    \u0275\u0275elementStart(4, "span", 3);
    \u0275\u0275text(5, "Dev");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ".");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 4);
    \u0275\u0275text(8, "Proyectos de pr\xE1ctica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 4);
    \u0275\u0275text(10, "Angular 17");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "p", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 5)(13, "p", 6);
    \u0275\u0275text(14, "Disigned by: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 7)(16, "span");
    \u0275\u0275element(17, "img", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 9);
    \u0275\u0275text(19, " Fabio Escobar ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 10)(21, "a", 11)(22, "div");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 12);
    \u0275\u0275element(24, "path", 13)(25, "line", 14)(26, "path", 15)(27, "path", 16)(28, "path", 17)(29, "path", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(30, "div", 19)(31, "span", 20);
    \u0275\u0275text(32, "Estaciones GNV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 21);
    \u0275\u0275text(34, "Consulta API - Mapa");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "a", 22)(36, "div");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(37, "svg", 12);
    \u0275\u0275element(38, "path", 13)(39, "circle", 23)(40, "circle", 24)(41, "path", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(42, "div", 19)(43, "span", 20);
    \u0275\u0275text(44, "Consultar Veh\xEDculo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 21);
    \u0275\u0275text(46, "Consulta API - Formulario");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "a", 26)(48, "div");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(49, "svg", 12);
    \u0275\u0275element(50, "path", 13)(51, "circle", 27)(52, "line", 28)(53, "circle", 29)(54, "path", 30)(55, "path", 31)(56, "path", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(57, "div", 19)(58, "span", 20);
    \u0275\u0275text(59, "Producci\xF3n Agricola");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "span", 21);
    \u0275\u0275text(61, "Consulta API - Formulario");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "a", 33)(63, "div");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(64, "svg", 12);
    \u0275\u0275element(65, "path", 13)(66, "line", 34)(67, "path", 35)(68, "polyline", 36)(69, "line", 37)(70, "line", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(71, "div", 19)(72, "span", 20);
    \u0275\u0275text(73, "Formulario Direcci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "span", 21);
    \u0275\u0275text(75, "Formulario - Mapa");
    \u0275\u0275elementEnd()()()()();
  }
}, dependencies: [CommonModule, RouterLink] });
var SidemenuComponent = _SidemenuComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidemenuComponent, { className: "SidemenuComponent", filePath: "src\\app\\shared\\sidemenu\\sidemenu.component.ts", lineNumber: 13 });
})();

export {
  SidemenuComponent
};
//# sourceMappingURL=chunk-SNAIP3M2.js.map
