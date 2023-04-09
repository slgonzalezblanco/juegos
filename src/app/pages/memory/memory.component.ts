import { Component } from '@angular/core';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss']
})

export class MemoryComponent {
  cards: any[];
  filas: any;
  columnas: any;
  tabla: any;
  imageSrc: string[][];
  filasArray: any[];
  columnasArray: any[];
  flippedCards: any[] = [];

  constructor() {
    this.cards = [];
    this.filas;
    this.columnas;
    this.tabla = false;
    this.imageSrc = [];
    this.filasArray = [];
    this.columnasArray = [];
  }




  gamecards() {
    this.cards = [

      {

        image: "earth.svg", arriba: false
      },
      {

        image: "jupiter.svg", arriba: false
      },
      {

        image: "mars.svg", arriba: false
      },
      {

        image: "mercury.svg", arriba: false
      },
      {

        image: "saturn.svg", arriba: false
      },
      {

        imge: "uranus.svg", arriba: false
      },
      {

        image: "earth.svg", arriba: false
      },
      {

        image: "jupiter.svg", arriba: false
      },
      {

        image: "mars.svg", arriba: false
      },
      {

        image: "mercury.svg", arriba: false
      },
      {

        image: "saturn.svg", arriba: false
      },
      {

        image: "uranus.svg", arriba: false
      },
    ];

    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
    this.cards.forEach(img => {
      img.arriba = false;
    });

  }}

