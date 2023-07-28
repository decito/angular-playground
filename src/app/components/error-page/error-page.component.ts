import { Location } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Data } from '@angular/router'

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html'
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    // this.errorMessage = this.route.snapshot.data['message']

    this.route.data.subscribe((d: Data) => (this.errorMessage = d['message']))
  }

  goBack() {
    this.location.back()
  }
}
