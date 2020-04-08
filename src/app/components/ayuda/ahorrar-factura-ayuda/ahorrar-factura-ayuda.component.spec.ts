import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AhorrarFacturaAyudaComponent } from './ahorrar-factura-ayuda.component';

describe('AhorrarFacturaAyudaComponent', () => {
  let component: AhorrarFacturaAyudaComponent;
  let fixture: ComponentFixture<AhorrarFacturaAyudaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhorrarFacturaAyudaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AhorrarFacturaAyudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
