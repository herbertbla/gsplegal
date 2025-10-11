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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
