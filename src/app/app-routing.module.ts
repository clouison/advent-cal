import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DayComponent } from './day/day.component';
import { DayPageGuard } from './guards/day-page.guard';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'day/:user/:id', component: DayComponent, canActivate:[DayPageGuard] },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '' },
  // { path: '**', component: PageNotFoundComponent }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
