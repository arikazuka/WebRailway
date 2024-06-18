import { Component, OnInit } from '@angular/core';
import { DepartureService } from '../../services/departure.service';
import { SharedService } from '../../services/shared.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-buyer-info',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './buyer-info.component.html',
  styleUrls: ['./buyer-info.component.scss']
})
export class BuyerInfoComponent implements OnInit {
  departures: any[] = [];
  ticketRegisterData = {
    people: [{ seat: '', firstName: '', lastName: '', idNumber: '' }]
  };
  totalPrice: number = 0; // Initialize total price
  desiredIndex: number = 0;

  constructor(
    private departureService: DepartureService,
    private sharedService: SharedService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getDepartures();
    this.calculateTotalPrice();
  }

  // Fetch departures based on sharedService data
  getDepartures(): void {
    this.departureService
      .getDeparture(
        this.sharedService.from,
        this.sharedService.to,
        this.sharedService.date
      )
      .subscribe({
        next: (response: any) => {
          console.log('departures', response);
          if (Array.isArray(response) && response.length > 0 && response[0].trains) {
            this.departures = response[0].trains;
          } else {
            console.warn('Unexpected response structure', response);
            this.departures = [];
          }
        },
        error: (err: any) => {
          console.error('Failed to fetch departures', err);
          this.departures = [];
        },
      });
  }

  // Calculate total price based on number of passengers
  calculateTotalPrice(): void {
    this.totalPrice = this.sharedService.passengers * 50; // Assuming price per passenger
  }

  // Select seat for a passenger
  selectSeat(index: number): void {
    // Implement logic here if needed
  }

  // Open seat selection popup (placeholder function)
  openSeatPopup(index: number): void {
    alert(`Select seat for passenger ${index + 1}`);
  }

  // Validate passenger information before registering ticket
  validatePassengerInfo(): boolean {
    return this.ticketRegisterData.people.every(
      (person) =>
        person.firstName && person.lastName && person.idNumber && person.seat
    );
  }

  // Register ticket (placeholder function)
  registerTicket(): void {
    if (this.validatePassengerInfo()) {
      alert('Ticket registered successfully!');
    } else {
      alert('Please fill out all required fields.');
    }
  }
}


