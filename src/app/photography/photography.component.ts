import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
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

  constructor(private global: GlobalConstants) { }

  ngAfterViewInit(): void {
    this.setHeight(this.targetHeight.nativeElement.offsetHeight);
  }

  setHeight(value: number){
    console.log(value)
    this.global.setPhotographyHeight(value);
  }

  @ViewChild('targetHeight') targetHeight: any;

}
