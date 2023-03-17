import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-assignment-5-inactive-users',
  templateUrl: './active-users.component.html'
})
export class AssignmentFiveInactiveUsersComponent {
  @Input() users: string[];
  @Output() userSetToInactive = new EventEmitter<number>();

  onSetToInactive(id: number) {
    this.userSetToInactive.emit(id);
  }
}