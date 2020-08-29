import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes demo';
  today=new Date();
  day;
  month;
  year;
  date;
  currentdate;
  student={name:'yogita',age:23,course:'java',address:{city:'Delhi',state:'New Delhi'}};
  money;
  marks;
  age;
  weekdays=['Mon','Tue','Wed','Thur','Fri','Satur','Sun'];
  name='Yogita Kaushik';
  num;

  constructor(){ 
    this.day=this.today.getDay();
    this.month=this.today.getMonth()+1; //take jan as index 0
    this.year=this.today.getFullYear();
    this.date=this.today.getDate();
    this.currentdate=this.date + '-'+ this.month+'-'+this.year;
    this.money=456;
    this.marks=0.53;
    this.age=20.7;
    this.num=729;
  }
}
