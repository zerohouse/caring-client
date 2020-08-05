import {Component} from '@angular/core';

@Component({
    selector: 'cr-root',
    template: `
        <router-outlet></router-outlet>
    `,
    styles: []
})
export class AppComponent {
    title = 'caring-client';
}
