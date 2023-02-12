import {Component, OnInit} from '@angular/core';
import {Category} from '../models/category';
import {CategoriesService} from '../services/categories/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  selectedCategory: Category;
  displayAll = true;


  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  selectCategory(category?: Category): void {
    if (category) {
      this.displayAll = false;
      if (this.selectedCategory === category) {
        this.selectedCategory = null;
      } else {
        this.selectedCategory = category;
      }
    } else {
      this.displayAll = true;
      this.selectedCategory = null;
    }


  }
}
