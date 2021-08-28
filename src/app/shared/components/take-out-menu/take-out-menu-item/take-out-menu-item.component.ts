import { Component, Input, OnInit } from '@angular/core';

import { Product } from './../../../../models/products.model';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-take-out-menu-item',
  templateUrl: './take-out-menu-item.component.html',
  styleUrls: ['./take-out-menu-item.component.scss'],
})
export class TakeOutMenuItemComponent implements OnInit {
  @Input() product: Product;
  faCookieBite = faCookieBite;

  constructor() {}

  ngOnInit(): void {}
}
