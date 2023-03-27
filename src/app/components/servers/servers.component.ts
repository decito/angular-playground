import { Component, OnInit } from '@angular/core'

import { ServersServices } from 'src/app/services/servers.service'

import type { Server } from 'src/app/types/server'

@Component({
  selector: 'app-servers',

  /* É válido também tornar o valor do selector igual a '[app-servers]',
   * tornando-o uma diretiva.
   * Para usar no formato de diretiva, pode-se usar <div app-servers />
   * em um outro componente, por exemplo.
   *
   * Ou então tornar seu valor com sendo '[.app-servers]'.
   * Ao fazer isso, o selector ganha valor de classe,
   * podendo ser chamado assim, por exemplo: <div class=".app-servers" />
  */

  templateUrl: './servers.component.html',

  /* É possível também informar diretamente o valor do template
   * utilizando a propriedade template. Neste caso, um exemplo seria:
   * template: '<app-server></app-server><app-server></app-server>'.
   * É possível informar utilizando string interpolation (`) neste caso.
  */

  /**/

  /* Para estilizar, tem duas formas:
   * a primeira é utilizando o caminho para a folha de estilo
   * com a propriedade styleUrls.
   * Ex: ['./servers.component.css'],
   *
   * a segunda é informando diretamente o css inline
   * com a propriedade styles.
   * Ex: styles: [`h3 {color: darkBlue}`]
   */
})
export class ServersComponent implements OnInit {
  allowNewServer = false
  // serverCreationStatus = 'No server was created.'
  newServerName = 'Test'
  newServerCreated = false

  serverList: Server[]

  constructor(private serversService: ServersServices) {
    setTimeout(() => this.allowNewServer = true, 2000)
  }

  ngOnInit() {
    this.serverList = this.serversService.getServers() as Server[]
  }

  createServer() {
    const name = this.newServerName
    const status = 'offline'

    this.serversService.createServer(name, status)

    this.newServerCreated = true

    setTimeout(() => this.newServerCreated = false, 2000)
  }


  updateServerName(event: Event) {
    this.newServerName = (<HTMLInputElement>event.target).value
  }
}
