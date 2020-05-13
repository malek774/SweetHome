import { Component, OnInit } from '@angular/core';
import { SpotifywebService } from '../spotifyweb.service';

@Component({
  selector: 'app-myplaylist',
  templateUrl: './myplaylist.component.html',
  styleUrls: ['./myplaylist.component.scss']
})
export class MyplaylistComponent implements OnInit {

  userPlaylistData;

  constructor(private spotify: SpotifywebService) { }

  ngOnInit(): void {
    this.spotify.getUserPlaylist().subscribe(data => {
      console.log(data['items']);
      this.userPlaylistData = data['items'];
      console.log(this.userPlaylistData);
    });
  }

}
