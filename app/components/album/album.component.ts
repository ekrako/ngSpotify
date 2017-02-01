import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute}  from '@angular/router';

import { Album } from '../../../Album';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'album',
  templateUrl: `album.component.html`,
})
export class AlbumComponent implements OnInit { 
  id: string;
  album: Album;

  constructor(
    private _spotifySerive: SpotifyService,
    private _route: ActivatedRoute) {

  }
  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this._route.params
        .map(params => params['id'])
        .subscribe(id => {
          this._spotifySerive.getAlbum(id)
              .subscribe(album => {
                this.album = album;
              });
        });
  }

}
