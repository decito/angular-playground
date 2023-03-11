import { Component, Input } from '@angular/core';

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

  getServerStatus() {
    return this.server.status;
  }

  ngOnInit() {
    if (this.server.status === "online") {
      this.server.color = "green"
      return
    }

    if (this.server.status === "offline")
      this.server.color = "red"
  }
}
