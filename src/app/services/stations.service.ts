import { inject, Injectable } from '@angular/core';
import { StationResponse } from '../interfaces/station-response.interface';
import { StationCoordinates } from '../interfaces/station-coordinates.interface';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of, tap } from 'rxjs';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class StationsService {
  //INJECTIONS
  private http = inject(HttpClient);

  //PROPERTIES
  private stations: StationResponse[] = [];
  private coords: StationCoordinates[] = [];

  //METHODS
  constructor(){
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

  getCoords(): Observable<StationCoordinates[]> {
    return this.http
      .get<StationResponse[]>(
        `https://www.datos.gov.co/resource/ba2i-v4xx.json?$$app_token=${environment.DATCOL_KEY}&$limit=2000`
      )
      .pipe(
        map((stationsArray) => {
          this.stations = stationsArray as StationResponse[];
          return this.refineCoords(stationsArray);
        })
      )

  }

  refineCoords(stationsArray: StationResponse[]) {
    return stationsArray
      .map(({ latitud, longitud }) => latitud + '|' + longitud)
      .filter(
        (strCoord, position, strCoordsArr) =>
          position === strCoordsArr.indexOf(strCoord)
      )
      .map((filteredStringCoord) => {
        const [lat, lng] = filteredStringCoord.split('|').map(parseFloat);
        return { lat, lng };
      });
  }
}
