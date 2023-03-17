import { Component } from "@angular/core";

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
})
export class AssignmentsComponent {
  displayAssignment: { number: number, display: boolean }[] = [
    { number: 2, display: false },
    { number: 3, display: false },
    { number: 4, display: false },
    { number: 5, display: true }
  ]

  toggleVisibility(n: number) {
    this.displayAssignment[n].display = !this.displayAssignment[n].display

    console.log(this.displayAssignment)
  }
}