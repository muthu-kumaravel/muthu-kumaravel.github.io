import { Component, OnInit, AfterViewInit, ViewChild, HostListener } from '@angular/core';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})
export class PhotographyComponent implements AfterViewInit {

  public innerWidth: any;

  sectionHeight: any = 1118;

  constructor(private global: GlobalConstants) { 
    this.innerWidth = window.innerWidth;
    this.sectionHeight = this.innerWidth > 949 ? 1338 : this.innerWidth >= 649 ? 1971 : 3863;
  }

  ngAfterViewInit(): void {
    this.innerWidth = window.innerWidth;
    this.sectionHeight = this.innerWidth > 949 ? 1338 : this.innerWidth >= 649 ? 1971 : 3863;
    // console.log(this.targetHeight.nativeElement.offsetHeight);
    // this.sectionHeight = this.targetHeight.nativeElement.offsetHeight;
    this.setHeight(this.sectionHeight);
  }

  // Listeners for resize
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    this.sectionHeight = this.innerWidth > 949 ? 1338 : this.innerWidth >= 649 ? 1971 : 3863;
    this.setHeight(this.sectionHeight);
  }

  setHeight(value: number) {
    console.log("PHOTOGRAPHY SECTION HEIGHT", value);
    this.sectionHeight = value;
    this.global.setPhotographyHeight(value);
  }

  @ViewChild('targetHeight') targetHeight: any;

}
