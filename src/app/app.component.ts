import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sanitary-online';
  visibility = false;

  constructor(
    private _router: Router,
    private _location: Location
  ){}

  ngOnInit(){
    this._router.events.subscribe((event) => {
      const path = this._location.path();
      if (event instanceof NavigationEnd){
        if(
            path.includes('/signin') || 
            path.includes('/signup') || 
            path.includes('/forgot')
          ){
          this.visibility = false;
        } else {
          this.visibility = true;
        }
      }
    })
  }
}
