import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeatMapService {
  private selectedSeatsSubject = new BehaviorSubject<string[]>([]);
  selectedSeats$ = this.selectedSeatsSubject.asObservable();

  constructor() {}

  setSelectedSeats(seats: string[]): void {
    this.selectedSeatsSubject.next(seats);
  }

  getSelectedSeats(): string[] {
    return this.selectedSeatsSubject.getValue();
  }
}
