import { Component, OnInit } from '@angular/core';
import { svgService } from 'src/app/svg.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent implements OnInit {
  constructor(private svgService: svgService) {}

  ngOnInit(): void {
    this.svgService.init();
  }
}
