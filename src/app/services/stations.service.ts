import { inject, Injectable } from '@angular/core';
import { StationResponse } from '../interfaces/station-response.interface';
import { StationCoordinates } from '../interfaces/station-coordinates.interface';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environments';

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

  //METHODS
  obtainCoords(): Observable<StationCoordinates[]> {
    return this.http
      .get<StationResponse[]>(
        `https://www.datos.gov.co/resource/ba2i-v4xx.json?$$app_token=${environment.GMAPS_KEY}&$limit=2000` //TODO: PROTECT API_KEY
      )
      .pipe(
        tap(( stationsArray) => this.stations = stationsArray as StationResponse[]),
        map(( stationsArray) => stationsArray.map( ({ latitud, longitud }) => latitud + "|" + longitud )),
        map( (coordsStringArray) => coordsStringArray.filter( (coordsString, pos) => pos === coordsStringArray.indexOf(coordsString)) ),
        map( (filteredCoordsStringArray) => filteredCoordsStringArray.map( (filteredStringCoord) => {
          const res = filteredStringCoord.split('|');
          return { lat: parseFloat(res[0]), lng:parseFloat(res[1])}
        }))
      );
  }

  storeCoords(lat: string, lng: string) {
    return this.coordsStr.add(lat + '|' + lng);
  }

  takeCoords(arrayCoordsStr: Set<string>) {
    return Array.from(arrayCoordsStr).map( (coordsStr) => {
      const arrStr = coordsStr.split('|');
      return { lat: parseFloat(arrStr[0]), lng: parseFloat(arrStr[1]) };
    });
  }
}
