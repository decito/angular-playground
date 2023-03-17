import { Component, EventEmitter, Input, Output } from "@angular/core"

@Component({
  selector: 'app-assignment-5',
  templateUrl: './assignment-5.component.html'
})
export class AssignmentFiveComponent {
  assignmentNumber = '5'
  @Input() visible: boolean
  @Output() toggle = new EventEmitter<boolean>()
  onClick() {
    this.visible = !this.visible
    this.toggle.emit(this.visible)
  }

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}