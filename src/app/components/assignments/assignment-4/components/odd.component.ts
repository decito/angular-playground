import { Component, Input } from "@angular/core"

@Component({
  selector: 'app-assignment-4-odd',
  template: `<p class="text-blue-300">Number - {{ odd }}</p>`
})
export class AssignmentFourOddComponent {
  @Input() odd: number
}