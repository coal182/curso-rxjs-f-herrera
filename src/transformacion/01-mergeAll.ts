import { Observable, debounceTime, fromEvent, map, mergeAll } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import { GithubUser, GithubUsersResp } from '../interfaces/github-users.interface';

// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Helpers
const mostrarUsuarios = (usuarios: GithubUser[]) => {
  orderList.innerHTML = '';
  console.log(usuarios);
  for (const usuario of usuarios) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = usuario.avatar_url;
    const anchor = document.createElement('a');
    anchor.href = usuario.html_url;
    anchor.text = 'Ver página';
    anchor.target = '_blank';
    li.append(img);
    li.append(' ' + usuario.login + ' ');
    li.append(anchor);
    orderList.append(li);
  }
};

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$
  .pipe(
    debounceTime(500),
    map<KeyboardEvent, string>((event) => event.target['value']),
    map<string, Observable<GithubUsersResp>>((texto) => ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)),
    mergeAll<Observable<GithubUsersResp>>(),
    map<GithubUsersResp, GithubUser[]>((resp) => resp['items'])
  )
  .subscribe(mostrarUsuarios);
