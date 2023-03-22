import { Directive, ViewContainerRef } from "@angular/core"

@Directive({
  selector: 'template-comment'
})
export class HtmlCommentDirective {
  constructor(private vcRef: ViewContainerRef) {
    this.vcRef.clear()
  }
}