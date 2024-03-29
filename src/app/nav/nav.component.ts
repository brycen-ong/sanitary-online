import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Account } from '../shared/interfaces/account.interface';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit {

  user: Account;
  isUser: boolean;

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this._authService.getUserInfo().subscribe(data => {
      if(data){
        this.isUser = true;
        this.user = data;
      } else {
        this.isUser = false;
      }
    })
  }

  signOut(){
    this._authService.signOut().then(data => {
      window.location.reload();
    });
  }
}
