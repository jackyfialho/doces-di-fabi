import { Component, Input, OnInit } from '@angular/core';

import { faTools } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss'],
})
export class UnderConstructionComponent implements OnInit {
  @Input() message: string;

  faTools = faTools;

  constructor() {}

  ngOnInit(): void {}
}
