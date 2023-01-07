import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transformations',
  templateUrl: './transformations.component.html',
  styleUrls: ['./transformations.component.scss'],
})
export class TransformationsComponent implements OnInit {
  // title = `Sass`;
  // definition = `CSS with superpowers, Sass is the world's most mature, stable and powerful professional-grade CSS extension language.
  //   \n
  // `;

  code = `
  div {
    transition: [property] [duration] [timing-function] [delay];
  }`;

  code2 = `
  div {
    transition: transform 1s;
  }
  
  div:hover {
    transform: scale(2);
  }`;

  code3 = `
  div {
    transition: transform 1s;
  }
  
  div:hover {
    transform: rotate(1080deg);
  }`;

  code4 = `
  div {
    transition: transform 1s;
  }
  
  div:hover {
    transform: translate(20px, 20px);
  }`;
  constructor() {}

  ngOnInit(): void {}
}
