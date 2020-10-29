import { TestBed } from '@angular/core/testing';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatButtonToggleModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should euroInput to be equals to input value'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.selectedValue = 'euro';
    const input = 0.001;
    app.valueChange(input);
    expect(app.euroInput).toEqual(input);
  });
  it(`should euroInput not to be equals to input value'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.selectedValue = ' ';
    const input = 0.001;
    app.valueChange(input);
    expect(app.euroInput === input).toBeFalse();
  });
  it(`should euroInput to be equals to input value'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.selectedValue = 'dollar';
    const input = 0.001;
    app.valueChange(input);
    expect(app.euroInput === input).toBeFalse();
  });
  it(`should dollarInput to be equals to input value'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.selectedValue = 'dollar';
    const input = 0.001;
    app.valueChange(input);
    expect(app.dollarInput).toEqual(input);
  });
  it(`should dollarInput not to be equals to input value'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.selectedValue = '';
    const input = 0.001;
    app.valueChange(input);
    expect(app.dollarInput === input).toBeFalse();
  });
  it(`should dollarInput not to be equals to input value'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.selectedValue = 'euro';
    const input = 0.001;
    app.valueChange(input);
    expect(app.dollarInput === input).toBeFalse();
  });

  it(`should dollarInput not to be equals to input value'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.selectedValue = 'euro';
    const input = 0.001;
    app.valueChange(input);
    expect(app.dollarInput === input).toBeFalse();
  });

  it(`should dollarInput not to be equals to input value'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.selectedValue = 'euro';
    const input = 0.001;
    app.valueChange(input);
    expect(app.dollarInput === input).toBeFalse();
  });

  it(`should selected value to be equals to input and isEuroInput variable to be true'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const input = 'euro';
    app.onToggleChange(input);
    expect(app.selectedValue).toEqual(input);
  });

  it(`should selected value to be equals to input and isEuroInput variable to be true'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const input = 'euro';
    app.onToggleChange(input);
    expect(app.selectedValue).toEqual(input);
    expect(app.isEuroInput).toBeTrue();
  });

  it(`should selected value to be equals to input and isEuroInput variable to be true'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const input = 'dollar';
    app.onToggleChange(input);
    expect(app.selectedValue).toEqual(input);
    expect(app.isEuroInput).toBeFalse();
  });

  it(`should selected value to be equals to input and isEuroInput variable to be true'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const input = '';
    app.onToggleChange(input);
    expect(app.selectedValue === input).toBeFalse();
    expect(app.isEuroInput).toBeTrue();
  });

  it(`should return false when fixed rate exceed the real rate'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.taux = 1.2;
    app.forcedTaux = 1.4;
    expect(app.isAcceptecForcedTaux()).toBeFalse();
  });

  it(`should return TRUE when fixed rate does not exceed the real rate'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.taux = 1.2;
    app.forcedTaux = 1.21;
    expect(app.isAcceptecForcedTaux()).toBeTrue();
  });


});
