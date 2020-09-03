import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'cr-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.sass']
})
export class HeadlineComponent implements OnInit {

  type: any = 'show';

  constructor() { }

  ngOnInit() {
  }

}
