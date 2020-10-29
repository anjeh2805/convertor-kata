import { ConversionHistoricService } from './service/conversion-historic.service';
import { ConversionOperationModel } from './models/conversion-operation-model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public taux = 1.1;
  public euroInput = 1;
  public dollarInput: number;
  public selectedValue = 'euro';
  public isEuroInput = true;
  public forcedTaux: number;


  @ViewChild('matButtonToggleGroup') matButtonToggleGroup: ElementRef;

  constructor(private conversionHistoricService: ConversionHistoricService) {
  }

  ngOnInit(): void {
    const counter = interval(3000).subscribe(el => {
      this.taux += Math.random() * 0.1 - 0.05;
      const taux = this.isAcceptecForcedTaux() ? this.forcedTaux : this.taux;
      this._calculateData(taux);
    });
  }

  public valueChange(value: number): void {
    switch (this.selectedValue) {
      case 'euro': {
        this.euroInput = value;
        this._calculateOutputDollar(this.taux);
        break;
      }
      case 'dollar': {
        this.dollarInput = value;
        this._calculateOutputEuro(this.taux);
        break;
      }
      default: {
        break;
      }
    }

  }

  public onToggleChange(value: string): void {
    switch (value) {
      case 'euro': {
        this.isEuroInput = true;
        this.selectedValue = 'euro';
        this._calculateOutputDollar(this.taux);
        break;
      }
      case 'dollar': {
        this.isEuroInput = false;
        this.selectedValue = 'dollar';
        this._calculateOutputEuro(this.taux);
        break;
      }
      default: {
        break;
      }
    }
  }

  public setFixedTaux(value: number): void {
    const taux = this.isAcceptecForcedTaux() ? this.forcedTaux : this.taux;
    this._calculateData(taux);
  }

  public isAcceptecForcedTaux(): boolean {
    return (this.forcedTaux <= this.taux * 1.02 && this.forcedTaux >= this.taux * 0.98);
  }

  private _calculateData(taux: number): void {
    this.selectedValue === 'euro' ? this._calculateOutputDollar(taux) : this._calculateOutputEuro(taux);

  }

  private _calculateOutputEuro(taux: number): void {
    this.euroInput = this.dollarInput / taux;
    this._createConversionOperation(this.dollarInput, 'USD', this.euroInput, 'EUR');
  }

  private _calculateOutputDollar(taux: number): void {
    this.dollarInput = this.euroInput * taux;
    this._createConversionOperation(this.euroInput, 'EUR', this.dollarInput, 'USD');

  }

  private _createConversionOperation(initialValue, initialDevise, calculatedValue, calculatedDevise): void {
    const operation: ConversionOperationModel = new ConversionOperationModel();
    operation.rate = this.taux;
    operation.fixedRate = this.forcedTaux;
    operation.initialValue = initialValue;
    operation.calculatedValue = calculatedValue;
    operation.initialDevise = initialDevise;
    operation.calculatedDevise = calculatedDevise;
    this.conversionHistoricService.pushConversionOperation(operation);
  }

}
