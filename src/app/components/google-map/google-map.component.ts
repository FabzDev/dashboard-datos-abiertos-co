import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationsService } from '../../services/stations.service';
import { GoogleMap, MapMarker } from '@angular/google-maps';
import { StationResponse } from '../../interfaces/station-response.interface';

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [CommonModule, GoogleMap, MapMarker],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.css',
})
export default class GoogleMapComponent {



  private stationsService = inject(StationsService);

  public stations: StationResponse[] = this.stationsService.stationsBolivarFull;

  public markerOptions: google.maps.MarkerOptions = {draggable: false};

  public testMapOptions: google.maps.MapOptions = {
    mapId: '94ada564329fbd72',
    center: { lat: 10.403404, lng: -75.500287 },
    zoom: 13,
  };

  public toNumber(str: string): number {
    return parseFloat(str);
    }

}
