import {Component} from 'angular2/core'
import {CourseService} from './course.service';
import {AutogrowDirective} from './auto-grow.directive'

@Component({
	selector: 'courses',
	template: `
				<h2>{{title}}</h2>
				<input type="text" autoGrow/>
				<ul>
					<li *ngFor="#course of courses">{{course}}</li>
				</ul>
				`,
	providers:[CourseService],
	directives:[AutogrowDirective]
})
export class CoursesComponent{
     title = "The title of the courses page";
	 courses;
	 
	 constructor(courseService: CourseService){
		 this.courses = courseService.getCourses();
	 }
}