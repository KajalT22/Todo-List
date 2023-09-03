import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  //<app-todo-item [todo]="todo"> to use this todo property we have to mention in Input
  @Input() todo: Todo = new Todo();

  @Input() i:number=0 //for maintaining checkbox index unique

  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo>=new EventEmitter();
  
  onClick(todo:Todo){
    this.todoDelete.emit(todo);
    console.log("on Click triggered");
    
  }

  onCheckBoxClick(todo:Todo){
    this.todoCheckBox.emit(todo);
  }


}
