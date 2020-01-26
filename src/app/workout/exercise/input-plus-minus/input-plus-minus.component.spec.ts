import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InputPlusMinusComponent } from './input-plus-minus.component';

describe('InputPlusMinusComponent', () => {
  let component: InputPlusMinusComponent;
  let fixture: ComponentFixture<InputPlusMinusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPlusMinusComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InputPlusMinusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
