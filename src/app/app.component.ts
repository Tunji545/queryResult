import { Component } from '@angular/core';

@Component({
  selector: 'sq-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sql-query';
  sideBarOpen: boolean = true;

  sideBarToggler(): void {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
