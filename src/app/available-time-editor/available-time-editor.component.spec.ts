import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableTimeEditorComponent } from './available-time-editor.component';

describe('AvailableTimeEditorComponent', () => {
  let component: AvailableTimeEditorComponent;
  let fixture: ComponentFixture<AvailableTimeEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableTimeEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvailableTimeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
