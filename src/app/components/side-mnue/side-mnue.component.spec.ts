import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMnueComponent } from './side-mnue.component';

describe('SideMnueComponent', () => {
  let component: SideMnueComponent;
  let fixture: ComponentFixture<SideMnueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMnueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMnueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
