import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-portfolio';


  constructor(private renderer: Renderer2) {}
  ngOnInit() {
  this.generateAnimation();
}

    generateAnimation() {
      const colors = ['rgb(0, 149, 255)', 'rgb(255, 0, 0)', 'rgb(255, 255, 0)'];
  
      let keyframes = '';
      for (let i = 0; i < colors.length; i++) {
        keyframes += `${(i/colors.length)*100}% { background-color: ${colors[i]}; }`;
      }
  
      const style = `
        @keyframes color-change {
          ${keyframes}
        }
      `;
  
      const styleElement = this.renderer.createElement('style');
      styleElement.innerHTML = style;
      this.renderer.appendChild(document.head, styleElement);
    }

    
  
  

 
}
