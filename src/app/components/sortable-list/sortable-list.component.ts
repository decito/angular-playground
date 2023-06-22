import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-sortable-list',
  templateUrl: './sortable-list.component.html'
})
export class SortableListComponent implements OnInit {
  activeUsers: string[] = ['Fulano', 'Sicrano', 'Beltrano', 'Jaimerson']
  inactiveUsers: string[] = ['João', 'Maria', 'Zé da Manga']

  draggingItemProps: { index: number; name: string }

  dropzones: NodeListOf<Element>
  lists: NodeListOf<Element>
  activeList: HTMLElement
  inactiveList: HTMLElement

  ngOnInit(): void {
    this.dropzones = document.querySelectorAll('.drag-zone')
    this.lists = document.querySelectorAll('.sortable-list')
    this.activeList = document.getElementById('active-list')
    this.inactiveList = document.getElementById('inactive-list')

    this.dropzones.forEach(dropzone => {
      dropzone.addEventListener('dragover', this.onDragOver)
      dropzone.addEventListener('dragleave', this.onDragLeave)
    })

    this.lists.forEach(list => {
      list.addEventListener('dragover', (e: DragEvent) => {
        const dragging = document.querySelector('.dragging')

        const applyAfter = this.getNewPosition(list, e.clientY)

        if (applyAfter) applyAfter.insertAdjacentElement('afterend', dragging)
        else list.prepend(dragging)
      })
    })
  }

  onDragStart(event: DragEvent, index: number): void {
    this.draggingItemProps = {
      index: index,
      name: (<Element>event.target).textContent
    }
    ;(<Element>event.target).classList.add('dragging')

    this.dropzones.forEach(zone => zone.classList.add('highlight'))
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

  onDragOver(): void {
    const self = this as unknown as Element

    self.classList.add('over')
  }

  onDragLeave() {
    const self = this as unknown as Element

    self.classList.remove('over')
  }

  onDragEnd(event: DragEvent) {
    this.dropzones.forEach(zone => zone.classList.remove('highlight'))

    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;(<Element>event.target).classList.remove('dragging')
  }

  onDrop(event: DragEvent): void {
    event.preventDefault()

    const newActiveOrder = []
    const newInactiveOrder = []

    const activeItems = this.activeList.getElementsByTagName('li')
    const inactiveItems = this.inactiveList.getElementsByTagName('li')

    for (let i = 0; i < activeItems.length; i++)
      newActiveOrder.push(activeItems[i].textContent)

    for (let i = 0; i < inactiveItems.length; i++)
      newInactiveOrder.push(inactiveItems[i].textContent)

    this.activeUsers = newActiveOrder
    this.inactiveUsers = newInactiveOrder

    this.dropzones.forEach(zone => zone.classList.remove('highlight'))
  }
}
