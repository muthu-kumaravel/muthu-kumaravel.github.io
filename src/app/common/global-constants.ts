import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class GlobalConstants {

    // Variable declaration
    private showNavigationIndicators: BehaviorSubject<boolean>;
    private showMyContainer: BehaviorSubject<boolean>;
    private mainContentHeight: BehaviorSubject<any>;
    public headerHeight: any = 155;

    // Navigation Boolean
    private home: BehaviorSubject<boolean>;
    private resume: BehaviorSubject<boolean>;
    private photography: BehaviorSubject<boolean>;
    private about: BehaviorSubject<boolean>;
    private contact: BehaviorSubject<boolean>;

    // Constructor
    constructor() {
        this.showNavigationIndicators = new BehaviorSubject<boolean>(true);
        this.showMyContainer = new BehaviorSubject<boolean>(false);

        this.home = new BehaviorSubject<boolean>(true);
        this.resume = new BehaviorSubject<boolean>(false);
        this.photography = new BehaviorSubject<boolean>(false);
        this.about = new BehaviorSubject<boolean>(false);
        this.contact = new BehaviorSubject<boolean>(false);
        
        this.mainContentHeight = new BehaviorSubject<any>(700);
    }

    // Getter & Setter Methods

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

    // home
    getHome(): Observable<boolean> {
        return this.home.asObservable();
    }
    setHome(newValue: boolean): void {
        this.home.next(newValue);
    }

    // resume
    getResume(): Observable<boolean> {
        return this.resume.asObservable();
    }
    setResume(newValue: boolean): void {
        this.resume.next(newValue);
    }

    // photography
    getPhotography(): Observable<boolean> {
        return this.photography.asObservable();
    }
    setPhotography(newValue: boolean): void {
        this.photography.next(newValue);
    }

    // about
    getAbout(): Observable<boolean> {
        return this.about.asObservable();
    }
    setAbout(newValue: boolean): void {
        this.about.next(newValue);
    }

    // contact
    getContact(): Observable<boolean> {
        return this.contact.asObservable();
    }
    setContact(newValue: boolean): void {
        this.contact.next(newValue);
    }

    // mainContentHeight
    getMainContentHeight(): Observable<any> {
        return this.mainContentHeight.asObservable();
    }
    setMainContentHeight(newValue: any): void {
        this.mainContentHeight.next(newValue);
    }


}