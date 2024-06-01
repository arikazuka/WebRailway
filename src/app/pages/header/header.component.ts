import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  resetLocalStorage(){    localStorage.setItem('gio', 'g');

    // localStorage.clear();
  }
}
