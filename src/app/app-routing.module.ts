import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WinnersComponent } from './components/winners/winners.component';
import { FrequenciesComponent } from "./components/frequencies/frequencies.component";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'frequency', component: FrequenciesComponent},
  { path: 'winners', component: WinnersComponent },
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
