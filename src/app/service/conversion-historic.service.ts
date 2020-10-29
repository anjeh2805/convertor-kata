import { ConversionOperationModel } from './../models/conversion-operation-model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversionHistoricService {

  // tslint:disable-next-line:variable-name
  private _behaviorSubject$: BehaviorSubject<ConversionOperationModel> = new BehaviorSubject<ConversionOperationModel>(null);
  public historicObservable: Observable<ConversionOperationModel> = this._behaviorSubject$;
  constructor() { }

  public pushConversionOperation(operation: ConversionOperationModel): void {
    this._behaviorSubject$.next(operation);
  }
}
