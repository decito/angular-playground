import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment-3',
  templateUrl: './assignment-3.component.html',
  styles: [`.black-text { color: black }`]
})
export class AssignmentThreeComponent {
  assignmentNumber = '3'

  show = false
  clicks: number[] = []

  clickHandler() {
    this.show = !this.show
    this.clicks.push(this.clicks.length)
  }
}
