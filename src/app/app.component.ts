import { Component } from '@angular/core';
import { explorer } from "./static/json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-sidebar';

  public sidebarData = explorer;
}
