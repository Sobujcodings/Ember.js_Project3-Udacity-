// app/components/progress-bar.js
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ProgressBarComponent extends Component {
  @tracked progressValue = 25;
  @tracked highest = false;
  @tracked lowest = false;



  constructor() {
    super(...arguments);
    console.log(this.progressValue);
    // if (this.progressValue == 100) {
    //   alert('finished');
    // }
  }

  get barStyle() {
    return `width: ${this.progressValue}%;`;
  }


  // TODO: Problem holo akbar true hole true e theke jay abar value komale false hoy na
  @action
  increaseProgress() {

    // for lowest
    if (this.lowest == true) {
      this.lowest = !this.lowest;
    }

    console.log(this.highest);

    // this.highest = !this.highest;
    if (this.progressValue == 100) {
      this.highest = !this.highest;
      console.log(this.highest);
      // alert('finished');
      return;
    }
    else {
      this.updateProgress(20);
      // this.highest = !this.highest;
      console.log(this.progressValue);
      // 20 barar por abar check kore dekhlam 100 hole disable korbo
      if (this.progressValue == 100) {
        this.highest = !this.highest;
        console.log(this.highest);
        // alert('finished');
        return;
      }
    }
  }

  @action
  decreaseProgress() {

    // for highest
    if (this.highest == true) {
      this.highest = !this.highest;
    }

    console.log(this.lowest);
    // this.updateProgress(-20);
    // this.highest = !this.highest;
    if (this.progressValue == 0) {
      this.lowest = !this.lowest;
      console.log(this.lowest);
      // alert('finished');
      return;
    }
    else {
      this.updateProgress(-20);
      console.log(this.lowest);
      // this.highest = !this.highest;
      console.log(this.progressValue);
      // 20 barar por abar check kore dekhlam 100 hole disable korbo
      if (this.progressValue == 0) {
        this.lowest = !this.lowest;
        console.log(this.lowest);
        // alert('finished');
        return;
      }
    }
  }

  updateProgress(amount) {
    console.log(amount);
    this.progressValue += amount;
    // Ensure the progress value stays within the 0-100 range
    this.progressValue = Math.min(Math.max(this.progressValue, 0), 100);
  }
}
