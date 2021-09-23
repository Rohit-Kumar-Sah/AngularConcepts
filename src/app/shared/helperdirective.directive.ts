import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[helperdirective]'
})
export class HelperDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }

}