import { Component, ViewChild, ViewContainerRef, AfterViewInit, ComponentFactoryResolver } from '@angular/core';
import { MyAppComponent } from 'remoteApp/Component';
@Component({
  selector: 'app-root',
  template: `<ng-template #dynamicContainer></ng-template>`,
})
export class RootAppComponent implements AfterViewInit {
  @ViewChild('dynamicContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    const factory = this.resolver.resolveComponentFactory(MyAppComponent);
    this.container.createComponent(factory);
  }
}