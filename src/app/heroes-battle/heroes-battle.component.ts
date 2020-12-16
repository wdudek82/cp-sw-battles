import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ResourceType } from "../models/starship";
import { StarWarsService } from "../services/starwars.service";
import { Person } from "../models/person";

interface Opponent {
  name: string;
  commonValueLabel: string;
  commonValue: string;
}

@Component({
  selector: "app-heroes-battle",
  templateUrl: "./heroes-battle.component.html",
  styleUrls: ["./heroes-battle.component.scss"],
})
export class HeroesBattleComponent implements OnInit {
  @Output() duelResult: EventEmitter<number> = new EventEmitter<number>(); // -1 === draw
  @Input() selectedOpponentType: ResourceType = "people";
  opponentsTypes: ResourceType[] = ["people", "starships"];
  opponents: Person[] = [];
  isBattleSettled = false;

  constructor(private swService: StarWarsService) {}

  ngOnInit(): void {}

  drawTwoOpponentsOfType(): void {
    this.resetBoard();

    for (let i = 0; i < 2; i++) {
      const opponent = this.swService.getRandomPerson();
      this.opponents.push(opponent);
    }

    console.log(this.opponents);
  }

  fight(): void {
    let winner = -1;
    const mass1 = this.removeCommas(this.opponents[0].mass);
    const mass2 = this.removeCommas(this.opponents[1].mass);

    winner = this.compare(+mass1, +mass2);

    console.log("all known:", mass1, mass2);
    console.log("fight:", winner);

    this.duelResult.emit(winner);
    this.isBattleSettled = true;
  }

  removeCommas(value: string): string {
    return value;
  }

  compare(x: number, y: number): number {
    if (x === y || isNaN(x) || isNaN(y)) {
      return -1;
    }
    return x > y ? 0 : 1;
  }

  resetBoard(): void {
    this.opponents = [];
    this.isBattleSettled = false;
  }
}
