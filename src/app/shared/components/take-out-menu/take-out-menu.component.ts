import { Component, OnInit } from '@angular/core';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-take-out-menu',
  templateUrl: './take-out-menu.component.html',
  styleUrls: ['./take-out-menu.component.scss'],
})
export class TakeOutMenuComponent implements OnInit {
  faCookieBite = faCookieBite;

  constructor() {}

  ngOnInit(): void {}
}
