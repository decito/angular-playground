import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-assignment-4-even',
  template: `<p class="text-yellow-300">Number - {{ even }}</p>`
})
export class AssignmentFourEvenComponent {
  @Input() even: number
}
