import { Component } from '@angular/core';
import { Manager } from "./manager";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-times-bomb';

  manager: Manager = new Manager();

  cards = this.manager.getCards();

  roles = this.manager.getRoles();

  public start() {
    this.manager.start();
  }
}
