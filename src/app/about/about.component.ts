import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {

  constructor(private global: GlobalConstants) { }

  ngAfterViewInit(): void {
    this.setHeight(this.targetHeight.nativeElement.offsetHeight);
  }

  setHeight(value: number) {
    console.log(value)
    this.global.setAboutHeight(value);
  }

  @ViewChild('targetHeight') targetHeight: any;

}
