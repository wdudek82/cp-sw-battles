import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { StarWarsService } from "../services/starwars.service";

@Component({
  selector: "app-topbar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.scss"],
})
export class TopBarComponent implements OnInit {
  @Output() localData = new EventEmitter<void>();
  @Output() removeLocalData = new EventEmitter<void>();

  constructor(private swService: StarWarsService) {}

  ngOnInit(): void {}

  onLoadData(): void {
    this.swService.fetchData();
  }

  onRemoveLocalData(): void {
    this.swService.removeLocalCopies();
  }
}
