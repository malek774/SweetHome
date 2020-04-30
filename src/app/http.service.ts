import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  authEndPoint = "https://accounts.spotify.com/authorize";
  clientId = "edb6db7c1c604795b872fe40255d52fc";
  redirectUri = 'http://localhost:4200';

  Oauth = `https://accounts.spotify.com/authorize?client_id=21e0d925502047b08c82d197558a42e5&redirect_uri=http:%2F%2F127.0.0.1:4200%2F&scope=user-read-private%20user-read-email%20streaming&response_type=token&state=123`;

  headers = new HttpHeaders({
    "Authorization": `Bearer BQAs9O-4yNBj-D2gBuA1lpYDMO7A46O4HRCd0SZY3NDsZWnMY7nJUbVI-ENyOBpx0mJXu8MO-XesFzKtqb_gdQcB1wBYahdzPKSkm6U2euq0uL3KaVWgh-UJwqhANARRR06JTmr-iK4kliV-R7OY9HmvzzXXvuS7lUg`,
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
}
