import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class GlobalConstants {

    // Variable declaration
    private showNavigationIndicators: BehaviorSubject<boolean>;
    private showMyContainer: BehaviorSubject<boolean>;

    // Constructor
    constructor() {
        this.showNavigationIndicators = new BehaviorSubject<boolean>(true);
        this.showMyContainer = new BehaviorSubject<boolean>(false);
    }

    // showNavigationIndicators
    getShowNavigationIndicators(): Observable<boolean> {
        return this.showNavigationIndicators.asObservable();
    }
    setShowNavigationIndicators(newValue: boolean): void {
        this.showNavigationIndicators.next(newValue);
    }

    // showMyContainer
    getShowMyContainer(): Observable<boolean> {
        return this.showMyContainer.asObservable();
    }
    setShowMyContainer(newValue: boolean): void {
        this.showMyContainer.next(newValue);
    }


}