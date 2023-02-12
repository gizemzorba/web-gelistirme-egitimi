import {Injectable} from '@angular/core';
import {Category} from '../../models/category';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categories: Category[] = [];
  private url = 'https://web-gelistirme-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url + 'category.json')
      .pipe(
        map(data => {
          const categories: Category[] = [];
          for (const key in data) {
            categories.push({...data[key], id: key});
          }
          this.categories = categories;
          return categories;
        })
      );
  }

  getCategoryById(id: number): Category | undefined {
    return this.categories.find(p => p.id === id);
  }

  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.url + 'category.json', category);
  }
}
