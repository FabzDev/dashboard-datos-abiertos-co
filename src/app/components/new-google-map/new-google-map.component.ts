import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { StationsService } from '../../services/stations.service';
import { StationCoordinates } from '../../interfaces/station-coordinates.interface';
import { MapAdvancedMarker } from '@angular/google-maps';
import { map } from 'rxjs';
import { SidemenuComponent } from '../../shared/sidemenu/sidemenu.component';

@Component({
  selector: 'component-new-google-map',
  standalone: true,
  imports: [SidemenuComponent],
  templateUrl: './new-google-map.component.html',
  styleUrl: './new-google-map.component.css',
})
export default class NewGoogleMapComponent implements AfterViewInit {
  private stationsService = inject(StationsService);
  public renderer = inject(Renderer2);

  public stationsCoords: StationCoordinates[] = [];

  @ViewChild('dirmap') divmap!: ElementRef;
  public map!: google.maps.Map;

  constructor() {
    this.stationsService.obtainCoords().subscribe((coords) => {
      this.stationsCoords = coords;
    });
  }
  ngAfterViewInit(): void {
    this.cargar_mapa();
  }

  async cargar_mapa() {
    const { Map } = (await google.maps.importLibrary('maps')) as google.maps.MapsLibrary;
    const { AdvancedMarkerElement } = (await google.maps.importLibrary('marker')) as google.maps.MarkerLibrary;

    this.map = new Map(
      this.renderer.selectRootElement(this.divmap.nativeElement),
      {
        center: { lat: 6.230833, lng: -75.590553 },
        zoom: 5,
        mapId: '94ada564329fbd72',
      }
    );

    for (let coords of this.stationsCoords) {
      new AdvancedMarkerElement({
        map: this.map,
        position: coords,
      });
    }

    // const testmarker = new AdvancedMarkerElement({
    //   map: this.map,
    //   position: { lat: 8.230833, lng: -70.590553 },
    // });

    // this.map.addListener("center_changed", () => {
    //   // 3 seconds after the center of the map has changed, pan back to the
    //   // marker.
    //   window.setTimeout(() => {
    //     this.map.panTo({ lat: 6.230833, lng: -75.590553 });
    //   }, 3000);
    // });
  }

}
