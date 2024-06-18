import { Routes } from '@angular/router';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { TrainlistComponent } from './pages/trainlist/trainlist.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { BuyerInfoComponent } from './pages/buyer-info/buyer-info.component';
import { SeatMapComponent } from './pages/seat-map/seat-map.component';
import { PaymentComponent } from './pages/payment/payment.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'tickets', component: TicketsComponent },
    { path: 'trainList', component: TrainlistComponent },
    { path: 'buyerInfo', component: BuyerInfoComponent },
    { path: 'seatmap', component: SeatMapComponent },
    { path: 'payment', component: PaymentComponent },

    { path: '**', component: NotfoundComponent },
];
