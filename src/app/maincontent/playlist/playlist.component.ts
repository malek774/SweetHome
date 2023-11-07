import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpotifywebService } from 'src/app/spotifyweb.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  selectedImage: any;

  dataArray;
  idSong;
  uri;
  constructor(private spotify: SpotifywebService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
     console.log(id );

    this.getData2(id)
    // this.spotify.changePlaylistDetails("6c4WI0Ogg5RTl0S3BTa3OV", "Earphoria", true, "Just Listen.").subscribe(data => {
    // });
  }



  getData2(t:any) {
    this.spotify.getCategoryPlaylist(t).subscribe(data => {
      this.dataArray = data["playlists"].items;
      console.log(data)
      console.log(this.dataArray);
      console.log(this.dataArray[0].external_urls.spotify);
    });
  }
  gotoSongs(a:any,image: any){
    this.selectedImage = image;
    this.idSong=a
    console.log(a)


  }

  addtomyplaylist() {
    
    this.spotify.followPlaylist(this.idSong).subscribe(data => {
     
    });  }
  navigate(){
    this.router.navigate(['dashboard/songs/'+this.idSong]);

  }

 
}
