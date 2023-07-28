import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RedeemConfirmBlibliPage } from './redeem-confirm-blibli.page';

describe('RedeemConfirmBlibliPage', () => {
  let component: RedeemConfirmBlibliPage;
  let fixture: ComponentFixture<RedeemConfirmBlibliPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeemConfirmBlibliPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RedeemConfirmBlibliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
