import {Component} from '@angular/core';

@Component({
    selector: 'cr-root',
    template: `
        <cr-header></cr-header>
        <router-outlet></router-outlet>
    `,
    styles: []
})
export class AppComponent {
    title = 'caring-client';
}
