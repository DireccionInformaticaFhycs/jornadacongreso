import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Eventos2021Component } from './components/eventos2021/eventos2021.component';
import { Eventos2022Component } from './components/eventos2022/eventos2022.component';
import { Eventos2024Component } from './components/eventos2024/eventos2024.component';


export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'eventos2021', component: Eventos2021Component},
  {path: 'eventos2022', component: Eventos2022Component},
  {path: 'eventos2024', component: Eventos2024Component},
  {path: '', redirectTo:'/home', pathMatch:'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
