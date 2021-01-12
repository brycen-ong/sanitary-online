import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main/main.component';
import { CartComponent } from './main/cart/cart.component';
import { SigninComponent } from './main/signin/signin.component';
import { SignupComponent } from './main/signup/signup.component';
import { ForgotpasswordComponent } from './main/forgotpassword/forgotpassword.component';

// angularFire
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    CartComponent,
    SigninComponent,
    SignupComponent,
    ForgotpasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
