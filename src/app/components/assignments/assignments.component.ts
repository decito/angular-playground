import { Component } from '@angular/core'

import { assignmentList } from 'src/app/shared/assinments'

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html'
})
export class AssignmentsComponent {
  aV = assignmentList
}
