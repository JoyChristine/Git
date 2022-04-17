import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  username: any;
  user: any;
  

  constructor(private dataService: DataService) { }

  // search(){
  //   this.dataService.updateUsername(this.username);
  //   this.dataService.getGitUser()
  //     .subscribe(user => {
  //       console.log('why so serious');
  //       (this.user = user);
        
  //     });
  // }

  ngOnInit(): void {
  }

}
