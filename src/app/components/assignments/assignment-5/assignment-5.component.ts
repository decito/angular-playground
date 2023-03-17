import { Component, EventEmitter, Input, Output } from "@angular/core"
import { UsersService } from "src/app/services/users.service"

@Component({
  selector: 'app-assignment-5',
  templateUrl: './assignment-5.component.html',
  // providers: [UsersService]
})
export class AssignmentFiveComponent {
  assignmentNumber = '5'
  @Input() visible: boolean
  @Output() toggle = new EventEmitter<boolean>()
  onClick() {
    this.visible = !this.visible
    this.toggle.emit(this.visible)
  }
}