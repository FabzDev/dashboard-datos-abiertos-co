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
  public stations: StationResponse[] = [];
  public coords: StationCoordinates[] = [];

  //METHODS
  obtainCoords(): Observable<StationCoordinates[]> {
    return this.http
      .get<StationResponse[]>(
        `https://www.datos.gov.co/resource/ba2i-v4xx.json?$$app_token=${environment.DATCOL_KEY}&$limit=2000`
      )
      .pipe(
        tap((stationsArray) => (this.stations = stationsArray as StationResponse[])),
        map( stationsArray => this.refineCoords(stationsArray)),
        tap((coords) => (this.coords = coords))
      );
  }

  refineCoords(stationsArray: StationResponse[]) {
    return stationsArray
      .map(({ latitud, longitud }) => latitud + '|' + longitud)
      .filter( (strCoord, position, strCoordsArr) => position === strCoordsArr.indexOf(strCoord) )
      .map( filteredStringCoord => {
        const [lat, lng] = filteredStringCoord.split('|').map(parseFloat);
        return { lat, lng };
      });
  }
}
