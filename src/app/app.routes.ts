import { RouterModule, Routes } from '@angular/router';
import { CalificationsComponent } from './components/califications/califications.component';
import { HomeComponent } from './components/home/home.component';
import { DollarCalculateComponent } from './components/dollar-calculate/dollar-calculate.component';
import { PassageComponent } from './components/passage/passage.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'califications', component: CalificationsComponent },
    { path: 'dollar', component: DollarCalculateComponent },
    { path: 'passage', component: PassageComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const appRouting = RouterModule.forRoot(routes);
