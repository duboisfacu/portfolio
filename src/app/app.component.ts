import { Component } from '@angular/core';
import * as AOS from 'aos';
import { svgService } from './svg.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'portfolio';

  constructor(private svgService: svgService) {}

  ngOnInit() {
    this.svgService.init();
    AOS.init({ startEvent: 'load' });
  }
}
