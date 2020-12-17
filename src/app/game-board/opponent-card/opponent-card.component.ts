import { Component, Input, OnInit } from "@angular/core";
import { ResourceType } from "../../models/starship";
import { OpponentDto } from "../../models/opponentDto";

@Component({
  selector: "app-opponent-card",
  templateUrl: "./opponent-card.component.html",
  styleUrls: ["./opponent-card.component.scss"],
})
export class OpponentCardComponent implements OnInit {
  @Input() opponentType: ResourceType = "people";
  @Input() opponent: OpponentDto | undefined;
  @Input() isWinner = false;

  constructor() {}

  ngOnInit(): void {}
}
