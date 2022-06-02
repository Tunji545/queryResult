import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sq-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menu!: any;
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor() {}
  toggleSidebar(): void {
    this.toggleSidebarForMe.emit();
  }
  ngOnInit(): void {}
}
