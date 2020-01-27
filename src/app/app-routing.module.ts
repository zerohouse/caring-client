import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {ReserveListComponent} from './reserve-list/reserve-list.component';
import {ReserveListGuardGuard} from './reserve-list-guard.guard';


const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'list', component: ReserveListComponent, canActivate: [ReserveListGuardGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
