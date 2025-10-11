import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from "./team/team.component";
import { TaetigkeitComponent } from "./taetigkeit/taetigkeit.component";
import { HomeComponent } from "./home/home.component";
import { KontaktComponent } from "./kontakt/kontakt.component";
import { InternationalComponent } from "./international/international.component";
import { ImpressumComponent } from "./impressum/impressum.component";
import { HaftungsausschlussComponent } from "./haftungsausschluss/haftungsausschluss.component";
import { DatenschutzComponent } from "./datenschutz/datenschutz.component";
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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'team', component: TeamComponent },
  { path: 'team/bernhard-garger', component: GargerComponent },
  { path: 'team/stefan-spallinger', component: SpallingerComponent },
  { path: 'team/daniel-reiter', component: ReiterComponent },
  { path: 'team/anita-roupec', component: RoupecComponent },
  { path: 'taetigkeitsbereich', component: TaetigkeitComponent },
  { path: 'international', component: InternationalComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'haftungsausschluss', component: HaftungsausschlussComponent },
  { path: 'datenschutz', component: DatenschutzComponent },
  { path: 'gesellschaftsrecht', component: GesellschaftsrechtComponent },
  { path: 'umgruendungen', component: UmgruendungenComponent },
  { path: 'mergers-acquisitions', component: MergersAcquisitionsComponent },
  { path: 'arbeitsrecht', component: ArbeitsrechtComponent },
  { path: 'global-mobility', component: GlobalMobilityComponent },
  { path: 'banking-finance', component: BankingFinanceComponent },
  { path: 'contract-law', component: ContractLawComponent },
  { path: 'public-law', component: PublicLawComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
