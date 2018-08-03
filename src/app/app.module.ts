import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainLayoutManagerComponent } from './main-layout-manager/main-layout-manager.component';
import { TemplateConfigService } from "./template-config.service";
import { TemplateBoxComponent } from './template-box/template-box.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutManagerComponent,
    TemplateBoxComponent
  ],
  imports: [
    FormsModule, BrowserModule, HttpClientModule, NgbModule.forRoot()
  ],
  providers: [TemplateConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
