import { Component, OnInit } from '@angular/core';

import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-floating-buttons',
  templateUrl: './floating-buttons.component.html',
  styleUrls: ['./floating-buttons.component.scss'],
})
export class FloatingButtonsComponent implements OnInit {
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;

  constructor() {}

  ngOnInit(): void {}

  isHomeRoute() {}
}
