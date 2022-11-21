import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ToggleComponent} from './toggle.component';
import {By} from "@angular/platform-browser";

describe('ToggleComponent', () => {
  let component: ToggleComponent;
  let fixture: ComponentFixture<ToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToggleComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have active class', () => {
    component.active = false;
    fixture.detectChanges();
    const toggleElem = fixture.debugElement.query(By.css('.toggle')).nativeElement;
    expect(toggleElem).not.toHaveClass('toggle--active')
  });

  it('should have active class', () => {
    component.active = true;
    fixture.detectChanges();
    const toggleElem = fixture.debugElement.query(By.css('.toggle')).nativeElement;
    expect(toggleElem).toHaveClass('toggle--active')
  });
});
