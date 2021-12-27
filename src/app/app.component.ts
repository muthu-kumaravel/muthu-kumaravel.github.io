import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';
  notMobile: boolean = true ;
  ngOnInit() {
    if (window.screen.width < 1000 ) {
      this.notMobile = false;
    }
    else {
      this.notMobile = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.screen.width < 1000 ) {
      this.notMobile = false;
    }
    else {
      this.notMobile = true;
    }
  }

}
