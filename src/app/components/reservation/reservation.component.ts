import { Component, OnInit } from '@angular/core';
import { StationService } from '../../services/station.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit {
  stations: any[] = [];

  constructor(private stationService: StationService, private router: Router) {}

  ngOnInit(): void {
    this.getStations();
  }

  getStations(): void {
    this.stationService.getStations().subscribe({
      next: (stations) => {
        this.stations = stations;
        console.log('stations:', this.stations);
      },
    });
  }

  onSubmit(): void {
    console.log('reserved');
    this.router.navigate(['/ticket-page.component.html']);
  }
}
