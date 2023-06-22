import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AuthGuard } from '~/routes/guards/auth-guard.service'
import { CanDeativateGuard } from '~/routes/guards/can-deactivate-guard.service'

import { AccountsComponent } from '~/components/accounts/accounts.component'
import { AssignmentsComponent } from '~/components/assignments/assignments.component'
import { ErrorPageComponent } from '~/components/error-page/error-page.component'
import { HttpFormComponent } from '~/components/forms/http-form.component'
import { ServerEditComponent } from '~/components/servers/server/server-edit/server-edit.component'
import { ServerResolver } from '~/routes/resolvers/server-resolver.service'
import { ServersComponent } from '~/components/servers/servers.component'
import { SortableContainerComponent } from '~/components/sortable-list/sortable-container.component'
import { UserComponent } from '~/components/users/user/user.component'
import { UsersComponent } from '~/components/users/users.component'

import { AssignmentTwoComponent } from '~/components/assignments/assignment-2/assignment-2.component'
import { AssignmentThreeComponent } from '~/components/assignments/assignment-3/assignment-3.component'
import { AssignmentFourComponent } from '~/components/assignments/assignment-4/assignment-4.component'
import { AssignmentFiveComponent } from '~/components/assignments/assignment-5/assignment-5.component'
import { AssignmentSixComponent } from '~/components/assignments/assignment-6/assignment-6.component'
import { AssignmentSevenComponent } from '~/components/assignments/assignment-7/assignment-7.component'
import { AssignmentEightComponent } from '~/components/assignments/assignment-8/assignment-8.component'

export const appRoutes: Routes = [
  { path: '', redirectTo: '/sortable-list', pathMatch: 'full' },
  { path: 'accounts', component: AccountsComponent },
  {
    path: 'assignments',
    component: AssignmentsComponent,
    children: [
      { path: '2', component: AssignmentTwoComponent },
      { path: '3', component: AssignmentThreeComponent },
      { path: '4', component: AssignmentFourComponent },
      { path: '5', component: AssignmentFiveComponent },
      { path: '6', component: AssignmentSixComponent },
      { path: '7', component: AssignmentSevenComponent },
      { path: '8', component: AssignmentEightComponent }
    ]
  },
  {
    path: 'forms',
    component: HttpFormComponent
  },
  {
    path: 'servers',
    component: ServersComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: ':id/edit',
        component: ServerEditComponent,
        canDeactivate: [CanDeativateGuard],
        resolve: { server: ServerResolver }
      }
    ]
  },
  { path: 'sortable-list', component: SortableContainerComponent },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: 'Oops... Page not found' }
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':id/:name', component: UserComponent }]
  },
  { path: '**', redirectTo: '/not-found' }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
