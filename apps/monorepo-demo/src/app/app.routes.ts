import { Route } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { SettingsComponent } from './admin/settings/settings.component';
import { ExitGuard } from './guards/exit.guard';
import { UserResolver } from './resolver/user.resolver';

export const appRoutes: Route[] = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [{
            path: 'settings', component: SettingsComponent
        }],
    },
    {
        path: 'user',
        component: UserComponent,
        resolve: { users: UserResolver },
        canDeactivate: [ExitGuard],
        loadChildren: () => import('./user/user.module').then(m => m.UserModule) // Lazy Loading
    },
    {
        path: 'login',
        component: LoginComponent
    },
];
