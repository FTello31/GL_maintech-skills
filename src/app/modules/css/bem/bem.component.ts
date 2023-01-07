import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bem',
  templateUrl: './bem.component.html',
  styleUrls: ['./bem.component.scss'],
})
export class BemComponent implements OnInit {
  code = `.byline {}
.byline__name {}
.byline__title {}
.byline__picture {}
.byline--expanded {}
.byline--expanded__bio {}

// with SCSS

.opinions_box {
    margin: 0 0 8px 0;
    text-align: center;

    &__view-more {
        text-decoration: underline;
    }

    &__text-input {
        border: 1px solid #ccc;
    }

    &--is-inactive {
        color: gray;
    }
}`;

  code2 = `.media {}
.media .img {}
.media .img img {}
.media .imgExt {}
.bd {}`;

  constructor() {}

  ngOnInit(): void {}
}
