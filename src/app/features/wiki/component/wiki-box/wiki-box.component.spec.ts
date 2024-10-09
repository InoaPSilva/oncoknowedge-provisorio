import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiBoxComponent } from './wiki-box.component';

describe('WikiBoxComponent', () => {
  let component: WikiBoxComponent;
  let fixture: ComponentFixture<WikiBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WikiBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
