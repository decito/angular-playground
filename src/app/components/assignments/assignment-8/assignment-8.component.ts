import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import type { AppServer, ServerStatus } from '~/types'

@Component({
  selector: 'app-assignment-8',
  templateUrl: './assignment-8.component.html'
})
export class AssignmentEightComponent {
  constructor(private route: ActivatedRoute) {}
  assignmentNumber = this.route.snapshot.url

  statusFilter = ''
  statusList: ServerStatus[] = ['stable', 'online', 'offline', 'critical']

  appStatus = new Promise(res => setTimeout(() => res('stable'), 2000))

  servers: AppServer[] = [
    {
      instanceType: 'medium',
      name: 'Production',
      status: 'stable',
      started: new Date()
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date()
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date()
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'critical',
      started: new Date()
    }
  ]

  statusClass(status: ServerStatus) {
    return {
      'card-secondary': status === 'stable',
      'card-success': status === 'online',
      'card-warning': status === 'offline',
      'card-danger': status === 'critical'
    }
  }

  addServer(name: string) {
    this.servers.push({
      instanceType: 'small',
      name: name,
      status: 'online',
      started: new Date()
    })
  }
}
