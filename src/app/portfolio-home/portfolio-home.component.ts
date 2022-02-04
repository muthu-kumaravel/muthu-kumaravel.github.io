import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portfolio-home',
  templateUrl: './portfolio-home.component.html',
  styleUrls: ['./portfolio-home.component.scss'],
  providers: [NgbCarouselConfig],
  encapsulation: ViewEncapsulation.Emulated,
  styles: [`
    .carousel-item
    {
      display:block;
      opacity:0;
      transition: opacity 2s;
    }
    .carousel-item.active
    {
      display:block;
      opacity:1;
      transition: opacity 2s;
      
    }
  `]

})
export class PortfolioHomeComponent implements OnInit {

  title = 'Muthukumaravel-Portfolio';

  public innerWidth: any;

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
onResize() {
  this.innerWidth = window.innerWidth;
}

  images = [
    "../assets/1.jpg",
    "../assets/2.jpg",
    "../assets/3.jpg",
    "../assets/4.jpg",
    "../assets/5.jpg"];

  showMyContainer: boolean = false;

  showNavigationArrows = false;
  showNavigationIndicators = true;

  insta_link = "https://www.instagram.com/muthu_kumaravel/";
  in_link = "https://www.linkedin.com/in/muthukumaravel/";
  github_link = "https://github.com/muthu-kumaravel";

  insta_logo = "../../assets/insta.png";
  github_logo = "../../assets/GitHub-Mark-120px-plus.png";
  linkedin_logo = "../../assets/new_linedin.png";

  resume = "https://drive.google.com/file/d/1KeyFXt1ChDnakZRocEtWeskL9jWt_Eef/view?usp=sharing"

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
    config.interval = 5000;
  }

}
