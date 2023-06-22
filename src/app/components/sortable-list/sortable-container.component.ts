import { AfterViewChecked, Component } from '@angular/core'

import { UsersService } from '~/services/users.service'

@Component({
  selector: 'app-sortable-container',
  templateUrl: './sortable-container.component.html'
})
export class SortableContainerComponent implements AfterViewChecked {
  activeList: HTMLElement
  inactiveList: HTMLElement

  constructor(private usersService: UsersService) {}

  ngAfterViewChecked(): void {
    this.activeList = document.getElementById('active-users')
    this.inactiveList = document.getElementById('inactive-users')
  }

  onEmit() {
    const newActiveOrder: string[] = []
    const newInactiveOrder: string[] = []

    const activeItems = this.activeList.getElementsByTagName('li')
    const inactiveItems = this.inactiveList.getElementsByTagName('li')

    for (let i = 0; i < activeItems.length; i++)
      newActiveOrder.push(activeItems[i].textContent)

    for (let i = 0; i < inactiveItems.length; i++)
      newInactiveOrder.push(inactiveItems[i].textContent)

    this.usersService.setDragActive(newActiveOrder)
    this.usersService.setDragInactive(newInactiveOrder)
  }
}
