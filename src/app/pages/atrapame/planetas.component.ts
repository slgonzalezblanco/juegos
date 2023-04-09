import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.scss']
})

export class PlanetasComponent implements OnInit {
  timer: any;
  contador: number = 30;
  score:number=0;
  filasArray: number[] = [1, 1, 1];
  columnaArray: number[] = [1, 1, 1];
  imageSrc: string [][]= [];
  imgDiglet: string = "../../../assets/planetas/mole.png";
  imgBg: string = "../../../assets/planetas/bg.jpg";
  object: any[] = [];

  ngOnInit(): void {
    this.defaulBoard();
  }

  starting() {
    
    this.contador=30;
    this.score=0;
    this.defaulBoard();

    this.timer = setInterval(() => {
      
      let cont = 2;

      let prueba = setInterval(() => {
        this.defaulBoard();
        cont--;

        this.object[0] = this.getRandom(3);
        this.object[1] = this.getRandom(3);
        this.imageSrc[this.object[0]][this.object[1]]= this.imgDiglet;

        if (cont <= 0) {
          clearInterval(prueba);
        }
      },500)
      if (this.contador <= 1) {
        clearInterval(this.timer);
      }
      this.contador--;
      }, 1000);
    }

    sumaScore(i:number, j:number){
      if(this.imageSrc[i][j]===this.imgDiglet){
        this.imageSrc[i][j]=this.imgBg
        this.score++;
      }
    }

    defaulBoard(){
      for(let i=0; i<this.filasArray.length; i++) {
        this.imageSrc[i] = [];
        for(let j=0; j<this.columnaArray.length; j++) {
          this.imageSrc[i][j] = this.imgBg;
        }
      }
    }

      getRandom(num:number){
        return Math.floor(Math.random()*num)
      }
  
}