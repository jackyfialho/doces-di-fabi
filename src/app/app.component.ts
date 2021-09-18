import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
})
export class AppComponent implements OnInit {
  title = 'doces-di-fabi';
  loadedFeature = 'menu';

  constructor() {}

  ngOnInit(): void {}

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
