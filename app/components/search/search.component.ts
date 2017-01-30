import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: `search.component.html`,
})
export class SearchComponent {
  searchStr: string;
  constructor(private _spotifySerive: SpotifyService) {

  }
  searchMusic() {
   this._spotifySerive.searchMusic(this.searchStr).subscribe(res =>{
     console.log(res.artists.items);
   });
  }

}
