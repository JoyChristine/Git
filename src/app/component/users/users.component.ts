import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   
  // users: string[] = []; 
  // data: string[] =[];
  // constructor(private http: HttpClient, private dataService: DataService) { }

  // getUsers(){
  //   this.dataService.getUserData().subscribe(_data =>(this.users.data));
  // }

  ngOnInit(): void {
  }

}
