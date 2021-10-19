import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'practice-siderbar-right',
  templateUrl: './siderbar-right.component.html',
  styleUrls: ['./siderbar-right.component.less']
})
export class SiderbarRightComponent implements OnInit {

  @Input() item:any;
  ngOnInit(): void {
  ;}

}
