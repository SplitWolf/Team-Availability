import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date-bar.component.html',
  styleUrl: './date-bar.component.scss'
})
export class DateBarComponent {

  @Input() day_names: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  // day_names_fr = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
  @Input() day_numbers: number[] = [1, 2, 3, 4, 5, 6, 7];


}

type Date = {
  name: string,
  number: number
}
