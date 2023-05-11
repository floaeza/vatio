import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByNameComponent } from './by-name.component';

describe('ByNameComponent', () => {
  let component: ByNameComponent;
  let fixture: ComponentFixture<ByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
