import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-parent-one',
  standalone: true,
  imports: [],
  templateUrl: './parent-one.component.html',
  styleUrl: './parent-one.component.scss'
})
export class ParentOneComponent {

  count:Number = 0;

  constructor(private sharedService: SharedService) {
  }

  increaseCount(){
    this.sharedService.count++;
    this.count = this.sharedService.count;
    console.log('increased count----', this.sharedService.count);
  }

}
