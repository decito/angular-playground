import { Component } from "@angular/core"
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-assignment-5',
  templateUrl: './assignment-5.component.html'
})
export class AssignmentFiveComponent {
  constructor(private route: ActivatedRoute) { }
  assignmentNumber = this.route.snapshot.url
}