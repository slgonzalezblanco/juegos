import { Component} from '@angular/core';

@Component({
  selector: 'app-encuentra-el-tesoro',
  templateUrl: './encuentra-el-tesoro.component.html',
  styleUrls: ['./encuentra-el-tesoro.component.scss']
})
export class EncuentraElTesoroComponent {
  filas: any;
  columnas: any;
  tabla: any;
  imageSrc: string[][];
  filasArray: any[];
  columnasArray: any[];
  Treasure: any[];
  attempts:any;
  contador:number
  


  constructor(){
    this.filas;
    this.columnas;
    this.tabla = false;
    this.imageSrc = [];
    this.filasArray = [];
    this.columnasArray = [];
    this.Treasure = [];
    this.attempts = 0;
    this.contador = 0;
    
 
  }



 

  pintarTabla(event: any){
    this.filasArray = Array.from({length: this.filas});
    this.columnasArray = Array.from({length: this.columnas});
    this.imageSrc = [];
    this.Treasure [0] = this.getRandom(this.filas);
    this.Treasure [1]  = this.getRandom(this.columnas);
    
    for(let i=0; i<this.filas; i++) {
      this.imageSrc[i] = [];
      for(let j=0; j<this.columnas; j++) {
        this.imageSrc[i][j] = "./assets/tesoro/x.png";
      }
    }
  }

  getRandom( num:number ) {
    return Math.floor(Math.random() * (num))
  }

 

  voltearImagen(fila: number, columna: number) {
    this.attempts++;

    if (this.imageSrc[fila][columna] === "./assets/tesoro/skull.png") {
      this.imageSrc[fila][columna] = "./assets/tesoro/x.png";
    } else {
      this.imageSrc[fila][columna] = "./assets/tesoro/skull.png";
    } 

    if (this.Treasure[0] == fila && this.Treasure[1] == columna){
      this.imageSrc[fila][columna] = "./assets/tesoro/chest.png";
      alert ("quien me dijo que esto era buena idea");
    }

  }
  resetTabla() {
    this.filas ="";
    this.columnas ="";
    this.imageSrc = [];
    this.filasArray = [];
    this.columnasArray = [];
    this.Treasure = [];
    this.contador = 0;
    this.tabla = false;
    this.attempts=0
  }
 
  }








  

