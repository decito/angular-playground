import { TestBed } from '@angular/core/testing'
import { HeaderComponent } from '~/components/header/header.component'

describe('HeaderComponent', () => {
  it('should create the header component', () => {
    const fixture = TestBed.createComponent(HeaderComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it('should have title property', () => {
    const fixture = TestBed.createComponent(HeaderComponent)
    const app = fixture.componentInstance
    expect(app.title).toBeDefined()
  })

  it('should have title property set to Angular Playground', () => {
    const fixture = TestBed.createComponent(HeaderComponent)
    const app = fixture.componentInstance
    expect(app.title).toEqual('Angular Playground')
  })

  // it('should change login status to true')
  // it('should change login status to false')
})
