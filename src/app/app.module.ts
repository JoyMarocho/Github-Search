import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateCountPipe } from './date-count.pipe';
import { HighlightDirective } from './highlight.directive';
import { ComponentsComponent } from './components/components.component';
import { ModelsComponent } from './models/models.component';
import { ServicesComponent } from './services/services.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchuserComponent } from './components/searchuser/searchuser.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    DateCountPipe,
    HighlightDirective,
    ComponentsComponent,
    ModelsComponent,
    ServicesComponent,
    NavbarComponent,
    SearchuserComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
