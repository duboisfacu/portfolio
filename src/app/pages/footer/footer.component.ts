import { Component, OnInit } from '@angular/core';
import { svgService } from 'src/app/svg.service';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent implements OnInit {
  constructor(private svgService: svgService) {}
  assets = environment.assets;

  ngOnInit(): void {
    this.svgService.init();
  }
}
