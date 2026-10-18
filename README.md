# Macacosas — prototipo académico de sitio web

Landing page responsive para presentar una primera propuesta de vitrina digital de Macacosas en el curso de Ingeniería de Software.

## Cómo verla

1. Abre la URL de GitHub Pages publicada en **Settings → Pages**.
2. Para ejecución local, abre `index.html` en Chrome, Firefox o Edge.
3. Prueba el menú, filtros, tarjetas y enlace a Instagram.

No necesita instalar Node ni levantar un servidor; es HTML, CSS y JavaScript nativos.

## Qué funciona

- Diseño móvil y escritorio.
- Navegación por secciones y menú móvil.
- Filtro funcional de 6 tarjetas conceptuales.
- Modal para ver la idea de cada tarjeta.
- Botones de contacto que llevan al Instagram indicado.
- Ilustraciones SVG de respaldo integradas en el HTML si las fotografías no cargan.
- Soporte de navegación por teclado, textos alternativos y reducción de movimiento.

## Importante: qué es provisional

- **No es un sitio oficial ni una tienda real.** Es una propuesta preliminar de diseño para revisar con la clienta.
- **Los productos de ejemplo no son un inventario real.** Los nombres, descripciones, filtros y textos comerciales son ilustrativos.
- **Las fotografías NO proceden de Instagram de Macacosas.** El sitio usa fotografías de referencia descargadas por el navegador desde Pexels y dibujos SVG locales como respaldo. No deben presentarse como trabajos de Macarena.
- **No se inventaron precios, stock, envíos, medios de pago, WhatsApp ni ingredientes.** La venta se remite al perfil de Instagram conocido.
- El logotipo tipográfico propuesto es provisional: se reemplazará por el logo original o el que apruebe Macarena.
- El sitio no tiene base de datos, carrito, autenticación, checkout ni integración automática con Instagram.

## Información pública que orientó la propuesta

- Instagram: https://www.instagram.com/macacosas._/
- Resultados públicos indexados de Instagram mencionan velitas, regalos aromáticos y actividades en ferias.
- Publicaciones municipales registran a Macacosas entre los emprendimientos seleccionados para ferias de Las Condes.

## Fotos de referencia (Pexels)

Estas imágenes se muestran solo como **referencias visuales**, no como fotos de la marca:

- https://www.pexels.com/photo/jar-of-aromatic-candle-with-small-bottle-of-essential-oil-arranged-on-table-6738809/
- https://www.pexels.com/photo/scented-candle-in-a-glass-jar-on-the-wooden-table-5499310/
- https://www.pexels.com/photo/decorative-shapes-of-candles-11622095/
- https://www.pexels.com/photo/a-candle-near-dried-flowers-6755744/
- https://www.pexels.com/photo/candles-with-flowers-in-pastel-shades-18481413/
- https://www.pexels.com/photo/white-and-beige-cubes-10842090/
- https://www.pexels.com/photo/person-making-artisan-candles-7233956/
- https://www.pexels.com/photo/person-making-artisan-candles-7233960/

Comprueba las licencias y permisos antes de publicar contenidos y sustituye las fotos por el material de Macarena con autorización.

## Preguntas clave para levantar requisitos

- ¿Qué espera conseguir con una web: visibilidad, catálogo, pedidos, cotizaciones, tienda online o reservas para eventos?
- ¿Qué productos y categorías realmente vende? ¿Hay personalizados, lotes o regalos para empresas?
- ¿Tiene logo, paleta de colores, fotos autorizadas, textos y precios?
- ¿Por qué canal llegan las ventas hoy? ¿Quiere WhatsApp, formulario, carrito o pago online?
- ¿Cuáles son las condiciones de entrega, tiempos de producción, cambios y despacho?
- ¿Quién actualizará fotos, productos, disponibilidad y precios?

## Editar el prototipo

- Marca, estructura y textos: `index.html`.
- Estilos, variables de color y breakpoints: `styles.css`.
- Catálogo de la ventana emergente, filtros y comportamiento: `script.js`.
- Ilustraciones SVG de respaldo: codificadas en `data-fallback` de `index.html` para evitar rutas rotas.
- Las URLs de imágenes de Pexels están en los atributos `src` del HTML; reemplázalas cuando tengas fotografías de la clienta.