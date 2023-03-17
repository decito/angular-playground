import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { ServerComponent } from './components/server/server.component'
import { ServersComponent } from './components/servers/servers.component';
import { HeaderComponent } from './components/header/header.component'
import { AssignmentTwoComponent } from './components/assignments/assignment-2/assignment-2.component'

import { HtmlCommentDirective } from './shared/html-comment.directive'
import { AssignmentsComponent } from './components/assignments/assignments.component'
import { AssignmentThreeComponent } from './components/assignments/assignment-3/assignment-3.component'
import { AssignmentFourComponent } from './components/assignments/assignment-4/assignment-4.component'
import { AssignmentFourEvenComponent } from './components/assignments/assignment-4/components/even.component'
import { AssignmentFourOddComponent } from './components/assignments/assignment-4/components/odd.component'
import { AssignmentFourGameControlComponent } from './components/assignments/assignment-4/components/game-control.component'
import { AccountComponent } from './components/accounts/account/account.component'
import { NewAccountComponent } from './components/accounts/new-account/new-account.component'
import { AccountsComponent } from './components/accounts/accounts.component'
import { AssignmentFiveComponent } from './components/assignments/assignment-5/assignment-5.component'
import { AssignmentFiveActiveUsersComponent } from './components/assignments/assignment-5/components/inactive-users.component'
import { AssignmentFiveInactiveUsersComponent } from './components/assignments/assignment-5/components/active-users.component'

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HeaderComponent,
    HtmlCommentDirective,
    AssignmentTwoComponent,
    AssignmentsComponent,
    AssignmentThreeComponent,
    AssignmentFourComponent, AssignmentFourEvenComponent, AssignmentFourOddComponent, AssignmentFourGameControlComponent,
    AccountComponent,
    NewAccountComponent,
    AccountsComponent,
    AssignmentFiveComponent, AssignmentFiveActiveUsersComponent, AssignmentFiveInactiveUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
