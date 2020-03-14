import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactarPage } from './contactar.page';

describe('ContactarPage', () => {
  let component: ContactarPage;
  let fixture: ComponentFixture<ContactarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
