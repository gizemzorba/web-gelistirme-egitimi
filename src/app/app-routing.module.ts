import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {ProductsComponent} from './products/products.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';
import {ProductCreateComponent} from './products/product-create/product-create.component';
import {CategoryCreateComponent} from './categories/category-create/category-create.component';
import {AuthComponent} from './auth/auth.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'users',
    component: UsersComponent,
    // loadChildren: () => import('./users/users.').then(m => m.ItemsModule)
  },{
    path: 'products',
    component: ProductsComponent,
    // loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  }, {
    path: 'products/create',
    component: ProductCreateComponent,
    // loadChildren: () => import('./products/product-create/product-create.module').then(m => m.ProductCreateModule)
  }, {
    path: 'products/:id',
    component: ProductDetailComponent,
    // loadChildren: () => import('./products/product-detail/product-detail.module').then(m => m.ProductDetailModule)
  },
  {
    path: 'products/category/:categoryId',
    component: ProductsComponent,
    // loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  }, {
    path: 'category/create',
    component: CategoryCreateComponent,
    // loadChildren: () => import('./categories/category-create/category-create.module').then(m => m.CategoryCreateModule)
  }, {
    path: 'auth',
    // component: AuthComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }, {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
