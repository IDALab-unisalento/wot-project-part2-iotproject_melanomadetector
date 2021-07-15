import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Readings} from "../../model/readings";
import {mdAPI} from "../confidental/awsAPI";

@Injectable({
  providedIn: 'root'
})
export class ReadingsService {

  getALlUserReadingsEndpoint = mdAPI.api + "readings/user/"
  getALlUserReadingsByCodiceFiscaleEndpoint = mdAPI.api + "readings/user/search/"
  constructor(private http:HttpClient) { }

  getAllReadingsUser(id:number):Observable<Readings[]>{
    return this.http.get<Readings[]>(this.getALlUserReadingsEndpoint+id);
  }

  getAllReadingsByCodiceFiscaleUser(codiceFiscale:string):Observable<Readings[]>{
    return this.http.get<Readings[]>(this.getALlUserReadingsByCodiceFiscaleEndpoint+codiceFiscale);
  }

}
