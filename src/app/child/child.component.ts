import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormsModule,
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
  myForm: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userPhone: new FormControl('', Validators.pattern('[0-9]{10}')),
  });

  onSubmit() {
    console.log(this.myForm.getRawValue()); //возвращает текущее значение всех контролов формы
  }
}
