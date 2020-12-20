import { Injectable } from "@angular/core";
import { Resource } from "../models/resource";
import { NotificationsService } from "./notifications.service";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  constructor(private notifications: NotificationsService) {}

  saveLocalData(key: string, data: Resource[]): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getLocalData(key: string): Resource[] {
    const localData = localStorage.getItem(key) ?? "[]";
    return JSON.parse(localData);
  }

  removeLocalData(key: string): void {
    this.notifications.showWarning("Local copy removed", key);
    localStorage.removeItem(key);
  }

  isLocalDataAvailable(key: string): boolean {
    return this.getLocalData(key).length > 0;
  }
}
