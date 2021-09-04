import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]' //we wish to use this directive as attribute on element 
})
export class basicHighlightDirective implements OnInit {
    /* constructor(private theElement: ElementRef) { //angular gives us the element on which directive will sit
     }
     ngOnInit() {
         this.theElement.nativeElement.style.color = "salmon";
     }
    */

    constructor(private renderer: Renderer2, private theElement: ElementRef) { }

    ngOnInit() {
        this.renderer.setStyle(this.theElement.nativeElement, 'color', 'salmon');
        //(element,property,value,flags such as !important) last parameter is optional
    }
}