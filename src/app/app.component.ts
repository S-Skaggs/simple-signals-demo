import { Component, signal, computed, effect } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="centered">
      <p>Count: {{ count() }}</p>
      <p>Double Count: {{ doubleCount() }}</p>
      <button class="leftButton" (click)="decrement()">Decrement</button>
      <button class="rightButton" (click)="increment()">Increment</button>
    </div>
  `,
  styles: `
    .centered {
      border: solid .1rem black;
      padding: 0 0 .5rem .8rem;
      width: 15rem;
      margin: 5rem auto;
    }

    .leftButton {
      position: relative;
      left: .8rem;
    }

    .rightButton {
      position: relative;
      left: 2rem;
    }
  `
})
export class AppComponent {
  title = 'test-angular-signals-app';

  // Create a signal
  count = signal(0);

  // Create a computed signal
  doubleCount = computed(() => this.count() * 2);

  constructor() {
    // Create an effect
    effect(() => {
      console.log(`Count is: ${this.count()}`);
    });
  }

  increment() {
    this.count.set(this.count() + 1);
  }

  decrement() {
    this.count.set(this.count() - 1);
  }
}
