import { Component, Input, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { Product } from 'src/models/products.model';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.scss'],
})
export class ListMenuComponent implements OnInit {
  @Input() products: Product[];
  @Input() menu: string = '';
  @Input() dolceWeekMonth?: string;
  @Input() dolceWeekDays?: string;

  divToConvert = 'product-list';

  constructor() {}

  ngOnInit(): void {}

  convetToPDF(menu: string) {
    const data = document.getElementById(this.divToConvert);

    html2canvas(data, { allowTaint: true, useCORS: true }).then((canvas) => {
      const contentDataURL = canvas.toDataURL('image/png');
      let pdfTitle = 'docesDiFabi_cardapio' + '_' + this.menu;
      let pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]);
      let pdfWidth = pdf.internal.pageSize.getWidth();
      let pdfHeight = pdf.internal.pageSize.getHeight();

      pdf.addImage(contentDataURL, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${pdfTitle}.pdf`);
    });
  }
}
