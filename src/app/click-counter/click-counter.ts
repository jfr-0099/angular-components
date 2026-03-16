import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-click-counter',
  imports: [    
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './click-counter.html',
  styleUrl: './click-counter.css',
})
export class ClickCounter {
  count = 0;

  increase() {
    this.count++;
  }

  decrease() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }
}
