import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-menu-subitem',
  templateUrl: './list-menu-subitem.component.html',
  styleUrls: ['./list-menu-subitem.component.scss'],
})
export class ListMenuSubitemComponent implements OnInit {
  @Input() itemTitle: string;

  constructor() {}

  ngOnInit(): void {}
}
