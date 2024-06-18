import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DepartureService } from '../../services/departure.service';
import { SharedService } from '../../services/shared.service';
import { RouterModule } from '@angular/router';
import { BuyerInfoComponent } from '../buyer-info/buyer-info.component';

@Component({
  selector: 'app-trainlist',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, BuyerInfoComponent],
  templateUrl: './trainlist.component.html',
  styleUrls: ['./trainlist.component.scss'],
})
export class TrainlistComponent implements OnInit {
  fromInput: string = '';
  toInput: string = '';
  dateInput: string = '';
  departures: any[] = [];

  constructor(private departureService: DepartureService, public sharedService: SharedService) {}

  ngOnInit(): void {
    
 
    
    console.log('From:', this.sharedService.from);
    console.log('To:', this.sharedService.to);
    console.log('Date:', this.sharedService.date);
    
    

    if (this.sharedService.from && this.sharedService.to && this.sharedService.date) {
      this.getDepartures();
    }
  }

  getDepartures(): void {
    this.departureService.getDeparture(this.sharedService.from, this.sharedService.to, this.sharedService.date).subscribe({
      next: (response) => {
        console.log('departures', response);
        console.log("from", this.sharedService.from);
        
  
        if (Array.isArray(response) && response.length > 0 && response[0].trains) {
          this.departures = response[0].trains;
        } else {
          console.warn('Unexpected response structure', response);
          this.departures = [];
        }
      },
      error: (err) => {
        console.error('Failed to fetch departures', err);
        this.departures = [];
      }
    });
  }
  
}
