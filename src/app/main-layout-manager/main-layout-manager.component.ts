import { Component, OnInit, Input } from '@angular/core';
import { TemplateConfigService  } from "../template-config.service";

@Component({
  selector: 'app-main-layout-manager',
  templateUrl: './main-layout-manager.component.html',
  styleUrls: ['./main-layout-manager.component.css']
})
export class MainLayoutManagerComponent implements OnInit {

  templateBoxList:any=[]
  templateObj:any;


  constructor(private templateConfig:TemplateConfigService) {}

  getTemplateList(){
    this.templateConfig.getConfig(this.templateObj.id).subscribe((response:any)=>{
      this.templateBoxList=response.templateBoxes.map((templateBox)=>{
        templateBox.zIndex=templateBox.boxNumber;
        return templateBox;
      });
    });
  }
  

  ngOnInit() {
  }

  @Input()
  set template(template: any) {
    this.templateObj = template;
    this.getTemplateList();
  }


}
