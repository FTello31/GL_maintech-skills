import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Character, ICharacterResponse, Info } from 'src/app/utilities/models/character';
import { CharactersService } from 'src/app/utilities/services/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {}
}
