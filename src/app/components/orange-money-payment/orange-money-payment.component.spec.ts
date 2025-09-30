import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrangeMoneyPaymentComponent } from './orange-money-payment.component';

describe('OrangeMoneyPaymentComponent', () => {
  let component: OrangeMoneyPaymentComponent;
  let fixture: ComponentFixture<OrangeMoneyPaymentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrangeMoneyPaymentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrangeMoneyPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
