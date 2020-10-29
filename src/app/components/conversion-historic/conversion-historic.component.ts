import { Component, Input, OnInit } from '@angular/core';
import { ConversionHistoricService } from 'src/app/service/conversion-historic.service';

@Component({
  selector: 'app-conversion-historic',
  templateUrl: './conversion-historic.component.html',
  styleUrls: ['./conversion-historic.component.scss']
})
export class ConversionHistoricComponent implements OnInit {

  rowData = [];

  constructor(private conversionHistoricService: ConversionHistoricService) {

  }

  ngOnInit(): void {
    this.conversionHistoricService.historicObservable.subscribe(operation => {
      if (operation !== null) {
        if (this.rowData.length === 5) {
          this.rowData.splice(0, 1);
        }
        this.rowData.push(operation);
      }
    });
  }

}
