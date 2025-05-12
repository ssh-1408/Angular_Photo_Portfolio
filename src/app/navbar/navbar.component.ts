import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @ViewChild('navbarCollapse', { static: false }) navbarCollapse!: ElementRef;

  closeNavbar() {
    const element = this.navbarCollapse.nativeElement;
    if (element.classList.contains('show')) {
      element.classList.remove('show'); // Manually collapse Bootstrap navbar
    }
  }
}
