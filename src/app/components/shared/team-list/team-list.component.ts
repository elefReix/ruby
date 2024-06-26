import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

interface Member {
  name:string,
  employee_number:number,
  reason_social:string,
  complete:number,
  week:number
  holliday:boolean
 } 

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
  standalone:true,
  imports:[
    CommonModule,
    FormsModule,
    IonicModule,]
})
export class TeamListComponent  implements OnInit {

  members_list:Member[] = []

  constructor() { }

  ngOnInit() {
    this.members_list.push(
      {name:"JESUS VAZQUEZ SALDANA",
        employee_number:10240,
        reason_social:'CENTRO DE ACOPIO CUCAPAH',
        complete:6,
        week:0,
        holliday:false}
    )
  }

}
