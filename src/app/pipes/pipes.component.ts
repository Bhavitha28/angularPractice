import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  todayNumber:number=Date.now();
  todayString:string=new Date().toDateString();
  todayISOstring:string=new Date().toISOString();
  todayDate:Date=new Date();

  details={
    name:'Bhavitha',
    gender:'Female'
  }


}
