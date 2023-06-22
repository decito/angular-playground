import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

import { UsersService } from '~/services/users.service'

@Component({
  selector: 'app-sortable-list',
  templateUrl: './sortable-list.component.html'
})
export class SortableListComponent implements OnInit {
  @Input() listName: string
  @Input() listId: string
  @Input() listItems: string[]

  dropzone: NodeListOf<Element>
  list: NodeListOf<Element>
  draggingItemProps: { index: number; name: string }

  @Output() dropEmitter = new EventEmitter<boolean>()

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.dropzone = document.querySelectorAll('.dropzone')
    this.list = document.querySelectorAll('.sortable-list')

    this.listItems = this.usersService.getDragUsers(this.listId)

    this.dropzone.forEach(zone => {
      zone.addEventListener('dragover', this.onDragOver)
      zone.addEventListener('dragleave', this.onDragLeave)
    })

    this.list.forEach(l => {
      l.addEventListener('dragover', (e: DragEvent) => {
        const dragging = document.querySelector('.dragging')

        const applyAfter = this.getNewPosition(l, e.clientY)

        if (applyAfter) applyAfter.insertAdjacentElement('afterend', dragging)
        else l.prepend(dragging)
      })
    })
  }

  getNewPosition(ul: Element, posY: number) {
    let result: Element

    const liArray = ul.querySelectorAll('.item:not(.dragging)')

    for (const refer_li of liArray) {
      const li = refer_li.getBoundingClientRect()

      const liCenterY = li.y + li.height / 2

      if (posY >= liCenterY) result = refer_li
    }

    return result
  }

  onDragStart(event: DragEvent, index: number): void {
    this.draggingItemProps = {
      index: index,
      name: (<Element>event.target).textContent
    }
    ;(<Element>event.target).classList.add('dragging')

    this.dropzone.forEach(zone => zone.classList.add('highlight'))
  }

  onDragOver(): void {
    const self = this as unknown as Element

    self.classList.add('over')
  }

  onDragLeave() {
    const self = this as unknown as Element

    self.classList.remove('over')
  }

  onDragEnd(event: DragEvent) {
    this.dropzone.forEach(zone => zone.classList.remove('highlight'))
    ;(<Element>event.target).classList.remove('dragging')

    this.dropEmitter.emit(true)
  }
}
