import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";


export interface ourDeactivateInterface {
    ourDeactivateFunction: () => Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable({
    providedIn: 'root'
})
export class canDeactivateGuard implements CanDeactivate<ourDeactivateInterface>{
    canDeactivate(component: ourDeactivateInterface, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return component.ourDeactivateFunction();
    }

}
