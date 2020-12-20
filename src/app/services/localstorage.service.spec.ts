import { TestBed } from "@angular/core/testing";
import { LocalStorageService } from "./local-storage.service";
import { NotificationsService } from "./notifications.service";

describe("LocalStorageService", () => {
  let localStorageService: LocalStorageService;
  let notificationsService: NotificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationsService],
    });
    localStorageService = TestBed.inject(LocalStorageService);
    notificationsService = TestBed.inject(NotificationsService);
  });

  it("should be created", () => {
    expect(localStorageService).toBeTruthy();
  });
});
