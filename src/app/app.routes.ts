import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TicketPageComponent } from './pages/ticket-page/ticket-page.component';
import { ReservationComponent } from './components/reservation/reservation.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'ticket-page', component: TicketPageComponent },
  { path: 'reservation', component: ReservationComponent }
];
