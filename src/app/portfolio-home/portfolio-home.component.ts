import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';

@Component({
  selector: 'app-portfolio-home',
  templateUrl: './portfolio-home.component.html',
  styleUrls: ['./portfolio-home.component.scss']
})

export class PortfolioHomeComponent implements AfterViewInit {

  // Page Title
  title = 'Muthukumaravel-Portfolio';

  // Variable
  public showMyContainer: any = false;

  public home: any;
  public resume: any;
  public photography: any;
  public about: any;
  public contact: any;

  private homeHeight: number;
  private resumeHeight: number;
  private photographyHeight: number;
  private aboutHeight: number;
  private contactHeight: number;

  // Constructor
  constructor(private global: GlobalConstants) {
    this.home = true;
    this.resume = false;
    this.photography = false;
    this.about = false;
    this.contact = false;
    this.homeHeight = 700;
    this.resumeHeight = 700;
    this.photographyHeight = 1118;
    this.aboutHeight = 400;
    this.contactHeight = 500;
  }

  // Continuous updation fucntions & general init
  ngAfterViewInit(): void {

    this.global.getShowMyContainer().subscribe((value) => {
      this.showMyContainer = value;
    });

    this.global.getHomeHeight().subscribe((value) => {
      this.homeHeight = value;
      if (this.home == true) {
        this.updateMainHeight(this.homeHeight);
      }
    });
    this.global.getResumeHeight().subscribe((value) => {
      this.resumeHeight = value;
      if (this.resume == true) {
        this.updateMainHeight(this.resumeHeight);
      }
    });
    this.global.getPhotographyHeight().subscribe((value) => {
      this.photographyHeight = value;
      if (this.photography == true) {
        this.updateMainHeight(this.photographyHeight);
      }
    });
    this.global.getAboutHeight().subscribe((value) => {
      this.aboutHeight = value;
      if (this.about == true) {
        this.updateMainHeight(this.aboutHeight);
      }
    });
    this.global.getContactHeight().subscribe((value) => {
      this.contactHeight = value;
      if (this.contact == true) {
        this.updateMainHeight(this.contactHeight);
      }
    });

    this.global.getHome().subscribe((value) => {
      this.home = value;
      console.log("VISIBLE COMPONENT");
      console.log("home: ", this.home);
      if (this.home == true) {
        this.updateMainHeight(this.homeHeight);
      }
    });
    this.global.getResume().subscribe((value) => {
      this.resume = value;
      console.log("Resume: ", this.resume);
      if (this.resume == true) {
        this.updateMainHeight(this.resumeHeight);
      }
    });
    this.global.getPhotography().subscribe((value) => {
      this.photography = value;
      console.log("Photography: ", this.photography);
      if (this.photography == true) {
        this.updateMainHeight(this.photographyHeight);
      }
    });
    this.global.getAbout().subscribe((value) => {
      this.about = value;
      console.log("About: ", this.about);
      if (this.about == true) {
        this.updateMainHeight(this.aboutHeight);
      }
    });
    this.global.getContact().subscribe((value) => {
      this.contact = value;
      console.log("Contact: ", this.contact);
      if (this.contact == true) {
        this.updateMainHeight(this.contactHeight);
      }
    });
  }

  updateMainHeight(value: number) {
    var finalHeight = value;
    this.global.setActualHeight(finalHeight);
  }

}
