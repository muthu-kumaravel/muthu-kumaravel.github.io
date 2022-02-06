import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioHomeComponent } from './portfolio-home/portfolio-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbConfig } from '@ng-bootstrap/ng-bootstrap';
import { ResumeComponent } from './resume/resume.component';
import { CurosalComponent } from './curosal/curosal.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationPageComponent } from './navigation-page/navigation-page.component';
@NgModule({
  declarations: [
    PortfolioHomeComponent,
    ResumeComponent,
    CurosalComponent,
    FooterComponent,
    NavigationPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [PortfolioHomeComponent]
})
export class AppModule {
  constructor(ngbConfig: NgbConfig) {
    ngbConfig.animation = false;
  }
}
