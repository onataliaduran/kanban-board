import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from './../services/firebase/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  onRegister() {
    const { email, password } = this.registerForm.value;
    this.authService.register(email, password)
      .subscribe(
        response => {
          this.router.navigate(['/board']);
        },
        // (error: Response) => {
        //   console.log('Unexpected error on registration', error);
        // }
      );
  }

}
