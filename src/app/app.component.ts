import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  curDisRoute: string = 'servers'

  displayRoute(r: string) {
    this.curDisRoute = r
  }
}
