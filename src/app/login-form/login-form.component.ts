import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  username: String = '';
  constructor(private router: Router) {
  }

  goHome(): void {
    this.router.navigate(['/']);
  }

  goRegister(): void {
    this.router.navigate(['/register'])
  }
}
