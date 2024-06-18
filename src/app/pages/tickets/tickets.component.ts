import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TicketsService } from '../../services/tickets.service';

@Component({
  selector: 'app-tickets',
  standalone: true,
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class TicketsComponent {
  ticketNumber: string = '';
  email: string = '';
  ticketInfo: any = null; // Property to hold ticket information after checking

  tickets: any[] = [
    { number: '12345', email: 'test1@example.com', info: 'First Class, Seat A1' },
    { number: '54321', email: 'test2@example.com', info: 'Business Class, Seat B3' },
    // Add more mock ticket data as needed
  ];

  constructor(private ticketsService: TicketsService) {}

  onSubmit() {
    console.log('Check or Return Ticket');
    console.log('Ticket Number:', this.ticketNumber);
    console.log('Email:', this.email);

    // Simulate checking or returning the ticket
    const foundTicket = this.tickets.find(ticket => ticket.number === this.ticketNumber && ticket.email === this.email);
    if (foundTicket) {
      this.ticketInfo = foundTicket;
    } else {
      this.ticketInfo = null; // Clear ticket info if not found
      alert('Ticket not found! Please check your input.');
    }
  }
}
