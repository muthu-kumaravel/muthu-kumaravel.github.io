import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class GlobalConstants {

    // Variable declaration
    private showNavigationIndicators: BehaviorSubject<boolean>;
    private showMyContainer: BehaviorSubject<boolean>;
    
    // Footer height adjustment
    public headerHeight: any = 155;
    private homeHeight: BehaviorSubject<any>;
    private resumeHeight: BehaviorSubject<any>;
    private photographyHeight: BehaviorSubject<any>;
    private aboutHeight: BehaviorSubject<any>;
    private contactHeight: BehaviorSubject<any>;
    private actualHeight: BehaviorSubject<any>;

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
        
        this.homeHeight = new BehaviorSubject<any>(700);
        this.resumeHeight = new BehaviorSubject<any>(705);
        this.photographyHeight = new BehaviorSubject<any>(600);
        this.aboutHeight = new BehaviorSubject<any>(400);
        this.contactHeight = new BehaviorSubject<any>(500);
        this.actualHeight = new BehaviorSubject<any>(855);
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

    // homeHeight
    getHomeHeight(): Observable<any> {
        return this.homeHeight.asObservable();
    }
    setHomeHeight(newValue: any): void {
        this.homeHeight.next(newValue);
    }

    // resumeHeight
    getResumeHeight(): Observable<any> {
        return this.resumeHeight.asObservable();
    }
    setResumeHeight(newValue: any): void {
        this.resumeHeight.next(newValue);
    }

    // photographyHeight
    getPhotographyHeight(): Observable<any> {
        return this.photographyHeight.asObservable();
    }
    setPhotographyHeight(newValue: any): void {
        this.photographyHeight.next(newValue);
    }

    // aboutHeight
    getAboutHeight(): Observable<any> {
        return this.aboutHeight.asObservable();
    }
    setAboutHeight(newValue: any): void {
        this.aboutHeight.next(newValue);
    }

    // contactHeight
    getContactHeight(): Observable<any> {
        return this.contactHeight.asObservable();
    }
    setContactHeight(newValue: any): void {
        this.contactHeight.next(newValue);
    }

    // actualHeight
    getActualHeight(): Observable<any> {
        return this.actualHeight.asObservable();
    }
    setActualHeight(newValue: any): void {
        this.actualHeight.next(newValue);
    }


}