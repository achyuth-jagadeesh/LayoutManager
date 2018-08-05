import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainLayoutManagerComponent } from './main-layout-manager/main-layout-manager.component';
import { TemplateConfigService } from "./template-config.service";
import { TemplateBoxComponent } from './template-box/template-box.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { ExistingTemplateManagerComponent } from './existing-template-manager/existing-template-manager.component';



const routes: Routes = [
  { path: 'existing', component: ExistingTemplateManagerComponent },
  { path: 'new', component: MainLayoutManagerComponent },
  { path: '', component: ExistingTemplateManagerComponent },
  { path: '**', redirectTo: "/existing" ,  pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutManagerComponent,
    TemplateBoxComponent,
    AppMenuComponent,
    ExistingTemplateManagerComponent
  ],
  imports: [
    FormsModule,RouterModule.forRoot(routes), BrowserModule, HttpClientModule, NgbModule.forRoot()
  ],
  providers: [TemplateConfigService],
  bootstrap: [AppComponent]
})

export class AppModule { }
