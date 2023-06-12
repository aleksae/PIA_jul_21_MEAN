import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { KandidatComponent } from './kandidat/kandidat.component';
import { InspektorComponent } from './inspektor/inspektor.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"kandidat", component:KandidatComponent},
  {path:"inspektor", component:InspektorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
