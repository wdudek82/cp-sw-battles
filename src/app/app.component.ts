import { Component, OnInit } from "@angular/core";
import { StarWarsService } from "./services/starwars.service";
import { Resource } from "./models/resource";
import { ResourceType, Starship } from "./models/starship";
import { Person } from "./models/person";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  resourceTypes: ResourceType[] = ["people", "starships"];
  selectedResourceType: ResourceType = "people";

  person1: Person | undefined;
  person2: Person | undefined;
  starship1: Starship | undefined;
  starship2: Starship | undefined;

  constructor(private swService: StarWarsService) {}

  ngOnInit(): void {}

  drawTwoOpponentsOfType(resourceType: ResourceType): void {
    this.resetBoard();

    const opponent1: Resource = this.swService.getRandomResourceOfType(resourceType);

    let opponent2: Resource = this.swService.getRandomResourceOfType(resourceType);
    while (Object.is(opponent1, opponent2)) {
      console.log("same, re-roll..");
      opponent2 = this.swService.getRandomStarship();
    }

    if (resourceType === "starships") {
      this.starship1 = opponent1 as Starship;
      this.starship2 = opponent2 as Starship;
    } else if (resourceType === "people") {
      this.person1 = opponent1 as Person;
      this.person2 = opponent2 as Person;
    }

    console.log(opponent1);
    console.log(opponent2);
  }

  resetBoard(): void {
    this.person1 = undefined;
    this.person2 = undefined;
    this.starship1 = undefined;
    this.starship2 = undefined;
  }
}
