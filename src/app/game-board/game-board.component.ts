import { Component, OnInit } from "@angular/core";
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

    for (let i = 0; i < 2; i++) {
      if (this.selectedOpponentType === "people") {
        const person: Person = this.swService.getRandomPerson();
        this.createOpponent(person.name, person.mass, "mass");
      } else if (this.selectedOpponentType === "starships") {
        const starship: Starship = this.swService.getRandomStarship();
        this.createOpponent(starship.name, starship.crew, "crew");
      }
    }
  }

  private createOpponent(name: string, value: string, label: string): void {
    this.opponents.push({
      name,
      value,
      label,
    });
  }

  fight(): void {
    const commonValue1 = this.parse(this.opponents[0].value);
    const commonValue2 = this.parse(this.opponents[1].value);

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
