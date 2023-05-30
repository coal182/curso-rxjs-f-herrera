import { catchError, of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';

const url = 'https://httpbinss.org/delay/1';

const manejaError = (resp: AjaxError) => {
  console.warn('error: ', resp.message);
  return of({
    ok: false,
    usuarios: [],
  });
};

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

//obs2$.subscribe((data) => console.log({ data }));
obs$.pipe(catchError(manejaError)).subscribe({
  next: (val) => console.log('next: ', val),
  error: (err) => console.warn('error en subs: ', err),
  complete: () => console.log('complete'),
});
