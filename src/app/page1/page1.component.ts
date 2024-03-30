import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { Page1 } from '../page1';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
})
export class Page1Component implements OnInit {
  title = 'page1';
  id: number;

  constructor(private activateRoute: ActivatedRoute, private router: Router) {
    this.id = activateRoute.snapshot.params['id']; // извлекает значение id из параметров текущего роута
  }
  ngOnInit(): void {
    this.activateRoute.paramMap
      .pipe(switchMap((params: any) => params.getAll('id')))
      .subscribe((data: any) => (this.id = parseInt(data, 10)));
  }

  goToMain(): void {
    this.router.navigateByUrl('/');
  }
}
