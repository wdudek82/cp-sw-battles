import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-game-menu",
  templateUrl: "./game-menu.component.html",
  styleUrls: ["./game-menu.component.scss"],
})
export class GameMenuComponent implements OnInit {
  @Output() drawOpponentsCards: EventEmitter<void> = new EventEmitter<void>();
  @Output() fight: EventEmitter<void> = new EventEmitter<void>();
  @Input() opponentsLoaded = false;
  @Input() isBattleSettled = false;

  constructor() {}

  ngOnInit(): void {}

  onDrawTwoOpponents(): void {
    this.drawOpponentsCards.emit();
  }

  onFight(): void {
    this.fight.emit();
  }
}
