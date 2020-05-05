import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _getStatusWebsite = "http://localhost:4800";
  constructor(private http:Http) { }
  private statusWebsite = true;
  checkStatus(){
   return this.http.get("https://betufa55.com/api/dataAdjust.php?ac=getStatusWebsite").pipe(map((res)=>res.json()));
   // return this.statusWebsite;
  }
}
