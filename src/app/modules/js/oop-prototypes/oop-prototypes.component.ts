import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oop-prototypes',
  templateUrl: './oop-prototypes.component.html',
  styleUrls: ['./oop-prototypes.component.scss'],
})
export class OopPrototypesComponent implements OnInit {
  title = `Object-oriented programming (OOP)`;
  definition = `Object-oriented programming (OOP) is a programming paradigm fundamental to many programming languages, 
  including Java and C++. There are three main concepts: classes and instances, inheritance, and encapsulation.`;
  code1 = `function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  Person.prototype.nationality = "English";`;

  code2 = `function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
  };`;
  constructor() {}

  ngOnInit(): void {}
}
