import { Directive, ElementRef, NgZone, inject } from '@angular/core';

/**
 * @see https://www.youtube.com/watch?v=sbIlz-yuxQI
 */
@Directive({
  selector: 'highlightDirective',
  standalone: true
})
export class HighlightDirective {
  readonly #zone = inject(NgZone);
  readonly #host = inject(ElementRef);


  ngOnInit() {
    console.log('HighlightDirective initialized');
    this.#host.nativeElement.className =
      'block p-2 px-6  my-4 rounded-xl border-2 border-gray-300 bg-gray-200';
    this.#host.nativeElement.style.transition = 'all 300ms';
  }

  highlight() {
    this.#host.nativeElement.classList.add('bg-fuchsia-300');

    this.#zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.#host.nativeElement.classList.remove('bg-fuchsia-300');
      }, 600);
    });
  }
}
