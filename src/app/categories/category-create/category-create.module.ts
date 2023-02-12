import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryCreateComponent} from './category-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CategoryCreateComponent
  },
];

@NgModule({
  declarations: [CategoryCreateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [CategoryCreateComponent]
})
export class CategoryCreateModule {
}
