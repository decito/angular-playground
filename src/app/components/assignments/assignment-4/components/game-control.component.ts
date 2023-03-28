import { Component, EventEmitter, Output } from '@angular/core'

type TimerHandle = number | ReturnType<typeof setInterval>

@Component({
  selector: 'app-assignment-4-game-control',
  templateUrl: './game-control.component.html'
})
export class AssignmentFourGameControlComponent {
  counterHandler: TimerHandle
  counter = 0

  @Output() intervalEmmiter = new EventEmitter<number>()

  startGame() {
    this.counterHandler = setInterval(() => {
      this.counter++
      this.intervalEmmiter.emit(this.counter)
    }, 1000)
  }

  stopGame() {
    clearInterval(this.counterHandler)
  }
}
