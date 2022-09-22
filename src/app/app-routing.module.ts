import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavigatorComponent } from './navigator/navigator.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'navigator',
    component: NavigatorComponent
    
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
