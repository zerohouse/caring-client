import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {ReserveListComponent} from './reserve-list/reserve-list.component';
import {ReserveListGuardGuard} from './reserve-list-guard.guard';
import {adminComponent} from "./caring-admin/contract_form/caring-admin";
import {admin_mainComponent} from  "./caring-admin/admin_main/admin_main.component";


const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'list', component: ReserveListComponent, canActivate: [ReserveListGuardGuard]},
    {path: 'admin', component: adminComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
