import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from 'microsoft-adal-angular6';
import { LostComponent } from './components/lost/lost.component';
import { FoundComponent } from './components/found/found.component';
import { HomeComponent } from './components/home/home.component';

const childRoutes: Routes = [
  { path: 'lost', component: LostComponent },
  { path: 'found', component: FoundComponent }
];

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthenticationGuard], children: childRoutes }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
