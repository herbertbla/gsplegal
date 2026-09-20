import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TranslatePipe, provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

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
import { GlobalMobilityComponent } from './global-mobility/global-mobility.component';
import { BankingFinanceComponent } from './banking-finance/banking-finance.component';
import { ContractLawComponent } from './contract-law/contract-law.component';
import { PublicLawComponent } from './public-law/public-law.component';
import { ImmobilienrechtComponent } from './immobilienrecht/immobilienrecht.component';
import { ZivilprozessrechtComponent } from './zivilprozessrecht/zivilprozessrecht.component';

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
    ArbeitsrechtComponent,
    GlobalMobilityComponent,
    BankingFinanceComponent,
    ContractLawComponent,
    PublicLawComponent,
    ImmobilienrechtComponent,
    ZivilprozessrechtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslatePipe
  ],
  providers: [
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: './assets/i18n/',
        suffix: '.json'
      }),
      fallbackLang: 'de',
      lang: 'de'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
