import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersearchService } from 'src/app/services/usersearch.service';
import { Repo } from 'src/app/models/repo';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: any;
  repos: any;

  constructor(public userService: UsersearchService) { }

  searchGithubUser(login:string){
    this.userService.getUserProfile(login).then((success)=>{
      this.user = this.userService.user;
    },
    (error)=>{
      console.log(error)
    });

    this.userService.getUserRepo(login).then((success)=>{
      this.repos = this.userService.repos;
    },
    (error)=>{
      console.log(error)
    });
  }


  ngOnInit(): void {
    this.searchGithubUser("JoyMarocho");
}
}
