import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUser } from './store/actions/user.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-boilerplate';
  name = 'hola';

  constructor(private store: Store) {}
  getUser() {
    this.store.dispatch(loadUser({ id: '1' }));
  }
}
