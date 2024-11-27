import { Component, signal, computed, effect } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1 class="centerText">Hello, {{ title }}</h1>
    <div class="demoArea">
      <p>Count: <span class="numericDisplay">{{ count() }}</span></p>
      <p>Double Count: <span class="numericDisplay">{{ doubleCount() }}</span></p>
      <button class="leftButton" (click)="decrement()">Decrement</button>
      <button class="rightButton" (click)="increment()">Increment</button>
    </div>

    <h2 class="centerText">Logging Area</h2>
    <div id="logBox" class="logArea"></div>
  `,
  styles: `
    .centerText {
      text-align: center;
    }

    .demoArea {
      border: solid .1rem black;
      padding: 0 0 .5rem .8rem;
      width: 15rem;
      margin: 2rem auto;
    }

    .leftButton {
      position: relative;
      left: .8rem;
    }

    .rightButton {
      position: relative;
      left: 2rem;
    }

    .logArea {
      display: flex;
      flex-direction: column-reverse;
      border: solid .15rem darkgreen;
      background: black;
      color: lightgreen;
      padding: .4rem;
      width: 35rem;
      margin: 1rem auto;
      font-family: "DM Mono", monospace;
      max-height: 30rem;
      overflow: auto;
    }
  `
})
export class AppComponent {
  title = 'simple-signals-demo';

  // Create a signal
  count = signal(0);

  // Create a computed signal
  doubleCount = computed(() => this.count() * 2);

  constructor() {
    // Create an effect
    effect(() => {
      const textToLog = `Count is: ${this.count()}`;
      console.log(textToLog);
      this.logToLogBox(textToLog);
    });
  }

  logToLogBox(logEntry: string) {
    const logBox = document.getElementById('logBox');
      if(logBox) {
        logBox.innerHTML += `${logEntry}<br/>`;
      }
  }

  increment() {
    this.count.set(this.count() + 1);
  }

  decrement() {
    this.count.set(this.count() - 1);
  }
}
