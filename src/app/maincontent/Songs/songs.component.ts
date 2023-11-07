import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpotifywebService } from 'src/app/spotifyweb.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {
  selected:boolean = false
  dataArray;
  photo
  mp3
  filteredArray: any[] = []; // Array to hold filtered playlists
  searchQuery: string = ''; // Variable to hold the search query

  constructor(private spotify: SpotifywebService,private route: ActivatedRoute) {    ; // Initialize filteredArray with all playlists initially
}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
     console.log(id );

    this.getSongs(id)
    // this.spotify.changePlaylistDetails("6c4WI0Ogg5RTl0S3BTa3OV", "Earphoria", true, "Just Listen.").subscribe(data => {
    // });
  }
  

  getSongs(t:any) {
    this.spotify.getPlaylistItems(t).subscribe((data: any) => {
      this.dataArray = data.items;
      this.filteredArray = this.dataArray
      console.log(data)
      console.log(this.dataArray);
    });
  }
  onSearchChange(event: any) {
    this.searchQuery = event.target.value;
    console.log("aaa")
    this.filterPlaylists(); // Call the filtering function when the search query changes
  }
  play(mp3:any,photo:any){
    this.photo=photo
    this.mp3=mp3
    this.selected=true;
    console.log(photo)
    console.log(mp3)

  }
  filterPlaylists() {
    this.filteredArray = this.dataArray.filter((item) => {
      // Change the conditions based on your data structure
      return item.track.name.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  }
}
