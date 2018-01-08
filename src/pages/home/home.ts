import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  timeStart = new Date().getTime();
  timeEnd = null;
  start = 0;
  array = [0,1];
  highestN = 1;
  fib = 0;
  time = 0;

  constructor(public navCtrl: NavController) {
    this.runForever();
  }

  fib (n) {
    if(n === 0){
      return 0;
    }
    if(!array[n]){
      for(var i = highestN + 1; i <= n; i++){
        array[i] = array[i-1] + array[i-2];
      }
      highestN = n;
    }
    return array[n];
  }

    runForever() {
     var result = this.fib(start);
     this.fib = result;
     start++;
      if(result !== Infinity){
         setTimeout(this.runForever,2);
      } else {
        timeEnd = new Date().getTime();
        this.time = timeEnd - timeStart;
      }
    }
    reset () {
      this.timeStart = new Date().getTime();
      this.timeEnd = null;
      this.start = 0;
      this.array = [0,1];
      this.highestN = 1;
      this.fib = 0;
      this.time = 0;
      this.runForever();
    }





}
