import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  @Output() onAdd:EventEmitter<any> = new EventEmitter();
  form:FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl("", [Validators.required]),
      description: new FormControl("")
    })
  }

  save(){
    let data = this.form.value;
    this.onAdd.emit(data);
    this.form.reset();
  }
}
