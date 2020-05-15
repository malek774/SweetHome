import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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


  fetchData(endPoint, method, bodyParam = null) {
    this.setHeaders(this.headers); //the header with the key should be set everytime you do a fetch
    return this.http.request(method, `${this.apiFirstPartURL}/${endPoint}`, {
      headers: this.headers,
      body: bodyParam,
      responseType: 'json'
    });
  }

  //Change a playlist’s name and public/private state. (The user must, of course, own the playlist.)
  changePlaylistDetails(playlistId: string, nameValue: string, publicValue: boolean, descriptionValue: string) {
    return this.fetchData(`playlists/${playlistId}`, 'PUT', { name: nameValue, public: publicValue, description: descriptionValue });
    // this.setHeaders(this.headers); //the header with the key should be set everytime you do a fetch
    // return this.http.request("PUT", `${this.apiFirstPartURL}/playlists/${playlistId}`, {
    //   headers: this.headers,
    //   body: { name: nameValue, public: true, description: descriptionValue },
    //   responseType: 'json'
    // });
  } //need to add body parameters

  //********************ALBUMS********************//

  //Get Spotify catalog information for a single album.
  getAlbums(id: string) {
    return this.fetchData(`albums/${id}`, 'GET');
  }

  //Get Spotify catalog information about an album’s tracks. Optional parameters can be used to limit the number of tracks returned.
  getSeveralAlbums(id: string[]) {
    return this.fetchData(`albums/${id.join(',')}`, 'GET');
  }

  //Get Spotify catalog information for multiple albums identified by their Spotify IDs.
  getAlbumTracks(id: string) {
    return this.fetchData(`albums/${id}/tracks`, 'GET');
  }

  //********************ARTIST********************//

  //Get Spotify catalog information for a single artist identified by their unique Spotify ID.
  getArtist(id: string) {
    return this.fetchData(`artists/${id}`, 'GET');
  }

  //Get Spotify catalog information about an artist’s albums. Optional parameters can be specified in the query string to filter and sort the response.
  getArtistsAlbum(id: string) {
    return this.fetchData(`artists/${id}/albums`, 'GET');
  }

  //Get Spotify catalog information about an artist’s top tracks by country.
  getArtistsTopTracks(id: string) {
    return this.fetchData(`artists/${id}/top-tracks`, 'GET');
  }

  //Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community’s listening history.
  getArtistsRelatedArtists(id: string) {
    return this.fetchData(`artists/${id}/related-artists`, 'GET');
  }

  //Get Spotify catalog information for several artists based on their Spotify IDs.
  getSeveralArtists(id: string[]) {
    return this.fetchData(`artists/${id.join(',')}/artists`, 'GET');
  }

  //********************BROWSE********************//

  //Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab)
  getCategory(id: string) {
    return this.fetchData(`browse/categories/${id}`, 'GET');
  }

  //Get a list of Spotify playlists tagged with a particular category.
  getCategoryPlaylist(id: string) {
    return this.fetchData(`browse/categories/${id}/playlists`, 'GET');
  }

  //Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
  getCategories() {
    return this.fetchData(`browse/categories`, 'GET');
  }

  //Get a list of Spotify featured playlists (shown, for example, on a Spotify player’s ‘Browse’ tab).
  getFeaturedPlaylists() {
    return this.fetchData(`browse/featured-playlists`, 'GET');
  }

  //Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).
  getNewAlbumReleases() {
    return this.fetchData(`browse/new-releases`, 'GET');
  }

  //Create a playlist-style listening experience based on seed artists, tracks and genres
  getRecommendations() {
    return this.fetchData(`recommendations`, 'GET');
  }

  //********************EPISODES********************//

  //Get Spotify catalog information for a single episode identified by its unique Spotify ID.
  getEpisode(id) {
    return this.fetchData(`episode/${id}`, 'GET');
  }

  //Get Spotify catalog information for multiple episodes based on their Spotify IDs.
  getSeveralEpisodes(id: string[]) {
    return this.fetchData(`episode/${id}`, 'GET');
  }

  //********************FOLLOW********************//

  //Check to see if the current user is following one or more artists or other Spotify users.
  getCheckUserFollowingArtistsOrUsers(type: string, id: string[]) {
    return this.fetchData(`me/following/contains?type=${type}&ids=${id.join(',')}`, 'GET');
  }

  //Check to see if one or more Spotify users are following a specified playlist.
  getCheckUsersFollowPlaylist(usersId: string[], playlistId: string) {
    return this.fetchData(`playlists/${playlistId}/followers/contains?ids=${usersId.join(',')}`, 'GET');
  }

  //Add the current user as a follower of one or more artists or other Spotify users.
  followArtistsOrUsers(type: string, id: string[]) {
    return this.fetchData(`me/following?type=${type}&ids=${id.join(',')}`, 'PUT');
  }

  // Add the current user as a follower of a playlist.
  followPlaylist(playlistId: string) {
    return this.fetchData(`playlists/${playlistId}/followers`, 'PUT');
  }

  //Get the current user’s followed artists.
  getUsersFollowedArtists(type: string) {
    return this.fetchData(`me/following?type=${type}`, 'GET');
  }

  //Remove the current user as a follower of one or more artists or other Spotify users.
  unfollowArtistsOrUsers(type: string, id: string[]) {
    return this.fetchData(`me/following?type=${type}&ids=${id.join(',')}`, 'DELETE');
  }

  //Remove the current user as a follower of a playlist. 
  unfollowPlaylist(playlistId: string) {
    return this.fetchData(`playlists/${playlistId}/followers`, 'DELETE');
  }

  //********************LIBRARY********************//

  //This is used for users that have their own tracks/albums which for the time being will not be implemented

  //********************PERSONALIZATION********************//

  //Get the current user’s top artists or tracks based on calculated affinity.
  getUsersTopArtistsAndTracks(type: string) {
    return this.fetchData(`me/top/${type}`, 'GET');
  }

  //********************PLAYER********************//

  //Get information about the user’s current playback state, including track or episode, progress, and active device.
  getInfoUserCurrentPlayback() {
    return this.fetchData(`me/player`, 'GET');
  }

  //Get tracks from the current user’s recently played tracks.
  getTracksUsersRecentPlayback() {
    return this.fetchData(`me/player/recently-played`, 'GET');
  }

  //Get the object currently being played on the user’s Spotify account.
  getTracksUsersCurrentPlayback() {
    return this.fetchData(`me/player/currently-played`, 'GET');
  }

  //Pause playback on the user’s account.
  pauseUsersPlayback() {
    return this.fetchData(`me/player/pause`, 'PUT');
  }

  //Seeks to the given position in the user’s currently playing track.
  seekPositionCurrentlyPlayTrack(time) {
    return this.fetchData(`me/player/seek?position_ms=${time}`, 'PUT');
  }

  //Set the repeat mode for the user’s playback. Options are repeat-track, repeat-context, and off.
  setRepeatModeOnUsersPlayback(state) {
    return this.fetchData(`me/player/repeat?state=${state}`, 'PUT');
  }

  //Set the volume for the user’s current playback device.
  setVolumeUsersPlayback(volume: number) {
    return this.fetchData(`me/player/volume?volume_percent=${volume}`, 'PUT');
  }

  //Skips to next track in the user’s queue.
  skipToNextTrack() {
    return this.fetchData(`me/player/next`, 'POST');
  }

  //Skips to previous track in the user’s queue.
  skipToPreviousTrack() {
    return this.fetchData(`me/player/previous`, 'POST');
  }

  //Start a new context or resume current playback on the user’s active device.
  startResumeUserPlayback() {
    return this.fetchData(`me/player/play`, 'PUT');
  }

  //Toggle shuffle on or off for user’s playback.
  toggleShuffleUsersPlayback(state) {
    return this.fetchData(`me/player/shuffle?state=${state}`, 'PUT');
  }

  //********************PLAYLISTS********************//

  //Add one or more items to a user’s playlist.
  addItemsToPlaylist(playlistId: string) {
    return this.fetchData(`playlists/${playlistId}/tracks`, 'POST');
  }

  // //Change a playlist’s name and public/private state. (The user must, of course, own the playlist.)
  // changePlaylistDetails(playlistId: string, nameValue: string, publicValue: boolean, descriptionValue: string) {
  //   return this.fetchData(`playlists/${playlistId}`, 'PUT', { "name": nameValue, "public": publicValue, "description": descriptionValue });
  // } //need to add body parameters

  //Create a playlist for a Spotify user. (The playlist will be empty until you add tracks.)
  createPlaylist(userId: string) {
    return this.fetchData(`users/${userId}/playlists`, 'POST');
  } //need to add body parameters

  //Get a list of the playlists owned or followed by the current Spotify user.
  getCurrentUserPlaylist() {
    return this.fetchData("me/playlists", 'GET');
  }

  //Get a list of the playlists owned or followed by a Spotify user.
  getListUserPlaylist(userId) {
    return this.fetchData(`users/${userId}/playlists`, 'GET');
  }

  //Get a playlist owned by a Spotify user.
  getPlaylist(playlistId) {
    return this.fetchData(`playlists/${playlistId}`, 'GET');
  }

  //Get the current image associated with a specific playlist.
  getPlaylistCoverImage(playlistId) {
    return this.fetchData(`playlists/${playlistId}/images`, 'GET');
  }

  //Get full details of the tracks or episodes of a playlist owned by a Spotify user.
  getPlaylistItems(playlistId) {
    return this.fetchData(`playlists/${playlistId}/tracks`, 'GET');
  }

  //Remove one or more items from a user’s playlist.
  removePlaylistItems(playlistId) {
    return this.fetchData(`playlists/${playlistId}/tracks`, 'DELETE');
  } //need to add body image




  //********************SEARCH********************//

  //Get Spotify Catalog information about albums, artists, playlists, tracks, shows or episodes that match a keyword string.
  searchItem(query) { //, type, market, limit, offset
    return this.fetchData(`search?query=${encodeURIComponent(query)}&type=album,artist,playlist,track`, 'GET');
  }

  //********************SHOWS********************//

  //Get Spotify catalog information for a single show identified by its unique Spotify ID.
  getShow(id) {
    return this.fetchData(`shows/${id}`, 'GET');
  }
  //Get Spotify catalog information for multiple shows based on their Spotify IDs.

  getSeveralShow(id: string[]) {
    return this.fetchData(`shows/?ids=${id.join(",")}`, 'GET');
  }

  //Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.
  getShowEpisode(id) {
    return this.fetchData(`shows/${id}/episodes`, 'GET');
  }

  //********************TRACKS********************//

  //Get a detailed audio analysis for a single track identified by its unique Spotify ID.
  getAudioAnalysisTrack(id) {
    return this.fetchData(`audio-analysis/${id}`, 'GET');
  }

  //Get audio feature information for a single track identified by its unique Spotify ID.
  getAudioFeaturesTrack(id) {
    return this.fetchData(`audio-features/${id}`, 'GET');
  }

  //Get Spotify catalog information for a single track identified by its unique Spotify ID.
  getTrack(id) {
    return this.fetchData(`tracks/${id}`, 'GET');
  }

  //Get Spotify catalog information for multiple tracks based on their Spotify IDs.
  getSeveralTracks(id: string[]) {
    return this.fetchData(`tracks/ids=${id.join(",")}`, 'GET');
  }

  //********************USERS PROFILE********************//

  //Get detailed profile information about the current user (including the current user’s username).
  getCurrentUserProfile() {
    return this.fetchData(`me`, 'GET');
  }

  //Get public profile information about a Spotify user.
  getAUserProfile(id) {
    return this.fetchData(`users/${id}`, 'GET');
  }

}
