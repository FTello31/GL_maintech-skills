import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sass',
  templateUrl: './sass.component.html',
  styleUrls: ['./sass.component.scss'],
})
export class SassComponent implements OnInit {
  title = `Sass`;
  definition = `CSS with superpowers, Sass es el lenguaje de extensión CSS de grado profesional más maduro, estable y potente del mundo.
    \n 
  `;
  code = `$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}`;

  code1 = `SCSS SYNTAX
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}`;
  code2 = `// _base.scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}

--------

// styles.scss
@use 'base';

.inverse {
  background-color: base.$primary-color;
  color: white;
}`;
  code3 = `@mixin theme($theme: DarkGray) {
  background: $theme;
  box-shadow: 0 0 1px rgba($theme, .25);
  color: #fff;
}

.info {
  @include theme;
}
.alert {
  @include theme($theme: DarkRed);
}
.success {
  @include theme($theme: DarkGreen);
}
`;
  code4 = `/* This CSS will print because %message-shared is extended. */
  %message-shared {
    border: 1px solid #ccc;
    padding: 10px;
    color: #333;
  }
  
  // This CSS won't print because %equal-heights is never extended.
  %equal-heights {
    display: flex;
    flex-wrap: wrap;
  }
  
  .message {
    @extend %message-shared;
  }
  
  .success {
    @extend %message-shared;
    border-color: green;
  }
  
`;

  constructor() {}

  ngOnInit(): void {}
}
