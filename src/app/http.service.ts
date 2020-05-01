import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  authEndPoint = "https://accounts.spotify.com/authorize";
  clientId = "edb6db7c1c604795b872fe40255d52fc";
  redirectUri = 'http://localhost:4200';
  spotifyKey = "";

  Oauth = `https://accounts.spotify.com/authorize?client_id=21e0d925502047b08c82d197558a42e5&redirect_uri=http:%2F%2F127.0.0.1:4200%2F&scope=user-read-private%20user-read-email%20streaming&response_type=token&state=123`;

  headers = new HttpHeaders({
    "Authorization": this.spotifyKey,
    "Accept": "application/json",
    "Content-Type": "application/json"
  });

  constructor(private http: HttpClient) { }

  loginAuth() {
    return window.open(this.Oauth);
  }

  test() {
    return this.http.get("https://api.spotify.com/v1/search?query=dotan&type=artist", {
      headers: this.headers
    });
  }

  searchItem(query) { //, type, market, limit, offset
    let queryEncode = query.replace(" ", "%20");
    return this.http.get(`https://api.spotify.com/v1/search?query=${queryEncode}&type=album,artist,playlist,track`, {
      headers: this.headers
    });
  }

  setSpotifyKey(key) {
    this.spotifyKey = key;
  }
}
