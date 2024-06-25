import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SobreNosPage } from './sobrenos.page';

describe('SobrenosPage', () => {
  let component: SobreNosPage;
  let fixture: ComponentFixture<SobreNosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreNosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
