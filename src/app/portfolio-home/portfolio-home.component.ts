import { Component, OnInit, HostListener } from '@angular/core';
import { GlobalConstants } from '../common/global-constants'
import { CurosalComponent } from '../curosal/curosal.component'
@Component({
  selector: 'app-portfolio-home',
  templateUrl: './portfolio-home.component.html',
  styleUrls: ['./portfolio-home.component.scss']
})
export class PortfolioHomeComponent implements OnInit {

  // Page Title
  title = 'Muthukumaravel-Portfolio';

  // Variable declaration
  insta_link = "https://www.instagram.com/muthu_kumaravel/";
  in_link = "https://www.linkedin.com/in/muthukumaravel/";
  github_link = "https://github.com/muthu-kumaravel";
  insta_logo = "../../assets/insta.png";
  github_logo = "../../assets/GitHub-Mark-120px-plus.png";
  linkedin_logo = "../../assets/new_linedin.png";
  resume = "https://drive.google.com/file/d/1KeyFXt1ChDnakZRocEtWeskL9jWt_Eef/view?usp=sharing"
  public innerWidth: any;
  public showNavigationIndicators: any;
  public showMyContainer: any;

  // Constructor
  constructor(private obj: CurosalComponent, private global: GlobalConstants) { }

  // Listeners for resize
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  // Continuous updation fucntions & general init
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;

    this.global.getShowNavigationIndicators().subscribe((value) => {
      this.showNavigationIndicators = value;
    });

    this.global.getShowMyContainer().subscribe((value) => {
      this.showMyContainer = value;
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
