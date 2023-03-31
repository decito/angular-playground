import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AuthGuard } from '~/routes/guards/auth-guard.service'
import { CanDeativateGuard } from '~/routes/guards/can-deactivate-guard.service'

import { AccountsComponent } from '~/components/accounts/accounts.component'
import { AssignmentTwoComponent } from '~/components/assignments/assignment-2/assignment-2.component'
import { AssignmentThreeComponent } from '~/components/assignments/assignment-3/assignment-3.component'
import { AssignmentFourComponent } from '~/components/assignments/assignment-4/assignment-4.component'
import { AssignmentFiveComponent } from '~/components/assignments/assignment-5/assignment-5.component'
import { AssignmentsComponent } from '~/components/assignments/assignments.component'
import { PageNotFoundComponent } from '~/components/page-not-found/page-not-found.component'
import { ServerEditComponent } from '~/components/servers/server/server-edit/server-edit.component'
import { ServersComponent } from '~/components/servers/servers.component'
import { UserComponent } from '~/components/users/user/user.component'
import { UsersComponent } from '~/components/users/users.component'

export const appRoutes: Routes = [
  { path: '', redirectTo: '/servers', pathMatch: 'full' },
  { path: 'accounts', component: AccountsComponent },
  {
    path: 'assignments',
    component: AssignmentsComponent,
    children: [
      { path: '2', component: AssignmentTwoComponent },
      { path: '3', component: AssignmentThreeComponent },
      { path: '4', component: AssignmentFourComponent },
      { path: '5', component: AssignmentFiveComponent }
    ]
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':id/:name', component: UserComponent }]
  },
  {
    path: 'servers',
    component: ServersComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: ':id/edit',
        component: ServerEditComponent,
        canDeactivate: [CanDeativateGuard]
      }
    ]
  },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
