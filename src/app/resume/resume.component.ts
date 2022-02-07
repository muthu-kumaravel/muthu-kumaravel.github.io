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

  constructor(private global: GlobalConstants) { }

  ngAfterViewInit(): void {
    this.setHeight(this.targetHeight.nativeElement.offsetHeight);
  }

  setHeight(value: number){
    console.log(value)
    this.global.setResumeHeight(value);
  }

  @ViewChild('targetHeight') targetHeight: any;

}
