import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeToAppComponent } from './welcome-to-app.component';

describe('WelcomeToAppComponent', () => {
  let component: WelcomeToAppComponent;
  let fixture: ComponentFixture<WelcomeToAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeToAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeToAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
