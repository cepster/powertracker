import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { AppState } from './app.service';

@Component({
  selector: 'app-component',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css',
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public angularclassLogo: String = 'assets/img/angularclass-avatar.png';
  public name: String = 'Angular 2 Webpack Starter';
  public url: String = 'https://twitter.com/AngularClass';

  constructor(public appState: AppState) {

  }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
