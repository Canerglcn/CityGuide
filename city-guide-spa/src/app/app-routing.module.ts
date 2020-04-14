import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityComponent } from './city/city.component';
import { CityDetailComponent } from './city/city-detail/city-detail.component';
import { CityAddComponent } from './city/city-add/city-add.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: 'city', component: CityComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cityadd', component: CityAddComponent },
  { path: 'cityDetail/:cityId', component: CityDetailComponent },
  { path: '', redirectTo: 'city', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
