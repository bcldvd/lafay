import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InputPlusMinusComponent } from './input-plus-minus.component';
import { By } from '@angular/platform-browser';

const testingModuleConfig = {
  declarations: [InputPlusMinusComponent],
  imports: [IonicModule.forRoot()]
};

describe('InputPlusMinusComponent', () => {
  let component: InputPlusMinusComponent;
  let fixture: ComponentFixture<InputPlusMinusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(testingModuleConfig).compileComponents();

    fixture = TestBed.createComponent(InputPlusMinusComponent);
    component = fixture.componentInstance;
    component.value = 1;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment', done => {
    component.valueChanged.subscribe((value: number) => {
      expect(value).toEqual(2);
      done();
    });
    component.increment();
    expect(component.value).toBe(2);
  });

  it('should decrement', done => {
    component.valueChanged.subscribe((value: number) => {
      expect(value).toEqual(0);
      done();
    });
    component.decrement();
    expect(component.value).toBe(0);
  });

  it('should emit value when onValueChange from input', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const input = fixture.debugElement.query(By.css('ion-input'));
    const el = input.nativeElement;

    expect(el.value).toBe(1);

    component.valueChanged.subscribe((value: number) => {
      expect(value).toEqual(3);
    });

    component.onValueChange(3);
  });
});

describe('InputPlusMinusComponent w/ -1 base value', () => {
  let component: InputPlusMinusComponent;
  let fixture: ComponentFixture<InputPlusMinusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(testingModuleConfig).compileComponents();

    fixture = TestBed.createComponent(InputPlusMinusComponent);
    component = fixture.componentInstance;
    component.value = -1;
    fixture.detectChanges();
  }));

  it('should create with null value', () => {
    expect(component).toBeTruthy();
    expect(component.value).toBe(null);
  });
});
