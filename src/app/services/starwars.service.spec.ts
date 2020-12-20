import { TestBed } from "@angular/core/testing";

import { StarWarsService } from "./starwars.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { LocalStorageService } from "./local-storage.service";
import { NotificationsService } from "./notifications.service";

describe("StarwarsService", () => {
  let swService: StarWarsService;
  let httpTestingController: HttpTestingController;
  let localStorageService: LocalStorageService;
  let notificationsService: NotificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LocalStorageService, NotificationsService],
    });
    swService = TestBed.inject(
      StarWarsService,
    );
    httpTestingController = TestBed.inject(HttpTestingController);
    localStorageService = TestBed.inject(LocalStorageService);
    notificationsService = TestBed.inject(NotificationsService);
  });

  it("should be created", () => {
    expect(swService).toBeTruthy();
  });
});
