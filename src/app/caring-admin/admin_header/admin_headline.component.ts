import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'cr-admin_headline',
  templateUrl: './admin_headline.component.html',
  styleUrls: ['./admin_headline.component.sass']
})
export class admin_HeadlineComponent implements OnInit {

  type: any = 'show';

  constructor() { }

  ngOnInit() {
  }

}
