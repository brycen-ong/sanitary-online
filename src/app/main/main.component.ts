import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Account } from '../shared/interfaces/account.interface';
import { mainProductBase } from '../shared/mocks/product.mock';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  mainProductBase = mainProductBase;
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
      } else{
        this.isUser = false;
      }
    })
  }
}
