import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {ReserveListComponent} from './reserve-list/reserve-list.component';
import {ReserveListGuardGuard} from './reserve-list-guard.guard';
import {adminComponent} from "./caring-admin/contract_form/pre-contract-writing/caring-admin";
import {admin_mainComponent} from  "./caring-admin/admin_main/admin_main.component";
import {ConsultListComponent} from "./consult/consult.component";
import {Yt_mainComponent} from "./yt_main/yt_main.component";
import {CaregiverListComponent} from "./caregiver-list/caregiver-list.component";

const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'list', component: ReserveListComponent, canActivate: [ReserveListGuardGuard]},
    {path: 'admin', component: admin_mainComponent},
    {path: 'consult', component: ConsultListComponent, canActivate: [ReserveListGuardGuard]},
    {path: 'yt', component: Yt_mainComponent},
    {path: 'cg-list', component: CaregiverListComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
