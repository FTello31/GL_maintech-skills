import { Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit, OnDestroy {
  title = `¿Qué es HTML Canvas?`;
  definition = `El elemento HTML <canvas> se utiliza para dibujar gráficos, sobre la marcha, a través de secuencias de comandos
  (normalmente JavaScript).\n
   El elemento <canvas> es sólo un contenedor de gráficos. Debe utilizar un script para dibujar los gráficos.\n
  El lienzo tiene varios métodos para dibujar rutas, cajas, círculos, texto y añadir imágenes.`;

  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;
  requestId: any;
  interval: number;
  squares: Square[] = [];

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    const res = this.canvas.nativeElement.getContext('2d');
    if (!res || !(res instanceof CanvasRenderingContext2D)) {
      throw new Error('Failed to get 2D context');
    }
    this.ctx = res;
    this.ctx.fillStyle = 'red';
    this.ngZone.runOutsideAngular(() => this.tick());
    setInterval(() => {
      this.tick();
    }, 200);

    this.canvas.nativeElement.style.width = '60%';
    // this.canvas.nativeElement.style.height = '900';
  }

  tick() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.squares.forEach((square: Square) => {
      square.moveRight();
    });
    this.requestId = requestAnimationFrame(() => this.tick);
  }

  play() {
    const square = new Square(this.ctx);
    this.squares = this.squares.concat(square);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
    cancelAnimationFrame(this.requestId);
  }
}

export class Square {
  private color = 'red';
  private x = 0;
  private y = 0;
  private z = 30;

  constructor(private ctx: CanvasRenderingContext2D) {}

  moveRight() {
    this.x++;
    this.draw();
  }

  private draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.z * this.x, this.z * this.y, this.z, this.z);
  }
}
