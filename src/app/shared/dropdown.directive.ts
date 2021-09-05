import { Directive, EventEmitter, HostBinding, HostListener, Output } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @Output() clicked = new EventEmitter<void>();
    @HostBinding('class.open') open = false;
    //we are binding to classname 'open' of all classes on the element our directive sits

    @HostListener('click') toggleDropdown() {
        this.open = !this.open;
        this.clicked.emit();
    }
}