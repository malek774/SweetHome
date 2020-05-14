import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifywebService {
  constructor(private http: HttpClient) { }

  spotifyKey = "";
  apiFirstPartURL = "https://api.spotify.com/v1";
  authURL = "https://accounts.spotify.com/authorize";
  scopesArray = ["ugc-image-upload", "user-read-playback-state", "user-modify-playback-state", "user-read-currently-playing",
    "streaming", "app-remote-control", "user-read-email", "user-read-private", "playlist-read-collaborative", "playlist-modify-public", "playlist-read-private",
    "user-library-modify", "user-library-read", "user-top-read", "user-read-playback-position", "user-read-recently-played", "user-follow-read", "user-follow-modify"];

  query_param = {
    client_id: "21e0d925502047b08c82d197558a42e5",
    response_type: "code",
    redirectUri: "http://127.0.0.1:4200/dashboard/",
    scopes: this.scopesArray.join(" "),
    showDialog: true
  };

  Oauth = `${this.authURL}?client_id=${this.query_param.client_id}&redirect_uri=${encodeURIComponent(this.query_param.redirectUri)}&scope=${encodeURIComponent(this.query_param.scopes)}&response_type=token&state=123`;

  headers = new HttpHeaders({
    "Authorization": "Bearer" + this.spotifyKey,
    "Accept": "application/json",
    "Content-Type": "application/json"
  });

  loginAuth() {
    window.open(this.Oauth);
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

  // fetchData(endPoint, method, params) {
  //   this.setHeaders(this.headers); //the header with the key should be set everytime you do a fetch
  //   return this.http.get(`${this.apiFirstPartURL}/${endPoint}`, {
  //     headers: this.headers
  //   });
  // }

  fetchData(endPoint, method) {
    this.setHeaders(this.headers); //the header with the key should be set everytime you do a fetch
    // return this.http.get(`${this.apiFirstPartURL}/${endPoint}`, {
    //   headers: this.headers
    // });

    return this.http.request(method, `${this.apiFirstPartURL}/${endPoint}`, {
      headers: this.headers
    });
  }

  //ALBUMS

  // getAlbums() {
  //   return this.fetchData("albums");
  // }

  // getAlbumTracks() {
  //   return this.fetchData("albums");
  // }

  //ARTISTS

  //BROWSE

  //EPISODES

  //FOLLOW

  //LIBRARY

  //PERSONALIZATION

  //PLAYER

  //PLAYLISTS

  //SEARCH

  //TRACKS

  //SHOWS

  //USERS PROFILE


  searchItem(query) { //, type, market, limit, offset
    // let queryEncode = query.replace(" ", "%20");
    this.setHeaders(this.headers);
    return this.http.get(`https://api.spotify.com/v1/search?query=${encodeURIComponent(query)}&type=album,artist,playlist,track`, {
      headers: this.headers
    });
  }

  getCategoryPlaylist(categoryId) {
    this.setHeaders(this.headers);
    return this.http.get(`https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`, {
      headers: this.headers
    });
  }

  getCategories() {
    return this.fetchData("browse/categories", "GET");
  }

  getUserPlaylist() {
    return this.fetchData("me/playlists", 'GET');
  }

}
