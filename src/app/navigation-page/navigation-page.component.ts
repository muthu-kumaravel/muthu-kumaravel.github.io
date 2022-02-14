import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-navigation-page',
  templateUrl: './navigation-page.component.html',
  styleUrls: ['./navigation-page.component.scss']
})
export class NavigationPageComponent implements OnInit {

  // Variable declaration
  public showMyContainer: any;
  public showNavigationIndicators: any;
  resume_link = "https://drive.google.com/file/d/1KeyFXt1ChDnakZRocEtWeskL9jWt_Eef/view?usp=sharing";

  // Constructor
  constructor(private global: GlobalConstants) { }

  // Continuous updation fucntions & general init
  ngOnInit(): void {

    this.global.getShowMyContainer().subscribe((value) => {
      this.showMyContainer = value;
    });

    this.global.getShowNavigationIndicators().subscribe((value) => {
      this.showNavigationIndicators = value;
    });

  }

  // General Update functions
  updateFunc(index: any): void {
    this.showMyContainer = !this.showMyContainer;
    this.showNavigationIndicators = !this.showNavigationIndicators;
    this.global.setShowNavigationIndicators(this.showNavigationIndicators);
    this.global.setShowMyContainer(this.showMyContainer);
    if (index == 0) {
      console.log("\nClosed navigation, keep selection.")
    }
    if (index == 1) {
      console.log("\nActivate Home");
      this.setForHome();
    }
    if (index == 2) {
      console.log("\nActivate Resume");
      this.setForResume();
    }
    if (index == 3) {
      console.log("\nActivate Photography");
      this.setForPhotography();
    }
    if (index == 4) {
      console.log("\nActivate About");
      this.setForAbout();
    }
    if (index == 5) {
      console.log("\nActivate Contact");
      this.setForContact();
    }
  }

  setForHome(): void {
    this.global.setHome(true);
    this.global.setResume(false);
    this.global.setPhotography(false);
    this.global.setAbout(false);
    this.global.setContact(false);
  }

  setForResume(): void {
    this.global.setHome(false);
    this.global.setResume(true);
    this.global.setPhotography(false);
    this.global.setAbout(false);
    this.global.setContact(false);
  }

  setForPhotography(): void {
    this.global.setHome(false);
    this.global.setResume(false);
    this.global.setPhotography(true);
    this.global.setAbout(false);
    this.global.setContact(false);
  }

  setForAbout(): void {
    this.global.setHome(false);
    this.global.setResume(false);
    this.global.setPhotography(false);
    this.global.setAbout(true);
    this.global.setContact(false);
  }

  setForContact(): void {
    this.global.setHome(false);
    this.global.setResume(false);
    this.global.setPhotography(false);
    this.global.setAbout(false);
    this.global.setContact(true);
  }

  // Go to resume
  goToLink(url: string) {
    window.open(this.resume_link, "_blank");
  }

}
