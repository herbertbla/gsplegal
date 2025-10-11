import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { TaetigkeitComponent } from './taetigkeit/taetigkeit.component';
import { HomeComponent } from './home/home.component';
import { InternationalComponent } from './international/international.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { HaftungsausschlussComponent } from './haftungsausschluss/haftungsausschluss.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { GargerComponent } from './team/garger/garger.component';
import { SpallingerComponent } from './team/spallinger/spallinger.component';
import { ReiterComponent } from './team/reiter/reiter.component';
import { RoupecComponent } from './team/roupec/roupec.component';
import { GesellschaftsrechtComponent } from './gesellschaftsrecht/gesellschaftsrecht.component';
import { UmgruendungenComponent } from './umgruendungen/umgruendungen.component';
import { MergersAcquisitionsComponent } from './mergers-acquisitions/mergers-acquisitions.component';
import { ArbeitsrechtComponent } from './arbeitsrecht/arbeitsrecht.component';

// AoT-kompatibler Translate Loader
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    TaetigkeitComponent,
    HomeComponent,
    InternationalComponent,
    KontaktComponent,
    ImpressumComponent,
    HaftungsausschlussComponent,
    DatenschutzComponent,
    GargerComponent,
    SpallingerComponent,
    ReiterComponent,
    RoupecComponent,
    GesellschaftsrechtComponent,
    UmgruendungenComponent,
    MergersAcquisitionsComponent,
    ArbeitsrechtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // unbedingt nötig
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
