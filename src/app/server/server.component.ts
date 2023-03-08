import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline'
  statusColor = 'red'

  constructor() {
    const num = Math.random()

    if (num > 0.5) {
      this.serverStatus = 'online'
      this.statusColor = 'green'
    }
  }

  getServerStatus() {
    return this.serverStatus;
  }
}
