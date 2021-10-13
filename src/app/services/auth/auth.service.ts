import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../../app.api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  public login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${API}/auth`, { email, password });
  }

  public registerToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public registerUser(user: any): void {
    localStorage.setItem('user', user);
  }

  public getUser(): string | null {
    return localStorage.getItem('user');
  }

  public logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
