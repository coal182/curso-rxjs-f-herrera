import { first, fromEvent, map, tap } from 'rxjs';

const click$ = fromEvent<PointerEvent>(document, 'click');

click$
  .pipe(
    tap(() => console.log('tap')),
    map(({ clientX, clientY }) => ({ clientX, clientY })),
    first(({ clientY }) => clientY >= 150)
  )
  .subscribe({
    next: (val) => console.log('next:', val),
    complete: () => console.log('complete'),
  });
