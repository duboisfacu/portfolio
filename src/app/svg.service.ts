import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root',
})
export class svgService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}
  assets = environment.assets;
  init() {
    this.matIconRegistry.addSvgIcon(
      'hotu',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `./assets/projects/icons/hotu.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'sisas',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `./assets/projects/icons/carena.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'chesterbot',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `./assets/projects/icons/chesterbot.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'cyc',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `./assets/projects/icons/cyc.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'flaptune',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `./assets/projects/icons/flaptune.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'portfolio',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `./assets/projects/icons/portfolio.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'eltacu',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `./assets/projects/icons/tacu.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'todoit',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `./assets/projects/icons/todoit.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'demo',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `./assets/projects/buttons/demo.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `./assets/projects/buttons/github.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'info',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `./assets/projects/buttons/info.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'micv',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `./assets/footer/micv.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'mail',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `./assets/footer/email.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'ghub',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `./assets/footer/github.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'linkedin',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `./assets/footer/linkedin.svg`
      )
    );
    // LAN
    this.matIconRegistry.addSvgIcon(
      'angular',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `./assets/projects/languages/angular.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'ts',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `./assets/projects/languages/typescript.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'bootstrap',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `./assets/projects/languages/bootstrap.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'css',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `./assets/projects/languages/css.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'gms',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `./assets/projects/languages/gms.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'html',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `./assets/projects/languages/html.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'js',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `./assets/projects/languages/js.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'node',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `./assets/projects/languages/node.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'react',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `./assets/projects/languages/react.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'sass',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `./assets/projects/languages/sass.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'vb',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `./assets/projects/languages/vb.svg`
      )
    );
    this.matIconRegistry.addSvgIcon(
      'arrow',
      this.domSanitizer.bypassSecurityTrustResourceUrl(`./assets/arrow.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      'mapache',
      this.domSanitizer.bypassSecurityTrustResourceUrl(`./assets/mapache.svg`)
    );
  }
}
