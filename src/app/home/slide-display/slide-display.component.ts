import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-display',
  templateUrl: './slide-display.component.html',
  styleUrl: './slide-display.component.css'
})
export class SlideDisplayComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  } 

}
