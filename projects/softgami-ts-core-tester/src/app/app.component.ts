import { Component } from '@angular/core';
import { User } from 'softgami-ts-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  constructor() {
    const user: User = {
      _id: 'id',
      name: 'name',
    };
  }
}
