import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompararPreciosAyudaComponent } from './comparar-precios-ayuda.component';

describe('CompararPreciosAyudaComponent', () => {
  let component: CompararPreciosAyudaComponent;
  let fixture: ComponentFixture<CompararPreciosAyudaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompararPreciosAyudaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompararPreciosAyudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
