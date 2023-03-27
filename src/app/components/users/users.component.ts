import { Component } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent {
  users = [
    { id: 1, name: 'Foo' },
    { id: 2, name: 'Bar' },
    { id: 3, name: 'Viz' }
  ]

  constructor(private router: Router, private route: ActivatedRoute) { }

  onClick() {
    this.router.navigate(['/servers'])
  }

  reloadPage() {
    // Angular verifica que eu já estou na rota 'routes', por isso ele não recarrega a rota.
    this.router.navigate(['users'], { queryParams: { 'reloaded': true } })
  }

  brokenReloadPage() {
    this.router.navigate(['users'], { relativeTo: this.route })
  }
}