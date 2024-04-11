import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ConsultCarService {
  private http = inject(HttpClient);
  constructor() { }

  searchByPlaca(placa: string): Observable<ConsultCarService> {
    return this.http
      .get<ConsultCarService>(
        `https://www.datos.gov.co/resource/5ue6-jtmx.json?$$app_token=${environment.DATCOL_KEY}&limit=600000&placa=${placa}`
      );
  }
}
