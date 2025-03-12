import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: () => alert('Login successful!'),
      error: (err) => alert(err.message)
    });
  }

  googleLogin() {
    this.authService.googleSignIn().subscribe({
      next: () => alert('Google Sign-In successful!'),
      error: (err) => alert(err.message)
    });
  }
}
