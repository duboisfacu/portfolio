import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.sass'],
})
export class ArrowComponent implements OnInit {
  @Input() href?: string;
  constructor() {}
  closeNav(a: any) {
    document.getElementById(a)?.scrollIntoView();
  }
  ngOnInit(): void {}
}
