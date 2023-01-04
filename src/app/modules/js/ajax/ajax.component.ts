import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.scss'],
})
export class AjaxComponent implements OnInit {
  title = `AJAX`;
  definition = `AJAX = Asynchronous JavaScript And XML.`;

  constructor() {}

  ngOnInit(): void {}
}
