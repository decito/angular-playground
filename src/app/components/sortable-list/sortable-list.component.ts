import { Component } from '@angular/core'

@Component({
  selector: 'app-sortable-list',
  templateUrl: './sortable-list.component.html'
})
export class SortableListComponent {
  activeUsers: string[] = ['Fulano', 'Sicrano', 'Beltrano']

  inactiveUsers: string[] = ['João', 'Maria', 'Zé da Manga']

  setActive(index: number): void {
    const user = this.inactiveUsers.splice(index, 1)[0]
    this.activeUsers.push(user)
  }

  setInactive(index: number): void {
    const user = this.activeUsers.splice(index, 1)[0]
    this.inactiveUsers.push(user)
  }
}
