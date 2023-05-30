import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: (valor) => console.log('next: ', valor),
  error: (error) => console.warn('error: ', error),
  complete: () => console.log('completado'),
};

const intervalo$ = new Observable((subscriber) => {
  let count = 0;
  const interval = setInterval(() => {
    count++;
    subscriber.next(count);
    console.log(count);
  }, 1000);

  setTimeout(() => {
    subscriber.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log('Intervalo destruido');
  };
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs1.add(subs2);
subs1.add(subs3);

setTimeout(() => {
  subs1.unsubscribe();
  // subs1.unsubscribe();
  // subs2.unsubscribe();
  // subs3.unsubscribe();
  console.log('completado timeout');
}, 3000);
