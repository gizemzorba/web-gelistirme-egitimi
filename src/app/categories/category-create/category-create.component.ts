import {Component, OnInit} from '@angular/core';
import {CategoriesService} from '../../services/categories/categories.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss']
})
export class CategoryCreateComponent implements OnInit {

  constructor(private categoriesService: CategoriesService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  saveCategory(name: any): any {
    console.log(name.value);
    this.categoriesService.createCategory({id: 2, name: name.value}).subscribe(data => {
      this.router.navigateByUrl('products');
    });
  }
}
