import "./chunk-SNAIP3M2.js";
import {
  HttpClient
} from "./chunk-MOZP4QRQ.js";
import {
  Renderer2,
  __async,
  inject,
  map,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵviewQuery
} from "./chunk-JZAGGQYA.js";

// src/environments/environments.ts
var environment = {
  DATCOL_KEY: "B7QNSmnEPL1RSw934Zr9jUEuI"
};

// src/app/services/stations.service.ts
var _StationsService = class _StationsService {
  //METHODS
  constructor() {
    this.http = inject(HttpClient);
    this.stations = [];
    this.coords = [];
  }
  // obtainCoords(): Observable<StationCoordinates[]> {
  //   return this.http
  //     .get<StationResponse[]>(
  //       `https://www.datos.gov.co/resource/ba2i-v4xx.json?$$app_token=${environment.DATCOL_KEY}&$limit=2000`
  //     )
  //     .pipe(
  //       tap((stationsArray) => (this.stations = stationsArray as StationResponse[])),
  //       map( stationsArray => this.refineCoords(stationsArray)),
  //       tap((coords) => (this.coords = coords))
  //     )
  // }
  getCoords() {
    return this.http.get(`https://www.datos.gov.co/resource/ba2i-v4xx.json?$$app_token=${environment.DATCOL_KEY}&$limit=2000`).pipe(map((stationsArray) => {
      this.stations = stationsArray;
      return this.refineCoords(stationsArray);
    }));
  }
  refineCoords(stationsArray) {
    return stationsArray.map(({ latitud, longitud }) => latitud + "|" + longitud).filter((strCoord, position, strCoordsArr) => position === strCoordsArr.indexOf(strCoord)).map((filteredStringCoord) => {
      const [lat, lng] = filteredStringCoord.split("|").map(parseFloat);
      return { lat, lng };
    });
  }
};
_StationsService.\u0275fac = function StationsService_Factory(t) {
  return new (t || _StationsService)();
};
_StationsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StationsService, factory: _StationsService.\u0275fac, providedIn: "root" });
var StationsService = _StationsService;

// src/app/components/new-google-map/new-google-map.component.ts
var _c0 = ["dirmap"];
var _NewGoogleMapComponent = class _NewGoogleMapComponent {
  constructor() {
    this.renderer = inject(Renderer2);
    this.stationsService = inject(StationsService);
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.stationsService.getCoords().subscribe((coords) => {
      this.cargar_mapa(coords);
    });
  }
  ngOnDestroy() {
    this.map = null;
  }
  cargar_mapa(stationsCoords) {
    return __async(this, null, function* () {
      const { Map } = yield google.maps.importLibrary("maps");
      const { AdvancedMarkerElement } = yield google.maps.importLibrary("marker");
      this.map = new Map(this.renderer.selectRootElement(this.divmap.nativeElement), {
        center: { lat: 6.230833, lng: -71.590553 },
        zoom: 6,
        mapId: "94ada564329fbd72"
      });
      for (let coords of stationsCoords) {
        new AdvancedMarkerElement({
          map: this.map,
          position: coords
        });
      }
    });
  }
};
_NewGoogleMapComponent.\u0275fac = function NewGoogleMapComponent_Factory(t) {
  return new (t || _NewGoogleMapComponent)();
};
_NewGoogleMapComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewGoogleMapComponent, selectors: [["component-new-google-map"]], viewQuery: function NewGoogleMapComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.divmap = _t.first);
  }
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, consts: [["dirmap", ""], [1, "h-screen", "w-screen"]], template: function NewGoogleMapComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 1, 0);
  }
} });
var NewGoogleMapComponent = _NewGoogleMapComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewGoogleMapComponent, { className: "NewGoogleMapComponent", filePath: "src\\app\\components\\new-google-map\\new-google-map.component.ts", lineNumber: 24 });
})();
export {
  NewGoogleMapComponent as default
};
//# sourceMappingURL=chunk-RMUYOXQY.js.map
