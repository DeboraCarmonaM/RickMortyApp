import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router
  ) {}

  public login(): void {
    if (this.username === 'user' && this.password === '1234') {
      this.router.navigate(['/home']);
    } else {
      alert('Login falhou. Dados incorretos.');
    }
  }
}
