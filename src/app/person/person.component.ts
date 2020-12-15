import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { StarWarsService } from "../services/starwars.service";
import { Starship } from "../models/starship";
import { Person } from "../models/person";

@Component({
  selector: "app-person",
  templateUrl: "./person.component.html",
  styleUrls: ["./person.component.scss"],
})
export class PersonComponent implements OnInit {
  @Input() unitType = "";
  @Input() unitId = 0;

  person$: Observable<Person> = new Observable<Person>();
  starship$: Observable<Starship> = new Observable<Starship>();

  constructor(private swService: StarWarsService) {}

  ngOnInit(): void {
  }
}
