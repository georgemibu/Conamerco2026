# Guía para publicar Conamerco en Internet

Este proyecto usa Astro y está configurado como un sitio **estático**. Astro
genera archivos HTML, CSS, JavaScript y recursos en la carpeta `dist/`. Por eso,
no hace falta instalar Node.js en el servidor para servir la web publicada.

## Requisitos

- Node.js **22.12.0 o superior** en la computadora donde se genera el sitio.
- npm, que se instala junto con Node.js.
- Acceso al panel del hosting o a la plataforma donde se publicará.

## 1. Preparar y revisar el sitio en la computadora

Abrí PowerShell en la carpeta `Conamerco-web` (la que contiene `package.json`) y
ejecutá:

```powershell
npm ci
npm run build
```

`npm ci` instala las dependencias definidas por el proyecto. Solo es necesario
repetirlo si se restauran las dependencias desde cero o se actualiza el proyecto.
`npm run build` crea o actualiza la carpeta `dist/`.

Antes de publicar, se puede revisar la versión generada localmente:

```powershell
npm run preview
```

Abrí en el navegador la dirección local que muestre Astro, normalmente
`http://localhost:4321`. Para detener la vista previa, volvé a PowerShell y
presioná `Ctrl+C`.

Si la compilación falla, no publiques una versión anterior de `dist/` como si
fuera la nueva: revisá el error, corregilo y volvé a ejecutar el build.

## 2. Publicar en Hostinger o en otro hosting con acceso a archivos

Este método aplica cuando el plan permite alojar sitios estáticos mediante un
administrador de archivos, FTP o SFTP. Los nombres de las opciones cambian entre
proveedores, pero el procedimiento es similar:

1. En el panel del hosting, identificá la carpeta pública del dominio. En
   Hostinger suele llamarse `public_html`; en otros proveedores puede tener otro
   nombre.
2. Hacé una copia de seguridad de los archivos que ya estén publicados, si los
   hubiera.
3. Ejecutá el build actualizado en tu computadora.
4. Subí **el contenido de `dist/`** a la carpeta pública. `index.html` debe
   quedar directamente en la raíz del dominio, por ejemplo
   `public_html/index.html`. No subas la carpeta `dist` como una carpeta anidada.
5. Confirmá que también se hayan subido las carpetas y los recursos que se
   generan junto a `index.html`.
6. Visitá el dominio y probá los enlaces, las imágenes y los videos.

No subas `src/`, `node_modules/` ni el código fuente para este método: el servidor
solo necesita los archivos generados en `dist/`.

### ¿Tengo que instalar Astro o Node.js en Hostinger?

No para la configuración actual: el sitio se construye antes de subirlo y el
hosting sirve archivos estáticos. La terminal, Node.js en el servidor y un
adaptador de Astro serían necesarios si el proyecto se cambiara para usar
renderizado en servidor (SSR), una API ejecutada en el servidor u otras
funcionalidades dinámicas.

Los planes de hosting no son todos iguales. Un plan compartido que permita
publicar archivos puede alojar esta versión estática; para SSR se necesita un
plan y una configuración que admitan procesos Node.js, o un servicio compatible
con Astro SSR.

## 3. Publicar desde Git con una plataforma automática

Plataformas como Netlify, Vercel o Cloudflare Pages pueden conectarse al
repositorio Git y publicar cada vez que se actualiza la rama configurada. Los
valores para este proyecto son:

- **Comando para instalar dependencias:** `npm ci`
- **Comando de build:** `npm run build`
- **Directorio de publicación:** `dist`
- **Versión de Node.js:** `22.12.0` o superior

La plataforma descarga el código, lo compila y publica `dist/`; no es necesario
subir manualmente esa carpeta al repositorio. Los nombres de estos ajustes y la
versión de Node que se elige pueden variar según la plataforma.

## 4. Conectar el dominio y HTTPS

Si se usa un dominio propio, hay que agregarlo en el panel del proveedor donde se
publica el sitio y seguir sus instrucciones para DNS. La configuración exacta
depende de quién gestione el dominio y del hosting.

No cambies nameservers ni registros DNS sin revisar los existentes: puede haber
registros de correo (por ejemplo, MX) u otros servicios que se interrumpan.
Después de conectar el dominio, habilitá HTTPS/SSL desde el panel del proveedor
y probá el sitio con `https://`.

## 5. Actualizar el sitio más adelante

1. Editá los datos en `src/data/site-content.ts` y agregá las imágenes o videos
   necesarios en `public/`, siguiendo las instrucciones de ese archivo.
2. Ejecutá `npm run build` y comprobá que termine sin errores.
3. En un hosting manual, reemplazá los archivos publicados por el nuevo
   contenido de `dist/`. En una plataforma Git, guardá y subí los cambios a la
   rama conectada para que se genere un nuevo despliegue.
4. Revisá la página publicada. Si el navegador muestra la versión anterior,
   probá recargarla sin caché o esperá a que termine la propagación del
   despliegue.

Los archivos de video pueden ser grandes. Antes de subirlos, revisá los límites
de almacenamiento y transferencia mensual del hosting. Los videos incluidos en
`public/` se copian al resultado de build y se publican junto con el sitio.

## Resolución de problemas habituales

- **Se muestra un listado de archivos o un error 404:** comprobá que `index.html`
  esté directamente en la carpeta pública del dominio y no dentro de
  `dist/`.
- **No se ven imágenes o videos:** verificá que estén dentro de `public/`, que
  la ruta del dato comience con `/` y que el archivo se haya incluido en el
  despliegue.
- **No se actualizan textos, enlaces o cards:** los datos se leen durante el
  build. Volvé a generar el sitio y a publicar el contenido nuevo de `dist/`.
- **Funciona en un subdominio o en la raíz, pero no en una subcarpeta:** este
  proyecto usa rutas desde la raíz del dominio. Publicarlo bajo una ruta como
  `dominio.com/evento/` requiere configurar `base` y revisar las rutas antes de
  desplegarlo allí.

## Información que falta para dar instrucciones exactas

Esta guía cubre el flujo general, pero los pasos concretos para el dominio,
HTTPS y la subida dependen del plan contratado y de la plataforma elegida. Para
preparar instrucciones exactas hacen falta el nombre del proveedor/plataforma,
el tipo de plan y saber si el dominio ya está conectado. No compartas
contraseñas, claves privadas ni credenciales del hosting en el código o en este
archivo.
