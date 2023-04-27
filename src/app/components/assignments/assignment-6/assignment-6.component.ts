import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  ViewChild
} from '@angular/core'
import { NgForm } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-assignment-6',
  templateUrl: './assignment-6.component.html'
})
export class AssignmentSixComponent implements AfterContentChecked {
  @ViewChild('f') form: NgForm

  subscriptionTypes = ['Basic', 'Advanced', 'Pro']

  constructor(
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef
  ) {}
  assignmentNumber = this.route.snapshot.url

  foo() {
    console.log(this.form.value)
  }

  ngAfterContentChecked(): void {
    this.cdRef.detectChanges()
  }
}
