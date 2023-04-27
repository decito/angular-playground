import { Component, OnInit } from '@angular/core'
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-assignment-7',
  templateUrl: './assignment-7.component.html'
})
export class AssignmentSevenComponent implements OnInit {
  signupForm: FormGroup
  genders = ['Male', 'Female']
  forbiddenUsernames = ['Michael', 'Jackson']

  constructor(private route: ActivatedRoute) {}
  assignmentNumber = this.route.snapshot.url

  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        this.forbiddenNames.bind(this)
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl('Male'),
      hobbies: new FormArray([])
    })
  }

  onSubmit() {
    console.info(this.signupForm)
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required)

    ;(<FormArray>this.signupForm.get('hobbies')).push(control)
  }

  getControls(control: string) {
    return (<FormArray>this.signupForm.get(control)).controls
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true }
    }

    return null
  }
}
