import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.email, this.password).subscribe({
      next: () => alert('Registration successful!'),
      error: (err) => alert(err.message)
    });
  }
}
