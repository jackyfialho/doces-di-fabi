import { Component, Input, OnInit } from '@angular/core';

import { Product } from 'src/models/products.model';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-menu-item',
  templateUrl: './list-menu-item.component.html',
  styleUrls: ['./list-menu-item.component.scss'],
})
export class ListMenuItemComponent implements OnInit {
  @Input() product: Product;
  faCookieBite = faCookieBite;

  constructor() {}

  ngOnInit(): void {}
}
