import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from '../components/page-not-found/page-not-found.component';
import {CommonModule} from '@angular/common';
import {ProjectsComponent} from '../components/projects/projects.component';
import {ProjectComponent} from '../components/projects/project/project.component';
import {TeamsComponent} from '../components/teams/teams.component';
import {CustomersComponent} from '../components/customers/customers.component';


const appRoutes: Routes = [
  {path: 'projects', component: ProjectsComponent},
  {path: 'projects/:id', component: ProjectComponent},
  {path: 'teams', component: TeamsComponent},
  {path: 'customers', component: CustomersComponent},
  {path: '', redirectTo: '/projects', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }