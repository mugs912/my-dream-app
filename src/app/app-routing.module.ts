import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrialComponent } from './trial/trial.component';
import { MenuComponent } from './components/menu/menu.component';


const routes: Routes = [
  {path: 'trial', component: TrialComponent},
  {path: '', component: TrialComponent},
  {path: 'menu', component: MenuComponent},
  {path: '**', redirectTo: 'trial'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
