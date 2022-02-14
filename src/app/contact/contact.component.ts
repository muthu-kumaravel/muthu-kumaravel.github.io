import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {

  constructor(private global: GlobalConstants) { }

  ngAfterViewInit(): void {
    this.setHeight(this.targetHeight.nativeElement.offsetHeight);
  }

  setHeight(value: number) {
    console.log(value)
    this.global.setContactHeight(value);
  }

  @ViewChild('targetHeight') targetHeight: any;

}
