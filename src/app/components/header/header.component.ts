import { Component, EventEmitter, Output } from "@angular/core"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() curRoute = new EventEmitter<string>()
  title = 'Angular Playground'
  intRoute: string = 'assignments'

  routes: { name: string }[] = [
    { name: 'servers' },
    { name: 'assignments' },
    { name: 'test' },
  ]

  changeRoute(route: string) {
    this.intRoute = route

    this.curRoute.emit(route)
    console.log("🚀 ~ file: header.component.ts:22 ~ HeaderComponent ~ changeRoute ~ route:", route)

  }

  isCurRoute(r: string) {
    return this.intRoute === r
  }
}