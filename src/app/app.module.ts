import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { ListMenuComponent } from './shared/components/list-menu/list-menu.component';
import { ListMenuItemComponent } from './shared/components/list-menu/list-menu-item/list-menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ListMenuComponent,
    ListMenuItemComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
