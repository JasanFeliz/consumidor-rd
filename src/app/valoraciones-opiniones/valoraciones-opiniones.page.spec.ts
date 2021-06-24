import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValoracionesOpinionesPage } from './valoraciones-opiniones.page';

describe('ValoracionesOpinionesPage', () => {
  let component: ValoracionesOpinionesPage;
  let fixture: ComponentFixture<ValoracionesOpinionesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ValoracionesOpinionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValoracionesOpinionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
