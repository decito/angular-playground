import {
  Component,
  Input,
  EventEmitter,
  Output,
  SimpleChanges,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core'

import { Server } from 'src/app/types/server'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online { color: green }
    .offline { color: red }
  `]
})
export class ServerComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
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

  @Output() serverDeleted = new EventEmitter<Server>()
  @Output() serverToggled = new EventEmitter<Server>()

  /* O mesmo caso do @Input() acontece para o @Output().
   *
   * Ex: @Output("serverAdded") serverCreated = new EventEmitter<T>()
   * <app-server [serverAdded]="bar" />
  */

  getServerStatus() {
    return this.server.status
  }

  deleteServer() {
    this.serverDeleted.emit({ name: this.server.name, id: this.server.id })
  }

  toggleState() {
    this.serverToggled.emit({ name: this.server.name, id: this.server.id, status: this.server.status })

    if (this.server.status === 'online') {
      this.server.status = 'offline'
      this.server.color = 'red'
    } else {
      this.server.status = 'online'
      this.server.color = 'green'
    }
  }

  ngOnInit() {
    console.log('ngOnInit fired')

    if (this.server.status === "online") {
      this.server.color = "green"
      return
    }

    if (this.server.status === "offline")
      this.server.color = "red"
  }

  constructor() {
    console.log('constructor fired')
  }

  ngOnChanges(c: SimpleChanges) {
    console.log('ngOnChanges fired')
    console.log(c)
  }

  ngDoCheck() {
    console.log('ngDoCheck fired')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit fired')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked fired')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit fired')
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked fired')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy fired')
  }
}
