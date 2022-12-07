import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss'],
})
export class BootstrapComponent implements OnInit {
  title = `Bootstrap`;
  definition = `Bootstrap es un potente conjunto de herramientas, una colección de herramientas HTML, CSS y JavaScript para crear y construir páginas y aplicaciones web con capacidad de respuesta. 
  y construir páginas y aplicaciones web responsivas. Bootstrap es un proyecto gratuito y de código abierto alojado en GitHub y creado por Twitter. \n
  Bootstrap ofrece CSS responsivo que se ajusta a teléfonos, tabletas y ordenadores de sobremesa. 
  Bootstrap también es compatible con varios navegadores y es compatible con Chrome, Firefox, Internet Explorer, Safari y Opera.
  \n 
  `;

  constructor() {}

  ngOnInit(): void {}
}
