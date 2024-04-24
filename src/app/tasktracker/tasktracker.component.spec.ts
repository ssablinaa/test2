import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasktrackerComponent } from './tasktracker.component';

describe('TasktrackerComponent', () => {
  let component: TasktrackerComponent;
  let fixture: ComponentFixture<TasktrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasktrackerComponent]
    });
    fixture = TestBed.createComponent(TasktrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
