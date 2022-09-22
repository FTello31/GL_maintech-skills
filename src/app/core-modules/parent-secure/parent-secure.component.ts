import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-secure',
  templateUrl: './parent-secure.component.html',
  styleUrls: ['./parent-secure.component.scss'],
})
export class ParentSecureComponent implements OnInit {
  isActiveSidebar = 'show';

  constructor() {}

  ngOnInit(): void {}

  showSide(show: any) {
    console.log(show);

    show == 'true' ? (this.isActiveSidebar = 'show') : (this.isActiveSidebar = 'hide');
    console.log(show);
  }
}
