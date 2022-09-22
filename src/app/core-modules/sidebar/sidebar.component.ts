import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  menuItems = [
    { path: 'home', title: 'Home', icon: 'home', children: null },
    {
      path: 'html',
      title: 'HTML',
      icon: 'home',
      children: [
        { path: 'html/web-components', title: 'Web Components', icon: 'CC' },
        { path: 'html/web-workers', title: 'Web Workers', icon: 'PA' },
        { path: 'html/canvas', title: 'Canvas', icon: 'PA' },
      ],
    },
    {
      path: 'css',
      title: 'CSS',
      icon: 'home',
      children: [
        { path: 'css/bem', title: 'BEM / SMACSS / OOCSS', icon: 'CC' },
        { path: 'css/transformations', title: 'Transformations & Transitions', icon: 'PA' },
        { path: 'css/sass', title: 'SASS', icon: 'PA' },
        { path: 'css/bootstrap', title: 'Bootstrap', icon: 'PA' },
      ],
    },
    {
      path: 'js',
      title: 'JS',
      icon: 'home',
      children: [
        { path: 'js/oop', title: 'OOP / Prototype', icon: 'CC' },
        { path: 'js/ajax', title: 'Ajax', icon: 'PA' },
        { path: 'js/functional-programming', title: 'Functional programming', icon: 'PA' },
        { path: 'js/events', title: 'Events', icon: 'PA' },
        { path: 'js/patterns', title: 'Patterns (Module/Observer/IIFE/mixin)', icon: 'PA' },
        { path: 'js/browserify', title: 'Browserify,WebPack,Rollup.js', icon: 'PA' },
        { path: 'js/http2', title: 'HTTP2', icon: 'PA' },
        { path: 'js/websockets', title: 'Websockets', icon: 'PA' },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
