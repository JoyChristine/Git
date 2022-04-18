//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [DataService]
})
export class UsersComponent implements OnInit {
  user:any =[];
  username!: string;
  gitusers: any;
  
    
    constructor(private dataService: DataService){
      // console.log('rere')
      this.dataService.getGitUser()
      .then(user => this.user = user);
      
    }
    searchGitUser(){
      this.dataService.newUsername(this.username);
      this.dataService.getGitUser(). 
      then(user => this.user = user);
      
      
    }
    // search(term:string){
    //   // this.dataService.newUsername(this.username);
    //   this.dataService.getGitUser(term)
    //   .then(success => {
    //       this.user = this.user;
    //       this.gitusers = this.dataService.user;
    //   }, 
    //   (error) => {
    //     alert('error');
    //     console.log("error");
    //   }
      
    //   // .then(user => this.user = user);
        
    //   )};
   

  

  ngOnInit(): void {
  }

}























function term(term: any, string: any) {
  throw new Error('Function not implemented.');
}
// users: string[] = []; 
  // data: string[] =[];
  // constructor(private http: HttpClient, private dataService: DataService) { }

  // getUsers(){
  //   this.dataService.getUserData().subscribe(_data =>(this.users.data));
  // }
