import { Component } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { interval } from 'rxjs/internal/observable/interval';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  max     = 1;
  current = 0;

  start() {
    const result = interval(100)
      .pipe(takeWhile(_ => !this.isFinished ))
      .subscribe(i => {
        this.current += 0.1;
      });
  }

   /// finish timer
  finish() {
    this.current = this.max;
  }

  /// reset timer
  reset() {
    this.current = 0;
  }


  /// Getters to prevent NaN errors

  get maxVal() {
    return isNaN(this.max) || this.max < 0.1 ? 0.1 : this.max;
  }

  get currentVal() {
    return isNaN(this.current) || this.current < 0 ? 0 : this.current;
  }

  get isFinished() {
    return this.currentVal >= this.maxVal;
  }



}
