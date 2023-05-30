import { fromEvent, map, takeWhile } from 'rxjs';

const click$ = fromEvent<PointerEvent>(document, 'click');

click$
  .pipe(
    map(({ x, y }) => ({ x, y })),
    //takeWhile(({ y }) => y <= 150)
    takeWhile(({ y }) => y <= 150, true) // emitir el ultimo click
  )
  .subscribe({
    next: (val) => console.log('next', val),
    complete: () => console.log('complete'),
  });
