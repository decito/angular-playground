import { TestBed } from '@angular/core/testing'
import { PageNotFoundComponent } from '~/components/page-not-found/page-not-found.component'

describe('PageNotFoundComponent', () => {
  it('should create the app', () => {
    const fixture = TestBed.createComponent(PageNotFoundComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it('should render title', () => {
    const fixture = TestBed.createComponent(PageNotFoundComponent)
    const compiled = fixture.nativeElement
    expect(compiled.querySelector('h1').textContent).toContain('404')
  })
})
