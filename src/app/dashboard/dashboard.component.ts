import { Component, OnInit } from '@angular/core';
import { SpotifywebService } from '../spotifyweb.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  spotifyKey: string;

  constructor(private spotify: SpotifywebService, private route: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.spotifyKey = this.activeRoute.snapshot.fragment.split('&')[0].substr(13);
    //store spotify key back in spotify service
    this.spotify.setSpotifyKey(this.spotifyKey);
    console.log(this.spotifyKey);
  }

}
