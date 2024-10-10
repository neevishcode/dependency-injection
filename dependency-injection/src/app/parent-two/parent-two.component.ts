import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-parent-two',
  standalone: true,
  imports: [],
  templateUrl: './parent-two.component.html',
  styleUrl: './parent-two.component.scss'
})
export class ParentTwoComponent {

  count:Number = 0;
  constructor(private sharedService: SharedService) {
  }

  getCount(){
    this.count = this.sharedService.count;
    console.log('Count Get----', this.count);
  }
}
