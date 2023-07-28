import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PpobPlnTagihanPage } from './ppob-pln-tagihan.page';

describe('PpobPlnTagihanPage', () => {
  let component: PpobPlnTagihanPage;
  let fixture: ComponentFixture<PpobPlnTagihanPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PpobPlnTagihanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PpobPlnTagihanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
