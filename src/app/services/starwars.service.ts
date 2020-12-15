import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { forkJoin, Observable, of } from "rxjs";
import { StarshipRes } from "../models/starship";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { NotificationsService } from "./notifications.service";

type Resource = "starships" | "people";

@Injectable({
  providedIn: "root",
})
export class StarWarsService {
  baseUrl = "https://swapi.dev/api";

  constructor(
    private http: HttpClient,
    private notifications: NotificationsService,
  ) {
    this.fetchData();
  }

  fetchData(): void {
    const resources: Resource[] = ["starships", "people"];
    for (const resourceType of resources) {
      if (this.isLocalCopyAvailable(resourceType)) {
        this.notifications.showSuccess("Local copy found!", resourceType);
        continue;
      }

      this.fetchAllResourcesOfType(resourceType)
        .pipe(
          tap((res) => {
            this.saveLocalCopy(resourceType, res);
            this.notifications.showSuccess("Fetching complete!", resourceType);
          }),
          catchError((error) => {
            this.notifications.showError(error.message, resourceType);
            throw new Error(error);
          }),
        )
        .subscribe();
    }
  }

  fetchAllResourcesOfType(resourceType: Resource): Observable<any> {
    return this.http
      .get<{ count: number; results: any[] }>(
        `${this.baseUrl}/${resourceType}/`,
      )
      .pipe(
        switchMap((res) => {
          this.notifications.showInfo("Fetching data...", resourceType);

          const pages = Math.ceil(res.count / 10);
          const results: Observable<any>[] = [of(res)];
          for (let i = 2; i < pages + 1; i++) {
            results.push(this.fetchResourcesByPage(resourceType, i));
          }

          return forkJoin(results);
        }),
        map((responses) => {
          return responses.flatMap((res) => res.results);
        }),
      );
  }

  fetchResourcesByPage(resourceType: Resource, page: number): Observable<any> {
    return this.http.get<{ count: number; results: StarshipRes[] }>(
      `${this.baseUrl}/${resourceType}/`,
      { params: { page: page.toString() } },
    );
  }

  saveLocalCopy(key: Resource, data: unknown[]): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getLocalCopy(key: Resource): unknown[] {
    const localData = localStorage.getItem(key) ?? "[]";
    return JSON.parse(localData);
  }

  removeLocalCopies(): void {
    ["people", "starships"].forEach((key) => {
      this.notifications.showWarning("Local copy removed", key);
      localStorage.removeItem(key);
    });
  }

  isLocalCopyAvailable(resourceType: Resource): boolean {
    return this.getLocalCopy(resourceType).length > 0;
  }

  getStarships(): unknown[] {
    return this.getLocalCopy("starships");
  }

  getPeople(): unknown[] {
    return this.getLocalCopy("people");
  }
}
