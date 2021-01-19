import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDetailReactiveFormsComponent } from './player-detail-reactive-forms.component';

describe('PlayerDetailReactiveFormsComponent', () => {
  let component: PlayerDetailReactiveFormsComponent;
  let fixture: ComponentFixture<PlayerDetailReactiveFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerDetailReactiveFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDetailReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
