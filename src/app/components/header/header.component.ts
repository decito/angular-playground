import { Component, EventEmitter, Input, Output } from "@angular/core"

import { routes } from "src/app/shared/routes"

import type { Route } from "src/app/shared/routes"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() curRoute = new EventEmitter<Route["name"]>()
  title = 'Angular Playground'
  @Input() intRoute: Route["name"]

  routes = routes

  changeRoute(route: Route["name"]) {
    this.intRoute = route

    this.curRoute.emit(route)
  }

  isCurRoute(r: Route["name"]) {
    return this.intRoute === r
  }
}