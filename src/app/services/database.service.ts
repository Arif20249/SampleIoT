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

    let params = {
    };

    const httpHeader = {
      headers: {
        'Authorization' : 'token '+this.key
      }
    };
    console.log(httpHeader)
    return new Promise((resolve, reject) => {
      
      this.http.post(this.baseUrl, params, httpHeader).subscribe(res => {
        console.log(JSON.stringify(res))
        resolve(JSON.stringify(res))
      },
        err => {
            if (err.status == 400) {
              console.log("BAD REQUEST!");
            } else if (err.status == 401) { 
              console.log("key incorect!");
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


