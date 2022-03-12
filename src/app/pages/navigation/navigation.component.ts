import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {
  faShippingFast,
  faBoxOpen,
  faCookieBite,
  faBirthdayCake,
  faHollyBerry,
  faEgg,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  faShippingFast = faShippingFast;
  faBoxOpen = faBoxOpen;
  faCookieBite = faCookieBite;
  faBirthdayCake = faBirthdayCake;
  faHollyBerry = faHollyBerry;
  faEgg = faEgg;

  constructor() {}

  ngOnInit(): void {}

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
