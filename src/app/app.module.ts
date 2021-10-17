import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { ListMenuComponent } from './shared/components/list-menu/list-menu.component';
import { ListMenuItemComponent } from './shared/components/list-menu/list-menu-item/list-menu-item.component';
import { ListMenuSubitemComponent } from './shared/components/list-menu/list-menu-subitem/list-menu-subitem.component';
import { TakeOutMenuComponent } from './pages/take-out-menu/take-out-menu.component';
import { PreOrderMenuComponent } from './pages/pre-order-menu/pre-order-menu.component';
import { CompleteMenuComponent } from './pages/complete-menu/complete-menu.component';
import { DolceWeekComponent } from './pages/dolce-week/dolce-week.component';
import { UnderConstructionComponent } from './shared/components/under-construction/under-construction.component';
import { AboutComponent } from './pages/about/about.component';
import { FloatingButtonsComponent } from './shared/components/floating-buttons/floating-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMenuComponent,
    ListMenuItemComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    ListMenuSubitemComponent,
    TakeOutMenuComponent,
    PreOrderMenuComponent,
    CompleteMenuComponent,
    DolceWeekComponent,
    UnderConstructionComponent,
    AboutComponent,
    FloatingButtonsComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
