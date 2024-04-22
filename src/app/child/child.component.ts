import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormsModule,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  users: any[] = [];

  @Output()
  onClicked = new EventEmitter<string>();

  myReactiveForm: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    userEmail: new FormControl('', Validators.required),
    userPhone: new FormControl('', Validators.required),
  });

  constructor() {
    this.onreInitForm();
  }

  click(value1: string, value2: string, value3: string) {
    this.onClicked.emit('Вы ввели ' + value1 + value2 + value3);
  }

  onSubmit_myReactiveForm() {
    this.users.push(this.myReactiveForm.getRawValue());
  }

  onreInitForm() {
    this.myReactiveForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      userEmail: new FormControl('', Validators.required),
      userPhone: new FormControl('', Validators.required),
    });
  }
}
