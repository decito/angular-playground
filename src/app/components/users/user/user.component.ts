import { Component, OnDestroy, OnInit } from "@angular/core"
import { ActivatedRoute, Params } from "@angular/router"
import { Subscription } from "rxjs/internal/Subscription"

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number, name: string }

  subscription: Subscription

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }

    this.subscription = this.route.params.subscribe((p: Params) => {
      this.user.id = p['id']
      this.user.name = p['name']
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}