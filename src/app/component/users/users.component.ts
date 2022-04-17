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
  
    
    constructor(private dataService: DataService){
      console.log('rere')
      this.dataService.getGitUser()
      .subscribe(user => {
        // console.log('rerere');
        (this.user = user);
        
      });
      
     
      
    }
    search(){
      this.dataService.updateUsername(this.username);
      this.dataService.getGitUser()
        .subscribe(user => {
          console.log('why so serious');
          (this.user = user);
          
        });
    }
   

  

  ngOnInit(): void {
  }

}




















// users: string[] = []; 
  // data: string[] =[];
  // constructor(private http: HttpClient, private dataService: DataService) { }

  // getUsers(){
  //   this.dataService.getUserData().subscribe(_data =>(this.users.data));
  // }
