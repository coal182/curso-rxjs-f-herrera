import { interval, Observer, timer } from 'rxjs';

const observer: Observer<number> = {
  next: (val) => console.log('next: ', val),
  error: () => console.log,
  complete: () => console.log('complete'),
};

const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const interval$ = interval(1000);
//const timer$ = timer(2000, 1000);
const timer$ = timer(hoyEn5);

console.log('📌 inicio');

//interval$.subscribe(observer);
timer$.subscribe(observer);

console.log('📌 fin');
