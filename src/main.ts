import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));

declare global {
    interface Array<T> {
        last(): T;

        remove(el: T): void;

        removeAll(el: T[]): void;

        pushAll(array: T[]): void;

        random(): T;
    }
}

Array.prototype.remove = function (el) {
    if (!this.includes(el)) {
        return;
    }
    this.splice(this.indexOf(el), 1);
};

Array.prototype.removeAll = function (el: any[]) {
    el.forEach(e => this.remove(e));
};


Array.prototype.pushAll = function (array: any[]) {
    if (!array || !array.forEach) {
        return;
    }
    array.forEach(each => {
        this.push(each);
    });
};

Array.prototype.last = function () {
    return this[this.length - 1];
};

Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
};
