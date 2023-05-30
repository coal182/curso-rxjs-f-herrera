import { fromEvent, map, tap } from 'rxjs';

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur luctus tortor et ultricies. Donec vel tortor pulvinar, porttitor metus maximus, lacinia dui. Sed sed augue id ex congue suscipit. Nam pulvinar, massa a elementum dapibus, eros mauris aliquet nisi, porttitor fringilla est mauris ac augue. Nunc congue convallis justo. Donec tempus aliquet tincidunt. Sed molestie eros sed iaculis elementum. In hac habitasse platea dictumst. Sed semper tempor dignissim. Nunc non risus vel nulla facilisis maximus. Ut sit amet dignissim est, a viverra sem. Donec suscipit, odio et tincidunt tincidunt, arcu libero fringilla ex, eget fringilla justo quam sit amet elit. Vestibulum vitae luctus magna. Mauris neque dolor, convallis vel neque ultricies, posuere varius metus.
<br /><br />
Pellentesque ultricies, erat eu rutrum sagittis, metus leo facilisis nulla, finibus porta lectus magna vitae dui. Ut congue pretium metus ac bibendum. Phasellus ac magna id ante semper semper nec non risus. Morbi quis sagittis mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam et vehicula sem. Proin dapibus quam diam, ullamcorper molestie neque varius in. Nulla mollis sodales velit ac imperdiet. Mauris aliquam vitae felis vitae lobortis. Nunc sed augue sit amet eros faucibus tristique id a magna.
<br /><br />
Vivamus tristique erat dolor. Suspendisse id viverra neque, quis tristique nisi. Duis laoreet est pellentesque efficitur vehicula. Aliquam id ipsum sem. Cras felis turpis, volutpat sit amet placerat sed, congue non diam. Sed ultrices vestibulum erat, nec commodo purus auctor a. Donec consequat lacinia urna, non posuere nunc sollicitudin at. Fusce erat orci, volutpat non laoreet at, congue eget est. Quisque eget lectus egestas, ornare ligula eget, tempus elit. Suspendisse sapien mi, auctor a purus eget, tincidunt suscipit ante.
<br /><br />
Fusce efficitur pharetra venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nunc nisl, non eleifend nunc posuere sit amet. Nulla luctus condimentum euismod. Nulla facilisi. Maecenas nec tempor eros. Donec eleifend massa id magna pharetra tristique. Aenean auctor, mi quis pulvinar sodales, erat ipsum congue felis, sit amet rutrum enim nibh ut tortor. In rhoncus auctor suscipit.
<br /><br />
Nulla dapibus lorem at ultricies dictum. Duis consequat tortor in turpis rhoncus imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet nunc tincidunt, laoreet velit fermentum, venenatis arcu. In volutpat rhoncus mi, eu malesuada ipsum sodales et. Nulla vel augue orci. Aenean porttitor, elit vitae fermentum faucibus, ligula elit facilisis quam, a lacinia lorem augue sed odio. Ut pretium turpis sit amet sapien molestie tempor. Donec imperdiet ligula vel sagittis aliquam.
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {
  const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// Streams
const scroll$ = fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(map(calcularPorcentajeScroll), tap(console.log));

progress$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`;
});

//scroll$.subscribe(console.log);
