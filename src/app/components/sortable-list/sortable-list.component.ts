import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-sortable-list',
  templateUrl: './sortable-list.component.html'
})
export class SortableListComponent implements OnInit {
  activeUsers: string[] = ['Fulano', 'Sicrano', 'Beltrano', 'Jaimerson']
  inactiveUsers: string[] = ['João', 'Maria', 'Zé da Manga']

  draggingItemProps: { index: number; name: string }

  onDragStart(event: DragEvent, index: number): void {
    this.draggingItemProps = {
      index: index,
      name: (<Element>event.target).textContent
    }
    ;(<Element>event.target).classList.add('dragging')
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault()
  }

  ngOnInit(): void {
    const lists = document.querySelectorAll('.sortable-list')

    lists.forEach(list => {
      list.addEventListener('dragover', (e: DragEvent) => {
        const dragging = document.querySelector('.dragging')

        const applyAfter = this.getNewPosition(list, e.clientY)

        if (applyAfter) applyAfter.insertAdjacentElement('afterend', dragging)
        else list.prepend(dragging)
      })
    })
  }

  getNewPosition(ul: Element, posY: number) {
    let result: Element

    const lis = ul.querySelectorAll('.item:not(.dragging)')

    for (const refer_li of lis) {
      const li = refer_li.getBoundingClientRect()

      const liCenterY = li.y + li.height / 2

      if (posY >= liCenterY) result = refer_li
    }

    return result
  }

  onDragEnter(event: DragEvent): void {
    //
  }

  onDrop(event: DragEvent, flag: string): void {
    event.preventDefault()

    if (flag === 'active') {
      if (this.activeUsers.includes(this.draggingItemProps.name)) {
        return
      }

      this.activeUsers.unshift(this.draggingItemProps.name)
      this.inactiveUsers.splice(this.draggingItemProps.index, 1)
    }

    if (flag === 'inactive') {
      if (this.inactiveUsers.includes(this.draggingItemProps.name)) {
        return
      }

      this.inactiveUsers.unshift(this.draggingItemProps.name)
      this.activeUsers.splice(this.draggingItemProps.index, 1)
    }
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault()
  }

  onDragEnd(event: DragEvent) {
    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;(<Element>event.target).classList.remove('dragging')
  }
}
