import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreciosHoraAyudaComponent } from './precios-hora-ayuda.component';

describe('PreciosHoraAyudaComponent', () => {
  let component: PreciosHoraAyudaComponent;
  let fixture: ComponentFixture<PreciosHoraAyudaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreciosHoraAyudaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreciosHoraAyudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
