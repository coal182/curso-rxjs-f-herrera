import { fromEvent, map, mapTo, pluck, range } from 'rxjs';

range(1, 5)
  .pipe(map<number, string>((val) => (val * 10).toString()))
  .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyup$.pipe(map<KeyboardEvent, string>((event) => event.code));

const keyupPluck$ = keyup$.pipe(pluck('target', 'baseURI'));

const keyupMapTo$ = keyup$.pipe(mapTo('tecla presionada'));

keyup$.subscribe(console.log);
keyupCode$.subscribe((val) => console.log('map', val));
keyupPluck$.subscribe((val) => console.log('pluck', val));
keyupMapTo$.subscribe((val) => console.log('mapTo', val));
