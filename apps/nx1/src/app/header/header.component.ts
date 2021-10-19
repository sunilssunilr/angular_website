import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'practice-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

    @Input() item = "";
    ngOnInit(){;}
}
