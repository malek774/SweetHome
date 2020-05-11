import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifywebService {
  constructor(private http: HttpClient) { }

  //redirectUri = 'http://localhost:4200';
  apiFirstPartURL = "https://api.spotify.com/v1/";
  authURL = "https://accounts.spotify.com/authorize";

  query_param = {
    client_id: "21e0d925502047b08c82d197558a42e5",
    response_type: "code",
    redirectUri: "http://127.0.0.1:4200/dashboard/",
    scopes: "user-read-private user-read-email streaming",
    showDialog: true
  };

  spotifyKey = "";

  Oauth = `${this.authURL}?client_id=${this.query_param.client_id}&redirect_uri=${encodeURIComponent(this.query_param.redirectUri)}&scope=${encodeURIComponent(this.query_param.scopes)}&response_type=token&state=123`;

  headers = new HttpHeaders({
    "Authorization": "Bearer" + this.spotifyKey,
    "Accept": "application/json",
    "Content-Type": "application/json"
  });

  loginAuth() {
    window.open(this.Oauth);
  }

  test() {
    console.log(this.spotifyKey);
    this.setHeaders(this.headers);
    return this.http.get("https://api.spotify.com/v1/search?q=dotan&type=artist", {
      headers: this.headers
    });
  }

  searchItem(query) { //, type, market, limit, offset
    let queryEncode = query.replace(" ", "%20");
    this.setHeaders(this.headers);
    return this.http.get(`https://api.spotify.com/v1/search?query=${queryEncode}&type=album,artist,playlist,track`, {
      headers: this.headers
    });
  }

  getCategories() {
    console.log(this.spotifyKey);
    this.setHeaders(this.headers);
    return this.http.get(`https://api.spotify.com/v1/browse/categories`, {
      headers: this.headers
    });
  }


  setSpotifyKey(key) {
    this.spotifyKey = key;
  }

  setHeaders(headers) {
    this.headers = new HttpHeaders({
      "Authorization": "Bearer " + this.spotifyKey,
      "Accept": "application/json",
      "Content-Type": "application/json"
    });
  }
}
