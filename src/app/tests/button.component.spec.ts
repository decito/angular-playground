import { ButtonComponent } from '~/components/button/button.component'

describe('ButtonComponent', () => {
  it('should create the button component', () => {
    const comp = new ButtonComponent()

    expect(comp.classes).toBe(undefined)

    comp.size = 'sm'
    comp.type = 'button'
    comp.variant = 'success'
    comp.ngOnChanges()

    expect(comp.classes).withContext('on Changes').toBe('sm success')
  })
})
