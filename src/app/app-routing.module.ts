import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './pages/navigation/navigation.component';
import { TakeOutMenuComponent } from './pages/take-out-menu/take-out-menu.component';
import { PreOrderMenuComponent } from './pages/pre-order-menu/pre-order-menu.component';
import { ChristmasMenuComponent } from './pages/christmas-menu/christmas-menu.component';
import { EasterMenuComponent } from './pages/easter-menu/easter-menu.component';
import { DolceWeekComponent } from './pages/dolce-week/dolce-week.component';
import { CompleteMenuComponent } from './pages/complete-menu/complete-menu.component';
import { AboutComponent } from './pages/about/about.component';
import { UnderConstructionComponent } from './shared/components/under-construction/under-construction.component';
import { DocesNoPoteComponent } from './pages/doces-no-pote/doces-no-pote.component';
import { PresenteaveisComponent } from './pages/presenteaveis/presenteaveis.component';
import { SobremesasComponent } from './pages/sobremesas/sobremesas.component';
import { EventosComponent } from './pages/eventos/eventos.component';

const routes: Routes = [
  { path: '', component: NavigationComponent },
  // { path: 'cardapio-pronta-entrega', component: TakeOutMenuComponent },
  // { path: 'cardapio-encomendas', component: PreOrderMenuComponent },
  { path: 'doces-no-pote', component: DocesNoPoteComponent },
  { path: 'presenteaveis', component: PresenteaveisComponent },
  { path: 'sobremesas', component: SobremesasComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'cardapio-natal', component: ChristmasMenuComponent },
  { path: 'cardapio-natal', component: ChristmasMenuComponent },
  { path: 'cardapio-pascoa', component: EasterMenuComponent },
  { path: 'semana-dolce', component: DolceWeekComponent },
  { path: 'cardapio-completo', component: CompleteMenuComponent },
  { path: 'sobre', component: AboutComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
