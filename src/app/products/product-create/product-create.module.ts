import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCreateComponent} from './product-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {CKEditorModule} from 'ckeditor4-angular';

const routes: Routes = [
  {
    path: '',
    component: ProductCreateComponent
  },

];

@NgModule({
  declarations: [ProductCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule
  ],
  exports: [ProductCreateComponent]
})
export class ProductCreateModule {
}
