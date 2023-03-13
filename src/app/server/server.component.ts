import { Component, Input, EventEmitter, Output } from '@angular/core'

import { Server } from 'src/app/types/server'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online { color: green }
    .offline { color: red }
  `]
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

  @Output() serverCreated = new EventEmitter<Server>()

  /* O mesmo caso do @Input() acontece para o @Output().
   *
   * Ex: @Output("serverAdded") serverCreated = new EventEmitter<T>()
   * <app-server [serverAdded]="bar" />
  */

  getServerStatus() {
    return this.server.status
  }

  onCreated() {
    this.serverCreated.emit({ name: this.server.name, id: this.server.id })
  }

  ngOnInit() {
    this.onCreated()

    if (this.server.status === "online") {
      this.server.color = "green"
      return
    }

    if (this.server.status === "offline")
      this.server.color = "red"
  }
}
