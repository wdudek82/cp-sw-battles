import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { PersonRes } from "../models/person";
import { StarWarsService } from "../services/starwars.service";
import { StarshipRes } from "../models/starship";

@Component({
  selector: "app-person",
  templateUrl: "./person.component.html",
  styleUrls: ["./person.component.scss"],
})
export class PersonComponent implements OnInit {
  @Input() unitType = "";
  @Input() unitId = 0;

  person$: Observable<PersonRes> = new Observable<PersonRes>();
  starship$: Observable<StarshipRes> = new Observable<StarshipRes>();

  constructor(private swService: StarWarsService) {}

  ngOnInit(): void {
  }
}
