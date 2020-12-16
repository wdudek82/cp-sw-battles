import { Component, Input, OnInit } from "@angular/core";
import { Resource } from "../../models/resource";
import { ResourceType } from "../../models/starship";

@Component({
  selector: "app-heroes-card",
  templateUrl: "./hero-card.component.html",
  styleUrls: ["./hero-card.component.scss"],
})
export class HeroCardComponent implements OnInit {
  @Input() opponent: Resource | undefined;
  @Input() opponentType: ResourceType = "people";

  constructor() {}

  ngOnInit(): void {}
}
