import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() data;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  gotoPlaylist(id:any){
    console.log(id)
    this.router.navigate(['dashboard/playlists/'+id]);
  }
}
