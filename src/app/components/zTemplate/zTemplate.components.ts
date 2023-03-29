import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core'
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'
// import { delay } from 'rxjs/internal/operators/delay'
import { Subscription } from 'rxjs/internal/Subscription'

@Component({
  selector: 'app-template',

  /* É válido também tornar o valor do selector igual a '[app-servers]',
   * tornando-o uma diretiva.
   * Para usar no formato de diretiva, pode-se usar <div app-servers />
   * em um outro componente, por exemplo.
   *
   * Ou então tornar seu valor com sendo '[.app-servers]'.
   * Ao fazer isso, o selector ganha valor de classe,
   * podendo ser chamado assim, por exemplo: <div class=".app-servers" />
   */

  template: `
    <h1>Hello World</h1>
    <!-- <router-outlet (activate)="onLoaded($event)"></router-outlet> -->
  `,

  /* Aqui também pode-se utilizar string interpolation (``).
   * É possível também informar o valor do templateUrl
   * que irá carregar o HTML de um arquivo externo.
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
export class TemplateComponent implements OnInit, OnDestroy {
  @Input() foo: string

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

  @Output() bar = new EventEmitter<number>()

  /* O mesmo caso do @Input() acontece para o @Output().
   *
   * Ex: @Output("serverAdded") serverCreated = new EventEmitter<T>()
   * <app-server [serverAdded]="bar" />
   */

  subscription: Subscription
  itemLoaded = new BehaviorSubject(false)

  constructor() {
    // Insira o serviço no escopo do construtor
  }

  ngOnInit() {
    console.info()

    // this.subscription = this.servico.pipe(delay(0)).subscribe(u => (this.itemLoaded = u))
  }

  /*
  onLoaded(e) {
    e.foo = this.itemLoaded
  }

  onClick() {
    // Angular verifica que eu já estou na rota 'routes', por isso ele não recarrega a rota.

    this.router.navigate(['servers'], { queryParams: { reloaded: true } })
  }
  */

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
