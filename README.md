<p align="center">
  <h1 align="center">🚂 trencito</h1>
</p>

<p align="center">
  <a aria-label="Website" href="https://trencito.giordano.ar/" target="_blank">
    <img alt="Website" src="https://img.shields.io/website?down_color=red&down_message=offline&style=flat-square&up_message=up&url=https%3A%2F%2Ftrencito.giordano.ar" />
  </a>
  <a aria-label="Licencia" href="https://github.com/franco-giordano/trencito/blob/main/LICENSE" target="_blank">
    <img alt="Licencia: AGPL" src="https://img.shields.io/github/license/franco-giordano/trencito?style=flat-square" target="_blank" />
  </a>
</p>

<p align="center">
No te pierdas ningun tren! Trencito te avisa cuando hay pasajes disponibles en Trenes Argentinos, asi conseguis los mejores lugares. Busca automaticamente pasajes de larga distancia usando la <a href="https://webventas.sofse.gob.ar/">pagina oficial de SOFSE.</a>
</p>
<p align="center">
Hecho con SvelteKit y Cloudflare Workers+Pages.
</p>

## 🤔 Como usar?

1. Ir a https://trencito.giordano.ar/nuevo
2. Completa con tus datos y los de tu tren.
3. Listo! Cada 8hs la app buscara pasajes nuevos y te avisara si encuentra uno disponible.

## 📝 Siguientes pasos

Algunas mejoras para hacer a futuro seran:
- mejorar esquema de almacenamiento para repartir en varias keys los pedidos
- cachear info de asientos
- permitir avisos solo para fechas exactas
- listado de estaciones dinamico (capaz)
- ... y mas!

## ❤️ Contribuí

1. Cloná el repo
2. Para correr el front:
  ```
  cd front
  npm install
  npm run dev
  # navega a https://localhost:3000/
  ```
3. Para correr el worker:
```
cd workers
npm install -g wrangler
wrangler dev
# La API estara en https://localhost:8787/
```

## ⚖️ Licencia

AGPL
