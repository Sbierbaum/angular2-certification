import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TrackTeamComponent } from './track-team.component';

describe('TrackTeamComponent', () => {
  let component: TrackTeamComponent;
  let fixture: ComponentFixture<TrackTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select have id=teamSelect', () => {
    const select = fixture.debugElement.query(By.css('#teamSelect')).nativeElement;
    expect(select).not.toBeNull();
  });

  it('should btn have id=trackBtn', () => {
    const btn = fixture.debugElement.query(By.css('#trackBtn')).nativeElement;
    expect(btn).not.toBeNull();
  });
});
