import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'empty-angular-app';

  range = function(input: number[], total: number) {
      total = parseInt(String(total));
      for (var i=0; i<total; i++) {
        input.push(i);
      }
      return input;
    };
}
