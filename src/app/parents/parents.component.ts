import { Component } from '@angular/core';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss'],
})
export class ParentsComponent {
  catchClick(event: string) {
    console.log(event);
  }
}
