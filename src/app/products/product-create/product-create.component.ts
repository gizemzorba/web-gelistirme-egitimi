import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products/products.service';
import {Router} from '@angular/router';
import {CategoriesService} from '../../services/categories/categories.service';
import {Category} from '../../models/category';
import {Product} from '../../models/product';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  categories: Category[] = [];
  model: Product = {
    id: '',
    name: '',
    description: '',
    price: 0,
    categoryId: 0,
    isActive: false,
    imageUrl: '',
  };
  error: string = '';

  constructor(private productService: ProductsService,
              private router: Router,
              private categoryService: CategoriesService) {

  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  saveProduct(form: NgForm): any {
    console.log(this.model);
    const extensions = ['jpeg', 'jpg', 'png'];
    const extension = this.model.imageUrl.split('.').pop();

    if (extensions.indexOf(extension) === -1) {
      this.error = ' resim uzantısı sadece jpeg, jpg ve png olmalıdır.';
      return;
    }
    if (this.model.categoryId === 0) {
      this.error = 'kategori seçmelisiniz.';
      return;
    }
    if (form.valid) {
      this.productService.createProduct(this.model).subscribe(data => {
        this.router.navigateByUrl('products');
      });
    } else {
      this.error = 'Formu kontrol ediniz.';
    }

  }
}
