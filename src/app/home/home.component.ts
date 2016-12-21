import { Component, OnInit } from '@angular/core';

import { AppState } from '../app.service';

@Component({
  selector: 'app-home',
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  // Set our default values
  public localState: any = { value: '' };
  // TypeScript public modifiers
  constructor(public appState: AppState) {

  }

  public ngOnInit() {
    console.log('hello `Home` component');
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
