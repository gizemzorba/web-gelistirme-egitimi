import {Injectable} from '@angular/core';
import {Product} from '../../models/product';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [];
  private url = 'https://web-gelistirme-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) {
  }

  /***
   getProducts(): Product[] {
    return this.products.filter(p => p.isActive);
  }
   */

  getProducts(categoryId?: number): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + 'product.json', {}).pipe(map(data => {
      const products: Product[] = [];
      for (const key in data) {
        if (categoryId) {
          if (categoryId === data[key].categoryId) {
            products.push({...data[key], id: key});
          }
        } else {
          products.push({...data[key], id: key});
        }
      }
      this.products = products;
      return products;
    }), catchError(err => {
      return throwError(err);
    }));
  }

  getProductById(id: any): Observable<Product> {
    // return this.products.find(p => p.id === id);
    return this.http.get<Product>(this.url + 'product/' + id + '.json', {}).pipe(map(data => {
      console.log(data);
      return data;
    }));
  }

  getProductByCategoryId(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }

  createProduct(product): Observable<Product[]> {
    return this.http.post<Product[]>(this.url + 'product.json', product)
      .pipe(map(data => {
        return data;
      }), catchError(err => {
        return throwError(err);
      }));
  }
}
