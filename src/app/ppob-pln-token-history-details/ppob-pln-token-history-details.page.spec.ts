import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PpobPlnTokenHistoryDetailsPage } from './ppob-pln-token-history-details.page';

describe('PpobPlnTokenHistoryDetailsPage', () => {
  let component: PpobPlnTokenHistoryDetailsPage;
  let fixture: ComponentFixture<PpobPlnTokenHistoryDetailsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PpobPlnTokenHistoryDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PpobPlnTokenHistoryDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
