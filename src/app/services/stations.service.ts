import { inject, Injectable } from '@angular/core';
import { StationResponse } from '../interfaces/station-response.interface';
import { StationCoordinates } from '../interfaces/station-coordinates.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StationsService {
  //INJECTIONS
  public http = inject(HttpClient);

  //PROPERTIES
  public stations?: StationResponse[];
  public coordsStr: Set<string> = new Set();
  public coords: StationCoordinates[] = [];
  // public stationsCoordinates = this.getStationsCoordinates( this.stations );

  //METHODS
  constructor() {
    this.http
      .get(
        'https://www.datos.gov.co/resource/ba2i-v4xx.json?$$app_token=B7QNSmnEPL1RSw934Zr9jUEuI&$limit=2000'
      )
      .subscribe((resp) => {
        this.stations = resp as StationResponse[];
        this.stations.forEach( ({ latitud, longitud }) => this.storeCoords(latitud, longitud) );
        this.coords = this.takeCoords(this.coordsStr);
        console.log(this.coords);

      });
  }

  storeCoords(lat: string, lng: string) {
    this.coordsStr.add(lat + '|' + lng);
  }

  takeCoords(arrayCoordsStr: Set<string>) {
    return Array.from(arrayCoordsStr).map( (coordsStr) => {
      const arrStr = coordsStr.split('|');
      return { lat: parseFloat(arrStr[0]), lng: parseFloat(arrStr[1]) };
    });
  }
}
