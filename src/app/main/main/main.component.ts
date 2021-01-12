import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { AccountModel } from '../../shared/models/account.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  sample = ['sample1', 'sample2', 'sample3', 'sample4', 'sample5', 'sample6'];
  user: AccountModel;
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
