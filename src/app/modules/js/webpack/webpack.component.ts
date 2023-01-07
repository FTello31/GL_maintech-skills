import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webpack',
  templateUrl: './webpack.component.html',
  styleUrls: ['./webpack.component.scss'],
})
export class WebpackComponent implements OnInit {
  title = `Web application bundlers`;
  definition = `A bundler is a development tool that combines many JavaScript code files into 
  a single one that is production-ready loadable in the browser. A fantastic feature of a 
  bundler is that it generates a dependency graph as it traverses your first code files. `;

  constructor() {}

  ngOnInit(): void {}
}
