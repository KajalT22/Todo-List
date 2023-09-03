import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos:Todo[];
  localItem:string;

  constructor(){
    //get saved todos
    this.localItem = localStorage.getItem("todos") || ""; //if getItem("todos") null set default as empty string
    
    if (this.localItem === "") {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
    
    
  }

  
  deleteTodo(todo:Todo){
    //items will be deleted from todos array
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1); //delete from that index 1 no  
    //save todos
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    //save todos
   localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  
  //on checkbox click have to set that
  toggleTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));

  }


}
