import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ComponentsComponent } from './components/components.component';
import { ModelsComponent } from './models/models.component';
import { ServicesComponent } from './services/services.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchuserComponent } from './components/searchuser/searchuser.component';
import { UserComponent } from './components/user/user.component';
import { UsersearchService } from './services/usersearch.service';
import { DateCountPipe } from './date-count.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    DateCountPipe,
    HighlightDirective,    
    NavbarComponent,
    SearchuserComponent,
    UserComponent
    ComponentsComponent,
    ModelsComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
