import { TestBed } from "@angular/core/testing";

import { NotificationsService } from "./notifications.service";
import { ToastrService } from "ngx-toastr";

describe("NotificationsService", () => {
  let notificationsService: NotificationsService;
  let toastr: ToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationsService, ToastrService],
    });
    notificationsService = TestBed.inject(NotificationsService);
    toastr = TestBed.inject(ToastrService);
  });

  it("should be created", () => {
    expect(notificationsService).toBeTruthy();
  });
});
