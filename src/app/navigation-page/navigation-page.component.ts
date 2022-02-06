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
  
  public showMyContainer: any;
  public showNavigationIndicators: any;
  resume = "https://drive.google.com/file/d/1KeyFXt1ChDnakZRocEtWeskL9jWt_Eef/view?usp=sharing";

  constructor(private global: GlobalConstants) { }

  ngOnInit(): void {

    this.global.getShowMyContainer().subscribe((value) => {
      this.showMyContainer = value;
    });

    this.global.getShowNavigationIndicators().subscribe((value) => {
      this.showNavigationIndicators = value;
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
