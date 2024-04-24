import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
})
export class Page2Component {
  saved: boolean = false;
  save() {
    this.saved = true;
  }
  exampleArray = ['Я', 'выучу', 'Angular'];
}
