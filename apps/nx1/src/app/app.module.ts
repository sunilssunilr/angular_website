import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { SiderbarLeftComponent } from './siderbar-left/siderbar-left.component';
import { SiderbarRightComponent } from './siderbar-right/siderbar-right.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [AppComponent, HeaderComponent, BodyComponent, SiderbarLeftComponent, SiderbarRightComponent, FooterComponent],
  imports: [BrowserModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
