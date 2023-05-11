import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
const routes: Routes = [
{
  path: 'about',
  component: AboutPageComponent
},
{
  path: 'contact',
  component: ContactPageComponent
},
{
  path: 'products',
  loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
},
{
  path: '**',
  redirectTo: 'products',
}
]


@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
