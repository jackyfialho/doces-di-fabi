import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { TakeOutMenuComponent } from './shared/components/take-out-menu/take-out-menu.component';
import { TakeOutMenuItemComponent } from './shared/components/take-out-menu/take-out-menu-item/take-out-menu-item.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, TakeOutMenuComponent, TakeOutMenuItemComponent],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
