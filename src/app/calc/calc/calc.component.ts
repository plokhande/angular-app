import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../app.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  todaysDt: any;

  constructor(private service: MyserviceService) { }

  ngOnInit() {
    this.todaysDt = this.service.showTodayDate();
  }

}
