import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: (valor) => console.log('siguiente [next]: ', valor),
  error: (error) => console.warn('error [obs]: ', error),
  complete: () => console.log('complete [obs]'),
};

//const obs$ = Observable.create();
const obs$ = new Observable<string>((subs) => {
  subs.next('Hola');
  subs.next('Mundo');

  subs.next('Hola');
  subs.next('Mundo');

  // Forzar un error
  //   const a = undefined;
  //   a.nombre = 'Cristian';

  subs.complete();

  subs.next('Hola');
  subs.next('Mundo');
});

obs$.subscribe(observer);

// obs$.subscribe({
//   next: (valor) => console.log('siguiente [next]: ', valor),
//   error: (error) => console.warn('error [obs]: ', error),
//   complete: () => console.log('complete [obs]'),
// });
