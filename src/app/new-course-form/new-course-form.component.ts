import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Component } from "@angular/core";

@Component({
  selector: "new-course-form",
  templateUrl: "./new-course-form.component.html",
  styleUrls: ["./new-course-form.component.css"]
})
export class NewCourseFormComponent {
  // form = new FormGroup({
  //   username: new FormControl(),
  //   contact: new FormGroup({
  //     email: new FormControl(),
  //     phone: new FormControl()
  //   }),
  //   topics: new FormArray([])
  // });

  constructor(private frmBuilder: FormBuilder) {
  }

  form = this.frmBuilder.group({
    username: ['', Validators.required],
    contact: this.frmBuilder.group({
      email: [''],
      phone: [''],
    }),
    topics: this.frmBuilder.array([])
  });

  get topics() {
    return this.form.get("topics") as FormArray;
  }

  addTopic(topicInput: HTMLInputElement) {
    this.topics.push(new FormControl(topicInput.value));
    topicInput.value = "";
  }

  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
}
