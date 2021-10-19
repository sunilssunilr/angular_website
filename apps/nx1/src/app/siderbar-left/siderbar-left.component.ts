import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'practice-siderbar-left',
  templateUrl: './siderbar-left.component.html',
  styleUrls: ['./siderbar-left.component.less']
})
export class SiderbarLeftComponent implements OnInit {

  @Input() item:any;

  ngOnInit(): void {
  ;}

}
