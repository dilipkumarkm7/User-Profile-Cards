import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofilesComponent } from './userprofiles.component';

describe('UserprofilesComponent', () => {
  let component: UserprofilesComponent;
  let fixture: ComponentFixture<UserprofilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserprofilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserprofilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
