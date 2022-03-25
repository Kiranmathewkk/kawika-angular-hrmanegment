import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { CreateProjectComponent } from '../../create-project/create-project.component';
import { ProjectsComponent }   from '../../projects/projects.component';
import { CreateUserComponent } from '../../create-user/create-user.component'
import { UserListComponent } from '../../user-list/user-list.component'

import { AuthGuard } from '../../auth.guard'
export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent,
      canActivate: [AuthGuard] },
    { path: 'user-profile',   component: UserProfileComponent,
     canActivate: [AuthGuard] },
    { path: 'poject-list',     component: TableListComponent,
    canActivate: [AuthGuard] },
    { path: 'typography',     component: TypographyComponent ,
    canActivate: [AuthGuard]},
    { path: 'icons',          component: IconsComponent,
    canActivate: [AuthGuard] },
    { path: 'maps',           component: MapsComponent,
    canActivate: [AuthGuard] },
    { path: 'notifications',  component: NotificationsComponent,
    canActivate: [AuthGuard] },
    { path: 'upgrade',        component: UpgradeComponent, 
    canActivate: [AuthGuard] },
    { path: 'project-creation', component:CreateProjectComponent,
    canActivate: [AuthGuard]},
    { path: 'project/:id',   component:ProjectsComponent,
    canActivate: [AuthGuard]},
    { path:'create-user/:id', component:CreateUserComponent,
    canActivate: [AuthGuard]},
    { path: 'user-list', component:UserListComponent,
    canActivate: [AuthGuard]}
];
