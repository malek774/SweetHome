import { Component, OnInit } from '@angular/core';
import { SpotifywebService } from '../spotifyweb.service';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.scss']
})
export class MaincontentComponent implements OnInit {

  dataArray;

  constructor(private spotify: SpotifywebService) { }

  ngOnInit(): void {
    this.getData();
    this.spotify.changePlaylistDetails("6c4WI0Ogg5RTl0S3BTa3OV", "Earphoria", true, "Just Listen.").subscribe(data => {
      console.log(data);
    });
  }

  getData() {
    this.spotify.getCategories().subscribe(data => {
      this.dataArray = data["categories"].items;
      console.log(data)
      console.log(this.dataArray);
    });
  }

}
