import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Childrenn } from '../childrenn';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  handleFormGroupChange(event: string): void {
    console.log(event);
  }
}
