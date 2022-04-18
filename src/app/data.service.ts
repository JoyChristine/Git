import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from '../app/classes/user'

// import { map } from 'rxjs/internal/operators/map';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  user!:object[];

  private key:string = environment.key;
  private gituser:string = environment.gituser;
  private manygitusers:string = environment.manygitusers;
  private username!: string;


  constructor(private http: HttpClient){
      console.log('github service is running');
      this.username = 'JoyChristine';
      // this.key =;
  }
  getnewGitUser(term: string){
    const promise = new Promise<void>((resolve, reject) =>{
      // let apiKey = `'https://api.github.com/search/users?q='${this.username}??access_token=+{environment.key}`;
      this.http
      .get(`${environment.manygitusers}${this.username}??access_token=+{environment.key}`)
      .subscribe(
        {
           next: (response: any) =>
          { 
            this.user = response.data;
            resolve();
        
          },
          error: (error: any) => {
            reject(error);
            alert('Error');
          }, complete: () =>{
            console.log("done");
          },
       
      });

    });
    return promise;

  }
  getGitUser(){
    return this.http.get(`https://api.github.com/users/${this.username}??access_token=+{environment.key}`).toPromise();

  }

  getGitRepos(){
    return this.http.get<any>(`https://api.github.com/users/${this.username}/repos??access_token=+{environment.key}`).toPromise();
      
  }


  newUsername(username:any){
    this.username = username;
  }
 
  
  
}


































function item(item: any, arg1: (any: any) => void): User[] {
  throw new Error('Function not implemented.');
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