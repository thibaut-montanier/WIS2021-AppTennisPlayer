import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonComposantPourLaRouteComponent } from './mon-composant-pour-la-route.component';

describe('MonComposantPourLaRouteComponent', () => {
  let component: MonComposantPourLaRouteComponent;
  let fixture: ComponentFixture<MonComposantPourLaRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonComposantPourLaRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonComposantPourLaRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
