import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-functional-programming',
  templateUrl: './functional-programming.component.html',
  styleUrls: ['./functional-programming.component.scss'],
})
export class FunctionalProgrammingComponent implements OnInit {
  title = `Functional Programming`;
  definition = `Functional programming (FP) is an approach to software development 
  that uses pure functions to create maintainable software. In other words, building programs by applying and composing functions. `;

  constructor() {}

  ngOnInit(): void {}
}
