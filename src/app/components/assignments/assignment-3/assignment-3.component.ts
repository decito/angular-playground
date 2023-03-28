import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-assignment-3',
  templateUrl: './assignment-3.component.html',
  styles: [
    `
      .black-text {
        color: black;
      }
    `
  ]
})
export class AssignmentThreeComponent {
  constructor(private route: ActivatedRoute) {}
  assignmentNumber = this.route.snapshot.url

  show = false
  clicks: number[] = []

  clickHandler() {
    this.show = !this.show
    this.clicks.push(this.clicks.length)
  }
}
