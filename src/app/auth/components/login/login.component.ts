import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  loginForm = new FormGroup({
    email: new FormControl(''),
    mobile_number: new FormControl(''),
    last_name: new FormControl(''),
    first_name: new FormControl(''),
    trading_experience: new FormControl(''),
    password: new FormControl(''),
  });

  submitLogin() {
    //console.warn(this.addForm.value);

    this.authService.login(this.loginForm.value).subscribe(
      (next) => {
        console.log('User loged in: ');
      },
      (error) => {
        console.log('Error: ' + error);
      }
    );
  }
}
