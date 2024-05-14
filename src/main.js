// import './app.css'
import App from "./proyectin.svelte"
import App1 from "./categorias.svelte"
import App2 from "./frecuencia.svelte"
import App3 from "./utilidad.svelte"
import App4 from "./antiguedad.svelte"
import App5 from "./dificultad.svelte"
import App6 from "./recursos.svelte"

const app = new App({
  target: document.body,
})
const app1 = new App1({
  target: document.body,
});
const app2 = new App2({
  target: document.body,
});
const app3 = new App3({
  target: document.body,
});
const app4 = new App4({
  target: document.body,
});
const app5 = new App5({
  target: document.body,
});
const app6 = new App6({
  target: document.body,
});

export default app && app1 && app2 && app3 && app4 && app5 && app6

