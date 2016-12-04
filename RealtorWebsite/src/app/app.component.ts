import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private _router: Router) { }

  doIt() {
    console.log('doing it');
  }

  isHome(): boolean {
    return this._router.url === '/app-home';
  }
}
