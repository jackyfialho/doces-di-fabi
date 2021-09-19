import { Component, Input, OnInit } from '@angular/core';

import { Product } from 'src/models/products.model';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.scss'],
})
export class ListMenuComponent implements OnInit {
  @Input() products: Product[];
  @Input() menu: string;
  @Input() dolceWeekMonth?: string;

  constructor() {}

  ngOnInit(): void {}
}
