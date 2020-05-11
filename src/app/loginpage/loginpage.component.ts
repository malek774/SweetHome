import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { SpotifywebService } from '../spotifyweb.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  spotifyKey: string;

  constructor(private spotify: SpotifywebService, private route: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.spotifyKey = this.activeRoute.snapshot.fragment.split('&')[0].substr(13);
    //store spotify key back in spotify service
    this.spotify.setSpotifyKey(this.spotifyKey);
    console.log(this.spotifyKey);
  }

  signIn() {
    //perform auth
    this.spotify.loginAuth();
    //go to dashboard page
    //this.route.navigate(['/dashboard']);
  }

}

