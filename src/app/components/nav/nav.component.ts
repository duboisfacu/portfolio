import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass'],
})
export class NavComponent implements OnInit {
  constructor() {}
  public closed: any;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.closed = window.innerWidth < 576 ? true : false;
  }
  closeNav(a: string) {
    document.getElementById(a)?.scrollIntoView();
  }
  ngOnInit(): void {
    this.closed = window.innerWidth < 576 ? true : false;
  }
}
