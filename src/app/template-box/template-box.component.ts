import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-template-box',
  templateUrl: './template-box.component.html',
  styleUrls: ['./template-box.component.css']
})
export class TemplateBoxComponent implements OnInit {
  templateBox: any;
  templateTemp: any;

  closeResult: string;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  getColor(){
    return "#ffffff";
    
    // let colorList=["#FFE4C4","#FFEBCD","#A52A2A","#DEB887","#5F9EA0","#7FFF00","#D2691E","#FF7F50","#6495ED","#FFF8DC","#008B8B","#A9A9A9","#8B0000","#9400D3","#FFFAF0","#FFD700","#DAA520","#808080","#008000","#ADFF2F","#FF69B4","#FFFFF0","#F0E68C","#7CFC00","#ADD8E6","#D3D3D3","#FFA07A","#800000"];
    // if(this.templateBox.boxNumber < colorList.length){
    //     return colorList[this.templateBox.boxNumber];
    // }else{
    //   let indexArray = this.templateBox.boxNumber+"".split("");
    //   return colorList[indexArray[indexArray.length-1]];
    // }
  }

  @Input()
  set templete(template: any) {
    this.templateBox = template;
    this.calculatePixelss();
  }
  open(content) {
    this.templateTemp = { ...this.templateBox };
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.getDismissReason(reason)
    });
  }

  changeLevel(incrementDecrement){
    this.templateBox.zIndex+=incrementDecrement
  }

  calculatePixelss(){
    let zoomLevel = 5;
    this.templateBox.canvasAreaDimensions.height=this.templateBox.canvasAreaDimensions.height*zoomLevel;
    this.templateBox.canvasAreaDimensions.width=(this.templateBox.canvasAreaDimensions.width)*zoomLevel;
    this.templateBox.canvasPosition.x=this.templateBox.canvasPosition.x*zoomLevel;
    this.templateBox.canvasPosition.y=this.templateBox.canvasPosition.y*zoomLevel;
  }


  saveData() {
    // this.activeModal.close();
    console.log("Need to save this to backend")
  }
  cancel() {
    this.templateBox = { ...this.templateTemp }
  }

  private getDismissReason(reason: any) {
    if (reason == "SAVE") {
      console.log("Need to save this to backend")
    } else {
      this.templateBox = { ...this.templateTemp }
    }
  }
}
