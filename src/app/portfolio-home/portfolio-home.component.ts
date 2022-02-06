import { Component, OnInit, HostListener } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';
@Component({
  selector: 'app-portfolio-home',
  templateUrl: './portfolio-home.component.html',
  styleUrls: ['./portfolio-home.component.scss']
})

export class PortfolioHomeComponent implements OnInit {

  // Page Title
  title = 'Muthukumaravel-Portfolio';

  // Variable declaration
  public innerWidth: any;
  public showNavigationIndicators: any;
  public showMyContainer: any;

  // Constructor
  constructor(private global: GlobalConstants) { }

  // Listeners for resize
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  // Continuous updation fucntions & general init
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;

    this.global.getShowNavigationIndicators().subscribe((value) => {
      this.showNavigationIndicators = value;
    });

    this.global.getShowMyContainer().subscribe((value) => {
      this.showMyContainer = value;
    });

  }

  // General Update functions
  updateFunc(): void {
    this.showMyContainer = !this.showMyContainer;
    this.showNavigationIndicators = !this.showNavigationIndicators;
    this.global.setShowNavigationIndicators(this.showNavigationIndicators);
    this.global.setShowMyContainer(this.showMyContainer);
  }

}
