import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs/internal/Observable'

@Component({
  selector: 'app-assignment-7',
  templateUrl: './assignment-7.component.html'
})
export class AssignmentSevenComponent implements OnInit {
  signupForm: FormGroup
  projectStatus = ['Stable', 'Critical', 'Finished']
  forbiddenProjectNames = ['Test']

  constructor(private route: ActivatedRoute) {}
  assignmentNumber = this.route.snapshot.url

  ngOnInit() {
    this.signupForm = new FormGroup({
      projectName: new FormControl(
        null,
        [Validators.required],
        this.forbiddenNames.bind(this)
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl(['Critical'])
    })
  }

  onSubmit() {
    console.info(this.signupForm.value)
  }

  forbiddenNames(control: FormControl): Promise<unknown> | Observable<unknown> {
    const promise = new Promise(resolve =>
      setTimeout(
        () =>
          this.forbiddenProjectNames.indexOf(control.value) !== -1
            ? resolve({ projectNameIsForbidden: true })
            : resolve(null),
        1500
      )
    )

    return promise
  }
}
