import {
  SidemenuComponent
} from "./chunk-SNAIP3M2.js";
import {
  RouterModule,
  RouterOutlet
} from "./chunk-MOZP4QRQ.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
} from "./chunk-JZAGGQYA.js";

// src/app/pages/home/home.component.ts
var _HomeComponent = class _HomeComponent {
};
_HomeComponent.\u0275fac = function HomeComponent_Factory(t) {
  return new (t || _HomeComponent)();
};
_HomeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 0, consts: [[1, "container"], [1, "flex"]], template: function HomeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275element(2, "shared-sidemenu")(3, "router-outlet");
    \u0275\u0275elementEnd()();
  }
}, dependencies: [SidemenuComponent, RouterModule, RouterOutlet] });
var HomeComponent = _HomeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\pages\\home\\home.component.ts", lineNumber: 13 });
})();
export {
  HomeComponent as default
};
//# sourceMappingURL=chunk-M27PZ776.js.map
