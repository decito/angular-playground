import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-assignment-5-active-users',
  templateUrl: './inactive-users.component.html'
})
export class AssignmentFiveActiveUsersComponent {
  @Input() users: string[];
  @Output() userSetToActive = new EventEmitter<number>();

  onSetToActive(id: number) {
    this.userSetToActive.emit(id);
  }
}