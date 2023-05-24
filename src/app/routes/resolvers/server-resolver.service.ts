import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { Observable } from 'rxjs'

import { ServersService } from '~/services/servers.service'

import { Server } from '~/types'

@Injectable({
  providedIn: 'root'
})
export class ServerResolver implements Resolve<Server> {
  constructor(private serverService: ServersService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<Server> | Promise<Server> | Server {
    return this.serverService.getServers(+route.params['id']) as Server
  }
}
