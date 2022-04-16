import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  private userName!: string;

  constructor(private http: HttpClient) {
    console.log('app is running');
  }
  getUserData(){
    const url = "https://api.github.com/users";
  
    return this.http.get(url+this.userName+'?access_token='+environment.key);
    // .pipe(map((data) => 
    // { return data; }));
  }
  getReposData(){

  }
}
