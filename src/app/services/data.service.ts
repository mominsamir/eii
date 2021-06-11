import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment as env} from 'src/environments/environment';
import { EmployemntData } from '../models/employement'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

    getGraphicData(): Observable<EmployemntData[]>{
      return this.http.get<EmployemntData[]>(`${env.BASE_URL}/r/aat1.json`);
  }
}
