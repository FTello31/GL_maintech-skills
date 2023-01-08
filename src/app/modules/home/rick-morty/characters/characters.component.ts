import { Component, OnInit } from '@angular/core';
import { Character, Info } from 'src/app/utilities/models/character';
import { CharactersService } from 'src/app/utilities/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
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
