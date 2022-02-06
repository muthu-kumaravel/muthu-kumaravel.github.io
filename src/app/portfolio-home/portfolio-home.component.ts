import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';

@Component({
  selector: 'app-portfolio-home',
  templateUrl: './portfolio-home.component.html',
  styleUrls: ['./portfolio-home.component.scss']
})

export class PortfolioHomeComponent implements OnInit {

  // Page Title
  title = 'Muthukumaravel-Portfolio';

  // Variable
  public home: any;
  public resume: any;
  public photography: any;
  public about: any;
  public contact: any;

  // Constructor
  constructor(private global: GlobalConstants) { }

  // Continuous updation fucntions & general init
  ngOnInit(): void {
    this.global.getHome().subscribe((value) => {
      this.home = value;
      console.log("VISIBLE COMPONENT");
      console.log("home: ", this.home);
    });
    this.global.getResume().subscribe((value) => {
      this.resume = value;
      console.log("Resume: ", this.resume);
    });
    this.global.getPhotography().subscribe((value) => {
      this.photography = value;
      console.log("Photography: ", this.photography);
    });
    this.global.getAbout().subscribe((value) => {
      this.about = value;
      console.log("About: ", this.about);
    });
    this.global.getContact().subscribe((value) => {
      this.contact = value;
      console.log("Contact: ", this.contact);
    });
  }

}
