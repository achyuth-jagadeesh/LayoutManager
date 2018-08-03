import { Component, OnInit } from '@angular/core';
import { TemplateConfigService } from "../template-config.service";

@Component({
  selector: 'app-main-layout-manager',
  templateUrl: './main-layout-manager.component.html',
  styleUrls: ['./main-layout-manager.component.css']
})
export class MainLayoutManagerComponent implements OnInit {

  templateBoxList:any=[]

  constructor(private templateConfig:TemplateConfigService) { 
    this.templateConfig.getConfig().subscribe((response)=>{
      this.templateBoxList=response[0].templateBoxDto.map((templateBox)=>{
        templateBox.zIndex=templateBox.boxNumber;
        return templateBox;
      });
    });
  }
  

  ngOnInit() {
  }

}
