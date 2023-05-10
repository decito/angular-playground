import { ButtonComponent } from '~/components/button/button.component'

describe('ButtonComponent', () => {
  // TESTE QUEBRADO, MUDAR BOTAO TODO

  it('should create the button component', () => {
    const comp = new ButtonComponent()

    expect(comp.classes).toBe(undefined)

    comp.size = 'sm'
    comp.type = 'primary'
    comp.ngOnChanges()

    expect(comp.classes)
      .withContext('on Changes')
      .toBe('border-primary bg-primary hover:brightness-110 p-1')
  })
})
