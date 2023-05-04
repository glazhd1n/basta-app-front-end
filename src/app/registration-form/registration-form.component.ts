import { Component } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {

  constructor(private router: Router) {
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}
