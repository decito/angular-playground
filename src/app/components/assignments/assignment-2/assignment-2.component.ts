import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-assignment-2',
  templateUrl: './assignment-2.component.html'
})
export class AssignmentTwoComponent {
  @Input() username: string = ''
}
