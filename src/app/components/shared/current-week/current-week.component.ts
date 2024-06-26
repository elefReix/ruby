import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-current-week',
  templateUrl: './current-week.component.html',
  styleUrls: ['./current-week.component.scss'],
  standalone:true
})
export class CurrentWeekComponent  implements OnInit {

  weekNumber :Number = moment().week() | 0
  start_week :string = moment().startOf("isoWeek").subtract(4,'days').format('DD-MM-YYYY')  
  end_week :string  = moment().endOf("isoWeek").subtract(4,'days').format('DD-MM-YYYY')
  week_label :string = ""
  constructor() { }

  ngOnInit() {
    this.week_label = `Semana ${this.weekNumber} del ${this.start_week} al ${this.end_week} ` 
  }

}
