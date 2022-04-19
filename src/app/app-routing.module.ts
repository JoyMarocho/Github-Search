import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchuserComponent } from './components/searchuser/searchuser.component';


const routes: Routes = [
  {path:'user', component: UserComponent},
  {path:'searchuser', component: SearchuserComponent},
  {path:'navbar', component: NavbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
