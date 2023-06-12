import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'

import { AppRoutingModule } from '~/routes/app-routing.module'

import { HtmlCommentDirective } from '~/shared/html-comment.directive'

import { ReversePipe } from '~/pipes/reverse.pipe'
import { SortPipe } from '~/pipes/sort.pipe'
import { FilterPipe } from '~/pipes/filter.pipe'
import { ShortenPipe } from '~/pipes/shorten.pipe'

import { AccountComponent } from '~/components/accounts/account/account.component'
import { AccountsComponent } from '~/components/accounts/accounts.component'
import { AssignmentsComponent } from '~/components/assignments/assignments.component'
import { ButtonComponent } from '~/components/button/button.component'
import { ErrorPageComponent } from './components/error-page/error-page.component'
import { HeaderComponent } from '~/components/header/header.component'
import { HttpFormComponent } from './components/forms/http-form.component'
import { NewAccountComponent } from '~/components/accounts/new-account/new-account.component'
import { PageNotFoundComponent } from '~/components/page-not-found/page-not-found.component'
import { ServerComponent } from '~/components/servers/server/server.component'
import { ServerEditComponent } from '~/components/servers/server/server-edit/server-edit.component'
import { ServersComponent } from '~/components/servers/servers.component'
import { SortableListComponent } from './components/sortable-list/sortable-list.component'
import { SortableListActiveComponent } from '~/components/sortable-list/components/sortable-list-active.component'
import { SortableListInactiveComponent } from '~/components/sortable-list/components/sortable-list-inactive.component'
import { UserComponent } from '~/components/users/user/user.component'
import { UsersComponent } from '~/components/users/users.component'

import { AssignmentTwoComponent } from '~/components/assignments/assignment-2/assignment-2.component'
import { AssignmentThreeComponent } from '~/components/assignments/assignment-3/assignment-3.component'
import { AssignmentFourComponent } from '~/components/assignments/assignment-4/assignment-4.component'
import { AssignmentFourGameControlComponent } from '~/components/assignments/assignment-4/components/game-control.component'
import { AssignmentFourEvenComponent } from '~/components/assignments/assignment-4/components/even.component'
import { AssignmentFourOddComponent } from '~/components/assignments/assignment-4/components/odd.component'
import { AssignmentFiveComponent } from '~/components/assignments/assignment-5/assignment-5.component'
import { AssignmentFiveActiveUsersComponent } from '~/components/assignments/assignment-5/components/active-users.component'
import { AssignmentFiveInactiveUsersComponent } from '~/components/assignments/assignment-5/components/inactive-users.component'
import { AssignmentSixComponent } from '~/components/assignments/assignment-6/assignment-6.component'
import { AssignmentSevenComponent } from '~/components/assignments/assignment-7/assignment-7.component'
import { AssignmentEightComponent } from '~/components/assignments/assignment-8/assignment-8.component'

@NgModule({
  declarations: [
    HtmlCommentDirective,
    ReversePipe,
    SortPipe,
    FilterPipe,
    ShortenPipe,
    AccountComponent,
    AccountsComponent,
    AppComponent,
    ButtonComponent,
    ErrorPageComponent,
    HeaderComponent,
    HttpFormComponent,
    NewAccountComponent,
    PageNotFoundComponent,
    ServerComponent,
    ServerEditComponent,
    ServersComponent,
    SortableListActiveComponent,
    SortableListComponent,
    SortableListInactiveComponent,
    UserComponent,
    UsersComponent,
    AssignmentsComponent,
    AssignmentTwoComponent,
    AssignmentThreeComponent,
    AssignmentFourComponent,
    AssignmentFourGameControlComponent,
    AssignmentFourEvenComponent,
    AssignmentFourOddComponent,
    AssignmentFiveComponent,
    AssignmentFiveActiveUsersComponent,
    AssignmentFiveInactiveUsersComponent,
    AssignmentSixComponent,
    AssignmentSevenComponent,
    AssignmentEightComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
