// app/components/progress-bar.js
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ProgressBarComponent extends Component {
    @tracked progressValue = 25;

    get barStyle() {
        return `width: ${this.progressValue}%;`;
    }

    @action
    increaseProgress() {
        this.updateProgress(10);
    }

    @action
    decreaseProgress() {
        this.updateProgress(-10);
    }

    updateProgress(amount) {
        this.progressValue += amount;
        // Ensure the progress value stays within the 0-100 range
        this.progressValue = Math.min(Math.max(this.progressValue, 0), 100);
    }
}
