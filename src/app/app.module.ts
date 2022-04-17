import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { SearchComponent } from './component/search/search.component';
import { PipePipe } from './pipe/pipe.pipe';
import { DirectiveDirective } from './directive/directive.directive';
import { RepositoriesComponent } from './component/repositories/repositories.component';
import { UsersComponent } from './component/users/users.component';
import { HomeComponent } from './component/home/home.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    PipePipe,
    DirectiveDirective,
    RepositoriesComponent,
    UsersComponent,
    HomeComponent,
  
    
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
