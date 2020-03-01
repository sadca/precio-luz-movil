import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AhorrarFacturaPage } from './ahorrar-factura.page';

describe('AhorrarFacturaPage', () => {
  let component: AhorrarFacturaPage;
  let fixture: ComponentFixture<AhorrarFacturaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhorrarFacturaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AhorrarFacturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
