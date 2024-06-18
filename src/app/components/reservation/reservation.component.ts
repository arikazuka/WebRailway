import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { StationService } from '../../services/station.service';
import { TrainlistComponent } from '../../pages/trainlist/trainlist.component';
import { DepartureService } from '../../services/departure.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-reservation',
  standalone: true,
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
  imports: [CommonModule, RouterModule,  FormsModule, TrainlistComponent ],
})


export class ReservationComponent implements OnInit {
  stations: any = [];
  fromInput1: string = '';
  toInput1: string = '';
  dateInput1: string = '';
  passengersInput: number = 1;

  constructor(
    private stationService: StationService,
 
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.getStations();
  }

  getStations(): void {
    this.stationService.getStations().subscribe((stations) => {
      console.log('stations', stations);
      this.stations = stations;
    });
  }

  onSubmit() {
    console.log('reserved', this.fromInput1, this.toInput1, this.dateInput1, this.passengersInput);
    this.sharedService.from = this.fromInput1;
    this.sharedService.to = this.toInput1;
    this.sharedService.date = this.dateInput1;
    this.sharedService.passengers = this.passengersInput;

     
  }
}
