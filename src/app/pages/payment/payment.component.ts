import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SeatMapService } from '../../services/seat-map.service';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  invoiceItems: any[] = []; // Define invoiceItems array

  totalPrice = 0;

  cardNumber: string = '';
  expiryDate: string = '';
  cvv: string = '';

  paymentStatus: boolean = false;
  paymentStatusMessage: string = '';

  constructor(private seatMapService: SeatMapService) {}

  ngOnInit(): void {
    this.seatMapService.selectedSeats$.subscribe(selectedSeats => {
      this.updateInvoiceItems(selectedSeats); // Update invoice items based on selected seats
    });
  }

  updateInvoiceItems(selectedSeats: string[]): void {
    const pricePerSeat = 50; // Example price per seat, adjust as needed
    this.invoiceItems = selectedSeats.map((seat, index) => ({
      description: `Seat ${index + 1}`,
      amount: pricePerSeat
    }));

    this.totalPrice = this.invoiceItems.reduce((acc, item) => acc + item.amount, 0);
  }

  payWithCard(): void {
    // Check if all passenger information is filled
    
  
    // Check if card details are filled
    if (!this.cardNumber || !this.expiryDate || !this.cvv) {
      alert('Please fill out all card details.');
      return;
    }
  
    // Simulate payment processing (replace with actual logic)
    setTimeout(() => {
      this.paymentStatus = true;
      this.paymentStatusMessage = 'Payment successful!';
    }, 2000); // Simulate a 2-second delay
  }
  
}