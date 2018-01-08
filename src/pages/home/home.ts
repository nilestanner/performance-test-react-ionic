import { Component, OnInit  } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  timeStart = new Date().getTime();
  timeEnd = null;
  start = 0;
  array = [0, 1];
  highestN = 1;
  fib = 0;
  time = 0;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit  () {
    this.runForever();
  }


  runForever() {
    let result = this.doFib(this.start);
    this.fib = result;
    this.start++;
    if (result !== Infinity) {
      setTimeout(this.runForever.bind(this), 2);
    } else {
      this.timeEnd = new Date().getTime();
      this.time = this.timeEnd - this.timeStart;
    }
  }

  doFib(n) {
    if (n === 0) {
      return 0;
    }
    if (!this.array[n]) {
      for (var i = this.highestN + 1; i <= n; i++) {
        this.array[i] = this.array[i - 1] + this.array[i - 2];
      }
      this.highestN = n;
    }
    return this.array[n];
  }

  reset() {
    this.timeStart = new Date().getTime();
    this.timeEnd = null;
    this.start = 0;
    this.array = [0, 1];
    this.highestN = 1;
    this.fib = 0;
    this.time = 0;
    this.runForever();
  }





}
