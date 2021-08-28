import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
