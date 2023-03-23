import { Component, Input } from '@angular/core'
import { ServersServices } from 'src/app/services/servers.service'

import { Server } from 'src/app/types/server'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  @Input() server: Server

  /* É possível também informar um nome diferente do declarado após o @Input().
   * Para isso, basta informé-lo na função do @Input()
   *
   * Ex: @Input("newServer") server: Server
   *
   * Neste caso, ao declarar a propriedade do <app-server>, deve-se
   * utilizar como sendo:
   *
   * <app-server [newServer]="foo" />
  */

  constructor(private serversService: ServersServices) { }

  /* O mesmo caso do @Input() acontece para o @Output().
   *
   * Ex: @Output("serverAdded") serverCreated = new EventEmitter<T>()
   * <app-server [serverAdded]="bar" />
  */

  getColor() {
    return this.serversService.getStatusColor(this.server.id)
  }

  toggleStatus() {
    this.serversService.toggleStatus(this.server.id)
  }
}
