import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth/auth.service';
import {AuthRequest, AuthResponse} from '../models/authentication';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = false;
  registerModel: AuthRequest;
  loading: boolean = false;
  error: string = '';

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  handleAuth(form) {
    this.registerModel = new AuthRequest();
    let authResponse: Observable<AuthResponse>;
    this.loading = true;
    if (form.valid) {
      this.registerModel.email = form.value.email;
      this.registerModel.password = form.value.password;
      if (this.isLoginMode) {
        authResponse = this.authService.login(this.registerModel);
      } else {
        authResponse = this.authService.register(this.registerModel);
      }

      authResponse.subscribe((data) => {
        this.loading = false;
        this.error = '';
      }, (error) => {
        this.error = error;
        this.loading = false;
      });
    }
  }
}
