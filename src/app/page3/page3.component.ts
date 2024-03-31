import { Component } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss'],
})
export class Page3Component {
  title = 'page3';

  constructor(private dataService: DataService) {
    console.log(this.dataService.getExampleData());
  }
}
