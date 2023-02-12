import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './products.component';
import {ProductDetailModule} from './product-detail/product-detail.module';
import {ProductsService} from '../services/products/products.service';
import {ProductCreateModule} from './product-create/product-create.module';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  /**{
    path: 'products/category' + '/:id',
    component: ProductsComponent
  },
   */
];


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProductDetailModule,
    ProductCreateModule
  ],
  exports: [ProductsComponent],
  providers: [ProductsService]
})
export class ProductsModule {
}
