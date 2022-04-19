import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { UsersearchService } from 'src/app/services/usersearch.service';

@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.css']
})
export class SearchuserComponent implements OnInit {

  public userQuery!: any;
  @Output() searchResults = new EventEmitter<any>()

  constructor(public searchuserservice: UsersearchService) { }

  searchGithubUser(login:string){
    this.searchResults.emit(this.userQuery);
  }
  
  ngOnInit(): void {
  }

}
