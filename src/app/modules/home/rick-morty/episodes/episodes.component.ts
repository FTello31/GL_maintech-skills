import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/utilities/models/character';
import { Episode } from 'src/app/utilities/models/episode';
import { EpisodesService } from 'src/app/utilities/services/episodes.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
})
export class EpisodesComponent implements OnInit {
  episodes: Episode[] = [];
  info: Info;
  // characters$: Observable<ICharacterResponse>;

  disable_prev = false;
  disable_next = false;
  constructor(private episodesService: EpisodesService) {}

  ngOnInit(): void {
    this.getEpisodes();
  }

  getEpisodes(newData?: string) {
    this.episodesService.getEpisodes(newData).subscribe((episodes) => {
      this.episodes = episodes.results;
      this.info = episodes.info;
      console.log(episodes.results);
      console.log(episodes.info);
      this.info.prev ? (this.disable_prev = false) : (this.disable_prev = true);
      this.info.next ? (this.disable_next = false) : (this.disable_next = true);
    });

    // this.characters$ = this.charactersService.getEpisodes().results[];
  }

  previousPage() {
    this.getEpisodes(this.info.prev);
  }
  nextPage() {
    this.getEpisodes(this.info.next);
  }
}
