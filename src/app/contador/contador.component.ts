import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  counterButton: number = 0;

  sumar () {
    this.counterButton++;
  }

  restar() {
    this.counterButton--;
  }

  restablecer() {
    this.counterButton = 0;
  }
}
