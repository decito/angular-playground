import { Component } from '@angular/core'

@Component({
  selector: 'app-sortable-list',
  templateUrl: './sortable-list.component.html'
})
export class SortableListComponent {
  activeUsers: string[] = ['Fulano', 'Sicrano', 'Beltrano']
  inactiveUsers: string[] = ['João', 'Maria', 'Zé da Manga']

  draggingIndex: number

  setActive(index: number): void {
    const user = this.inactiveUsers.splice(index, 1)[0]
    this.activeUsers.push(user)
  }

  setInactive(index: number): void {
    const user = this.activeUsers.splice(index, 1)[0]
    this.inactiveUsers.push(user)
  }

  onDragStart(event: DragEvent, index: number): void {
    // disparado quando o <li> é agarrado
    // disparado uma vez
    this.draggingIndex = index

    console.log('dragstart')
  }

  onDragOver(event: DragEvent): void {
    // disparado toda vez que o <li> passa por cima da <section>
    // disparado varias vezes
    event.preventDefault()

    console.log('dragover')
  }

  onDragEnter(event: DragEvent): void {
    // disparado quando o <li> entra na <section>
    // disparado uma vez
    event.preventDefault()

    console.log('dragenter')
  }

  onDrop(event: DragEvent): void {
    // disparado quando o <li> é solto dentro da <section>
    // disparado uma vez
    event.preventDefault()

    const el = event.target as Element

    const item = el.textContent

    // verifica se o item existe na lista. isso evita criar um <li> fantasma
    if (this.inactiveUsers.some(i => i === item)) console.log('achei')
  }

  onDragEnd(event: DragEvent) {
    // disparado quando solta o <li>
    // disparado uma vez
    event.preventDefault()

    console.log('dragend')
  }
}
