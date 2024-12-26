import { Route } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';

export const appRoutes: Route[] = [
    {
        path: 'admin',
        component: AdminComponent,
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) // Lazy Loading
    },
    {
        path: 'user',
        component: UserComponent,
        loadChildren: () => import('./user/user.module').then(m => m.UserModule) // Lazy Loading
    },
];
