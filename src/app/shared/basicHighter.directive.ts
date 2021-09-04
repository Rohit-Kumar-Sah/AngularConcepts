import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]' //we wish to use this directive as attribute on element 
})
export class basicHighlightDirective {
    /* constructor(private theElement: ElementRef) { //angular gives us the element on which directive will sit
     }
     ngOnInit() {
         this.theElement.nativeElement.style.color = "salmon";
     }
    */

    constructor(private renderer: Renderer2, private theElement: ElementRef) { }
    /*
        ngOnInit() {
            this.renderer.setStyle(this.theElement.nativeElement, 'color', 'salmon');
            //(element,property,value,flags such as !important) last parameter is optional
        }
    */
    @Input() defaultColor = 'black'; //setting default 
    @Input() updateToColor = 'pink'; //setting default 
    @HostBinding('style.color') mycol = this.defaultColor;  //setting initial default color;
    @HostListener('mouseenter') inmouse(item: Event) {       //this will change color only when hovered(i.e. mouse enter)
        // this.renderer.setStyle(this.theElement.nativeElement, 'color', 'salmon');
        this.mycol = this.updateToColor;
    }

    @HostListener('mouseleave') outmouse(item: Event) {        //going back to normal color when mouse goes out
        //this.renderer.setStyle(this.theElement.nativeElement, 'color', 'black');
        this.mycol = this.defaultColor;
    }
}