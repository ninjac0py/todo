import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() title:string;
  @Input() description:string;
  @Input() id:string;
  @Output() onDelete: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  delete(){
    this.onDelete.emit(this.id);
  }
}
