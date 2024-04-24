import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

export interface Clothes {
  id: number;
  category: string;
  name: string;
  description: string;
  price: number;
  color: string;
}

@Injectable({
  providedIn: 'root',
})
export class JsonService {
  constructor(private http: HttpClient) {}
  getClothes(): Observable<Array<Clothes>> {
    return this.http.get<Array<Clothes>>('assets/data.json').pipe(
      catchError((err) => {
        console.log(err);
        return of([]);
      })
    );
  }
}
