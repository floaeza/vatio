import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByNameComponent } from './pages/by-name/by-name.component';
import { ByModelComponent } from './pages/by-model/by-model.component';

const routes: Routes = [
  {
    path: 'by-name', 
    component: ByNameComponent, 
  },
  {
    path: 'by-model',
    component: ByModelComponent
  },
  {
    path: '**',
    redirectTo: 'by-model'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
