import { Component } from '@angular/core';
import { ListCardComponent } from '../list-card/list-card.component';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [ ListCardComponent ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

}
