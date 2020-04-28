import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackplayerComponent } from './trackplayer.component';

describe('TrackplayerComponent', () => {
  let component: TrackplayerComponent;
  let fixture: ComponentFixture<TrackplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
