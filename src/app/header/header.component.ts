import { Component, OnInit, HostListener } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
