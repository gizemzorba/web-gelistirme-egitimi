export class AuthRequest {
  email: string;
  password: string;
  returnSecureToken = true;
}

export class AuthResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: string;
}
