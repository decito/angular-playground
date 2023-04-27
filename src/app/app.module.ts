import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'

import { AppRoutingModule } from '~/routes/app-routing.module'

import { HtmlCommentDirective } from '~/shared/html-comment.directive'

import { AccountComponent } from '~/components/accounts/account/account.component'
import { AccountsComponent } from '~/components/accounts/accounts.component'
import { AssignmentFiveActiveUsersComponent } from '~/components/assignments/assignment-5/components/inactive-users.component'
import { AssignmentFiveComponent } from '~/components/assignments/assignment-5/assignment-5.component'
import { AssignmentFiveInactiveUsersComponent } from '~/components/assignments/assignment-5/components/active-users.component'
import { AssignmentFourComponent } from '~/components/assignments/assignment-4/assignment-4.component'
import { AssignmentFourEvenComponent } from '~/components/assignments/assignment-4/components/even.component'
import { AssignmentFourGameControlComponent } from '~/components/assignments/assignment-4/components/game-control.component'
import { AssignmentFourOddComponent } from '~/components/assignments/assignment-4/components/odd.component'
import { AssignmentsComponent } from '~/components/assignments/assignments.component'
import { AssignmentThreeComponent } from '~/components/assignments/assignment-3/assignment-3.component'
import { AssignmentTwoComponent } from '~/components/assignments/assignment-2/assignment-2.component'
import { ButtonComponent } from '~/components/button/button.component'
import { ErrorPageComponent } from './components/error-page/error-page.component'
import { HeaderComponent } from '~/components/header/header.component'
import { NewAccountComponent } from '~/components/accounts/new-account/new-account.component'
import { PageNotFoundComponent } from '~/components/page-not-found/page-not-found.component'
import { ServerComponent } from '~/components/servers/server/server.component'
import { ServerEditComponent } from '~/components/servers/server/server-edit/server-edit.component'
import { ServersComponent } from '~/components/servers/servers.component'
import { UserComponent } from '~/components/users/user/user.component'
import { UsersComponent } from '~/components/users/users.component'
import { AssignmentSixComponent } from '~/components/assignments/assignment-6/assignment-6.component'

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
    AssignmentSixComponent,
    ButtonComponent,
    HeaderComponent,
    HtmlCommentDirective,
    NewAccountComponent,
    PageNotFoundComponent,
    ServerComponent,
    ServerEditComponent,
    ServersComponent,
    UserComponent,
    UsersComponent,
    ErrorPageComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
