import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IUser } from 'src/app/shared/models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../../styles/auth.scss'],
})
export class SignUpComponent implements OnInit {
  user!: IUser | null;
  form!: FormGroup;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.form = new FormGroup({
      emailControl: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      passwordControl: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  signUp() {
    this.user = {
      email: this.form.value.emailControl,
      password: this.form.value.passwordControl,
    };
    if (this.authService.checkEmail(this.user)) {
      this.form.controls['emailControl'].setErrors({ existing: true });
      return;
    }
    this.authService.signup(this.user);
    this.form.reset();
    Object.keys(this.form.controls).forEach((key) => {
      const control = this.form.controls[key];
      control.setErrors(null);
    });
  }
}
