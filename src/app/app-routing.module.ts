import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './pages/navigation/navigation.component';
import { TakeOutMenuComponent } from './pages/take-out-menu/take-out-menu.component';
import { PreOrderMenuComponent } from './pages/pre-order-menu/pre-order-menu.component';
import { DolceWeekComponent } from './pages/dolce-week/dolce-week.component';
import { CompleteMenuComponent } from './pages/complete-menu/complete-menu.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: '', component: NavigationComponent },
  { path: 'cardapio-retirada', component: TakeOutMenuComponent },
  { path: 'cardapio-encomendas', component: PreOrderMenuComponent },
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
