import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]' //we wish to use this directive as attribute on element 
})
export class basicHighlightDirective implements OnInit {
    constructor(private theElement: ElementRef) { //angular gives us the element on which directive will sit

    }

    ngOnInit() {
        this.theElement.nativeElement.style.color = "salmon";
    }
}