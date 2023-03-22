import { Component } from "@angular/core"
import { appRoutes } from "src/app/app.module"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  title = 'Angular Playground'

  routes = appRoutes.slice(0, -1)
}