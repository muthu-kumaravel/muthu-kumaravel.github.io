import { Component, OnInit, AfterViewInit, ViewChild, HostListener } from '@angular/core';
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

  public innerWidth: any;

  threshold_mobile: any = 460;

  exp1_height: any;
  exp2_height: any;
  exp3_height: any;

  line_height: any;

  exp1_starting: any;
  exp2_starting: any;
  exp3_starting: any;

  circle1: any;
  circle2: any;
  circle3: any;

  divHeight: any;
  resume_section_height: any;

  constructor(private global: GlobalConstants) {

    this.innerWidth = window.innerWidth;

    if (this.innerWidth >= 765) {
      this.exp1_height = 181;
      this.exp2_height = 222;
      this.exp3_height = 162;

      this.line_height = 665;

      this.exp1_starting = 25;
      this.exp2_starting = 231;
      this.exp3_starting = 478;

      this.circle1 = 30;
      this.circle2 = 236;
      this.circle3 = 483;

      this.divHeight = 665;
      this.resume_section_height = 745;
    }
    else if (this.innerWidth <= this.threshold_mobile) {
      this.exp1_height = 222;
      this.exp2_height = 262;
      this.exp3_height = 202;

      this.line_height = 786;

      this.exp1_starting = 25;
      this.exp2_starting = 272;
      this.exp3_starting = 559;

      this.circle1 = 30;
      this.circle2 = 277;
      this.circle3 = 564;

      this.divHeight = 786;
      this.resume_section_height = 866;
    }
    else {
      this.exp1_height = 262;
      this.exp2_height = 356;
      this.exp3_height = 262;

      this.line_height = 980;

      this.exp1_starting = 25;
      this.exp2_starting = 312;
      this.exp3_starting = 693;

      this.circle1 = 30;
      this.circle2 = 317;
      this.circle3 = 698;

      this.divHeight = 980;
      this.resume_section_height = 1060;
    }
  }
  // Listeners for resize
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateFunc();
  }

  ngAfterViewInit(): void {
    this.updateFunc();
  }

  updateFunc() {

    this.innerWidth = window.innerWidth;

    this.setHeight(this.targetHeight.nativeElement.offsetHeight);
    this.exp1_height = this.exp1.nativeElement.offsetHeight;
    this.exp2_height = this.exp2.nativeElement.offsetHeight;
    this.exp3_height = this.exp3.nativeElement.offsetHeight;
    console.log(this.exp1_height, this.exp2_height, this.exp3_height)

    this.exp1_starting = 25;
    this.exp2_starting = this.exp1_starting + this.exp1_height + 25;
    this.exp3_starting = this.exp2_starting + this.exp2_height + 25;

    this.line_height = this.exp3_starting + this.exp3_height + 25;
    this.divHeight = this.line_height + 40;

    this.circle1 = this.exp1_starting + 5;
    this.circle2 = this.exp2_starting + 5;
    this.circle3 = this.exp2_starting + this.exp2_height + 25 + 5;

    this.resume_section_height = this.divHeight + 40;
    this.global.setResumeHeight(this.resume_section_height);
    console.log("RESUME SECTION HEIGHT: " + this.resume_section_height);

  }

  setHeight(value: number) {
    console.log(value)
    this.global.setResumeHeight(value);
  }

  @ViewChild('targetHeight') targetHeight: any;
  @ViewChild('exp1') exp1: any;
  @ViewChild('exp2') exp2: any;
  @ViewChild('exp3') exp3: any;

  // Go to resume
  resume_link = "https://drive.google.com/file/d/1KeyFXt1ChDnakZRocEtWeskL9jWt_Eef/view?usp=sharing";
  goToLink(url: string) {
    window.open(this.resume_link, "_blank");
  }

}
