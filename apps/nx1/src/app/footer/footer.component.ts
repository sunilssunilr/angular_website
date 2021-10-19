import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'practice-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  @Input() item = "";
  ngOnInit(){;}

}
