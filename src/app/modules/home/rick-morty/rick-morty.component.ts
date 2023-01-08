import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Character, ICharacterResponse, Info } from 'src/app/utilities/models/character';
import { CharactersService } from 'src/app/utilities/services/characters.service';

@Component({
  selector: 'app-rick-morty',
  templateUrl: './rick-morty.component.html',
  styleUrls: ['./rick-morty.component.scss'],
})
export class RickMortyComponent implements OnInit {
  characters: Character[] = [];
  info: Info;
  // characters$: Observable<ICharacterResponse>;

  disable_prev = false;
  disable_next = false;
  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(newData?: string) {
    this.charactersService.getCharacters(newData).subscribe((characters) => {
      this.characters = characters.results;
      this.info = characters.info;
      console.log(characters.results);
      console.log(characters.info);
      this.info.prev ? (this.disable_prev = false) : (this.disable_prev = true);
      this.info.next ? (this.disable_next = false) : (this.disable_next = true);
    });

    // this.characters$ = this.charactersService.getCharacters().results[];
  }

  previousPage() {
    this.getCharacters(this.info.prev);
  }
  nextPage() {
    this.getCharacters(this.info.next);
  }
}
