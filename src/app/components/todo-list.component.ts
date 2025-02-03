import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-list',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  newTask: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  // Carregar todas as tarefas
  loadTodos(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos.map(todo => ({ ...todo, isEditing: false })); 
    });
  }

  // Adicionar nova tarefa
  addTodo(): void {
    if (!this.newTask.trim()) return;

    const newTodo: Todo = {
      id: 0, 
      task: this.newTask,
      completed: false,
      isEditing: false
    };

    this.todoService.addTodo(newTodo).subscribe((createdTodo) => {
      this.todos.push(createdTodo);
      this.newTask = '';
    });
  }

  // Editar tarefa
  editTodo(todo: Todo): void {
    todo.isEditing = true;
  }

  // Atualizar tarefa editada
  updateTodo(todo: Todo): void {
    todo.isEditing = false;
    this.todoService.updateTodo(todo).subscribe();
  }

  // Alternar status de completado
  toggleCompletion(todo: Todo): void {
    todo.completed = !todo.completed;
    this.todoService.updateTodo(todo).subscribe();
  }

  // Excluir tarefa
  deleteTodo(id: number | undefined): void {
    if (id === undefined) return;
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter(todo => todo.id !== id);
    });
  }
}
