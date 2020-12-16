import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ResourceType } from "../../models/starship";

@Component({
  selector: "app-resource-menu",
  templateUrl: "./resource-menu.component.html",
  styleUrls: ["./resource-menu.component.scss"],
})
export class ResourceMenuComponent implements OnInit {
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
