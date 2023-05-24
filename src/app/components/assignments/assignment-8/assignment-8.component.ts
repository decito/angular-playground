import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

interface Server {
  instanceType: string
  name: string
  status: string
  started: Date
}

@Component({
  selector: 'app-assignment-8',
  templateUrl: './assignment-8.component.html'
})
export class AssignmentEightComponent {
  constructor(private route: ActivatedRoute) {}
  assignmentNumber = this.route.snapshot.url

  filteredStatus: string

  appStatus = new Promise(res => setTimeout(() => res('stable'), 2000))

  servers: Server[] = [
    {
      instanceType: 'medium',
      name: 'Production',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  ]

  getStatusClasses(server: Server) {
    return {
      'bg-success/30': server.status === 'stable',
      'bg-warning': server.status === 'offline',
      'bg-danger': server.status === 'critical'
    }
  }

  addServer(name: string) {
    this.servers.push({
      instanceType: 'small',
      name: name,
      status: 'stable',
      started: new Date(15, 1, 2017)
    })
  }
}
