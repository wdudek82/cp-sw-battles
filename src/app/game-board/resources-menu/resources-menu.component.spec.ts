import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesMenuComponent } from './resources-menu.component';

describe('ResourceMenuComponent', () => {
  let component: ResourcesMenuComponent;
  let fixture: ComponentFixture<ResourcesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcesMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
