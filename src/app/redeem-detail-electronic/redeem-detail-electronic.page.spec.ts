import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RedeemDetailElectronicPage } from './redeem-detail-electronic.page';

describe('RedeemDetailElectronicPage', () => {
  let component: RedeemDetailElectronicPage;
  let fixture: ComponentFixture<RedeemDetailElectronicPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeemDetailElectronicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RedeemDetailElectronicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
