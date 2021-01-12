import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './main/cart/cart.component';
import { ForgotpasswordComponent } from './main/forgotpassword/forgotpassword.component';
import { MainComponent } from './main/main/main.component';
import { SigninComponent } from './main/signin/signin.component';
import { SignupComponent } from './main/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'forgot',
    component: ForgotpasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
