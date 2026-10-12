# Publicar Suarez Oil en Hostinger

Sitio estático: subís los archivos a `public_html` y listo. No hace falta base de datos ni instalar WordPress.

## 1. Contratar hosting y dominio

1. Entrá a [Hostinger](https://www.hostinger.com) e iniciá sesión o creá una cuenta.
2. Contratá un plan de **Hosting web** (Single o Premium alcanza).
3. Si aún no tenés dominio, compralo en el mismo paso (por ejemplo `suarezoil.com.ar`).

## 2. Subir el sitio

1. En el panel (hPanel): **Sitios web → Administrar → Administrador de archivos**.
2. Abrí la carpeta **`public_html`**.
3. Borrá el `index.html` de prueba si existe (no borres otras carpetas del sistema).
4. Comprimí en tu PC la carpeta del proyecto (todo lo que está dentro de `SuareOil`):
   - `index.html`
   - carpeta `css/`
   - carpeta `js/`
   - carpeta `images/`
5. Subí el `.zip` a `public_html` y **extraelo** ahí.
6. Verificá que `index.html` quede directamente dentro de `public_html`, no dentro de una subcarpeta extra.

## 3. Activar HTTPS (SSL)

1. En hPanel: **Seguridad → SSL**.
2. Activá el certificado gratuito para tu dominio.
3. Activá **Forzar HTTPS** si la opción está disponible.

## 4. Probar antes de dar por terminado

Abrí tu dominio en el celular y comprobá:

- [ ] El menú lleva a Inicio, Servicios, Marcas, Nosotros y Contacto.
- [ ] El botón flotante de WhatsApp abre chat al número configurado.
- [ ] **Llamar al local** marca al `11 5124-9133`.
- [ ] El mapa muestra Lavalle 91, Tristán Suárez.
- [ ] El formulario de contacto abre WhatsApp con el mensaje armado.
- [ ] Instagram abre `@suarezoil_`.

## 5. Cambiar el número de WhatsApp después

Editá un solo archivo:

- **`js/main.js`** → variable `WHATSAPP_NUMBER` (formato internacional sin `+`, ejemplo: `5491151249133`).

Subí de nuevo `js/main.js` a `public_html/js/` reemplazando el anterior.

## 6. Dominio comprado en otro proveedor

Si el dominio no está en Hostinger:

1. En hPanel copiá los **nameservers** de Hostinger.
2. En el panel de tu registrador de dominio, pegá esos nameservers.
3. La propagación puede tardar hasta 24–48 horas.

## 7. Dejar de usar el sitio de Wix

Cuando el nuevo sitio funcione bien, podés dejar de compartir el enlace de Wix. No hay migración automática: simplemente usás tu dominio nuevo como dirección oficial.
