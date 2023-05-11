import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './products-routing.module';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ByModelComponent } from './pages/by-model/by-model.component';
import { ByNameComponent } from './pages/by-name/by-name.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductPageComponent,
    ByModelComponent,
    ByNameComponent,
    ProductTableComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
