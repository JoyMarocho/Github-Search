import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Repo } from '../models/repo';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersearchService {

  user!:User;
  repos!:Repo;

  constructor(private http: HttpClient) {
    this.user = new User("","", new Date(),"");
    this.repos = new Repo("","","","",new Date(),"");
  }

  getUserProfile(login:string){
    interface IUser{
      login: string;
      bio: string
      created_at: Date;
      avatar_url:string;
    }

    let userUrl = 'https://api.github.com/users/'+login+'?client_id='+environment.clientId + "&client_secret="+environment.clientSecret;

    let promise = new Promise<void>((resolve,reject) =>{
      this.http.get<IUser>(userUrl).toPromise().then(response => {
        this.user = response;

      resolve()
    },
    error=>{
      this.user.login = "We couldn't locate any profiles by the name entered"

      reject(error)
      })
    })
    return promise;
  }


  getUserRepo(login:string){
    interface IRepo{
      name:string;
      html_url:string;
      description:string;
      language:string;
      created_at:Date;
      downloads_url:string
    }

    let repoUrl = 'https://api.github.com/users/'+login+'/repos?order=created&sort=asc?client_id='+environment.clientId + '&client_secret='+environment.clientSecret;   


    let promise = new Promise<void>((resolve,reject) =>{
      this.http.get<IRepo>(repoUrl).toPromise().then(response => {
          this.repos = response;
          console.log(this.repos);
        resolve()
      },
      error=>{
        this.repos.name = "We couldn’t find any repositories matching the name given"

        reject(error)
        })
      })
      return promise;
  }
}
