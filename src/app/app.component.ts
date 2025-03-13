import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SvgBlockComponent } from './svg-block/svg-block.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SvgBlockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-svg-srite';
}
