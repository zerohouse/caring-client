import {Inject, Injectable, NgZone} from '@angular/core';
import {EVENT_MANAGER_PLUGINS, EventManager} from '@angular/platform-browser';

@Injectable()
export class PointerEventManager extends EventManager {
  constructor(@Inject(EVENT_MANAGER_PLUGINS) plugins: any[], private zone: NgZone) {
    super(plugins, zone);
  }

  addEventListener(element: HTMLElement, eventName: string, handler) {
    if (eventName === 'click') {
      element.style.cursor = 'pointer'; // or add class
    }
    return super.addEventListener(element, eventName, handler);
  }
}

