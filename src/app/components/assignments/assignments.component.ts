import { Component } from '@angular/core'

import { assignmentList } from '~/shared/assignments'

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html'
})
export class AssignmentsComponent {
  aV = assignmentList
}
