import { Component, Input, OnChanges } from '@angular/core'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnChanges {
  @Input() text: string

  @Input() type:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'disabled' = 'primary'

  @Input() size?: 'sm' | 'lg' | 'full'
  @Input() outline? = false
  @Input() disabled? = false

  classes: string

  ngOnChanges() {
    switch (this.outline) {
      case true:
        this.disabled
          ? (this.classes = `border-disabled text-disabled`)
          : (this.classes = `border-${this.type} text-${this.type} hover:bg-${this.type} hover:text-white`)
        break

      default:
        this.disabled
          ? (this.classes = `border-disabled bg-disabled`)
          : (this.classes = `border-${this.type} bg-${this.type} hover:brightness-110`)
    }

    switch (this.size) {
      case 'full':
        this.classes += ' w-full'
        break

      default:
        this.classes += ` ${this.size}`
    }
  }
}
