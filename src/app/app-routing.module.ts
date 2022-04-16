import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { RepositoriesComponent } from './component/repositories/repositories.component';
import { UsersComponent } from './component/users/users.component';


const routes: Routes = [
  { path: 'home', component:HomeComponent},
  { path: '' ,redirectTo:'home',pathMatch: 'full'},
  { path: 'repositories', component:RepositoriesComponent},
  { path: 'users', component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
