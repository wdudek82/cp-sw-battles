import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesBattleComponent } from './heroes-battle.component';

describe('HeroesBattleComponent', () => {
  let component: HeroesBattleComponent;
  let fixture: ComponentFixture<HeroesBattleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesBattleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
