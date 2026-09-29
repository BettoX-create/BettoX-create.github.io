# BettoX

Web de diseño y venta de sitios web, adaptada a móvil.

Web: https://bettobuyissio-create.github.io/

## Desarrollo

Requisitos: Node.js 20 o superior y pnpm.

```sh
pnpm install --frozen-lockfile
pnpm build
```

El resultado se guarda en `docs/`. Se puede previsualizar con cualquier servidor HTTP estático; no abrir el HTML directamente como archivo local.

## Publicación

GitHub Pages publica la carpeta `/docs` de la rama `main`. Después de cambiar código o recursos, ejecutar `pnpm build` y subir tanto los cambios como `docs/`.

## Archivos

- `src/App.jsx`: secciones, selección de servicios y mensaje para WhatsApp.
- `src/data.js`: planes, precios y características.
- `src/style.css`: diseño adaptable y modos claro y oscuro.
- `src/components/`: componentes de interacción y animación.
- `public/`: HTML y recursos originales, incluido el vídeo MP4 proporcionado por el propietario.
- `docs/`: web compilada para GitHub Pages.

## Comportamiento

Modo oscuro predeterminado. Plan y proyecto inicialmente sin seleccionar. WhatsApp abre aparte al deslizar, tocar su icono o usar teclado, con el plan, proyecto y diseño de marca añadido a la consulta. El vídeo es local y comienza con volumen al 50 %; algunos navegadores exigen pulsar reproducir para permitir sonido. Los comentarios de ejemplo están identificados como muestras.

## Procedencia

Componentes de React Bits (https://reactbits.dev/), incluidos componentes Pro facilitados por el propietario. Logo, imágenes y vídeo facilitados para BettoX. Este repositorio no concede una licencia adicional de redistribución de recursos de terceros; se aplican sus condiciones originales.

