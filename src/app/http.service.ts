import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  authEndPoint = "https://accounts.spotify.com/authorize";
  clientId = "edb6db7c1c604795b872fe40255d52fc";
  redirectUri = 'http://localhost:4200';



  Oauth = `https://accounts.spotify.com/authorize?client_id=21e0d925502047b08c82d197558a42e5&redirect_uri=http:%2F%2F127.0.0.1:4200%2F&scope=user-read-private%20user-read-email%20streaming&response_type=token&state=123`;

  constructor(private http: HttpClient) { }

  getSpotifyKey() {
    return window.open(this.Oauth);
  }
}
