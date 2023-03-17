import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-assignment-4',
  templateUrl: './assignment-4.component.html'
})
export class AssignmentFourComponent {
  assignmentNumber = '4'
  @Input() visible: boolean
  @Output() toggle = new EventEmitter<boolean>()
  onClick() {
    this.visible = !this.visible
    this.toggle.emit(this.visible)
  }

  evenNumbers: number[] = []
  oddNumbers: number[] = []

  onIntervalEmmited(n: number) {
    (n % 2 === 0)
      ? this.evenNumbers.push(n)
      : this.oddNumbers.push(n)
  }
}
