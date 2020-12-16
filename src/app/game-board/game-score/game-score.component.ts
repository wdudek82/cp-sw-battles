import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-game-score",
  templateUrl: "./game-score.component.html",
  styleUrls: ["./game-score.component.scss"],
})
export class GameScoreComponent implements OnInit {
  @Input() score1 = 0;
  @Input() score2 = 0;

  constructor() {}

  ngOnInit(): void {}
}
