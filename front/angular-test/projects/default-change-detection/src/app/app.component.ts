import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import{MatButtonModule} from '@angular/material/button';

import { HighlightDirective } from '@ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: true,
  hostDirectives: [HighlightDirective],
  imports: [RouterOutlet, MatButtonModule],
})
export class AppComponent {
  readonly #highlight = inject(HighlightDirective);
  changeName() {
    console.log('Angular');
  }
  
  cd() {
    this.#highlight.highlight();
  }
}
