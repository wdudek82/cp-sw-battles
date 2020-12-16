import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor() {}

  score1 = 0;
  score2 = 0;

  ngOnInit(): void {}

  showBattleResult(winnerIndex: number): void {
    console.log("and the winner is:", winnerIndex);

    switch (winnerIndex) {
      case 0:
        this.score1 += 1;
        break;
      case 1:
        this.score2 += 1;
        break;
    }
  }
}
