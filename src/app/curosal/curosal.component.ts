import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { GlobalConstants } from '../common/global-constants'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-curosal',
  templateUrl: './curosal.component.html',
  styleUrls: ['./curosal.component.scss'],
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

export class CurosalComponent implements OnInit {

  // Variable Declaration
  images = [
    "../assets/curosal_pics/1.jpg",
    "../assets/curosal_pics/2.jpg",
    "../assets/curosal_pics/3.jpg",
    "../assets/curosal_pics/4.jpg",
    "../assets/curosal_pics/5.jpg",
    "../assets/curosal_pics/6.jpg",
    "../assets/curosal_pics/7.jpg"];

  alt = [
    "bird",
    "tiger",
    "fire",
    "niagara",
    "qutub sahi tombs",
    "landscape",
    "church"
  ]
  public showNavigationIndicators: any;

  // Constructor
  constructor(config: NgbCarouselConfig, private global: GlobalConstants) {
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
    config.interval = 5000;
  }

  // Continuous updation fucntions & general init
  ngOnInit(): void {
    this.global.getShowNavigationIndicators().subscribe((value) => {
      this.showNavigationIndicators = value;
    });
  }

}
