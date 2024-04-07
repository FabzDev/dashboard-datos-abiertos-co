import { Injectable } from '@angular/core';
import { bolivar } from './bolivar';
import { StationResponse } from '../interfaces/station-response.interface';

@Injectable({
  providedIn: 'root'
})
export class StationsService {
  //INJECTIONS


  //PROPERTIES
  public stationsBolivarFull: StationResponse[] = bolivar;
  public stationsCoordinates = this.getStationsCoordinates( this.stationsBolivarFull );

  //METHODS
  constructor() {
    // console.log(this.stationsBolivarFull);
   }

   getStationsCoordinates(stationsArray: StationResponse[]){
    stationsArray.map( (station) => {
      const res = {lat: station.latitud, lng: station.longitud};
      console.log(res);
      return res;
    } )
   }

}
