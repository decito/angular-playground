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

  @Input() size?: 'sm' | 'lg' | 'full' | 'default' = 'default'
  @Input() outline? = false
  @Input() disabled? = false

  classes: string

  outlineToString = () => {
    return this.outline ? 'outlined' : 'solid'
  }

  disabledToString = () => {
    return this.disabled ? 'disabled' : 'enabled'
  }

  ngOnChanges() {
    const classStyles = {
      outlined: {
        disabled: `border-disabled text-disabled`,
        enabled: `border-${this.type} text-${this.type} hover:bg-${this.type} hover:text-white`
      },
      solid: {
        disabled: `border-disabled bg-disabled`,
        enabled: `border-${this.type} bg-${this.type} hover:brightness-110`
      }
    }

    const sizeStyle: Record<typeof this.size, string> = {
      sm: 'p-1',
      lg: 'p-3',
      full: 'p-2 w-full',
      default: 'p-2'
    }

    this.classes = classStyles[this.outlineToString()][this.disabledToString()]
    this.classes += ` ${sizeStyle[this.size]}`
  }
}
