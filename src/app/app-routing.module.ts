import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { HomeComponent } from './home/home.component';
import { MyplaylistComponent } from './myplaylist/myplaylist.component';

const routes: Routes = [{ path: '', component: LoginpageComponent },
{
  path: 'dashboard', component: DashboardComponent,
  children: [
    { path: '', component: MaincontentComponent },
    { path: 'browse', component: MaincontentComponent },
    { path: 'home', component: HomeComponent },
    { path: 'myplaylist', component: MyplaylistComponent }
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
