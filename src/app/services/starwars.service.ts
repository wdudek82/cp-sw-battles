import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { forkJoin, Observable, of } from "rxjs";
import { ResourceType, Starship } from "../models/starship";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { NotificationsService } from "./notifications.service";
import { Person } from "../models/person";
import { Resource } from "../models/resource";
import { LocalstorageService } from "./localstorage.service";

interface PageResponse {
  count: number;
  next: string;
  previous: string;
  results: Resource[];
}

@Injectable({
  providedIn: "root",
})
export class StarWarsService {
  baseUrl = "https://swapi.dev/api";
  resources: ResourceType[] = ["starships", "people"];

  constructor(
    private http: HttpClient,
    private localStorageService: LocalstorageService,
    private notifications: NotificationsService,
  ) {
    /**
     * Fetch, parse and save the data when service instance is created
     */
    this.fetchData();
  }

  fetchData(): void {
    /**
     * Check if the resources are stored locally.
     * If not initialize fetching the data from the swapi, otherwise ignore.
     */
    for (const resourceType of this.resources) {
      const isLocalCopyAvailable = this.localStorageService.isLocalDataAvailable(
        resourceType,
      );
      if (isLocalCopyAvailable) {
        this.notifications.showSuccess("Local copy found!", resourceType);
        continue;
      }

      this.fetchAndSaveLocally(resourceType);
    }
  }

  private fetchAndSaveLocally(resourceType: ResourceType): void {
    /**
     *  Fetch data frm the swapi and store parsed results locally
     */
    this.fetchAllResourcesOfType(resourceType)
      .pipe(
        tap((res) => {
          this.localStorageService.saveLocalData(resourceType, res);
          this.notifications.showSuccess("Fetching complete!", resourceType);
        }),
        catchError((error) => {
          this.notifications.showError(error.message, resourceType);
          throw new Error(error);
        }),
      )
      .subscribe();
  }

  private fetchAllResourcesOfType(resourceType: ResourceType): Observable<Resource[]> {
    /**
     * Fetch all pages of the selected resource,
     * and then combine the results in one array
     */
    return this.http.get<PageResponse>(`${this.baseUrl}/${resourceType}/`).pipe(
      switchMap(
        (res): Observable<PageResponse[]> => {
          this.notifications.showInfo("Fetching data...", resourceType);

          const pages = Math.ceil(res.count / 10);
          const results: Observable<PageResponse>[] = [of(res)];
          for (let i = 2; i < pages + 1; i++) {
            results.push(this.fetchResourcesByPage(resourceType, i));
          }

          return forkJoin(results);
        },
      ),
      map((responses): Resource[] => {
        return responses.flatMap((res) => res.results);
      }),
    );
  }

  private fetchResourcesByPage(
    resourceType: ResourceType,
    page: number,
  ): Observable<PageResponse> {
    /**
     * Fetch specific page of the selected resource.
     */
    return this.http.get<PageResponse>(`${this.baseUrl}/${resourceType}/`, {
      params: { page: page.toString() },
    });
  }

  removeLocalCopies(): void {
    ["people", "starships"].forEach((key) => {
      this.notifications.showWarning("Local copy removed", key);
      this.localStorageService.removeLocalData(["people", "starships"]);
    });
  }

  getStarships(): Starship[] {
    return this.localStorageService.getLocalData("starships") as Starship[];
  }

  getPeople(): Person[] {
    return this.localStorageService.getLocalData("people") as Person[];
  }

  // getRandomStarship():
}
