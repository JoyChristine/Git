import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
  providers: [DataService]
})
export class RepositoriesComponent implements OnInit {

  repos:any;
  username!: string;
    
    constructor(private dataService: DataService){
      console.log('rere')
      this.dataService.getGitRepos()
      .subscribe(repos => {
        // console.log('rerere');
        (this.repos = repos);
        
      });

    }
    search(){
      this.dataService.updateUsername(this.username);
      this.dataService.getGitRepos()
      .subscribe(repos => {
        // console.log('rerere');
        (this.repos = repos);
        
      });
    }
   




  ngOnInit(): void {
  }

}
