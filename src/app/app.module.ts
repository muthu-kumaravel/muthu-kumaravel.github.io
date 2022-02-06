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
import { HeaderComponent } from './header/header.component';
import { PhotographyComponent } from './photography/photography.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
@NgModule({
  declarations: [
    PortfolioHomeComponent,
    ResumeComponent,
    CurosalComponent,
    FooterComponent,
    NavigationPageComponent,
    HeaderComponent,
    PhotographyComponent,
    AboutComponent,
    ContactComponent
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
