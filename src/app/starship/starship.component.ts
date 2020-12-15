import { Component, Input, OnInit } from "@angular/core";
import { Starship } from "../models/starship";

@Component({
  selector: "app-starship",
  templateUrl: "./starship.component.html",
  styleUrls: ["./starship.component.scss"],
})
export class StarshipComponent implements OnInit {
  @Input() starship: Starship | undefined;

  constructor() {}

  ngOnInit(): void {}
}
