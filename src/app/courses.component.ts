import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `<h2>{{getTitle()}}</h2>
    <ul>
    <li *ngFor="let course of courses">
    {{course}}
    </li>
    </ul>
    `
})

export class CoursesComponent{
    title = 'List of courses'
    courses;

    constructor(coursesSvc: CoursesService){
        this.courses = coursesSvc.getCourses();
    }

    getTitle(){
        return this.title;
    }
}