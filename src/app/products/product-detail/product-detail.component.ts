import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from '../../services/products/products.service';
import {Product} from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  id: number;
  product: Product;
  allProducts = [];
  loading: boolean = true;

  constructor(private route: ActivatedRoute,
              private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProducts().subscribe(data => {
      this.allProducts = data;
    });
    this.product = this.allProducts.find((i) => i.id === this.id);
    this.route.params.subscribe(params => {
      const id = params.id;
      this.productService.getProductById(id).subscribe(data => {
        this.product = data;
        this.loading = false;
      });
      console.log(this.product);
    });
  }


}
