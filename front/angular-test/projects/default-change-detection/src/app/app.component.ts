import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from '@ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: true,
  hostDirectives: [HighlightDirective],
  imports: [RouterOutlet],
})
export class AppComponent {
}
