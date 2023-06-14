import { Component } from '@angular/core'

@Component({
  selector: 'app-sortable-list',
  templateUrl: './sortable-list.component.html'
})
export class SortableListComponent {
  activeUsers: string[] = ['Fulano', 'Sicrano', 'Beltrano', 'Jaimerson']
  inactiveUsers: string[] = ['João', 'Maria', 'Zé da Manga']

  draggingItem: { index: number; name: string }

  onDragStart(event: DragEvent, index: number): void {
    this.draggingItem = {
      index: index,
      name: (<Element>event.target).textContent
    }

    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;(<Element>event.target).classList.add('dragging')
  }

  onDragOver(event: DragEvent, flag: string): void {
    /*
     * disparado toda vez que o <li> passa por cima da <section>
     * disparado varias vezes
     */
    event.preventDefault()
    // let result

    // const columns = document.querySelectorAll('.sortable-list')

    // /*console.log(columns)
    //  * 0: ul.sortable-list.flex.flex-col.gap-4
    //  * 1: ul.sortable-list.flex.flex-col.gap-4
    //  * length: 2
    //  * [[Prototype]]: NodeList
    // */

    // const items = columns.querySelectorAll(
    //   '.item:not(.dragging)'
    // ) as unknown as Element[]

    // for (const refer_item of items) {
    //   const box = refer_item.getBoundingClientRect()

    //   const boxCenterY = box.y + box.height / 2

    //   if (event.clientY >= boxCenterY) result = refer_item
    // }

    // if (result) {
    //   result.insertAdjacentElement('afterend', event)
    // } else {
    //   columns.prepend(event)
    // }
  }

  onDragEnter(event: DragEvent): void {
    /*
     * disparado quando o <li> entra na <section>
     * disparado uma vez
     */
    event.preventDefault()
  }

  onDrop(event: DragEvent, flag: string): void {
    // event.preventDefault()

    if (flag === 'active') {
      if (this.activeUsers.includes(this.draggingItem.name)) return

      this.activeUsers.push(this.draggingItem.name)
      this.inactiveUsers.splice(this.draggingItem.index, 1)
    }

    if (flag === 'inactive') {
      if (this.inactiveUsers.includes(this.draggingItem.name)) return

      this.inactiveUsers.push(this.draggingItem.name)
      this.activeUsers.splice(this.draggingItem.index, 1)
    }
  }

  onDragLeave(event: DragEvent) {
    // event.preventDefault()
  }

  onDragEnd(event: DragEvent) {
    /*
     * disparado quando solta o <li>
     * disparado uma vez
     */
    // event.preventDefault()

    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;(<Element>event.target).classList.remove('dragging')
  }
}
