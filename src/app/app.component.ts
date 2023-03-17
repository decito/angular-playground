import { Component } from '@angular/core'

import { currentRoute } from './shared/routes'

import type { Route } from './shared/routes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  curDisRoute = currentRoute

  displayRoute(r: Route["name"]) {
    this.curDisRoute = r
  }
}
