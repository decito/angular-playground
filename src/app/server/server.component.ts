import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online { color: green }
    .offline { color: red }
  `]
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline'
  statusColor = 'red'

  constructor() {
    if (Math.random() > 0.5) {
      this.serverStatus = 'online'
      this.statusColor = 'green'
    }
  }

  getServerStatus() {
    return this.serverStatus;
  }
}
