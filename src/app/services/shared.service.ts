import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  from: string = '';
  to: string = '';
  date: string = '';
  passengers: number = 1;

  selectedTrain: any;
  constructor() { }

}
