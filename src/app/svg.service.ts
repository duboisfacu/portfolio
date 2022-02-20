import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class svgService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  init() {
    this.matIconRegistry.addSvgIcon(
      'hotu',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/projects/icons/hotu.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'sisas',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/projects/icons/carena.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'chesterbot',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/projects/icons/chesterbot.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'cyc',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/projects/icons/cyc.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'flaptune',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/projects/icons/flaptune.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'portfolio',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/projects/icons/portfolio.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'eltacu',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/projects/icons/tacu.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'todoit',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/projects/icons/todoit.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'demo',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/projects/buttons/demo.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/projects/buttons/github.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'info',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/projects/buttons/info.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'micv',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/footer/micv.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'mail',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/footer/email.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'ghub',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/footer/github.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'linkedin',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/footer/linkedin.svg'
      )
    );
  }
}
