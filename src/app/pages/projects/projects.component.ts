import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgDialogAnimationService } from 'ng-dialog-animation';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
})
export class ProjectsComponent implements OnInit {
  more: number = 0;
  constructor(public dialog: NgDialogAnimationService) {}

  openDialog(card: any) {
    const dialogRef = this.dialog.open(ModalComponent, {
      panelClass: ['animate__animated', 'animate__bounceIn'],
      data: card,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  operation(value: number) {
    this.more = value;
  }
  run(card: any) {
    this.juan = '';
    if (card[6]) {
      this.juan =
        '<p class="description">' + card[5] + '</p><br><p>Desarrollado en:</p>';
      for (let i of card[6]) {
        this.juan = `${this.juan}<a class="fua" target="_blank" href="${i[1]}"><mat-icon class="language-icon color--primary" [svgIcon]="${i[0]}"/></mat-icon></a>`;
      }
    }
    return this.juan;
  }
  juan?: string;

  languages: any = {
    angular: ['angular', 'https://angular.io/'],
    bootstrap: ['bootstrap', 'https://getbootstrap.com/'],
    css: ['css', 'https://www.w3schools.com/css/'],
    html: ['html', 'https://html.com/'],
    js: ['js', 'https://www.javascript.com/'],
    react: ['react', 'https://es.reactjs.org/'],
    sass: ['sass', 'https://sass-lang.com/'],
    vb: [
      'vb',
      'https://docs.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2010/dd831853(v=vs.100)',
    ],
    node: ['node', 'https://nodejs.org/es/'],
    gms: ['gms', 'https://www.yoyogames.com/es/gamemaker'],
  };
  projects: Array<Array<Array<any>>> = [
    [
      [
        'FLAPTUNE',
        'flaptune',
        true,
        false,
        'https://duboisfacu.github.io/flaptune/',
        [
          'Flaptune es un juego de creación de personaje basado en la caricatura "Las maravillosas desventuras de Flapjack"',
        ],
        [this.languages.react, this.languages.css],
      ],
      [
        'HEROES OF THE UNIVERSE',
        'hotu',
        true,
        'https://github.com/duboisfacu/hotu-alkemy',
        'https://duboisfacu.github.io/hotu/#/login',
        [
          'Forma tu equipo de superheroes soñado. (Challenge para la empresa Alkemy)',
        ],
        [this.languages.bootstrap, this.languages.react, this.languages.sass],
      ],
      [
        'PORTAFOLIO',
        'portfolio',
        true,
        'https://github.com/duboisfacu/portfolio',
        'https://duboisfacu.github.io/portfolio/',
        ['Portafolio desarrollador Frontend'],
        [this.languages.bootstrap, this.languages.angular, this.languages.sass],
      ],
      [
        'TODO IT',
        'todoit',
        true,
        'https://github.com/duboisfacu/duboisfacu/blob/main/HACER.md#repositorios',
        'https://dms.licdn.com/playlist/C4D05AQFZBSYzbmcgfw/mp4-720p-30fp-crf28/0/1640153230913?e=1642680000&v=beta&t=1VdULb1D1Mb89P0sdAAXCjOan2Sqfsj8uMtykfGn6zQ',

        [
          'Interfaz de cliente, cadete y administrador para gestión de viajes y equipos informáticos.',
        ],
        [this.languages.bootstrap, this.languages.angular, this.languages.sass],
      ],
      [
        'CHESTERBOT',
        'chesterbot',
        true,
        'https://github.com/duboisfacu/chester-bot',
        'https://discord.com/oauth2/authorize?client_id=784925087530614815&permissions=8&scope=bot',
        [
          'Bot multifuncional para la plataforma de mensajería instantánea "Discord".',
        ],
        [this.languages.js, this.languages.node],
      ],
      [
        'SISAS CARENA',
        'sisas',
        true,
        'https://github.com/duboisfacu/asistencias',
        'https://dl.dropboxusercontent.com/s/zcp10lv0srx68m2/SISAS%20Carena.rar?dl=0',
        [
          'Sistema de asistencias desarrollado como tesis para la tecnicatura Superior en desarrollo de Software.',
        ],
        [this.languages.vb],
      ],
    ],
    [
      [
        'CUADRADITO Y CIRCULITO',
        'cyc',
        true,
        'https://github.com/duboisfacu/cuadradito-y-circulito',
        'https://dl.dropboxusercontent.com/s/92fvkfjz8tbfg40/CuadraditoyCirculito.exe?dl=0',

        [
          'Juego desarrollado en game Maker Studio 2 y codificado con en GML. Creado a partir de la serie de Cuadradito y Circulito.',
        ],
        [this.languages.gms],
      ],

      [
        'EL TACU',
        'eltacu',
        true,
        false,
        false,
        ['Sitio Web para complejo de cabañas (EN DESARROLLO)'],
        [this.languages.react],
      ],
      ['', '', false, false, false, false, false, true],
    ],
  ];

  ngOnInit(): void {}
}
