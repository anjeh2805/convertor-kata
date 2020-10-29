import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { ConversionHistoricService } from 'src/app/service/conversion-historic.service';

import { ConversionHistoricComponent } from './conversion-historic.component';

describe('ConversionHistoricComponent', () => {
  let component: ConversionHistoricComponent;
  let fixture: ComponentFixture<ConversionHistoricComponent>;
  const spyConversionHistoricService = jasmine.createSpyObj('spyConversionHistoricService', ['']);
  spyConversionHistoricService.historicObservable = new Observable<null>();
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionHistoricComponent ],
      providers: [
        {provide: ConversionHistoricService, useValue: spyConversionHistoricService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
