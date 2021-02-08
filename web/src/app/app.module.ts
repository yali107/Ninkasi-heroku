import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MglTimelineModule } from 'angular-mgl-timeline';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { IntroComponent } from './pages/intro/intro.component';
import { WorkflowComponent } from './pages/workflow/workflow.component';
import { TeamComponent } from './pages/team/team.component';
import { NinkasiModule } from './ninkasi/ninkasi.module';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { AuthInterceptorService } from './shared/auth/auth-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    WorkflowComponent,
    TeamComponent,
    CarouselComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    // InfoTableComponent,
    // NinkasiComponent,
    // ContentBasedRecComponent,
    // CollabFilteringRecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,

    BrowserAnimationsModule,
    MglTimelineModule,

    // NgxPageScrollCoreModule,
    // NgxPageScrollModule,
    // AgGridModule.withComponents([]),

    NinkasiModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas),
    library.addIconPacks(fab),
    library.addIconPacks(far)
  }
}
