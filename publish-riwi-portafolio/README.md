# Portafolio de Alex Ramírez

Portafolio personal con trabajos de Riwi en algoritmia, inteligencia artificial y desarrollo web. Está construido con HTML y Tailwind CSS, compilado localmente mediante Vite (sin CDN).

## Ejecutar en local

Requiere Node.js 20.19+ o 22.12+.

```bash
npm ci
npm run dev
```

Abre la dirección local que muestra Vite. Para generar la versión publicada:

```bash
npm run build
```

## Secciones

- **Algoritmia:** ejercicios PSeInt con explicación, código original y ejecución interactiva en JavaScript.
- **Inteligencia artificial:** actividad “Tres cupos, ocho estudiantes” y enlace a Akira Motors.
- **HTML y CSS:** enlace al proyecto de Desastres Naturales.
- **Sobre mí y Contacto:** presentación y enlaces de contacto.

## Publicar en GitHub Pages

GitHub Actions compila el sitio y publica `dist` al subir cambios a `main`.

1. En GitHub, abre **Settings → Pages**.
2. En **Build and deployment**, selecciona **GitHub Actions** como fuente.
3. Sube los cambios a `main` y revisa el resultado en **Actions**.

La dirección del sitio será: <https://johanalexander740-spec.github.io/Riwi_portafolio/>.
