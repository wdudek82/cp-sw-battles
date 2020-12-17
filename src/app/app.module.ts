import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatRadioModule } from "@angular/material/radio";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatDividerModule } from "@angular/material/divider";

import { ToastrModule } from "ngx-toastr";
import { TopBarComponent } from "./topbar/top-bar.component";

import { GameBoardComponent } from "./game-board/game-board.component";
import { OpponentCardComponent } from "./game-board/opponent-card/opponent-card.component";
import { ResourcesMenuComponent } from "./game-board/resources-menu/resources-menu.component";
import { GameScoreComponent } from "./game-board/game-score/game-score.component";
import { GameMenuComponent } from "./game-board/game-menu/game-menu.component";

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    GameBoardComponent,
    OpponentCardComponent,
    ResourcesMenuComponent,
    GameScoreComponent,
    GameMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    MatDividerModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right",
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
