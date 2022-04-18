import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'

// import { map } from 'rxjs/internal/operators/map';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  // newUsername: any;
  


  // private key: string = 'environment.key';
    key:string = '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';


  private username!: string;


  constructor(private http: HttpClient){
      console.log('github service is running');
      this.username = 'JoyChristine';
  }

  getGitUser(){
    return this.http
      .get<any>('https://api.github.com/users/'+this.username)
      .toPromise();
      // .pipe(map((res) => res));
  }
  getGitRepos(){
    return this.http
      .get<any>('https://api.github.com/users/'+this.username+'/repos')
      .toPromise();
      // .pipe(map((res) => res));
  }


  newUsername(username:any){
    this.username = username;
  }
 
  
  
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