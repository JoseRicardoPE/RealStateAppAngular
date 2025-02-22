import { Component } from '@angular/core';
import { RegisterObj } from '../../interfaces/register-obj';
import { ReactiveFormsModule ,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  registerObjForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.registerObjForm = this.fb.group({
      userId: [null],
      userName: ['', [Validators.required, Validators.minLength(3)]],
      emailId: ['', [Validators.required]],
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      role: ['', [Validators.required]],
      createdDate: [null, [Validators.required]],
      password: ['', [Validators.required]],
      projectName: ['', [Validators.required]],
    });
  }

  inputIsInvalid(input: string): boolean {
    return (
      this.registerObjForm.controls[input].invalid && this.registerObjForm.controls[input].touched
    )
  }

}
