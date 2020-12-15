import { Component, OnInit } from "@angular/core";
import { StarWarsService } from "./services/starwars.service";
import { Observable } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "cp-sw-battles";
  unitTypes = ["People", "Starships"];
  selectedUnitType = "People";

  ship: any;

  starships$: Observable<any> = new Observable();

  constructor(
    private swService: StarWarsService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {}

  loadData(): void {
    this.swService.fetchData();
  }

  removeLocalData(): void {
    this.swService.removeLocalCopies();
  }
}
