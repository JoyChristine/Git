import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'

import { map } from 'rxjs/internal/operators/map';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  updateusername: any;
  


  // private key: string = 'environment.key';
  private key: string = 'environment.key';


  private username!: string;


  constructor(private http: HttpClient){
      console.log('github service is running');
      this.username = 'JoyChristine';
  }

  getGitUser(){
    return this.http
      .get('https://api.github.com/users/'+this.username)
      .pipe(map((res) => res));
  }
  getGitRepos(){
    return this.http
      .get('https://api.github.com/users/'+this.username+'/repos')
      .pipe(map((res) => res));
  }
  updateUsername(username:any){
    this.username = username;
  }
  // updateUsername(username:string){
  //   this.username = username;
  // }

  
  
}

































// private userName!: string;

//   constructor(private http: HttpClient) {
//     console.log('app is running');
//   }
//   getUserData(){
//     const url = "https://api.github.com/users";
  
//     return this.http.get(url+this.userName+'?access_token='+environment.key);
//     // .pipe(map((data) => 
//     // { return data; }));
//   }
//   getReposData(){

//   }