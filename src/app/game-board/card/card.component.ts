import { Component, Input, OnInit } from "@angular/core";
import { ResourceType } from "../../models/starship";
import { OpponentDto } from "../../models/opponentDto";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() opponentType: ResourceType = "people";
  @Input() opponent: OpponentDto | undefined;
  @Input() isWinner = false;

  constructor() {}

  ngOnInit(): void {}
}
