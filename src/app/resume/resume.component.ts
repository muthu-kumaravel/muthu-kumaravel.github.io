import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements AfterViewInit {

  exp1_height: any;
  exp2_height: any;
  exp3_height: any;

  line_height: any = 570;

  exp1_starting: any = 25;
  exp2_starting: any = 200;
  exp3_starting: any = 415;

  circle1: any = 30;
  circle2: any = 205;
  circle3: any = 420;

  divHeight:any = 610;

  constructor(private global: GlobalConstants) { }

  ngAfterViewInit(): void {
    this.setHeight(this.targetHeight.nativeElement.offsetHeight);
    this.exp1_height = this.exp1.nativeElement.offsetHeight;
    this.exp2_height = this.exp2.nativeElement.offsetHeight;
    this.exp3_height = this.exp3.nativeElement.offsetHeight;
    
    this.exp1_starting = 25;
    this.exp2_starting = this.exp1_starting + this.exp1_height + 25;
    this.exp3_starting = this.exp2_starting + this.exp2_height + 25;

    this.line_height = this.exp3_starting + this.exp3_height + 25;
    this.divHeight = this.line_height + 40;
    
    this.circle1 = this.exp1_starting + 5;
    this.circle2 = this.exp2_starting + 5;
    this.circle3 = this.exp2_starting + this.exp2_height + 25 + 5;
    
    console.log(this.exp3_starting);
  }

  setHeight(value: number){
    console.log(value)
    this.global.setResumeHeight(value);
  }

  @ViewChild('targetHeight') targetHeight: any;
  @ViewChild('exp1') exp1: any;
  @ViewChild('exp2') exp2: any;
  @ViewChild('exp3') exp3: any;

}
