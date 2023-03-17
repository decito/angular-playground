import { Component } from '@angular/core'

@Component({
  selector: 'app-assignment-4',
  templateUrl: './assignment-4.component.html'
})
export class AssignmentFourComponent {
  assignmentNumber = '4'

  evenNumbers: number[] = []
  oddNumbers: number[] = []

  onIntervalEmmited(n: number) {
    (n % 2 === 0)
      ? this.evenNumbers.push(n)
      : this.oddNumbers.push(n)
  }
}
