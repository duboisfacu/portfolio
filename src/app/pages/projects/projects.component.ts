import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
})
export class ProjectsComponent implements OnInit {
  more: number = 0;
  operation(value: number) {
    this.more = value;
  }
  run(card: any) {
    this.juan = '';
    if (card[6]) {
      this.juan =
        '<p class="description">' + card[5] + '</p><br><p>Desarrollado en:</p>';
      for (let i of card[6]) {
        this.juan =
          this.juan +
          '<a class="fua" target="_blank" href=" ' +
          i[1] +
          '"> <img class="language-icon" src="' +
          i[0] +
          '"/></a>';
      }
    }
    return this.juan;
  }

  juan?: string;
  languages: any = {
    angular: [
      '../../../assets/projects/languages/angular.svg',
      'https://angular.io/',
    ],
    bootstrap: [
      '../../../assets/projects/languages/bootstrap.svg',
      'https://getbootstrap.com/',
    ],
    css: [
      '../../../assets/projects/languages/css.svg',
      'https://www.w3schools.com/css/',
    ],
    html: ['../../../assets/projects/languages/html.svg', 'https://html.com/'],
    js: [
      '../../../assets/projects/languages/js.svg',
      'https://www.javascript.com/',
    ],
    react: [
      '../../../assets/projects/languages/react.svg',
      'https://es.reactjs.org/',
    ],
    sass: [
      '../../../assets/projects/languages/sass.svg',
      'https://sass-lang.com/',
    ],
    vb: [
      '../../../assets/projects/languages/vb.svg',
      'https://docs.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2010/dd831853(v=vs.100)',
    ],
    node: [
      '../../../assets/projects/languages/node.svg',
      'https://nodejs.org/es/',
    ],
    gms: [
      '../../../assets/projects/languages/gms.svg',
      'https://www.yoyogames.com/es/gamemaker',
    ],
  };
  projects: Array<Array<Array<any>>> = [
    [
      [
        'FLAPTUNE',
        '../../../assets/projects/icons/flaptune.svg',
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
        '../../../assets/projects/icons/hotu.svg',
        true,
        'https://github.com/duboisfacu/hotu-alkemy',
        'https://duboisfacu.github.io/hotu/#/login',
        [
          'Challenge para la empresa Alkemy.<br>Forma tu equipo de superheroes soñado.',
        ],
        [this.languages.bootstrap, this.languages.react, this.languages.sass],
      ],
      [
        'PORTAFOLIO',
        '../../../assets/projects/icons/portfolio.svg',
        true,
        'https://github.com/duboisfacu/portfolio',
        'https://duboisfacu.github.io/portfolio/',
        ['Portafolio desarrollador Frontend'],
        [this.languages.bootstrap, this.languages.angular, this.languages.sass],
      ],
      [
        'TODO IT',
        '../../../assets/projects/icons/todoit.svg',
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
        '../../../assets/projects/icons/chesterbot.svg',
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
        '../../../assets/projects/icons/carena.svg',
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
        '../../../assets/projects/icons/cyc.svg',
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
        '../../../assets/projects/icons/tacu.svg',
        true,
        false,
        false,
        [
          '<p class="fw-bold">EN DESARROLLO</p>Sitio Web para complejo de cabañas',
        ],
        [this.languages.react],
      ],
      ['', '', false, false, false, false, false, true],
    ],
  ];
  constructor() {}

  ngOnInit(): void {}
}
