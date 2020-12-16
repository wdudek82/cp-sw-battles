import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PersonComponent } from "./person/person.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatRadioModule } from "@angular/material/radio";

import { ToastrModule } from "ngx-toastr";
import { TopBarComponent } from "./topbar/top-bar.component";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { StarshipComponent } from "./starship/starship.component";
import { StarshipsBattleComponent } from './starships-battle/starships-battle.component';
import { HeroesBattleComponent } from './heroes-battle/heroes-battle.component';
import { HeroCardComponent } from './heroes-battle/hero-card/hero-card.component';
import { StarshipCardComponent } from './starship/starship-card/starship-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    StarshipComponent,
    PersonComponent,
    StarshipsBattleComponent,
    HeroesBattleComponent,
    HeroCardComponent,
    StarshipCardComponent,
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
    FormsModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right",
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
