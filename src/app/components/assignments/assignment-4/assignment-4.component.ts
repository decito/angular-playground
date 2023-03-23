import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-assignment-4',
  templateUrl: './assignment-4.component.html'
})
export class AssignmentFourComponent {
  constructor(private route: ActivatedRoute) { }
  assignmentNumber = this.route.snapshot.url

  evenNumbers: number[] = []
  oddNumbers: number[] = []

  onIntervalEmmited(n: number) {
    (n % 2 === 0)
      ? this.evenNumbers.push(n)
      : this.oddNumbers.push(n)
  }
}
