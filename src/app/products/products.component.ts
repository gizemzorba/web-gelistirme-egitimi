import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService} from '../services/products/products.service';
import {Product} from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products = [];
  loading: boolean = true;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productService.getProducts(params.categoryId).subscribe(data => {
        this.products = data;
        this.loading = false;
      });
    });

  }

  refresh(): void {
    // relativeTo ile bulunduğumuz route'a bağlı olur aksi halde ana dizine bağlıdır
    this.router.navigate(['product'], {relativeTo: this.route});
  }

}
