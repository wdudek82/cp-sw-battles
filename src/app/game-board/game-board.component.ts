import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ResourceType, Starship } from "../models/starship";
import { StarWarsService } from "../services/starwars.service";
import { Person } from "../models/person";
import { OpponentDto } from "../models/opponentDto";

@Component({
  selector: "app-game-board",
  templateUrl: "./game-board.component.html",
  styleUrls: ["./game-board.component.scss"],
})
export class GameBoardComponent implements OnInit {
  @Output() duelResult: EventEmitter<number> = new EventEmitter<number>(); // -1 === draw
  selectedOpponentType: ResourceType = "people";

  opponents: OpponentDto[] = [];
  isBattleSettled = false;

  round = 0;
  score1 = 0;
  score2 = 0;

  winner = -1;

  constructor(private swService: StarWarsService) {}

  ngOnInit(): void {}

  drawTwoOpponentsOfType(): void {
    this.resetBoard();
    this.round += 1;

    const opponent: OpponentDto = {
      name: "",
      commonValue: "",
      commonValueLabel: "",
    };
    for (let i = 0; i < 2; i++) {
      if (this.selectedOpponentType === "people") {
        const person: Person = this.swService.getRandomPerson();
        opponent.name = person.name;
        opponent.commonValue = person.mass;
        opponent.commonValueLabel = "mass";
      } else if (this.selectedOpponentType === "starships") {
        const starship: Starship = this.swService.getRandomStarship();
        opponent.name = starship.name;
        opponent.commonValue = starship.crew;
        opponent.commonValueLabel = "crew";
      }
      this.opponents.push({...opponent});
    }
  }

  fight(): void {
    const commonValue1 = this.parse(this.opponents[0].commonValue);
    const commonValue2 = this.parse(this.opponents[1].commonValue);

    this.winner = this.compare(commonValue1, commonValue2);

    this.updateDuelResult(this.winner);
    this.isBattleSettled = true;
  }

  parse(value: string): number {
    const updValue: string = value.replace(/,/g, "");

    if (updValue.includes("-")) {
      const [min, max]: string[] = updValue.split("-");
      return this.getRandomFromRange(+min, +max);
    }

    return updValue === "unknown" ? -1 : +updValue;
  }

  updateDuelResult(winnerIndex: number): void {
    switch (winnerIndex) {
      case 0:
        this.score1 += 1;
        break;
      case 1:
        this.score2 += 1;
        break;
    }
  }

  getRandomFromRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  compare(x: number, y: number): number {
    if (x === y || x === -1 || y === -1) {
      return -1;
    }
    return x > y ? 0 : 1;
  }

  resetBoard(): void {
    this.opponents = [];
    this.isBattleSettled = false;
  }

  resetScore(): void {
    this.round = 0;
    this.score1 = 0;
    this.score2 = 0;
  }
}
