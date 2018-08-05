import { Component, OnInit } from '@angular/core';
import { TemplateConfigService } from "../template-config.service";

@Component({
  selector: 'app-existing-template-manager',
  templateUrl: './existing-template-manager.component.html',
  styleUrls: ['./existing-template-manager.component.css']
})
export class ExistingTemplateManagerComponent implements OnInit {
  templatesList:any=[];

  constructor(private templateConfig:TemplateConfigService) {
    this.templateConfig.getTemplates().subscribe((response:any)=>{
      this.templatesList=response.map(function(template:any){
          let zoomLevel = 5;
          template.roomType.canvasAreaDimensions.width = template.roomType.canvasAreaDimensions.width*zoomLevel;
          template.roomType.canvasAreaDimensions.height = template.roomType.canvasAreaDimensions.height*zoomLevel;
          return template;
        });

    });
   }

  ngOnInit() {
  }

}
