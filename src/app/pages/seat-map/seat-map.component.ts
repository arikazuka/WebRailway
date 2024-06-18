import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SeatMapService } from '../../services/seat-map.service';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule,],
  selector: 'app-seat-map',
  templateUrl: './seat-map.component.html',
  styleUrls: ['./seat-map.component.scss']
})
export class SeatMapComponent {
  selectedSeats: string[] = [];

  firstClassSeats: string[] = this.generateSeats(1, 32);
  businessClassSeats: string[] = this.generateSeats(2, 32);
  economyClassSeats: string[] = this.generateSeats(3, 32);

  constructor(private seatMapService: SeatMapService) {}

  generateSeats(classNumber: number, numberOfSeats: number): string[] {
    const seats: string[] = [];
    for (let i = 1; i <= numberOfSeats; i++) {
      seats.push(`${classNumber}${i}`);
    }
    return seats;
  }

  toggleSeat(seat: string): void {
    const index = this.selectedSeats.indexOf(seat);
    if (index === -1) {
      this.selectedSeats.push(seat);
    } else {
      this.selectedSeats.splice(index, 1);
    }
    this.seatMapService.setSelectedSeats(this.selectedSeats); // Update selected seats in service
  }

  bookSeats(): void {
    if (this.selectedSeats.length > 0) {
      alert(`You have booked seat(s): ${this.selectedSeats.join(', ')}`);
      // Navigate to payment page or trigger payment logic
    } else {
      alert("Please select a seat to book.");
    }
  }
}