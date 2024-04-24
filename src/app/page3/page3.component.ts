import { Component, OnInit } from '@angular/core';
import { JsonService, Clothes } from 'src/app/core/services/json.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss'],
})
export class Page3Component implements OnInit {
  title = 'page3';
  clothes: Clothes[] = [];

  constructor(private jsonService: JsonService) {}

  ngOnInit() {
    this.jsonService.getClothes().subscribe((data: any) => {
      this.clothes = data['clothes'];
      console.log(this.clothes);
    });
  }
}
