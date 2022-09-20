import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  numero1: number=1;
  numero2: number=2;
  dadoIzquierda: string = '../assets/img/dice1.png';
  dadoDerecha: string = '../assets/img/dice1.png';
  contador: number = 0;
  //1: Azul - 2:Rojo - 3:Verde
  colorDado: number = 1;
  tirar: boolean = true;

  ngOnInit(){};

  empezarContador(){
      setTimeout(() => {
        this.contador += 10;
        if (this.contador < 100) {
          this.empezarContador();
          if ( this.contador >= 90) {
             this.mostrarDados();
            this.tirar = true;
            }
        }
      }, 110);
    }


  tirarDados(): void{
    this.colorDado = 1;
    this.contador= 0;
    this.tirar = false;
    this.empezarContador();
  }

  mostrarDados(){

    this.numero1 = Math.ceil(Math.random() * 6);
    this.numero2 = Math.ceil(Math.random() * 6);
    this.dadoIzquierda = '../assets/img/dice' + this.numero1 + '.png';
    this.dadoDerecha = '../assets/img/dice' + this.numero2 + '.png';
    if (this.numero1 === this.numero2) { this.colorDado = 3 };
    if (this.numero1 !== this.numero2) { this.colorDado = 2 };
  }
}
