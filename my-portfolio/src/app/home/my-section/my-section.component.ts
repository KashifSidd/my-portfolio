import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-section',
  templateUrl: './my-section.component.html',
  styleUrls: ['./my-section.component.scss']
})
export class MySectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  stopRobotAnimation() {
    const robot = document.querySelector('.robot');
    robot.addEventListener('mouseover', function() {
      this.classList.add('stop');
    });
    robot.addEventListener('mouseleave', function() {
      this.classList.remove('stop');
    });
  }

}
