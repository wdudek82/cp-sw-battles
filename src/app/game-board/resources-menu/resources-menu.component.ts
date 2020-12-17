import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ResourceType } from "../../models/starship";

@Component({
  selector: "app-resources-menu",
  templateUrl: "./resources-menu.component.html",
  styleUrls: ["./resources-menu.component.scss"],
})
export class ResourcesMenuComponent implements OnInit {
  @Output() resetBoard: EventEmitter<void> = new EventEmitter<void>();
  @Output() resourceSelected: EventEmitter<ResourceType> = new EventEmitter<ResourceType>();
  @Input() selectedResourceType: ResourceType = "people";
  resourceTypes: ResourceType[] = ["people", "starships"];

  constructor() {}

  ngOnInit(): void {}

  onResetBoard(): void {
    this.resetBoard.emit();
  }

  onResourceSelected(): void {
    this.resourceSelected.emit(this.selectedResourceType);
  }
}
