import { Component, OnInit, effect } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IUser } from 'src/app/shared/models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['../../styles/auth.scss'],
})
export class LogInComponent implements OnInit {
  user!: IUser | null;
  form!: FormGroup;
  isAuthorized!: boolean;

  constructor(private authService: AuthService) {
    effect(() => {
      this.isAuthorized = this.authService.isLogged();
    });
  }

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
    this.user = this.authService.getLoggedUser();
    if (this.user) {
      this.form.patchValue({
        emailControl: this.user.email,
        passwordControl: this.user.password,
      });
      this.form.disable();
    }
  }

  logIn() {
    this.user = {
      email: this.form.value.emailControl,
      password: this.form.value.passwordControl,
    };
    if (!this.authService.checkEmail(this.user)) {
      this.form.controls['emailControl'].setErrors({ unexisting: true });
      return;
    }
    if (!this.authService.checkPassword(this.user)) {
      this.form.controls['passwordControl'].setErrors({ incorrect: true });
      return;
    }
    this.form.disable();
    this.authService.login(this.user);
  }

  logOut() {
    this.form.reset();
    this.form.enable();
    Object.keys(this.form.controls).forEach((key) => {
      const control = this.form.controls[key];
      control.setErrors(null);
    });
    this.authService.logout();
  }
}
