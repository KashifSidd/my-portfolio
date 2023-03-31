import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-ball-cursor',
  templateUrl: './ball-cursor.component.html',
  styleUrls: ['./ball-cursor.component.scss']
})
export class BallCursorComponent implements OnInit {
  ball!: HTMLElement;
  intervalId!: number;

  constructor() { }

  ngOnInit(): void {
    const ball = document.getElementById('ball') as HTMLElement;
    document.addEventListener('mousemove', (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      ball.style.left = x + 'px';
      ball.style.top = y + 'px';
      ball.style.backgroundColor = getRandomColor();
    });

    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  }



}
