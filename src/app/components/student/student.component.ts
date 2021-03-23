import { Component, OnInit } from '@angular/core';
import * as studentsData from '../../../assets/json/student.json';
// import studentsData from '../../../assets/json/student.json';


interface Student{
  id: Number;
  name: String;
  email: String;
  gender: String;
}



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})


export class StudentComponent implements OnInit {

  constructor() {}
  ngOnInit() {}

  name = 'Student Json Data';

  students: Student[]= studentsData;
}
