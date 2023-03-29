import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { delay } from 'rxjs/internal/operators/delay'
import { Subscription } from 'rxjs/internal/Subscription'

import { ServersServices } from 'src/app/services/servers.service'

import type { Server } from 'src/app/types/server'

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html'
})
export class ServerEditComponent implements OnInit, OnDestroy {
  server: Server

  newServerName: string

  subscription: Subscription

  constructor(
    private serversService: ServersServices,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.server = this.serversService.getServers(
      parseInt(this.route.snapshot.params['id'], 10)
    ) as Server

    this.subscription = this.route.params
      .pipe(delay(0))
      .subscribe(
        (p: Params) =>
          (this.server = this.serversService.getServers(
            parseInt(p['id'], 10)
          ) as Server)
      )

    this.newServerName = this.server.name
  }

  getColor() {
    return this.serversService.getStatusColor(this.server.id)
  }

  toggleStatus(id: number) {
    this.serversService.toggleStatus(id)
  }

  updateServerName() {
    this.serversService.updateName(this.server.id, this.newServerName)
  }

  deleteServer(id: number) {
    this.serversService.deleteServer(id)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
