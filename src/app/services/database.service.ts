import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  baseUrl: string;
  key: string;
  constructor(
    public http: HttpClient,
  ) {
    this.baseUrl = environment.baseUrl + ''
    this.key = environment.key
   }

   getDataPanel(token : string) {
    const httpHeader = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'x-api-key' : this.key,
        'Authorization' : `Bearer ${token}`
      })
    };
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl , httpHeader,).subscribe(res => {
        resolve(JSON.stringify(res))
      },
        err => {
            if (err.status == 400) {
              console.log("BAD REQUEST!");
            } else if (err.status == 401) { 
              console.log("password incorect!");
            } else if (err.status == 404) { 
              console.log("password or Username incorect!");
            } else {
              console.log(err)
            }
            reject(err);
        })
    })
  }
}


