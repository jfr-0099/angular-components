import { Component } from '@angular/core';

@Component({
  selector: 'app-click-counter',
  imports: [],
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
