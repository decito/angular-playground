import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-sortable-list-active',
  templateUrl: './sortable-list-active.component.html'
})
export class SortableListActiveComponent {
  @Input() users: string[]
  @Output() userDropped = new EventEmitter<number>()

  onDragStart(event: DragEvent, index: number): void {
    event.dataTransfer?.setData('text/plain', index.toString())
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault()
  }

  onDrop(event: DragEvent): void {
    event.preventDefault()
    const index = parseInt(event.dataTransfer?.getData('text/plain') || '', 10)
    this.userDropped.emit(index)
  }
}
