import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PpobPlnTokenHistoryPage } from './ppob-pln-token-history.page';

describe('PpobPlnTokenHistoryPage', () => {
  let component: PpobPlnTokenHistoryPage;
  let fixture: ComponentFixture<PpobPlnTokenHistoryPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PpobPlnTokenHistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PpobPlnTokenHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
