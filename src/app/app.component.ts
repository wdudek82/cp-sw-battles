import { Component, OnInit } from "@angular/core";
import { StarWarsService } from "./services/starwars.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  unitTypes = ["People", "Starships"];
  selectedUnitType = "People";

  ship: any;

  constructor(private swService: StarWarsService) {}

  ngOnInit(): void {}
}
