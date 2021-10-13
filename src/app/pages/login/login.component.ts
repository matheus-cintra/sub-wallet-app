import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  SnackBarClass,
  SnackBarService,
} from 'src/app/components/snackBar/snack-bar.service';
import { AuthService } from 'src/app/services/auth/auth.service';
// import { TranslationService } from 'src/app/services/translate/translate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private snackBar: SnackBarService,
    private authService: AuthService,
    private route: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    const user = localStorage.getItem('user');
    if (user) this.route.navigate(['/home']);
  }

  submitForm() {
    const { email, password } = this.form.value;
    this.http
      .post('http://localhost:3000/api/v1/auth', { email, password })
      .subscribe(
        (result: any) => {
          this.authService.registerToken(result.accessToken);
          this.authService.registerUser(result.user);
          this.route.navigate(['/home']);
        },
        (err) => {
          return this.snackBar.openSnackBar(
            err.error.message,
            'OK',
            SnackBarClass.ERROR
          );
        }
      );
  }
}
