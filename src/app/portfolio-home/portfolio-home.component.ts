import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portfolio-home',
  templateUrl: './portfolio-home.component.html',
  styleUrls: ['./portfolio-home.component.scss'],
  providers: [NgbCarouselConfig],
  encapsulation: ViewEncapsulation.Emulated,
  styles:[`
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

  ngOnInit(): void {
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

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
    config.interval = 5000;
  }

}
