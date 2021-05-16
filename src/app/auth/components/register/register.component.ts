import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {}

  registerForm = new FormGroup({
    email: new FormControl(''),
    mobile_number: new FormControl(''),
    last_name: new FormControl(''),
    first_name: new FormControl(''),
    trading_experience: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthService) {}

  submitRegister() {
    //console.warn(this.addForm.value);
    console.log(this.registerForm.value);
    this.authService.signup(this.registerForm.value).subscribe(
      (next) => {
        console.log('User loged in: ');
      },
      (error) => {
        console.log('Error: ' + error);
      }
    );
  }
}
