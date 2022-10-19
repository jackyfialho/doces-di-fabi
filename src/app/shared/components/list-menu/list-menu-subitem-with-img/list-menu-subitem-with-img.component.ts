import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-menu-subitem-with-img',
  templateUrl: './list-menu-subitem-with-img.component.html',
  styleUrls: ['./list-menu-subitem-with-img.component.scss'],
})
export class ListMenuSubitemWithImgComponent implements OnInit {
  @Input() subitem: {
    name: string;
    description?: string;
    price?: string;
    extraInfos?: boolean;
    extraInfo1?: string;
    extraInfo2?: string;
    imgUrl?: string;
    obs?: string;
  };

  constructor() {}

  ngOnInit(): void {}
}
