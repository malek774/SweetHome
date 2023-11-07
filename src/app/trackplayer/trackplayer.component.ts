import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-trackplayer',
  templateUrl: './trackplayer.component.html',
  styleUrls: ['./trackplayer.component.scss']
})

export class TrackplayerComponent implements OnInit {
  @ViewChild('audioPlayer') audioPlayer: ElementRef;


  @Input() photo : any
  @Input() mp3 : any

  constructor() { }

  ngOnInit(): void {
    
    console.log(this.photo)
  }
  playAudio() {
    const sourceElement = document.getElementById('audioSource');

    const audioEl: HTMLAudioElement = this.audioPlayer.nativeElement;
    this.mp3=this.mp3
    audioEl.load(); // Reload the audio element

    audioEl.play();
  }
}
