import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {AuthRequest, AuthResponse} from '../../models/authentication';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCCYbNRjCnojhZPjJg2mWWhM0bvqF5Rbxg\n';
  apiKey = 'AIzaSyCCYbNRjCnojhZPjJg2mWWhM0bvqF5Rbxg';

  constructor(private http: HttpClient) {
  }

  login(authModel: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + this.apiKey,
      authModel).pipe(catchError(this.handleError));
  }

  register(authModel: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + this.apiKey,
      authModel).pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let message = 'hata';
    switch (err.error.error.message) {
      case 'EMAIL_EXISTS':
        message = 'Bu mail adresi zaten kullanılıyor.';
        break;
      case 'OPERATION_NOT_ALLOWED':
        message = 'Bu proje için parola ile giriş devre dışı bırakıldı.';
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        message = 'Olağandışı etkinlik nedeniyle bu cihazdan gelen tüm istekleri engelledik. Daha sonra tekrar deneyin.';
        break;
      case 'EMAIL_NOT_FOUND':
        message = 'Bu tanımlayıcıya karşılık gelen kullanıcı kaydı yok. Kullanıcı silinmiş olabilir.';
        break;
      case 'INVALID_PASSWORD':
        message = 'Parola geçersiz veya kullanıcının parolası yok.';
        break;
      case 'USER_DISABLED':
        message = 'Kullanıcı hesabı bir yönetici tarafından devre dışı bırakıldı.';
        break;
    }
    return throwError(() => message);
  }
}
