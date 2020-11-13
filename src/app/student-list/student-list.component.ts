import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.sass']
})
export class StudentListComponent implements OnInit {
  students: Student[];
  selected: string;
  target: string;

  constructor(private router: Router,
              private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((data) =>{this.students = data;console.log(data)});
  }

  goto(): void {
    this.router.navigate(['/students', this.target]);
  }
}
