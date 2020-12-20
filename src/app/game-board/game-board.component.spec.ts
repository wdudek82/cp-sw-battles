import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GameBoardComponent } from "./game-board.component";
import { StarWarsService } from "../services/starwars.service";

describe("GameBoardComponent", () => {
  let component: GameBoardComponent;
  let fixture: ComponentFixture<GameBoardComponent>;
  let swService: StarWarsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameBoardComponent],
      providers: [StarWarsService],
    }).compileComponents();

    swService = TestBed.inject(StarWarsService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
