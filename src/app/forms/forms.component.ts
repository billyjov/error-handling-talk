import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn,
  FormArray,
  ReactiveFormsModule,
} from '@angular/forms';

import { debounceTime } from 'rxjs/operators';
import { User } from '../shared/models/user';
import { AsyncPipe, JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor, AsyncPipe, NgClass, JsonPipe],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent implements OnInit {
  public registerForm!: FormGroup;
  public emailGroup!: FormGroup;
  public user: User = new User();
  public errorMsg!: string;

  private validationErrorsMessages: Record<string, string> = {
    required: 'Bitte geben Sie eine E-Mail-Adresse ein',
    email: 'Addresse Ungültig Bitte geben Sie eine gültige E-Mail-Adresse ein',
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(40)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      username: ['', [Validators.required, Validators.minLength(4)]],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
    });

    this.emailGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });

    const emailControl = this.emailGroup.get('email');
    emailControl?.valueChanges.pipe(debounceTime(1000)).subscribe(() => {
      this.setMessage(emailControl);
    });
  }

  public saveData() {
    console.log(this.registerForm);
    console.log('valeurs: ', JSON.stringify(this.registerForm.value));
    console.log('hello');
  }

  private setMessage(value: AbstractControl): void {
    this.errorMsg = '';

    if ((value.touched || value.dirty) && value.errors) {
      this.errorMsg = Object.keys(value.errors)
        .map((key) => this.validationErrorsMessages[key])
        .join(' ');
    }
  }
}
