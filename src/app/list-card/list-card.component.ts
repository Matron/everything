import { Component } from '@angular/core';

@Component({
  selector: 'list-card',
  standalone: true,
  imports: [],
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.scss'
})
export class ListCardComponent {
  itemTitle = 'create a time and task management app';
  isCompleted = false;

  completeTask() {
    this.isCompleted = true;
  }
}
