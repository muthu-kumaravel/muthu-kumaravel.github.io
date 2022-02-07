import { Component, OnInit, HostListener } from '@angular/core';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // Variable declaration
  public innerWidth: any;
  mail_id = "mkumaravel07@gmail.com";
  phone_no = "TEL: +91 - 9876 54321";
  width_threshold = 700;
  copyright_info = "© 2022 By Muthukumaravel Muthuraman";
  insta_link = "https://www.instagram.com/muthu_kumaravel/";
  in_link = "https://www.linkedin.com/in/muthukumaravel/";
  github_link = "https://github.com/muthu-kumaravel";
  insta_logo = "../../assets/insta.png";
  github_logo = "../../assets/GitHub-Mark-120px-plus.png";
  linkedin_logo = "../../assets/new_linedin.png";
  public margin_top: any;
  public mainContentHeight: any;
  // Constructor
  constructor(private global: GlobalConstants) { }

  // Continuous updation fucntions & general init
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;

    this.global.getMainContentHeight().subscribe((value) => {
      this.mainContentHeight = value;
      var tempMarginHeight = value + this.global.headerHeight;
      this.margin_top = tempMarginHeight.toString() + "px";
    });
  }

  // Listeners for resize
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  // Go to link
  goToLink(url: any) {
    if (url == 0) {
      window.open(this.github_link, "_blank");
    }
    else if (url == 1) {
      window.open(this.insta_link, "_blank");
    }
    else {
      window.open(this.in_link, "_blank");
    }
  }

}
