import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-assignment-2',
  templateUrl: './assignment-2.component.html'
})
export class AssignmentTwoComponent {
  constructor(private route: ActivatedRoute) {}
  assignmentNumber = this.route.snapshot.url

  username: string
}
