import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-assignment-2',
  templateUrl: './assignment-2.component.html'
})
export class AssignmentTwoComponent {
  assignmentNumber = '2'
  @Input() visible: boolean
  @Output() toggle = new EventEmitter<boolean>()
  onClick() {
    this.visible = !this.visible
    this.toggle.emit(this.visible)
  }

  @Input() username: string = ''
}
