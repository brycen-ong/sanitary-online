import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _formBuilder: FormBuilder
  ) { 
    this.signUpForm = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      province: ['', Validators.required],
      city: ['', Validators.required],
      barangay: ['', Validators.required],
      street: ['', Validators.required],
      otherInfo: [''],
      mobileNumber: ['', Validators.required],
      birthDate: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  signUp(val){
    this._authService.signUp(val).then(data => {
      this._router.navigate(['/main']);
    }, err => {
      console.log(err);
    })
  }

}
