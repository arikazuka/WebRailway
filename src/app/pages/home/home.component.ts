import { Component } from '@angular/core';
import { DecorationComponent } from '../../shared/decoration/decoration.component';
import { ReservationComponent } from '../../components/reservation/reservation.component';
import { TrainService } from '../../services/train.service';
import { TicketsService } from '../../services/tickets.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DecorationComponent, ReservationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  trains: any[] = [];
  tickets: any[] = [];
  constructor(
    private traingService: TrainService,
    private ticketSerivce: TicketsService
  ) {}

  ngOnInit() {
    this.getTrains();
    this.getTickets();
  }

  getTrains() {
    this.traingService.getTrains().subscribe({
      next: (trains) => {
        this.trains = trains;
        console.log("trains:");
        console.log(this.trains);
      },
    });
  }

  getTickets() {
    this.ticketSerivce.getTickets().subscribe({
      next: (tickets) => {
        this.tickets = tickets;
        console.log("tickets: " );
        console.log(this.tickets);
        
      },
    });
  }
}
