import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceMenuComponent } from './resource-menu.component';

describe('ResourceMenuComponent', () => {
  let component: ResourceMenuComponent;
  let fixture: ComponentFixture<ResourceMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
