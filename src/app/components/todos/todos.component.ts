import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Subscription } from 'rxjs';

interface response {
  code:number;
  status:string;
  message:any[];
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnDestroy {
  todos: any[]= [];
  subs:Subscription[] = []
  constructor(private _todo:TodoService) { }

  ngOnInit() {
    let sub = this._todo.get().subscribe((todos:response) => {
      this.todos = todos.message;
    });
  }
  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  deleteTodo(id){
    this._todo.delete(id).subscribe(res => {
      this.todos = this.todos.filter(todo => todo.id != id);
    })
  }

  add(data){
    this._todo.create(data).subscribe((res:response) => {
      this.todos.push(res.message);
    })
  }

}
