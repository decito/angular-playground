import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',

  // É válido também tornar o valor do selector '[app-servers]'...
  // ... para então chamá-lo como <div app-servers />, por exemplo.

  // Ou então como classe: '[.app-servers]'
  // <div class=".app-servers" />

  templateUrl: './servers.component.html',

  // É possível também inserir <app-server> no templateUrl e ele irá renderizar o componente diretamente.
  // Assim como é aceito string interpolation (``).

  styleUrls: ['./servers.component.css'],

  // Pode-se inserir outros documentos no array acima...

  // ... ou então declarar diretamente o css como mostrado abaixo.
  // styles: [`h3 {color: darkBlue}`]
})
export class ServersComponent {
  allowNewServer = false
  // serverCreationStatus = 'No server was created.'
  serverName = 'Server name here'
  newServerCreated = false;

  createServer() {
    // this.serverCreationStatus = `A new server has been created with the name ${ this.serverName }`
    this.newServerCreated = true;
  }

  updateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

  constructor() {
    setTimeout(() => this.allowNewServer = true, 2000)
  }
}
