import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClassesComponent } from './classes/classes.component';
import { SearchComponent } from './search/search.component';
import { PipePipe } from './pipe/pipe.pipe';
import { DirectiveDirective } from './directive/directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClassesComponent,
    SearchComponent,
    PipePipe,
    DirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
