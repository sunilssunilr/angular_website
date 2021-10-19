import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'practice-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.less']
})
export class BodyComponent implements OnInit {

  @Input() item = "";
  inputBody :any;
  onClickFunc($event:Event){
    console.log($event)
    this.inputBody = $event;
  }
  ngOnInit(){;}

}
