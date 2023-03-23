import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component'

import { HtmlCommentDirective } from './shared/html-comment.directive'

import { AccountComponent } from './components/accounts/account/account.component'
import { AccountsComponent } from './components/accounts/accounts.component'
import { AssignmentFiveActiveUsersComponent } from './components/assignments/assignment-5/components/inactive-users.component'
import { AssignmentFiveComponent } from './components/assignments/assignment-5/assignment-5.component'
import { AssignmentFiveInactiveUsersComponent } from './components/assignments/assignment-5/components/active-users.component'
import { AssignmentFourComponent } from './components/assignments/assignment-4/assignment-4.component'
import { AssignmentFourEvenComponent } from './components/assignments/assignment-4/components/even.component'
import { AssignmentFourGameControlComponent } from './components/assignments/assignment-4/components/game-control.component'
import { AssignmentFourOddComponent } from './components/assignments/assignment-4/components/odd.component'
import { AssignmentsComponent } from './components/assignments/assignments.component'
import { AssignmentThreeComponent } from './components/assignments/assignment-3/assignment-3.component'
import { AssignmentTwoComponent } from './components/assignments/assignment-2/assignment-2.component'
import { HeaderComponent } from './components/header/header.component'
import { NewAccountComponent } from './components/accounts/new-account/new-account.component'
import { ServerComponent } from './components/server/server.component'
import { ServersComponent } from './components/servers/servers.component'

export const appRoutes: Routes = [
  { path: 'accounts', component: AccountsComponent },
  {
    path: 'assignments', component: AssignmentsComponent, children: [
      { path: '2', component: AssignmentTwoComponent },
      { path: '3', component: AssignmentThreeComponent },
      { path: '4', component: AssignmentFourComponent },
      { path: '5', component: AssignmentFiveComponent },
    ]
  },
  { path: 'servers', component: ServersComponent },
  { path: '', component: ServersComponent }
]

@NgModule({
  declarations: [
    AccountComponent,
    AccountsComponent,
    AppComponent,
    AssignmentFiveActiveUsersComponent,
    AssignmentFiveComponent,
    AssignmentFiveInactiveUsersComponent,
    AssignmentFourComponent,
    AssignmentFourEvenComponent,
    AssignmentFourGameControlComponent,
    AssignmentFourOddComponent,
    AssignmentsComponent,
    AssignmentThreeComponent,
    AssignmentTwoComponent,
    HeaderComponent,
    HtmlCommentDirective,
    NewAccountComponent,
    ServerComponent,
    ServersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
