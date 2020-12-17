import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-scores",
  templateUrl: "./scores.component.html",
  styleUrls: ["./scores.component.scss"],
})
export class ScoresComponent implements OnInit {
  @Input() score1 = 0;
  @Input() score2 = 0;
  @Output() resetScore: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onResetScore(): void {
    this.resetScore.emit();
  }
}
