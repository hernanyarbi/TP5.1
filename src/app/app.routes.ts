import { RouterModule, Routes } from '@angular/router';
import { CalificationsComponent } from './components/califications/califications.component';
import { HomeComponent } from './components/home/home.component';
import { DollarCalculateComponent } from './components/dollar-calculate/dollar-calculate.component';
import { PassageComponent } from './components/passage/passage.component';
import { SendTextComponent } from './components/send-text/send-text.component';
import { TestCurseComponent } from './components/test-curse/test-curse.component';
import { BasketSchoolComponent } from './components/basket-school/basket-school.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'califications', component: CalificationsComponent },
	{ path: 'dollar', component: DollarCalculateComponent },
	{ path: 'passage', component: PassageComponent },
	{ path: 'text-message', component: SendTextComponent },
	{ path: 'test', component: TestCurseComponent },
	{ path: 'inscription', component: BasketSchoolComponent },
	{ path: '**', pathMatch: 'full', redirectTo: '' }
];

export const appRouting = RouterModule.forRoot(routes);
